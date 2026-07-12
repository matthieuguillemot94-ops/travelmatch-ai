import { userProfile, COUNTRIES } from '../data/mockData.js'
import { Tag } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'
import WorldMap from '../components/WorldMap.jsx'

const settingsItems = [
  { icon: 'bell', label: 'Notifications' },
  { icon: 'shield', label: 'Confidentialité & données' },
  { icon: 'coin', label: 'Préférences de budget' },
  { icon: 'edit', label: 'Modifier le profil de voyage' },
]

export default function UserProfileScreen() {
  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-28">
        <div className="px-6 pt-5 pb-5 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full shrink-0" style={{ background: 'linear-gradient(135deg,#2F5D50,#4FA98A)' }} />
          <div>
            <h1 className="font-serif text-[20px] text-ink leading-tight">{userProfile.name}</h1>
            <p className="text-[12.5px] text-stone">{userProfile.handle} · membre depuis {userProfile.memberSince}</p>
          </div>
        </div>

        <div className="px-6 grid grid-cols-3 gap-2.5 mb-6">
          {userProfile.stats.map((s) => (
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
              <p className="text-[14.5px] font-medium">{userProfile.travelerType}</p>
            </div>
          </div>
        </div>

        <div className="px-6 mb-6">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="font-serif text-[16px] text-ink">Carte du monde</h2>
            <span className="text-[12px] text-stone">{userProfile.visitedCountries.length} pays visités</span>
          </div>
          <div className="rounded-2xl bg-white border border-ink/[0.06] p-3">
            <WorldMap visitedCountries={userProfile.visitedCountries} className="w-full [&_svg]:w-full [&_svg]:h-auto" />
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {userProfile.visitedCountries.map((code) => {
              const c = COUNTRIES.find((x) => x.code === code)
              if (!c) return null
              return (
                <span key={code} className="flex items-center gap-1 text-[11.5px] text-ink/70 bg-mint-100 px-2.5 py-1 rounded-full">
                  <span>{c.flag}</span>{c.name}
                </span>
              )
            })}
          </div>
        </div>

        <div className="px-6 mb-6">
          <h2 className="font-serif text-[16px] text-ink mb-3">Centres d’intérêt</h2>
          <div className="flex flex-wrap gap-1.5">
            {userProfile.interests.map((i) => <Tag key={i} tone="gold">{i}</Tag>)}
          </div>
        </div>

        <div className="px-6 mb-6">
          <h2 className="font-serif text-[16px] text-ink mb-3">Préférences</h2>
          <div className="rounded-2xl bg-white border border-ink/[0.06] divide-y divide-ink/[0.06]">
            {userProfile.preferences.map((p) => (
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
              <button key={item.label} className="w-full flex items-center gap-3 px-4 py-3.5 text-left">
                <Icon name={item.icon} className="w-4.5 h-4.5 text-pine shrink-0" />
                <span className="text-[13.5px] text-ink flex-1">{item.label}</span>
                <Icon name="chevronRight" className="w-4 h-4 text-stone" />
              </button>
            ))}
            <button className="w-full flex items-center gap-3 px-4 py-3.5 text-left">
              <Icon name="logout" className="w-4.5 h-4.5 text-berry shrink-0" />
              <span className="text-[13.5px] text-berry flex-1">Se déconnecter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
