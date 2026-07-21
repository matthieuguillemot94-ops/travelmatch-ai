import { useEffect, useMemo, useState } from 'react'
import { matchDestinations, recommendedDuration, destinations, FILTER_LABELS } from '../data/mockData.js'
import ScoreRing from '../components/ScoreRing.jsx'
import { Tag } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'

function SkeletonCard() {
  return (
    <div className="rounded-3xl bg-white border border-ink/[0.06] overflow-hidden">
      <div className="h-40 bg-ink/[0.06] animate-pulse" />
      <div className="p-4 space-y-2.5">
        <div className="h-3.5 w-2/3 rounded bg-ink/[0.08] animate-pulse" />
        <div className="h-3 w-1/3 rounded bg-ink/[0.06] animate-pulse" />
      </div>
    </div>
  )
}

export default function ResultsScreen({ profile, quiz, onOpenDestination, onBack }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  const { results, relaxedFilters } = useMemo(() => matchDestinations(quiz, profile), [quiz, profile])
  const matched = results.slice(0, 12)

  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <div className="px-6 pt-3 pb-4 shrink-0">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-ink/5 flex items-center justify-center mb-3">
          <Icon name="arrow-left" className="w-[18px] h-[18px] text-ink" />
        </button>
        <p className="text-[12px] uppercase tracking-wide text-stone mb-1">Pour {profile.name || 'vous'}</p>
        <h1 className="font-serif text-[23px] text-ink leading-tight">Vos destinations les plus compatibles</h1>
        <p className="text-[12px] text-stone mt-1">{matched.length} destinations sur {destinations.length}, triées selon vos envies</p>
      </div>

      {!loading && relaxedFilters.length > 0 && (
        <div className="mx-6 mb-3 shrink-0 flex gap-2.5 rounded-2xl bg-gold-400/15 border border-gold-400/30 p-3">
          <Icon name="alertTriangle" className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" strokeWidth={1.8} />
          <p className="text-[12px] text-ink/75 leading-relaxed">
            Aucune destination ne correspondait à tous vos filtres avancés : {relaxedFilters.map((k) => FILTER_LABELS[k]).join(', ')} n’
            {relaxedFilters.length > 1 ? 'ont' : 'a'} pas pu être respecté{relaxedFilters.length > 1 ? 's' : ''} pour vous montrer assez de résultats.
          </p>
        </div>
      )}

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-28">
        {loading ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-1 text-pine text-[13px]">
              <Icon name="sparkle" className="w-4 h-4" />
              <span>L’IA analyse votre profil…</span>
            </div>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <div className="space-y-4 animate-fade-up">
            {matched.map((d, i) => (
              <button
                key={d.id}
                onClick={() => onOpenDestination(d.id)}
                className="w-full text-left rounded-3xl bg-white border border-ink/[0.06] overflow-hidden shadow-card active:scale-[0.99] transition-transform"
              >
                <div
                  className="relative h-40 grain"
                  style={{ background: `url(${d.image}) center/cover no-repeat, ${d.gradient}` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-medium bg-black/25 backdrop-blur text-white px-2.5 py-1 rounded-full">
                      {d.overBudget ? 'Au-delà de votre budget' : i === 0 ? 'Meilleure correspondance' : d.tags[0]}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white rounded-full shadow-card">
                    <ScoreRing score={d.score} size={52} stroke={4.5} />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <h3 className="font-serif text-[18px] text-ink">{d.city}</h3>
                    <span className="text-[12.5px] text-stone">{d.country}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {d.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <div className="flex items-center gap-3 text-[12.5px] text-stone">
                    <span className="flex items-center gap-1"><Icon name="clock" className="w-3.5 h-3.5" />{recommendedDuration(d, quiz?.departureCity)}</span>
                    <span className={`flex items-center gap-1 font-mono tabular ${d.overBudget ? 'text-berry' : ''}`}><Icon name="coin" className="w-3.5 h-3.5" />~{d.budgetEstimate} €</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
