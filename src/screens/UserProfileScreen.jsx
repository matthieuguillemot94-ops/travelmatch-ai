import { useState } from 'react'
import { userProfile as defaultProfile, COUNTRIES, travelerTypes } from '../data/mockData.js'
import { Tag, PrimaryButton } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'
import WorldMap from '../components/WorldMap.jsx'

const settingsItems = [
  { key: 'notifications', icon: 'bell', label: 'Notifications' },
  { key: 'privacy', icon: 'shield', label: 'Confidentialité & données' },
  { key: 'budget', icon: 'coin', label: 'Préférences de budget' },
  { key: 'editProfile', icon: 'edit', label: 'Modifier le profil de voyage' },
]

const BUDGET_LEVELS = ['Simple · €', 'Confort · €€', 'Premium · €€€']
const INTEREST_OPTIONS = ['Culture', 'Gastronomie', 'Randonnée', 'Photographie', 'Nature', 'Plage', 'Vie nocturne', 'Bien-être', 'Histoire', 'Artisanat']

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-11 h-6 rounded-full shrink-0 transition-colors relative ${checked ? 'bg-pine' : 'bg-ink/15'}`}
    >
      <span
        className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-card transition-transform"
        style={{ transform: checked ? 'translateX(21px)' : 'translateX(2px)' }}
      />
    </button>
  )
}

export default function UserProfileScreen({ onLogout }) {
  const [visitedCountries, setVisitedCountries] = useState(defaultProfile.visitedCountries)
  const [travelerType, setTravelerType] = useState(defaultProfile.travelerType)
  const [interests, setInterests] = useState(defaultProfile.interests)
  const [budgetLevel, setBudgetLevel] = useState(defaultProfile.preferences[0].value)
  const [notifPrefs, setNotifPrefs] = useState({ alerts: true, reminders: true, news: false })
  const [shareData, setShareData] = useState(true)
  const [activeSheet, setActiveSheet] = useState(null)

  const toggleCountry = (code) => {
    setVisitedCountries((v) => (v.includes(code) ? v.filter((c) => c !== code) : [...v, code]))
  }
  const toggleInterest = (label) => {
    setInterests((v) => (v.includes(label) ? v.filter((i) => i !== label) : [...v, label]))
  }

  const preferences = [
    { label: 'Budget habituel', value: budgetLevel },
    ...defaultProfile.preferences.slice(1),
  ]

  const closeSheet = () => setActiveSheet(null)

  return (
    <div className="relative h-full w-full bg-paper flex flex-col">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-28">
        <div className="px-6 pt-5 pb-5 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full shrink-0" style={{ background: 'linear-gradient(135deg,#2F5D50,#4FA98A)' }} />
          <div>
            <h1 className="font-serif text-[20px] text-ink leading-tight">{defaultProfile.name}</h1>
            <p className="text-[12.5px] text-stone">{defaultProfile.handle} · membre depuis {defaultProfile.memberSince}</p>
          </div>
        </div>

        <div className="px-6 grid grid-cols-3 gap-2.5 mb-6">
          {defaultProfile.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white border border-ink/[0.06] py-3.5 text-center">
              <p className="font-mono tabular text-[19px] font-semibold text-ink">{s.value}</p>
              <p className="text-[10.5px] text-stone mt-0.5 leading-snug px-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="px-6 mb-6">
          <div className="rounded-2xl bg-ink text-paper p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="compass" className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="text-[13px] text-paper/60">Profil voyageur</p>
              <p className="text-[14.5px] font-medium">{travelerType}</p>
            </div>
          </div>
        </div>

        <div className="px-6 mb-6">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="font-serif text-[16px] text-ink">Carte du monde</h2>
            <span className="text-[12px] text-stone">{visitedCountries.length} pays visités</span>
          </div>
          <div className="rounded-2xl bg-white border border-ink/[0.06] p-3 mb-3">
            <WorldMap visitedCountries={visitedCountries} className="w-full [&_svg]:w-full [&_svg]:h-auto" />
          </div>
          <p className="text-[11.5px] text-stone mb-2.5">Touchez un pays pour l’ajouter ou le retirer de vos voyages.</p>
          <div className="flex flex-wrap gap-1.5">
            {COUNTRIES.map((c) => {
              const selected = visitedCountries.includes(c.code)
              return (
                <button
                  key={c.code}
                  onClick={() => toggleCountry(c.code)}
                  className={`flex items-center gap-1 text-[11.5px] px-2.5 py-1 rounded-full transition-colors ${
                    selected ? 'bg-mint-100 text-ink' : 'bg-white border border-ink/10 text-ink/60'
                  }`}
                >
                  <span>{c.flag}</span>{c.name}
                </button>
              )
            })}
          </div>
        </div>

        <div className="px-6 mb-6">
          <h2 className="font-serif text-[16px] text-ink mb-3">Centres d’intérêt</h2>
          <div className="flex flex-wrap gap-1.5">
            {interests.map((i) => <Tag key={i} tone="gold">{i}</Tag>)}
          </div>
        </div>

        <div className="px-6 mb-6">
          <h2 className="font-serif text-[16px] text-ink mb-3">Préférences</h2>
          <div className="rounded-2xl bg-white border border-ink/[0.06] divide-y divide-ink/[0.06]">
            {preferences.map((p) => (
              <div key={p.label} className="flex items-center justify-between px-4 py-3.5">
                <span className="text-[13px] text-stone">{p.label}</span>
                <span className="text-[13px] text-ink font-medium">{p.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6">
          <h2 className="font-serif text-[16px] text-ink mb-3">Paramètres</h2>
          <div className="rounded-2xl bg-white border border-ink/[0.06] divide-y divide-ink/[0.06]">
            {settingsItems.map((item) => (
              <button key={item.key} onClick={() => setActiveSheet(item.key)} className="w-full flex items-center gap-3 px-4 py-3.5 text-left">
                <Icon name={item.icon} className="w-[18px] h-[18px] text-pine shrink-0" />
                <span className="text-[13.5px] text-ink flex-1">{item.label}</span>
                <Icon name="chevronRight" className="w-4 h-4 text-stone" />
              </button>
            ))}
            <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3.5 text-left">
              <Icon name="logout" className="w-[18px] h-[18px] text-berry shrink-0" />
              <span className="text-[13.5px] text-berry flex-1">Se déconnecter</span>
            </button>
          </div>
        </div>
      </div>

      {activeSheet && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-ink/40" onClick={closeSheet} />
          <div className="relative bg-paper rounded-t-3xl px-6 pt-3 pb-8 max-h-[85%] overflow-y-auto no-scrollbar shadow-lift">
            <div className="w-10 h-1 rounded-full bg-ink/15 mx-auto mb-5" />

            {activeSheet === 'notifications' && (
              <>
                <h2 className="font-serif text-[18px] text-ink mb-4">Notifications</h2>
                <div className="rounded-2xl bg-white border border-ink/[0.06] divide-y divide-ink/[0.06] mb-6">
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <div className="pr-3">
                      <p className="text-[13.5px] text-ink font-medium">Alertes prix</p>
                      <p className="text-[11.5px] text-stone">Prévenez-moi quand un vol ou séjour suivi baisse de prix</p>
                    </div>
                    <Toggle checked={notifPrefs.alerts} onChange={(v) => setNotifPrefs((p) => ({ ...p, alerts: v }))} />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <div className="pr-3">
                      <p className="text-[13.5px] text-ink font-medium">Rappels de voyage</p>
                      <p className="text-[11.5px] text-stone">Check-list avant départ, documents, embarquement</p>
                    </div>
                    <Toggle checked={notifPrefs.reminders} onChange={(v) => setNotifPrefs((p) => ({ ...p, reminders: v }))} />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <div className="pr-3">
                      <p className="text-[13.5px] text-ink font-medium">Nouveautés IA</p>
                      <p className="text-[11.5px] text-stone">Nouvelles fonctionnalités et suggestions de l’assistant</p>
                    </div>
                    <Toggle checked={notifPrefs.news} onChange={(v) => setNotifPrefs((p) => ({ ...p, news: v }))} />
                  </div>
                </div>
                <PrimaryButton onClick={closeSheet}>Fermer</PrimaryButton>
              </>
            )}

            {activeSheet === 'privacy' && (
              <>
                <h2 className="font-serif text-[18px] text-ink mb-4">Confidentialité & données</h2>
                <div className="rounded-2xl bg-white border border-ink/[0.06] p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="pr-3">
                      <p className="text-[13.5px] text-ink font-medium">Partager mes données</p>
                      <p className="text-[11.5px] text-stone">Utiliser mon historique pour affiner les recommandations IA</p>
                    </div>
                    <Toggle checked={shareData} onChange={setShareData} />
                  </div>
                </div>
                <p className="text-[12px] text-stone leading-relaxed mb-6">
                  Vos données restent liées à ce profil et ne sont jamais revendues à des tiers. Vous pouvez retirer ce
                  consentement à tout moment depuis cet écran.
                </p>
                <PrimaryButton onClick={closeSheet}>Fermer</PrimaryButton>
              </>
            )}

            {activeSheet === 'budget' && (
              <>
                <h2 className="font-serif text-[18px] text-ink mb-4">Préférences de budget</h2>
                <div className="space-y-2 mb-6">
                  {BUDGET_LEVELS.map((level) => (
                    <button
                      key={level}
                      onClick={() => setBudgetLevel(level)}
                      className={`w-full flex items-center justify-between rounded-2xl border px-4 py-3.5 text-left transition-colors ${
                        budgetLevel === level ? 'bg-ink border-ink text-paper' : 'bg-white border-ink/10 text-ink'
                      }`}
                    >
                      <span className="text-[13.5px] font-medium">{level}</span>
                      {budgetLevel === level && <Icon name="check" className="w-4 h-4" strokeWidth={2.2} />}
                    </button>
                  ))}
                </div>
                <PrimaryButton onClick={closeSheet}>Enregistrer</PrimaryButton>
              </>
            )}

            {activeSheet === 'editProfile' && (
              <>
                <h2 className="font-serif text-[18px] text-ink mb-4">Profil de voyage</h2>
                <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Vous voyagez plutôt en...</label>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {travelerTypes.map((t) => {
                    const selected = travelerType === t.label
                    return (
                      <button
                        key={t.id}
                        onClick={() => setTravelerType(t.label)}
                        className={`text-left rounded-2xl border p-3 transition-colors ${selected ? 'bg-ink border-ink' : 'bg-white border-ink/10'}`}
                      >
                        <p className={`text-[12.5px] font-medium mb-0.5 ${selected ? 'text-paper' : 'text-ink'}`}>{t.label}</p>
                        <p className={`text-[10.5px] leading-snug ${selected ? 'text-paper/60' : 'text-stone'}`}>{t.hint}</p>
                      </button>
                    )
                  })}
                </div>
                <label className="block text-[12px] font-medium text-ink/70 mb-2 uppercase tracking-wide">Centres d’intérêt</label>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {INTEREST_OPTIONS.map((i) => (
                    <button
                      key={i}
                      onClick={() => toggleInterest(i)}
                      className={`text-[12.5px] font-medium px-3 py-1.5 rounded-full border transition-colors ${
                        interests.includes(i) ? 'bg-gold-400/20 border-gold-400/40 text-gold-600' : 'bg-white border-ink/10 text-ink/60'
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
                <PrimaryButton onClick={closeSheet}>Enregistrer</PrimaryButton>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
