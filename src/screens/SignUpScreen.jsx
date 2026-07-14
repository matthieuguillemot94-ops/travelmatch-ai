import Icon from '../components/Icon.jsx'

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M15.5 8.2c-1.1 0-2 .5-2.6.5-.6 0-1.6-.5-2.6-.5C8 8.2 5.9 10 5.9 13.3c0 2.9 2 6.9 3.9 6.9.9 0 1.3-.6 2.5-.6s1.5.6 2.5.6c1.9 0 3.6-3.6 3.6-3.6-2.3-1-2.2-4.5.4-5.6-1-1.5-2.5-2.2-3.3-2.2Z" />
      <path d="M13.9 6.8c.5-.6.9-1.5.8-2.4-.8.1-1.7.6-2.2 1.2-.5.6-.9 1.5-.8 2.3.9.1 1.7-.5 2.2-1.1Z" />
    </svg>
  )
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 3 A9 9 0 0 1 21 12 L12 12 Z" fill="#4285F4" />
      <path d="M21 12 A9 9 0 0 1 12 21 L12 12 Z" fill="#34A853" />
      <path d="M12 21 A9 9 0 0 1 3 12 L12 12 Z" fill="#FBBC05" />
      <path d="M3 12 A9 9 0 0 1 12 3 L12 12 Z" fill="#EA4335" />
      <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
    </svg>
  )
}

function AuthButton({ tone = 'outline', icon, onClick, children }) {
  const base = 'w-full flex items-center justify-center gap-2.5 rounded-2xl text-[14.5px] font-medium py-3.5 active:scale-[0.98] transition-transform'
  const tones = {
    dark: `${base} bg-ink text-paper`,
    outline: `${base} bg-white text-ink border border-ink/12`,
  }
  return (
    <button onClick={onClick} className={tones[tone]}>
      {icon}
      {children}
    </button>
  )
}

export default function SignUpScreen({ onBack, onContinue, onSignIn }) {
  return (
    <div className="h-full w-full bg-paper flex flex-col">
      <div className="flex items-center px-5 pt-3 pb-2">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-ink/5 flex items-center justify-center">
          <Icon name="arrow-left" className="w-[18px] h-[18px] text-ink" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6">
        <div className="w-12 h-12 rounded-2xl bg-pine-100 flex items-center justify-center mb-6">
          <Icon name="compass" className="w-6 h-6 text-pine" strokeWidth={1.7} />
        </div>
        <h1 className="font-serif text-[26px] leading-tight text-ink mb-2">Créez votre compte</h1>
        <p className="text-stone text-[14px] leading-relaxed mb-8 max-w-[300px]">
          Quelques secondes suffisent pour recevoir des recommandations pensées pour vous.
        </p>

        <div className="flex flex-col gap-3">
          <AuthButton tone="dark" icon={<AppleMark />} onClick={onContinue}>
            Continuer avec Apple
          </AuthButton>
          <AuthButton tone="outline" icon={<GoogleMark />} onClick={onContinue}>
            Continuer avec Google
          </AuthButton>

          <div className="flex items-center gap-3 py-1">
            <div className="h-px flex-1 bg-ink/10" />
            <span className="text-[12px] text-stone">ou</span>
            <div className="h-px flex-1 bg-ink/10" />
          </div>

          <AuthButton tone="outline" icon={<Icon name="send" className="w-4 h-4 text-ink/70" />} onClick={onContinue}>
            Continuer avec e-mail
          </AuthButton>
        </div>
      </div>

      <div className="px-6 pb-6">
        <p className="text-[11.5px] text-stone text-center leading-relaxed mb-4">
          En continuant, vous acceptez nos <span className="underline">Conditions d’utilisation</span> et notre{' '}
          <span className="underline">Politique de confidentialité</span>.
        </p>
        <button onClick={onSignIn} className="w-full text-center text-[13.5px] text-ink py-1">
          Vous avez déjà un compte ? <span className="text-pine font-semibold">Se connecter</span>
        </button>
      </div>
    </div>
  )
}
