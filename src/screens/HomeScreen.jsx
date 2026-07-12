import { PrimaryButton } from '../components/ui.jsx'

export default function HomeScreen({ onSignUp, onSignIn }) {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lift"
          style={{ background: 'linear-gradient(135deg,#E8B876,#C08A3E)' }}
        >
          <svg viewBox="0 0 24 24" className="w-10 h-10">
            <path d="M18 6 14 14 6 18 10 10Z" fill="#F7F2E9" />
            <circle cx="12" cy="12" r="1.7" fill="#12211D" />
          </svg>
        </div>
        <h1 className="font-serif text-paper text-[26px] tracking-wide">TravelMatch AI</h1>
      </div>

      <div className="px-6 pb-8">
        <PrimaryButton onClick={onSignUp} className="bg-gold-500 text-ink font-semibold">
          S’inscrire
        </PrimaryButton>
        <button onClick={onSignIn} className="mt-4 w-full text-center text-[13.5px] text-paper/70 py-2">
          J’ai déjà un compte
        </button>
      </div>
    </div>
  )
}
