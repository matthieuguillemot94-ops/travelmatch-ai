import { travelerTypes } from '../data/mockData.js'
import { PrimaryButton, ScreenHeader } from '../components/ui.jsx'

const avatarTones = [
  'linear-gradient(135deg,#2F5D50,#4FA98A)',
  'linear-gradient(135deg,#B5495B,#D9A55C)',
  'linear-gradient(135deg,#234238,#8C8574)',
  'linear-gradient(135deg,#C08A3E,#E8B876)',
  'linear-gradient(135deg,#1B332C,#2F5D50)',
  'linear-gradient(135deg,#6E2E3B,#B5495B)',
]

export default function ProfileSetupScreen({ profile, setProfile, onBack, onContinue }) {
  const update = (patch) => setProfile((p) => ({ ...p, ...patch }))

  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <ScreenHeader title="Votre profil" onBack={onBack} />

      <div className="px-6 pt-1 pb-2">
        <div className="flex gap-1.5">
          <div className="h-1 flex-1 rounded-full bg-ink" />
          <div className="h-1 flex-1 rounded-full bg-ink/10" />
        </div>
        <p className="text-[11px] text-stone mt-2 uppercase tracking-wide">Étape 1 sur 2 · Profil</p>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-3 pb-32">
        <p className="text-[13.5px] text-stone leading-relaxed mb-6">
          Ces informations affinent chaque recommandation. Rien n’est partagé publiquement.
        </p>

        <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Prénom</label>
        <input
          value={profile.name}
          onChange={(e) => update({ name: e.target.value })}
          placeholder="Camille"
          className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-stone/60 mb-6 focus:outline-none focus:border-ink/30"
        />

        <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Avatar</label>
        <div className="flex gap-3 mb-7">
          {avatarTones.map((tone, i) => (
            <button
              key={i}
              onClick={() => update({ avatar: i })}
              className="w-11 h-11 rounded-full transition-all"
              style={{
                background: tone,
                outline: profile.avatar === i ? '2.5px solid #12211D' : '2.5px solid transparent',
                outlineOffset: 2,
              }}
            />
          ))}
        </div>

        <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Vous voyagez plutôt en...</label>
        <div className="grid grid-cols-2 gap-2.5">
          {travelerTypes.map((t) => {
            const selected = profile.travelerType === t.id
            return (
              <button
                key={t.id}
                onClick={() => update({ travelerType: t.id })}
                className={`text-left rounded-2xl border p-3.5 transition-colors ${
                  selected ? 'bg-ink border-ink' : 'bg-white border-ink/10'
                }`}
              >
                <p className={`text-[13.5px] font-medium mb-0.5 ${selected ? 'text-paper' : 'text-ink'}`}>{t.label}</p>
                <p className={`text-[11.5px] leading-snug ${selected ? 'text-paper/60' : 'text-stone'}`}>{t.hint}</p>
              </button>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-4 bg-gradient-to-t from-paper via-paper to-transparent">
        <PrimaryButton onClick={onContinue} icon="arrow-right" disabled={!profile.name || !profile.travelerType}>
          Continuer
        </PrimaryButton>
      </div>
    </div>
  )
}
