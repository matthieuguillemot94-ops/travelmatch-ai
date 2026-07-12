import { destinations, activities } from '../data/mockData.js'
import ScoreRing from '../components/ScoreRing.jsx'
import { PrimaryButton, Tag } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'

export default function DestinationScreen({ destinationId, onBack, onOpenActivity, onGenerateItinerary }) {
  const d = destinations.find((x) => x.id === destinationId) ?? destinations[0]
  const localActivities = activities.filter((a) => a.destinationId === d.id)

  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="relative h-64 grain" style={{ background: `url(${d.image}) center/cover no-repeat, ${d.gradient}` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-3">
            <button onClick={onBack} className="w-9 h-9 rounded-full bg-black/25 backdrop-blur flex items-center justify-center text-white">
              <Icon name="arrow-left" className="w-4.5 h-4.5" />
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

          <div className="grid grid-cols-3 gap-2.5 mb-7">
            <div className="rounded-2xl bg-white border border-ink/[0.06] p-3">
              <Icon name="clock" className="w-4 h-4 text-pine mb-1.5" />
              <p className="text-[13px] font-medium text-ink">{d.duration}</p>
              <p className="text-[11px] text-stone">Durée conseillée</p>
            </div>
            <div className="rounded-2xl bg-white border border-ink/[0.06] p-3">
              <Icon name="coin" className="w-4 h-4 text-pine mb-1.5" />
              <p className="text-[13px] font-medium text-ink font-mono tabular">{d.budgetEstimate} €</p>
              <p className="text-[11px] text-stone">Budget estimé</p>
            </div>
            <div className="rounded-2xl bg-white border border-ink/[0.06] p-3">
              <Icon name="pin" className="w-4 h-4 text-pine mb-1.5" />
              <p className="text-[13px] font-medium text-ink">{d.weather.temp}</p>
              <p className="text-[11px] text-stone">{d.weather.season}</p>
            </div>
          </div>

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

      <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-4 bg-gradient-to-t from-paper via-paper to-transparent">
        <PrimaryButton onClick={onGenerateItinerary} icon="route">Générer mon itinéraire</PrimaryButton>
      </div>
    </div>
  )
}
