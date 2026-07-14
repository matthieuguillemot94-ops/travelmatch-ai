import { PrimaryButton } from '../components/ui.jsx'

export default function HomeScreen({ onSignUp, onSignIn }) {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lift"
          style={{ background: 'linear-gradient(135deg,#EDBD82,#D9A55C)' }}
        >
          <svg viewBox="0 0 24 24" className="w-14 h-14">
            <g transform="rotate(-45 12 12)">
              <rect x="5" y="10.8" width="14" height="2.4" fill="#181510" />
              <path d="M3 12 7 8.3 7 15.7Z" fill="#181510" />
              <path d="M21 12 17 8.3 17 15.7Z" fill="#181510" />
            </g>
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
