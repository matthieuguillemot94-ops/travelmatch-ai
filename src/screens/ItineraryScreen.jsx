import { useState } from 'react'
import { destinations, getItinerary, DESTINATION_COORDS } from '../data/mockData.js'
import { PrimaryButton } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'
import DayMap, { typeColor } from '../components/DayMap.jsx'

const typeIcon = { stay: 'suitcase', walk: 'peak', food: 'fork', activity: 'sparkle', rest: 'drop' }
const colorMap = { pine: '#2F5D50', gold: '#D9A55C', berry: '#B5495B', mint: '#4FA98A' }

export default function ItineraryScreen({ destinationId, transport, quiz, confirmedTrip, onValidateTrip, onUnvalidateTrip, onGoToVoyager, onBack }) {
  const [activeDay, setActiveDay] = useState(1)

  if (!destinationId) {
    return (
      <div className="h-full w-full bg-paper flex flex-col">
        <div className="px-6 pt-3 pb-4 shrink-0">
          <p className="text-[12px] uppercase tracking-wide text-stone mb-1">Itinéraire généré par l’IA</p>
          <h1 className="font-serif text-[22px] text-ink leading-tight">Votre itinéraire</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-10 text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-ink/5 flex items-center justify-center">
            <Icon name="route" className="w-7 h-7 text-stone" strokeWidth={1.6} />
          </div>
          <p className="text-[14px] text-ink/70 leading-relaxed">
            Aucun itinéraire pour l’instant. Complétez vos envies et vos dates dans l’onglet Voyager pour en générer un.
          </p>
          <PrimaryButton onClick={onGoToVoyager} icon="compass">Aller dans Voyager</PrimaryButton>
        </div>
      </div>
    )
  }

  const d = destinations.find((x) => x.id === destinationId) ?? destinations[0]
  const itin = getItinerary(d, quiz?.nights, quiz)
  const safeActiveDay = itin.days.some((x) => x.day === activeDay) ? activeDay : 1
  const day = itin.days.find((x) => x.day === safeActiveDay)

  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <div className="px-6 pt-3 pb-4 shrink-0">
        {!confirmedTrip && (
          <button onClick={onBack} className="w-9 h-9 -ml-1.5 rounded-full bg-ink/5 flex items-center justify-center mb-3">
            <Icon name="arrow-left" className="w-4.5 h-4.5 text-ink" />
          </button>
        )}
        <div className="flex items-center justify-between mb-1">
          <p className="text-[12px] uppercase tracking-wide text-stone">Itinéraire généré par l’IA</p>
          {confirmedTrip && (
            <span className="flex items-center gap-1 text-[11px] font-medium text-pine bg-pine-100 px-2.5 py-1 rounded-full">
              <Icon name="check" className="w-3 h-3" strokeWidth={2.4} /> Validé
            </span>
          )}
        </div>
        <h1 className="font-serif text-[22px] text-ink leading-tight">{d.city} · {itin.days.length} jour{itin.days.length > 1 ? 's' : ''}</h1>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-48">
        {transport && (
          <div className="rounded-2xl bg-white border border-ink/[0.06] p-3.5 mb-5">
            <p className="text-[12px] uppercase tracking-wide text-stone mb-2.5">Comment y aller</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pine-100 flex items-center justify-center shrink-0">
                <Icon name={transport.icon || 'send'} className="w-4.5 h-4.5 text-pine" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13.5px] font-medium text-ink truncate">{transport.mode} · {transport.name}</p>
                <p className="text-[11.5px] text-stone">
                  {transport.stops === 0 ? 'Direct' : `1 escale · ${transport.stopCity}`} · {transport.duration}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-mono tabular text-[15px] font-semibold text-ink leading-tight">{transport.price} €</p>
                <p className="text-[10px] text-stone leading-tight">aller-retour</p>
              </div>
            </div>
            {transport.url && (
              <a
                href={transport.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 pt-3 border-t border-ink/[0.06] flex items-center justify-center gap-1.5 text-[12.5px] font-medium text-pine"
              >
                Voir la réservation
                <Icon name="externalLink" className="w-3 h-3" strokeWidth={1.8} />
              </a>
            )}
          </div>
        )}

        <div className="rounded-2xl bg-white border border-ink/[0.06] p-4 mb-5">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-[12px] uppercase tracking-wide text-stone">Budget total estimé</span>
            <span className="font-mono tabular text-[18px] font-semibold text-ink">{itin.totalBudget.toLocaleString('fr-FR')} €</span>
          </div>
          <div className="h-2.5 rounded-full overflow-hidden flex mb-3">
            {itin.spentBreakdown.map((b) => (
              <div key={b.label} style={{ width: `${(b.amount / itin.totalBudget) * 100}%`, background: colorMap[b.color] }} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-y-1.5 gap-x-3">
            {itin.spentBreakdown.map((b) => (
              <div key={b.label} className="flex items-center gap-1.5 text-[12px] text-ink/70">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: colorMap[b.color] }} />
                {b.label} <span className="font-mono tabular ml-auto">{b.amount} €</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mb-5 overflow-x-auto no-scrollbar -mx-6 px-6">
          {itin.days.map((dd) => (
            <button
              key={dd.day}
              onClick={() => setActiveDay(dd.day)}
              className={`shrink-0 px-3.5 py-2 rounded-full text-[12.5px] font-medium border ${
                safeActiveDay === dd.day ? 'bg-ink text-paper border-ink' : 'bg-white text-ink/70 border-ink/10'
              }`}
            >
              Jour {dd.day}
            </button>
          ))}
        </div>

        <div className="relative h-44 rounded-2xl overflow-hidden border border-ink/[0.06] mb-6">
          <DayMap
            city={d.city}
            items={day.items}
            cityCoords={DESTINATION_COORDS[d.id]}
            dayKey={`${d.id}-${safeActiveDay}`}
            className="w-full h-full"
          />
          <span className="absolute top-2 right-3 text-[10.5px] text-stone bg-white/80 px-2 py-0.5 rounded-full pointer-events-none">Lieux du jour {safeActiveDay}</span>
        </div>

        <div className="flex items-baseline justify-between mb-4">
          <h2 className="font-serif text-[17px] text-ink">{day.title}</h2>
          {day.date && <span className="text-[12px] text-stone">{day.date}</span>}
        </div>
        <div className="relative pl-8">
          <div className="absolute left-[9px] top-1.5 bottom-1.5 w-px bg-ink/10" />
          <div className="space-y-5">
            {day.items.map((item, i) => {
              const Wrapper = item.url ? 'a' : 'div'
              const wrapperProps = item.url ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' } : {}
              const color = typeColor[item.type] || '#2F5D50'
              return (
                <Wrapper key={i} {...wrapperProps} className="relative block">
                  <div
                    className="absolute -left-8 top-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-paper"
                    style={{ background: color }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-[11.5px] font-mono tabular text-stone mb-0.5">{item.time}</p>
                  <div className="flex items-center gap-2">
                    <Icon name={typeIcon[item.type]} className="w-4 h-4 text-pine shrink-0" />
                    <p className={`text-[13.5px] text-ink font-medium leading-snug ${item.url ? 'underline underline-offset-2 decoration-ink/20' : ''}`}>
                      {item.label}
                    </p>
                    {item.url && <Icon name="externalLink" className="w-3 h-3 text-stone shrink-0" strokeWidth={1.8} />}
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[74px] left-0 right-0 z-40 px-6 pb-3 pt-4 bg-gradient-to-t from-paper via-paper to-transparent">
        {confirmedTrip ? (
          <div className="space-y-2">
            <PrimaryButton disabled icon="check" className="bg-pine">Voyage validé</PrimaryButton>
            <button onClick={onUnvalidateTrip} className="w-full text-center text-[12.5px] text-stone underline underline-offset-2">
              Modifier ce voyage
            </button>
          </div>
        ) : (
          <PrimaryButton onClick={onValidateTrip} icon="shield">Valider mon voyage</PrimaryButton>
        )}
      </div>
    </div>
  )
}
