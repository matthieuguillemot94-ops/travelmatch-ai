import { useState } from 'react'
import { itinerary, destinations } from '../data/mockData.js'
import Icon from '../components/Icon.jsx'

const typeIcon = { stay: 'suitcase', walk: 'peak', food: 'fork', activity: 'sparkle', rest: 'drop' }
const colorMap = { pine: '#2F5D50', gold: '#D9A55C', berry: '#B5495B', mint: '#4FA98A' }

export default function ItineraryScreen() {
  const [activeDay, setActiveDay] = useState(1)
  const d = destinations.find((x) => x.id === itinerary.destinationId)
  const day = itinerary.days.find((x) => x.day === activeDay)

  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <div className="px-6 pt-3 pb-4 shrink-0">
        <p className="text-[12px] uppercase tracking-wide text-stone mb-1">Itinéraire généré par l’IA</p>
        <h1 className="font-serif text-[22px] text-ink leading-tight">{d.city}, {d.duration}</h1>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-28">
        <div className="rounded-2xl bg-white border border-ink/[0.06] p-4 mb-5">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-[12px] uppercase tracking-wide text-stone">Budget total estimé</span>
            <span className="font-mono tabular text-[18px] font-semibold text-ink">{itinerary.totalBudget.toLocaleString('fr-FR')} €</span>
          </div>
          <div className="h-2.5 rounded-full overflow-hidden flex mb-3">
            {itinerary.spentBreakdown.map((b) => (
              <div key={b.label} style={{ width: `${(b.amount / itinerary.totalBudget) * 100}%`, background: colorMap[b.color] }} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-y-1.5 gap-x-3">
            {itinerary.spentBreakdown.map((b) => (
              <div key={b.label} className="flex items-center gap-1.5 text-[12px] text-ink/70">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: colorMap[b.color] }} />
                {b.label} <span className="font-mono tabular ml-auto">{b.amount} €</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-28 rounded-2xl overflow-hidden border border-ink/[0.06] mb-6" style={{ background: '#E4EDE9' }}>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 112">
            <path d="M30 85 C70 40, 120 90, 160 55 S 260 30, 290 60" stroke="#2F5D50" strokeWidth="2" fill="none" strokeDasharray="1 7" strokeLinecap="round" />
            <circle cx="30" cy="85" r="5" fill="#B5495B" />
            <circle cx="160" cy="55" r="5" fill="#D9A55C" />
            <circle cx="290" cy="60" r="5" fill="#4FA98A" />
          </svg>
          <span className="absolute top-2 right-3 text-[10.5px] text-stone bg-white/80 px-2 py-0.5 rounded-full">Trajet suggéré</span>
        </div>

        <div className="flex gap-2 mb-5">
          {itinerary.days.map((dd) => (
            <button
              key={dd.day}
              onClick={() => setActiveDay(dd.day)}
              className={`px-3.5 py-2 rounded-full text-[12.5px] font-medium border ${
                activeDay === dd.day ? 'bg-ink text-paper border-ink' : 'bg-white text-ink/70 border-ink/10'
              }`}
            >
              Jour {dd.day}
            </button>
          ))}
        </div>

        <h2 className="font-serif text-[17px] text-ink mb-4">{day.title}</h2>
        <div className="relative pl-6">
          <div className="absolute left-[7px] top-1.5 bottom-1.5 w-px bg-ink/10" />
          <div className="space-y-5">
            {day.items.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-6 top-0.5 w-3.5 h-3.5 rounded-full bg-paper border-2 border-pine" />
                <p className="text-[11.5px] font-mono tabular text-stone mb-0.5">{item.time}</p>
                <div className="flex items-center gap-2">
                  <Icon name={typeIcon[item.type]} className="w-4 h-4 text-pine shrink-0" />
                  <p className="text-[13.5px] text-ink font-medium leading-snug">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
