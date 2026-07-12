import { useState } from 'react'
import PhoneShell from './components/PhoneShell.jsx'
import BottomNav from './components/BottomNav.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import SignUpScreen from './screens/SignUpScreen.jsx'
import NewTripScreen from './screens/NewTripScreen.jsx'
import ProfileSetupScreen from './screens/ProfileSetupScreen.jsx'
import QuizScreen from './screens/QuizScreen.jsx'
import ResultsScreen from './screens/ResultsScreen.jsx'
import DestinationScreen from './screens/DestinationScreen.jsx'
import ActivityScreen from './screens/ActivityScreen.jsx'
import ItineraryScreen from './screens/ItineraryScreen.jsx'
import AssistantScreen from './screens/AssistantScreen.jsx'
import DashboardScreen from './screens/DashboardScreen.jsx'
import UserProfileScreen from './screens/UserProfileScreen.jsx'

const NAV_SCREENS = ['results', 'destination', 'activity', 'itinerary', 'assistant', 'dashboard', 'profile']
const NAV_TABS = ['results', 'itinerary', 'assistant', 'dashboard', 'profile']
const HOME_GRADIENT = 'linear-gradient(180deg, #143C61 0%, #3E76A0 42%, #7CADCE 72%, #B7D9EA 100%)'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [profile, setProfile] = useState({ name: '', avatar: 0, travelerType: null })
  const [quiz, setQuiz] = useState({
    interests: [],
    budget: 1200,
    duration: '1 semaine',
    group: 'solo',
    comfort: 'confort',
    mood: [],
    nights: 7,
    when: 'Dans 1 à 3 mois',
  })
  const [destinationId, setDestinationId] = useState('kyoto')
  const [activityId, setActivityId] = useState('fushimi-dawn')

  const showNav = NAV_SCREENS.includes(screen)
  const activeTab = NAV_TABS.includes(screen) ? screen : screen === 'destination' || screen === 'activity' ? 'results' : null

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 py-10" style={{ background: '#0B1512' }}>
      <div className="text-center">
        <p className="text-[11px] tracking-[0.2em] uppercase text-paper/40 font-mono">Prototype UX/UI</p>
        <h1 className="font-serif text-paper text-[22px] mt-1">TravelMatch AI</h1>
      </div>

      <PhoneShell statusTone={screen === 'home' ? 'dark' : 'light'} background={screen === 'home' ? HOME_GRADIENT : undefined}>
        {screen === 'home' && (
          <HomeScreen onSignUp={() => setScreen('signup')} onSignIn={() => setScreen('newTrip')} />
        )}

        {screen === 'signup' && (
          <SignUpScreen
            onBack={() => setScreen('home')}
            onContinue={() => setScreen('profileSetup')}
            onSignIn={() => setScreen('newTrip')}
          />
        )}

        {screen === 'newTrip' && (
          <NewTripScreen
            quiz={quiz}
            setQuiz={setQuiz}
            onOpenProfile={() => setScreen('profile')}
            onOpenDashboard={() => setScreen('dashboard')}
            onFinish={() => setScreen('results')}
          />
        )}

        {screen === 'profileSetup' && (
          <ProfileSetupScreen
            profile={profile}
            setProfile={setProfile}
            onBack={() => setScreen('signup')}
            onContinue={() => setScreen('quiz')}
          />
        )}

        {screen === 'quiz' && (
          <QuizScreen
            quiz={quiz}
            setQuiz={setQuiz}
            onBack={() => setScreen('profileSetup')}
            onFinish={() => setScreen('results')}
          />
        )}

        {screen === 'results' && (
          <ResultsScreen
            profile={profile}
            quiz={quiz}
            onOpenDestination={(id) => {
              setDestinationId(id)
              setScreen('destination')
            }}
          />
        )}

        {screen === 'destination' && (
          <DestinationScreen
            destinationId={destinationId}
            onBack={() => setScreen('results')}
            onOpenActivity={(id) => {
              setActivityId(id)
              setScreen('activity')
            }}
            onGenerateItinerary={() => setScreen('itinerary')}
          />
        )}

        {screen === 'activity' && (
          <ActivityScreen activityId={activityId} onBack={() => setScreen('destination')} />
        )}

        {screen === 'itinerary' && <ItineraryScreen />}

        {screen === 'assistant' && <AssistantScreen />}

        {screen === 'dashboard' && (
          <DashboardScreen onOpenItinerary={() => setScreen('itinerary')} onOpenAssistant={() => setScreen('assistant')} />
        )}

        {screen === 'profile' && <UserProfileScreen />}

        {showNav && <BottomNav active={activeTab} onNavigate={setScreen} />}
      </PhoneShell>
    </div>
  )
}
