import { useEffect, useRef, useState } from 'react'
import { chatSeed, chatSuggestions } from '../data/mockData.js'
import Icon from '../components/Icon.jsx'

const fallbackReplies = [
  "Je regarde ça — en croisant votre budget et vos dernières envies, je vous prépare deux options d'ici quelques secondes.",
  'Bonne question. Je peux ajuster votre score de compatibilité en fonction de cette contrainte, voulez-vous que je le fasse ?',
  'Noté. Je mets à jour votre itinéraire en conséquence — vous pouvez le retrouver dans l’onglet Itinéraire.',
]

export default function AssistantScreen() {
  const [messages, setMessages] = useState(chatSeed)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

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
      const reply = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)]
      setMessages((m) => [...m, { role: 'ai', text: reply }])
      setTyping(false)
    }, 1100)
  }

  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <div className="flex items-center gap-2.5 px-6 pt-3 pb-3 border-b border-ink/[0.06] shrink-0">
        <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#2F5D50,#4FA98A)' }}>
          <Icon name="sparkle" className="w-4.5 h-4.5 text-paper" />
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
          {chatSuggestions.map((s) => (
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
