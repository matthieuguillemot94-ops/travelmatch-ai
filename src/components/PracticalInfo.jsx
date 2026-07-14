import { useState } from 'react'
import Icon from './Icon.jsx'
import { getCountryInfo, OFFICIAL_ADVISORY_URL } from '../data/countryInfo.js'

const RISK_STYLES = {
  normal: { label: 'Vigilance normale', badge: 'bg-mint-100 text-mint', dot: 'bg-mint' },
  renforcee: { label: 'Vigilance renforcée', badge: 'bg-gold-400/20 text-gold-600', dot: 'bg-gold-500' },
}

function AccordionRow({ id, icon, title, subtitle, expanded, onToggle, children }) {
  const isOpen = expanded === id
  return (
    <div className="border-b border-ink/[0.06] last:border-b-0">
      <button onClick={() => onToggle(isOpen ? null : id)} className="w-full flex items-center gap-3 px-4 py-3.5 text-left">
        <Icon name={icon} className="w-[18px] h-[18px] text-pine shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-[13.5px] font-medium text-ink">{title}</p>
          {subtitle && <p className="text-[11.5px] text-stone truncate">{subtitle}</p>}
        </div>
        <Icon name="chevronDown" className={`w-4 h-4 text-stone shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="px-4 pb-4 -mt-1">{children}</div>}
    </div>
  )
}

function FactBox({ icon, label, value }) {
  return (
    <div className="rounded-xl bg-paper p-2.5">
      {icon && <Icon name={icon} className="w-4 h-4 text-pine mb-1" />}
      <p className="text-[10.5px] text-stone uppercase tracking-wide mb-0.5">{label}</p>
      <p className="text-[12.5px] font-medium text-ink font-mono tabular">{value}</p>
    </div>
  )
}

export default function PracticalInfo({ country }) {
  const [expanded, setExpanded] = useState(null)
  const info = getCountryInfo(country)
  if (!info) return null
  const risk = RISK_STYLES[info.risk.level] || RISK_STYLES.normal

  return (
    <div>
      <h2 className="font-serif text-[17px] text-ink mb-3">Infos pratiques</h2>
      <div className="rounded-2xl bg-white border border-ink/[0.06] overflow-hidden mb-8">
        <AccordionRow id="risk" icon="alertTriangle" title="Risque pays" subtitle={risk.label} expanded={expanded} onToggle={setExpanded}>
          <div className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full mb-2.5 ${risk.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${risk.dot}`} />
            {risk.label}
          </div>
          <p className="text-[12.5px] text-ink/75 leading-relaxed mb-2.5">{info.risk.note}</p>
          <a href={OFFICIAL_ADVISORY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[12px] font-medium text-pine">
            Conseils officiels du Ministère
            <Icon name="externalLink" className="w-3 h-3" strokeWidth={1.8} />
          </a>
        </AccordionRow>

        <AccordionRow id="emergency" icon="phone" title="Urgences" subtitle={`Numéro général ${info.emergency.general}`} expanded={expanded} onToggle={setExpanded}>
          <div className="grid grid-cols-2 gap-2 mb-2.5">
            <FactBox label="Numéro général" value={info.emergency.general} />
            <FactBox label="Police" value={info.emergency.police} />
            <FactBox label="Pompiers" value={info.emergency.fire} />
            <FactBox label="Ambulance / SAMU" value={info.emergency.ambulance} />
          </div>
          <a href={OFFICIAL_ADVISORY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[12px] font-medium text-pine">
            Coordonnées de l’ambassade de France
            <Icon name="externalLink" className="w-3 h-3" strokeWidth={1.8} />
          </a>
        </AccordionRow>

        <AccordionRow
          id="practical"
          icon="plug"
          title="Fuseau horaire & prise"
          subtitle={`${info.timezone} · Prise ${info.plug.types}`}
          expanded={expanded}
          onToggle={setExpanded}
        >
          <div className="grid grid-cols-2 gap-2">
            <FactBox icon="clock" label="Fuseau horaire" value={info.timezone} />
            <FactBox icon="plug" label="Prise électrique" value={`Type ${info.plug.types} · ${info.plug.voltage}`} />
          </div>
        </AccordionRow>

        <AccordionRow id="wildlife" icon="paw" title="Animaux & insectes" expanded={expanded} onToggle={setExpanded}>
          <p className="text-[12.5px] text-ink/75 leading-relaxed">{info.wildlife}</p>
        </AccordionRow>

        <AccordionRow id="culture" icon="globe" title="Culture locale" subtitle={info.culture.food} expanded={expanded} onToggle={setExpanded}>
          <div className="space-y-2.5">
            <div>
              <p className="text-[10.5px] text-stone uppercase tracking-wide mb-0.5">Gastronomie</p>
              <p className="text-[12.5px] text-ink/80 leading-relaxed">{info.culture.food}</p>
            </div>
            <div>
              <p className="text-[10.5px] text-stone uppercase tracking-wide mb-0.5">Langue</p>
              <p className="text-[12.5px] text-ink/80 leading-relaxed">{info.culture.language}</p>
            </div>
            <div>
              <p className="text-[10.5px] text-stone uppercase tracking-wide mb-0.5">Musique</p>
              <p className="text-[12.5px] text-ink/80 leading-relaxed">{info.culture.music}</p>
            </div>
            <div>
              <p className="text-[10.5px] text-stone uppercase tracking-wide mb-0.5">Coutumes</p>
              <p className="text-[12.5px] text-ink/80 leading-relaxed">{info.culture.customs}</p>
            </div>
          </div>
        </AccordionRow>

        <AccordionRow id="etiquette" icon="shield" title="Savoir-vivre" expanded={expanded} onToggle={setExpanded}>
          <ul className="space-y-1.5">
            {info.etiquette.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-[12.5px] text-ink/80 leading-relaxed">
                <Icon name="check" className="w-3.5 h-3.5 text-pine shrink-0 mt-0.5" strokeWidth={2} />
                {tip}
              </li>
            ))}
          </ul>
        </AccordionRow>
      </div>
    </div>
  )
}
