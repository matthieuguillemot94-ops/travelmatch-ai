import { useEffect, useMemo, useRef, useState } from 'react'
import { destinations, getItinerary, weatherForDate, userProfile } from '../data/mockData.js'
import Icon from '../components/Icon.jsx'

function buildContext({ quiz, confirmedTrip, destinationId, transport }) {
  const destination = destinations.find((d) => d.id === destinationId) || null
  const itin = destination ? getItinerary(destination, quiz?.nights, quiz) : null
  const weather = destination ? weatherForDate(destination, quiz?.startDate, quiz?.endDate) : null
  return { destination, itin, weather }
}

function greeting({ destination, confirmedTrip }) {
  const firstName = userProfile.name.split(' ')[0]
  if (confirmedTrip) {
    return `Bonjour ${firstName} — votre voyage à ${confirmedTrip.city} est validé, départ ${
      confirmedTrip.departureDate === 'Dates à définir' ? '(dates à définir)' : `le ${confirmedTrip.departureDate}`
    }. Posez-moi une question sur le budget, le transport ou votre itinéraire jour par jour.`
  }
  if (destination) {
    return `Bonjour ${firstName} — vous explorez ${destination.city} en ce moment. Je peux vous détailler le budget, le transport ou l'itinéraire généré, ou vous aider à comparer avec une autre destination.`
  }
  return `Bonjour ${firstName} — dites-moi ce que vous cherchez (ambiance, budget, durée) et je vous propose des destinations, ou allez dans Voyager pour lancer une recherche guidée.`
}

function suggestionsFor({ destination, confirmedTrip }) {
  if (confirmedTrip || destination) {
    return ['Résume mon itinéraire', 'Quel est mon budget ?', 'Comment y aller ?', 'Quelle météo prévoir ?']
  }
  return ['Trouve-moi une destination pour un week-end de 3 jours', 'Je veux éviter la foule, une idée ?', 'Ajuste mon budget à 800€']
}

function buildReply(text, ctx) {
  const q = text.toLowerCase()
  const { quiz, confirmedTrip, destination, itin, weather, transport } = ctx

  if (!destination && !confirmedTrip) {
    if (/budget/.test(q)) {
      const match = q.match(/(\d{2,5})\s*€?/)
      if (match) return `Noté, je cible désormais un budget autour de ${match[1]} € pour vos prochaines recommandations. Allez dans Voyager pour relancer la recherche avec ce critère.`
      return `Votre budget actuel dans Voyager est fixé à ${quiz?.budget?.toLocaleString('fr-FR') || '—'} €. Vous pouvez l'ajuster directement depuis l'onglet Voyager, ou me dire un montant ("ajuste mon budget à 800€").`
    }
    if (/foule|calme|tranquille/.test(q)) {
      return "Pour éviter la foule je privilégie les destinations hors des grands pôles touristiques et les périodes creuses — allez dans Voyager, l'ambiance « Se ressourcer » filtre déjà dans ce sens."
    }
    if (/week-?end|3 jours|court séjour/.test(q)) {
      return "Pour un format court, visez une destination à moins de 3h de trajet : plusieurs villes européennes proches de Paris s'y prêtent bien. Direction l'onglet Voyager pour affiner par durée."
    }
    return "Je n'ai pas encore de destination à analyser pour vous. Allez dans l'onglet Voyager pour compléter vos envies, puis revenez me poser vos questions sur le voyage choisi."
  }

  if (/résume|résumé|itinéraire|planning|jour par jour/.test(q) && itin) {
    const firstDay = itin.days[0]
    return `Votre séjour à ${destination.city} dure ${itin.days.length} jour${itin.days.length > 1 ? 's' : ''}, pour un budget total estimé à ${itin.totalBudget.toLocaleString('fr-FR')} €. Jour 1 : ${firstDay.items.map((i) => i.label).join(', ')}. Retrouvez le détail complet dans l'onglet Itinéraire.`
  }
  if (/budget|coût|prix|cher/.test(q) && itin) {
    const lines = itin.spentBreakdown.map((b) => `${b.label} ${b.amount} €`).join(', ')
    return `Budget total estimé pour ${destination.city} : ${itin.totalBudget.toLocaleString('fr-FR')} € (${lines}).`
  }
  if (/transport|vol|avion|train|bus|comment y aller|voiture/.test(q)) {
    if (transport) {
      return `Vous partez en ${transport.mode?.toLowerCase()} avec ${transport.name}, ${transport.stops === 0 ? 'trajet direct' : 'avec une escale'}, ${transport.duration}, pour ${transport.price} € aller-retour.`
    }
    return `Aucun transport n'est encore sélectionné. Ouvrez la fiche de ${destination?.city || 'votre destination'} dans Voyager, section « Comment y aller », pour choisir un mode de transport.`
  }
  if (/météo|temps qu'il fait|climat/.test(q) && weather) {
    return `À ${destination.city}, prévoir ${weather.temp} (min ${weather.tempMin}, max ${weather.tempMax}), précipitations ${weather.precipitation.toLowerCase()}. Saison : ${weather.season}.`
  }
  if (/valid|confirm/.test(q)) {
    return confirmedTrip
      ? `Votre voyage à ${confirmedTrip.city} est déjà validé — vous pouvez le modifier depuis l'onglet Itinéraire si besoin.`
      : "Votre itinéraire n'est pas encore validé. Ouvrez l'onglet Itinéraire et appuyez sur « Valider mon voyage » quand vous êtes prêt·e."
  }
  if (/bonjour|salut|hello|coucou/.test(q)) {
    return greeting(ctx)
  }
  return `Je peux vous renseigner sur le budget, le transport, la météo ou le programme jour par jour de ${destination?.city || 'votre voyage'}. Que voulez-vous savoir ?`
}

export default function AssistantScreen({ quiz, confirmedTrip, destinationId, transport }) {
  const ctxBase = useMemo(() => buildContext({ quiz, confirmedTrip, destinationId, transport }), [quiz, confirmedTrip, destinationId, transport])
  const ctx = { quiz, confirmedTrip, transport, ...ctxBase }

  const [messages, setMessages] = useState(() => [{ role: 'ai', text: greeting(ctx) }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)
  const lastContextKey = useRef(destinationId)

  useEffect(() => {
    if (lastContextKey.current !== destinationId) {
      lastContextKey.current = destinationId
      setMessages((m) => [...m, { role: 'ai', text: greeting(ctx) }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinationId])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const send = (text) => {
    const content = text ?? input
    if (!content.trim()) return
    setMessages((m) => [...m, { role: 'user', text: content }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      const reply = buildReply(content, ctx)
      setMessages((m) => [...m, { role: 'ai', text: reply }])
      setTyping(false)
    }, 700)
  }

  const suggestions = suggestionsFor(ctx)

  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <div className="flex items-center gap-2.5 px-6 pt-3 pb-3 border-b border-ink/[0.06] shrink-0">
        <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#2F5D50,#4FA98A)' }}>
          <Icon name="sparkle" className="w-[18px] h-[18px] text-paper" />
        </div>
        <div>
          <p className="text-[14px] font-medium text-ink">Assistant TravelMatch</p>
          <p className="text-[11.5px] text-mint flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-mint inline-block" /> En ligne
          </p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar px-5 py-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed ${
                m.role === 'user' ? 'bg-ink text-paper rounded-br-md' : 'bg-white border border-ink/[0.06] text-ink/85 rounded-bl-md'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="bg-white border border-ink/[0.06] rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-stone/60 animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-stone/60 animate-pulse [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-stone/60 animate-pulse [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </div>

      <div className="shrink-0 px-5 pb-1">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="shrink-0 text-[12px] text-pine bg-pine-100 px-3 py-1.5 rounded-full whitespace-nowrap"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="shrink-0 px-5 pb-20 pt-1 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Écrivez à votre assistant…"
          className="flex-1 rounded-full border border-ink/10 bg-white px-4 py-3 text-[13.5px] text-ink placeholder:text-stone/60 focus:outline-none focus:border-ink/25"
        />
        <button onClick={() => send()} className="w-11 h-11 rounded-full bg-ink flex items-center justify-center shrink-0 active:scale-95 transition-transform">
          <Icon name="send" className="w-4 h-4 text-paper" />
        </button>
      </div>
    </div>
  )
}
