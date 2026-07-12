export default function PhoneShell({ children, statusTone = 'light' }) {
  const textTone = statusTone === 'dark' ? 'text-paper' : 'text-ink'

  return (
    <div className="relative mx-auto" style={{ width: 390, height: 844 }}>
      <div className="absolute inset-0 rounded-[2.75rem] bg-ink-800 shadow-lift" />
      <div className="absolute inset-[10px] rounded-[2.25rem] overflow-hidden bg-paper flex flex-col">
        <div className={`relative z-20 flex items-center justify-between px-8 pt-3.5 pb-1 shrink-0 ${textTone}`}>
          <span className="font-mono text-[13px] font-medium tabular">9:41</span>
          <div className="absolute left-1/2 top-2 -translate-x-1/2 h-[26px] w-[100px] rounded-full bg-black" />
          <div className="flex items-center gap-1.5">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><rect x="0" y="1" width="3" height="9" rx="0.5" fill="currentColor"/><rect x="4.5" y="0" width="3" height="10" rx="0.5" fill="currentColor"/><rect x="9" y="3" width="3" height="7" rx="0.5" fill="currentColor"/><rect x="13.5" y="5" width="3" height="5" rx="0.5" fill="currentColor"/></svg>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none"><path d="M7.5 2.2C9.9 2.2 12 3.1 13.5 4.6l-1.4 1.4c-1.2-1.2-2.8-1.9-4.6-1.9s-3.4.7-4.6 1.9L1.5 4.6C3 3.1 5.1 2.2 7.5 2.2Zm0 3.4c1.3 0 2.5.5 3.3 1.4L7.5 10.2 4.2 7c.8-.9 2-1.4 3.3-1.4Z" fill="currentColor"/></svg>
            <svg width="24" height="11" viewBox="0 0 24 11" fill="none"><rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke="currentColor"/><rect x="2" y="2" width="16" height="7" rx="1.2" fill="currentColor"/><rect x="21.5" y="3.5" width="1.5" height="4" rx="0.7" fill="currentColor"/></svg>
          </div>
        </div>
        <div className="relative flex-1 min-h-0">{children}</div>
      </div>
    </div>
  )
}
