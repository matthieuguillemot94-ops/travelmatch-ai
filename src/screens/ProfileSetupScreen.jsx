import { useState } from 'react'
import { travelerTypes, COUNTRIES } from '../data/mockData.js'
import { PrimaryButton, ScreenHeader } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'

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
  const [countryQuery, setCountryQuery] = useState('')

  const toggleCountry = (code) => {
    const visited = profile.visitedCountries || []
    update({ visitedCountries: visited.includes(code) ? visited.filter((c) => c !== code) : [...visited, code] })
  }

  const filteredCountries = countryQuery.trim()
    ? COUNTRIES.filter((c) => c.name.toLowerCase().includes(countryQuery.trim().toLowerCase()))
    : COUNTRIES

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

        <div className="mt-7">
          <div className="flex items-baseline justify-between mb-2">
            <label className="text-[12px] font-medium text-ink/70 uppercase tracking-wide">Pays déjà visités</label>
            {profile.visitedCountries?.length > 0 && (
              <span className="text-[12px] text-stone">{profile.visitedCountries.length} sélectionné{profile.visitedCountries.length > 1 ? 's' : ''}</span>
            )}
          </div>
          <div className="relative mb-3">
            <Icon name="pin" className="w-4 h-4 text-stone absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              value={countryQuery}
              onChange={(e) => setCountryQuery(e.target.value)}
              placeholder="Rechercher un pays…"
              className="w-full rounded-2xl border border-ink/10 bg-white pl-10 pr-4 py-3 text-[14px] text-ink placeholder:text-stone/60 focus:outline-none focus:border-ink/30"
            />
          </div>
          {profile.visitedCountries?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {profile.visitedCountries.map((code) => {
                const c = COUNTRIES.find((x) => x.code === code)
                if (!c) return null
                return (
                  <button
                    key={code}
                    onClick={() => toggleCountry(code)}
                    className="flex items-center gap-1.5 rounded-full bg-ink text-paper text-[12.5px] font-medium px-3 py-1.5"
                  >
                    <span>{c.flag}</span>
                    {c.name}
                    <Icon name="minus" className="w-2.5 h-2.5" strokeWidth={2.4} />
                  </button>
                )
              })}
            </div>
          )}
          <div className="rounded-2xl border border-ink/10 bg-white max-h-52 overflow-y-auto no-scrollbar divide-y divide-ink/[0.05]">
            {filteredCountries.slice(0, 40).map((c) => {
              const selected = profile.visitedCountries?.includes(c.code)
              return (
                <button
                  key={c.code}
                  onClick={() => toggleCountry(c.code)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-left"
                >
                  <span className="text-[17px] leading-none">{c.flag}</span>
                  <span className="flex-1 text-[13.5px] text-ink">{c.name}</span>
                  {selected && <Icon name="check" className="w-4 h-4 text-pine" strokeWidth={2.2} />}
                </button>
              )
            })}
            {filteredCountries.length === 0 && (
              <p className="px-4 py-4 text-[13px] text-stone text-center">Aucun pays trouvé</p>
            )}
          </div>
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
