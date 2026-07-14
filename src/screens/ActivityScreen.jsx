import { useState } from 'react'
import { activities } from '../data/mockData.js'
import { PrimaryButton, Tag } from '../components/ui.jsx'
import Icon from '../components/Icon.jsx'

export default function ActivityScreen({ activityId, onBack }) {
  const a = activities.find((x) => x.id === activityId) ?? activities[0]
  const [added, setAdded] = useState(false)

  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="relative h-60 grain" style={{ background: a.gradient }}>
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-3">
            <button onClick={onBack} className="w-9 h-9 rounded-full bg-black/25 backdrop-blur flex items-center justify-center text-white">
              <Icon name="arrow-left" className="w-[18px] h-[18px]" />
            </button>
          </div>
          {a.offbeat && (
            <span className="absolute bottom-4 left-5 text-[11px] font-medium bg-white/95 text-ink px-2.5 py-1 rounded-full">
              Hors des sentiers battus
            </span>
          )}
        </div>

        <div className="px-6 pt-5">
          <Tag tone="pine">{a.category}</Tag>
          <h1 className="font-serif text-[24px] text-ink leading-tight mt-2.5 mb-3">{a.title}</h1>

          <div className="flex items-center gap-4 text-[13px] text-ink/70 mb-5">
            <span className="flex items-center gap-1"><Icon name="star" className="w-3.5 h-3.5 text-gold-600" />{a.rating} ({a.reviews})</span>
            <span className="flex items-center gap-1"><Icon name="clock" className="w-3.5 h-3.5" />{a.duration}</span>
            <span className="font-mono tabular font-medium text-ink">{a.priceLabel}</span>
          </div>

          <p className="text-[14px] text-ink/75 leading-relaxed mb-6">{a.description}</p>

          <div className="rounded-2xl bg-white border border-ink/[0.06] p-3.5 flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full shrink-0" style={{ background: 'linear-gradient(135deg,#2F5D50,#4FA98A)' }} />
            <div>
              <p className="text-[13px] font-medium text-ink">{a.host}</p>
              <p className="text-[11.5px] text-stone">Hôte vérifié TravelMatch</p>
            </div>
          </div>

          <h2 className="font-serif text-[16px] text-ink mb-3">Localisation</h2>
          <div className="relative h-32 rounded-2xl overflow-hidden border border-ink/[0.06] mb-4" style={{ background: '#E4EDE9' }}>
            <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 300 130">
              <path d="M0 90 Q60 60 90 80 T160 70 T220 95 T300 60" stroke="#2F5D50" strokeWidth="2" fill="none" />
              <path d="M0 40 Q80 20 140 45 T300 30" stroke="#2F5D50" strokeWidth="1.5" fill="none" opacity="0.6" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon name="pin" className="w-7 h-7 text-berry" strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[74px] left-0 right-0 z-40 px-6 pb-3 pt-4 bg-gradient-to-t from-paper via-paper to-transparent">
        <PrimaryButton onClick={() => setAdded(true)} icon={added ? 'check' : 'plus'} className={added ? 'bg-pine' : ''}>
          {added ? 'Ajouté à l’itinéraire' : 'Ajouter à mon itinéraire'}
        </PrimaryButton>
      </div>
    </div>
  )
}
