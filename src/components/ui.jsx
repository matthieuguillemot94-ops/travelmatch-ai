import Icon from './Icon.jsx'

export function Chip({ label, icon, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-[13px] font-medium transition-colors ${
        selected
          ? 'bg-ink text-paper border-ink'
          : 'bg-white text-ink/80 border-ink/10 hover:border-ink/20'
      }`}
    >
      {icon && <Icon name={icon} className="w-4 h-4" />}
      {label}
    </button>
  )
}

export function PrimaryButton({ children, onClick, className = '', icon, disabled = false }) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`w-full flex items-center justify-center gap-2 rounded-2xl bg-ink text-paper font-medium text-[15px] py-3.5 active:scale-[0.98] transition-transform disabled:opacity-35 disabled:active:scale-100 ${className}`}
    >
      {children}
      {icon && <Icon name={icon} className="w-4 h-4" />}
    </button>
  )
}

export function GhostButton({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 rounded-2xl border border-ink/12 text-ink font-medium text-[15px] py-3.5 active:scale-[0.98] transition-transform ${className}`}
    >
      {children}
    </button>
  )
}

export function ScreenHeader({ title, onBack, tone = 'light', action }) {
  const textTone = tone === 'dark' ? 'text-paper' : 'text-ink'
  return (
    <div className={`flex items-center justify-between px-5 pt-2 pb-3 ${textTone}`}>
      {onBack ? (
        <button onClick={onBack} className={`w-9 h-9 rounded-full flex items-center justify-center ${tone === 'dark' ? 'bg-white/10' : 'bg-ink/5'}`}>
          <Icon name="arrow-left" className="w-4.5 h-4.5" />
        </button>
      ) : <div className="w-9" />}
      <span className="font-serif text-[17px]">{title}</span>
      {action ? action : <div className="w-9" />}
    </div>
  )
}

export function Tag({ children, tone = 'pine' }) {
  const tones = {
    pine: 'bg-pine-100 text-pine-700',
    berry: 'bg-berry-100 text-berry',
    gold: 'bg-gold-400/20 text-gold-600',
    mint: 'bg-mint-100 text-mint',
  }
  return <span className={`text-[11px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-full ${tones[tone]}`}>{children}</span>
}
