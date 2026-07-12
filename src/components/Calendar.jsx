import { useState } from 'react'
import Icon from './Icon.jsx'

const WEEKDAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
const MONTH_NAMES = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
]
const MONTH_SHORT = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']

function toISODate(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

function formatShort(iso) {
  if (!iso) return null
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${MONTH_SHORT[m - 1]}`
}

export default function Calendar({ startDate, endDate, onChange }) {
  const today = new Date()
  const [cursor, setCursor] = useState(() => {
    const base = startDate ? new Date(startDate) : today
    return { year: base.getFullYear(), month: base.getMonth() }
  })

  const firstOfMonth = new Date(cursor.year, cursor.month, 1)
  const startWeekday = (firstOfMonth.getDay() + 6) % 7
  const daysInMonth = new Date(cursor.year, cursor.month + 1, 0).getDate()
  const todayISO = toISODate(today.getFullYear(), today.getMonth(), today.getDate())

  const cells = []
  for (let i = 0; i < startWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const handlePick = (d) => {
    const iso = toISODate(cursor.year, cursor.month, d)
    if (!startDate || (startDate && endDate)) {
      onChange({ startDate: iso, endDate: null })
    } else if (iso <= startDate) {
      onChange({ startDate: iso, endDate: null })
    } else {
      onChange({ startDate, endDate: iso })
    }
  }

  const changeMonth = (delta) => {
    let m = cursor.month + delta
    let y = cursor.year
    if (m < 0) { m = 11; y -= 1 }
    if (m > 11) { m = 0; y += 1 }
    setCursor({ year: y, month: m })
  }

  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-4">
      <div className="flex items-center justify-between mb-3">
        <button onClick={() => changeMonth(-1)} className="w-7 h-7 rounded-full flex items-center justify-center text-ink/60 active:bg-ink/5">
          <Icon name="arrow-left" className="w-3.5 h-3.5" strokeWidth={2} />
        </button>
        <p className="text-[13.5px] font-medium text-ink">{MONTH_NAMES[cursor.month]} {cursor.year}</p>
        <button onClick={() => changeMonth(1)} className="w-7 h-7 rounded-full flex items-center justify-center text-ink/60 active:bg-ink/5">
          <Icon name="arrow-right" className="w-3.5 h-3.5" strokeWidth={2} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-1 mb-1">
        {WEEKDAYS.map((w, i) => (
          <span key={i} className="text-[10px] text-stone text-center font-medium">{w}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((d, i) => {
          if (!d) return <span key={i} />
          const iso = toISODate(cursor.year, cursor.month, d)
          const isPast = iso < todayISO
          const isStart = iso === startDate
          const isEnd = iso === endDate
          const inRange = startDate && endDate && iso > startDate && iso < endDate
          return (
            <button
              key={i}
              disabled={isPast}
              onClick={() => handlePick(d)}
              className={`h-8 text-[12.5px] flex items-center justify-center transition-colors ${isPast ? 'text-stone/30' : 'text-ink'} ${
                isStart || isEnd ? 'bg-ink text-paper font-medium' : inRange ? 'bg-pine-100 text-pine-700' : ''
              } ${isStart ? 'rounded-l-full' : ''} ${isEnd ? 'rounded-r-full' : ''} ${!isStart && !isEnd && !inRange ? 'rounded-full' : ''}`}
            >
              {d}
            </button>
          )
        })}
      </div>

      {(startDate || endDate) && (
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-ink/[0.06] text-[12.5px]">
          <span className="text-stone">Départ</span>
          <span className="font-medium text-ink">{formatShort(startDate) || '—'}</span>
          <Icon name="arrow-right" className="w-3 h-3 text-stone" />
          <span className="text-stone">Retour</span>
          <span className="font-medium text-ink">{formatShort(endDate) || '—'}</span>
        </div>
      )}
    </div>
  )
}
