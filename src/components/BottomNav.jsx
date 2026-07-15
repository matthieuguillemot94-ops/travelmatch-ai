import Icon from './Icon.jsx'

const tabs = [
  { id: 'newTrip', label: 'Explorer', icon: 'compass' },
  { id: 'itinerary', label: 'Itinéraire', icon: 'route' },
  { id: 'assistant', label: 'Assistant', icon: 'sparkle' },
  { id: 'dashboard', label: 'Voyage', icon: 'suitcase' },
  { id: 'profile', label: 'Profil', icon: 'user' },
]

export default function BottomNav({ active, onNavigate }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 px-4 pb-2.5 pt-2 bg-paper/90 backdrop-blur border-t border-ink/[0.06]">
      <div className="flex items-center justify-between">
        {tabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className="flex flex-col items-center gap-1 px-2.5 py-1 rounded-xl transition-colors"
            >
              <Icon name={tab.icon} className={`w-[21px] h-[21px] ${isActive ? 'text-ink' : 'text-stone'}`} strokeWidth={isActive ? 1.9 : 1.6} />
              <span className={`text-[10.5px] tracking-tight ${isActive ? 'text-ink font-medium' : 'text-stone'}`}>{tab.label}</span>
              {isActive && <span className="w-1 h-1 rounded-full bg-gold-600 -mt-0.5" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
