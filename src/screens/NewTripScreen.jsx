import { moods, whenOptions, groupOptions, dashboardTrip, userProfile } from '../data/mockData.js'
import { Chip, PrimaryButton } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'

export default function NewTripScreen({ quiz, setQuiz, onOpenProfile, onOpenDashboard, onFinish }) {
  const update = (patch) => setQuiz((q) => ({ ...q, ...patch }))
  const toggleMood = (m) => update({ mood: quiz.mood.includes(m) ? quiz.mood.filter((i) => i !== m) : [...quiz.mood, m] })
  const firstName = userProfile.name.split(' ')[0]
  const canContinue = quiz.mood.length >= 1

  return (
    <div className="h-full w-full bg-paper flex flex-col relative">
      <div className="flex items-center justify-between px-6 pt-4 pb-2 shrink-0">
        <div>
          <p className="text-[12px] uppercase tracking-wide text-stone mb-1">Bon retour</p>
          <h1 className="font-serif text-[22px] text-ink leading-tight">{firstName}</h1>
        </div>
        <button onClick={onOpenProfile} className="w-10 h-10 rounded-full shrink-0" style={{ background: 'linear-gradient(135deg,#2F5D50,#4FA98A)' }} />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-28 space-y-7">
        <button
          onClick={onOpenDashboard}
          className="w-full flex items-center gap-3 rounded-2xl bg-ink text-paper p-3.5 text-left active:scale-[0.99] transition-transform"
        >
          <div
            className="w-12 h-12 rounded-xl shrink-0 grain relative overflow-hidden"
            style={{ background: `url(${dashboardTrip.destination.image}) center/cover no-repeat, ${dashboardTrip.destination.gradient}` }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-[11.5px] text-paper/60">Votre voyage à venir</p>
            <p className="text-[13.5px] font-medium truncate">{dashboardTrip.destination.city} · dans {dashboardTrip.daysLeft} jours</p>
          </div>
          <Icon name="chevronRight" className="w-4 h-4 text-paper/60 shrink-0" />
        </button>

        <div>
          <h2 className="font-serif text-[19px] text-ink mb-1">Une nouvelle envie de voyage ?</h2>
          <p className="text-[13px] text-stone leading-relaxed">Ajustez vos critères, l’IA recalcule vos recommandations à la volée.</p>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Envie du moment</label>
          <div className="flex flex-wrap gap-2">
            {moods.map((m) => (
              <Chip key={m} label={m} selected={quiz.mood.includes(m)} onClick={() => toggleMood(m)} />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Quand souhaitez-vous partir ?</label>
          <div className="flex flex-wrap gap-2">
            {whenOptions.map((w) => (
              <Chip key={w} label={w} selected={quiz.when === w} onClick={() => update({ when: w })} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-[12px] font-medium text-ink/70 uppercase tracking-wide">Budget</label>
            <span className="font-mono tabular text-[15px] font-semibold text-ink">{quiz.budget.toLocaleString('fr-FR')} €</span>
          </div>
          <input
            type="range"
            min="300"
            max="15000"
            step="100"
            value={quiz.budget}
            onChange={(e) => update({ budget: Number(e.target.value) })}
            className="w-full accent-ink mb-1"
          />
          <div className="flex justify-between text-[11px] text-stone">
            <span>300 €</span>
            <span>15 000 €</span>
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Nombre de nuits souhaitées</label>
          <div className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white px-4 py-3">
            <span className="text-[13.5px] text-ink">Durée du séjour</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => update({ nights: Math.max(1, quiz.nights - 1) })}
                className="w-8 h-8 rounded-full bg-ink/5 flex items-center justify-center text-ink"
              >
                <Icon name="minus" className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
              <span className="w-14 text-center font-mono tabular text-[15px] font-semibold text-ink">{quiz.nights} nuits</span>
              <button
                onClick={() => update({ nights: Math.min(30, quiz.nights + 1) })}
                className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center"
              >
                <Icon name="plus" className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Avec qui</label>
          <div className="flex flex-wrap gap-2">
            {groupOptions.map((g) => (
              <Chip key={g.id} label={g.label} selected={quiz.group === g.id} onClick={() => update({ group: g.id })} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-4 bg-gradient-to-t from-paper via-paper to-transparent">
        <PrimaryButton onClick={onFinish} disabled={!canContinue} icon="sparkle">
          Voir mes recommandations
        </PrimaryButton>
      </div>
    </div>
  )
}
