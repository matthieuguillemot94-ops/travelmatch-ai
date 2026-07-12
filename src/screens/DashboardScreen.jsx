import { useState } from 'react'
import { dashboardTrip } from '../data/mockData.js'
import { PrimaryButton } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'

export default function DashboardScreen({ confirmedTrip, onOpenItinerary, onOpenAssistant, onOpenNewTrip }) {
  const [checklist, setChecklist] = useState(dashboardTrip.checklist)
  const done = checklist.filter((c) => c.done).length
  const toggle = (i) => setChecklist((c) => c.map((item, idx) => (idx === i ? { ...item, done: !item.done } : item)))

  const trip = confirmedTrip || null
  const reserved = 1180
  const total = trip ? trip.budgetEstimate : dashboardTrip.destination.budgetEstimate

  if (!trip) {
    return (
      <div className="h-full w-full bg-paper flex flex-col">
        <div className="px-6 pt-3 pb-4 shrink-0">
          <p className="text-[12px] uppercase tracking-wide text-stone mb-1">Votre voyage</p>
          <h1 className="font-serif text-[22px] text-ink leading-tight">Rien de prévu pour l’instant</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-8 pb-28 text-center">
          <div className="w-14 h-14 rounded-full bg-pine-100 flex items-center justify-center mb-4">
            <Icon name="suitcase" className="w-6 h-6 text-pine" />
          </div>
          <p className="text-[13.5px] text-stone leading-relaxed mb-6 max-w-[240px]">
            Choisissez vos critères dans Voyager et validez un voyage pour le retrouver ici.
          </p>
          <PrimaryButton onClick={onOpenNewTrip} icon="compass" className="max-w-[220px]">
            Aller dans Voyager
          </PrimaryButton>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <div className="px-6 pt-3 pb-4 shrink-0">
        <p className="text-[12px] uppercase tracking-wide text-stone mb-1">Votre voyage</p>
        <h1 className="font-serif text-[22px] text-ink leading-tight">Ça approche.</h1>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-28 space-y-6">
        <div
          className="relative rounded-3xl overflow-hidden grain shadow-card"
          style={{ background: `url(${trip.image}) center/cover no-repeat, ${trip.gradient}` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="relative z-10 p-5 text-paper">
            <span className="inline-block text-[11px] font-medium bg-black/40 backdrop-blur px-2.5 py-1 rounded-full mb-8">
              J-{trip.daysLeft}
            </span>
            <h2 className="font-serif text-[24px] mb-1">{trip.city}</h2>
            <p className="text-[13px] text-paper/75">{trip.departureDate === 'Dates à définir' ? trip.departureDate : `Départ le ${trip.departureDate}`}</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-ink/[0.06] p-4">
          <div className="flex items-baseline justify-between mb-2.5">
            <span className="text-[12px] uppercase tracking-wide text-stone">Budget réservé</span>
            <span className="font-mono tabular text-[13.5px] text-ink"><span className="font-semibold">{reserved} €</span> / {total} €</span>
          </div>
          <div className="h-2.5 rounded-full bg-ink/[0.06] overflow-hidden">
            <div className="h-full rounded-full bg-gold-500" style={{ width: `${(reserved / total) * 100}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button onClick={onOpenItinerary} className="rounded-2xl bg-white border border-ink/[0.06] p-4 text-left active:scale-[0.98] transition-transform">
            <Icon name="route" className="w-5 h-5 text-pine mb-2" />
            <p className="text-[13px] font-medium text-ink">Voir l’itinéraire</p>
          </button>
          <button onClick={onOpenAssistant} className="rounded-2xl bg-white border border-ink/[0.06] p-4 text-left active:scale-[0.98] transition-transform">
            <Icon name="sparkle" className="w-5 h-5 text-pine mb-2" />
            <p className="text-[13px] font-medium text-ink">Ajuster avec l’IA</p>
          </button>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="font-serif text-[17px] text-ink">Avant le départ</h2>
            <span className="text-[12px] text-stone">{done}/{checklist.length}</span>
          </div>
          <div className="rounded-2xl bg-white border border-ink/[0.06] divide-y divide-ink/[0.06]">
            {checklist.map((item, i) => (
              <button key={item.label} onClick={() => toggle(i)} className="w-full flex items-center gap-3 px-4 py-3.5 text-left">
                <span
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                    item.done ? 'bg-pine border-pine' : 'border-ink/20'
                  }`}
                >
                  {item.done && <Icon name="check" className="w-3 h-3 text-paper" strokeWidth={2.4} />}
                </span>
                <span className={`text-[13.5px] ${item.done ? 'text-stone line-through' : 'text-ink'}`}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
