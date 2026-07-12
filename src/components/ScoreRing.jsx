// Circular compatibility-score indicator. Mint is reserved specifically for
// AI match scores so it reads as a distinct semantic signal from the gold accent.

export default function ScoreRing({ score, size = 56, stroke = 5, tone = 'light', label = 'compatibilité' }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - score / 100)
  const trackColor = tone === 'dark' ? 'rgba(247,242,233,0.16)' : '#E4EDE9'
  const textColor = tone === 'dark' ? '#F7F2E9' : '#12211D'

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={trackColor} strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#4FA98A"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16,1,0.3,1)' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center leading-none">
        <span className="font-mono tabular font-semibold" style={{ color: textColor, fontSize: size * 0.3 }}>
          {score}
        </span>
        {size >= 64 && (
          <span className="mt-0.5 text-[9px] uppercase tracking-wider" style={{ color: tone === 'dark' ? 'rgba(247,242,233,0.6)' : '#8C8574' }}>
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
