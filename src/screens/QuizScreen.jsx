import { useState } from 'react'
import {
  interestCategories,
  groupOptions,
  comfortLevels,
  durations,
  moods,
  maxDistanceOptions,
  riskToleranceOptions,
  vaccineToleranceOptions,
  experienceTypeOptions,
} from '../data/mockData.js'
import { Chip, PrimaryButton, ScreenHeader } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'

export default function QuizScreen({ quiz, setQuiz, onBack, onFinish }) {
  const [step, setStep] = useState(0)
  const update = (patch) => setQuiz((q) => ({ ...q, ...patch }))

  const toggleInterest = (id) => {
    update({
      interests: quiz.interests.includes(id) ? quiz.interests.filter((i) => i !== id) : [...quiz.interests, id],
    })
  }
  const toggleMood = (m) => {
    update({ mood: quiz.mood.includes(m) ? quiz.mood.filter((i) => i !== m) : [...quiz.mood, m] })
  }

  const canNext = [quiz.interests.length >= 2, true, quiz.mood.length >= 1, true][step]

  const goBack = () => (step === 0 ? onBack() : setStep(step - 1))
  const goNext = () => (step === 3 ? onFinish() : setStep(step + 1))
  const stepLabels = ['Centres d’intérêt', 'Budget & format', 'Envie du moment', 'Filtres avancés']

  return (
    <div className="h-full w-full bg-paper flex flex-col relative">
      <ScreenHeader title="Votre prochain voyage" onBack={goBack} />

      <div className="px-6 pt-1 pb-2 shrink-0">
        <div className="flex gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-ink' : 'bg-ink/10'}`} />
          ))}
        </div>
        <p className="text-[11px] text-stone mt-2 uppercase tracking-wide">
          Pour ce voyage · {stepLabels[step]}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-3 pb-32">
        {step === 0 && (
          <div className="animate-fade-up">
            <h2 className="font-serif text-[21px] text-ink mb-1.5">Qu’est-ce qui vous attire ?</h2>
            <p className="text-[13.5px] text-stone mb-6">Choisissez au moins deux thèmes.</p>
            <div className="grid grid-cols-2 gap-2.5">
              {interestCategories.map((c) => {
                const selected = quiz.interests.includes(c.id)
                return (
                  <button
                    key={c.id}
                    onClick={() => toggleInterest(c.id)}
                    className={`flex flex-col items-start gap-3 rounded-2xl border p-3.5 text-left transition-colors ${
                      selected ? 'bg-ink border-ink' : 'bg-white border-ink/10'
                    }`}
                  >
                    <Icon name={c.icon} className={`w-5 h-5 ${selected ? 'text-gold-400' : 'text-pine'}`} />
                    <span className={`text-[13px] leading-snug font-medium ${selected ? 'text-paper' : 'text-ink'}`}>{c.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="animate-fade-up">
            <h2 className="font-serif text-[21px] text-ink mb-1.5">Quel format de voyage ?</h2>
            <p className="text-[13.5px] text-stone mb-6">Ajustez selon vos disponibilités.</p>

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
            <div className="flex justify-between text-[11px] text-stone mb-6">
              <span>300 €</span>
              <span>15 000 €</span>
            </div>

            <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Durée</label>
            <div className="flex flex-wrap gap-2 mb-6">
              {durations.map((d) => (
                <Chip key={d} label={d} selected={quiz.duration === d} onClick={() => update({ duration: d })} />
              ))}
            </div>

            <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Avec qui</label>
            <div className="flex flex-wrap gap-2 mb-6">
              {groupOptions.map((g) => (
                <Chip key={g.id} label={g.label} icon={g.icon} selected={quiz.group === g.id} onClick={() => update({ group: g.id })} />
              ))}
            </div>

            <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Niveau de confort</label>
            <div className="flex flex-wrap gap-2">
              {comfortLevels.map((c) => (
                <Chip key={c.id} label={c.label} icon={c.icon} selected={quiz.comfort === c.id} onClick={() => update({ comfort: c.id })} />
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-up">
            <h2 className="font-serif text-[21px] text-ink mb-1.5">Et là, tout de suite ?</h2>
            <p className="text-[13.5px] text-stone mb-6">Votre envie du moment affine le classement final.</p>
            <div className="flex flex-wrap gap-2">
              {moods.map((m) => (
                <Chip key={m.label} label={m.label} icon={m.icon} selected={quiz.mood.includes(m.label)} onClick={() => toggleMood(m.label)} />
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-up">
            <h2 className="font-serif text-[21px] text-ink mb-1.5">Filtres avancés</h2>
            <p className="text-[13.5px] text-stone mb-6">
              Nous n’affichons que les destinations qui correspondent vraiment à vos envies et à votre profil. Affinez
              encore avec ces critères.
            </p>

            <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Distance de vol</label>
            <div className="flex flex-col gap-2 mb-6">
              {maxDistanceOptions.map((o) => (
                <button
                  key={o.id}
                  onClick={() => update({ maxDistance: o.id })}
                  className={`flex items-center justify-between text-left rounded-2xl border px-4 py-3 transition-colors ${
                    quiz.maxDistance === o.id ? 'bg-ink border-ink' : 'bg-white border-ink/10'
                  }`}
                >
                  <span>
                    <span className={`block text-[13.5px] font-medium ${quiz.maxDistance === o.id ? 'text-paper' : 'text-ink'}`}>{o.label}</span>
                    <span className={`block text-[11.5px] leading-snug ${quiz.maxDistance === o.id ? 'text-paper/60' : 'text-stone'}`}>{o.hint}</span>
                  </span>
                  {quiz.maxDistance === o.id && <Icon name="check" className="w-4 h-4 text-gold-400 shrink-0" strokeWidth={2.2} />}
                </button>
              ))}
            </div>

            <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Niveau de risque accepté</label>
            <div className="flex flex-wrap gap-2 mb-6">
              {riskToleranceOptions.map((o) => (
                <Chip key={o.id} label={o.label} selected={quiz.riskTolerance === o.id} onClick={() => update({ riskTolerance: o.id })} />
              ))}
            </div>

            <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Contraintes de vaccination</label>
            <div className="flex flex-wrap gap-2 mb-6">
              {vaccineToleranceOptions.map((o) => (
                <Chip key={o.id} label={o.label} selected={quiz.vaccineTolerance === o.id} onClick={() => update({ vaccineTolerance: o.id })} />
              ))}
            </div>

            <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Type d’expérience</label>
            <div className="flex flex-wrap gap-2">
              {experienceTypeOptions.map((o) => (
                <Chip key={o.id} label={o.label} selected={quiz.experienceType === o.id} onClick={() => update({ experienceType: o.id })} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-4 bg-gradient-to-t from-paper via-paper to-transparent">
        <PrimaryButton onClick={goNext} disabled={!canNext} icon={step === 3 ? 'sparkle' : 'arrow-right'}>
          {step === 3 ? 'Voir mes recommandations' : 'Continuer'}
        </PrimaryButton>
      </div>
    </div>
  )
}
