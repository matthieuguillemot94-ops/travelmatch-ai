import { useState } from 'react'
import { PERSONALITY_QUESTIONS, computeArchetype } from '../data/mockData.js'
import { PrimaryButton, ScreenHeader } from '../components/ui.jsx'

function ChoiceOption({ opt, onSelect }) {
  return (
    <button
      onClick={() => onSelect(opt.id)}
      className="w-full flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 text-left active:scale-[0.98] transition-transform"
    >
      <span className="text-[26px] leading-none shrink-0">{opt.emoji}</span>
      <span className="flex-1 min-w-0">
        <span className="block text-[14.5px] font-medium text-ink">{opt.label}</span>
        {opt.hint && <span className="block text-[12px] text-stone mt-0.5">{opt.hint}</span>}
      </span>
    </button>
  )
}

export default function PersonalityScreen({ profile, setProfile, onBack, onFinish }) {
  const [step, setStep] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const question = PERSONALITY_QUESTIONS[step]
  const total = PERSONALITY_QUESTIONS.length

  const update = (patch) => setProfile((p) => ({ ...p, ...patch }))

  const advance = () => {
    if (step < total - 1) setStep(step + 1)
    else setRevealed(true)
  }

  const goBack = () => {
    if (revealed) return setRevealed(false)
    if (step === 0) return onBack()
    setStep(step - 1)
  }

  const selectChoice = (id) => {
    update({ [question.id]: id })
    advance()
  }

  const emojiSelected = profile.vibeEmojis || []
  const toggleEmoji = (emoji) => {
    if (emojiSelected.includes(emoji)) update({ vibeEmojis: emojiSelected.filter((e) => e !== emoji) })
    else if (emojiSelected.length < question.pickCount) update({ vibeEmojis: [...emojiSelected, emoji] })
  }

  if (revealed) {
    const archetype = computeArchetype(profile)
    return (
      <div className="h-full w-full bg-paper flex flex-col">
        <ScreenHeader title="Portrait voyageur" onBack={goBack} />
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center animate-fade-up">
          <p className="text-[12px] uppercase tracking-wide text-stone mb-4">Votre portrait voyageur</p>
          <div className="text-[64px] mb-4">{archetype.emoji}</div>
          <h1 className="font-serif text-[26px] text-ink mb-2.5">{archetype.title}</h1>
          <p className="text-[13.5px] text-stone leading-relaxed max-w-[260px]">
            Un profil taillé pour des recommandations qui vous ressemblent. Prêt·e pour votre premier voyage ?
          </p>
        </div>
        <div className="px-6 pb-6 pt-4">
          <PrimaryButton onClick={onFinish} icon="sparkle">C’est parti</PrimaryButton>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <ScreenHeader title="Portrait voyageur" onBack={goBack} />

      <div className="px-6 pt-1 pb-2 shrink-0">
        <div className="h-1 rounded-full bg-ink/10 overflow-hidden">
          <div className="h-full bg-ink rounded-full transition-all" style={{ width: `${((step + 1) / total) * 100}%` }} />
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-[11px] text-stone uppercase tracking-wide">
            Question {step + 1} / {total}
          </p>
          <button onClick={advance} className="text-[11px] text-stone underline underline-offset-2">
            Passer
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-3 pb-8" key={question.id}>
        <div className="animate-fade-up">
          <h2 className="font-serif text-[21px] text-ink mb-1.5">{question.title}</h2>
          {question.subtitle && <p className="text-[13px] text-stone mb-5">{question.subtitle}</p>}
          {!question.subtitle && <div className="mb-5" />}

          {question.type === 'choice' && (
            <div className="flex flex-col gap-2.5">
              {question.options.map((opt) => (
                <ChoiceOption key={opt.id} opt={opt} onSelect={selectChoice} />
              ))}
            </div>
          )}

          {question.type === 'emojiGrid' && (
            <>
              <p className="text-[12px] text-stone mb-4 -mt-3">
                {emojiSelected.length}/{question.pickCount} sélectionné{emojiSelected.length > 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-4 gap-2.5 mb-6">
                {question.options.map((opt) => {
                  const selected = emojiSelected.includes(opt.emoji)
                  return (
                    <button
                      key={opt.emoji}
                      onClick={() => toggleEmoji(opt.emoji)}
                      className={`h-24 flex flex-col items-center justify-center gap-1.5 rounded-2xl border p-2 text-center transition-colors ${
                        selected ? 'bg-ink border-ink' : 'bg-white border-ink/10'
                      }`}
                    >
                      <span className="text-[26px] leading-none">{opt.emoji}</span>
                      <span className={`text-[10.5px] leading-tight ${selected ? 'text-paper' : 'text-stone'}`}>{opt.label}</span>
                    </button>
                  )
                })}
              </div>
              <PrimaryButton onClick={advance} disabled={emojiSelected.length !== question.pickCount} icon="arrow-right">
                Continuer
              </PrimaryButton>
            </>
          )}

          {question.type === 'text' && (
            <>
              <input
                value={profile.dreamCountry || ''}
                onChange={(e) => update({ dreamCountry: e.target.value })}
                placeholder={question.placeholder}
                className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-stone/60 mb-6 focus:outline-none focus:border-ink/30"
              />
              <PrimaryButton onClick={advance} icon="arrow-right">
                Continuer
              </PrimaryButton>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
