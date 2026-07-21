import {
  moods,
  groupOptions,
  comfortLevels,
  departureCities,
  userProfile,
  maxDistanceOptions,
  riskToleranceOptions,
  vaccineToleranceOptions,
  experienceTypeOptions,
} from '../data/mockData.js'
import { Chip, PrimaryButton } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'
import Calendar from '../components/Calendar.jsx'

function IconTile({ label, icon, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 shrink-0 w-[78px] rounded-2xl border py-3 px-2 transition-colors ${
        selected ? 'bg-ink border-ink' : 'bg-white border-ink/10'
      }`}
    >
      <Icon name={icon} className={`w-5 h-5 ${selected ? 'text-gold-400' : 'text-pine'}`} />
      <span className={`text-[10.5px] leading-tight text-center ${selected ? 'text-paper' : 'text-ink'}`}>{label}</span>
    </button>
  )
}

function BudgetRow({ label, icon, value, suffix, min, max, step, onChange }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-1.5 text-[12.5px] text-ink">
          <Icon name={icon} className="w-4 h-4 text-pine" />
          {label}
        </span>
        <span className="font-mono tabular text-[13px] font-medium text-ink">
          {value.toLocaleString('fr-FR')} € {suffix && <span className="text-stone font-sans font-normal">{suffix}</span>}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full accent-pine"
      />
    </div>
  )
}

function recomputeBudget(q) {
  return q.budgetTransport + q.budgetStay * q.nights + q.budgetDaily * q.nights
}

const DEFAULT_TRAVELERS = { solo: 1, couple: 2, famille: 4, amis: 4 }

export default function NewTripScreen({ quiz, setQuiz, confirmedTrip, onOpenProfile, onOpenDashboard, onFinish }) {
  const update = (patch) => setQuiz((q) => ({ ...q, ...patch }))
  const toggleMood = (m) => update({ mood: quiz.mood.includes(m) ? quiz.mood.filter((i) => i !== m) : [...quiz.mood, m] })

  const updateBudgetPart = (key) => (e) => {
    const value = Number(e.target.value)
    setQuiz((q) => {
      const next = { ...q, [key]: value }
      next.budget = recomputeBudget(next)
      return next
    })
  }

  const updateTravelers = (delta) =>
    setQuiz((q) => ({ ...q, travelers: Math.max(1, Math.min(q.group === 'solo' ? 1 : 10, q.travelers + delta)) }))

  const updateNights = (nights) => {
    setQuiz((q) => {
      const next = { ...q, nights }
      next.budget = recomputeBudget(next)
      return next
    })
  }

  const updateDates = (patch) => {
    setQuiz((q) => {
      const next = { ...q, ...patch }
      if (next.startDate && next.endDate) {
        next.nights = Math.max(1, Math.round((new Date(next.endDate) - new Date(next.startDate)) / 86400000))
      }
      next.budget = recomputeBudget(next)
      return next
    })
  }

  const firstName = userProfile.name.split(' ')[0]
  const canContinue = quiz.mood.length >= 1 && !!quiz.group && !!quiz.comfort && !!quiz.departureCity && !!quiz.startDate && !!quiz.endDate

  return (
    <div className="h-full w-full bg-paper flex flex-col relative">
      <div className="flex items-center justify-between px-6 pt-4 pb-2 shrink-0">
        <div>
          <p className="text-[12px] uppercase tracking-wide text-stone mb-1">Bon retour</p>
          <h1 className="font-serif text-[22px] text-ink leading-tight">{firstName}</h1>
        </div>
        <button onClick={onOpenProfile} className="w-10 h-10 rounded-full shrink-0" style={{ background: 'linear-gradient(135deg,#2F5D50,#4FA98A)' }} />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-56 space-y-7">
        {confirmedTrip && (
          <button
            onClick={onOpenDashboard}
            className="w-full flex items-center gap-3 rounded-2xl bg-ink text-paper p-3.5 text-left active:scale-[0.99] transition-transform"
          >
            <div
              className="w-12 h-12 rounded-xl shrink-0 grain relative overflow-hidden"
              style={{ background: `url(${confirmedTrip.image}) center/cover no-repeat, ${confirmedTrip.gradient}` }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[11.5px] text-paper/60">Votre voyage à venir</p>
              <p className="text-[13.5px] font-medium truncate">{confirmedTrip.city} · dans {confirmedTrip.daysLeft} jours</p>
            </div>
            <Icon name="chevronRight" className="w-4 h-4 text-paper/60 shrink-0" />
          </button>
        )}

        <div>
          <h2 className="font-serif text-[19px] text-ink mb-1">Une nouvelle envie de voyage ?</h2>
          <p className="text-[13px] text-stone leading-relaxed">Ajustez vos critères, l’IA recalcule vos recommandations à la volée.</p>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-ink/70 mb-2.5 uppercase tracking-wide">Envie du moment</label>
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar -mx-6 px-6">
            {moods.map((m) => (
              <IconTile key={m.label} label={m.label} icon={m.icon} selected={quiz.mood.includes(m.label)} onClick={() => toggleMood(m.label)} />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-ink/70 mb-2.5 uppercase tracking-wide">Avec qui</label>
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar -mx-6 px-6">
            {groupOptions.map((g) => (
              <IconTile
                key={g.id}
                label={g.label}
                icon={g.icon}
                selected={quiz.group === g.id}
                onClick={() => update({ group: g.id, travelers: DEFAULT_TRAVELERS[g.id] || quiz.travelers })}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Nombre de voyageurs</label>
          <div className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white px-4 py-3">
            <span className="text-[13.5px] text-ink">Voyageurs</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => updateTravelers(-1)}
                disabled={quiz.group === 'solo'}
                className="w-8 h-8 rounded-full bg-ink/5 flex items-center justify-center text-ink disabled:opacity-30"
              >
                <Icon name="minus" className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
              <span className="w-24 text-center font-mono tabular text-[15px] font-semibold text-ink">
                {quiz.travelers} voyageur{quiz.travelers > 1 ? 's' : ''}
              </span>
              <button
                onClick={() => updateTravelers(1)}
                disabled={quiz.group === 'solo'}
                className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center disabled:opacity-30"
              >
                <Icon name="plus" className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Niveau de confort</label>
          <div className="flex flex-wrap gap-2">
            {comfortLevels.map((c) => (
              <Chip key={c.id} label={c.label} icon={c.icon} selected={quiz.comfort === c.id} onClick={() => update({ comfort: c.id })} />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-ink/70 mb-2.5 uppercase tracking-wide">Ville de départ</label>
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar -mx-6 px-6">
            {departureCities.map((c) => (
              <IconTile key={c.id} label={c.label} icon="pin" selected={quiz.departureCity === c.id} onClick={() => update({ departureCity: c.id })} />
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-1.5 text-[12px] font-medium text-ink/70 mb-2.5 uppercase tracking-wide">
            <Icon name="calendar" className="w-3.5 h-3.5" />
            Quand souhaitez-vous partir ?
          </label>
          <Calendar startDate={quiz.startDate} endDate={quiz.endDate} onChange={updateDates} />
        </div>

        <div>
          <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Nombre de nuits souhaitées</label>
          <div className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white px-4 py-3">
            <span className="text-[13.5px] text-ink">Durée du séjour</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => updateNights(Math.max(1, quiz.nights - 1))}
                className="w-8 h-8 rounded-full bg-ink/5 flex items-center justify-center text-ink"
              >
                <Icon name="minus" className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
              <span className="w-14 text-center font-mono tabular text-[15px] font-semibold text-ink">{quiz.nights} nuits</span>
              <button
                onClick={() => updateNights(Math.min(30, quiz.nights + 1))}
                className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center"
              >
                <Icon name="plus" className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-3">
            <label className="text-[12px] font-medium text-ink/70 uppercase tracking-wide">
              Budget du voyage <span className="normal-case font-normal text-stone">· par personne</span>
            </label>
            <span className="font-mono tabular text-[18px] font-semibold text-ink">{quiz.budget.toLocaleString('fr-FR')} €</span>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white p-4 space-y-4">
            <BudgetRow
              label="Transport"
              icon="send"
              value={quiz.budgetTransport}
              min={100}
              max={4000}
              step={50}
              onChange={updateBudgetPart('budgetTransport')}
            />
            <div>
              <BudgetRow
                label="Hébergement"
                icon="bed"
                value={quiz.budgetStay}
                suffix="/ nuit"
                min={20}
                max={400}
                step={5}
                onChange={updateBudgetPart('budgetStay')}
              />
              <p className="text-[11.5px] text-stone mt-1.5">
                {quiz.budgetStay.toLocaleString('fr-FR')} € × {quiz.nights} nuits = {(quiz.budgetStay * quiz.nights).toLocaleString('fr-FR')} €
              </p>
            </div>
            <div>
              <BudgetRow
                label="Frais quotidiens / jour (repas, activités…)"
                icon="fork"
                value={quiz.budgetDaily}
                min={15}
                max={300}
                step={5}
                onChange={updateBudgetPart('budgetDaily')}
              />
              <p className="text-[11.5px] text-stone mt-1.5">
                {quiz.budgetDaily.toLocaleString('fr-FR')} € × {quiz.nights} nuits = {(quiz.budgetDaily * quiz.nights).toLocaleString('fr-FR')} €
              </p>
            </div>
            <div className="flex items-center justify-between pt-3.5 border-t border-ink/10">
              <span className="text-[12.5px] text-ink/70">
                Budget total · {quiz.travelers} voyageur{quiz.travelers > 1 ? 's' : ''}
              </span>
              <span className="font-mono tabular text-[16px] font-semibold text-ink">
                {(quiz.budget * quiz.travelers).toLocaleString('fr-FR')} €
              </span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-ink/70 mb-1 uppercase tracking-wide">Filtres avancés</label>
          <p className="text-[12px] text-stone leading-relaxed mb-3">
            Nous n’affichons que les destinations qui correspondent vraiment à vos envies et à votre profil. Affinez
            encore avec ces critères.
          </p>
          <label className="block text-[11px] font-medium text-ink/60 mb-1.5 uppercase tracking-wide">Distance de vol</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {maxDistanceOptions.map((o) => (
              <Chip key={o.id} label={o.label} selected={quiz.maxDistance === o.id} onClick={() => update({ maxDistance: o.id })} />
            ))}
          </div>
          <label className="block text-[11px] font-medium text-ink/60 mb-1.5 uppercase tracking-wide">Niveau de risque accepté</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {riskToleranceOptions.map((o) => (
              <Chip key={o.id} label={o.label} selected={quiz.riskTolerance === o.id} onClick={() => update({ riskTolerance: o.id })} />
            ))}
          </div>
          <label className="block text-[11px] font-medium text-ink/60 mb-1.5 uppercase tracking-wide">Contraintes de vaccination</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {vaccineToleranceOptions.map((o) => (
              <Chip key={o.id} label={o.label} selected={quiz.vaccineTolerance === o.id} onClick={() => update({ vaccineTolerance: o.id })} />
            ))}
          </div>
          <label className="block text-[11px] font-medium text-ink/60 mb-1.5 uppercase tracking-wide">Type d’expérience</label>
          <div className="flex flex-wrap gap-2">
            {experienceTypeOptions.map((o) => (
              <Chip key={o.id} label={o.label} selected={quiz.experienceType === o.id} onClick={() => update({ experienceType: o.id })} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[74px] left-0 right-0 z-40 px-6 pb-3 pt-3.5 bg-paper shadow-[0_-8px_20px_-8px_rgba(18,33,29,0.12)]">
        {!canContinue && (
          <p className="text-[11.5px] text-stone text-center mb-2">
            Complétez vos envies et vos dates de voyage pour continuer
          </p>
        )}
        <PrimaryButton onClick={onFinish} disabled={!canContinue} icon="sparkle">
          Voir mes recommandations
        </PrimaryButton>
      </div>
    </div>
  )
}
