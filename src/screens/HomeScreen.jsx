import { PrimaryButton } from '../components/ui.jsx'

export default function HomeScreen({ onSignUp, onSignIn }) {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lift"
          style={{ background: '#D9A55C' }}
        >
          <svg viewBox="0 0 24 24" className="w-14 h-14">
            <path d="M22 1 9 9 2 23 14.5 15Z" fill="#181510" />
          </svg>
        </div>
        <h1 className="font-serif text-ink text-[26px] tracking-wide">TravelMatch AI</h1>
      </div>

      <div className="px-6 pb-8">
        <PrimaryButton onClick={onSignUp} className="bg-gold-500 text-ink font-semibold">
          S’inscrire
        </PrimaryButton>
        <button onClick={onSignIn} className="mt-4 w-full text-center text-[13.5px] text-ink py-2">
          J’ai déjà un compte
        </button>
      </div>
    </div>
  )
}
