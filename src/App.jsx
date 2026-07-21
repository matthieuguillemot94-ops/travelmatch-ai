import { useState } from 'react'
import { destinations } from './data/mockData.js'
import PhoneShell from './components/PhoneShell.jsx'
import BottomNav from './components/BottomNav.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import SignUpScreen from './screens/SignUpScreen.jsx'
import NewTripScreen from './screens/NewTripScreen.jsx'
import ProfileSetupScreen from './screens/ProfileSetupScreen.jsx'
import PersonalityScreen from './screens/PersonalityScreen.jsx'
import QuizScreen from './screens/QuizScreen.jsx'
import ResultsScreen from './screens/ResultsScreen.jsx'
import DestinationScreen from './screens/DestinationScreen.jsx'
import ActivityScreen from './screens/ActivityScreen.jsx'
import ItineraryScreen from './screens/ItineraryScreen.jsx'
import AssistantScreen from './screens/AssistantScreen.jsx'
import DashboardScreen from './screens/DashboardScreen.jsx'
import UserProfileScreen from './screens/UserProfileScreen.jsx'

const NAV_SCREENS = ['newTrip', 'results', 'destination', 'activity', 'itinerary', 'assistant', 'dashboard', 'profile']
const NAV_TABS = ['newTrip', 'itinerary', 'assistant', 'dashboard', 'profile']
const VOYAGER_SCREENS = ['newTrip', 'results', 'destination', 'activity']
const HOME_GRADIENT = 'linear-gradient(180deg, #FBF4E4 0%, #F3DDB0 45%, #ECC98C 75%, #E8B876 100%)'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [profile, setProfile] = useState({
    name: '',
    avatar: 0,
    travelerType: null,
    visitedCountries: [],
    pace: null,
    activityLevel: null,
    climate: null,
    discovery: null,
    sleepStyle: null,
    contentStyle: null,
    vibe: null,
    foodAdventure: null,
    stayStyle: null,
    successDefinition: null,
    vibeEmojis: [],
    dreamCountry: '',
  })
  const [quiz, setQuiz] = useState({
    interests: [],
    budget: 1185,
    budgetTransport: 450,
    budgetStay: 65,
    budgetDaily: 40,
    departureCity: 'Paris',
    duration: '1 semaine',
    group: 'solo',
    comfort: 'confort',
    mood: [],
    travelers: 1,
    nights: 7,
    startDate: null,
    endDate: null,
  })
  const [destinationId, setDestinationId] = useState('kyoto')
  const [activityId, setActivityId] = useState('fushimi-dawn')
  const [itineraryDestinationId, setItineraryDestinationId] = useState(null)
  const [itineraryTransport, setItineraryTransport] = useState(null)
  const [confirmedTrip, setConfirmedTrip] = useState(null)

  const unvalidateTrip = () => setConfirmedTrip(null)

  const validateTrip = () => {
    const d = destinations.find((x) => x.id === itineraryDestinationId)
    if (!d) return
    const days = quiz.startDate
      ? Math.max(1, Math.round((new Date(quiz.startDate) - new Date()) / 86400000))
      : 30
    const departureDate = quiz.startDate
      ? new Date(quiz.startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
      : 'Dates à définir'
    setConfirmedTrip({
      city: d.city,
      image: d.image,
      gradient: d.gradient,
      budgetEstimate: quiz.budget || d.budgetEstimate,
      daysLeft: days,
      departureDate,
    })
  }

  const showNav = NAV_SCREENS.includes(screen)
  const activeTab = NAV_TABS.includes(screen) ? screen : VOYAGER_SCREENS.includes(screen) ? 'newTrip' : null

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 py-10" style={{ background: '#0B1512' }}>
      <div className="text-center">
        <p className="text-[11px] tracking-[0.2em] uppercase text-paper/40 font-mono">Prototype UX/UI</p>
        <h1 className="font-serif text-paper text-[22px] mt-1">TravelMatch AI</h1>
      </div>

      <PhoneShell statusTone="light" background={screen === 'home' ? HOME_GRADIENT : undefined}>
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
            confirmedTrip={confirmedTrip}
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
            onContinue={() => setScreen('personality')}
          />
        )}

        {screen === 'personality' && (
          <PersonalityScreen
            profile={profile}
            setProfile={setProfile}
            onBack={() => setScreen('profileSetup')}
            onFinish={() => setScreen('quiz')}
          />
        )}

        {screen === 'quiz' && (
          <QuizScreen
            quiz={quiz}
            setQuiz={setQuiz}
            onBack={() => setScreen('personality')}
            onFinish={() => setScreen('results')}
          />
        )}

        {screen === 'results' && (
          <ResultsScreen
            profile={profile}
            quiz={quiz}
            onBack={() => setScreen('newTrip')}
            onOpenDestination={(id) => {
              setDestinationId(id)
              setScreen('destination')
            }}
          />
        )}

        {screen === 'destination' && (
          <DestinationScreen
            destinationId={destinationId}
            quiz={quiz}
            onBack={() => setScreen('results')}
            onOpenActivity={(id) => {
              setActivityId(id)
              setScreen('activity')
            }}
            onGenerateItinerary={(transport) => {
              setItineraryDestinationId(destinationId)
              setItineraryTransport(transport)
              setScreen('itinerary')
            }}
          />
        )}

        {screen === 'activity' && (
          <ActivityScreen activityId={activityId} onBack={() => setScreen('destination')} />
        )}

        {screen === 'itinerary' && (
          <ItineraryScreen
            destinationId={itineraryDestinationId}
            transport={itineraryTransport}
            quiz={quiz}
            confirmedTrip={confirmedTrip}
            onValidateTrip={validateTrip}
            onUnvalidateTrip={unvalidateTrip}
            onGoToVoyager={() => setScreen('newTrip')}
            onBack={() => setScreen('destination')}
          />
        )}

        {screen === 'assistant' && (
          <AssistantScreen
            quiz={quiz}
            confirmedTrip={confirmedTrip}
            destinationId={itineraryDestinationId}
            transport={itineraryTransport}
          />
        )}

        {screen === 'dashboard' && (
          <DashboardScreen
            confirmedTrip={confirmedTrip}
            onOpenItinerary={() => setScreen('itinerary')}
            onOpenAssistant={() => setScreen('assistant')}
            onOpenNewTrip={() => setScreen('newTrip')}
            onUnvalidateTrip={unvalidateTrip}
          />
        )}

        {screen === 'profile' && <UserProfileScreen onLogout={() => setScreen('home')} />}

        {showNav && <BottomNav active={activeTab} onNavigate={setScreen} />}
      </PhoneShell>
    </div>
  )
}
