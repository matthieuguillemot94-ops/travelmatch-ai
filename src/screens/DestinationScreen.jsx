import { useState } from 'react'
import { destinations, activities, getTransportOptions, getStayOptions, flightsFromCity, weatherForDate, minNightsFor, recommendedDuration, departureCities, DESTINATION_COORDS } from '../data/mockData.js'
import ScoreRing from '../components/ScoreRing.jsx'
import { PrimaryButton, Tag } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'
import RouteMap from '../components/RouteMap.jsx'
import LiveWeather from '../components/LiveWeather.jsx'
import PracticalInfo from '../components/PracticalInfo.jsx'

const SOURCE_TONE = { Airbnb: 'berry', 'Booking.com': 'pine', Vrbo: 'mint' }
const BADGE_TONE_CLASSES = {
  pine: 'bg-pine-100 text-pine-700',
  gold: 'bg-gold-400/20 text-gold-600',
  berry: 'bg-berry-100 text-berry',
  mint: 'bg-mint-100 text-mint',
}
const TRANSPORT_MODES = [
  { key: 'flights', label: 'Avion', icon: 'send', prefix: 'Vols' },
  { key: 'trains', label: 'Train', icon: 'train', prefix: 'Trajets en train' },
  { key: 'buses', label: 'Bus', icon: 'bus', prefix: 'Trajets en bus' },
  { key: 'cars', label: 'Covoiturage', icon: 'users', prefix: 'Covoiturages' },
  { key: 'personalCars', label: 'Voiture perso', icon: 'car', prefix: 'Trajet en voiture' },
]

function CarrierBadge({ code, tone }) {
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold tracking-tight ${BADGE_TONE_CLASSES[tone]}`}>
      {code}
    </div>
  )
}

export default function DestinationScreen({ destinationId, quiz, onBack, onOpenActivity, onGenerateItinerary }) {
  const d = destinations.find((x) => x.id === destinationId) ?? destinations[0]
  const localActivities = activities.filter((a) => a.destinationId === d.id)
  const departureCity = quiz?.departureCity || flightsFromCity
  const weather = weatherForDate(d, quiz?.startDate, quiz?.endDate)
  const minNights = minNightsFor(d)
  const nightsTooShort = quiz?.nights && quiz.nights < minNights
  const duration = recommendedDuration(d, departureCity)
  const transportByMode = getTransportOptions(d, { startDate: quiz?.startDate, departureCity })
  const availableModes = TRANSPORT_MODES.filter((m) => transportByMode[m.key]?.length)
  const [activeMode, setActiveMode] = useState('flights')
  const safeActiveMode = availableModes.some((m) => m.key === activeMode) ? activeMode : availableModes[0]?.key
  const activeModeInfo = availableModes.find((m) => m.key === safeActiveMode) || availableModes[0]
  const transportOptions = [...(transportByMode[safeActiveMode] || [])].sort((a, b) => a.price - b.price)
  const stayOptions = getStayOptions(d)
  const originCoords = departureCities.find((c) => c.id === departureCity)
  const destCoords = DESTINATION_COORDS[d.id]

  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="relative h-64 grain" style={{ background: `url(${d.image}) center/cover no-repeat, ${d.gradient}` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-3">
            <button onClick={onBack} className="w-9 h-9 rounded-full bg-black/25 backdrop-blur flex items-center justify-center text-white">
              <Icon name="arrow-left" className="w-[18px] h-[18px]" />
            </button>
            <button className="w-9 h-9 rounded-full bg-black/25 backdrop-blur flex items-center justify-center text-white">
              <Icon name="star" className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute -bottom-8 right-5 bg-white rounded-full p-1 shadow-lift">
            <ScoreRing score={d.score} size={72} stroke={5.5} />
          </div>
        </div>

        <div className="px-6 pt-11">
          <p className="text-[12px] uppercase tracking-wide text-stone mb-1">{d.country}</p>
          <h1 className="font-serif text-[26px] text-ink leading-tight mb-2.5">{d.city}</h1>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {d.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
          <p className="text-[14px] text-ink/75 leading-relaxed mb-6">{d.description}</p>

          <div className="grid grid-cols-2 gap-2.5 mb-2.5">
            <div className="rounded-2xl bg-white border border-ink/[0.06] p-3">
              <Icon name="clock" className="w-4 h-4 text-pine mb-1.5" />
              <p className="text-[13px] font-medium text-ink">{duration}</p>
              <p className="text-[11px] text-stone">Durée conseillée</p>
            </div>
            <div className="rounded-2xl bg-white border border-ink/[0.06] p-3">
              <Icon name="coin" className="w-4 h-4 text-pine mb-1.5" />
              <p className="text-[13px] font-medium text-ink font-mono tabular">{d.budgetEstimate} €</p>
              <p className="text-[11px] text-stone">Budget estimé</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-ink/[0.06] p-3.5 mb-7">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-mint-100 flex items-center justify-center shrink-0">
                <Icon name="sun" className="w-[18px] h-[18px] text-pine" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-medium text-ink">
                  {weather.temp} <span className="text-stone font-normal text-[12.5px]">· {weather.season}{weather.typical && ' · type'}</span>
                </p>
                <p className="text-[11px] text-stone">
                  {weather.typical
                    ? 'Moyennes saisonnières typiques'
                    : `Prévision moyenne pour ${new Date(quiz.startDate).toLocaleDateString('fr-FR', { month: 'long' })}`}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-[12px] text-ink/70 mt-3 pt-3 border-t border-ink/[0.06]">
              <span>Min {weather.tempMin} · Max {weather.tempMax}</span>
              <span className="flex items-center gap-1">
                <Icon name="drop" className="w-3 h-3 text-pine" />
                Précipitations {weather.precipitation.toLowerCase()}
              </span>
            </div>
            {weather.note && <p className="text-[11.5px] text-stone mt-2">{weather.note}</p>}
            <div className="mt-3 pt-3 border-t border-ink/[0.06]">
              <LiveWeather coords={DESTINATION_COORDS[d.id]} />
            </div>
          </div>

          {nightsTooShort && (
            <div className="flex items-start gap-2.5 rounded-2xl bg-gold-400/15 border border-gold-400/40 p-3.5 mb-7">
              <Icon name="clock" className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <p className="text-[12.5px] text-ink/80 leading-relaxed">
                Avec {quiz.nights} nuit{quiz.nights > 1 ? 's' : ''}, le trajet depuis {departureCity} laisse peu de temps sur place.
                On recommande au moins {minNights} nuits pour {d.country}.
              </p>
            </div>
          )}

          <PracticalInfo country={d.country} />

          <h2 className="font-serif text-[17px] text-ink mb-3">Pourquoi cette destination</h2>
          <div className="space-y-2.5 mb-8">
            {d.matchReasons.map((r) => (
              <div key={r.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[13px] text-ink/80">{r.label}</span>
                  <span className="text-[12px] font-mono tabular text-stone">{r.weight}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-ink/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-mint" style={{ width: `${r.weight * 2.2}%` }} />
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-[17px] text-ink mb-1">Comment y aller</h2>
          <p className="text-[12px] text-stone mb-3">
            {activeModeInfo?.prefix} depuis {departureCity}
            {quiz?.startDate && ` · ${new Date(quiz.startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}`}
          </p>

          {availableModes.length > 1 && (
            <div className="flex gap-2 mb-3.5 overflow-x-auto no-scrollbar">
              {availableModes.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setActiveMode(m.key)}
                  className={`flex items-center gap-1.5 shrink-0 rounded-full border px-3.5 py-2 text-[12.5px] font-medium transition-colors ${
                    safeActiveMode === m.key ? 'bg-ink border-ink text-paper' : 'bg-white border-ink/10 text-ink/70'
                  }`}
                >
                  <Icon name={m.icon} className="w-3.5 h-3.5" />
                  {m.label}
                </button>
              ))}
            </div>
          )}

          {safeActiveMode === 'personalCars' && originCoords && destCoords && (
            <RouteMap
              origin={originCoords}
              destination={destCoords}
              className="rounded-2xl overflow-hidden border border-ink/[0.06] mb-3.5 h-52"
            />
          )}

          <div className="space-y-2.5 mb-8">
            {transportOptions.map((t, i) => {
              const Wrapper = t.url ? 'a' : 'div'
              const wrapperProps = t.url ? { href: t.url, target: '_blank', rel: 'noopener noreferrer' } : {}
              return (
                <Wrapper
                  key={i}
                  {...wrapperProps}
                  className={`flex items-center gap-3 rounded-2xl bg-white border border-ink/[0.06] p-3.5 ${t.url ? 'active:scale-[0.98] transition-transform' : ''}`}
                >
                  <CarrierBadge code={t.code} tone={t.tone} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <p className="text-[13.5px] font-medium text-ink truncate">{t.name}</p>
                      {i === 0 && <Tag tone="gold">Meilleur prix</Tag>}
                    </div>
                    <p className="text-[11.5px] text-stone">
                      {t.stops === 0 ? 'Direct' : `1 escale · ${t.stopCity}`} · {t.duration}{t.note ? ` · ${t.note}` : ''}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="text-right">
                      <p className="font-mono tabular text-[15px] font-semibold text-ink leading-tight">{t.price} €</p>
                      <p className="text-[10px] text-stone leading-tight">aller-retour</p>
                    </div>
                    {t.url && <Icon name="externalLink" className="w-3.5 h-3.5 text-stone" strokeWidth={1.8} />}
                  </div>
                </Wrapper>
              )
            })}
          </div>

          <h2 className="font-serif text-[17px] text-ink mb-3">Où loger</h2>
        </div>

        <div className="flex gap-3.5 overflow-x-auto no-scrollbar px-6 pb-2 mb-8">
          {stayOptions.map((s, i) => {
            const Wrapper = s.url ? 'a' : 'div'
            const wrapperProps = s.url ? { href: s.url, target: '_blank', rel: 'noopener noreferrer' } : {}
            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                className={`w-[190px] shrink-0 rounded-2xl bg-white border border-ink/[0.06] p-3.5 shadow-card ${s.url ? 'active:scale-[0.98] transition-transform' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <Tag tone={SOURCE_TONE[s.source] || 'pine'}>{s.source}</Tag>
                  {s.url && <Icon name="externalLink" className="w-3 h-3 text-stone" strokeWidth={1.8} />}
                </div>
                <p className="text-[13px] font-medium text-ink leading-snug mt-2 mb-1">{s.title}</p>
                <p className="text-[11px] text-stone mb-2.5">{s.type}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11.5px] text-ink/70">
                    <Icon name="star" className="w-3 h-3 text-gold-600" />
                    {s.rating}
                  </span>
                  <span className="font-mono tabular text-[13px] font-semibold text-ink">
                    {s.pricePerNight} € <span className="text-[10px] text-stone font-sans font-normal">/nuit</span>
                  </span>
                </div>
              </Wrapper>
            )
          })}
        </div>

        <div className="px-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-serif text-[17px] text-ink">Expériences locales</h2>
            <span className="text-[12px] text-stone">{localActivities.length} suggestions</span>
          </div>
        </div>

        <div className="flex gap-3.5 overflow-x-auto no-scrollbar px-6 pb-2">
          {localActivities.map((a) => (
            <button
              key={a.id}
              onClick={() => onOpenActivity(a.id)}
              className="w-[168px] shrink-0 text-left rounded-2xl bg-white border border-ink/[0.06] overflow-hidden shadow-card active:scale-[0.98] transition-transform"
            >
              <div className="relative h-24" style={{ background: a.gradient }}>
                {a.offbeat && (
                  <span className="absolute top-2 left-2 text-[10px] font-medium bg-white/90 text-ink px-2 py-0.5 rounded-full">
                    Hors des sentiers battus
                  </span>
                )}
              </div>
              <div className="p-3">
                <p className="text-[13px] font-medium text-ink leading-snug mb-1">{a.title}</p>
                <p className="text-[11.5px] text-stone">{a.duration} · {a.priceLabel}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[74px] left-0 right-0 z-40 px-6 pb-3 pt-4 bg-gradient-to-t from-paper via-paper to-transparent">
        <PrimaryButton
          onClick={() =>
            onGenerateItinerary(
              transportOptions[0] ? { mode: activeModeInfo?.label, icon: activeModeInfo?.icon, ...transportOptions[0] } : null
            )
          }
          icon="route"
        >
          Générer mon itinéraire
        </PrimaryButton>
      </div>
    </div>
  )
}
