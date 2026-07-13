// Mock content for the TravelMatch AI prototype.
// Destination photos are iconic, freely-licensed images served from Wikimedia
// Commons (stable CDN, no API key required). `gradient` is kept as a paint-first
// CSS layer so cards never show a broken-image gap if a photo fails to load.

export const travelerTypes = [
  { id: 'aventurier', label: 'Aventurier', hint: 'Sensations et grands espaces' },
  { id: 'culturel', label: 'Explorateur culturel', hint: 'Histoire, art, patrimoine' },
  { id: 'epicurien', label: 'Épicurien', hint: 'Table, vin, marchés locaux' },
  { id: 'detente', label: 'En quête de calme', hint: 'Ralentir, respirer, souffler' },
  { id: 'social', label: 'Créateur de liens', hint: 'Rencontres et vie locale' },
  { id: 'createur', label: 'Chasseur d’images', hint: 'Lumières, lieux, cadrages' },
]

export const interestCategories = [
  { id: 'nature', label: 'Nature & grands espaces', icon: 'leaf' },
  { id: 'gastronomie', label: 'Gastronomie', icon: 'fork' },
  { id: 'culture', label: 'Culture & musées', icon: 'column' },
  { id: 'nightlife', label: 'Vie nocturne', icon: 'moon' },
  { id: 'bienetre', label: 'Bien-être', icon: 'drop' },
  { id: 'randonnee', label: 'Randonnée', icon: 'peak' },
  { id: 'plage', label: 'Plage & océan', icon: 'wave' },
  { id: 'artisanat', label: 'Artisanat local', icon: 'thread' },
  { id: 'histoire', label: 'Histoire', icon: 'scroll' },
  { id: 'photo', label: 'Photographie', icon: 'aperture' },
]

export const groupOptions = [
  { id: 'solo', label: 'Solo', icon: 'user' },
  { id: 'couple', label: 'En couple', icon: 'heart' },
  { id: 'famille', label: 'En famille', icon: 'home' },
  { id: 'amis', label: 'Entre amis', icon: 'users' },
]

export const departureCities = [
  { id: 'Paris', label: 'Paris', priceMult: 1, hoursAdd: 0, lat: 48.8566, lon: 2.3522 },
  { id: 'Lyon', label: 'Lyon', priceMult: 1.08, hoursAdd: 1.5, lat: 45.764, lon: 4.8357 },
  { id: 'Marseille', label: 'Marseille', priceMult: 1.1, hoursAdd: 1.5, lat: 43.2965, lon: 5.3698 },
  { id: 'Toulouse', label: 'Toulouse', priceMult: 1.1, hoursAdd: 1.5, lat: 43.6047, lon: 1.4442 },
  { id: 'Nantes', label: 'Nantes', priceMult: 1.08, hoursAdd: 1.5, lat: 47.2184, lon: -1.5536 },
  { id: 'Bordeaux', label: 'Bordeaux', priceMult: 1.1, hoursAdd: 1.5, lat: 44.8378, lon: -0.5792 },
  { id: 'Nice', label: 'Nice', priceMult: 1.05, hoursAdd: 1, lat: 43.7102, lon: 7.262 },
]

// Coordinates for the European destinations reachable by personal car (used
// to draw the real driving route on the map in "Comment y aller").
export const DESTINATION_COORDS = {
  lisbonne: { lat: 38.7223, lon: -9.1393 },
  douro: { lat: 41.1621, lon: -7.7975 },
  paris: { lat: 48.8566, lon: 2.3522 },
  rome: { lat: 41.9028, lon: 12.4964 },
  santorin: { lat: 36.3932, lon: 25.4615 },
  reykjavik: { lat: 64.1466, lon: -21.9426 },
  barcelona: { lat: 41.3874, lon: 2.1686 },
  amsterdam: { lat: 52.3676, lon: 4.9041 },
  prague: { lat: 50.0755, lon: 14.4378 },
  vienna: { lat: 48.2082, lon: 16.3738 },
  venice: { lat: 45.4408, lon: 12.3155 },
  edinburgh: { lat: 55.9533, lon: -3.1883 },
  porto: { lat: 41.1579, lon: -8.6291 },
  budapest: { lat: 47.4979, lon: 19.0402 },
  copenhagen: { lat: 55.6761, lon: 12.5683 },
}

export const comfortLevels = [
  { id: 'simple', label: 'Simple & authentique', icon: 'leaf' },
  { id: 'confort', label: 'Confort', icon: 'compass' },
  { id: 'premium', label: 'Premium', icon: 'star' },
]

export const durations = ['Week-end', '1 semaine', '2 semaines', '1 mois']

export const moods = [
  { label: 'Me ressourcer', icon: 'drop' },
  { label: 'Vivre l’aventure', icon: 'peak' },
  { label: 'Découvrir une culture', icon: 'column' },
  { label: 'Faire de belles photos', icon: 'aperture' },
  { label: 'Rencontrer des locaux', icon: 'thread' },
  { label: 'Ne rien faire', icon: 'wave' },
]


export const destinations = [
  {
    id: 'kyoto',
    city: 'Kyoto',
    country: 'Japon',
    continent: 'Asie',
    score: 96,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kiyomizu.jpg/960px-Kiyomizu.jpg',
    gradient: 'linear-gradient(160deg, #2B2432 0%, #6B4A5C 42%, #D89B6B 78%, #F3C892 100%)',
    tags: ['Culture', 'Sérénité', 'Nature'],
    duration: '7 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1850,
    matchReasons: [
      { label: 'Rythme calme et contemplatif', weight: 34 },
      { label: 'Forte densité culturelle', weight: 29 },
      { label: 'Nature accessible à pied', weight: 21 },
      { label: 'Gastronomie raffinée', weight: 16 },
    ],
    description:
      "Entre temples de bois patinés, forêts de bambous et ruelles de Gion, Kyoto récompense la lenteur. L'IA a repéré une forte correspondance avec votre goût pour les lieux chargés d'histoire et votre rythme de voyage posé.",
    weather: { season: 'Automne', temp: '16°C', note: 'Érables flamboyants dès mi-novembre' },
    bestMonths: 'Octobre – Décembre',
  },
  {
    id: 'lisbonne',
    city: 'Lisbonne',
    country: 'Portugal',
    continent: 'Europe',
    score: 91,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Lisboa_-_Portugal_%2852597836992%29.jpg/960px-Lisboa_-_Portugal_%2852597836992%29.jpg',
    gradient: 'linear-gradient(160deg, #1B2A3A 0%, #35576B 45%, #D98C5F 82%, #F0C27B 100%)',
    tags: ['Vie locale', 'Gastronomie', 'Océan'],
    duration: '5 jours',
    budgetLevel: '€€',
    budgetEstimate: 980,
    matchReasons: [
      { label: 'Scène culinaire décontractée', weight: 31 },
      { label: 'Ambiance conviviale', weight: 27 },
      { label: 'Budget maîtrisé', weight: 24 },
      { label: 'Lumière et façades photogéniques', weight: 18 },
    ],
    description:
      'Miradouros au coucher du soleil, tram jaune et bars à petits plats — Lisbonne colle à votre envie de vie locale sans sacrifier le confort.',
    weather: { season: 'Printemps', temp: '21°C', note: 'Lumière douce, peu de pluie' },
    bestMonths: 'Avril – Juin',
  },
  {
    id: 'oaxaca',
    city: 'Oaxaca',
    country: 'Mexique',
    continent: 'Amérique du Nord',
    score: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/MonteAlbanWest.jpg',
    gradient: 'linear-gradient(160deg, #241826 0%, #6E2E3B 40%, #C9583F 75%, #E8A23D 100%)',
    tags: ['Artisanat', 'Saveurs', 'Hors des sentiers battus'],
    duration: '8 jours',
    budgetLevel: '€€',
    budgetEstimate: 1120,
    matchReasons: [
      { label: 'Artisanat et savoir-faire local', weight: 33 },
      { label: 'Cuisine mise en avant', weight: 26 },
      { label: 'Faible affluence touristique', weight: 25 },
    ],
    description:
      'Marchés de mezcal, ateliers de tissage zapotèque et mole en famille : Oaxaca correspond à votre appétit pour les expériences peu balisées.',
    weather: { season: 'Hiver sec', temp: '24°C', note: 'Ciel dégagé toute la journée' },
    bestMonths: 'Novembre – Février',
  },
  {
    id: 'douro',
    city: 'Vallée du Douro',
    country: 'Portugal',
    continent: 'Europe',
    score: 85,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Alto_Douro_Vinhateiro_visto_de_um_comboio.jpg',
    gradient: 'linear-gradient(160deg, #1C2B22 0%, #3C5B3E 45%, #9EAE55 78%, #E4C86B 100%)',
    tags: ['Nature', 'Vin', 'Détente'],
    duration: '4 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1340,
    matchReasons: [
      { label: 'Paysages ouverts et calmes', weight: 30 },
      { label: 'Expériences œnologiques', weight: 28 },
    ],
    description:
      "Coteaux en terrasses, bateaux à quai et quintas familiales : le Douro offre le ralentissement que votre profil recherche.",
    weather: { season: 'Été', temp: '27°C', note: 'Chaleur sèche, soirées douces' },
    bestMonths: 'Juin – Septembre',
  },
  {
    id: 'chiangmai',
    city: 'Chiang Mai',
    country: 'Thaïlande',
    continent: 'Asie',
    score: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg/960px-0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg',
    gradient: 'linear-gradient(160deg, #17242A 0%, #23504B 45%, #4E8F6B 78%, #B8D98A 100%)',
    tags: ['Spiritualité', 'Nature', 'Gastronomie'],
    duration: '6 jours',
    budgetLevel: '€€',
    budgetEstimate: 890,
    matchReasons: [
      { label: 'Ambiance sereine', weight: 32 },
      { label: 'Immersion dans la vie locale', weight: 29 },
    ],
    description:
      'Temples de montagne, cours de cuisine du marché et jungle environnante — un équilibre entre culture et nature.',
    weather: { season: 'Sec', temp: '29°C', note: 'Ciel bleu, faible humidité' },
    bestMonths: 'Novembre – Février',
  },
  {
    id: 'paris',
    city: 'Paris',
    country: 'France',
    continent: 'Europe',
    score: 94,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/960px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
    gradient: 'linear-gradient(160deg, #1E2436 0%, #3E4E72 45%, #9AA6C4 80%, #E8D9C4 100%)',
    tags: ['Art & Design', 'Gastronomie', 'Romantisme'],
    duration: '4 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1450,
    matchReasons: [
      { label: 'Densité culturelle exceptionnelle', weight: 32 },
      { label: 'Gastronomie raffinée', weight: 26 },
      { label: 'Marche facile entre quartiers', weight: 20 },
    ],
    description:
      'Entre musées mondiaux, terrasses de café et Seine scintillante au crépuscule, Paris conjugue élégance et art de vivre à chaque coin de rue.',
    weather: { season: 'Printemps', temp: '17°C', note: 'Marronniers en fleurs' },
    bestMonths: 'Avril – Juin',
  },
  {
    id: 'rome',
    city: 'Rome',
    country: 'Italie',
    continent: 'Europe',
    score: 93,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/960px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg',
    gradient: 'linear-gradient(160deg, #241C22 0%, #6E4A3F 45%, #C9945A 80%, #EDD79C 100%)',
    tags: ['Histoire', 'Gastronomie', 'Architecture'],
    duration: '5 jours',
    budgetLevel: '€€',
    budgetEstimate: 1180,
    matchReasons: [
      { label: 'Patrimoine antique unique', weight: 34 },
      { label: 'Vie de quartier animée', weight: 24 },
      { label: 'Cuisine généreuse', weight: 22 },
    ],
    description:
      'Ruines antiques, places baroques et trattorias animées : Rome se visite à pied, une fontaine et un espresso à la fois.',
    weather: { season: 'Automne', temp: '21°C', note: 'Lumière dorée, moins de touristes' },
    bestMonths: 'Septembre – Novembre',
  },
  {
    id: 'santorin',
    city: 'Santorin',
    country: 'Grèce',
    continent: 'Europe',
    score: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Oia_sunset_-_panoramio_%282%29.jpg/960px-Oia_sunset_-_panoramio_%282%29.jpg',
    gradient: 'linear-gradient(160deg, #1B2C42 0%, #2F6FA8 45%, #EAF2F6 80%, #F6D9A0 100%)',
    tags: ['Océan', 'Romantisme', 'Détente'],
    duration: '4 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1520,
    matchReasons: [
      { label: 'Panoramas sur la mer Égée', weight: 35 },
      { label: 'Ambiance romantique', weight: 28 },
    ],
    description:
      'Maisons blanches et dômes bleus suspendus au-dessus de la caldeira : Santorin offre l’un des couchers de soleil les plus admirés au monde.',
    weather: { season: 'Été', temp: '26°C', note: 'Ciel dégagé, mer calme' },
    bestMonths: 'Juin – Septembre',
  },
  {
    id: 'reykjavik',
    city: 'Reykjavik',
    country: 'Islande',
    continent: 'Europe',
    score: 89,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Reykjav%C3%ADk%2C_view_from_Hallgr%C3%ADmskirkja_%282%29.jpg/960px-Reykjav%C3%ADk%2C_view_from_Hallgr%C3%ADmskirkja_%282%29.jpg',
    gradient: 'linear-gradient(160deg, #10202C 0%, #274B58 45%, #6FA69E 80%, #C9E4D8 100%)',
    tags: ['Nature', 'Aventure', 'Aurores boréales'],
    duration: '6 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1980,
    matchReasons: [
      { label: 'Paysages spectaculaires', weight: 36 },
      { label: 'Sensation d’aventure', weight: 27 },
    ],
    description:
      'Volcans, sources chaudes et aurores boréales : Reykjavik est la porte d’entrée d’un territoire islandais spectaculaire et sauvage.',
    weather: { season: 'Hiver', temp: '2°C', note: 'Nuits longues, ciel propice aux aurores' },
    bestMonths: 'Septembre – Mars',
  },
  {
    id: 'marrakech',
    city: 'Marrakech',
    country: 'Maroc',
    continent: 'Afrique',
    score: 91,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Pavillon_Menarag%C3%A4rten.jpg/960px-Pavillon_Menarag%C3%A4rten.jpg',
    gradient: 'linear-gradient(160deg, #2A1B22 0%, #7A3F42 45%, #D98A4E 80%, #F0C878 100%)',
    tags: ['Artisanat', 'Saveurs', 'Vie locale'],
    duration: '5 jours',
    budgetLevel: '€',
    budgetEstimate: 780,
    matchReasons: [
      { label: 'Immersion artisanale', weight: 33 },
      { label: 'Budget très accessible', weight: 28 },
      { label: 'Saveurs authentiques', weight: 20 },
    ],
    description:
      'Souks labyrinthiques, riads secrets et parfums d’épices : Marrakech immerge dans une vie de quartier intense dès la place Jemaa el-Fna.',
    weather: { season: 'Automne', temp: '24°C', note: 'Chaleur douce, soirées fraîches' },
    bestMonths: 'Mars – Mai',
  },
  {
    id: 'capetown',
    city: 'Le Cap',
    country: 'Afrique du Sud',
    continent: 'Afrique',
    score: 92,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Camps_bay_%2853460319478%29_%28cropped%29.jpg/960px-Camps_bay_%2853460319478%29_%28cropped%29.jpg',
    gradient: 'linear-gradient(160deg, #16242A 0%, #2C5E5B 45%, #6FAE8E 80%, #E4D9A0 100%)',
    tags: ['Nature', 'Océan', 'Randonnée'],
    duration: '8 jours',
    budgetLevel: '€€',
    budgetEstimate: 1350,
    matchReasons: [
      { label: 'Diversité des paysages', weight: 34 },
      { label: 'Randonnées accessibles', weight: 25 },
      { label: 'Scène culinaire créative', weight: 19 },
    ],
    description:
      'Entre Table Mountain, plages sauvages et vignobles voisins, Le Cap combine grands espaces et vie urbaine créative.',
    weather: { season: 'Été austral', temp: '23°C', note: 'Journées longues et ensoleillées' },
    bestMonths: 'Novembre – Mars',
  },
  {
    id: 'newyork',
    city: 'New York',
    country: 'États-Unis',
    continent: 'Amérique du Nord',
    score: 87,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/960px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg',
    gradient: 'linear-gradient(160deg, #1A1D2A 0%, #3B4258 45%, #7A8299 80%, #D9C9A0 100%)',
    tags: ['Vie nocturne', 'Art & Design', 'Gastronomie'],
    duration: '5 jours',
    budgetLevel: '€€€€',
    budgetEstimate: 2100,
    matchReasons: [
      { label: 'Énergie urbaine intense', weight: 30 },
      { label: 'Offre culturelle immense', weight: 28 },
    ],
    description:
      'Skyline vertigineux, scène artistique foisonnante et cuisine du monde entier : New York se vit à un rythme qui ne s’arrête jamais.',
    weather: { season: 'Automne', temp: '15°C', note: 'Feuillages dans Central Park' },
    bestMonths: 'Septembre – Novembre',
  },
  {
    id: 'rio',
    city: 'Rio de Janeiro',
    country: 'Brésil',
    continent: 'Amérique du Sud',
    score: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/960px-Cidade_Maravilhosa.jpg',
    gradient: 'linear-gradient(160deg, #14242A 0%, #1F6E5E 45%, #4FA98A 80%, #E8D488 100%)',
    tags: ['Plage', 'Vie nocturne', 'Nature'],
    duration: '6 jours',
    budgetLevel: '€€',
    budgetEstimate: 1290,
    matchReasons: [
      { label: 'Cadre naturel unique', weight: 32 },
      { label: 'Ambiance festive', weight: 26 },
    ],
    description:
      'Entre Corcovado, plages de Copacabana et forêt tropicale en pleine ville, Rio marie nature spectaculaire et énergie carioca.',
    weather: { season: 'Été', temp: '29°C', note: 'Chaleur humide, averses brèves' },
    bestMonths: 'Décembre – Mars',
  },
  {
    id: 'machupicchu',
    city: 'Machu Picchu',
    country: 'Pérou',
    continent: 'Amérique du Sud',
    score: 95,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Machu_Picchu%2C_2023_%28012%29.jpg/960px-Machu_Picchu%2C_2023_%28012%29.jpg',
    gradient: 'linear-gradient(160deg, #1A2620 0%, #2F5D42 45%, #6FA678 80%, #D8CE8E 100%)',
    tags: ['Histoire', 'Randonnée', 'Hors des sentiers battus'],
    duration: '7 jours',
    budgetLevel: '€€',
    budgetEstimate: 1420,
    matchReasons: [
      { label: 'Site historique exceptionnel', weight: 38 },
      { label: 'Trek immersif', weight: 29 },
    ],
    description:
      'La cité inca perchée dans les nuages récompense plusieurs jours de trek à travers la vallée sacrée jusqu’à son sommet mythique.',
    weather: { season: 'Sec', temp: '18°C', note: 'Matinées claires, brume en altitude' },
    bestMonths: 'Mai – Septembre',
  },
  {
    id: 'bali',
    city: 'Bali',
    country: 'Indonésie',
    continent: 'Asie',
    score: 93,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ubud_%2849818456887%29.jpg/960px-Ubud_%2849818456887%29.jpg',
    gradient: 'linear-gradient(160deg, #17241E 0%, #2C5E4A 45%, #6FAE6E 80%, #E4D488 100%)',
    tags: ['Bien-être', 'Nature', 'Spiritualité'],
    duration: '9 jours',
    budgetLevel: '€€',
    budgetEstimate: 1150,
    matchReasons: [
      { label: 'Ambiance ressourçante', weight: 33 },
      { label: 'Nature luxuriante', weight: 27 },
    ],
    description:
      'Rizières en terrasses, temples et retraites de yoga : Ubud incarne le Bali le plus ressourçant, loin de l’agitation côtière.',
    weather: { season: 'Sec', temp: '27°C', note: 'Ciel dégagé, brise tropicale' },
    bestMonths: 'Avril – Octobre',
  },
  {
    id: 'dubai',
    city: 'Dubaï',
    country: 'Émirats arabes unis',
    continent: 'Moyen-Orient',
    score: 84,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Burj_Khalifa_2021.jpg/960px-Burj_Khalifa_2021.jpg',
    gradient: 'linear-gradient(160deg, #1B1A26 0%, #4A4468 45%, #C9A45E 80%, #F0DDA8 100%)',
    tags: ['Luxe', 'Shopping', 'Architecture'],
    duration: '4 jours',
    budgetLevel: '€€€€',
    budgetEstimate: 1850,
    matchReasons: [
      { label: 'Expériences premium', weight: 30 },
      { label: 'Contrastes désert/ville', weight: 24 },
    ],
    description:
      'Gratte-ciels vertigineux, désert à perte de vue et démesure architecturale : Dubaï assume pleinement son goût du spectaculaire.',
    weather: { season: 'Hiver', temp: '25°C', note: 'Chaleur sèche et agréable' },
    bestMonths: 'Novembre – Mars',
  },
  {
    id: 'petra',
    city: 'Petra',
    country: 'Jordanie',
    continent: 'Moyen-Orient',
    score: 92,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Al_Deir_Petra.JPG/960px-Al_Deir_Petra.JPG',
    gradient: 'linear-gradient(160deg, #241C1A 0%, #7A4A3F 45%, #D9945E 80%, #F0C888 100%)',
    tags: ['Histoire', 'Hors des sentiers battus', 'Randonnée'],
    duration: '5 jours',
    budgetLevel: '€€',
    budgetEstimate: 1240,
    matchReasons: [
      { label: 'Site archéologique unique', weight: 37 },
      { label: 'Faible affluence hors saison', weight: 26 },
    ],
    description:
      'Taillée dans la roche rose du désert, la cité nabatéenne de Petra se révèle au bout d’un défilé étroit qui coupe le souffle.',
    weather: { season: 'Printemps', temp: '22°C', note: 'Températures douces en journée' },
    bestMonths: 'Mars – Mai',
  },
  {
    id: 'sydney',
    city: 'Sydney',
    country: 'Australie',
    continent: 'Océanie',
    score: 86,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/960px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg',
    gradient: 'linear-gradient(160deg, #101E2C 0%, #2C5C74 45%, #6FA6C4 80%, #F0DDA0 100%)',
    tags: ['Océan', 'Plage', 'Vie urbaine'],
    duration: '7 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1980,
    matchReasons: [
      { label: 'Équilibre ville/nature', weight: 29 },
      { label: 'Qualité de vie balnéaire', weight: 25 },
    ],
    description:
      'Opéra emblématique, plages urbaines et bush environnant : Sydney équilibre grande ville et vie au grand air toute l’année.',
    weather: { season: 'Été austral', temp: '25°C', note: 'Journées ensoleillées, brise marine' },
    bestMonths: 'Décembre – Février',
  },
  {
    id: 'queenstown',
    city: 'Queenstown',
    country: 'Nouvelle-Zélande',
    continent: 'Océanie',
    score: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Queenstown_1_%288168013172%29.jpg/960px-Queenstown_1_%288168013172%29.jpg',
    gradient: 'linear-gradient(160deg, #16242A 0%, #2C5E5E 45%, #6FA692 80%, #E4D488 100%)',
    tags: ['Aventure', 'Nature', 'Randonnée'],
    duration: '8 jours',
    budgetLevel: '€€€',
    budgetEstimate: 2050,
    matchReasons: [
      { label: 'Activités outdoor variées', weight: 35 },
      { label: 'Paysages spectaculaires', weight: 28 },
    ],
    description:
      'Capitale mondiale des sports extrêmes nichée entre lac et montagnes, Queenstown est un terrain de jeu grandeur nature.',
    weather: { season: 'Été austral', temp: '19°C', note: 'Air vif, ciel très dégagé' },
    bestMonths: 'Décembre – Février',
  },
  {
    id: 'borabora',
    city: 'Bora Bora',
    country: 'Polynésie française',
    continent: 'Océanie',
    score: 91,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bora_Bora_ISS006.jpg/960px-Bora_Bora_ISS006.jpg',
    gradient: 'linear-gradient(160deg, #0E2230 0%, #1F6E8E 45%, #4FC4C0 80%, #F0E4A8 100%)',
    tags: ['Océan', 'Détente', 'Romantisme'],
    duration: '6 jours',
    budgetLevel: '€€€€',
    budgetEstimate: 2900,
    matchReasons: [
      { label: 'Lagon exceptionnel', weight: 36 },
      { label: 'Cadre romantique', weight: 27 },
    ],
    description:
      'Lagon turquoise, bungalows sur pilotis et récif corallien à portée de masque : Bora Bora incarne l’archétype du paradis insulaire.',
    weather: { season: 'Sec', temp: '28°C', note: 'Eau à 27°C, ciel dégagé' },
    bestMonths: 'Mai – Octobre',
  },
  {
    id: 'barcelona',
    city: 'Barcelone',
    country: 'Espagne',
    continent: 'Europe',
    score: 92,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Evening_light_over_Barcelona.jpg/960px-Evening_light_over_Barcelona.jpg',
    gradient: 'linear-gradient(160deg, #1E2A3A 0%, #3E5E72 45%, #C99A5E 80%, #F0D9A0 100%)',
    tags: ['Architecture', 'Plage', 'Vie nocturne'],
    duration: '4 jours',
    budgetLevel: '€€',
    budgetEstimate: 1150,
    matchReasons: [
      { label: 'Mélange ville et plage', weight: 30 },
      { label: 'Architecture Gaudí unique', weight: 27 },
    ],
    description:
      'Modernisme flamboyant, tapas de quartier et Méditerranée à deux pas : Barcelone conjugue art de vivre urbain et bord de mer.',
    weather: { season: 'Printemps', temp: '19°C' },
    bestMonths: 'Avril – Juin',
  },
  {
    id: 'amsterdam',
    city: 'Amsterdam',
    country: 'Pays-Bas',
    continent: 'Europe',
    score: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Prinsengracht.jpg/960px-Prinsengracht.jpg',
    gradient: 'linear-gradient(160deg, #1B2430 0%, #38506C 45%, #9AAAAE 80%, #E4DCC4 100%)',
    tags: ['Art & Design', 'Vie locale'],
    duration: '3 jours',
    budgetLevel: '€€',
    budgetEstimate: 1050,
    matchReasons: [
      { label: 'Ville à taille humaine', weight: 28 },
      { label: 'Scène artistique riche', weight: 25 },
    ],
    description:
      'Canaux tranquilles, musées de renom et vélos partout : Amsterdam se découvre au fil de l\'eau, sans jamais se presser.',
    weather: { season: 'Printemps', temp: '14°C' },
    bestMonths: 'Avril – Mai',
  },
  {
    id: 'prague',
    city: 'Prague',
    country: 'République tchèque',
    continent: 'Europe',
    score: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Prague_%286365119737%29.jpg/960px-Prague_%286365119737%29.jpg',
    gradient: 'linear-gradient(160deg, #241C1E 0%, #6E4A42 45%, #C99A5E 80%, #EDD79C 100%)',
    tags: ['Histoire', 'Architecture'],
    duration: '4 jours',
    budgetLevel: '€',
    budgetEstimate: 820,
    matchReasons: [
      { label: 'Centre historique préservé', weight: 32 },
      { label: 'Excellent rapport qualité-prix', weight: 27 },
    ],
    description:
      'Ponts gothiques, châteaux et bières de brasserie : Prague offre un patrimoine spectaculaire pour un budget mesuré.',
    weather: { season: 'Automne', temp: '12°C' },
    bestMonths: 'Septembre – Octobre',
  },
  {
    id: 'vienna',
    city: 'Vienne',
    country: 'Autriche',
    continent: 'Europe',
    score: 89,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Schoenbrunn_philharmoniker_2012.jpg/960px-Schoenbrunn_philharmoniker_2012.jpg',
    gradient: 'linear-gradient(160deg, #201C28 0%, #4A4468 45%, #C9A45E 80%, #F0DDA8 100%)',
    tags: ['Art & Design', 'Gastronomie', 'Architecture'],
    duration: '4 jours',
    budgetLevel: '€€',
    budgetEstimate: 1220,
    matchReasons: [
      { label: 'Élégance impériale', weight: 29 },
      { label: 'Scène musicale et culturelle', weight: 26 },
    ],
    description:
      'Palais impériaux, cafés viennois et salles de concert légendaires : Vienne cultive un art de vivre raffiné.',
    weather: { season: 'Printemps', temp: '16°C' },
    bestMonths: 'Avril – Juin',
  },
  {
    id: 'venice',
    city: 'Venise',
    country: 'Italie',
    continent: 'Europe',
    score: 91,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Venezia_aerial_view.jpg/960px-Venezia_aerial_view.jpg',
    gradient: 'linear-gradient(160deg, #1B2A3A 0%, #35576B 45%, #C9945A 80%, #F0DDA0 100%)',
    tags: ['Romantisme', 'Architecture', 'Art & Design'],
    duration: '3 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1380,
    matchReasons: [
      { label: 'Cadre unique au monde', weight: 36 },
      { label: 'Ambiance romantique', weight: 26 },
    ],
    description:
      'Canaux silencieux, palais gothiques et vaporetto au coucher du soleil : Venise reste inimitable, hors des heures de foule.',
    weather: { season: 'Automne', temp: '17°C' },
    bestMonths: 'Octobre – Novembre',
  },
  {
    id: 'edinburgh',
    city: 'Édimbourg',
    country: 'Écosse',
    continent: 'Europe',
    score: 87,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Skyline_of_Edinburgh.jpg/960px-Skyline_of_Edinburgh.jpg',
    gradient: 'linear-gradient(160deg, #1A2426 0%, #3C5450 45%, #8CA48C 80%, #DCE4C4 100%)',
    tags: ['Histoire', 'Nature', 'Architecture'],
    duration: '4 jours',
    budgetLevel: '€€',
    budgetEstimate: 1080,
    matchReasons: [
      { label: 'Atmosphère médiévale intacte', weight: 30 },
      { label: 'Nature à portée de ville', weight: 24 },
    ],
    description:
      'Château perché, ruelles pavées et collines volcaniques : Édimbourg mêle légendes écossaises et grands espaces.',
    weather: { season: 'Été', temp: '15°C' },
    bestMonths: 'Juin – Août',
  },
  {
    id: 'porto',
    city: 'Porto',
    country: 'Portugal',
    continent: 'Europe',
    score: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG/960px-Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG',
    gradient: 'linear-gradient(160deg, #241C22 0%, #6E4A4A 45%, #D9945E 80%, #F0C878 100%)',
    tags: ['Gastronomie', 'Vin', 'Vie locale'],
    duration: '4 jours',
    budgetLevel: '€€',
    budgetEstimate: 940,
    matchReasons: [
      { label: 'Ambiance conviviale', weight: 29 },
      { label: 'Caves à vin historiques', weight: 26 },
    ],
    description:
      'Ruelles colorées, caves de porto centenaires et Douro en contrebas : Porto séduit par son authenticité sans artifice.',
    weather: { season: 'Printemps', temp: '18°C' },
    bestMonths: 'Avril – Juin',
  },
  {
    id: 'budapest',
    city: 'Budapest',
    country: 'Hongrie',
    continent: 'Europe',
    score: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/View_from_Gell%C3%A9rt_Hill_to_the_Danube%2C_Hungary_-_Budapest_%2828493220635%29.jpg/960px-View_from_Gell%C3%A9rt_Hill_to_the_Danube%2C_Hungary_-_Budapest_%2828493220635%29.jpg',
    gradient: 'linear-gradient(160deg, #1E1A26 0%, #4A4062 45%, #C9945A 80%, #EDD79C 100%)',
    tags: ['Bien-être', 'Architecture'],
    duration: '4 jours',
    budgetLevel: '€',
    budgetEstimate: 890,
    matchReasons: [
      { label: 'Thermes historiques', weight: 31 },
      { label: 'Prix très accessibles', weight: 26 },
    ],
    description:
      'Bains thermaux centenaires, Danube illuminé et architecture Art nouveau : Budapest se savoure lentement, thermes compris.',
    weather: { season: 'Automne', temp: '14°C' },
    bestMonths: 'Septembre – Octobre',
  },
  {
    id: 'copenhagen',
    city: 'Copenhague',
    country: 'Danemark',
    continent: 'Europe',
    score: 86,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2018_-_Christiansborg_from_the_Marble_Bridge.jpg/960px-2018_-_Christiansborg_from_the_Marble_Bridge.jpg',
    gradient: 'linear-gradient(160deg, #1A222C 0%, #3C5468 45%, #9AAAB4 80%, #E4DCC4 100%)',
    tags: ['Art & Design', 'Gastronomie'],
    duration: '4 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1480,
    matchReasons: [
      { label: 'Design scandinave partout', weight: 28 },
      { label: 'Gastronomie créative', weight: 25 },
    ],
    description:
      'Design épuré, vélos et gastronomie créative : Copenhague incarne le raffinement discret du mode de vie nordique.',
    weather: { season: 'Été', temp: '19°C' },
    bestMonths: 'Juin – Août',
  },
  {
    id: 'zanzibar',
    city: 'Zanzibar',
    country: 'Tanzanie',
    continent: 'Afrique',
    score: 92,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Malawi_Rd%2C_Zanzibar_Town%2C_Tanzania_-_panoramio.jpg/960px-Malawi_Rd%2C_Zanzibar_Town%2C_Tanzania_-_panoramio.jpg',
    gradient: 'linear-gradient(160deg, #0E2230 0%, #1F6E8E 45%, #4FC4C0 80%, #F0E4A8 100%)',
    tags: ['Plage', 'Océan', 'Détente'],
    duration: '7 jours',
    budgetLevel: '€€',
    budgetEstimate: 1180,
    matchReasons: [
      { label: 'Plages parmi les plus belles au monde', weight: 35 },
      { label: 'Ambiance décontractée', weight: 26 },
    ],
    description:
      'Sable blanc, épices de Stone Town et eaux turquoise : Zanzibar offre un dépaysement total au large de l\'Afrique de l\'Est.',
    weather: { season: 'Sec', temp: '29°C' },
    bestMonths: 'Juin – Octobre',
  },
  {
    id: 'cairo',
    city: 'Le Caire',
    country: 'Égypte',
    continent: 'Afrique',
    score: 89,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg/960px-Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg',
    gradient: 'linear-gradient(160deg, #241C1A 0%, #7A5F3F 45%, #D9B25E 80%, #F0DDA0 100%)',
    tags: ['Histoire', 'Hors des sentiers battus'],
    duration: '5 jours',
    budgetLevel: '€',
    budgetEstimate: 880,
    matchReasons: [
      { label: 'Patrimoine antique incomparable', weight: 38 },
      { label: 'Budget très accessible', weight: 24 },
    ],
    description:
      'Pyramides de Gizeh, musées et Nil légendaire : Le Caire ouvre les portes d\'une des plus anciennes civilisations du monde.',
    weather: { season: 'Hiver', temp: '20°C' },
    bestMonths: 'Novembre – Février',
  },
  {
    id: 'serengeti',
    city: 'Serengeti',
    country: 'Tanzanie',
    continent: 'Afrique',
    score: 94,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tanzania-_Serengeti_National_Park-_elefante.jpg/960px-Tanzania-_Serengeti_National_Park-_elefante.jpg',
    gradient: 'linear-gradient(160deg, #1E1C14 0%, #5E5230 45%, #B8A05E 80%, #E8D488 100%)',
    tags: ['Nature', 'Aventure', 'Hors des sentiers battus'],
    duration: '6 jours',
    budgetLevel: '€€€€',
    budgetEstimate: 2650,
    matchReasons: [
      { label: 'Faune exceptionnelle', weight: 38 },
      { label: 'Immersion nature totale', weight: 29 },
    ],
    description:
      'La grande migration, des lions au coucher du soleil et un silence habité : le Serengeti est un safari à vivre au moins une fois.',
    weather: { season: 'Sec', temp: '25°C' },
    bestMonths: 'Juin – Septembre',
  },
  {
    id: 'victoriafalls',
    city: 'Chutes Victoria',
    country: 'Zambie / Zimbabwe',
    continent: 'Afrique',
    score: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg/960px-Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg',
    gradient: 'linear-gradient(160deg, #16242A 0%, #2C5E5B 45%, #6FAE8E 80%, #E4D9A0 100%)',
    tags: ['Nature', 'Aventure', 'Randonnée'],
    duration: '4 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1580,
    matchReasons: [
      { label: 'Spectacle naturel grandiose', weight: 36 },
      { label: 'Activités outdoor variées', weight: 25 },
    ],
    description:
      'Le « fleuve qui tonne » plonge dans des gorges vertigineuses, entouré d\'une jungle vibrante propice à l\'aventure.',
    weather: { season: 'Sec', temp: '26°C' },
    bestMonths: 'Mai – Août',
  },
  {
    id: 'bangkok',
    city: 'Bangkok',
    country: 'Thaïlande',
    continent: 'Asie',
    score: 87,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/4Y1A1159_Bangkok_%2833536795515%29.jpg/960px-4Y1A1159_Bangkok_%2833536795515%29.jpg',
    gradient: 'linear-gradient(160deg, #1E1A26 0%, #5E3F5A 45%, #D9945E 80%, #F0C878 100%)',
    tags: ['Gastronomie', 'Vie nocturne', 'Vie locale'],
    duration: '5 jours',
    budgetLevel: '€',
    budgetEstimate: 780,
    matchReasons: [
      { label: 'Street food exceptionnelle', weight: 32 },
      { label: 'Énergie urbaine dense', weight: 24 },
    ],
    description:
      'Marchés flottants, temples dorés et cuisine de rue à tous les coins : Bangkok ne dort jamais vraiment.',
    weather: { season: 'Sec', temp: '32°C' },
    bestMonths: 'Novembre – Février',
  },
  {
    id: 'singapore',
    city: 'Singapour',
    country: 'Singapour',
    continent: 'Asie',
    score: 85,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Marina_Bay_Singapore-3499.jpg/960px-Marina_Bay_Singapore-3499.jpg',
    gradient: 'linear-gradient(160deg, #101E2C 0%, #2C5C74 45%, #6FA6C4 80%, #E4D9A0 100%)',
    tags: ['Architecture', 'Gastronomie', 'Vie urbaine'],
    duration: '4 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1620,
    matchReasons: [
      { label: 'Ville-jardin futuriste', weight: 27 },
      { label: 'Diversité culinaire', weight: 25 },
    ],
    description:
      'Jardins verticaux, hawker centers et skyline futuriste : Singapour condense l\'Asie dans une cité-État impeccable.',
    weather: { season: 'Toute l’année', temp: '30°C' },
    bestMonths: 'Février – Avril',
  },
  {
    id: 'halongbay',
    city: 'Baie d’Ha Long',
    country: 'Vietnam',
    continent: 'Asie',
    score: 91,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ha_Long_Bay_in_2019.jpg/960px-Ha_Long_Bay_in_2019.jpg',
    gradient: 'linear-gradient(160deg, #0E2230 0%, #1F6E7E 45%, #6FBEB8 80%, #E4E4A8 100%)',
    tags: ['Nature', 'Hors des sentiers battus', 'Océan'],
    duration: '5 jours',
    budgetLevel: '€',
    budgetEstimate: 920,
    matchReasons: [
      { label: 'Paysage karstique unique', weight: 35 },
      { label: 'Rythme de croisière apaisant', weight: 26 },
    ],
    description:
      'Îlots karstiques émergeant d\'une mer d\'émeraude : la baie d\'Ha Long se découvre au fil de l\'eau, en jonque traditionnelle.',
    weather: { season: 'Sec', temp: '24°C' },
    bestMonths: 'Octobre – Décembre',
  },
  {
    id: 'seoul',
    city: 'Séoul',
    country: 'Corée du Sud',
    continent: 'Asie',
    score: 86,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/%EC%A4%91%ED%99%94%EC%A0%84%EC%9D%98_%EB%82%AE.jpg/960px-%EC%A4%91%ED%99%94%EC%A0%84%EC%9D%98_%EB%82%AE.jpg',
    gradient: 'linear-gradient(160deg, #1A1D2A 0%, #3B4258 45%, #9A8299 80%, #E4C9A0 100%)',
    tags: ['Vie nocturne', 'Art & Design', 'Gastronomie'],
    duration: '5 jours',
    budgetLevel: '€€',
    budgetEstimate: 1280,
    matchReasons: [
      { label: 'Contraste tradition/modernité', weight: 28 },
      { label: 'Scène créative foisonnante', weight: 25 },
    ],
    description:
      'Palais royaux, quartiers ultra-modernes et cuisine de rue animée : Séoul avance à toute vitesse sans oublier son histoire.',
    weather: { season: 'Automne', temp: '16°C' },
    bestMonths: 'Septembre – Novembre',
  },
  {
    id: 'hongkong',
    city: 'Hong Kong',
    country: 'Chine',
    continent: 'Asie',
    score: 84,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Hong_Kong_Skyline_viewed_from_Victoria_Peak.jpg/960px-Hong_Kong_Skyline_viewed_from_Victoria_Peak.jpg',
    gradient: 'linear-gradient(160deg, #101820 0%, #2C4258 45%, #7A96A6 80%, #E4D9A0 100%)',
    tags: ['Architecture', 'Gastronomie', 'Randonnée'],
    duration: '4 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1550,
    matchReasons: [
      { label: 'Skyline vertigineux', weight: 26 },
      { label: 'Nature surprenante à proximité', weight: 24 },
    ],
    description:
      'Gratte-ciels serrés, marchés nocturnes et sentiers de randonnée à peine à une heure du centre : Hong Kong surprend par ses contrastes.',
    weather: { season: 'Automne', temp: '24°C' },
    bestMonths: 'Octobre – Décembre',
  },
  {
    id: 'maldives',
    city: 'Maldives',
    country: 'Maldives',
    continent: 'Asie',
    score: 93,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Mal%C3%A9.jpg/960px-Mal%C3%A9.jpg',
    gradient: 'linear-gradient(160deg, #0E2230 0%, #1F97A8 45%, #6FE0D8 80%, #F0E4A8 100%)',
    tags: ['Océan', 'Détente', 'Romantisme'],
    duration: '6 jours',
    budgetLevel: '€€€€',
    budgetEstimate: 3200,
    matchReasons: [
      { label: 'Lagons parmi les plus purs au monde', weight: 37 },
      { label: 'Cadre romantique exceptionnel', weight: 28 },
    ],
    description:
      'Bungalows sur pilotis, récifs coralliens et eaux cristallines : les Maldives incarnent la déconnexion totale face à l\'océan Indien.',
    weather: { season: 'Sec', temp: '29°C' },
    bestMonths: 'Décembre – Avril',
  },
  {
    id: 'jaipur',
    city: 'Jaipur',
    country: 'Inde',
    continent: 'Asie',
    score: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/960px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg',
    gradient: 'linear-gradient(160deg, #241820 0%, #7A3F42 45%, #D9945E 80%, #F0C878 100%)',
    tags: ['Histoire', 'Artisanat', 'Architecture'],
    duration: '5 jours',
    budgetLevel: '€',
    budgetEstimate: 760,
    matchReasons: [
      { label: 'Patrimoine royal spectaculaire', weight: 33 },
      { label: 'Artisanat local vivant', weight: 24 },
    ],
    description:
      'La « ville rose » déploie forts, palais et bazars animés dans un festival ininterrompu de couleurs et de savoir-faire.',
    weather: { season: 'Hiver', temp: '22°C' },
    bestMonths: 'Novembre – Février',
  },
  {
    id: 'kathmandu',
    city: 'Katmandou',
    country: 'Népal',
    continent: 'Asie',
    score: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Kathmandu-Durbar_Square-06-Mahavishnu-Kuh-Vishnu-Pratapamalla-Jagannath-2007-gje.jpg/960px-Kathmandu-Durbar_Square-06-Mahavishnu-Kuh-Vishnu-Pratapamalla-Jagannath-2007-gje.jpg',
    gradient: 'linear-gradient(160deg, #1C1E28 0%, #4A4A62 45%, #9EA0B0 80%, #E4D9C4 100%)',
    tags: ['Spiritualité', 'Randonnée', 'Hors des sentiers battus'],
    duration: '9 jours',
    budgetLevel: '€€',
    budgetEstimate: 1350,
    matchReasons: [
      { label: 'Portail vers l’Himalaya', weight: 34 },
      { label: 'Immersion spirituelle forte', weight: 27 },
    ],
    description:
      'Temples millénaires et sommets himalayens à l\'horizon : Katmandou est le point de départ d\'une aventure entre spiritualité et altitude.',
    weather: { season: 'Sec', temp: '20°C' },
    bestMonths: 'Mars – Mai',
  },
  {
    id: 'istanbul',
    city: 'Istanbul',
    country: 'Turquie',
    continent: 'Moyen-Orient',
    score: 91,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Historical_peninsula_and_modern_skyline_of_Istanbul.jpg/960px-Historical_peninsula_and_modern_skyline_of_Istanbul.jpg',
    gradient: 'linear-gradient(160deg, #1A222C 0%, #3C5468 45%, #C9945A 80%, #F0DDA0 100%)',
    tags: ['Histoire', 'Gastronomie', 'Vie locale'],
    duration: '5 jours',
    budgetLevel: '€€',
    budgetEstimate: 980,
    matchReasons: [
      { label: 'Carrefour de civilisations', weight: 34 },
      { label: 'Marchés et saveurs intenses', weight: 26 },
    ],
    description:
      'À cheval sur deux continents, Istanbul superpose mosquées ottomanes, bazars millénaires et Bosphore animé.',
    weather: { season: 'Automne', temp: '19°C' },
    bestMonths: 'Septembre – Novembre',
  },
  {
    id: 'jerusalem',
    city: 'Jérusalem',
    country: 'Israël',
    continent: 'Moyen-Orient',
    score: 87,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Dome_of_the_Rock_seen_from_the_Mount_of_Olives_%2812395649153%29_%28cropped%29.jpg/960px-Dome_of_the_Rock_seen_from_the_Mount_of_Olives_%2812395649153%29_%28cropped%29.jpg',
    gradient: 'linear-gradient(160deg, #241C1A 0%, #7A5F3F 45%, #D9B25E 80%, #F0DDA0 100%)',
    tags: ['Histoire', 'Spiritualité', 'Hors des sentiers battus'],
    duration: '5 jours',
    budgetLevel: '€€',
    budgetEstimate: 1150,
    matchReasons: [
      { label: 'Densité historique unique', weight: 36 },
      { label: 'Signification spirituelle forte', weight: 25 },
    ],
    description:
      'Trois religions, une vieille ville : Jérusalem condense des millénaires d\'histoire dans un dédale de ruelles de pierre.',
    weather: { season: 'Printemps', temp: '21°C' },
    bestMonths: 'Avril – Mai',
  },
  {
    id: 'banff',
    city: 'Banff',
    country: 'Canada',
    continent: 'Amérique du Nord',
    score: 92,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Town_of_Banff_viewed_from_Sulphur_Mountain.jpg/960px-Town_of_Banff_viewed_from_Sulphur_Mountain.jpg',
    gradient: 'linear-gradient(160deg, #16242A 0%, #2C5E5E 45%, #6FA692 80%, #E4D488 100%)',
    tags: ['Nature', 'Randonnée', 'Aventure'],
    duration: '7 jours',
    budgetLevel: '€€€',
    budgetEstimate: 1980,
    matchReasons: [
      { label: 'Lacs et sommets spectaculaires', weight: 36 },
      { label: 'Randonnées pour tous niveaux', weight: 27 },
    ],
    description:
      'Lacs turquoise, glaciers et forêts de conifères : Banff est un concentré des Rocheuses canadiennes à l\'état pur.',
    weather: { season: 'Été', temp: '18°C' },
    bestMonths: 'Juin – Septembre',
  },
  {
    id: 'grandcanyon',
    city: 'Grand Canyon',
    country: 'États-Unis',
    continent: 'Amérique du Nord',
    score: 93,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/960px-Canyon_River_Tree_%28165872763%29.jpeg',
    gradient: 'linear-gradient(160deg, #241C1A 0%, #7A4F3F 45%, #D9945E 80%, #F0C878 100%)',
    tags: ['Nature', 'Randonnée', 'Hors des sentiers battus'],
    duration: '4 jours',
    budgetLevel: '€€',
    budgetEstimate: 1320,
    matchReasons: [
      { label: 'Paysage grandiose et unique', weight: 38 },
      { label: 'Randonnées mémorables', weight: 26 },
    ],
    description:
      'Un million d\'années d\'érosion à ciel ouvert : le Grand Canyon impressionne par son échelle, à toute heure du jour.',
    weather: { season: 'Printemps', temp: '21°C' },
    bestMonths: 'Avril – Mai',
  },
  {
    id: 'mexicocity',
    city: 'Mexico',
    country: 'Mexique',
    continent: 'Amérique du Nord',
    score: 86,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg/960px-Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg',
    gradient: 'linear-gradient(160deg, #1E1A26 0%, #5E3F5A 45%, #C9945A 80%, #EDD79C 100%)',
    tags: ['Art & Design', 'Gastronomie', 'Histoire'],
    duration: '5 jours',
    budgetLevel: '€',
    budgetEstimate: 890,
    matchReasons: [
      { label: 'Scène artistique bouillonnante', weight: 29 },
      { label: 'Gastronomie de rue exceptionnelle', weight: 26 },
    ],
    description:
      'Musées de classe mondiale, marchés colorés et gastronomie de rue : Mexico rivalise avec les plus grandes capitales culturelles.',
    weather: { season: 'Sec', temp: '23°C' },
    bestMonths: 'Novembre – Avril',
  },
  {
    id: 'havana',
    city: 'La Havane',
    country: 'Cuba',
    continent: 'Amérique du Nord',
    score: 85,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/DJI_0197_crp_wiki.jpg/960px-DJI_0197_crp_wiki.jpg',
    gradient: 'linear-gradient(160deg, #1E2436 0%, #3E4E72 45%, #D98C5F 80%, #F0C27B 100%)',
    tags: ['Vie locale', 'Vie nocturne', 'Hors des sentiers battus'],
    duration: '6 jours',
    budgetLevel: '€€',
    budgetEstimate: 1080,
    matchReasons: [
      { label: 'Atmosphère hors du temps', weight: 30 },
      { label: 'Musique vivante partout', weight: 25 },
    ],
    description:
      'Voitures d\'époque, musique dans chaque ruelle et façades pastel : La Havane cultive un charme suspendu dans le temps.',
    weather: { season: 'Sec', temp: '27°C' },
    bestMonths: 'Décembre – Avril',
  },
  {
    id: 'buenosaires',
    city: 'Buenos Aires',
    country: 'Argentine',
    continent: 'Amérique du Sud',
    score: 87,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Avenida_9_de_Julio%2C_Buenos_Aires_%2840089810910%29.jpg/960px-Avenida_9_de_Julio%2C_Buenos_Aires_%2840089810910%29.jpg',
    gradient: 'linear-gradient(160deg, #1A1D2A 0%, #3B4258 45%, #9A8299 80%, #E4C9A0 100%)',
    tags: ['Vie nocturne', 'Art & Design', 'Gastronomie'],
    duration: '6 jours',
    budgetLevel: '€€',
    budgetEstimate: 1180,
    matchReasons: [
      { label: 'Énergie culturelle intense', weight: 29 },
      { label: 'Gastronomie et tango vivants', weight: 25 },
    ],
    description:
      'Tango de rue, steakhouses animées et quartiers d\'art foisonnants : Buenos Aires vit la nuit autant que le jour.',
    weather: { season: 'Automne', temp: '20°C' },
    bestMonths: 'Mars – Mai',
  },
  {
    id: 'cartagena',
    city: 'Carthagène',
    country: 'Colombie',
    continent: 'Amérique du Sud',
    score: 89,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Museo_Naval_del_Caribe.JPG/960px-Museo_Naval_del_Caribe.JPG',
    gradient: 'linear-gradient(160deg, #0E2230 0%, #1F6E8E 45%, #D9945E 80%, #F0DDA0 100%)',
    tags: ['Histoire', 'Plage', 'Architecture'],
    duration: '5 jours',
    budgetLevel: '€€',
    budgetEstimate: 1020,
    matchReasons: [
      { label: 'Vieille ville coloniale colorée', weight: 31 },
      { label: 'Plages caribéennes accessibles', weight: 25 },
    ],
    description:
      'Remparts coloniaux, façades colorées et Caraïbes à deux pas : Carthagène marie histoire et douceur de vivre tropicale.',
    weather: { season: 'Sec', temp: '30°C' },
    bestMonths: 'Décembre – Avril',
  },
  {
    id: 'torresdelpaine',
    city: 'Torres del Paine',
    country: 'Chili',
    continent: 'Amérique du Sud',
    score: 93,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Torres_del_Paine_y_cuernos_del_Paine%2C_montaje.jpg/960px-Torres_del_Paine_y_cuernos_del_Paine%2C_montaje.jpg',
    gradient: 'linear-gradient(160deg, #16242A 0%, #2C5E5E 45%, #6FA692 80%, #E4D488 100%)',
    tags: ['Nature', 'Randonnée', 'Aventure'],
    duration: '8 jours',
    budgetLevel: '€€€',
    budgetEstimate: 2180,
    matchReasons: [
      { label: 'Paysages patagoniens spectaculaires', weight: 38 },
      { label: 'Trek d’exception', weight: 28 },
    ],
    description:
      'Tours de granit, glaciers bleutés et vents patagoniens : Torres del Paine est un sanctuaire pour les amoureux de grands espaces.',
    weather: { season: 'Été austral', temp: '14°C' },
    bestMonths: 'Novembre – Mars',
  },

]

export const activities = [
  {
    id: 'fushimi-dawn',
    destinationId: 'kyoto',
    title: 'Lever de soleil à Fushimi Inari',
    category: 'Nature & spiritualité',
    duration: '2h30',
    price: 0,
    priceLabel: 'Gratuit',
    offbeat: true,
    gradient: 'linear-gradient(155deg, #201826 0%, #7A3B3B 50%, #E38A4C 100%)',
    host: 'Recommandé par Aiko, guide locale',
    description:
      "Arriver avant 6h pour remonter les milliers de torii vermillon sans la foule, jusqu'au sommet du mont Inari où la ville se révèle dans la brume.",
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 'tea-ceremony',
    destinationId: 'kyoto',
    title: 'Cérémonie du thé chez l’habitant',
    category: 'Culture',
    duration: '1h30',
    price: 42,
    priceLabel: '42 €',
    offbeat: true,
    gradient: 'linear-gradient(155deg, #1E2A24 0%, #3C5B4E 50%, #C9A15A 100%)',
    host: 'Hébergé par la famille Watanabe',
    description:
      "Une cérémonie intimiste dans une maison machiya du XIXe siècle, animée par une praticienne de troisième génération.",
    rating: 5.0,
    reviews: 87,
  },
  {
    id: 'nishiki-market',
    destinationId: 'kyoto',
    title: 'Dégustation au marché Nishiki',
    category: 'Gastronomie',
    duration: '2h',
    price: 58,
    priceLabel: '58 €',
    offbeat: false,
    gradient: 'linear-gradient(155deg, #241A1E 0%, #6E3A3F 50%, #E0A24D 100%)',
    host: 'Guidé par un chef local',
    description:
      "Parcours gourmand dans « la cuisine de Kyoto » : tsukemono, tofu yuba et douceurs mochi, marché après marché.",
    rating: 4.8,
    reviews: 201,
  },
  {
    id: 'fado-night',
    destinationId: 'lisbonne',
    title: 'Soirée fado dans l’Alfama',
    category: 'Culture & musique',
    duration: '3h',
    price: 35,
    priceLabel: '35 €',
    offbeat: true,
    gradient: 'linear-gradient(155deg, #16202B 0%, #2E4A5C 50%, #D98C5F 100%)',
    host: 'Table chez Casa Fernanda',
    description:
      'Dîner et fado vivant dans une taverne familiale à peine 20 places, loin des circuits touristiques.',
    rating: 4.9,
    reviews: 154,
  },
]

export const itinerary = {
  destinationId: 'kyoto',
  totalBudget: 1850,
  spentBreakdown: [
    { label: 'Hébergement', amount: 720, color: 'pine' },
    { label: 'Activités', amount: 460, color: 'gold' },
    { label: 'Repas', amount: 410, color: 'berry' },
    { label: 'Transport', amount: 260, color: 'mint' },
  ],
  days: [
    {
      day: 1,
      title: 'Arrivée & Higashiyama',
      items: [
        { time: '14:00', label: 'Installation à la machiya de Gion', type: 'stay' },
        { time: '16:30', label: 'Balade dans les ruelles de Higashiyama', type: 'walk' },
        { time: '19:00', label: 'Dîner kaiseki intimiste', type: 'food' },
      ],
    },
    {
      day: 2,
      title: 'Sanctuaires & marché',
      items: [
        { time: '05:45', label: 'Lever de soleil à Fushimi Inari', type: 'activity' },
        { time: '11:00', label: 'Dégustation au marché Nishiki', type: 'food' },
        { time: '15:00', label: 'Cérémonie du thé chez l’habitant', type: 'activity' },
      ],
    },
    {
      day: 3,
      title: 'Arashiyama',
      items: [
        { time: '08:00', label: 'Forêt de bambous, avant l’affluence', type: 'walk' },
        { time: '10:30', label: 'Pont Togetsukyo & sanctuaire des singes', type: 'walk' },
        { time: '18:30', label: 'Onsen et dîner libre', type: 'rest' },
      ],
    },
  ],
}

export const chatSuggestions = [
  'Trouve-moi une destination pour un week-end de 3 jours',
  'Je veux éviter la foule, une idée ?',
  'Ajuste mon budget à 800€',
]

export const chatSeed = [
  {
    role: 'ai',
    text: "Bonjour Camille — j'ai regardé votre profil : voyageuse solo, budget confort, envie de calme. Je vous propose de creuser Kyoto ou Chiang Mai. On commence par laquelle ?",
  },
  { role: 'user', text: 'Plutôt Kyoto, mais je voudrais éviter les foules.' },
  {
    role: 'ai',
    text: "Compris. J'ai ajusté votre itinéraire : lever tôt à Fushimi Inari, Arashiyama avant 8h, et une cérémonie du thé privée plutôt qu'en groupe. Score de compatibilité mis à jour : 96 → 98.",
  },
]

export const dashboardTrip = {
  destination: destinations[0],
  departureDate: '14 novembre 2026',
  daysLeft: 34,
  checklist: [
    { label: 'Passeport valide 6 mois', done: true },
    { label: 'Réserver le JR Pass', done: true },
    { label: 'Assurance voyage', done: false },
    { label: 'Prévenir la banque', done: false },
  ],
}

export const userProfile = {
  name: 'Camille Berthier',
  handle: '@camille.explore',
  memberSince: '2024',
  stats: [
    { label: 'Pays visités', value: 14 },
    { label: 'Voyages IA', value: 8 },
    { label: 'Score voyageur', value: '92' },
  ],
  travelerType: 'Explorateur culturel',
  interests: ['Culture', 'Gastronomie', 'Randonnée', 'Photographie'],
  visitedCountries: ['fr', 'it', 'es', 'pt', 'gr', 'jp', 'ma', 'mx', 'pe', 'th', 'vn', 'is', 'us', 'in'],
  preferences: [
    { label: 'Budget habituel', value: 'Confort · €€' },
    { label: 'Compagnons de route', value: 'Solo ou en couple' },
    { label: 'Rythme préféré', value: 'Posé, peu de trajets/jour' },
  ],
}

// Maps each quiz "mood" / interest chip to the destination tags it implies,
// so the results screen can actually filter & rank the 50 destinations
// instead of always showing the same static list.
const MOOD_TAGS = {
  'Me ressourcer': ['Détente', 'Bien-être', 'Sérénité', 'Spiritualité'],
  'Vivre l’aventure': ['Aventure', 'Randonnée', 'Nature'],
  'Découvrir une culture': ['Histoire', 'Culture', 'Architecture', 'Artisanat'],
  'Faire de belles photos': ['Art & Design', 'Architecture'],
  'Rencontrer des locaux': ['Vie locale', 'Artisanat'],
  'Ne rien faire': ['Détente', 'Océan', 'Plage', 'Romantisme'],
}

const INTEREST_TAGS = {
  nature: ['Nature', 'Randonnée'],
  gastronomie: ['Gastronomie', 'Vin'],
  culture: ['Culture', 'Histoire', 'Architecture'],
  nightlife: ['Vie nocturne'],
  bienetre: ['Bien-être', 'Détente', 'Spiritualité'],
  randonnee: ['Randonnée', 'Aventure', 'Nature'],
  plage: ['Plage', 'Océan'],
  artisanat: ['Artisanat', 'Vie locale'],
  histoire: ['Histoire', 'Architecture'],
  photo: ['Art & Design', 'Architecture'],
}

/**
 * Ranks the destination database against the traveler's current criteria
 * (mood chips, interest chips, budget). Returns the whole list sorted by
 * relevance so the results screen visibly reacts to what was just answered.
 */
// Rough "worth the flight" floor: how many nights make sense given how far
// the destination is, so a 5-night trip doesn't get recommended for a
// long-haul continent that eats 2 of those days in transit alone.
const MIN_NIGHTS_BY_CONTINENT = {
  Europe: 2,
  'Moyen-Orient': 4,
  Afrique: 5,
  Asie: 6,
  'Amérique du Nord': 6,
  'Amérique du Sud': 8,
  Océanie: 9,
}
export function minNightsFor(destination) {
  return MIN_NIGHTS_BY_CONTINENT[destination.continent] || 4
}

// A realistic "worth the trip" duration range, driven by actual travel time
// from the chosen departure city rather than a fixed per-destination number
// — so short stays are only ever suggested for destinations that are
// genuinely close, and far-flung ones always get a longer recommended range.
export function recommendedDuration(destination, departureCityId) {
  const departure = departureCities.find((c) => c.id === departureCityId) || departureCities[0]
  const travelHours = (CONTINENT_FLIGHT_HOURS[destination.continent] || 8) + departure.hoursAdd
  const minNights = minNightsFor(destination)
  const buffer = travelHours > 15 ? 4 : travelHours > 8 ? 3 : 2
  return `${minNights}-${minNights + buffer} jours`
}

export function matchDestinations({ mood = [], interests = [], budget = 3000, nights = 7 } = {}) {
  const wantedTags = new Set()
  mood.forEach((m) => (MOOD_TAGS[m] || []).forEach((t) => wantedTags.add(t)))
  interests.forEach((i) => (INTEREST_TAGS[i] || []).forEach((t) => wantedTags.add(t)))

  return destinations
    .map((d) => {
      const overlap = d.tags.filter((t) => wantedTags.has(t)).length
      const budgetFit = d.budgetEstimate <= budget ? 1 : d.budgetEstimate <= budget * 1.4 ? 0.4 : 0
      const minNights = minNightsFor(d)
      const nightsFit = nights >= minNights ? 1 : nights >= minNights - 2 ? 0.5 : 0.15
      const matchScore = overlap * 16 + budgetFit * 12 + d.score * 0.25 + nightsFit * 10
      return { ...d, matchScore, minNights }
    })
    .sort((a, b) => b.matchScore - a.matchScore)
}

// ---- Weather that actually follows the travel dates ----

const MONTHS_FR = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

function parseBestMonths(bestMonths) {
  const parts = (bestMonths || '').split('–').map((s) => s.trim().toLowerCase())
  const idx = parts.map((p) => MONTHS_FR.findIndex((m) => p.includes(m)))
  if (idx.length < 2 || idx.some((i) => i < 0)) return { months: new Set([5, 6, 7]), anchor: 6 }
  let [a, b] = idx
  const months = new Set()
  let cursor = a
  months.add(cursor)
  while (cursor !== b) {
    cursor = (cursor + 1) % 12
    months.add(cursor)
  }
  const span = b >= a ? b - a : b + 12 - a
  const anchor = (a + Math.round(span / 2)) % 12
  return { months, anchor }
}

function seasonLabel(monthIdx, hemisphere) {
  const m = hemisphere === 1 ? monthIdx : (monthIdx + 6) % 12
  if (m === 11 || m <= 1) return 'Hiver'
  if (m <= 4) return 'Printemps'
  if (m <= 7) return 'Été'
  return 'Automne'
}

// hemisphere: 1 = peak heat in July (north), -1 = peak heat in January (south)
// amplitude: typical swing in °C between the coldest and hottest month
// rain: 'dry' (desert, rain stays low year-round), 'monsoon' (sharp wet/dry
// contrast) or 'temperate' (moderate seasonal swing) — drives precipitation
// level and the day/night temperature spread
const CLIMATE_PROFILE = {
  kyoto: { hemisphere: 1, amplitude: 13, rain: 'monsoon' },
  lisbonne: { hemisphere: 1, amplitude: 9, rain: 'temperate' },
  oaxaca: { hemisphere: 1, amplitude: 5, rain: 'monsoon' },
  douro: { hemisphere: 1, amplitude: 11, rain: 'temperate' },
  chiangmai: { hemisphere: 1, amplitude: 4, rain: 'monsoon' },
  paris: { hemisphere: 1, amplitude: 11, rain: 'temperate' },
  rome: { hemisphere: 1, amplitude: 11, rain: 'temperate' },
  santorin: { hemisphere: 1, amplitude: 10, rain: 'temperate' },
  reykjavik: { hemisphere: 1, amplitude: 10, rain: 'temperate' },
  marrakech: { hemisphere: 1, amplitude: 14, rain: 'dry' },
  capetown: { hemisphere: -1, amplitude: 8, rain: 'temperate' },
  newyork: { hemisphere: 1, amplitude: 17, rain: 'temperate' },
  rio: { hemisphere: -1, amplitude: 6, rain: 'monsoon' },
  machupicchu: { hemisphere: -1, amplitude: 4, rain: 'monsoon' },
  bali: { hemisphere: -1, amplitude: 3, rain: 'monsoon' },
  dubai: { hemisphere: 1, amplitude: 15, rain: 'dry' },
  petra: { hemisphere: 1, amplitude: 15, rain: 'dry' },
  sydney: { hemisphere: -1, amplitude: 8, rain: 'temperate' },
  queenstown: { hemisphere: -1, amplitude: 9, rain: 'temperate' },
  borabora: { hemisphere: -1, amplitude: 2, rain: 'monsoon' },
  barcelona: { hemisphere: 1, amplitude: 11, rain: 'temperate' },
  amsterdam: { hemisphere: 1, amplitude: 10, rain: 'temperate' },
  prague: { hemisphere: 1, amplitude: 13, rain: 'temperate' },
  vienna: { hemisphere: 1, amplitude: 12, rain: 'temperate' },
  venice: { hemisphere: 1, amplitude: 12, rain: 'temperate' },
  edinburgh: { hemisphere: 1, amplitude: 8, rain: 'temperate' },
  porto: { hemisphere: 1, amplitude: 9, rain: 'temperate' },
  budapest: { hemisphere: 1, amplitude: 13, rain: 'temperate' },
  copenhagen: { hemisphere: 1, amplitude: 10, rain: 'temperate' },
  zanzibar: { hemisphere: -1, amplitude: 3, rain: 'monsoon' },
  cairo: { hemisphere: 1, amplitude: 12, rain: 'dry' },
  serengeti: { hemisphere: -1, amplitude: 4, rain: 'monsoon' },
  victoriafalls: { hemisphere: -1, amplitude: 8, rain: 'monsoon' },
  bangkok: { hemisphere: 1, amplitude: 4, rain: 'monsoon' },
  singapore: { hemisphere: 1, amplitude: 1, rain: 'monsoon' },
  halongbay: { hemisphere: 1, amplitude: 9, rain: 'monsoon' },
  seoul: { hemisphere: 1, amplitude: 15, rain: 'monsoon' },
  hongkong: { hemisphere: 1, amplitude: 9, rain: 'monsoon' },
  maldives: { hemisphere: 1, amplitude: 1, rain: 'monsoon' },
  jaipur: { hemisphere: 1, amplitude: 12, rain: 'monsoon' },
  kathmandu: { hemisphere: 1, amplitude: 8, rain: 'monsoon' },
  istanbul: { hemisphere: 1, amplitude: 12, rain: 'temperate' },
  jerusalem: { hemisphere: 1, amplitude: 10, rain: 'temperate' },
  banff: { hemisphere: 1, amplitude: 17, rain: 'temperate' },
  grandcanyon: { hemisphere: 1, amplitude: 15, rain: 'dry' },
  mexicocity: { hemisphere: 1, amplitude: 5, rain: 'monsoon' },
  havana: { hemisphere: 1, amplitude: 5, rain: 'monsoon' },
  buenosaires: { hemisphere: -1, amplitude: 9, rain: 'temperate' },
  cartagena: { hemisphere: 1, amplitude: 2, rain: 'monsoon' },
  torresdelpaine: { hemisphere: -1, amplitude: 8, rain: 'temperate' },
}

const TEMP_SWING_BY_RAIN = { dry: 13, monsoon: 6, temperate: 8 }

function precipitationLevel(monthIdx, anchor, rain) {
  const dist = Math.min(Math.abs(monthIdx - anchor), 12 - Math.abs(monthIdx - anchor))
  if (rain === 'dry') return dist >= 5 ? 'Modérée' : 'Faible'
  if (dist <= 1) return 'Faible'
  if (dist <= 3) return 'Modérée'
  return 'Élevée'
}

// dateISO/endISO: selected travel period. When both are set, the average is
// computed for the midpoint of the stay so a trip spanning two months isn't
// skewed toward the departure date alone.
export function weatherForDate(destination, dateISO, endISO) {
  const profile = CLIMATE_PROFILE[destination.id] || { hemisphere: 1, amplitude: 10, rain: 'temperate' }
  const { months: bestMonthSet, anchor } = parseBestMonths(destination.bestMonths)
  const baseTemp = parseInt(destination.weather.temp, 10) || 20
  const hottestMonth = profile.hemisphere === 1 ? 6 : 0
  const angle = (m) => (2 * Math.PI * (m - hottestMonth)) / 12
  const mean = baseTemp - profile.amplitude * Math.cos(angle(anchor))

  const typical = !dateISO
  let monthIdx = anchor
  if (dateISO) {
    const start = new Date(dateISO)
    const end = endISO ? new Date(endISO) : start
    monthIdx = new Date((start.getTime() + end.getTime()) / 2).getMonth()
  }

  const temp = Math.round(mean + profile.amplitude * Math.cos(angle(monthIdx)))
  const swing = TEMP_SWING_BY_RAIN[profile.rain] || 8
  const season = seasonLabel(monthIdx, profile.hemisphere)
  return {
    temp: `${temp}°C`,
    tempMin: `${Math.round(temp - swing / 2)}°C`,
    tempMax: `${Math.round(temp + swing / 2)}°C`,
    season,
    precipitation: precipitationLevel(monthIdx, anchor, profile.rain),
    note: bestMonthSet.has(monthIdx) ? destination.weather.note : undefined,
    typical,
  }
}

// Deterministic mock "search results" for transport & lodging, scaled to each
// destination's budget level. Not a real API — illustrates what a booking
// integration would surface once real flight/stay providers are wired in.
function hashString(s) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return h
}

function formatDuration(hours) {
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  return m > 0 ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`
}

const AIRLINES = ['Air France', 'KLM', 'Lufthansa', 'Turkish Airlines', 'Emirates', 'Qatar Airways', 'British Airways', 'Iberia']
const STOPOVER_CITIES = ['Istanbul', 'Doha', 'Amsterdam', 'Dubaï', 'Francfort', 'Londres', 'Madrid']
const CONTINENT_FLIGHT_HOURS = {
  Europe: 2.5,
  Afrique: 7,
  Asie: 10,
  'Moyen-Orient': 6,
  'Amérique du Nord': 9,
  'Amérique du Sud': 11,
  Océanie: 21,
}

export const flightsFromCity = 'Paris'

function lodgingSearchUrl(source, destination) {
  const place = `${destination.city}, ${destination.country}`
  if (source === 'Airbnb') return `https://www.airbnb.fr/s/${encodeURIComponent(`${destination.city}--${destination.country}`)}/homes`
  if (source === 'Booking.com') return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(place)}`
  if (source === 'Vrbo') return `https://www.vrbo.com/search?destination=${encodeURIComponent(place)}`
  return null
}

export function getStayOptions(destination) {
  const basePerNight = Math.max(25, Math.round((destination.budgetEstimate * 0.085) / 5) * 5)
  return [
    {
      source: 'Airbnb',
      title: 'Appartement cosy en centre-ville',
      type: 'Appartement entier',
      pricePerNight: basePerNight + 6,
      rating: 4.8,
      url: lodgingSearchUrl('Airbnb', destination),
    },
    {
      source: 'Booking.com',
      title: 'Hôtel bien noté, proche des sites',
      type: 'Hôtel 3★',
      pricePerNight: Math.max(20, basePerNight - 8),
      rating: 4.5,
      url: lodgingSearchUrl('Booking.com', destination),
    },
    {
      source: 'Vrbo',
      title: 'Maison avec espace extérieur',
      type: 'Maison entière',
      pricePerNight: basePerNight + 18,
      rating: 4.9,
      url: lodgingSearchUrl('Vrbo', destination),
    },
  ]
}

// ---- Multi-modal transport: seasonal pricing + carrier badges ----

function seasonMultiplier(dateStr) {
  if (!dateStr) return 1
  const month = new Date(dateStr).getMonth()
  if ([5, 6, 7, 11].includes(month)) return 1.35
  if ([3, 4, 8, 9].includes(month)) return 1.1
  return 0.85
}

function initials(name) {
  return name.split(' ').filter(Boolean).map((w) => w[0]).join('').slice(0, 3).toUpperCase()
}

const BADGE_TONES = ['pine', 'gold', 'berry', 'mint']
function badgeTone(name) {
  return BADGE_TONES[hashString(name) % BADGE_TONES.length]
}
const CARRIER_URLS = {
  'Air France': 'https://www.airfrance.fr',
  KLM: 'https://www.klm.fr',
  Lufthansa: 'https://www.lufthansa.com',
  'Turkish Airlines': 'https://www.turkishairlines.com',
  Emirates: 'https://www.emirates.com',
  'Qatar Airways': 'https://www.qatarairways.com',
  'British Airways': 'https://www.britishairways.com',
  Iberia: 'https://www.iberia.com',
  'SNCF Connect': 'https://www.sncf-connect.com',
  Eurostar: 'https://www.eurostar.com',
  Trenitalia: 'https://www.trenitalia.com',
  Renfe: 'https://www.renfe.com',
  'Deutsche Bahn': 'https://www.bahn.de',
  FlixBus: 'https://www.flixbus.fr',
  BlaBlaBus: 'https://www.blablacar.fr/bus',
  Eurolines: 'https://www.eurolines.fr',
  BlaBlaCar: 'https://www.blablacar.fr',
}
function carrier(name) {
  return { name, code: initials(name), tone: badgeTone(name), url: CARRIER_URLS[name] || null }
}

const TRAIN_COMPANIES = ['SNCF Connect', 'Eurostar', 'Trenitalia', 'Renfe', 'Deutsche Bahn']
const BUS_COMPANIES = ['FlixBus', 'BlaBlaBus', 'Eurolines']
const CARPOOL_COMPANIES = ['BlaBlaCar']
const GROUND_STOPOVER_CITIES = ['Bruxelles', 'Lyon', 'Milan', 'Amsterdam', 'Barcelone']

// Typical round-trip economy fare from Paris by continent (€), calibrated
// against real-world airfare ranges rather than tied to the trip's overall
// budget estimate — flights to far continents cost more even when the
// destination itself is inexpensive to live in.
const CONTINENT_BASE_FARE = {
  Europe: 130,
  'Moyen-Orient': 420,
  Afrique: 480,
  Asie: 620,
  'Amérique du Nord': 560,
  'Amérique du Sud': 750,
  Océanie: 1150,
}

function haversineKm(a, b) {
  const R = 6371
  const dLat = ((b.lat - a.lat) * Math.PI) / 180
  const dLon = ((b.lon - a.lon) * Math.PI) / 180
  const lat1 = (a.lat * Math.PI) / 180
  const lat2 = (b.lat * Math.PI) / 180
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h))
}

export function getTransportOptions(destination, dates = {}) {
  const seed = hashString(destination.id)
  const departure = departureCities.find((c) => c.id === dates.departureCity) || departureCities[0]
  const baseHours = (CONTINENT_FLIGHT_HOURS[destination.continent] || 8) + departure.hoursAdd
  const seasonMult = seasonMultiplier(dates.startDate)
  const fareVariance = 0.85 + (seed % 30) / 100
  const baseDirectPrice = Math.round(
    ((CONTINENT_BASE_FARE[destination.continent] || 500) * seasonMult * departure.priceMult * fareVariance) / 5
  ) * 5
  const stop1 = STOPOVER_CITIES[seed % STOPOVER_CITIES.length]
  const stop2 = STOPOVER_CITIES[(seed + 2) % STOPOVER_CITIES.length]
  const groundStop = GROUND_STOPOVER_CITIES[seed % GROUND_STOPOVER_CITIES.length]

  const flights = [
    { ...carrier(AIRLINES[seed % AIRLINES.length]), price: baseDirectPrice, stops: 0, stopCity: null, duration: formatDuration(baseHours) },
    { ...carrier(AIRLINES[(seed + 3) % AIRLINES.length]), price: Math.round((baseDirectPrice * 0.82) / 5) * 5, stops: 1, stopCity: stop1, duration: formatDuration(baseHours + 3.5) },
    { ...carrier(AIRLINES[(seed + 5) % AIRLINES.length]), price: Math.round((baseDirectPrice * 0.66) / 5) * 5, stops: 1, stopCity: stop2, duration: formatDuration(baseHours + 5.5) },
  ]

  const isEurope = destination.continent === 'Europe'
  const trainBase = Math.round((baseDirectPrice * 0.5) / 5) * 5
  const trains = !isEurope ? [] : [
    { ...carrier(TRAIN_COMPANIES[seed % TRAIN_COMPANIES.length]), price: trainBase, stops: 0, stopCity: null, duration: formatDuration(baseHours * 3.4) },
    { ...carrier(TRAIN_COMPANIES[(seed + 1) % TRAIN_COMPANIES.length]), price: Math.round((trainBase * 0.78) / 5) * 5, stops: 1, stopCity: groundStop, duration: formatDuration(baseHours * 4.6) },
  ]

  const busBase = Math.round((baseDirectPrice * 0.28) / 5) * 5
  const buses = !isEurope ? [] : [
    { ...carrier(BUS_COMPANIES[seed % BUS_COMPANIES.length]), price: busBase, stops: 0, stopCity: null, duration: formatDuration(baseHours * 6.5) },
  ]

  const carpoolBase = Math.round((baseDirectPrice * 0.22) / 5) * 5
  const cars = !isEurope ? [] : [
    { ...carrier(CARPOOL_COMPANIES[0]), price: carpoolBase, stops: 0, stopCity: null, duration: formatDuration(baseHours * 5.2) },
  ]

  // Personal car: real driving distance (haversine + a road-routing
  // correction factor) times a realistic per-km fuel + toll rate, instead of
  // a flat cut of the flight price — a 1400km drive should cost far more
  // than a 300km one even though both may share a similar flight budget.
  const originCoords = departure
  const destCoords = DESTINATION_COORDS[destination.id]
  let personalCarPrice = Math.round((baseDirectPrice * 0.15) / 5) * 5
  let personalCarHours = baseHours * 5.4
  if (originCoords && destCoords) {
    const roadKm = haversineKm(originCoords, destCoords) * 1.2
    personalCarPrice = Math.round((roadKm * 2 * 0.2) / 5) * 5
    personalCarHours = roadKm / 90
  }
  const mapsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(departure.id)}/${encodeURIComponent(`${destination.city}, ${destination.country}`)}`
  const personalCars = !isEurope ? [] : [
    {
      ...carrier('Votre voiture'),
      price: personalCarPrice,
      stops: 0,
      stopCity: null,
      duration: formatDuration(personalCarHours),
      note: 'Carburant et péages estimés',
      url: mapsUrl,
    },
  ]

  return { flights, trains, buses, cars, personalCars }
}

// ---- Visited-countries picker + world map ----

export const COUNTRY_CODES = [
  'ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'ar', 'as', 'at', 'au', 'aw', 'az',
  'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bw', 'by', 'bz',
  'ca', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cy', 'cz',
  'de', 'dj', 'dk', 'dm', 'do', 'dz',
  'ec', 'ee', 'eg', 'eh', 'er', 'es', 'et',
  'fi', 'fj', 'fk', 'fm', 'fo', 'fr',
  'ga', 'gb', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy',
  'hk', 'hn', 'hr', 'ht', 'hu',
  'id', 'ie', 'il', 'im', 'in', 'iq', 'ir', 'is', 'it',
  'je', 'jm', 'jo', 'jp',
  'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz',
  'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly',
  'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz',
  'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz',
  'om',
  'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'pt', 'pw', 'py',
  'qa',
  're', 'ro', 'rs', 'ru', 'rw',
  'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'sv', 'sx', 'sy', 'sz',
  'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'tv', 'tw', 'tz',
  'ua', 'ug', 'us', 'uy', 'uz',
  'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu',
  'wf', 'ws',
  'xk',
  'ye', 'yt',
  'za', 'zm', 'zw',
]

export function flagEmoji(code) {
  return String.fromCodePoint(...code.toUpperCase().split('').map((c) => 127397 + c.charCodeAt(0)))
}

const countryDisplayNames = typeof Intl !== 'undefined' && Intl.DisplayNames ? new Intl.DisplayNames(['fr'], { type: 'region' }) : null

function countryName(code) {
  try {
    return (countryDisplayNames && countryDisplayNames.of(code.toUpperCase())) || code.toUpperCase()
  } catch {
    return code.toUpperCase()
  }
}

export const COUNTRIES = COUNTRY_CODES.map((code) => ({
  code,
  name: countryName(code),
  flag: flagEmoji(code),
})).sort((a, b) => a.name.localeCompare(b.name, 'fr'))

export const WORLD_MAP_SVG = `<svg xmlns="http://www.w3.org/2000/svg" id="svg2985" viewBox="-35.8 80 2776 1163.1"><title id="title9">World Map</title><style id="style_css_sheet" type="text/css">.landxx{fill:#EFEBE1;stroke-width:.5;stroke:#fff;fill-rule:evenodd}.coastxx{stroke-width:.3}.antxx,.limitxx{fill:#EFEBE1;stroke:#fff;stroke-width:0;fill-rule:evenodd}</style><path id="ocean" d="M423 80S-91 324-30 774c14 200 154 362 314 469h2137c160-107 300-269 314-469 60-450-453-694-453-694z" style="fill:none;stroke:none"/><path id="sd" d="m1459 676 1-2 1-1 1-3h3l3-1v3h1l1 1 1 1v2l2 1 5-1h5l1 2h6v-1l2-2h4v-3l3-2 4 3 2 2h2l2-1 3-4 2-3 3-4v-6l-2-2h4v-2h4l-1 4 1 7v2l2 1 4 5-1 2c0 4 0 2 3 2v-1l1-4 1-5q2-1 2 1l2-2v-3l1-6q3-2 3-5 2-2 4-1l1-4 1-5v-13l2-6 1-3v-3l1-4h3q0-2 2-3l4-2 2-3-2-3c-1 1-4-3-5-3q-4-3-3-8l-1-8-1-4q0-2 1-1l-3-5q1-3-2-4l-4-5q-3 0-4-4-1 3-3 3t-3 2-2 3-3 3c-1 4-5 1-7 0l-6-1h-7v-1q-2 2-5 1h-43v18h-7l1 37h-7c-3 1 0 3-2 5l-3 4q-1 2 1 4-5 2-2 6l-2 3-1 3 4 1v2l1 3v4l3 2v4l3 4q3 3 3 7v1h6q1 1 1-1z" class="landxx sd"><title id="title13">Sudan</title></path><path id="ss" d="M1455 686v1l3 2h3l1 2 2 2-1 2 6 3 1 2 2 2v2l1 2 3 3 3 2v3l2 2 1 3 3 2 1 1q2 1 3-1h5c2 0 1-3 3-1l2 2 1 2q4 1 4 4l2 1 4-2 2 1q0-2 2-1 1 2 3 2 0-2 5-3l4 1 2-1 6-6h11l-1-3v-3l-1-1h-3l-1-2-1-1-1-5-2-4-2-2-3-3-3-3-4-1q-2-2 1-3l1-3 4 1q3-3 2-7v-4c-3 0-3 2-3-2l1-2-4-5-2-1v-2l-1-7 1-4h-4v2h-4q0 2 2 2v6l-3 4-2 3-3 4-2 1h-2l-2-2-4-3-3 2v3h-4l-2 2v1h-6l-1-2h-5l-5 1-2-1v-2l-1-1-1-1h-1v-3l-3 1h-3l-1 3-1 1-1 2h-1l-1 1h-6l-1 3-1 2h1v2l5 1z" class="landxx ss"><title id="title16">South Sudan</title></path><g id="ge" class="landxx coastxx ge"><title id="title19">Georgia</title><path id="ge-" d="M1554 385c0-4 8-1 10 0l5 1h3l3 1 4 2 2 1 1 1c2 1 5-3 6 0q2-2 3 0l1 1q2-1 3 1v2l5 2c2 1-1 1 0 3l4 3c-1 3-4 0-4 0q-2 1-5-2l-2 1-2 1h-4l-3 1-3-1h-2v-1l-3-1q0-2-2 0h-7v-1q2-3 1-4l-3-5-3-3-4-1-4-2" class="landxx coastxx ge"/><g id="xa"><title id="title22">Abkhazia</title><path id="xa-" d="m1554 385 4 2 4 1 3 3 1 1 1-1 1-1v-2l1-1v-1l-5-1c-2-1-10-4-10 0" class="limitxx ge xa"/></g><g id="xo"><title id="title27">South Ossetia</title><path id="xo-" d="m1581 390 1 1 4-1v1l2 1v3h-2l-2-1h-3v-1l-1-1v-1z" class="limitxx ge xo"/></g></g><path id="pe" d="m650 798 3-5 2-2 2-2q2 2 1 5h-2l1 2q-2 3 1 1 1-1 3 1l2 1 3 3q1 2 2-1c3-11 5-15 2-3l1-5 1-2q0-3 1-1v-1l1-2 3-2 8-3q7-6 9-14h2l-1-5-3-2 3-1h1l4 3 3 4 1 2 2 1q2 0 3 3 0 2 2 3l1 4 3 1h3l4-2c1-2 3 1 3 1l4-1 2 2h3v5l-3 6 3 1 2 2v1h-1v1q-3-2-5-1-4 3-8 2l-3 3-2 1c-2 2-3 1-3 5l-1 3-1 2q2 3 0 4l-3 3-1 2 1 2-2 1c-1 1 3 3 2 4l1 3 2 1v2l3 3q1 3-1 4l6 1 2 4q4 1 7-1c2 0 3-4 5-4v2l-1 3 1 8 3 1 3-1 3 1 3 6 3 5v4l-1 4v5l1 3v2l-2 4 1 3-1 3c-1-1-4-4-4-1v2-1q-2 2 1 3l2 1 1 1 2 1h1l1 3-1 1-2 3-2 2 1 1v1c-5 7-1 1-2 2v4l-3 1-3-2-4-2-4-5q-4-4-8-5l-4-2-5-3-5-3-5-2-3-4-5-5-2-3q0-2-2-2v-1h1q1-3-2-7l-5-7-1-2v-2l-2-2-2-2v-1l-1-3-3-4-2-4-4-9-7-12q-3-8-10-11l-3-1 1-2q3-1 1-3l-2-4h1l-1-2-1-3" class="landxx pe"><title id="title33">Peru</title></path><path id="bf" d="m1229 669 1-4q-1-2 1-2v-4l-1-2 2-1 4-1q2-1 1-5l1-1 1-2v-1l2-3 4 3q0-2 2-1l-1-4 3 1q1-4 4-6 2 2 3 0t2-2l4-2q2-3 6-2l2-1 3 1c1 1-2 4 0 5l2 4 1 2 5 3h-2q0 4 4 6l4-1 1 3q-2 1 1 4 0 3-4 5h-4l-4 4-5-1-3-1-3 2c-1-1 2-1-8-1h-9v4l1 3v7l-3-4h-5q-3 0-4 3l-4-2-1-2-2-2q-2 0-2-2" class="landxx bf"><title id="title36">Burkina Faso</title></path><g id="fr"><title id="title39">France</title><g id="frx" class="landxx coastxx fr frx eu"><path id="path2166" d="M1259 351h-2 2"/><path id="path2168" d="m1265 355-1-1 1 1"/><path id="path2172" d="M1270 361h-1 1"/><path id="path2174" d="M1270 364q1-2-1-1l1 1"/><path id="path2182" d="M1248 345h3l-2-2h3q-2 0-1-1h-3q0-2 2-2h4l5-2 3 3 2-1h1l2 1v-1h4q-2-1-1-5l-2-1v-3h4l1 3h8l3-1h-3q0-2 2-3l5-1 4-2v-6q3-2 6-1l1 2 3 1 1 1q2 0 2 2h3v3h3l2-2v3l4 3h4l3 1 2 2v-1h1v1h4l4 1-3 5-1 3-1 2v2l-2 1h-1v1l-2 2-2 2-1 1-2 2 1 2-1 1 1-2h4l1 2q1 2-1 3 3 2 2 4l-3 2 2 3-1 3q2 3 5 2v2q-2 3-7 5l1 1-3 1h-2l-4-1-2-1v-1l-1-1v1l-2-1q1 3-2 1l-2-1-4 2q-2 0-3 3v5h-7l-2-1-1-1h-2l-2-1q-2-2-3 1l-4-1h-3c-1 0-6-4-7-2v-2l-3-1q4-2 4-8l1-3q1-1 0 0l1-8 3 3v1l1 2-1-3-2-3-2-1h2l-1-5-4-2-2-3q2-2-1-2l1-1h3-4q-2 0-1-2h1l-4-1h1q-2-1-2 1l-1-2-1-1c-2 2-4-2-6 0l-3-2" class="landxx fr frx eu"/><path id="path2184" d="m1337 393 1-1 4-2 1-2 1 7-3 7c0-1-4-2-2-3h-1l1-2-1-1v-2l-1-1"/></g><g id="gp"><title id="title48">Guadeloupe</title><g id="gp-" class="landxx coastxx fr gp eu"><path id="path2582" d="M807 619c-1 0-1 4-2 2q-1-3 2-2"/><path id="path2584" d="m807 619 1-2 1 2h-2"/><path id="path2586" d="m808 622 1-1-1 1"/></g></g><g id="mq"><title id="title56">Martinique</title><path id="mq-" d="m810 635-1-1-1-3 2 1v3" class="landxx coastxx fr mq eu"/></g><g id="re"><title id="title61">Reunion</title><path id="re-" d="M1689 941c0-2-4-1-3 1 1 3 6 3 3-1" class="landxx coastxx fr re eu"/></g><g id="yt"><title id="title66">Mayotte</title><path id="yt-" d="M1613 872q2-2 0-2v2" class="landxx coastxx fr yt eu"/></g><path id="gf" d="M853 739q3-1 3-3l1-5q2-3-1-5l-1-7q-1-3 2-5l1-2 2-2q2 0 3 2l4 1q2 3 5 4l-1 2c1-3 5 1 2 3l1-2q2 0 2 2l-3 8-4 7-2 3-1 1h-2l-1-1-3-1-3 2q-2 1-4-2" class="landxx fr gf eu"><title id="title71">French Guiana</title></path></g><path id="ly" d="M1342 500q0-2 2-2l3-3 2-4-1-4 3-3 3-3q3 0 4-3v-5l4 2 5 1 5-1 5 1 4 3h3l2 4q0 3 3 4 3 3 8 3 6 1 10 4 3 3 7 4 5-2 7-7l-1-4v-4q2-6 8-7l4-1h4l5 2q2 1 1 2 2 3 3 2l5 2h5q3 1 2 3l-1 2q-1 3 1 5l-2 5 2 5 1 8 1 76h-7v4l-59-34-14 7-3-3-10-4-4-1-2-3q-1-4-5-5l-3-1h-3l-2-4-1-5c-1-1-5-4-3-6q3-2 3-5v-16l-1-6-3-5" class="landxx ly"><title id="title75">Libya</title></path><path id="by" d="M1433 310q1-3 3-3t1-3l-3-8h7l2-2h1l1-1 2 1h1l-1-1q0-3 2-5l3-2 2-1q-3-1-2-3 3-2 5-1l4-3h2q4-1 7 2v1h8l2 2 1 3-1 2 2 2 4 4 2 1v2h3l1 2 2 1-1 2-3 1-3-1c-4 1-1 2 0 3v3l2 3-3 1q-2-1-4 2v3q-1 2-2 0l-4-1q-3 2-4-1l-2 2-1-1h-2l-2-1-1 1-2-1h-2q-2-2-5-1-3-2-6-1h-6q-2 0-3 2h-3l-1 1v-4q-1-2-3-2" class="landxx by eaeu"><title id="title78">Belarus</title></path><g id="pk"><title id="title81">Pakistan</title><path id="pk-" d="m1720 501 9 3q6 2 11 0l4 1 3-1h4l4-1 5-2v-2l-1-5q0-2 2-3l2-2h2q2 1 4-1l-2-1 4-2 3-1 2 1 2 1q2-3 0-6l1-3v-3l1-1 3-1 1-2-2-2q-3-3 0-3 4 2 7-1l-1-2-1-1 1-1 1-1 1-2 1-2-1-1v-2l-2-2-2-2q0-3 3-4l2-1 2-2h7l3-1 2 1q4-3 6-1 2-1 4 1l3 1 2 3v2l2 3 3-1c0 3 7 4 10 4l-5 3-1 1-1 2-5 1q-3 2-7 0l-7-1q-2 2 0 4l1 2 2 1q-3 2-1 3l1 4 2 1v1l2 1 3 3 4 1q0 2-3 3t-2 3 2 5l-3 2-2 4q1 3-2 3l-1 3-1 4-4 4-1 2-2 3q-2 3-5 3l-3 1-2-2q-2-1-3 2l-3 5q-1 3 2 4 3 0 3 4-1 3 2 4h2l1 3 3 5v1q-1 2 1 2-3 3-4 1h-3l-1 1-6-1h-4v3q-2 0-3 2h-1l-1-2v2l-1-1-1 1v-1q-2 0-1-2-3 0-2-2l-2-4-4-1q1-2-1-5-2-2-3 0 2-1 2 1h-8c-1 0-6 0-4 2l-1-1c-2 1-4-2-5-1-1 0-5-1-4 2-1-1-8-2-8 0l-1-1-1 1q-3 1-3-1c0-3-1-10 3-9-1-4 7-2 7-4v-4h-3l-1-3-1-5-2-2-3-1q-4-2-5-5l-6-7" class="landxx pk"/><path id="qm" d="m1807 472-1-3v-4l-1-2-1-3h2l1-2 2-1-1-1 1-1h4l1 1 2 1 2 1h1q2 1 1 2h-4l-2-1h-4l-2 1-1 2 2 1v2l3 1-2 1 2 3-1 2q4 2 3 4l-3-1-1-1-2-1z" class="limitxx pk qm"><title id="title84">Azad Kashmir</title></path></g><g id="id" class="landxx coastxx id"><title id="title88">Indonesia</title><path id="path2528" d="M2295 794q-1 0 0 0"/><path id="path2530" d="M2296 775v1-1"/><path id="path2532" d="m2298 777-1 1 1-1"/><path id="path2540" d="m2301 768 1 1-1-1"/><path id="path2542" d="M2303 772v1l2-1h-2"/><path id="path2544" d="M2305 765q1 3 3 1l-3-1"/><path id="path2546" d="M2306 773v1l5 2h2l3-1-4-1-6-1"/><path id="path2548" d="M2319 832h5l3-1q3-3 3-6-2-3-6-1-3 2-5 8"/><path id="path2550" d="M2328 832h1q1-2-2-2-1 2 1 2"/><path id="path2552" d="m2328 818 1 1-1-1"/><path id="path2562" d="m2274 768-1-1q5-1 6-3 3-2 6-1t5 3l6 1v7q-2 5 2 10v-3c2-1 1 3 1 3l1 1 1 3h5l2-3 3-3 2-3 5-1v-2l3-3h4l6 3 4 2 5 2 4 1 4 1-2 31-1 5 1 1v4l-2 16-4-6q-3-1-2-4l-4 1q-2 2-2-1l-3 2v-3l1-3-2-3h4q-3 1-5-2h5l-4-2v-1l-2-3q-1-2 1-4-3 0-1-1h-2v-3c0 2-2-1-2-1l-2-1-3-1-4-2-5-2-6-1-3-3 2-1h-2l-2-1q-2 2-2 0-2 1-2-2h-1v-2l1-4-2 2q1 2-1 2v2l-1 1v1l-3 2-2-3 1-1v-3c-1 1-3-3-4-3q-4-1 0-2 3 2 5-1 3-3 3 1l1-2 2 1 1 1v-2l1-1v-2l-4 1h-8l-3-1 1-1q-2 0-1-2v-2h-1l-4-1h-2l2-4" class="landxx id"/><path id="path2206" d="M2006 739h2l-2-2h-1l-2-2-1-1v2q4 1 4 3"/><path id="path2348" d="M2182 804v4l3 1 2-1h3q-2-3-1-5l1-6v-8l-1-3q2-4 6-3v5c-3 2 1 5 4 7 1 0-2 4-1 5l4 2v-3l4-1s3 1 1-1c2 2 3-2 1-2l-2-1 1-1-2-1-1-3h1l1-2-1-1-1-2-1-1-1-2-2-2q-1-3-2-2v-2q2 2 3 0l4-2c2-1 4-6 6-6l2 1q2-1 1-3h-5l1 1q-3-1-6 1h-4l-3 3q-1 2-3 2l-2-2v-2h-2q-3-4-2-9l3-4 5 1 3-1 3 1 5-1q3-1 5 2c2 1 8 0 10-2l3-4 3-4-1-2h-2l-1 2-2 2-1 1q-2 2-6 2l-4-1-2 1-6-1-2-1-3-1h-4q-1 5-4 2l-1 2-2 3c-2 1 1 3-1 4h-1l1 2v5l-1-2-3 7v4l-1 3-3 5v2l1 5 3-1q2-1 1 2l1 6-2 6"/><path id="path2366" d="M2202 804q-3 2-1 3l1-3"/><path id="path2368" d="M2202 764h-1 1"/><path id="path2370" d="M2203 763h-1 1"/><path id="path2372" d="m2206 807 1-2v-5l-2 1v3l-1 2 1-1 1 2"/><path id="path2378" d="M2210 798q-2 2-2 5l-2 4 2 2 1-2 1-1q1-2-1-1v-3q2-3 2-1l-1-3"/><path id="path2386" d="M2212 774v-2c3 2 3-4 0 0v-2h-2v3l1-2 1 3"/><path id="path2388" d="M2210 794v2q2 0 0-2"/><path id="path2394" d="M2213 770v1-1"/><path id="path2396" d="M2213 774v1-1"/><path id="path2398" d="m2213 805 1 1-1-1"/><path id="path2400" d="M2215 807v1-1"/><path id="path2404" d="M2217 811q-1 0 0 0"/><path id="path2408" d="M2221 774q-1 3 2 3l1-1h2l2-1-1-1c-1 2-4-1-6 0"/><path id="path2414" d="M2229 736q-1 0 0 0"/><path id="path2416" d="M2230 731q1-3-2-3 2 1 2 3"/><path id="path2418" d="m2229 775 2 1 5-1h-7"/><path id="path2422" d="M2233 777c-2 0 0 4 1 4l-1-4"/><path id="path2424" d="m2238 793 4-2q1-1-1-3 0-2-2-2h-4q-2 1-2 3l5 4"/><path id="path2426" d="M2238 727v-2 2"/><path id="path2428" d="m2238 725 1-3q0-2-1-1l1 2-1 2"/><path id="path2432" d="m2243 762-1 2 1-2"/><path id="path2434" d="M2243 765q-1 1 1 1l-1-1"/><path id="path2438" d="M2244 752v1-1"/><path id="path2440" d="M2245 762v1l-1-1q-1 2 1 3v2h1c0 1 3-1 1-1l-1-2q1-1-1-2"/><path id="path2442" d="M2244 756v1-1"/><path id="path2444" d="M2245 772q-2 2 0 3l2-1h2q2 1-1-2h-3"/><path id="path2446" d="M2245 753h-1l1 1v-1"/><path id="path2452" d="m2246 760 1 2 1 2 4 3-4-9q0-3 2-2l5 1-2-2q-2-1-2-3l3-3v-3q-4 0-4 3l-1 1-1 2h-2l1-2q3-3 2-5-2-1-1-2l1-2q-3 1-3 3l-2 6 1 2h1l-1 2 1 3v3"/><path id="path2454" d="M2245 770h1-1"/><path id="path2456" d="m2245 788 1 1-1-1"/><path id="path2458" d="M2246 787v1h1l-1-1"/><path id="path2462" d="m2248 785-1 1 1-1"/><path id="path2464" d="m2263 790 5 2q2 2 2-2l-2-2-1-2-2-1h-2l-3-1-2 1-2-1h-3q-6 0-5 6 0-3 2-3-1 2 2 2c1 0 5-3 4 0h4l3 1"/><path id="path2466" d="M2248 791v1l2-1 1-1-3 1"/><path id="path2468" d="M2250 740v-1 1"/><path id="path2470" d="M2251 742q3-2 2-5l-2 1v4"/><path id="path2474" d="m2252 790-1 1 1-1"/><path id="path2478" d="M2253 790q-1 1 1 1l-1-1"/><path id="path2482" d="m2259 760 2 1-2-1"/><path id="path2484" d="M2264 777h3v-2q-2-2-5 1l2 1"/><path id="path2486" d="m2263 769-1 1 1-1"/><path id="path2490" d="M2270 763c3 1 0-2-1-2q1-1 2 1l2 1v-3c-1 0-6-1-7 1q2 0 0 0 3 1 2 2l1-1 1 1"/><path id="path2494" d="M2267 767c0 1 4 1 4-1l-4 1"/><path id="path2496" d="m2269 763-1 1q2 0 1-1"/><path id="path2500" d="M2271 767q-4 2 0 4c1 1 2-3 0-4"/><path id="path2506" d="m2273 768-1 1 1-1"/><path id="path2508" d="m2273 795 1 1-1-1"/><path id="path2510" d="M2274 794v1-1"/><path id="path2522" d="m2289 795 2 2-2-2"/><path id="path2392" d="M2211 846h1l-2 3h3l3-1q2 0 3-2l3-4h1v-3c2-2-1-2-1-2l-4 2-1 3h-1l-2-1-3 5" class="landxx id"/><path id="path2346" d="M2178 830v1-1"/><path id="path2278" d="M2073 816v1-1"/><path id="path2280" d="M2085 812h-5c0-3-2 0-2 1 0 0 0 4-2 2l-1 3h-2l7 1 2 1v2c-1 3 6 2 7 2l6 3h2l2-1 8 1 9 4h8q3 2 8 1 3-1 6 2l4 1 1 1v-8l-2-2h-3l-5 1-3-2v-3l-1-3h-4l-2-1-2-1h-3q-2-4-4 0l-2 3-2-1h-5l-3-1c-3 2-4-2-5-4h-1l-4-1q-1 1-2-1l-3-1q0 2-2 1"/><path id="path2296" d="m2100 826 2 1-2-1"/><path id="path2308" d="m2132 819-2 2q2 2 3 0 2 2 4 0h2l1-1-3-1h-5"/><path id="path2310" d="M2130 809v1-1"/><path id="path2312" d="M2142 821h1-1"/><path id="path2314" d="M2143 830q-1 2 3 3l1 1v2l3-2q3 0 2-3-2-2-4-1h-5"/><path id="path2318" d="M2150 819v1h2l-2-1"/><path id="path2320" d="M2151 836v-1h-1l1 1"/><path id="path2322" d="m2157 831-2 2q1 3-2 2c-1 2 5 1 5 2l2-4q-1-3-3-2"/><path id="path2328" d="m2169 837 4-3v2h3l-1-1q2 1 4-1-2 0-2-2-2-2-2 1 0-3-2-2c-1 2-2-1-3-1q-2-1-2 1l4 3-3 1-2-2q-3-2-6 1l-1 2 1 2h4l4-1"/><path id="path2330" d="m2166 832 1-2-1 2"/><path id="path2342" d="M2176 842q1 2 4 2l5 3c2 3 7 1 4-2l-2-2-3-2h-3l-5 1"/><path id="path2350" d="m2181 833-1 2 1-2"/><path id="path2352" d="M2182 834v2l1-2h-1"/><path id="path2354" d="M2185 836h6l2 1 2-1q2 1 5-1c2 0 7 0 6-2l2-2q-1-3-2 0h1l-3 2q-2 2-4 0h-3v1l-2-1-5-2-5 2-2 1q0 2 2 2"/><path id="path2356" d="M2190 810v6-6"/><path id="path2358" d="M2191 820v1-1"/><path id="path2360" d="m2192 822 1 1-1-1"/><path id="path2362" d="M2195 851h1-1"/><path id="path2364" d="M2196 851h2v-1l-2 1"/><path id="path2374" d="M2205 853v1l4-2v-2l-4 3"/><path id="path2380" d="M2207 833v1l1-1h-1"/><path id="path2382" d="M2208 831v1h2l-2-1"/><path id="path2384" d="m2210 847-1 2 1-2"/><path id="path2390" d="M2211 831v1l-1 1 2 1q1-3 3-3l-3 1-1-1"/><path id="path2402" d="M2215 832v1l1 1 1-3-2 1"/><path id="path2406" d="M2219 830v1l-1 2 5-1q2-1 0-2h-4"/><path id="path2410" d="m2228 830-1 1 1-1"/><path id="path2420" d="m2229 829 5-1 3-1q-2-3-5-1h-1l-2 3"/><path id="path2430" d="m2242 825-1 1 1-1"/><path id="path2436" d="M2243 830h1-1"/><path id="path2450" d="M2244 830h3-3"/><path id="path2460" d="M2247 831h1-1"/><path id="path2472" d="M2251 821v1-1"/><path id="path2476" d="m2252 830 2 1-2-1"/><path id="path2480" d="M2259 827v2q2-1 0-2"/><path id="path2492" d="m2267 832 3-2-3 2"/><path id="path2498" d="m2268 824 1 1-1-1"/><path id="path2502" d="M2269 824h1-1"/><path id="path2504" d="M2274 821q-3 2-3 5c-2-1-1 5 0 2l3-3 1-3-1-1"/><path id="path2512" d="m2275 821 2 1-2-1"/><path id="path2516" d="M2283 809v-1 3-2"/><path id="path2518" d="M2284 808v1-1"/><path id="path2520" d="m2284 812 3-6-1 2-2 4"/><path id="path2524" d="M2294 813v3c-1 0-2 4 1 3q3-4-1-6"/><path id="path2534" d="M2298 817v1-1"/><path id="path2536" d="M2298 815v1-1"/><path id="path2538" d="M2299 816q0-3 0 0"/><path id="path2230" d="M2052 807q0-2-2-1l2 1"/><path id="path2202" d="M1998 709h-1 1"/><path id="path2204" d="m2015 714-3 1-1-1h-5l-4-2q-1-2-4-1c-5 3 7 13 9 15l2 1q3 1 3 4l3 4q2 1 2 4l3 2 2 1 3 2v3l2 4 1 5q0 2 2 2l3 3 5 8v1l1 2 2 5 1 4 3 3 2 4 4 4 2 3 4 4 4 3 3 3 1 2 1 1 1 1s2 3 2 1l-1-2h2q4 3 4-1l3 3 1-3 1-6v-5l1-3-1-2 1-3 1-2-2-1q-2-2-1-5h-6v-1l-3 4q3-2 1-3l2-2-2-1-1-3-1-5h-4l-3-2v-4l1 1-2-1 1-1h-1l2-2 2-1-2-3h-3q-3 3-6 1c3 2 8-3 3-4h-2l-2-2-2-4-2-2h-2l-2-3-3-2 1 4-1-2-3-2-2-4v2l-1-1-1-3-3-3-4-3-2-1-1-1-3-2-1-3-2-3-3-4"/><path id="path2208" d="M2017 754c2 2 2-3 1-4l-3-3h-2l2 4 1 1 1 2"/><path id="path2210" d="M2014 742q0-2-1-1l1 1"/><path id="path2212" d="M2023 764v-2l-1 2h1"/><path id="path2214" d="m2022 760 2 3q0-3-2-3"/><path id="path2216" d="M2024 745h-1 1"/><path id="path2218" d="m2026 759-3-1 3 1"/><path id="path2220" d="M2028 775c3 0-2-6-2-7h-1l-1 3q1 3 4 4"/><path id="path2222" d="m2033 780-2-3q0 2 2 3"/><path id="path2224" d="m2034 784 2-1-2-2 1 3"/><path id="path2226" d="m2038 788-1-1 1-1-2-2 2 4"/><path id="path2228" d="M2048 743q-1-3-3-1l2 3 1-2"/><path id="path2232" d="m2054 746-4-1q0 3 2 2l2 2v-3"/><path id="path2234" d="m2054 749-2-2q-1 4 1 4l1-2"/><path id="path2236" d="m2058 753-2-2-2-1v2l4 1"/><path id="path2238" d="M2059 752c0-1-4-3-4-1 2-1 2 2 4 1"/><path id="path2240" d="M2060 754h-1v1l1-1"/><path id="path2242" d="m2061 751-1-1 1 1"/><path id="path2244" d="m2062 753-2-1 1 2 1-1"/><path id="path2248" d="m2063 762-1 1 1-1"/><path id="path2252" d="m2065 752-1-1 1 1"/><path id="path2256" d="m2066 750-1 1 1-1"/><path id="path2258" d="m2067 753-1-1 1 1"/><path id="path2262" d="M2070 751c-1-3-4 0-2 0q1-1 1 1l1-1"/><path id="path2266" d="M2069 763h-1v2h1v-2"/><path id="path2268" d="M2069 758v1-1"/><path id="path2270" d="m2069 760 1 2h3q-1-2-4-2"/><path id="path2272" d="M2070 753h-1 1"/><path id="path2274" d="m2070 758 1 1-1-1"/><path id="path2282" d="m2076 774-2 3 3 1 2 1 1 2q-1 2 1 3 2 3 5 2l-1-1 2-3-4-1-1-4-1-4q-2 0-2 2s-3-4-3-1"/><path id="path2286" d="M2087 785h-1 1"/><path id="path2290" d="m2092 784-1 1 1-1"/><path id="path2292" d="m2093 782-1 4q1 2 2 0l2 1 2-3q-1-3-5-2"/><path id="path2294" d="m2096 726 1 1-1 1q3-1 2-3-3-3-2 1"/><path id="path2298" d="M2101 774h1-1"/><path id="path2302" d="M2103 773h-1l1 1v-1"/><path id="path2306" d="M2109 769q-2-2-2 2 3-1 2-2"/><path id="path2324" d="M2159 788c-3-1-2 6-2 6q2 0 2-2v-4"/><path id="path2326" d="M2160 789v1-1"/><path id="path2332" d="M2168 731q-1 0 0 0"/><path id="path2334" d="m2168 730 1 1-1-1"/><path id="path2336" d="m2169 724 1 1-1-1"/><path id="path2338" d="M2169 763v1-1"/><path id="path2340" d="m2170 729 1 1-1-1"/><path id="path2344" d="m2176 740 1 1-1-1"/><path id="path2554" d="M2103 752v-2l2-2-1 1q-1-2 1-4l1-2 2-1v2l1 3 4 3 2 2 4-1h6l2-1 1-3c1-1 6-2 6 0q3 2 6 1l3-1h3l2-5q0-4 3-4-2-3 0-4c3-1 1-2 2-4v-4l1-3 1-1h3q2 1 2-1l4 1 4 1-1 1s3 3 1 2h2v2q-2 1-2-1v1h-3q1 2 3 2-1 2-2 1l3 2-1 1 2 1q-2 0 1 2l1 2q1 2-2 3l1 2 3 2 2 2q2 0 3 2l1 1-3 2-5-3q1 2-1 3l-2 3-1 8 2-1-1 2v1l-2 1c0 1-4 5-4 2l-1 3-1 2-2 1q2 0 0 3l2 1v3l-2-1c1 2 0 6-1 4l1 2-3 4-6 3-4 1v-3l-1-3q-2 1-1-2-2 3-2 0-1 3-4 2v-1l-2-1q-1 1-2-2l-3 4h-4l-2 1-1-6q-1 2-3 1l-2 1h-2l1-1-2 1q-1-2-3 0l-1-5v-4l-2-2 1-1v-3l-1-2-1-2-1 1-2-1v-1h1l-1-1-1-1v-5l-2-4v-3" class="landxx id"/><path id="path2556" d="M2166 729h2-2"/><path id="path2558" d="M2169 724q2-2 2 1l-2-1"/><path id="path2564" d="m2294 812 1 1v-4l2-2q2 0 2 2l-1 4q0 2-3 0c2 2-3-1-1-1"/><path id="path2566" d="m2296 814 1 2-1-2"/></g><g id="ye" class="landxx coastxx ye"><title id="title259">Yemen</title><path id="path2190" d="M1595 639v-1 1"/><path id="path2192" d="m1668 655-1-1 1 1"/><path id="path2194" d="M1679 653q4 1 6-2-3-2-4-1h-4l-1 2 3 1"/><path id="path2592" d="M1673 615c-3 0-1-5-4-5 1-2-3-7-3-9l-3-7-21 4q-9 3-11 8c-1 2-1 7-4 6l-4-2h-7l-4-2-5 1-5 1-2-2-3 2v3l1 2-2 2-1 1v2l-1 3 1 5h-1l1 1 1 2 2 7 1 3v3l2 6h5l6-1q0-1 0 0l1-1 2-2 4-2 6-1 4-1 4-3 2-1h3c4 0 4-4 8-6l4-1 6-2 4-1 3-2 3-2v-4l7-5" class="landxx ye"/></g><g id="mg" class="landxx coastxx mg"><title id="title266">Madagascar</title><path id="path2622" d="m1595 950 1 8 2 3v9l1 4 4 4q-2-1 0 0h2l4 3 8-4h2l2-1 2-2 2-3 2-5 2-8 5-12 3-10 1-4 1-2 2-7 3-10c1-2-1-6 2-8l2-3v-2l-1-2s-1-6 1-5l2 4c2 1 3-4 3-5l-1-3-1-7-3-12-1-1v-1l-2-3c2 0-1-3-1-1l-3 3q2 2 0 5 1 4-3 4v1l-1 2c-1 0-3-5-3-1l1 2-1 2q-2 1-2 3 3 0 2 2 1-1-2-1l-2 4v-3l-1 1-2 2 1 2q1 2-2 2v-3l-3 2-2 2v1l1 1-1-1q-2-2-2 1l-3-1v2l-2 1-1-2-3 2-3 1v3l-2 3-2 6v6l1 4 1 4v7l-2 3-2 4q0 2-2 3t-2 3l-2 4"/><path id="path2624" d="M1637 876v-2 2"/><path id="path2628" d="M1649 904q-2 1-1 3l1-3"/></g><g id="bo" class="landxx bo"><title id="title272">Bolivia, Plurinational State of</title><path id="path2375" d="m742 854 6 1q1 0 0 0h2l2-1 1-2 4-1q0-2 4-3l3-3 6-1q2 1 3-1c3 2 0 6 0 9l2 2-1 2 2 4 1 2 1 1 1 1 2 2 1 1 2 1h5l1 1h2l3 3 4 1 3 4 4-1 6 3q2 1 1 4l2 7h-1l2 5 1 4q2 2 5 2h9l-1 3 1 3 3 4h2l1 3q2 3 1 5l-1 4q1 3-1 4-2 3 1 5l-2 2q1-3-3-5l-5-2-16 2q-3-1-4 3l-2 5v6l-1 9q-1-2-3-2h-5c-2 1-2-1-3 2l-1 5q-2-5-6-6h-6l-4-3q1 3-2 4l-3 3-3 3-2-1-4-8-2-6-2-3v-2l-2-2v-2q3-2 0-4l1-1-1-3-4-5-1-5c-3-1-3-7-5-7l1-1 2-2 1-2v-1q2 0 1-1l2-1c0-2-3 1-2-4-2 0 0 0-4-3l1-3q-2-2-1-4l2-4v-3l-1-5v-5q2-2 1-3l-7-13"/><path id="path5225" d="M750 900h-1l1-1v1"/></g><g id="rs"><title id="title277">Serbia</title><path id="rs-" d="m1413 361-3 1-3 1 1 2 1 1c-2 2 2 3 2 3l-2 1v2h2l-1 3q-1 2 2 3c2 2-1 1-1 2-1 0 2 2 1 3h-3l3 3 2 2 4 1-2 1 1 2c2 0 0 1 3 2l1 4q0-3 5-2l1-2h3c1 0 5 0 4-2v-3l2-1 1-2-3-2q-3-3 0-7l-1-2h2q-2-2-3-1l-2 1-1-1-3-1-1-1v-1q1-2-1-2l-4-2q1-3-2-5z" class="landxx rs"/><g id="xk"><title id="title280">Kosovo</title><path id="xk-" d="m1416 390 2-1 2-1v-2l2-1c0 2 5 2 5 4l2 2-1 3-2 2-3-1-2 3-1-3-2-1-1-2-1-2" class="limitxx xk rs"/></g></g><path id="ci" d="m1205 703 2-2v-2q1-3-1-5h2l1-2 1-2q-2-1-2-3c-1-2 4 0 5 0l-3-4 2-2-1-3c-2 2-2-4-2-5l2-2 1-1 2-1q1 3 4 2l1-1q2-1 1-3l2 1 1-1q0 3 2 4l4-2q-1 1 2 1 3 1 2 4l5 3q1-3 4-3h5l3 4v3l1 3 1 4-2 3-2 4-2 6 1 5q2 3 1 5c3-1 1 3 2 4h-2 1q-1 1-3-2l-2 2-2-1h-2 2v-1l-2 1h-3l-3 1 6-1-6 1h-4 2l-7 1-6 3-4 2q-3 2-2-3l1-4q1-3-1-5-2-1-2-3c0-2-5 0-4-2l-2-1" class="landxx ci"><title id="title286">Cote d&apos;Ivoire</title></path><path id="dz" d="M1209 523v-10q2-4 6-6l3-2 3-2q3 2 5-1l3-1 4-1 5-5 4-1 3-2q2 0 2-2-2-1 0-2-3-2 1-3 4 1 4-2c2-4 11-1 13-1-3-2 3-3 1-4l-2-2-1-3v-4l-1-2v-3q-1-2 1-3-2 0-1-2l-3-3 5-2 2-1 2-2 2-1 2-1c1-1 3 2 4 0 1-4 7-5 10-5l7-1 5-1v-1h3l7-1 4 2 4-1 4-1q1-2 3 0h4l2-1 2 1h6l-3 4c3 0 0 4 1 6q1 4-1 8-1 4-5 6-1 2 1 5l2 4 4 6 4 3 1 5 3 11c0 1-3 0-1 2l3 6v21q1 4-3 4c-2 2 2 6 3 7l3 9h3l4 2q4 2 5 6v2q-23 13-41 30l-5 4-4 1-6 2c-1 0-10 3-10 0l1-3v-3l-5-2-3-2q-4 0-4-3l-3-1-1-3-2-2-5-3-11-9-53-40" class="landxx dz"><title id="title289">Algeria</title></path><path id="ch" d="M1320 361v-3l2-2 3-3 2-2q-2-1 1-1l3-1h4l2-1v-1l1 1h3l3 1q1 3-1 4l5 2 2-1v4l-2-1-1 2 1 1-3-1h-2l-1-1-1 3c-1 1 0 4-2 1l-2-1-1-3-2 2q1 2-2 3t-6-1l-1-2q0-2-2-1l-4 2" class="landxx ch"><title id="title292">Switzerland</title></path><path id="cm" d="m1336 718 2-3 1-4v-3l4-4 2-1 2-4 3 1 1-2 3 3 1 2 2 1 2-3q0-2 2-2v-3l3-6v-3l1-2q2 1 3-2l1-4 3-3v-3l1-1 1-3 1-3 2-4q3 1 5-3v-4q0-3-2-2l-2-3v-4l3 1q0 2 2 3l1 4 1 1q2 5 0 9 1 6 5 9h-6l-5 1q-3 3 0 5l6 5 2 3 2 6-1 3-2 4-1 2-2 3c0 1-4 2-2 3q2 0 1 4v2l1 1 1 5 1 2 2 3c-3 0 3 6 3 7l3 2 1 2v4c-2 1 1 4-1 5l-3-2-3-1h-3l-2-1h-10l-1-1h-13l-1 1h-8q-4 0-3-5v-5q-2-2 0-3-3 1-2-1 2-2 0-2l1-1h-2v2l-1-1-3-1-1-5q-1 2-1 0v2q-2-1-1-3" class="landxx cm"><title id="title295">Cameroon</title></path><path id="mk" d="M1420 400v-1l2-2 1-2 3 1 1-2h2l3-1 2 2q3 2 3 5v2l-1 1-2 1h-3q-3 3-6 2h-2l-1-2q-2-1-2-4" class="landxx mk"><title id="title298">North Macedonia</title></path><path id="bw" d="m1421 974 1-24h7l1-32 12-2h5l2 3 6-4h1l2-1h4v1l2 4 2 4 1 2 5 7q5 0 5 5 4-1 3 3v3l2 3 7 2v2l3 1-4 3q-3 0-5 2l-4 5-1 1-3 2q-2 1-2 3t-3 5l-4 2-1 1-1 5q-1 3-4 2l-5 1-4-1-3-2q-2-3-5-1l-2 6-2 2-3 3h-2v1l-2 1h-6c-2-3 2-5 1-9l-2-6-4-3" class="landxx bw"><title id="title301">Botswana</title></path><path id="ke" d="M1531 769c1-2-3-6 3-5v-1l3-1q-3-3-4 0-2 0-3-4l2-4 4-5v-1l2-3 1-3-2-4-2-4-1-3-1-1 1-2-1-1-2-1-1-3 2-2q3-2 6-1h7l1 1 7 1 7 5 3 1h3c2 2 5 0 7 2l2-4 6-3 4 2h6l-4 6-3 6v20q-1 7 2 13 2 2 2 5-2 3-4 2h-1v3h-1l-2 2q-3 1-2 3l-2 4c-1 0-2 6-3 5q1 3-2 6h-1l-3-2-8-8q-2 0-1-1 1-3-2-5l-25-15" class="landxx ke"><title id="title304">Kenya</title></path><path id="jo" d="m1530 506 1-8 2-7v-13q1-3 3-1t6 3l6-4 8-5 2 7 1 2q2 0 0 1-6 4-14 6l8 9-3 1-1 3-5 1q-2 4-5 6l-9-1" class="landxx jo"><title id="title307">Jordan</title></path><g id="mx" class="landxx coastxx mx"><title id="title310">Mexico</title><path id="path2614" d="M468 543v2l-1-3 1 1"/><path id="path2594" d="M403 507v2-2"/><path id="path2596" d="m424 514-1 3 1-3"/><path id="path2600" d="M437 545h1v2l1-6-2 4"/><path id="path2602" d="m441 508-2-4c-2 0 1 4 2 4"/><path id="path2604" d="m439 547 1 2-1-2"/><path id="path2606" d="m446 511 2-4-3 3 1 1"/><path id="path2608" d="m449 534-2 2 2-2"/><path id="path2610" d="m449 542 1 2-1-2"/><path id="path2612" d="M454 551v-2 2"/><path id="path2616" d="m468 543 1 1-1-1"/><path id="path2618" d="m474 572 1 1-1-1"/><path id="path2630" d="m422 478 18-1-1 1 23 10h21v-3h13q2-1 2 2l2 2 3 4 2 2v5q1 5 6 7 2 2 3 1l3-2 2-4 3-1 6 1 2 2 3 4v5l2 5 1 2 1 1v4l1 4 2 2 3 2 1 1 5 1q1 2 3 0-6 8-8 18c-1 5 0-5 4-11v-3l-2 1v5l-1 3-1-1v2l-1 4v1q1 3-1 5l-1 6 1 7q2 1 0 4l1-3-2-4v4l1 2q0 5 3 8l3 8 1 4 2 2h-1l-1 2 1-1 1-1 2 1q5 0 6 3t4 1l4-2-2 1 9-1c0-2 5-3 6-2v2h3v-1q3-1 1-2l1-1-2 1 4-3 3-5 2-2 1-3 2-6-1 1q3-4 9-4l6-2q3-1 7 1l-1-1 3 1 3-1v5l-4 5-2 2v2l-2 3c4 0-1 2 0 3l1-1-2 5-2 5-1-5-1 2-2 1-4 5h-14l-2 1v3q-1 2-4 1l4 4 2 3v3h-10l-4 9-1 5-3-3s-2-4 0-2l-3-2-3-3q-2-3-6-5l3 2-5-2 1-1-2 1q0-2-1 0h1l-6 3-6 2-5-1-5-1-2-2-3-1-2-2-4-1-3-1-3-2-8-4-4-5h-2l-4-1q-4 0-6-3l-1-2-4-3-4-3-1-2-2-3q-2-2 0-5l3-1-2-1c0-1 4-5 3-6l-2-4v-4l-5-10-7-8h2q-3 0-3-3t-2-3l-1-1-1-1-1-2-1 1q-1-1 1-2l-4 1 1-1h-1l1-3 1-1q1-2 2-1h-1l-1-3-2-1-1-3-3-1 1-5-2-1-1 1-2-2-1-2-1-2-1-3q-2-2-1-4l-1-3v-5l-1-5 1-3-3-1-1-3-2 1-2-1-4-3 1 3-2 3v4l-1 4q0 4 2 6l3 6 2 2v2l1 1v6l4 5q-2 3-1 5l1-3c3 0 0 12 3 12v7q-1 3 2 4h1v-1l3 3v3q3 1 1 4l-4 2-1-4-2-2-2-3-5-4q-2-2-2-5l-1 2c0-4 4-7 2-11l-4-4-1-2v-2l-1 2h-2q-1 1-1-1l-2-1-1-1-1-1-1-1-3-4h6q2 1 2 3v-4l-1 2v-2q2-2 2-6l-5-7-3-4v-5l-1 1q2-2 0-5v-2l-1-3 1-2v-2l-1-1 1-1v-2" class="landxx mx"/><path id="path2634" d="m580 598 3-1-3 1"/><path id="path2772" d="M619 584q2 0 2-3-2 1-2 3"/></g><g id="ae" class="landxx coastxx ae"><title id="title328">United Arab Emirates</title><path id="path2704" d="m1673 551 1-1-2 1h1"/><path id="path2784" d="M1657 550q0-1 0 0l1-1v3h3l2-1 1-1 2 1h3q4 1 7-1l-1-1 2 1 2-2 2-4 4-6 4-4v3l2 2q2 3 0 5-2 3-2 0l-1 2v3l1 2q-1 2-3 2c2 1-1 6-1 9q0 3-3 2l-6-1-7-1q-3 0-5-2l-3-4-3-3-2-3" class="landxx ae"/></g><g id="bz" class="landxx coastxx bz"><title id="title333">Belize</title><path id="path2808" d="M609 609v-1 1"/><path id="path2810" d="m597 622 2-11c0-1 0-9 3-6q2-5 5-5l-1 1c4-1 1 5 0 6v7l-2 3q1-2 0 0l-3 2-1 2-1 1h-2" class="landxx bz"/></g><g id="br" class="landxx coastxx br"><title id="title338">Brazil</title><path id="path2886" d="M976 877c1-3-2-1 0 0"/><path id="path2814" d="m870 773 2-1-2 1"/><path id="path2816" d="m872 774 2-1q-2-1-2 1"/><path id="path2846" d="M885 741q-2-1 0 0"/><path id="path2848" d="M885 743v-2 2"/><path id="path2818" d="M874 772c2 0 7-5 5-7q-2-1-3 2l-1 2q-2 1-1 3"/><path id="path2820" d="M878 764q2-1 2-3-2 1-2 3"/><path id="path2822" d="M878 770q2-1 1-3l-1 3"/><path id="path2824" d="m881 767-2 2 2-2"/><path id="path2826" d="m880 764 1-2-1 2"/><path id="path2828" d="m880 768 2-2q0-2-1-1l-1 3"/><path id="path2830" d="m880 764 1-1-1 1"/><path id="path2832" d="m882 762 2-1-1-1q-3 1-1 2"/><path id="path2834" d="m881 765 1-2-1 2"/><path id="path2836" d="m881 767 1-1-1 1"/><path id="path2838" d="m881 760 2-1-2 1"/><path id="path2840" d="m882 772 2 3h5q2 0 1-1l1 1 1-2h4q2-1 2-4l2-4q2-2-1-3-3-2-6-1l-1 1-3-1q-3-1-6 1l1 4-2-1 1 2-1 2h3-3v3"/><path id="path2842" d="m884 760 1-1q-2-2-1 1"/><path id="path2844" d="M885 758v-3 3"/><path id="path2850" d="m888 760 2-2q1-1-2-1l-3 1 3 2"/><path id="path2852" d="M886 757q3-1 2-3-3 0-2 3"/><path id="path2854" d="m886 758 2-1-2 1"/><path id="path2856" d="m886 753 2-1-2 1"/><path id="path2858" d="M888 752v-2 2"/><path id="path2860" d="m890 760 2 1q1-3-2-1"/><path id="path2862" d="m896 775 1-2-1 2"/><path id="path2864" d="M900 770c2 2 1-3 0 0"/><path id="path2866" d="M906 766v-1 1"/><path id="path2872" d="M915 768h1-1"/><path id="path2874" d="M927 772v-2 2"/><path id="path2876" d="M928 774h1-1"/><path id="path2878" d="m930 786 1-3-1 3"/><path id="path2882" d="M937 780v-1 1"/><path id="path2812" d="m707 825 1-2v-3l4-4v-3l1-3 1-6 3-2 2-1 3-2 4-1 3-1 2-2 2 1 2 1 2-3 1-8 1-12 1-4-1-4q0-2-3-4l-1-4v-3q3-3 5-1l2-1q-1-4-5-3v-5h10l2-1v-1c2-1 1 2 3 1l2-2q3-2 3 1l1 5v1h2l3 3q3 1 5-1c3-1 1 2 2 3l2-3 2-2 3-1q1-2 2 0l2-4 2-2 3-1q1-3-2-2l-2-1-1-2-1-6-2-4q-3-1-2-4l2 2q2-1 3 1l2 1h3c2-3 3 3 5 3v-4l2-1h3l5-3 2-1h2q3-2 2-6h3l2 1v5l3 2v1l1 2-2 4v2l-2 4q-1 3 2 5l1 4 3 3 2 1 2 1 1-2 6-2 2-1q1-2 4-1h8l-1-4 4-1h2q2-2 4 1v-1l2 2 2 1 3-2 2 1h5l2-2 4-7q4-6 4-10l2 4-1-3q4 2 3 6v-2l2 9 1 6 1 2 4 1q3 3-1 5h2l-3 4-1 1-2 3-3 3-3 4-2 4-1 3h-3l-3 2s4 0 3 1l3-1 3-2q3 0 4-4c2 2 0 4 2 6v2l2 1c2 1 4-2 5 1l1-1 1-1h2l-2 7 3-6 2-2q2-3 3 0v-1l2-1h-2l1-1 1-4 2-1h4v-1l2 1h1v1h1l1-1v2l1-1-1 1h3q1 2 1 0l1 2 1-1 1 2 1-1 1 1h1v2l1-1 1 3v-2h2l1-1-1 2c2-1 0 2 2 1h-1 2v2q0 2-2 2l1 1q0-2 2-1 1 2-1 2l-1 5v2l2-3 1-3 2-1-2 3h1l2-2 3-1c0-2 5 0 6 1l4 2q2 1 2-1l3 2 2 1q0-2 2-2h7q6 2 10 7l4 2 2 3 3 3 3 2 4 2 5 1q5-2 7 4l1 4v2l1 1 1 6v-1 9l-1 5-2 5-3 4h-2l1 1q-1 4-4 6l-2 2-3 2v-1 1l-1 1v2q-1 2-1 0l-1 2h1c-2 2-4 14-8 13q1-2-2-3s-1 3-1 1l1 2-1 3-1 2v-1l1 3-1-1 1 4v-2 9l1 8c1 5-2 9-1 14q0 3-2 5-2 3-1 7t-1 7c-2 1 0 5-3 5q1 3-2 5l-1 2-1 5v3l-4 2-2 3v3h-8v-2q-3 0-1 2l-6 1h3q-1-2-4-1h-2l-2 2 1 1-3 1-3 2v2h-5l-2 1v-1l-3 3-2 2-4 3-2 3-2 3 1-2h-2q0 4-2 1l2 2v2l-2 1h1v2h-1l1 1v3q2 2 1 4v1l1 6v5l-1-1 1 1-3 3-3 4-3 9-4 9-6 7-1-3h3l2-3 1-2q0-2 1-1l1-2 1-3v-1l-1-2-2 2-1-2-2-2 2 4-1 3v-1 2h-1q1 3-2 4l-1 2q-2 2 0 3-1 1 1 1l-1 2-1 5-4 6-1 1-2-2v-2q0-2 2-3 0-3-2-3l-3-3-5-4-5-3-1-1q-3 0-5-4c1 2-3 4-3 1q0-3-4-4-2-3-5-3l-1 2-3-1 3-4 3-4 3-6q0-2 3-2l-1-1 3-3 3-3 3-2 4-1v-5l-1-6-3-3q-1-2-2 1l-2-1v-2l1-4v-7l-2-2-4 1q-3 0-4-4l-1-4-3-6-4-2-2 2c-2 3-1 0-2 0l-5-1-3-2 1-2-1-3 1-4-1-2-2-4c-2-2 3-2 1-3q-2-2 0-6v-3l1-3q1-3-1-6l-2-3q-3 1-4-3l-1-4 1-3h-8l-6-1-1-5-2-5h1l-1-6-1-2-1-3-5-3-4 1-3-3-2-1-2-1h-2l-1-2-2-1q-1 1-2-1h-4l-4-2-3-2-1-2-1-1-2-5 1-2-2-1v-2l1-3-1-5-1 1h-4l-5 2q-2 3-4 3l-2 2-3 1-1 1-3 2h-4l-7-1-3 1-2-1-1-8 1-2v-3l-5 4q-4 2-7 1l-2-4-6-1q3-4-1-6l-1-2-1-1-2-4q0-2-2-3" class="landxx br"/><path id="path2868" d="M912 988h1v-2l-1 2"/><path id="path2870" d="M915 1000v-3 3"/><path id="path2880" d="M935 967v-2l-1 2h1"/><path id="path2884" d="M942 960h1-1"/><path id="path2888" d="M977 873q2 0 1-2l-1 2"/></g><g id="sl" class="landxx coastxx sl"><title id="title380">Sierra Leone</title><path id="path2896" d="M1173 694h-1l3 1v-1h-2"/><path id="path2902" d="M1170 681h2l1-2 3-4q1-2 4-1h6l2 3 1 2v2l1 1 1 2-2 4 2-1q3-1 1 1l-2 3-1 2-3 3-3 4-7-5q1 1 0 0l2-1q-2 1-2-2h-3l-1-4q-2 0-2-2l1 1q0-2 2-2-1 0 0 0h-3q-1-2 1-2l-1-2" class="landxx sl"/></g><path id="ml" d="m1179 632 3-1 1-5c1-4 5 2 6 3q1-4 5-3 5 2 6-2c1 3 7 2 9 2l15-1h5q2-1 1-3 2-2 1-4-3-2-2-5l-5-70h13l39 31q4 1 5 4l1 2 2 1 1 3 2 1h2l2 1 5 2v4q-2 2 1 3l7-1v19l-1 4-1 3-1 3-2 2q0 2-2 2l-3-1-10 1q-3 0-5 2l-3 1h-11l-4 3-4 2q0 2-2 2h-3l-2 2-1 3-3-1 1 4q-2-1-2 1l-4-3c-2 4-3 2-2 4v2l-2 1q2 3-1 5l-3 1-3 1 1 2v4l-1 1-1 5h-2l-2 2q-2-1-2-4l-1 1-2-1v3l-2 1q-3 1-4-2l-2 1-2 2q0-3-2-4v-3h-3q0-3 2-3 0-2-2-3l-1-1-1-3-1-3-2-1v2l-3 2q-2 1-2-1l-4 1c-2 3-1 0-3-1-1-1-3 4-4 0v-3l1-3c0-1-3-6-3-4l-2-2v-3l-1-4v-3" class="landxx ml"><title id="title385">Mali</title></path><path id="cd" d="m1364 809 2-1v-4c-1-1 4-4 5-5l2 3 2-2 1-2c1 1 3-2 4-1q2 1 0 2l1 3 2-1 3-3 3-2 2-2q4-3 3-9v-5l3-4 5-7 3-4 1-5 1-9 2-5v-5l3-9 1-5v-2l-1-2 2-2 2-4 4-2 3 1 4 5h4l2 1 1 1 2-1 2 1 4 1c2-1 1-6 4-6 2 0 2 3 4 1 1-1 7-2 7-4l3 2 4-2 1-1h5l2 2h2l5-1 3 3 1 2q3 3 6 1h3q3 1 3-1c2-3 5 3 5 4 1 1 5 2 4 4l2 1 1 1-1 2v6l1 1 3 2-6 8-3 3-1 1-1 3-1 4-1 4v7l-3 3-1 3-1 3q-2 2 1 5l1 3c-2 2 0 7-2 9 2 1 1-3 2-2l-1 7c0 3 3 5 1 7l-1 3 4 7q3 1 4 7c0 3 2 1 3 5l-13 2c2 3-3 5-4 7q3 3 2 7v4l-1 3-1 2v5l4 5 4 1q0-3 2-2v11l-1-2c-1-1-4 4-5 1l-2-3-1-2-2-3-3-1-3-1-1-2c-1-1-2-5-3-2q-2 3-5 2l-4-1-1-1c-3 1-3-3-2-4l-5 1h-3v-3l-2-1q-1-1-1 1h-11l-2 2-1-3 1-2q1-4-1-7-3-2-2-6v-8l-1-3 1-4q0-2-3-1h-4q-4 0-2-4h-2l-1 1h-5v3q1 2-2 2v4h-13q-3-2-4-5l-1-1v-3l-2-4-1-4-2-2h-25c-2 0-5 4-6 0" class="landxx cd"><title id="title388">Congo, Democratic Republic of the</title></path><g id="it" class="landxx coastxx it eu"><title id="title391">Italy</title><path id="path2916" d="M1361 442v-1 1"/><path id="path2906" d="m1324 370 3-3-1-2-1-1q2 0 1-2l3 1h3l2-2v-1l2-1 1 2 2 1 1 2 1-3 1-2q0-2 1 0h2l3 1-1-1 1-2 2 1v-3l3 1 2-2h3l4-1c-2 1 2 4 3 4l7 1-2 2 2 1q-2 2 0 2-1 1 1 1 2 1-1 2 0-2-2-1h-2l-2 1h-2l-1 1-1 1 1 2q2 2 0 2-1 6 5 9l4 3 3 6 6 6 5 1q3-1 4 1l-2 3 5 2 6 3 5 3q3 1 2 4v2l-2-1-4-3-2-2-4 2-1 4q0 2 2 3t3 3c0 3-5 1-5 4q1 2-1 3l-3 3h-2q0-3 2-4v-2l2-1-1-3-1-3-2-4-2-1h-2l-1-2v-1q-2-3-5-1 2-3-1-2l-2-3-3-1h-2l-1-1-4-2-3-3-2-2q-2-3-4-2c1-1-3-5-4-5l-2-6q-2-3-5-4-5-4-8 0l-3 2-3 1q2-3-1-3-5 0-3-4v-2l-2-2" class="landxx it eu"/><path id="path2910" d="m1336 410-1-1-1-3q4 1 6-2l2-1 2 1v2q2 1 1 4v7l-1 4-4-1-1 3-3-1h-1q2-1 1-2v-4h1v-1l-1-1v-4"/><path id="path2912" d="M1350 390h-2l2-1v1"/><path id="path2920" d="m1367 435-2-2q-1-1 1-4 1 2 3 0l6 2h3l4-2h2l3-1-2 4-2 4 2 3q-2 2-1 3h-4l-3-3-5-2-5-2"/></g><g id="so" class="landxx coastxx so"><title id="title399">Somalia</title><path id="so-" d="M1584 740v-5l2-4q2-4 6-7l7-3q3-3 7-4l9-1 21-26h-8l-8-3-9-3-7-4-2-2-2-2-2-4q-2-2-2-5l3-7 6 7q3 3 8 2l4-2q2-2 4-1h6q3-3 5-3h4l3-1h4l5-1 5-2 3-3c1 0 5 1 4 2l-1 6v5q1 1 1-1l2 1c-1 2-4 0-4 2v7l-3 5-3 6-2 2v3l-3 6-3 8-5 8-4 7-20 20-6 5-7 7-6 7-2 3q-2 3-3 2l-3 7-3-5q-2-4-1-7v-22" class="landxx so"/><path id="xs" d="M1636 690h-8l-8-3-9-3-7-4-2-2-2-2-2-4q-2-2-2-5l3-7 6 7q3 3 8 2l4-2q2-2 4-1h6q3-3 5-3h4l3-1h1v23z" class="limitxx so xs"><title id="title402">Somaliland</title></path></g><path id="af" d="m1712 465 1-2v-2q3-2 2-4v-5c1-2 3 1 3 1h3l3 2 3-1 2-2v-1l-1-2q5 1 9-3c2-2-1-7 2-8l4-1 1-2 3 1h4l4 1h4l2 2h2l3-2h1l3 1 1-3c1-2 4 1 5 0l-1-3 2-3q2-4 6 0v3h2v4l1 4q3 5 6 0l3-1q0-3 3-3c1-1 5-1 3 1l5-1q3-1 4 1h-2v2l-2 2-4-1-7 1-3 1-2 2-2 1-2 2 2 2 2 4 1 2-1 2-2 2v1l-1 1 2 1q1 4-2 4h-4l-2-1c-2 2 2 3 2 4l1 2-3 2q-3 0-2 2v6q0 3-2 5l-2-1-1-1-1 1c-4-2-1 1-6 2l2 1-4 1h-2l-2 2q-2 1-2 3l1 4v2c1 2-5 3-6 3l-3 1h-4l-4 1-4-1h-9l-10-3 4-6 2-5c-1-4-7-1-8-5l-2-7q-3-4-1-7 2-2-1-2-2-1-2-4" class="landxx af"><title id="title406">Afghanistan</title></path><g id="bd" class="landxx coastxx bd"><title id="title409">Bangladesh</title><path id="path3240" d="M1948 557h-1l1 1v-1"/><path id="path3242" d="M1948 562v1l1-1h-1"/><path id="path3246" d="m1949 564 1 2v3c1 1 2-3 1-4l-1-2-1 1"/><path id="path3248" d="M1949 569q1-1 0 0v-1 1"/><path id="path3250" d="M1950 566v1-1"/><path id="path3252" d="M1953 569q2-2 0-4v4"/><path id="path3254" d="M1956 566q1-2-1-2l1 2"/><path id="path3256" d="M1959 570v1-1"/><path id="path3258" d="M1960 574v-2 2"/><path id="path3340" d="m1927 530 1-1 2 2 3 2-1-2 2 2 3 2v-2q4 1 3 6l1 2 5 1h11c1 0 6 3 2 2q0 5-2 6h-2l-2 1-1 4 2 5v-2q1 3 4 2v-5q1-2 3 0l1 6 2 7 2 7-3-1 1 6-2-4-1-3c0-3-4-5-2-7v1q-3-2-3-6l-2 2v1l-2-1v1c-1 1-2-3-3-3v-2l-1-2 1-1h-1v-1l-1 1 1 1h-2l2 2v1l-1 3q2 0 1 2l1-1q2 3-1 4v-1 3h-2l1-2-2 1 1-1-1 1v-4l-1 3v2h-1v1l-1-5v3l-1-2q2 2 0 5v-2l-1 2-2-4-1-4-1-2v-3l-1-1v-1l-2-3 1-2-1-2-4-2-1-2v-2c2 2 2-2 3-2h3l-1-3h-3l-2-2q-3-4 1-6l-2-1" class="landxx bd"/></g><g id="do" class="landxx coastxx do"><title id="title423">Dominican Republic</title><path id="path3372" d="M731 604v-3l-1-2q2-1 2-3c-1-1 2-2 1-3v-5h7l3 1 2 1q2-1 2 1 0 3 3 1l2 1h-2q-3 1-1 1l4 1q3 0 4 3c2 2-2 2-2 3q-1 2-2 0l-2-1h-3l-5 2h-3v-2l-2 1-2 1q0 3-3 5l-1-1-1-2" class="landxx do"/><path id="path3374" d="m755 603-1-1 1 1"/></g><g id="gw" class="landxx coastxx gw"><title id="title428">Guinea-Bissau</title><path id="path3430" d="M1147 660h-1 1"/><path id="path3432" d="M1147 657v-1 1"/><path id="path3434" d="M1148 664h1q-2-2-1 0"/><path id="path3436" d="M1149 657h-1 1"/><path id="path3438" d="M1149 660v1l1-1h-1"/><path id="path3440" d="m1151 663 1-1-1 1"/><path id="path3442" d="M1155 663h-1 1"/><path id="path3444" d="M1144 653h3l2-1 5-1 5-1h8v3l-2 1q2 1 2 4l-4 1-4 1-3 5q1-2-2-3v-1c-1 1 0-3 2-2l-2 1q-2-3 1-3l3 1-1-2h-3l-2 1-2 1 2-2-4 1q-3-2 1-4h-2l-1 1-2-1" class="landxx gw"/></g><path id="gh" d="M1247 705v-6l1-5 3-5v-6l-1-2v-6l-1-6v-5h13l4 1 2-1q3-2 3 1-2 2 2 5l1 2v5l-1 1h1l1 2-1 4 2 2v3l-1 4q-2 2 1 3l-1 3v4l3 2 2 1-2 2-2 2-1-2-3-1 3 1q1 2-2 2-4 1-7 4l-5 1-3 2-2 1h-2l-3-1-3-2h2c-1-1 1-5-2-4l-1-6" class="landxx gh"><title id="title439">Ghana</title></path><path id="at" d="M1344 352v-2c0-1 5-1 4 2q3-1 2-3h3q-1 1 2 1h1q3-2 6-1v-1h2q2 0 3 2v-4l-1-1c-1-1 3-2 3-2l2-2 1-3 4 3h2l1-2 1-2 5 1 4 1 5 1v4l1 1-1 3h-3c-1 0 3 1 1 2q-3 2-1 4-3 0-3 3h-7l-3 2-5-1-8-1c-1 0-5-3-3-4l-3 1h-4l-2 2-2-1-1-1-2 1-2-1-2-1v-1" class="landxx at eu"><title id="title442">Austria</title></path><g id="se" class="landxx coastxx se eu"><title id="title445">Sweden</title><path id="path3388" d="m1357 261-1 1h2q1-2-1-1"/><path id="path3390" d="m1357 263 1-1-1 1"/><path id="path3392" d="M1387 276v1q3-1 2-4l3-5q-3 1-2 3l-3 5"/><path id="path3396" d="m1399 271 4-4c-3 0 3-4-2-3l-3 2q-1 3 1 4l-1 2 1-1"/><path id="path3398" d="M1398 244h1l-1-1v1"/><path id="path3400" d="M1399 254v1-1"/><path id="path3402" d="M1400 251h-1 1"/><path id="path3404" d="m1403 264 2-1-2 1"/><path id="path3452" d="m1355 254 2 2 1-4 1-4c-1-1 3 0 3-2v-4q-2-2 0-3 2 0 2-2 0-3-2-2-2-1-2-4v-8l-1-2 1-2 3-3 5-1q3 1 3-1l-3-3 3-2 2-3v-6l5-1v-2l1-1 4-3-1-3 5-4 4-1 2-1v-2h11-1q3-2 1-4 5 0 9 3l7 2 4 3-1 1v2l1 1q2 1 0 1l2 2v4c-2 1 2 3 3 5h-6 1-4c0 2-2-1-2 0l1 2-2-1 1 1h-2c2 1-2 1-2 1v3l-3 1 2 1c-2 0 2 2 2 2l-4 3-3 3-3 1h-2q0 2-1 1l-1 1-5 2h2q0 2-2 1l-1 1h-1l-1-2 1 3q0 2-3 1 0 2 2 2l-2 3 1 2-2-1c3 1-2 1 1 1q-2 0 0 1c-3-1 1 1-1 1v2l2 3h-1l2 1h3q0 2 3 3c-2 0 1 1 1 1q3 2 1 2l2 1-3 1q-3 1-2 2l-1-1 2 1q2 1 0 1h-1l1 1h-2l-1 2-2-2 1 2-1-1-1 1 1 1h-3v1h-5l4 1h-3c1 1 4 3 1 4l1 1h-2q3 0 1 2l1 2c-2 1 0 3-2 5q-1 4-4 5h-4l-2 1-3 1 1 3q-1 2-3 1h-7l1-3-3-4q3 1 1-2c3 0 0-1-1-2l-2-4q0-2-2-1v-8l-3 1 2-2q-2 0-2 2l-1-1c1-1-2-5 0-6" class="landxx se eu"/></g><g id="tr" class="landxx tr"><title id="title460">Turkey</title><path id="path3456" d="m1459 407 2-2 1-3 1-2-1-1c-3-1 0-1 0-2l3-1h6l1 1v1q3 4 8 5l-1 2-5-1-2 1h-2l-2 2-4 2-3 4q0-3 2-3l2-2c-2-1-5 2-6-1"/><path id="path3458" d="m1460 418 1-5 3-3h5q3 2 2-1h2v1h8l-2-1q3-2 7-2l-5-1q-2-3 1-3l6 1h7l1-2 3-1 8-4h12l1-1h2q-1 2 2 3h4c0-2 1 1 1 1q1 3 3 2 1-1 3 1l5 1h2l4 1 5-1h3q3 2 6 1l7-4h2l1-1 1 1h3l2-1 1 1 2 1v1h2l1 2q2 3 1 4l1 3 4 1q4 1 4 4-1-2-2 0v1l-3 1 2 2 1 3 2 4-2 2q1 3 2 2l1 3 2 1v2c-2-1-2 2-3 1q-2-1-1-2h-5l-4-1-2 1q-2 2-3 0l-3 1h-6c-4 0-7 4-11 4l-6-1h-4c-1 0-6 3-7 1q-2-2-3 0l1 4h-2v2l-1 1-2-1-1-2q-1-1 1-3 2 0 1-2l-2-1-2 2-2 1-3-2q-5 0-6 5l-1-1q-1 2-2 1l-4 1h-4l-4-4-7-2q-2-2-3 1l-1 4-1-1-3 1q-3 1-4-1l-2-2q0-2-1-1l-3-2-3 3-1-1 1-1-5 1 3-1h2l1-2c-1 0-6-1-7 1-2-2 2-1 2-2v-1l-1-1c-2 2-2-2-3-2q2-1 1-3l-3-1-1-1-3-1q2-1 1-3h1l1 3 3-1-3-2 2-2-1-1-2-2 2-3c-2-1-4 2-6 1"/><path id="path3606" d="m1457 413 2-1-2 1"/></g><path id="ug" d="M1497 770v-5l1-5 1-5v-2l2-2 6-6 3-4-2-2h-2v-3q-1-3 1-6l-1-1 2-2h1l3 1 2-1 2 2 3-2 4-1 4 1 3-4 1 3 2 1 1 2 2 6 1 3 1 3v4q-2 2-1 3l-2 2-2 3-1 2-2 3-2-1-1 1q-3-1 0-1-2 0-1-2l-2 1h1l-2 2-3 1v-2l-2 2-2 1-1 1q1 3-2 5l1 2h-6q-4 0-7 2 0 2-2 2l-1-1-2 1v-2" class="landxx ug"><title id="title466">Uganda</title></path><g id="mz" class="landxx coastxx mz"><title id="title469">Mozambique</title><path id="path3382" d="m1537 948 1-2-1 2"/><path id="path3384" d="M1545 923v-1 1"/><path id="path3462" d="m1500 889 17-6 3-1 2-1 4 5 3-1h3l1 7q-3 3-2 6l1 2 1 2 3 3v2q0 2 2 0l-1-4 2-4q4 0 4-4l-1-4 1-5-4-4-2-5-2-1v-11l2-5h4q1-2 3-1l2 2h3l4-1q4 3 6-2l3-1h3l4-1 4-2 4-3q3 0 2 2v3l-1 2 1 4v4l-1 1 1 2-1 3q2 2 0 5c2 0 0 5 1 6v2q1-2 1 1l-1 3h1l-1 1-1 1q2 0 0 2l-3 5-3 4c-1 1-6 3-5 4l-5 2-2 1h-2l-4 3c-1 0-3 4-5 2 3 4-4 5-3 8l-2-1v1l-5 4-3 3q-1 2-3 2l-2-2q2 1 2 3v2h-1v2q0 2 2 3l1 3v1l1 5v4l1 2 1-3v1l-1 3 1 3-2 9 1-2q1 4-2 6l-7 4-9 4-3 3-2 3c1 0 2 3 3 1q1 5-1 6h-4l-1-4-1-3v-7l1-5-1-4-2-7v-3l-1-4-1-2 3-3c1-1 5-7 6-6q-1-1 1-4v-2l3-4v-2l1-2h-1l-1-3 1-2-1-2 2-2 1-3-1-3v-8l1-3-3-1-4-1-7-4h-5l-1-4-1-5" class="landxx mz"/><path id="path3466" d="m1572 901 1-1v2l-1-1"/></g><g id="jp" class="landxx coastxx jp"><title id="title476">Japan</title><path id="path3482" d="M2194 548v2l1-1-1-1"/><path id="path3484" d="m2196 548 1 1 1-2-2 1"/><path id="path3486" d="M2205 544q-1 2 1 1l-1-1"/><path id="path3496" d="m2212 531 1 1-1-1"/><path id="path3504" d="m2220 534 1-3q2-1 2-4-1 3-3 2v5"/><path id="path3514" d="m2223 522 1 1v-1h-1"/><path id="path3516" d="M2225 518q-1 2 1 2l-1-2"/><path id="path3518" d="M2226 516h1-1"/><path id="path3520" d="M2229 513q-3 1-2 3 1 1 1-1l1-2"/><path id="path3488" d="M2209 459q-2 2 0 3v-3"/><path id="path3490" d="M2209 463h-1q2 3 1 0"/><path id="path3492" d="M2210 477v1l1-1-2-1 1 1"/><path id="path3494" d="M2212 473h-1l1 2v-2"/><path id="path3498" d="M2214 471h-1v2l1-2"/><path id="path3500" d="M2214 467h-1l1 1v-1"/><path id="path3502" d="M2216 471h-2l1 2 3 1 1 2-2-1-1-1q0 2 2 3l2-1 1 1q1-2-1-2l-1-2c1-2 3 2 4 3q2 2 1 5-2 0-1 2l1 2q2 1 0 3l3 1 1 1v-1q-2-1-1-3h1l1 2v3l3-2q-2-2 1-1l-1-8v-3q2-1 0-3h1l-2-2-3-1q2-1 0-3h-5q0-2-2-2t-2 3l-2 1q-1-1-1 1"/><path id="path3506" d="m2220 479 1 2c3-2-2-4-1-2"/><path id="path3508" d="m2220 486 1-1-1 1"/><path id="path3510" d="M2222 466h3q4-2 6 1v-5l2 1 3-1 1 1v-1l1-1h3q2 0 0-1l4-1 4 1h3q1 2-1 3l1 2q0 3 2 2l2 2 3 1 1-4 1-2 3-1-3-3q-2 0-1-3h1q0 2 2 2l-1-1 3 1-1 1h8c-1-1 1-6 4-3h-1l1 3q3 0 2-2l-1-3c-1-2 3 0 4 0 0-1-3-2-1-3-1-1 3-2 2 1l1 5 3-3-1-2q0-2 2-3-3-2-5-6v-5q0-4-4-7-1-6 3-4c-1-1-3-6-1-6l-1-3-1-2-1-3-2-2-5-3-4-7c-1 1-3-2-4-1q0 4 3 2 2 1 1 3l-2-1v2l-2-3-3-1 1 4-1 2 3 3-1 2h1l3 3 1 8v6q-3 2-3 6l-4 3c-1 0-2 3-4 1l-1-2-1-1q2-1 2-3l-4 2 2 5-2 4q0 3 2 5h-2c1 3-4 0-2 2l-2-1-1-2-1 1-4 1h-8l-4 1c2 2-5 7-5 8-1 2-4 0-3 2l1 3"/><path id="path3512" d="m2222 479 1-1-1 1"/><path id="path3522" d="m2230 447-1 1 1-1"/><path id="path3524" d="M2230 496v2q2-1 0-2"/><path id="path3526" d="m2230 445 1 2-1-2"/><path id="path3528" d="m2233 466-2 1 2-1"/><path id="path3530" d="M2232 463v1-1"/><path id="path3532" d="m2235 469-3 2 2-1 1 2q1 0 0 0l2 3 2 1 2 1v-6q4-3 7 1v-3l1-2-1-4q-3 1-4-1l-4 1q2 2-1 3l-3-2-2 5"/><path id="path3534" d="M2233 464v1-1"/><path id="path3536" d="M2233 493v4-4"/><path id="path3538" d="M2236 463v1-1"/><path id="path3540" d="m2242 367 1 1-1-1"/><path id="path3542" d="M2245 461h-1 1"/><path id="path3544" d="M2244 369h2-2"/><path id="path3546" d="m2246 367 2 3 4 4 2 5v3c1 2 4 5 0 4l-5-1 1 2q2 0 1 2c0 2-3 1-1 4l4 4 1 3q2 2 3 0l1-2h3l-4-2-4-2-1-2h3l2 1q2 1 3-2 3 0 8 3l6 3v-6q2-4 6-2c-1-2 3 0 2-2l2-1 1-1q-1-1-2 1l-1-1s-3-3-1-2l-3-3-1-4-2 4c-2 1-4-2-5-1l-2-1q-1 1-2-1l-7-3-9-5-3-2h-2"/><path id="path3548" d="M2249 461q-2 1-1 3c2 1 1-3 1-3"/><path id="path3550" d="M2248 395h1-1"/><path id="path3552" d="M2260 428q-2 1-1 3l1 2 1-3h-1v-2"/><path id="path3556" d="M2280 459h1-1"/></g><g id="nz" class="landxx coastxx nz"><title id="title516">New Zealand</title><path id="path3560" d="M2380 1195q-3 0-5 3l2-1 3-2"/><path id="path3564" d="M2417 1164c1 1 1-3-1-1l-5 4 4-1h2l-1-1 1-1"/><path id="path3566" d="m2412 1157 3-1-2 1 2-1-3 2 5 1q2-2 2 1h2v2h4l7-1 1-2 4-1 2-2 3-1-1 1 7-6 3-2 3-4 8-4 4-1q2-2 3-1h-1l3 1q3-1 0-3l2-3 6-2 4-4 4-2 2-2 4-2 1-4 4-2-3 1 3-2-2 1q-2 0 0 1h-3l2-2 1-1-4 2-4 1 3-4h-2q1-2 3-2-4-1-7 3l-3 2-3 4-4 1-4 3-8 7-4 1-4 2-10 5-9 3c-1 1-6 3-5 5h-4l-3 3h-2q-2 1 0 1l-2 2q1-1 0 0l-1-1-2 2h2-2 1l-1 1-2 1-3 2"/><path id="path3568" d="m2498 1111-2 2 2-2"/><path id="path3570" d="M2500 1116v2l2-1-1 2q3 1 6-2l7-5 3-2 2-2 4-2 3-4c-2 0 2-3 2-3 2-1 7-3 6 0l4-5 2-1 2-2 4-5v-2l-4 1q-3 4-7 3l-5-3c0-1 3-7 1-7l2-1h-2v-2 1l-1 2-2 3v-2l-4-1 1-1 2-2 1-2v-3l-1-1 2 1 1-6-2 1 1-1c-1 0-2-3-3-1 1-1-3-1-1-2l-2 1v-4l1-1-2 1v2q1 3-1 4v3l3-2-3 3 1 6q1 1 1-2l1 1 2-1q-2 1 0 1l-2 1h1l-1 2-1-1-1 5h2-1q-2 1-1 3l-1 1v2l-2 1v2h-1l-2 2-4 5-6 2-2 2q0 3 2 2l2 2q3 2 1 3-2 4-5 6-1 2-3 2l-2 2 1-1"/><path id="path3572" d="m2528 1077-1 1 1-1"/><path id="path3574" d="M2533 1071v3-3"/><path id="path3576" d="M2541 1140v1l3-1q-2-2 1-2l-1 1 2-1h-4 1l-2 2"/><path id="path3578" d="M2542 1142h1-1"/></g><g id="cu" class="landxx coastxx cu"><title id="title528">Cuba</title><path id="path3580" d="m637 570 4-1v-3l4-3 4-1 3-2 7-1h4l1 1 2-1 1 1h4q0 2 2 1h3v1l2 3 4 1 5 2 1 1 2 1 1 1 2 1-1-1 3 2-2-1 1 2h3l-1 1h2-1l2 1c0-2 2 1 3 1h2q2 0 1 2l-1 1 7 1 4 3q1 1-2 2l-5 1-2 1-5-1-13 1q1-3 4-4 2-1 1-2l-1-2q-5 2-8-2v-3l-1-2q-1 0 0 0h-4l-3-1-3-1q-2-1-2-3c-1 2-6 1-6-1v2l-1-1h-2l-4-2 3-1v-1h-8l-4 3-2 1h-2l-1 1-4 2c0-3-3 1-3-1"/><path id="path3582" d="m651 574-2-1q2 0 1-2l3-1 1 3-3 1"/><path id="path3586" d="M673 561h-1l1-1v1"/><path id="path3588" d="M684 582v-1 1"/><path id="path3590" d="m686 566-1-1h2l-1 1"/><path id="path3592" d="m689 567-2-1q1-1 2 1"/><path id="path3594" d="m690 568-1-1 1 1"/></g><g id="ve" class="landxx coastxx ve"><title id="title539">Venezuela, Bolivarian Republic of</title><path id="path3410" d="m712 680 4-8 2-7 6-5q2-3 5-3l-4 2q-1 4 1 5v3q1 3-2 4-2 3-1 5l1 2 1 1q-1 3 3 2l2-4-2-6-1-2v-3l2-2 4-1 3-2 3-1-1-1q1 2 3 1l-1-1h-2c0-1-1-6 2-5l1 5q2 2 5 1 4 1 5 4l2 5 9-1q4-2 7 1l2 2 3 1h1c2 2 3-1 5-1l2-2h4l-4-1h2l2-1h14l-3 1-5 1h1l-1 1q2-1 2 2h-3q3 3 4-1l1 2 1 3v-3 3l1-2h1s-3-1-1-1q3 1 2 3l1-1h1q0-2 1 0l4 2c3 2-1 2-1 4l-1 3-1 1h-3l3 2h1l3-2h3c2-2 5 3 4 3l-3 2-2 2-2 2 1 3 1 1q1-1 1 1l-3 2h-2c-3 2 0 3-2 5l-1 3 3 4q3 2 1 5l-2 2-2 1-2 1-2 1-4 1q-2-1-3 1l-1 2q1 2-2 1l-1-2h-6l-1-1-3-1-2-2 1 4q3 2 3 4v3l2 3q-2 3 2 3h2q0 2-2 3l-3 1-1 3-1 2c0-2-3 1-4 1l-3 2-2 3v-2h-3q-4 2-7-3l-1-4-2-5c0-1-3-6-5-5l3-3q2-2 0-5-3-5-2-12l1-3 1-2 1-3q0-2-2-2l-5 1h-4l-2 1-2-1-2-2-2-4-2-1-4-1-2 1h-6l-2-1-1-2-2-1 1-5q1-3-2-5 1-4-2-4v-2l-3 1" class="landxx ve"/><path id="path3412" d="M804 686h-2 2"/><path id="path3414" d="m805 684 2-1-2 1"/><path id="path3416" d="M805 686v-1h1l-1 1"/><path id="path3418" d="M806 685h-1l2-1-1 1"/><path id="path3420" d="M807 685h1-1"/><path id="path3422" d="M807 683h-1l1-1v1"/><path id="path3424" d="m807 681 1-1-1 1"/><path id="path3426" d="m807 681-1 2 1-2"/><path id="path3428" d="M808 681v-1 1"/><path id="path3598" d="M775 665h-1 1"/><path id="path3600" d="M784 666c0-1-4-2-2-2h2l1-1q2 2-1 3"/><path id="path3602" d="m793 669 1 1-1-1"/></g><g id="pt" class="landxx coastxx pt eu"><title id="title555">Portugal</title><path id="path3446" d="M1210 420v-1q3-2 4-6l1-4 1-1q0-2 0 0v-9q-2 0 1-2l3-2 1 1-1 2 4-1h7v2l3 1-6 5 1 4v2l-2 1q2 2 0 3v1h-4l1 2 1 2 2 2-3 4q0 3 3 3l-3 3-2 2v4l-5 1h-5v-2l1-3v-7q1 1 1-1l-3 1v-2h1l1-1v-1l-4 2 1-5" class="landxx pt eu"/><path id="path3614" d="M1073 426q-2 1-1-1l1 1"/><path id="path3616" d="m1075 428-2-1h4l-2 1"/><path id="path3620" d="m1079 426-3-1 3 1"/><path id="path3622" d="M1084 425q-3-1-1-1l1 1"/><path id="path3624" d="m1094 433-2-1h5l-3 1"/><path id="path3626" d="m1097 440-1-1 1 1"/><path id="path3628" d="m1151 477-2-1h3q1 1-1 1"/></g><path id="co" d="M667 746h-1q2-3 4-2v-4q2-2 5-2v-1h1l1-4 3-3 2-2v-2h-2l1-2-2 1q0-2 2-2-2-1-1-3v-5l-1-4 2-2-1-4v-3l-3-5 1-2 1-2v1q4-2 3-5-2-2 0-4l2 3 1 3c2 2 1-5 0-5l5-4 3-4h2v-3l1-3v-1l1-2 2-2 3-4 4 2-2 1q2 1 2-2 1-4 5-2 5 0 7-4 5 0 5-4h1l2-1h4c4 3-5 5-6 7l-2 3-2 1-3 4-1 6q-1 4-4 6l3-1v2c2-1 2 3 3 4q2 2 1 6v4l3 4 3-1 3 1 3-1 3 1 2 1 2 3 2 2 2 1h7l4-1q4-1 3 3l-1 2-1 3q-2 3-1 6-1 3 1 6t2 5c0 2-4 3-4 5 2-1 5 3 5 4v1l1 2 1 4 1 3h-1q-2 0-1-1c0-1 0-7-3-7-1 0-4 5-4 3q-2-2-2 0l-3 1h-5l-4-1v6q3-1 5 2l-1 2-2-1-4 3q-1 4 2 7l2 2 1 3-1 9-3 19-2-3h-3l2-6q3-2 2-4l-2-2q-2 1-3-2-2-1-4 1l-3-1q-2 2-5 2h-3l-3-1v-3l-3-2-1-3-2-2-2-1-2-3q-2-4-5-6h-3l-3-1c-1-1-4-5-4-2 0 2-6 0-7-1q-2 0-2-2l-2-2-5-2-4-4" class="landxx co"><title id="title566">Colombia</title></path><g id="mr" class="landxx coastxx mr"><title id="title569">Mauritania</title><path id="path3878" d="m1148 590 1-2-1 2"/><path id="path3882" d="m1144 580 1-4 1-1h28c2-1 1-7 0-9q0-4 2-6l7-3 1-22h25v-12l28 20h-13l5 73 2 2v4l-1 3h-16q-13 3-14-1-2 4-6 2-3-1-5 3l-3-3q-2-2-3-1c-2 1 1 7-4 7l-2-2-2-2-2-2-2-3-2-3q-4-1-6-4l-3-1-9 2h-2l-2 4q1-8 4-15l-1-9-1-3-1-2 1-1-1 1 2-3v-2l-2-7v2l-3-5-1 3" class="landxx mr"/></g><g id="ao" class="landxx ao"><title id="title574">Angola</title><path id="path3888" d="m1360 909 1-11-1-1 2-2v-3l1-1 1-6 1-5 1-4 3-4q0-2 3-4l2-2q3-7 2-12l-2-5-2-4-1-2v-3q-2-2 0-4l-1 2 1-2 2-1-1-6-3-6v-3l-3-3-1-5h3l3-2h24q3 1 3 3v3l2 4v3q2 1 2 3s2 4 3 3h4l4-1 5 1v-4q2 0 1-2l1-3h5l1-1h2q-2 4 1 4h7q3 0 1 3l-1 2 2 4-1 8 2 5q2 4 1 7v5l2-2 4 1 4-1 3-1 1 4-1 4v10h-14c-2 0-1 5-1 7v20q0 4 4 6l6 7-13 3h-9l-12-1-3-3q-2-2-4-1h-28l-4-1q-2-3-5-2t-5 1-5 1"/><path id="path3890" d="m1362 803 5-4 1-1 2 2-4 3v5q-2 2-3 0l1-2q-2-1-1-3h-1"/></g><g id="de" class="landxx coastxx de eu"><title id="title579">Germany</title><path id="path3832" d="M1338 290h-1 1"/><path id="path3834" d="M1354 292h1l-1-1v1"/><path id="path3884" d="m1337 287-1 2 1-1zm1 1h-1zm1 0h-1l1 2q2 0 1 2l-2 1h2q-1 1 1 2l-1 1 2 1 2 1 2 1-4-2h-3q-2-1-2 1l1 1-1 2v-2q-2-1-1 1h-2c3-2-4-2-4-2l-2 2 2 1-2 5-2 1c-2 1 1 1 1 2 1 1-2 2-1 3s-4 1-4 1h-2v1l2 4q-2 1-1 3v2l1 1 1 2q-4 1-1 4l1 3 3 3 1-1 1 1h1l3 1h3l-2 3-2 4c-1 1-2 7 0 5h4l2-1h1l6 1c1 1 5 1 4 3q3-1 2-3h3l2 1h2q2-2 5-1v-1h3l1 1h2l-1-2-1-2 1-1 3-2 2-1q1-3-2-4l-4-2-3-4q2-1-1-3l-1-2 1 1q2-2 5-2l9-4-1-1 2 1c2 3 4-2 3-4l-2-1-1-2 1-2c1-2-2-3-1-4s-3-2-3-3q3-2 1-5l-1-2-2-2-1-2-2 1-3-3-4 1 3-1q-2-1-3 1l-2 2c1-2-3 0-3 0l-1 1h-3l-1-1q2-1 2-3h-3l-3 1v-1h-2l1-2c2-1-5-2-5-1z" class="landxx de eu"/><path id="path3892" d="M1367 293v-2h2q-2 0 0-1l1 1v1l1 1h-4"/><path id="path3894" d="M1371 295v-1l3 2-2 1 1-2h-2"/></g><g id="th" class="landxx coastxx th"><title id="title587">Thailand</title><path id="path3902" d="M2020 689v3-3"/><path id="path3904" d="m2021 689 1 2-1-2"/><path id="path3906" d="m2026 695-1-2 1 2"/><path id="path3908" d="M2031 702v1-1"/><path id="path3910" d="M2032 677v1-1"/><path id="path3912" d="M2032 675v1-1"/><path id="path3914" d="M2048 656v-2 2"/><path id="path3916" d="M2050 658v1-1"/><path id="path3918" d="M2004 599h3v-8l2-2h3l2-1h1l1-2q3 0 2-2 4-2 5 0l2-1 1 2v3l1 3h2l1-1h1q2 1 3 5l-1 2v7q-1 4 1 4s4-3 4-5l3-1 2 2h1q2 2 3 0l2-3h4l7 7c3 1 1 5 2 8l2 2 4 3q-1 2 2 3c1 1-2 3 0 3l-1 2 1 1q1 3-1 5-1 2-3 0h-10l-3 1q-2 0-3 4l-2 2h-1l1 5 2 3 1 4 2 5-1-2-2-3v1q-3-1-2-2l-1-1c0 2-2-1-2-1 0 1-1-2-3-1h-4q-2-1-1-3l-1-2 1-2-3-1c0 2-6 0-4 3v9l-1 2v2l-2 5-1 5-1 2 1 6v3l2 1q3-2 4 1c0 1 1 7 2 5l2 6 1 5c-1 0-1-5-3-5l1 4 2 1 1 1q1 2 3 2h4l3 4q2 2 1 3l-2 3-1-1q-2 0-3 2-3-1-1-3l-1-2q-2-1-2-3l-3-1q-2 0-2 2c0-2-5-4-3-6q-2 0-2-2h-1l-1-3-2-1v-1l-1-1-1-1-1-2-1 2q-3-1-2-6l2-10 1-5 2-3c0-2 5-6 3-8l-1-4-2-4-1-3v-5l-7-8-2-4q0-3 2-1l1-2-1-4 2-2v-3l-1 2-2-5-3-4-4-4v-2l-1-3q-2 1-3-2" class="landxx th"/></g><g id="au" class="landxx coastxx au"><title id="title599">Australia</title><path id="path3366" d="M2373 920v-3 3"/><path id="path3368" d="M2390 936v-2 2"/><path id="path3294" d="M2278 858v-3 3"/><path id="path3298" d="m2284 861 1-1-1 1"/><path id="path3310" d="m2305 864 1-1-1 1"/><path id="path3312" d="m2305 861 2-2-2 2"/><path id="path3318" d="m2308 859 2-4-2 4"/><path id="path3288" d="M2262 862h1l-1-2-1-1v-1l-1 2-1 2h3"/><path id="path3290" d="M2268 858h-4l-2-1q0 5 4 6l4-4q1-1-1-2-2 0-1 1"/><path id="path3334" d="m2317 1111 1-1-1 1"/><path id="path3336" d="m2319 1110 1-2-3 1 2 1"/><path id="path3286" d="m2261 1072 2-2h3v-1h-2c2-2-6 0-7 0l-1 2 5 1"/><path id="path3300" d="m2300 1129-1 2 2-1q2 0 1 2-1-2-1 0h1q1 1 2-2v-1l2-2 2-2 2-2-1 2q2-1 2-3l3-3q3-3 2-7l-3 1-3 1s-6-1-4 1h-6l-4-3q-2 2-3-1l-4 7q2 4-1 6h1v3l-1-2q-2 4-1 9h2-1l-1 2 4-1c0 3 3 0 3 0l1-2h1q4 0 4-4"/><path id="path3306" d="m2290 1105-1 2 4-4q-1-2-1 0l-2 2"/><path id="path3338" d="m2318 1105 1 3 2-3-1-2-2 2"/><path id="path3348" d="M2109 1051q3 0 5-4 0-4 2-6l-1 2 1-1 1-4v-17l1-9-1-3v-4l-2-3 1-4-2-8-2-3 1-2v2l1-2v4q1-1 1 1 3-1 1-4-2-2-1-5l2 2-1 3 2-2v4l1-1q2-3 1-5l-2-5v-2l-1-4 2-6 3-6-1-3 2-3 3-5-1 3v3l4-4q2-3 5-3l7-5 2-2 5-2h2l2 1 3-1 6-3h3l2-3h6l7-2c2-1 9-5 8-9l1-1 2-1q3-1 3-4v-6q1-3 3-3l2-1 2-4 1 3c-2 2 2 6 2 8l1-5 2 2q-1-3 1-3-2-1-2-3l-1-1h1v-2h1l1 2 1-2 2 1h1l3 1-2-1q-2 0-1-2h1l2-2h-1q-2-2 0-3l1-2 2 1 1 1h1q0-2-2-2l1-1-1 1 2-2 2 1v-3c-3 0 0-2 0-2l2-1v-2 3q2-3 2 0l1-1 1-2 1-2h-1q-1-1 0 0 1-2 1 0c1-2-1 2 1 1l1-1 1 1 2-2 1-1 2 1 2 2 3 3 1 2-1 3-1 4 1-2q1-1 2 1l-1-3h2c-1-4 6-3 5 1q2-1 1-3l4 3v-3h2q-2 0-3-2h2q-3 0-3-3l1-2h2l1-4 2-1 2-1-1-3 2-1 1-2 2 1-1-3q2 0 3 2-2-2 1-3v-1l2-1c1 3 8 0 8 2q0-2 3-1l-1-5q-1-2-4-1l-1-2 1-1 1 2v-2h2l2 3 2-1 2 3 2 1 3-1c-2 1 2 1 2 3h2l2-1 4 3c-1-2 4-1 3-3q2 0 2-2l-1 2v1l-1 2 2-1 1 1v1l2-1c-2-1 2-3 2-4q-1 2 1 4l1-1v2l-3 4 1 1h-1l-2 2v-1l-1 1q0-2-1 1-1-2-1 1c-2 0-1 4 1 2l-4 6-2 2-1 2 5 5 2 2q2 1 1 2h3l3 2 3 4 7 3 2 4 2 1 2 1q5 2 8-2l5-10 2-6 2-6 1-5v-5l1-5 2-4 1 2 1-1-2-2h-1l1-2 1-1v-2l1 1 2-8 2-2q1-2 2-1l-1 1h1l1 2v6l3 1q-3 1-1 4l1 4v7l1 3v3q2 3 3-1c2 2 3-2 3 2l3 2 2 2q-2 2 0 3l-1 7v4q2 2 1 3h2v7l-2 3 1 3 1 2-1 2 3 3h2q2 3 3 1l1 4 1-1q0 2 2 2 0 2 2 2v-1l1 1 1 1 1 2h-2v3c4-1 2 6 4 6l-1 4q2 2 1 4 1-1 2 1l1-4 3 4v-2l2 1-1 5v3q-1 2 1 2v-2c2 1 2 5 0 2 0 1 4 5 4 3l2 5 1 2 1 2 2 4-1 2v2l1-1-1 3-1 5-1 3v7l-1 1 1 2-5 9-5 9-4 8-3 4-3 3-2 3-1 1-3 2-2 1-3 2-2 2q-1 2-3 2h1l-2 3-1 1-3 4h-1l-1 2-1 3h-1l-1 1-2 1-5 6-4 6-3 4-1 2v1h-2l-5 3h-7q-6 1-12 6l-5 2q-2-1-2 1l2-1-2 3-1-2h-2l1-2q-2 1-2-1l1-2c1-2-3 1-3 1q-1 2-3-1 2 1 3-1 2-1 1-3l-5 3h2l-3 1-4 2-4 2q-1 1-2-1l-5-2-3-1-2 1h-1c2-3-4-3-5-4l-1-4-1-2 3-6q1-4-2-9l2 6v-4q-2-2 0-2v1-1l1-1q-2-1-2 1h-1l-7 1 4-2 2-3v-8l-1 1-2 2-2 4q-1 3-3 1l-5 2 2-3 4-1 4-7 3-3q2-1 1-4l2-1v-5l-1 3-3 3-3 3-1 1h-2l-3 2-4 3-2 2-3 3 2-1-2 2-2-1q0-3-2-2l1-2 1 1 1-5-1-3v-4l-2 1-1-1-1-2 2-1v-2h-2l1-2-1-2-3 1-4-2-2 1-7-5-3 1h-12l-15 6h-8q-4 0-7 2l-7 3-6 3-4 5-2 1-3 1c1-2-4-1-5-1h-2l-4-1-7 1h-4q-5 1-5 4l-2 1h-2l-2 1-2 1-2 1-4 2h-3l-7-1-4-3q0-3-4-2c-1-2 1-8 3-6"/><path id="path3350" d="M2278 861v-1 1"/><path id="path3956" d="M2352 853v-2 2"/><path id="path3958" d="m2352 848 1-1-1 1"/><path id="path3960" d="M2353 848v-1 1"/></g><g id="pg" class="landxx coastxx pg"><title id="title622">Papua New Guinea</title><path id="path3962" d="m2365 835-3-2 3 2"/><path id="path3964" d="m2364 833-1-1 1 1"/><path id="path3966" d="m2365 833-1-1 1 1"/><path id="path3968" d="m2366 830-1-1 1 1"/><path id="path3970" d="M2368 827h-1 1"/><path id="path3954" d="m2344 839 2-19-1-3 1-3 2-32 4 2 9 4 5 1 5 3h2q1 2 3 2l2 3 3 2 2 3v4l5 2 4 2 1 1h2q5 3 3 6-2 2-6 1c-2 0 0 5 1 6l3 3q2 3 3 2l1 4 1 2 1 2q1 2 3 1 2-2 2 1-2 3 3 4h3l-3 2 1 1 3 1q2 2 4 1l-2 1-2 1q4 1 1 1-2 3-4-1h1-1l-3-1-6-1v-1l-2 1-2-1h-3l-2-2-1-3-2-1-1-3q-2 0-2-3l-4-6-1-1h-3l-3-1q-2 0-1-2h-4l1 2-2-1c0 3-4-2-4-2l1 5v-1h-4c0 1 3 2 1 3h-9l2 1q2-1 3 1 4 2 1 5l-4 2-4-1h-9" class="landxx pg"/><path id="path3972" d="M2385 801v-2 2"/><path id="path3974" d="M2393 807q2-1 0-2v2"/><path id="path3976" d="M2400 810q1-2-1-3-2 2 1 3"/><path id="path3978" d="m2399 780 1-1-1 1"/><path id="path3982" d="m2406 811 2 2h3l2 1h5l4-2q4-1 4-5c1 1 6 1 5-1v-3q3 0 3-4v-2l-1-1-3 1h-2v4q-1 2-3 2l-2 4h-7q-2-2 1-4c-1-1-2 3-2 3 1 1-4 2-5 2l-2-1h-5v2l2 1 1 1"/><path id="path3984" d="M2412 800h-1 1"/><path id="path3986" d="m2415 773-2-1 2 1"/><path id="path3988" d="m2415 842-1-3q-2 2 1 3"/><path id="path3990" d="M2419 844q1-3-2-3l-1 2 3 1"/><path id="path3992" d="m2417 781 2 2 1-2h-3"/><path id="path3994" d="M2418 852c1-2-2 0 0 0"/><path id="path3996" d="M2419 846h1q-1 1 1 1v-1q-2 0-3-2l1 2"/><path id="path3998" d="m2418 852 1-1-1 1"/><path id="path4000" d="M2422 836v-4q-2 2 0 2v2"/><path id="path4002" d="M2422 785h2-2"/><path id="path4004" d="m2436 793-2-3-4-3-3-3h-1l-3-2v1l2 1 3 3 3 2 2 1 3 5v4l2 2 2-5-2-2-2-1"/><path id="path4006" d="M2432 852h1-2 1"/><path id="path4012" d="M2434 839c3 0 0-3-1-1l1 1"/><path id="path4014" d="M2435 857h-1 1"/><path id="path4016" d="M2437 860h2l-4-2 1 2h1"/><path id="path4018" d="m2437 788-1-2 1 2"/><path id="path4020" d="m2442 859 1-1h-2l1 1"/><path id="path4024" d="M2451 807v-4 4"/><path id="path4026" d="m2453 813 1 2 1 3q3 2 5-1l-1-2-1-2-2-1q-1-3-5-5v3l2 3"/><path id="path4028" d="M2458 821h1-2 1"/><path id="path4030" d="M2461 820v-1 1"/><path id="path4032" d="M2390 779q0-2 2-2h5l-3 2-2-1-2 1"/></g><path id="iq" d="m1556 471 12-7 3-3 1-6v-11l3-2q3-2 3-4h1l1-1h10c2-1 1 3 2 2l3-1 2 3 1 1v2q3 1 2 4l4 1 4 1-2 1 1 4c1 2-2 0-1 2l-2 1 1 3-2-1v2l1 2v2l2 2c1 1 5 4 3 5l1 1 3 1 5 4 4 4q2 3 0 5-1 2 2 3l1 1 1 2q-1 2 2 3l2 3-5-1h-2l-4 2c-1 2-1 8-5 7l-10-1q-4-1-7-4-13-12-28-19l-10-2q2-3-1-3v-3l-2-5" class="landxx iq"><title id="title658">Iraq</title></path><g id="hr" class="landxx coastxx hr eu"><title id="title661">Croatia</title><path id="path4066" d="M1371 367h3c1-1 2 1 4-2l4 2q2 1 2-2h-1c3-2 3 0 2-4l3-1 1-1h1q-1-2 2 0l4 2q1 3 6 3c5 1 2-1 5-1l1 1 1 2c-2 2 3 3 2 3l-2 1q1 3-2 2l-1-2h-7l-5-1h-1l-2 1q-1 2-3 0-3-1-1 2v1l2 2 2 4 5 4 3 4q2 2-1 0-3-4-9-3l-1-1-1-2q-3 0-5-4h3l-4-3-1-4-3-2-2 3-1 2-2-3-1-3" class="landxx hr eu"/><path id="path4068" d="M1400 389q1-1 3 1 3 1 3 3l-4-3-3-1-3-1 5 1h-1" class="landxx hr eu"/><path id="path4070" d="m1377 371-1-2 2 5q-2-1-1-3"/><path id="path4074" d="m1379 371-1-2 2 2h-1"/><path id="path4076" d="m1379 372 1 1-1-1"/><path id="path4078" d="m1381 378-1-1 1 1"/><path id="path4080" d="m1381 376-2-3 4 3h-2"/><path id="path4082" d="M1381 379v-1l2 2-2-1"/><path id="path4086" d="m1383 380 2 2-2-2"/><path id="path4088" d="M1383 379h-1 1"/><path id="path4090" d="m1386 382 1 1-1-1"/><path id="path4092" d="M1390 384h1-1"/><path id="path4094" d="M1391 385h-1 1"/><path id="path4096" d="m1393 386-2-1h3l-1 1"/><path id="path4098" d="M1395 389h-2 4-2"/><path id="path4100" d="m1396 387-5-1 6 1h-1"/><path id="path4102" d="m1401 391-3-1 3 1"/></g><g id="gl" class="landxx coastxx gl"><title id="title682">Greenland</title><path id="path4242" d="m992 171 2 1q-3-2-4 1h2-3q2 2 5 1c-2 1 1 1 1 1l2-1-1 1h-4c0 3 7 1 8 1 1-1 6-1 6-3l-3-2-5-2h-5q-3 0-1 2"/><path id="path4252" d="M992 168h1-1"/><path id="path4262" d="m994 158 2-1-2 1"/><path id="path4322" d="m1003 162-3 1c1 1 5 1 3-1"/><path id="path4330" d="m1006 160 3-1h-3v1"/><path id="path4332" d="M1006 161c-2 2 3 1 4 0h-4"/><path id="path4336" d="m1008 160-2 1 2-1"/><path id="path4342" d="m1011 164-1 1h2l-1-1"/><path id="path4344" d="M1012 166h-2 2"/><path id="path4346" d="M1010 167h1-1"/><path id="path4348" d="M1013 167h-2 2"/><g id="g27049"><path id="path4228" d="M986 195h1-1"/><path id="path4528" d="m989 194-4 1 4-1"/><path id="path4248" d="M990 185h1-1"/><path id="path4260" d="m995 182-1 1 1-1"/><path id="path4268" d="M996 182h-1 1"/><path id="path4282" d="M997 180v1-1"/><path id="path4294" d="M998 184q2 1 0 1l4-1h-4"/><path id="path4304" d="M999 185h4-4"/><path id="path4256" d="M992 174h1-1"/><path id="path4270" d="M1000 181h-5q2 1 5-1"/><path id="path4338" d="M1012 172h-2c2 0-2 1-1 2h2l2-2h-1"/><path id="path4274" d="m999 151-3 1 3-1"/><path id="path4276" d="M997 153h1-2 1"/><path id="path4278" d="m999 145-3 1 3-1"/><path id="path4280" d="m1000 154-4 1q3 1 4-1"/><path id="path4284" d="M997 153h1-1"/><path id="path4286" d="M997 146h1-1"/><path id="path4288" d="M998 144h-1 1"/><path id="path4290" d="m998 139-1 1 5-1h-4"/><path id="path4292" d="m1001 151-4 1q3 1 5-1h-1"/><path id="path4296" d="m1000 148-2 1 2-1"/><path id="path4298" d="m998 146 2-1-2 1"/><path id="path4300" d="M1000 144h2-4 2"/><path id="path4302" d="m1000 147-1 1 1-1"/><path id="path4306" d="m999 144 1 1-1-1"/><path id="path4308" d="M1001 153h-1 1"/><path id="path4312" d="M1000 139q1 0 0 0"/><path id="path4314" d="M1001 150h1-2 1"/><path id="path4316" d="M1001 146h-1l2 1-1-1"/><path id="path4318" d="M1000 146h1-1"/><path id="path4320" d="m1002 152-2 1 2-1"/><path id="path4324" d="m1002 148 1-1-1 1"/><path id="path4216" d="M968 120h1s-3 0 0 0h-1"/><path id="path4204" d="m939 120-1 1 5-1h-4"/><path id="path4208" d="M944 127h1l-2-1 1 1"/><path id="path4210" d="M944 120h6-6"/><path id="path4212" d="M945 126h2-2"/><path id="path4214" d="M967 119h1-1"/><path id="path4522" d="M968 120h1-1"/><path id="path4524" d="M968 120h1-1"/><path id="path4226" d="m986 100 1 1-1-1"/><path id="path4380" d="m1065 93-4-1h-4q4 2 8 1"/><path id="path4384" d="M1062 92h2-2"/><path id="path4388" d="M1074 89h2-2"/><path id="path4396" d="m1081 91 1-1h-3l2 1"/><path id="path4398" d="M1082 89h4-4"/><path id="path4400" d="M1086 90q2 3 4 2l6 1-1-1 3-1c-3-2-10-2-13-1h1"/><path id="path4402" d="M1089 89h2l-3-1 1 1"/><path id="path4406" d="M1114 87h3-3"/><path id="path4408" d="m1121 88-6-1 6 1"/><path id="path4410" d="m1123 88 1-1h-5l4 1"/><path id="path4412" d="M1126 87h1-8 7"/><path id="path4416" d="M1124 86h2-2"/><path id="path4470" d="M1204 95h3-3"/><path id="path4478" d="m1208 94 2-1-4-1 2 2"/><path id="path4488" d="M1215 95h1l-3-1 2 1"/><path id="path4490" d="M1214 93h1-2 1"/><path id="path4450" d="m1194 116-1 1 1-1"/><path id="path4456" d="M1198 115h-1 1"/><path id="path4458" d="M1197 116h1-1"/><path id="path4460" d="m1199 117 3 1q-1-2-5-1h2"/><path id="path4466" d="M1205 112v-1h-2l2 1"/><path id="path4468" d="M1205 114h-1 1"/><path id="path4472" d="m1206 115-2 1 2-1"/><path id="path4474" d="M1204 115h2-2"/><path id="path4476" d="m1209 103-4 1 4-1"/><path id="path4480" d="m1211 117-3 2q2 1 3-2"/><path id="path4482" d="m1210 112-2 1 2-1"/><path id="path4484" d="m1211 111-1 1 1-1"/><path id="path4486" d="m1214 109-2 1h2v-1"/><path id="path4448" d="M1195 127h-3 3"/><path id="path4424" d="m1163 150-3 1q2 1 3-1"/><path id="path4426" d="M1163 148h9c-3 0-8-3-10 0h1"/><path id="path4432" d="M1178 150c-2-1-11-2-13 0l7 1 2 1h3l-1-1 2-1"/><path id="path4434" d="M1186 140s-6 0-5 1q5 2 9 1l-2-2h-2"/><path id="path4436" d="m1190 126 1-1-2 1h1"/><path id="path4438" d="m1192 138 2-1h-2l1-1h-3l-1 1 3 1"/><path id="path4442" d="M1192 126h-2 2"/><path id="path4446" d="M1193 126h-2 2"/><path id="path4452" d="M1195 127h-2 2"/><path id="path4454" d="M1198 139h-2 2"/><path id="path4462" d="m1204 133-1 1h-2l-3 2h6q2 1 3-1h-4l1-2"/><path id="path4464" d="m1202 128 1-3h-1l-1 1 1 3v-1"/><path id="path4414" d="M1123 184h1-1"/><path id="path4418" d="m1153 163-2 1-5 1-4 1h-2l-1 2 7-1 9-1-2-2v-1"/><path id="path4420" d="M1144 165h-2 2"/><path id="path4422" d="m1150 167-2 1 2-1"/><path id="path4428" d="M1164 173h-2 2"/><path id="path4430" d="M1174 154h-1 4l-3-2h-1l-1-1h-5q-2-1-3 1c0 2 5 2 6 3h6l-2-1"/><path id="path4374" d="M1047 214q0-1 0 0"/><path id="path4376" d="M1048 214h3-3"/><path id="path4378" d="m1054 212-1-1v-2h-1q0 3 2 3"/><path id="path4382" d="M1060 206h-1 1"/><path id="path4386" d="m1071 204 2-1 2-1h-4v2"/><path id="path4390" d="M1076 204v-1h-1l1 1"/><path id="path4392" d="m1077 203 1-1-1 1"/><path id="path4394" d="m1078 202 2-1-2 1"/><path id="path4206" d="m946 124 9 1-3 1-6 1 4 1q-2 1 1 1h2l5 1-2-2 4 1 5-1-2 1q1 1 3-1h6c1 0 8-2 7 0h4l5 1 4 1h4q-2 1 0 1h2c-2 1 1 0 0 1q-1 2-3 2l3-1q-2 2 0 2h-1l5 2-1 1 3 1-3 1h2-2l1 1-6 1 7-1-2 1 2 1q-2 0 0 1v1h-1c-2 0 2 2 2 2s-3 1-1 1l-3 1h3q2 2 0 2h1l-3 2h3l-7 1h5l-3 1-3 2q3 1 7-2l-6 3-4 1 1 1q1 2 1 0l5 1h2v-2h2c-1-1 3 0 2-2v-2l2-1q-3 1-1 4l4-1-4 2h8c-2 2-5 0-8 2l9-1-4 1-3 1q2 1 5-1l-1 1-3 1h5c-2 0 1 1 1 1h-5l3 1h2l-1 1h-2 3-1l1 1h-3q2 1 0 1l3-1-1 1h-2l-6-2-6-1-6 1 3 2 6 2 4 1h4-2 6l-2 1 1 1h-3l2 1q-2-1-3 1h3l-6 2 4-1 1 1-2 1h1l-1 1q-1-2-3-1l1-1-2 2-1 1h3l-2 1-3 1-4-1h2-3 1l-3 1c2 0-1 1-1 1l-3 1 3-1-1 1h4l5-1h-2l5-1-2 1-2 1h2-2l6 2-7-1h-3l-4-1 1 1-5-1 2 1 5 1-7-1 2 1h-3c2 2-2 0-2 1v1-1l-1 2 6-2 8-1-5 1h5v-1h3l-2 1h3q-2 0 0-1l2 1-6 1h6l-4 1h4q-3 1-6-1l-8-1-2 1q1 0 0 0l-3 1q-2 0-3 3l3-1h4l9-1h-2c1 3 3 1 5 2h-5q-1-2-2-1h-9s-3 0-1 1h-3 3l-2 1h2-3l5 1-4 1q4-3 7-1h1-5 2l-3 1h3l-5 1h5l-5 1h-1l-2 1h3l-3 2 5-2 6-2 5-2 5-1h2-2l-3 1h3-5l-5 2-5 2-5 2h1l-1 1 3-1-3 1h6l3-1-1 1-2 1-2-1-4 1h2l-2 1 3-1-1 1q2 1-1 1l3-1-2 1 1 1h1l3-1 3-2h4l1 1q-4-2-8 0l-2 2h-2l-1 2q0-2 2-1l-1 1 2-1-2 2v1c-1 1 2 0 0 1l3-2v1l2-1-6 2-1 4c3 0 5-5 8-4l-2 1 4-2v-3l1 1-1 2q2 2 4 0l-1 1c-2 2 2 2 1 3l-2-1-2-2q1 1-2 1l2 1h1l-2 1q-3 0-2 1h-5 1l-1 1q4 1 8-2l-2 1q2-1 3 1h-9v2l3-1-2 1-2 1 1 1 4-1-3 1h2l-3 1 2 1 2-1-4 1 1 1h4l-3 1h2l-2 2 3-1-3 1 3-1-3 3c-1 2 4 2 4 2l-1 1h1l-2 1q1 0 0 0h2l2-1 1 1h-3v1l-1 1 4-1-3 1h2l-2 1h2l-3 1h5q-1 0 0 0l-4 1h3l-1 1h1v1l3-1-2 1h2l-4 1h4l-4 1h6-3 6-1 1l4-1v-1l2-1h2-1l1 1q-2 0-3 2 4-1 4-3 0 2 2 1-3 2-7 2h2l-3 1 3-1v1l3-2q1 1-1 1l-2 2h-2 2v1l3-1-2 1 2-1-1 1 4-2-2 3-2 2 5-3-5 3h4q2 0 2-2h1l-1 2h2-2l2 1q-2 0 0 0 2 1 1-1l2 1-3-1h4l-1-1h2l-1-1h-2l1-1-4-1h3l2 1 3-1h-1 2-3l2-1-2-1 3 1-3-1h2l2-1-5-1h6l-3-1h3-1l-2-1q4 1 5-1l-3-1 3 1 2-2h-3c1 0 5 1 3-1l1-1h-2l3-2-4-2 5 1-2-1q2 1 0 0l-3-2 3 1h1v-2l2 1-2 1h2l1-1 2-1c1-1-3 0-2-2l3 1-1-1h2c1-1-2 0-1-2l4 2-2-2 2 1-2-1h5q-2-3-5-2h6v-2q2 0 0-1l-4-1 4-1h3l-1-1q2-1-1-3l1-1 2-1 2 1s3 0 1-1l3-1h-1l1-1h-2q1-2 2-1l2-1 1 1 1-1 3 1v-1q1-1 1 1 2 0 3-2-2 0-1-2 1 2 2 1v-1l2-2h-1 5q-4 1-5 3l3 1 2-2v2q2 0 3-2v1l3-1h2v-2h1l3 1v-2c-1 2 4 0 4-1l1-1v1l3-1q-1-2 1-2c-2-1 2 0 2-1l1-2 1-1 2-1 3-1 3-1 1-1-2-1h2l-2-1 1-2q0 2 1 1l3 2q-2 1 1 1h5l-1-1 1 1h2l-1-1 2-1 2 1 3-1h4l1-1q2 1 2-1h9l2-1 4-2h1l1-1q2-1 0 0l3-1c-2 0 1 1 0-1h2s3 0 1-1h3q2 0-1-1l3-1h3-2l6-1-3-1h-5l-4-1h-4v-1l-5 1-6 1-3 1-5-1h7l2-1 4-1h-10l-1-1-4 1 5-1c1-1 4-2 1-3h4l-1-1 1 1h3q5 1 8-2h1l-1-2h-14l6-1s-4-2-2-2h-3l-1-1 5 2 4 2 2-1 2 1 6 1 2 3q1 4 3 3l5 1 1-3c-2 3 2 2 2 3 1 1 4-2 2-1l1-1-2-1 2-1h-1l1-1h-3 3l-1-1 2-1q-1 0 0 0-2-1-5 1 1-3 4-3l-4 1 1-1h-3l3-1-3-1-2-2-5-1-5 1 1-1h-2c1 0 7 0 6-2-1-3-7 0-8 0h-2l1-1h-4 7l3-1 3-1h-11l-3 1v-1l4-1h2l-4-1h3l5 1 3-1 4-1-5-2 4 1h14-6q-2-1-4 1 7 3 12 1h6l1-2 1-1-6-2c-3 0 0 3-2 3q1-2-3-3l3-1h-2l4-1-1-1 2 1h6l2 1h1l5-1-2-2h-9 3v-2h-5l-3-1 4 1 5-1q-3-2-7-2h3l-3-1q3 0 5 2c1 0 6-1 5 1h3v-3l1-1q-5-3-12-1h6l5-1-1-1-5-1 3 1h-6l1-1h-4l3-1h-1 1-3l-1-1 2-1 3 1 4-1h-4l6-1h-2q4-1 8 1h6c3-3-2-4-4-3h-2l-5-1h3l-5-1 3 1c-2-1 1-1 1-1h-3 9q-2-2-5-2h-4l-4 2c2 0-1-1-1-1l4-2h-2l3-1 2-2h-2q3-1 2-2h3l3-1 2-1h2l1-1-4 1 2-1v-1l3-2 9-1h-11l-2 1h-3q3-1 1-2l5-1 7 1q6 0 10-2h-13l-5-1-6 1 10-1h15l3-1h4l-2-1h5l4-1q4 0 6-2l-11-1h-14l1 1h-2l-5 1-3-1-4 1 2-1q-7 0-13 3l-6 1-5 2s3-1 0-1l7-2 5-2 3-2-4-1h-4l-5 2-7 1h-7 1-1l6-1 6-1q-4-2-8-1h-10l-19 2q2-2 6-2h9q-3-2-6-1h37l6-1 4-1q-5-2-11-1h-9l6-1h-39l-3 1-2-1-6 1q3 0 1-1h14l-4-1 8 1 9-1h18q-5-2-11-1h-3 2-3l-3-1h-18l1 1-3-1h-3l-8 1h1l-5-1-5 1c-1 2 6 1 7 1l-8 1h6-8l2 1h-3l-3-1-8-1h-6 2-5 4-12l6 1h-11 2-3l4 1h3s3 0 1-1l13 1h5l3 1q2 1 0 1l-2-1-6-1 1 1c-1 2-1-1-2-1h-16l6 2h1l6 1h-6l-3-1q-3 1-1 2h-2 1l1 1q-4 1-8-1l-6-1-6-1-9-1 1 2 4 1h-7l5 2-5-1-6-1h-2l-2 1-4 1 3-2c1-3-7-2-8-1h-7l-12 1h2l2 2h2l4 1-7-1-1-1h-3l-6-1q-5 1-2 3l-3 1v1l-7-1-4 1 1 2-2-2h-4l-8 2-7 1-5 2 4 1h3l10-1-7 2-2 2-4 1q-4 2-8 1l-5 1-7 1h-1l-4 1h-3l-2 1h-9l-3 1q1 2-2 1l3 2h4l-2 1 8-1-4 1h5l-4 1 6 1 2-1 2 1 6-1q3-2 4 1h-3l1 1-6-1-8 1 6 1h8c-3 1-27-2-27 1h3l-2 1c2 2 5-2 8-1l-4 1"/><path id="path4232" d="M988 223h-1 1"/><path id="path4234" d="M987 222v1-1"/><path id="path4244" d="M991 230h-1 1"/><path id="path4246" d="M991 232h-1 1"/><path id="path4250" d="M992 234h-1 1"/><path id="path4254" d="M993 237h-1 1"/><path id="path4350" d="m1013 244-1 1 1-1"/><path id="path4362" d="M1021 247v1-1"/><path id="path4366" d="M1027 240h1-1"/><path id="path4218" d="m982 204 2-1-2 1"/><path id="path4220" d="M983 205h-1 1"/><path id="path4224" d="M986 207h-1 1"/><path id="path4230" d="m988 213-1 1 1-1"/><path id="path4236" d="M990 212q-1-1-3 1l3-1"/><path id="path4240" d="m992 212-4 2 4-2"/><path id="path4258" d="m994 236-1 1 1-1"/><path id="path4264" d="M997 241h-3 3"/><path id="path4266" d="M995 238v1h1l-1-1"/><path id="path4326" d="m1007 240-4 1 4-1"/><path id="path4328" d="M1006 241h-2 2"/><path id="path4334" d="m1008 241-2 1 2-1"/><path id="path4340" d="M1012 244q-2 0-3 2l3-2"/><path id="path4352" d="M1013 244h-1 1"/><path id="path4354" d="M1014 247h2-2"/><path id="path4356" d="m1016 247-1 1 2-1h-1"/><path id="path4358" d="m1017 249 2-1h-3 2l-1 1"/><path id="path4364" d="M1021 247v1-1"/><path id="path4368" d="M1036 228v-1 1"/><path id="path4370" d="m1041 224 1-1-1 1"/><path id="path4372" d="m1044 223-1-1 1 1"/><path id="path4534" d="M1018 247h1l-2-1q3-1 5 1l-2-1q1 2-2 1"/><path id="path4536" d="m1035 226 3-1-3 1"/><path id="path4538" d="M1041 220h2-2"/><path id="path4544" d="m1191 127 2 1-2-1"/></g></g><path id="ne" d="M1273 635v-5h4q2 0 3-2l4-1h9l1-1q4 2 4 0l3-3 1-4q2-4 2-9v-13q-1-3 3-4l7-1q4-2 7-6l8-8 21-14 10-7q5-2 10 1l8 5h2l4-2 2 11 2 4 1 2v2l3 3-2 5-1 14v6l-1 5-2 4-5 5-5 10-2 2-1 1 1 6h-2l-1 1-4 3q-2 2-6 0l-8-1q-4 0-6 2l-2 2-3 1-6-3-6-2-3 2h-1c-1 3-3 0-4-1q-2-4-5-4l-4-2-3 2q-3-1-6 1l-1 2-2 4-2 5c0 1 0 6-1 5-1 0-4-6-6-6l-1 1-2 1v2l-2-2 1-2-1-2h-3q-5-1-5-6h2l-5-3-2-3-1-3" class="landxx ne"><title id="title832">Niger</title></path><g id="dk" class="landxx coastxx dk eu"><title id="title835">Denmark</title><path id="path4494" d="m1345 287 2 1-2-1"/><path id="path4548" d="M1335 274h3q1 2 1 0 3-2 2 0l2 1-1-1v-3h6l1 2-3 1h3l-1 1h5l-2 3h-1v-1l-1 2-3 1 1 1-3 1h2q-2 1-1 3l-2 2q3 0 2 2l-1-1h-2q-3 1-4-2h-1c4 0-1-3-1-3l-1-1v-3q0 2 2 1-1-3-2-1v-5" class="landxx dk eu"/><path id="path4492" d="m1338 274 2-3-1 1-1 1v1"/><path id="path4496" d="m1345 283 2 3h1l3 1q2-1 0-4v-1l-1 2c1-2-4-1-5-1"/><path id="path4498" d="m1350 289-2-2 2 2"/><path id="path4500" d="M1350 287h1-1"/><path id="path4502" d="m1351 280-1-1v2l1-1"/><path id="path4504" d="m1351 288 1 1 1-3-1 2"/><path id="path4506" d="m1353 269 1-1-2 1h1"/><path id="path4508" d="m1354 284 1 2h2q2 0 0 1h2l-1 1 1 3 1-2-1-2h2q-1-1 1-2l-1-1q0-2 2-2v-3h-4q2 2 0 3l1-2-2 2v-2h-2q0-1 0 0l-3 1c0 1 3 3 1 3"/><path id="path4510" d="M1353 289q3 2 6 1 1-2-2-1l-3-1v1h-1"/><path id="path4512" d="M1361 287v1l2-1h-2"/><path id="path4514" d="M1363 282h1-1"/><path id="path4516" d="M1379 286q-2-1-2 1 3 0 2-1"/><path id="path4550" d="M1337 274q-2-2 1-4h5l3-3 5-2-1 4q-1 3-4 1l-2 1h-3l-3 1-1 2h1-1"/></g><path id="lv" d="m1416 275 1 1v-4l1-1 1-3q0-2 3-2l3-1 3 3 4 3q2 1 4-1v-6l2-1h6l4 2q1 2 3 1l4 1 4 3-1 2 2 1 2 5h-2l-1 2-1 1h-7l-4-2-5-2-2-1-4 1-4-1h-11l-3 2h-1l-1-3" class="landxx lv eu"><title id="title853">Latvia</title></path><path id="ro" d="M1417 361h2l1-1h2l2-2 1-2 1-3 2-2v-2l2-1 3-1 2-2h3l3 1h4q2 3 5 0h5l1-2 3-1 4 4 4 5 4 6-1 3v3l2 4 3 1c1-1 6-3 6-1q1 6-4 5v-2l-1 3h1l-1 1 1-1-2 3v5l-2-1-3-1-3-1h-5q-6 1-8 3h-10l-4-1h-4c-1-2 2-2-1-3l-2-2 1-1q0-2-2-1l-2 1-2-1-3-2v-1q1-2-1-2l-4-2q0-4-3-6" class="landxx ro eu"><title id="title856">Romania</title></path><path id="zm" d="M1438 899v-24q-1-2 1-3h14v-18l2 1q2 1 1 3h3l5-1v4l3 1 4 1q3 1 5-2c1-3 2 1 3 2l1 2 3 1 3 1q2 1 2 4l3 4c1 2 4-2 5-1v2q2-1 1-3v-8h-1l-1 2-5-2q-4-2-3-8l2-5-1-5q3-4-1-7c1-2 6-4 4-7l13-2-1 2v1h3q3 2 2 0l4 2h1l2 2 3 1 2 1 2 1v1l3 3-1 1 2 2 1 2q0 3-2 3l-1 2v4q-1 5 2 8-4 1-5 3v3q0 4-2 5l1 2 2 1-22 8c-1 1 2 4 1 6h-3q-2-1-4 1-3 0-5 3v3l-3 2q-4 1-6 4c-1 2-5 9-8 8l-2-1h-3l-2-1-3-1-3-2h-4l-4 1h-3l-6-6-3-3-1-3" class="landxx zm"><title id="title859">Zambia</title></path><g id="mm" class="landxx coastxx mm"><title id="title862">Myanmar</title><path id="path4570" d="M1970 587v1l-1-2 1 1"/><path id="path4572" d="m1973 587 1 1-1-1"/><path id="path4574" d="m1976 596-1 1c2 2 2-1 1-1"/><path id="path4576" d="m1978 592-2-2q0 2 2 2"/><path id="path4578" d="m1986 619-1 3q2-1 1-3"/><path id="path4580" d="M1988 622v1-1"/><path id="path4582" d="M2008 617v1-1"/><path id="path4584" d="M2015 653v-1 1"/><path id="path4586" d="m2016 659-1-2 1 2"/><path id="path4588" d="m2016 654-1-1 1 1"/><path id="path4590" d="m2017 647-1-1 1 1"/><path id="path4592" d="m2018 667-1-2h-1l2 2"/><path id="path4594" d="M2017 660v-3 3"/><path id="path4596" d="M2017 653q2-1 0-3v3"/><path id="path4598" d="M2018 673v1-1"/><path id="path4600" d="m2019 659 1 1c0-3-3-3-1-1"/><path id="path4602" d="M2019 656v1l1-1-2-1v1"/><path id="path4604" d="m2018 652 1-1-1 1"/><path id="path4608" d="M1963 576v-2l3 1-1-6v-1l2 1 1-2v-7l1-2-1-6h2l4 1c0-3 5-9 2-12l2-4v-8l2-1 2-1 1-2 4-2h2q1 2 3 2l-2-2q-2-3 0-4 2-2 1-3l1-1v-2l5 3 1 2 2 3v-1q3 2 4 7l1 5-1 2s3 3 0 2l-1 1-1 1c-1 1-1 5-2 3v4q-2 0-1 2l1 2v4l3-2h6l-1 2 1 2 1 1q0 2 2 3l4 2q-2 1-1 4v3l5 1c1 1-1 3 2 3v2h2q3 0 5-3v3l-2 2-1 3-2 1-1 3-5 1 1 1-3 1-1 2h-1l-2 1h-3l-2 3v7h-3q1 3 3 2l1 2v3l4 4 3 4 2 5 1-2v3q-2 0-2 2l1 4-1 2h-2l1 4 6 6 2 7v2l2 3 1 3 2 4-2 5-3 5-1 2-1 4-1-5v-3l1-4 1-3-1-1-1 1v-4l-1-1h1v-3l-2-4-2-4-1-4v4l-1-2v-3c0-1-3-5-1-4v-1h-1l-2-9-1-2v-5h-2l-3-5-1-1-1-1v5l-2 3q-2-1-2-3v2q1 3-2 2 1 2-2 1c1 1 0 5-2 4v-3s-1 3-1 1v2l-1-3c-1-1 0 4-2 3l1-4-2 4-1-1 1-2-1 2 1-5h-1q0 3-2 4c-2 1 0-6 0-7v-8l-2-5-1-2v-2q-2 1-2-2v-3q0 2-1 1v3l-4-4h1l2 1q2 1 1-2-2 0-2-2h-1v-2q-2 1-2-1h-2l1 2-1-1v1-3h-1v-3l-1 4v-2l-2-2v2q0-3-2-3-2-2-2-5" class="landxx mm"/></g><path id="et" d="m1522 691 1-3q0-2 4-2h3l1-5v-6l1-3v-3l1-3q2-1 2 1 3-1 2-4v-3l1-3 3-5 2-2h2l1-5 1-3 1-4q0-3 3-2l3-1 2 3 2-7 1 1 2 1q2 3 3 1h2l1-1 1 2h6q3-1 6 2l5 6 3 3 2 3q3 1 2 5-4 3-3 7-1 4 1 4l5-1h2l-1 5q1 3 4 5l2 4 1 1 4 3 15 6 7 2h7l-21 26-4 1q-5-1-12 3l-3 3-4 1-3 1h-5l-2-2-3 1-4 3-2 3-5-1-2-1h-3c-4 0-1 0-10-6l-6-1-3-3v-4q-2-2-4-1l-1-2-2-5-2-4-1-1-1-1-2-2-3-4-3-1-3-2" class="landxx et"><title id="title885">Ethiopia</title></path><path id="gt" d="m573 634 1-3 1-2v-3l3-5 4-1h6v-3l-1-1-1-2-4-4h3l1-4 6-1h8l-1 9-2 8q3 0 4 2l1-1v-1l2 2-6 4-2 3v3l-3 2-1 1-1 1q-2 0-3 3l-3-2h-4q-6-1-8-5" class="landxx gt"><title id="title888">Guatemala</title></path><path id="sr" d="m830 729-2-5v-6q1-3 5-2 2-1 0-2c2-2 1-7 5-6 1 0 7 1 6 2q0-2 2-2l4 1h2l-2-1q3-1 6 1 4 0 2 4-3 3-3 5l1 7q3 2 2 5l-1 3-1 2-2 5-3-2h-7l-1 1v3c1 2-3 1-4 1l-2-2-1-2-3-5-1-3-1-1-1-1" class="landxx sr"><title id="title891">Suriname</title></path><path id="cz" d="m1361 326 1 1q3-3 5-2l9-4-1-1h2l1 2 2-1 1-1 1 1c1 2 5 0 5 3l2-1-1 2 2 2q2 1 3-1v-1l5 1 1 3h3l2 1 3 3-5 2-2 2-4 2-3 1-5-1-4-1-4-1v2l-2 2-3-1-2-1-3-2-3-2-4-4c2-2-2-2-2-5" class="landxx cz eu"><title id="title894">Czech Republic</title></path><path id="td" d="m1373 635 1-1 1-2 1-3 7-10q4-3 6-8v-14q0-7 2-12 1-1-1-4l-1-1v-2l-3-4v-5l-2-7v-1l9-4 59 34 1 33h-5l-3 1v4l-3 4q-2 1 0 4-4 2-2 6 0 3-3 4v3h3q2 0 1 1l1 4v3l1 2q2 0 2 2v3h-4l-1 1h-1l-3 2v2l-4 4-3 4-5 3-7 1-2 1 1 2-2 3-2 2h-5l-5 2-3 2q-2-1-2-3l-1 2-2 1h-5q1-1-1-3l-2-5-4-4-3-3q-2-2-1-4l2-2h6l2 1 2-1q-5-4-5-11l1-2v-3l-1-2-1-1v-3l-2-1c-2-2 0-3-3-4h-1q-3-2-3-5l-2-6" class="landxx td"><title id="title897">Chad</title></path><path id="al" d="m1412 408 1-2v-5l1-1q0-2-2-2l1-5q1-3 2-1c1 1 2-2 3 0v1l3 2v3l-1 2 1 2v2l2 2 1 1-1 4-2 2-1 2-1 2-2-2-5-5 1 1v-2l-1-1" class="landxx al"><title id="title900">Albania</title></path><g id="fi" class="landxx coastxx fi eu"><title id="title903">Finland</title><path id="path4630" d="m1405 245 1 1-1-1"/><path id="path4632" d="m1407 246 1-1h1l-2-1v1h-1l1 1"/><path id="path4634" d="M1408 246q3 1 0 0"/><path id="path4636" d="M1410 247h1-1"/><path id="path4638" d="M1414 222h-1 1"/><path id="path4642" d="M1416 243h1-1"/><path id="path4646" d="M1419 221q1 2 0 0"/><path id="path4648" d="m1420 244-1-1 1 1"/><path id="path4650" d="m1420 246-1-1 1 1"/><path id="path4652" d="m1420 246 1-1-1 1"/><path id="path4660" d="M1423 217h-1l1 1v-1"/><path id="path4662" d="m1422 244 1 1-1-1"/><path id="path4664" d="M1423 247h1l2-2h-3c2 1-1 1 0 2"/><path id="path4666" d="M1425 247h2-2"/><path id="path4670" d="M1432 208h2-2"/><path id="path4682" d="M1406 178h3l-1-1q4-2 7 2l6 2 3-1h4l2 1 3-2q2 0 1-1l1-4q2-3 4-2l4-1q2-1 5 1l4 1c5 1-1 3 1 5l-4 1q3 0 2 1v3l5 2 3 3c3 1-5 4-3 6l7 9h-2v3l1 1v2l3 2c-3 1 1 2 2 3q1 2-2 4l9 5v3l-3 4-12 10-4 3h-8v1l-3-1v2l-2-1-4 1-2 1-1 1h-2l-4 1v-1l-3 1 1-1h1l-2-1q-1-1 1-2c-1 0-5 2-4 0l-4-1q0-2-1 0l-1-1-1-4c2 1-1-4 1-3l-2-4v-3l-2-2 3-3v-2h4v-2h3q0-2 3-3l2-2 3-2 2-3h3l1-1-2-1v-3q-3 0-4-2-2 1-3-1l-2-2c-2-2 2-4 0-6l-2-2 1-1q-2 0-2-2v-1l1-1-3-1-2-2h-2l-4-2-7-3" class="landxx fi eu"/><path id="path4688" d="M1422 245h-1 1"/><path id="path4690" d="M1422 244h1-1"/></g><path id="sy" d="m1533 472 3-3q-2-3 2-2l1-3-2-3v-1q-4 1-3-3l-1-4v-4l2 1 1-2v-2h2l-1-3 1-2h1l3 2 4-1 4-2 3 2h4l8-3 9-1c2 0 4-3 4 1l-3 3-3 2q-2 2 0 6v10c0 3-16 11-24 16q-4 5-9 3l-3-2h-3v-5" class="landxx sy"><title id="title925">Syrian Arab Republic</title></path><path id="kg" d="M1766 413q3-2 5-1 2 0 2 2l3-2q1-2 3-1l1 1h1l2-1c-2-1 2-1 3-1l-1-2h3l1-2h-2l-4-1q0-2-2-2l-3-3v2l-1 1v1l-5-2-2-1h-2q1-5 6-6-4 0-3-3l1-2h3q3-1 7 1h1l3 1 3 1q-2-3-1-6l3-1 6 2 6 2 1-2 4 1 3-1 3 1h7l8 2 2 2h2l3 3-3 1-7 4-1 2-2 2h-6q-3 1-2 3-1 3-4 3-3-1-3-3l-3 2-3-1 1 2-2 1-3 2-1 4h-2l-3 1q-4-1-5 2l-4-2v-1h-2v-1l-4 2-2-1h-3v-1h-2l-4 1v-5" class="landxx kg eaeu"><title id="title928">Kyrgyzstan</title></path><g id="sb" class="landxx coastxx sb"><title id="title931">Solomon Islands</title><path id="path4726" d="M2465 828v-2l-1-1 1 3"/><path id="path4728" d="m2464 831-1-3 1 3"/><path id="path4730" d="M2466 821q3 3 5 2l-2-1-1-3-4-2 2 4"/><path id="path4732" d="M2468 830v-2q-2 0 0 2"/><path id="path4734" d="M2469 835v-3 3"/><path id="path4736" d="M2473 834v-1l-1-3-2-1-2 2 3 1 2 2"/><path id="path4738" d="m2471 836-1-1 1 1"/><path id="path4740" d="M2472 824h-1 1"/><path id="path4742" d="M2473 824q2 0 0 0"/><path id="path4744" d="m2474 835 1-2q-3 1-1 2"/><path id="path4748" d="M2478 825h-1 1"/><path id="path4750" d="m2479 826-2-1 2 1"/><path id="path4752" d="m2483 830 5 3q0-3-4-4l-3-3-1-1h-2l5 5"/><path id="path4754" d="M2482 838h1-1"/><path id="path4756" d="M2488 845h6q0-4-3-4-2 1-4-1h-1q0 3 2 5"/><path id="path4758" d="M2487 834v-2q-2 0 0 2"/><path id="path4760" d="M2486 860h2l2 2c1-1-4-4-4-2"/><path id="path4764" d="m2491 839-1-2 1 2"/><path id="path4766" d="M2491 839h1-1"/><path id="path4768" d="m2495 839 4 4-1-5-1-2v-2l-1-2h-2l1 7"/><path id="path4770" d="M2501 853h4l-3-3q-3-3-4-1l1 1 2 3"/><path id="path4772" d="M2500 844q1-2-1-3v2l1 1"/><path id="path4774" d="m2532 854 2-2-3 1 1 1"/><path id="path4778" d="m2538 861 1-1h-1v1"/></g><g id="om" class="landxx coastxx om"><title id="title958">Oman</title><path id="path4692" d="m1712 585 1-2 1-1-1-1-1 4"/><path id="path4696" d="m1689 534 1-2 1-1v2q1 3-1 5c-1 0 1-4-1-4" class="landxx om"/><path id="path4786" d="m1663 594 22-7c2-4 0 2 0-2l3-10v-7l-3-5c-1-2 3-9 1-10l3-2v-1q-2-3-1-6 2-1 1 1l2-1 1 1 4 5q3 4 8 4l5 1q3 1 4 4l3 4 2 1c3 2 0 6-1 8l-5 8-2 3-2-1q-2 2-2 6v5q2 2-1 3-5 0-7 4l-1 3q-2 3-5 2-1-1-3 2l-1 3-2 3h-2l-2-1-9 3c-2 0-2-5-4-5q1-3-2-5l-4-11" class="landxx om"/></g><g id="pa" class="landxx coastxx pa"><title id="title964">Panama</title><path id="path2682" d="m639 688 1-2q-1-2 1-3 0-2-2-2l1-4h3l1 1v2h1q0 3 3 2l-1-1q2 0 4 3l7-3 6-3 2-1h4l-1 1q5 0 8 2l5 5v4q1 3-3 5v-1l-1 1-1 3q-3-3-4-7l2-2 3 1-1-1-1-2-1 1-1-1v1l-3-3-1-2h-2q-3 0-5 2-1 3-4 4c-3-1 0 4 1 4l1 3-3 1q-2 2-4 1v-3l-1-3h-1q0 4-3 1l-3-3-1-1-2-1-3 1-1 2v-2" class="landxx pa"/><path id="path4792" d="M643 688h1-1"/><path id="path4794" d="m648 693-1 2 1 1v-3"/><path id="path4796" d="m651 695 2-1-2 1"/><path id="path4802" d="m670 686-1 2 1-2"/></g><g id="ar" class="landxx coastxx ar"><title id="title972">Argentina</title><path id="path4200" d="M837 1098v-1"/><path id="path4202" d="m839 1099-2-1 2 1"/><path id="path4518" d="m759 1013 1-2v-3l2-6 1-5 1-2 2-1c3-1 0-3-1-5v-4c0-2-4-8-1-8l-1-3q0-3 3-4t5-3l1-6-1-3-1-1 4-5 3-4 3 3h6q5 2 6 6l1-3 1-4h8l3 3q2 1 2 3l2 2 6 5 2 2 4 2h4l3 2 7 5 3 1 2 1 3 1 2 2-1 4-2 6-2 5v2h4l8 1h2l3 1 1-2 3 1 1-3 3-2 1-2 1-3v-5h2q1-3 2-1l3 3 1 6v5h-1l-4 2-2 2-3 2-1 1-2 2 1 1c-2-1-4 4-5 6l-4 6-2 3-1 1-1 2 1 3v3l-1 2 1 2-1 4 1 3q-1 2 1 4c1 2-2 1-1 3l-1 4c1 1 4 5 1 5l3 3 5 3c2 1 6 3 4 6-1 2 2 7 5 6 1-1 2 3 2 3q1 3-1 6l-3 5q1 2-1 3l-9 4-13 2h-4l-5-2 1 1v2l2 2 1 2q1 2-1 2l1 3-1 2 2 1q0 2 1 1-2 5-7 4-6 0-11-3h-1l-1 2 3 6q-1 2 2 4 3 0 3 2h4l-3-1 4-2 2 3 1 3-3 1-2-2-3-1c-3 3 2 4 4 4l-2 2q-2 0-2 2v4l1 1v4l-1 2 1 2c0 1-7-1-6 2q-4 0-4 5 0 6 5 8l4 2 6 1c3 2 3 7-1 7l2-1 2 1v1q-3 1-5 4l-2 3-1 2-1 2h2q2 4-1 6-3 0-5-3l1 2-2 1q3-1 4 1l-2 2-1 6c2-2 4 2 4 3l-3 1h3l3 2 5 4h-2l-4-2-10-1h-9l-5-4-1-3v-2q-1-3-3-2h-2l-1 1-3-3-3-3-1-1v-2l-1-1v-2l1-2 1-1 1-1v-3l1-2-2-2-1-3q0-3 2-4-2-1-1-2l-1-1 1-1q0-3-3-5 2-1 0-2l-1-3 2-1-1-2-2-2-3-1c-1-1 4 0 5-1v-2c-1-2-5 0-6-2v-3q-2-1-1-2c1-1-4-2-2-3q1-2-1-2t-3-2l-1-4v-2q2 0 1-1l-2-4-3-7v-3l-1-3q2 0 0-2t1-2l-1-5 2-3q1-2-2-4l-2-5-2-5v-5l1-1 1-1 1-1-1-4-1-2-1-1 1-2v-2l1-5v-3l-1-6h-2v-2l-1-2-1-2-3-4q2-1-1-2l-2-5 1-3v-5c3 2 2-2 2-3l-2-6" class="landxx ar"/><path id="path4520" d="m836 1212 4 4q-3 0 0 2 2 0 3 2l4 2 10 6 6 1h2l1 2h-3l-5 1-5-1-6-1h-3l-2-5-6-12" class="landxx ar"/><path id="path4874" d="m870 1231 4-1q-2-1-5 1h1"/></g><g id="gb" class="landxx coastxx gb eu"><title id="title980">United Kingdom of Great Britain and Northern Ireland</title><path id="path2690" d="m1231 292 2-2 3-3 3-1h5l1 2 2 1-2 1h2v2l-1-1v1h1l-1 2-2 1h-3l-1-1c-1 0-3-3-3-1-1 3-5 0-6-1" class="landxx gb eu"/><path id="path2640" d="M1239 270v-1c-1-3-2 2 0 1"/><path id="path2642" d="m1239 267 1-1h-2l1 1"/><path id="path2644" d="m1239 268-1-1 1 1"/><path id="path2646" d="m1240 276 1-1-1 1"/><path id="path2648" d="M1243 263c1 2 3-1 1-1l2-1q2-2-1-2l-2 1-1 2v-1l-1 1-1 1 2 1-2 1q2 0 3-2"/><path id="path2650" d="m1242 275 1-1-1 1"/><path id="path2652" d="M1244 283q2-1 0-3l-2 2 2-1v2"/><path id="path2654" d="m1247 271 2-2c-4 1-2-3-4-3v1h-3q1 2 3 2v1h2v1"/><path id="path2656" d="m1246 329 3-2 4-2 3 2 2-4h3q2-1 4 1l1-1h1c1 0 6 0 5-2l3 1h6q3 1 5-1l2-1 3-2-6-1 1-1-2 1 2-1q3-1 0-2h1l3-1-1-1q2 0 0 0 2 0 3-2 3-3-1-5-2-2-5-1l-2 2-2-1q3-2 2-5l-6-2q2-1 5 1c0-1-3-4-1-5l-3-2-3-1q-3-3-3-7-1-3-5-5h-4l-5-1c3 2 4-1 7-1v-1h-3q4-1 7-4l2-3 1-2q-2-3-6-1h-5l-4 1 1-1h-2q2 0 3-2h-3l3-1 3-1c0-1 5-4 2-4q-2-1-5 1h-4l-1-1h-1l-1 2 1 1q-2 0-3 2l1 1q-1-1-3 1v2h-1l2 1-1 1h1q-2 0 0 1s-4 0-1 1q-2 0-1 1l-1 1h-2l3 1h-2c1 3 5-1 6-1q-2 1 0 0s-3 2-1 2h-1 1l-1 1h-1v2l-1 1q-1 2 1 2l-3 3h2l1-4 3-3-2 3h1l1 1-1-1h1l1-2v1l2 1h-2q-1 2 1 3c0 2-4 3-3 5l-1-1 2 3q-1-2 1-1 3 2 2-1h4l1-1h4l-4 3q0 3 2 3v2l1-1h1l-1 2q-1 1 1 2-3 3 1 3c-1 1-4-2-3 1h-7q0-2-2-2-1 3 2 2l-4 3h4l1 1v2l-1 1-2 2-6 2 1 1h2l-2 1 5-1 2 1h-2 2l3 2 4-1 4-2-5 4v1h-7l-2 1-1 1-3 3-1 1-2 1-2 2q2-1 3 1"/><path id="path2658" d="M1245 272v-1h-1v1"/><path id="path2660" d="m1244 277 4-1q-1-3-4-1h2q-2 1 0 1l-2 1"/><path id="path2662" d="m1246 281 2-3-3 2 1 1"/><path id="path2664" d="M1247 268v-1 1"/><path id="path2666" d="M1250 284v-3 3"/><path id="path2670" d="M1265 257v-1 1"/><path id="path2672" d="M1265 255h4l-3-1q-1-1-1 1"/><path id="path2674" d="M1267 257v-1 1"/><path id="path2676" d="m1268 253-1-1 1 1"/><path id="path2678" d="m1269 254 1-1-1 1"/><path id="path2776" d="m1278 247-1 1 3-4-1-1-1 1v-2l-1 1 1 1-2 1h1l1 2"/><path id="path2778" d="M1279 243q2 0 1-2l-1 2"/><path id="path2780" d="M1281 242c1-2-2-1 0 0"/><path id="path2782" d="m1281 243 1-1-1 1"/><path id="path5354" d="m1272 324 2-1h-3l1 1"/></g><path id="cr" d="m618 670 2-3-2-2 2-2 4 1h3l3 1 2 1q2 2 3-1v2l2 3 2 3 3 3v1h-2l-1 3c0 2 3 2 1 3v4q-2 1-1 3l-1-2-1-1 1-1q-1-2-3-2l1 3-3-2 1-2q0-3-3-4-1-2-3-2l-1-1-5-5 1 1 1 2-1 2q-1 1-2-2-3 0-3-4" class="landxx cr"><title id="title1008">Costa Rica</title></path><path id="py" d="m804 952 1-9v-5l1-4q0-3 4-5l9-2q7-2 12 1 3 2 4 5l3 6q-1 1 1 2v3l-1 2 1 2-1 2 6 2 4 1 2-2 4 2 1 1 1 4 2 4q0 5 3 5l4-1 3 2v4l-1 4v5l1 7-1 2-2 2-2 1-1 1q1 3-2 3-2-3-3 1l-2-1h-6q-4-2-8-1-1 1-2-1l1-3c3-1 0-6 2-7q3-1 2-4 1-3-2-4l-4-2-2-1-3-1-5-4q-3-2-7-2l-4-2-6-5-4-4-3-4" class="landxx py"><title id="title1011">Paraguay</title></path><g id="gn" class="landxx coastxx gn"><title id="title1014">Guinea</title><path id="path5380" d="M1157 665v1l1-1h-1"/><path id="path5400" d="m1157 665 2-5 4-1 3-1 1-1-2-3 2-1v-3h5q0 2 1 1l3 1 1 1 3-1h5q-2 1 0 4l3-2c3 1 1 4 3 1 3-3 5 1 6 0l1-1 2-1 1-1 2 1 1 2 1 4q2 1 2 3h-1l-1 3 2-1 1 3 1 2 1 2q1 1-1 2v2q-1 3 2 3l1 3-2 2 3 4h-5q0 2 2 3l-1 1v1l-1 2h-2l-1-1-1 2q-1 2-3 2 0-2-3-1l1-4v-5l-3-1h-2l-3 1-2 1 2-4c-2-2 0-2-2-3v-2q-2-7-7-6l-3 1q-3-1-3 1l-3 4-1 2h-2l1-1-1-1v1l-1-1-1-2-1-3-1 1 1-2q-1 2-2 1l-1-2-1 1c0-2-4-2-3-4h-1l2-4-1 2h-1v-3l-2 1" class="landxx gn"/></g><g id="ie" class="landxx coastxx ie eu"><title id="title1019">Ireland</title><path id="path5352" d="M1229 287q-1 1 0 0"/><path id="path5348" d="M1218 296h-1 1"/><path id="path5402" d="M1216 315h-1l3-2-4 1c-1-1 3-3 4-3h-5l2-1h3l-1-2 3-1 5-1h-1l-6 1s4-2 3-3l4-2h-4l-3-1 1-1h-2 1l-1-1h3l-1-1 1-1h-1v-2l-1-1v-1h3l3 1 4-1h-1l3-2-3-1 2-1q-1-1 0 0l1-3h4q-1-1 1-1l-1 2q2 0 1-2h4l-3 3-3 2q-3 1-1 3l2 1q2 1 2-1l2-1 2 2 2 1h1l-2 1 1 2q2 1 0 3v5l-3 3q2 1 0 1h-3c1 1-3 1-4 1l-1 1-3 2q0-2-2-1v1l-1 1h-1l-3 1h-4l2-1-2 1 2-1h-3" class="landxx ie eu"/></g><g id="ng" class="landxx coastxx ng"><title id="title1025">Nigeria</title><path id="path5382" d="M1325 722q2 0 1-2l-1 2"/><path id="path5386" d="M1327 721h1-1"/><path id="path5406" d="m1291 691 1-10h2l1-4 2-3 2-2v-3q2-1 0-3v-3l-1-1q-1-3 1-4v-5l2-4q2-2 1-4 0-2 2-3l4-1 5-2 3 2 4 1 3 4 1 1 2-1c3 0 4-3 8-1l1 1 1 1 4 1 4 1 3-3q4-3 10-2l4 1q2 2 4 1t4-3l2-1h1q3-2 4 2 3 1 2 6l1 2 2 1c3 1 0 4 1 6s-3 3-4 3q-3 2-4 6l-1 3-1 2-1 4-2 2-1 3q0 3-3 3l-1 2v3q0 3-3 5l-1 4-1 3-2 2h-2v-2l-2-2-2-2-1 2-2-1-4 4c-1 1-6 6-5 7l-1 4-2 5-1-1-2-1q3 3-1 3c-1 0-5 1-4-1l-1 1-3-1q2 1 0 2l-1-2 1 3-2-4v4-2q0 2 0 0l-1 2v-1l-1 1-2-1q0 3-1 0 0 2-2 0l-2-2-1-3q0-2-1-1l1-2 1-1-2 1q-1-2 2-2h-2v-1q0 2-1 0-1-1 1-2l-2 2q-2-5-5-6h-7l3-2-3 1v1l-6 1 1-4v-3l-1-7" class="landxx ng"/></g><g id="tn" class="landxx coastxx tn"><title id="title1031">Tunisia</title><path id="path5410" d="m1329 465 2-2 2-2 1-3 1-6-1-3q2-4 0-5l3-3v-1l2-1 4-2h2l1 1v-1q2-1 2 2l1 1v1l1 1 2-2 2-1v2l-4 5 2 4 3 3q0 5-4 8-4 1-3 5l2 2h2v2l2-1 1 1v2h3v5q1 2-1 3l-5 3-1 2q-4 0-3 4v5q-1 3-5 4l-2-11q0-5-4-7l-3-4q1-2-2-3l-1-1-1-3q-2-2-1-4" class="landxx tn"/><path id="path5412" d="m1353 469-1-1 1-2q2 1 0 3"/></g><path id="pl" d="m1374 305 1-4v-3h1l1-1-2-1h-1l6-1 7-2 7-4q5-1 9 1l-2-1 2 3h6l-2 1h23q4-1 4 4 3 4 3 9l-3 2q-2 2 1 3c3 0 0 3 1 5q1 3 4 5l-1 1q2 2 0 3l-5 4-2 4v3l1 1-4-1-4-2h-10l-2 1-1-1-2-2-3 2-4-5h-4l-1-3-5-1v1q-1 2-3 1l-2-2 1-1h-2q-2-2-5-2l-1-2-2 1q3-2-1-5v-6l-1-1v-2l-3-2" class="landxx pl eu"><title id="title1036">Poland</title></path><path id="na" d="m1360 909 3-1 3 1 6-3 5 4h31q3-1 4 2 2 2 5 2l10 1h8l17-4h5q3-1 5 2l-3 1-3 1c-2-2-5 4-7 5q0-3-3-5l-7 2-9 1-1 32h-7l-1 54q-1 3-3 3l-2 1-1 2-3-1h-5l-6-2v-2l-1-1-1-2-2 4q-2 2-4 0l-4-4-2-5-1-3-1-2-1-4v-2l-1-4v-6l-2-6-1-6v-4l1-4-3-6-1-2-2-3-5-12q-2-7-6-12-5-5-4-12" class="landxx na"><title id="title1039">Namibia</title></path><path id="za" d="m1472 1016 2 3 1 3q2 3 4 3l2-4 3-1 3-2 2-3 1-2-3-3-2-3-3 1-2 1-3 1-2 4-3 2m-77-9 2-2 2-3 2 2v3q3 3 6 2h5l3 1q0-3 1-2l2-2 3-1v-31l3 3 2 5q2 2 1 5-2 2-1 5c2-2 6 1 8 0v-2h2l3-3 3-4 1-4h4l4 2c2 0 5 3 7 1h4l2-4 1-3q-1-1 1-1l3-2 4-3 1-5 3-2 4-3 2-4 4-1 2-1 3-2 8 2q5-1 7 2l1 6 2 6v18l-2-1-3-1q0 2-2 3l-2 5 3 3q2 2 5 1l1-3h6l-3 11q0 5-4 6l-2 1-1 1q-3 3-4 7l-2 3-4 5-7 7-6 7-9 7-8 5-4-1q-3 2-1 3c-2 1-4-2-6 0q-2 2-5 1-3-2-6-1h-5q-4 0-6 3h-7l-3 1-3 2h-4l-2-1c2-2-3-2-3-2q1-3-2-3l-1 3v-5l-1-3-1-2-2-2 1-2q2 0 3-3 0-5-3-9l-6-12-1-6-3-6" class="landxx za"><title id="title1042">South Africa</title></path><path id="eg" d="m1455 500 2-7q-3-4 0-7 2 2 4 1h5l7 1 2 2h2l2 1h2l5 2 5-2 2-2h2-1l2-2h4l-3 1c1 0 5-2 3-2l5 1h2l2 2-2-2v3l2 1v-2l5 2h2l4-1 4-2 6 17q-2 3-2 7l-1 4-1 4-2-2-3-3q-3-1-3-4l-3-5-2-6q-2 2-1 4l2 6 4 6 2 1q2 3 0 2 2 2 1 3l2 3 2 2-1 2 1 2 2 3 6 12 3 4 3 3-2-1 1 7q1 2-3 3l-2 1-1 2-1 2-3 1q-1 4-3 4l-6-3h-11v-1q-1-1-2 1h-47l-1-54-1-8-2-7" class="landxx eg"><title id="title1045">Egypt</title></path><g id="tz" class="landxx coastxx tz"><title id="title1048">Tanzania, United Republic of</title><path id="path4894" d="M1570 812q0 2 2 3c1 1 1-3-1-2v-4q-2 2-1 3"/><path id="path4896" d="M1573 829q2-1 1-3l-1 3"/><path id="path4898" d="M1573 803v2h1v1q2-3-1-4v1"/><path id="path5432" d="m1498 806-1-5v-3q2 0 3-2l3-3v-2l1-1 2-2v-3q-4 1-2-3-2 1 0-1l2-2q1-2-1-6-3-2-1-5h10l-1 5-1 3v3l2 5 1-1 1-2 1-2c1 0 2 3 3 1l1 2v3l2-1c-1 0-3-6 3-2 0-2 4-4 3-4h-5l3-1-2-1 2-1 1-1v-2l2 1-1-2h1v-1l1-1 23 14 5 4-1 2 1 2 5 5c1 0 6 3 6 5l-2 6-1 3v3c0 3 4 3 3 6q3 0 1 3l-1 5 1 3-1 3 1 4 1 2v1l1 3v3l2 2c0-2 4 1 3 3l-9 5h-2l-4 2c-1 1-2-2-3-1l-4 4q-3 1-3-1l-4 1-4-1q-1-2-3-1l-6 1v-2l-1-2-1-4v-5l-3-5q-3 0-2 2l-4-2-3-1-3-1-1-1-1-1h-2l-2-1h-1l-1-2-3-1-4-9q0-6-4-10l-1 1q-3-2 0-5l-1-5" class="landxx tz"/></g><g id="sa" class="landxx coastxx sa"><title id="title1055">Saudi Arabia</title><path id="path3234" d="m1590 616-1-2v1l-2-1 3 2"/><path id="path3380" d="m1595 618-2-4s-2-4-2-2q-1-5-5-8l-2-3-2-3-1-2-1-3v-2l-1-1-1-1-1-1-3-3-4-2q-3-2-4-6l-1-3-1-4v-5l-1-3q-1-1 0 0l-1-2-1-3-5-6-4-2-1-2-2-2c3-1-1-6-2-7l-2-2-2-4-8-12-3-4-3 1 1-4v-5l1-3 8 2c3-1 3-6 6-6q3 0 4-2c0-4 2-2 4-3l-9-9 15-5 10 2q15 7 26 17l5 4q2 3 6 2l8 1h8l2 4 5 1 2 2 3 4v2s5 0 3 2c1 0 2 3 3 1-1 2 3 4 4 5l-1-1 2 4-1 1v2l2 3-1-1 3 3 1 4 3 3h4q-3 3 1 2l1 3c3 3 6 9 8 9l17 3 2-1 3 5v4l-3 15q-21 9-43 11l-6 3q-5 4-6 9l-3 3-3-3h-4l-6-1h-5l-6 1-4-2-2 4q2 1 0 3l-2 3" class="landxx sa"/><path id="path5480" d="m1587 612 1 1-1-1"/><path id="path5482" d="M1588 613v1h-1l1-1"/><path id="path5488" d="M1639 523h1-1"/></g><g id="vn" class="landxx coastxx vn"><title id="title1063">Viet Nam</title><path id="path3474" d="m2078 675 2 2-2-2"/><path id="path3476" d="M2083 667v2-2"/><path id="path3480" d="M2101 650v1-1"/><path id="path3562" d="m2036 566 2-3 3 1q2 2 2 0 1-2 3 0l1-1 2 2 2-3q1 2 4 0v-2l3-3 4 4h4l3 1v2l1 5 3 1 3 3v-1h2q4 0 4 2h-3l-2 1-1 2-1 1-2 1-2-1h1v2l-1 1v3q-1 2-3 2l-1 4-1 4 1 4 2 1 2 2 2 2 1 3h-1l4 3q3 2 3 5 2 0 3 2l3 3q3-1 3 2l1-1c-2 2 4 5 4 7h1v2l2 3 2 5v5l1 1v2l1 3v3-2q-2 2 0 4l-1-1v4-1 2l1 1-2 2-1 2-1 1-2 1-2 1-1 2-3 1-2 2q-2-1-2-3l-1 2v-1h-1v-1q0 2-2 2l2 1h-3l3 2-2 1-2-2q3 2 3 4l-4-4c0 1 6 5 3 6-1 1-4-3-5-4q3 2 3 5l-3 2-3 4q-2 2-4 1l1-1v-1l-1 1v-8q0-3 2-2c0-3-6-2-5-5h-1l2-1c4 0 2-2 3-3q2 1 5-1l1 1 2 1v-1l-2-3-1-2 1-2q2-1 4 1l-1-3h2l3-2 1-1h2q2-3 0-7v-4l-1-1v-2l-1-2v-6q-1-1 1-2 0-3-3-4l-1-2 2-2-3-2-2-1-2-1-1-2q0-3-3-5l-2-1-3-4-1-2-2-1-1-1-1-2q0-2-3-2l-6-4-1-1v-3l3 1 3-2 1-2q0-2-2-1l-1-1-2-1 1-2-1-2-3-1-2 3-3-2q-2 1-3-2l-1-4-1-2-1 1-2-2-3-4" class="landxx vn"/><path id="path5494" d="M2073 579h-1 1"/><path id="path5496" d="m2073 579 2 1-2-1"/><path id="path5498" d="M2077 575v2-2"/><path id="path5500" d="m2078 578-1 1 1-1"/><path id="path5502" d="m2080 575 1-1-1 1"/></g><g id="ru" class="landxx coastxx ru eaeu"><title id="title1076">Russian Federation</title><path id="path2926" d="M1496 208h1l-2-1 1 1"/><path id="path2928" d="M1498 208h-1 1"/><path id="path2938" d="M1522 211h3l-1-1q-2 0-1 1h-1"/><path id="path2940" d="m1522 208 1 1-1-1"/><path id="path3274" d="M2156 287v1h2v-2l-2 1"/><path id="path3276" d="M2160 287v2c2-1 3 2 4 1q2-3-1-3l-3-1v1"/><path id="path3278" d="m2166 292-2-1 2 1"/><path id="path3280" d="M2166 292h1l-1-1v1"/><path id="path3282" d="m2200 295 2 2 2 1h-2l2 1-1 2-1-1q-3 0-1 3l4 4 3 5 8 7 3 4 4 5 5 9 7 8 2 4 3 5 2 4 5 5-1-2v-3q-1-3 1-1l5 1 3 4-2-4-1-2-3-1 2 1c-2 1-4-3-5-3l-7-6-4-9v-3l3-1h-3c1-1 6 1 7 2l4 2 3 2-2-2-3-2q-4-2-6-6l-14-12v-1l-3-2 1 1-2-1-2-2-4-5 1 1c0-4-6-4-7-8q3 1 5 4l-4-4-6-4 2 1-2-1-1-2-4-3-1 1 3 2"/><path id="path3284" d="M2212 255c3 1-1-3 0 0"/><path id="path3296" d="M2282 375v7q0-4 4-6l-4-1"/><path id="path3302" d="m2295 366-2 2q-2 2-4-1l1 1-1 2-1 4v2q2-2 2-5 2 1 3-2s4-1 2-3"/><path id="path3304" d="M2291 381h-2 2"/><path id="path3308" d="M2300 362q-2 1-1 4l4-5-3 1"/><path id="path3314" d="m2306 321 1 1-1-1"/><path id="path3316" d="m2308 353-1 2v1l2-3h-1"/><path id="path3320" d="M2311 329q0-2 2-3c0-1-2-5-3-3-1 1 2 2-1 3-2 0 2 2 2 3"/><path id="path3322" d="m2310 345-1-1 1 1"/><path id="path3324" d="M2310 348h1l-1-1v1"/><path id="path3326" d="m2311 335-1-3 1 3"/><path id="path3328" d="m2310 339 1-1-1 1"/><path id="path3332" d="m2313 321-1 1 2 1-1-2"/><path id="path3354" d="M2296 258q1 2 2-1l2-1-3-3-3 2q3 1 2 3"/><path id="path3356" d="M2341 285h-2l10 5-4-3-2-1-2-1"/><path id="path3358" d="M2353 288q3 3 7 3l-7-3"/><path id="path3220" d="m2028 144 2-1q-3-3-6-2l4 3"/><path id="path3212" d="m1989 134 2-1-1-1-4-2 3 4"/><path id="path3214" d="m1995 132 2 1 2 1h-2l5 2 6 2h7l-1-2 3 1h4q4-2 7 0h-1 4l4-1-7-1-4-1-4-2q1 0 0 0s3 0 1-1c1 0 5 0 3 2l11 3 3-1-2-2 2-1-7-1-6-1q-6 1-13-2l2 1-3 1 4 2h-3l-2-1h-2l-2-1-6-1s-4-2-3 0h-1l-2 1 2 1h-2l1 1"/><path id="path3216" d="m1999 141 7 3c0-2-6-3-7-3"/><path id="path3218" d="m2013 132-1-1 1 1"/><path id="path3222" d="M2030 147h-1 10q6 2 12 1l-14-5-5 1v2l-2 1"/><path id="path3224" d="M2037 160h-5l2 1h1l2-1"/><path id="path3226" d="M2038 159h1-2 1"/><path id="path3228" d="M2042 125h3-3"/><path id="path3230" d="M2065 138q4 1 6-2l-1-1h-5l-4-1h-4q-4-2-7-1c-3 2-5-1-7-1l3 3 6 1 13 2"/><path id="path3232" d="M2068 129h1l-1-1v1"/><path id="path3068" d="M1666 107h4l-7-1 3 1"/><path id="path3072" d="M1671 99h-1 6-5"/><path id="path3106" d="M1720 97q3 3 7 1-3-2-7-1"/><path id="path3202" d="m1946 144-2-1 2 1"/><path id="path3204" d="m1955 146-1-1 1 1"/><path id="path3206" d="M1963 146h4-4"/><path id="path3208" d="M1977 150h-1 1"/><path id="path3210" d="m1979 151-1-1 1 1"/><path id="path3200" d="M1927 149h-1 3-2"/><path id="path3190" d="m1859 125 4 2-4-2"/><path id="path3194" d="M1867 127h1-1"/><path id="path3196" d="M1883 142q2-2-1-2l-7-1q1 1-1 1c1 2 7 2 9 2"/><path id="path3198" d="M1897 141h1l-1-1v1"/><path id="path3154" d="m1778 122-5 1h3l2-1"/><path id="path3156" d="M1774 125h-1 2-1"/><path id="path3158" d="M1775 128h-1 2-1"/><path id="path3160" d="M1777 125h-1 2-1"/><path id="path3164" d="M1779 123h-2 2"/><path id="path3166" d="M1781 125h-3 3"/><path id="path3168" d="m1784 129-1-1h2c-1-2-5 1-7 0l6 1"/><path id="path3172" d="m1785 125-1-1 1 1"/><path id="path3174" d="M1786 128c-2 1 1-1 0-1v1"/><path id="path3176" d="m1787 126-2-1 2 1"/><path id="path3180" d="M1789 129h-2 2"/><path id="path3112" d="m1732 104 3 1 5 1h-2q4 1 7-1l-5-1h-8"/><path id="path3114" d="M1733 102q3-1 8 1h-6 4-3l6 1 7-1h6l5-1-4-2h4l-9-2q-5-2-8-1h2l-11 2 3 1v1l-3 1h3-5 1"/><path id="path3122" d="M1737 106h1-3 2"/><path id="path3136" d="M1740 108h2-2"/><path id="path3144" d="M1743 108h2-2"/><path id="path3146" d="m1749 104-1 1h2l-6 2h6l3 1 5 2h8l3 1h8q3 1 5-1l-7-2 3 1-3-3 1-1q-4-2-9-1l1 1h-3l-1 1 1-2-4-1h-5l-7 1"/><path id="path3162" d="M1777 106h1-1"/><path id="path3178" d="M1786 114h1l-2 2h8l8-1h4l7-2-4-2h-2l-3-1-5-1q-1 2-3 2v-3h-3q-3 0-2 1l-2-1-2 1 2 1-2 1 3 1h-3v2"/><path id="path3182" d="M1818 115h1-2 1"/><path id="path3184" d="M1825 116h1l-7-1 6 1"/><path id="path3186" d="M1825 120h2-2"/><path id="path3188" d="M1831 121h1-2q2 0 0 0h1"/><path id="path3016" d="m1575 183 4-1-4 1"/><path id="path3042" d="M1595 130h1-1"/><path id="path3044" d="M1596 130h1-1"/><path id="path3046" d="M1598 129h1-1"/><path id="path3048" d="M1599 179h1-1"/><path id="path3050" d="M1600 128h2-2"/><path id="path3054" d="M1604 167h1-2 1"/><path id="path2944" d="M1534 104h1-1"/><path id="path2952" d="M1546 102h2-2"/><path id="path2966" d="m1557 102 1-1-1 1"/><path id="path2982" d="M1563 102h2-2"/><path id="path2988" d="M1566 101h1-1"/><path id="path2990" d="M1566 97h4-4"/><path id="path3000" d="M1570 98h4-4"/><path id="path3002" d="M1570 95h2-2"/><path id="path3006" d="M1572 98h1-1"/><path id="path3032" d="M1583 103h2-2"/><path id="path3034" d="M1586 95h2-2"/><path id="path3036" d="M1588 95h7-7"/><path id="path2922" d="m1410 292 2-3 1-1 3-1 3-2-3 3q4 1 4-2c0-3 3 0 4 0q4 0 7 2 2 0 1 1v4q-10 1-21-1l1-1 3-1h-3l-2 2" class="landxx ru"/><path id="path2924" d="m1507 238-1 2h-4v-1h1v-1l-1-1v-1l-3-1h-1l-1-1h-1l-1-2v-1h-1 2l-1-1v-1h1v1h5v-1l-1-1h-3l-1-1-1-1-1-1v-1l1 1h1l3 1h1l1 1h2v1h1l-1 2v3h1l1 1 2 1v1l1 1v1zm-24-1h-3l-2-1-1-1-1-1h-2l-1-1v1l-1 2h-1l-1 1h-1v1l1 1 2 1h1v1q0-1 0 0l1 2h1l1 1v1l1 1v1l1 1h2v-2h1l1-1h1l1 2h2l1-2v-2h1v-2l-1-1h-1l-1-1-1-1h-1q0-1 0 0zm328-119-4 1-5 1 2 1-2 1v1q-2 0 1 1l1 1 4 1h-14l8 3-10-1c3 1-1 1-1 1h1l-3 1h-7l1-1h-12 1-4q-1 1 1 1h5l-9 1-10 1-2 1h-2l-3 2h-6c1 1 5 0 4 1h-2l1 2q-1-1 0 0l-6-1c2 1-1 1 1 1l1 1h3l2 1h1l-1 1-1-1h-3l1 1-1-1q1 2 4 1l4 2h-1l1 1h-6l-3 1h-15l-9 1q2 0 0 2l1 1 4 2q2 3 5 3t6 2l3 1 2 1h-7l-6-1v-1l-3-1-5-1h-5l-5 1q1 2 2 1l4 1q-3 2-7 0h-5l4 3 3 1q3 2 6 0l2 1q1 2 2 1v1h4c-2 3-12-4-12-1l-6-1-5-1v-2q-3-1-1-3-2-5-8-5c1 1 6 4 3 5l-4 2-1 1-1 2 8 4 3 2-1 2v2q0 3 3 4l2 3 6-1h10l5 2 3 3 2 1-2 2 2 2 5 1h1l2 1c-3-1-9 1-11-2v-2l-1-2q-1-2-4-2l-4-2h-6l-3 2 1 2c2 1 6 4 3 6q-2 1-1 4l-4 2q-3 1-2 2l-2 2-3-1h-6l-6-1-4-2h9l4-1q3 0 2-2h2l-1-1 4-3-2-3v-2q2-1 0-2l-2-1c-1 0-6-1-6-3v-2l-1-2-3-4v-3c-2-4-7-3-9-6l2-1v-4q0-3-4-4h-4l-4-1-8 1q2-1-1-1l-1 3v6l-4 2q-3 2-1 3l2 1q3 0 2 3l1 1 1 1q1 1-2 1l2 3h7l1 3 2 1 3 1h2v2l-1 2c1 3-3-1-4-1l-8-3-4-1-3-1h-4q-2 0-1-1l-8-2-9-1-5-1h-3v1h-1l-1 1 3 3 3 1c2 3-5 2-5 3l1 2h-3q-3-1-1-3s-4-2-2-2l-4 1v1h-3l-2 1h-3c-2 0-10-1-9 3l-3-1q0 2-1 0-2 2-6 1 1-2 4-2-3-1-1-3h-2l4-1q-5 0-11 3l3 1-3 1v-1h-4l-3 1-5 2q-3 2-6 1l2 2h-4l-3 1q2 0 1 2v3h-3l-4 1 1-1h-4l-3-2-3-1 1-3 8-1-5-4-5-2-7 1q-2-2-4-1l5 2q0 2 2 2l-1 1v6l4 1 1 3q-4 2 0 6l-3-3-2 1h-1l2-1-4-2h-4q-1-1-3 1-1 3-4 2l-4 3q-2 0-2 2l3 3 3 4-4-1h-3l-5-1h-3l2-1-6-2h-3l-2 2 4 4h6c-1 2 2 4-1 4h-3l-4-1q-2 0-3-2h-1l-1-1h-3l-3-1v-2h1l-3-2q1-2-2-2l2-3c2 0-2-3-2-3l-8-2 2-1h-4 3l-4-1h3l-3-1-3-1 1-1-4-1h6c-2 0 2 3 3 3h4l3 1h3q3 2 8 2l10 2 9-1q4 0 6-3 4-3 1-5l-2-2-2-1-3-2-3-2v1l-7-2h1l-7-3-9-3h-8l-3-1h-3l-1 1-2 2q0-2 2-2v-1q-2 0 0 0h-3v-1h-3l-3-1 1-1q3 2 5 0l-3-1-4-1 1 1-1 1h-5v1h-4q0 3-3 2l-1 2-5 1q2-1 2 2v3l5 1 4 3c1 2-6 4-4 7q4 3 7 8h-2v3l1 1v3h3c-3 2 1 3 2 4q1 2-3 4l9 5q3 0 1 2l-2 4-8 7-9 7 3-1h2v1h-1l4 3h5l2 2-5-1-3 2h-5v2l2 1q-2 0-3 3l-1 2v3l1 2 2 2q-4 3 0 4v4l3 3 2 4h6l1 2 5-1 5 3v5l3 4 2 2q2 0 3 2v1h3l1 2 2 1-4 3h-5l1 2 1 2 3 4q3 1 3-2h9l3 3 2 2-2 1 1 3 4 1 4 1 1 4q1 2 3 1t3 1l2 1 5-2 3 3 2 1h3l5 1 2 1 3 1h1c-1 1 2 3-1 4v2l2 1-2 1c0 1 3 2 1 3h1l-1 4h-6l-2 1-1 3q-1 2 1 2l1-1-1 1 4-1 3 1-5 2q-3 0-1 2h-5l3 3 3 2-2-1-1 2v-1q-1 3-3 3 0 3 1 1v2h-7l1-1 1 2-2 1q3 0 6 3h3l3 3 5 2 8 7c0-4 8-1 10 0l3 1h4l2 1h2c1 1 7 3 6 4 2 2 6-3 8 0h3l3 1v2l3 2 6 3 2 1 2 3h4l1-2 3-2-2-2-2-3-3-3-2-3v-3q-2-2 0-5l-1 3-1-1-1-3q-1-2-3-2l-2-3 1-2h1q3-3 1-8l2 2-1-2 2 1 2-1h2c-2-2 2-1 2 0l-1-1v-1h1l2-1v-1h1l-6-4h3l-2-3q-3-4-7-6l-3 1-3-3h1l-2-2-3-2q-1-2 2-4l-2-4q-1-3 2-4c1-1-1-4 2-4l5 5 4-1-1-2-2-4q3 1 4-1v-2l2-1 2-1 2-1 2-2v-1l4 1 3 1 1-1 2-1q3 3 7 2l3 2 3 2 3 2 1 2q1 1 1-2l-2-2q3 0 4 2l4 1q2 2 3-1l2-2h5l2 1h2c-1-3 0 0 2-2q3 0 3 2 2 3 4 2l3 1 2-1 1-2 2 2h2q3 0 5-2-1-2 1-3l-4-2-3-1-3-1-3-2 3-1 2-1 1-1-3-3 1-2h4l3-1-6-2c-3-1 1-1 1-2h-2l-2-1q2-1-1-2h2c-1-2 3 0 4 0l2-1 3 1c-1-2 3 0 3-2h5v-1h6l1-1c0-2 6-2 8-2l5-1 5-2v-1l2-2h3l3 1 4 1q3-3 4 0l2 2 2 2c-1 1 2 3 0 3q1 2 3 1h4v-2q1 2 3 2v2h2l-2-1c1-3 6 3 7 0l1 1-2 2 2 2q2-2 3-1h2l1 1q0-3 3-3 2 0 2-2l3-1 2-1 3-1h-1l1 2h-2q5 4 11 6l9 8 8 8 7 6 2-2v-2h1l2 1q2-1 1 1l2 1 2 1h6l2-1 2-1h1l8 5 6 3 3 3 5 1h3l1-1h1l1 2 3 2 2 1q3 1 5-2l2-1h4v-1l3-1-1-2 2-1 2-1 2-1 2-1 2-1 2-1q1 1 2-2c1 0 2 3 3 1l2 1 8 1 3 3 4 2h8l5 1 4 1 3-2 1-3q0-3-2-2l-2-3c-2 0-3-5-1-5q-1-2 1-2l1-3 7 3 9 2 7 1q3 1 4 4l2 2 2 2 3 1 3 1q6 0 11-2h6l4 1 4 2 5 1q2 0 3 2l3 2 9 2h10l2-1h2l4-1 4-1 2-3q3-4 9-2l4 2h4l5 1 5 2h4l3-3q3 1 3-2l-2-2v-10l1-4-2-3-3-1-3-1q1-3 4-5l8-1h10l2 1 2 1 4 1 2-1 3 2 3 2 2 1 2 1 3 2 3 3 3 3 2 2q4 2 7 6l3 3 2 2 4 3h4l3 1 4 1c-1-2 2 1 2 1l2 1 6 2c3 0 1 2 3 3q2 0 3 3l5 4h4l5-1q1-3 5-2l2-2h4l1 1 1 2 2 2-1 3v2l1 2 1 2v2q2 0 0 2l1 3v5c1 2-4 1-5 1l-4-2-1 3-2 1 1 2 5 7 3 6v2l-3 1 4 4q0-2-2-3h4v-3c2 1-1-3 1-3s0 2 2 2l1-2 2 4h3l3 1h2l7-5q2-2 2-5v-3l1-2 1-2v-2l1-3 1-2 2-7v-1l-1-2v-3l1-7 1-6-2-3-1-2-1-3q-3-2-2-4l-4-5-2-3v-3l-1-2 1-3-3-2-3-2c0-3-5-4-7-5q2-1 4 1v-1c1-2-3-2-4-3l-4-2-3-1-7-4-4 1-3-1 1 2 2 1q2 3-1 4v-4l-2 2q-2 2-4 1l1-3-5-1 2-2-3 1 2 1v2q-2 1-3-1l-2-2-1-2q-1-2-5-2h-6c-1-1-4-2-1-4l2-1v-2l2-2 1-1 2-4-1-2v-3l2-2 1-2 1-2q3 0 1-2l-1-3 2-2 1-3 3-3h16l2 1h3q-1-3 3-1l3 1h3l-1-1 5 1h3l-3-2h2q-2 0-1-2 3-1 6 1c1 0 7 2 6 0l6 2 5 1-3 1h-4q4 3 8 2v-1l5 1q-1-2 1-2l2-1c0 1 5 2 4 0h4c-1 0-5-4-6-2l1 1-3-1v-1s-4-3-1-2q-2-1-1-3l1-2 1-2v-4l-1-2 2-1v-1h6l3-1 3 1q1 2 2 0t2-1l2 3 1 1-1 1 3 2h3l1 2 1 1 3-1c-2-1 1-3 1-5q0-2 2-2h1l2 1v-1h1l-4-2q-3-2-2-4l-2-1q4-2 7-1l8 2h-3l2 1q-2-2-6-1-1 2 2 4l2 3 3 1v2l2 2-1 1h-2l-1 1-3 2 2 1-1 2v3q-2 0-1 1-2 3 0 5l1 3q-1-1-1 1l-1 1v2h-4v2l-3-1 3 3 2 3-1 3q-1-1-1 1l2 2 3 4q3 6 9 9l11 11c3 2 7 8 10 8l1 1 2 2 4 4 3 3 3 3 2-3 1-2q1-3-1-7l-2-2v-1l-2-2-1-1 2 1 4-2h1l2 1-4-3c2 0-2-2-2-3q-2-1-1-4 1-2 3-2h4v-2l-3-2-5-4-2-4c-1-1 2-2-1-3l2-1h1v2q2 3 4 1c1-1-4-5-5-5l-4-1-2-2-2-2v-3l-4-2q-3 0-1 2l-3-1-4-3c0-1-2-7 0-6l-2-1h2l-1-1-3-3-1-2 1-1h-1 6l2 1q2 1 1-1l-2-1h2l2-3 2 2c1 1 3 5 4 3v-4h2l-1-1q3 1 5-1h6l12 6q0-3-3-4v-1q3 0 2-2l2-1v-1l-1-1 2 1-1-1q2 0 0 0h1v-1h1l-2-1h3v-1l-1-2 2 1v-1l3-1h-1l3-1-1-1q2 1 4-1 1-2 4-2l-3-1-2-1 3 1q0-2 2 0l4 1 9 2-1-1v-2l-4-2-3-2-4-1h1l-4-2 2 1-4-1h2q-1-1 0 0l-2-1-2-2h-2l-4-3v1q-4 0-8-3-1-2-3 0h-4v-1l-4-1h4l4 1-4-2h-4q5-1 9 1 5 3 9 1l-1 1 3-1 1-2 1-1-1-2-2 1c-2-1 2 0 2-2l-6-2-4-3h3l-3-1h2-1l4 1v-1l2 2 4 2 4 2 5 1 2-1h2l11 3 4 2h2l10 3c2 1 6 1 2-1q3 3 6 3l-2-2 4 1q-2-2-6-2 1-2-2-1l2-1 1-1q-2-2-5-2h3l-2-1h-2l-5-2 5 1h5l2 1-6-3 7 2c0-2-3-3-1-4l-3-1q2 0 0-1l-2 1c0-2-7-3-8-3l-5-2-7-1h-3 4-4l1 1-2-1h-2l-1-1h-5s9 2 7 4l4 1 2 2c-1 0-5-3-4-1l-5-2s-3-1-1-1l-6-3-4-2h1l-6-2-8-2-4-1h-3l-2-1h-1l-1-1q-3 1-5-1l-5-1h2l-14-3-5-2q-2 1-5-1l2 1q-4-2-9-2l-10-1-10-1h-4l-5-1 2 1h-3l-4-1-12-1 4 3v1h3l7 4-1 1 2 1-2-1 2 1h-7l-3-2-10-3c-1 0-6-4-7-2q-2 3-6 1l-12-1h-12l-5 1-5-1-5-1v-2h-1 1l-6-3-7-2-14-2-14 2q-7 1-13-1h2l-7-3h-4l-2 1q2-1-1-2h-3c-2-2-7 1-8-2h5l-2-1-16-3q-2 1-2 3c0 2-5 2-6 1l-2-1h5l-2-1-1-1 3 1 2 2q1-4-3-3h-11 2q1-2 5-1l4 1 3-1q-9-2-19-2h-10l-9-2 2 1 3 2h-7q-2 2 1 3l2-1h3l-2 1 1 1h-2l8 3h-11q1 2 4 2h-2 1-2l3 1-13-3-4-1-3 1v2q-2-2-6-1l-7-2q-3-3-4 0l4 3c-2 1 1 5-3 4l-6-2-8-3-3-1-2-1h3l-5-2 3 1c-1 2-8-2-9-3l8 1q-2 0 0-1l-5-2h-4 2v-1h1l-3-1h2l-5-1 2-1h-2v-1h-5l-3-1-5-1 1 1h-3q-3 0-1-1l-3 1-1-1h-2l-5-1-4-1 1 1h-2q1 3 4 3c-2 1 1 2-1 2h-12l-9-1q-4 1-7-2h2q-5-3-11-1h-18q2 2 4 1h-3q-2 0-2-2l-5-2 2 1q-2 2-6 1c-1 0-6-2-3-2h-8l-1 1c1 3 5-1 8 1q-4 2-8 1l1 1h-2l-3 1-2 1h-4l-3-1v2q-2 2-4 1l2-1 1-2 2-1 1-1 4-1 1-1 4-3h-2l3-1 4-2h2v-1h2l2-2c2-2-2-3-3-3h-3l-4-1 9 1-2-2h-2q-3-3-5-2l2 1h-2l-2-2h-4c0-2-9-3-10-3h-6l-7 1c2 1-1 1-1 1h-6q3-1 1-3h-9l1-1h-9 5q3-2 4-1l-6-2h-6zm501 65-5-1zm-333 98h2l1 3 2 5 1 3 2 2v4c-1 1-1-2-3-1v2l3 1-3 3c1 4-4 2-5 5l-1 1h-2q-2 1 0 3-1 4-6 4-4 1-9-1l4-1 3-1 4-3 1-3 2-1v-2q-1-1 1-3l3-4v-6l-1-6v-3z" class="landxx ru"/><path id="path2930" d="M1499 207h-1 1"/><path id="path2932" d="M1511 101h8l4-1h6-2l-2-1-4 1-10 1"/><path id="path2934" d="m1525 104 4-1h2l-1-1 5-1 7-1h-6l2-1h-4 2q-3-1-6 1h3l-5 1-5 1h4-2 2-7l7 1-2 1"/><path id="path2942" d="M1532 195h1-1"/><path id="path2946" d="m1536 104 2-1h-3l1 1"/><path id="path2948" d="M1536 98h2-2"/><path id="path2950" d="M1540 104h-3 7-4"/><path id="path2954" d="M1547 103h7l-4-1h-1l-3 1h1"/><path id="path2956" d="M1550 101h2-2"/><path id="path2958" d="M1553 97h1-2 1"/><path id="path2960" d="m1553 99 4 1h5l-9-1"/><path id="path2962" d="M1553 101h3-3"/><path id="path2964" d="m1554 98 9 1q4 2 7 1l-8-2h-8"/><path id="path2968" d="M1557 101h2-2"/><path id="path2970" d="m1559 97 4 1 7-1-8-1 2 1h-6 1"/><path id="path2972" d="M1568 176q-3-2-6-1l-3 1 1 3 5 1 3-1s2-3 2-1q1-2-2-2"/><path id="path2974" d="m1559 103 3-1-3 1"/><path id="path2978" d="M1560 100h7-7"/><path id="path2980" d="m1562 98 10 1-10-1"/><path id="path2984" d="m1564 103 6 1q-2-2-6-2l1 1h-1"/><path id="path2986" d="M1570 96h2-8 6"/><path id="path2992" d="m1569 95 6-1h-7v1h1"/><path id="path2994" d="M1573 103c0 1 4 0 2-1h4l-11-1 5 2"/><path id="path2996" d="m1569 101 3-1-3 1"/><path id="path2998" d="M1573 152h3l-2 1h2-2l1 1-1 1v1h-4q-2 2 1 4h3l5 1h1l1-1q0 3 3 1l-2 1 4 1h-3q2 1 1 2h-1l4 1h3v-1q1 2 4 1h3l4 1-2-1 6 1-3-1 2 1q3-1 1-1 2-1-1-1l-3-1-5-2-6-5v-2l-2-2h1-1 1v-1h2l-3-1q3 1 4-1h-3l3-1h-3 4l-5-1-7-1-6 1 1 3q-2-2-4 1h1"/><path id="path3004" d="M1572 99c0 2 4 1 4 0h-4"/><path id="path3008" d="M1572 97h4-4"/><path id="path3010" d="M1573 98h1-1"/><path id="path3014" d="M1575 97h4-4"/><path id="path3018" d="M1582 145q-2 0-2 2h-1 10l2 1q2 1 2-1 2 1 2-1l-3-1h4l-5-1h3l3 1c2-1-3-3-3-3q1 0 0 0l4 1v-1h1l1-1-3-2 3 1q2-1 1-2 1 1 0 0h4-2 2q3 0 1-1h1l-3-1 2-1 2 1 2-2h2l4-1 4-1 3-1q11-1 20-5l-2-2-5-1q-5 0-9 2l2 1h-5l-2 1h-5l-7 1h-4q-2 0-1 1h-2 1-4 2l-5 1-3 1-2 1-2 1 1 1h-4v1h-5c-1 2 6 1 3 1l2 1h-3l3 1h2-6c-1 1 3 2 4 2h-5l3 1h-4l5 1h-4q-3 1-1 1l-6 2h9-2"/><path id="path3020" d="M1580 164q1-2-2-3l1 1q-1-2-3 0l4 2"/><path id="path3022" d="m1577 104-1 1h4l-3-1"/><path id="path3024" d="M1579 97h-1 4-3"/><path id="path3026" d="m1579 101 8 1 5-2-11-1q1 0 0 0l-3 1 1 1"/><path id="path3028" d="M1579 104h5-5"/><path id="path3030" d="M1581 98q4 2 7 0h-7"/><path id="path3040" d="M1593 99q3 2 6 1l7-1q-2-3-6-1l-1 1h-6"/><path id="path3056" d="M1610 180h3-3"/><path id="path3058" d="m1614 171 3 1h2l2 1c1 0 6 0 3-1l-5-3-5-1-2 1h2-2l2 2"/><path id="path3060" d="m1620 177-3-1 3 1"/><path id="path3062" d="m1657 178 4 1q-1-2-4-1"/><path id="path3064" d="M1662 175h2-2"/><path id="path3066" d="m1662 147 1 2h1l8-1h-2l-1-1h-7"/><path id="path3070" d="M1669 147h1-1"/><path id="path3076" d="M1689 195h-5l4 2q3 0 1-2"/><path id="path3078" d="m1686 150 4 1q-2-2 0-2-3-1-4 1"/><path id="path3082" d="m1690 147 3-1-3 1"/><path id="path3084" d="m1692 195-1 1 4 1-3-2"/><path id="path3086" d="m1694 146 4 1-4-1"/><path id="path3088" d="m1696 149 2-1-2 1"/><path id="path3090" d="M1704 154c1 2 6 1 7-1l-4-1-3 2"/><path id="path3092" d="M1704 120h2-2"/><path id="path3094" d="M1705 139h2-2q2 0 0 0"/><path id="path3096" d="M1710 130h4-4"/><path id="path3098" d="M1711 150q1 2 5 2l-2-2h-3"/><path id="path3100" d="M1715 133h-1q-1 1 1 1l2 1-1-1h1l-2-1"/><path id="path3102" d="M1717 130h2-5 3"/><path id="path3104" d="M1716 146h-1 1"/><path id="path3108" d="M1725 142h-1 2-1"/><path id="path3110" d="M1726 142h4-4"/><path id="path3116" d="M1733 143h2-2"/><path id="path3118" d="m1734 139-1 1h2q-1 0 0 0l-1-1"/><path id="path3120" d="M1735 139h-1 1"/><path id="path3124" d="m1736 137-1 1h3l-2-1"/><path id="path3126" d="M1739 139h-3 3"/><path id="path3130" d="M1740 122v1-1"/><path id="path3132" d="m1740 140 1-1-2 1h1"/><path id="path3134" d="M1741 142h-1 1"/><path id="path3138" d="m1743 136-3 1h4l-1-1"/><path id="path3140" d="m1741 122 2-1h-2v1"/><path id="path3142" d="m1741 137 2 1-2-1"/><path id="path3148" d="M1745 122h1-1"/><path id="path3150" d="M1746 143h-1 1"/><path id="path3264" d="M1693 195q3-2 5 1-2 1-5-1"/><path id="path3342" d="m2166 165-2-1 2 1"/><path id="path3344" d="M2215 171c-1 2 10 3 10 3q0-2-3-2-3-2-7-1"/><path id="path3346" d="M2263 160q-3 2-1 4l3 1 4-1h5c1 1 6 0 7-1l-8-3h-10"/><path id="path3360" d="M2379 210h3q-2-2-3 0"/><path id="path3362" d="M2380 211h1-1"/><path id="path3364" d="m2288 247 1 1-1-1"/><path id="path5504" d="m2192 388-1-1 1 1"/><path id="qr" d="m1508 361-1 1v-1l2 2-5 2-3 3h3l3 1c2 1 2 6 0 5 2 4 6 1 8 0l3-2 3-1 1-1h2l2 1 2-1 1-2-4-1h-2v1h-2l-1-1-2-2 2 4c-3-1-1-2-2-3l-3-3-1 1v-1h-3q0-2-1-1zm6 2" class="landxx coastxx ru ua qr"><title id="title1257">Crimea</title></path></g><g id="ht" class="landxx coastxx ht"><title id="title1261">Haiti</title><path id="path5512" d="m714 598 4 1c-2 0 1 1 1 1h4l2-1h2q-2-2-2-5t-2-4q-4 1-2-2 4-2 7 0 4 0 5 2v3l-1 2v2l-2 2q2 2 1 5-3-3-6-2c-3 1-8-2-9 1-1 2-2-2-4-2s0-4 2-3" class="landxx ht"/><path id="path5516" d="M724 598s-5-2-3-2q2-1 3 2"/><path id="path5518" d="m726 587-1-1 2 1h-1"/></g><path id="ba" d="M1386 370h3q2 1 2-1h3l5 1h4l3 1 2 1h3l-1 2q-1 3 2 4c2 2-1 1-1 2l2 3h-4v3q-2-2-2 2c-3-1 1 4-1 4l-4-2-1-1-2-1q1-2-2-3l-4-5-3-2-1-3-2-2-1-3" class="landxx ba"><title id="title1268">Bosnia and Herzegovina</title></path><g id="in" class="landxx coastxx in"><title id="title1271">India</title><path id="path5460" d="M1978 654v1-1"/><path id="path5450" d="m1975 666-1-1-1 3q2 2 2-2"/><path id="path5452" d="M1975 648v6c-1 0-2 6 1 6q-2-1 0-2l-1-3 1-2 1-2-1-3v-6l-1 6"/><path id="path5454" d="M1975 647h-1l1 1v-1"/><path id="path5456" d="M1977 680q1 1 0 0"/><path id="path5458" d="M1977 656h1-1"/><path id="path5462" d="M1982 690c-2 1 2 2 0 0"/><path id="path5464" d="M1983 689v1-1"/><path id="path5468" d="m1985 695-1 2 1-2"/><path id="path5470" d="M1986 697c-2-1 0 3 0 4v-4"/><path id="path5490" d="M1781 554q1-2 3-2v-3h5q2 2 5 1l1-1 3-1q1 3 4 0-3-2-1-2l-3-6q0-2-2-3-3 1-3-3l-1-4q-2 0-5-3l2-5 2-3 2-2 3 3 3-1 3-1 3-3 3-5 4-5q0-4 2-5l2-1-1-2 2-4 3-2q-2-1-1-3l-1-3q1-3 4-4c2-2-3-2-4-2l-1-3h-3v-2q-3 0-2-2l-1-3v-4l-2-1q1-1-1-2l1-3h5l6 2 4-1 4-1 2-3 3-2 1-1h1l2 2 2 4 7 4-1 1v3l2 4 4 2v1l1 2-1 2q-2 3-3 1-1-3-4-1l1 2 2 2 2 4 1 3 1-1 2 1 3 3h3l2 1v1l2 2 5 2-4 5v4l-1 3q2 3 3 1l4 2 4 3 4 2 4 2h2q1 2 3 2h3q2-1 3 1c-1-2 5 0 5 0l3 3 3 2 3-1q1 2 3 2l4 1h4q0 2 3 1h3l2-2-2-4v-7l4-1c3 1 0 4 1 5l1 1v2q2 3 5 2l3 1h2l2-1 6 1 2-1h4c2 0-1-1 0-3 0-3-3-1-4-3q-1-2 1-2h3q3 1 3-2l3-4c0-3 3-1 5-3l3-3 1-1 3 2 1-1 2 1 1-1 3-2 3 2q-2 1-1 2l2-1 2 3-2 3 2-1 4 1 2 2 1 1-2 2q-1 4 2 6-3 0-4-2l-5 2-2 2-1 1v1q-2-1-2 1v2l1 2-1 2-2 5 1 2-3 10-3-1h-3l1 6-1 2v7q0 4-3 1v2l-5-15h-2v5l-2 1-2-3v2l-2-5 1-4 2-1h2q2-2 2-6h1l-4-2h-9c-2 0-7 0-7-3 0-1-1-6-3-6v2l-3-2-2-2 1 2-3-1v-1l-2-2-1 1 2 1q-4 2-1 6l2 2h2l2 3h-3l-1 1q0 2-2 1-1 1 1 4l3 1 2 3-1 3 1 1 1 2h1v2l1 3 1 3v4l-1-1 2 3q-2 1-2-1l-1 1v-4l-1 2v-2 5l-1-3v3-1c-1-1-1 2-1 0v1l-1-4-3-3 2 3q-1 3-5 4-2 0-3 3t1 5l-1 1-1 2q-1 3-3 1l1 2-6 2q1-1-1-1-2 1-1 3l1-1-2 2-4 6-4 5-4 4-5 3-2 3 1 2q-2 4-7 3l-1 2-1 3-1-2-1 3c1-3-3-2-3 0q-2 2-2 6l1 5 2 8-1-1h-1l2 2v5l-3 7q1 3-1 6l1-1 1 4v5h-2l-2 1v1l-1 3q-2 2 0 4h1l2 1q-4-2-8 1c-3 1-1 4-3 6l-3 2q-2 1-4-1l-4-6-2-3-1-6 1 3c0-2 0 1 1 1l-1-3-1-2q0 2-1 0l-1-2-2-6-4-8-5-11-1-4-1-3q-2-1 0-2-2-1-2-3-3-1-1-2l-2-2-1-2v-1l-1-1-1-2-3-10-2-4-1-4v-3q-3-2-1-2l-1-3h1l-1-1v-2 1q-2-3 1-2-2 0-2-2l-1-2v-9l-1-3h-1v-4l3-2c-1 2-6 1-3-2q-2 1-1-1l2-1-4-1-1 1 1 1-2 1 1 1-1 1q4 1 1 4l-1 2-3 1q-3 3-6 2l-6-4-7-8q-2-1 0-3l1 1h2q3 1 5-2l1-2v-3l-1 2-3 1-2 1-3-2-4-1-1-3c-3-1 0-3 1-4l-4 2v-1" class="landxx in"/></g><g id="cn"><title id="title1286">China</title><g id="cnx" class="landxx coastxx cn cnx"><path id="path2726" d="m2134 419-1-1 1 1"/><path id="path2730" d="M2143 420h-1 1"/><path id="path2740" d="M2158 484c1 1 4 5 6 3q-3-3-6-3"/><path id="path2744" d="M2167 516v1-1"/><path id="path2748" d="M2169 500h2q-1-2-3-1l1 1"/><path id="path2750" d="m2169 497 1 1-1-1"/><path id="path2752" d="M2170 503v-1 1"/><path id="path2734" d="M2147 555h1-1"/><path id="path2742" d="M2162 539v-1 1"/><path id="path2766" d="m2157 534 2 1-2-1"/><path id="path2736" d="M2152 547v1-1"/><path id="path2710" d="m2088 592 1 4 1 4 4 1 4 1q0-3 2-1 0-2 2-3l1-4q2-2 1-4 2 0 1-3-3-2-3 0h-1q-2-2-3 0h-4l1 1-3-1q-1 2 1 2l-5 3"/><path id="path2712" d="m2098 578 2 1q1-3-2-1"/><path id="path2714" d="M2100 576v1-1"/><path id="path2716" d="m2109 573 1-1-1 1"/><path id="path2718" d="m2115 572-1 1 1-1"/><path id="path2720" d="M2116 573v-2 2"/><path id="path2722" d="m2119 561 2 2-2-2"/><path id="path2724" d="m2120 563 1 1-1-1"/><path id="path2708" d="m1797 418 1-1-1-3 3-1q1-2 3-2l-1-2 3 1 2-2 2 3 4-1q3 0 2-4l2-1h5l2-1 2-3 7-4 2-1q2 0 1-1l-2-4 2-2-1-1q0-2 2-1l-1-3-2-3-3-5-1-3c-1-1-5 0-4-2l4-1 5-2 4 1h3q2 1 2-1l-3-2v-12q0-3 2-2l3 2h6l3 1 3-2c1-1-3-6-3-7v-4h3q3-1 2-5l2-1h4l1 1 1 2 2 2q2-1 4 2t6 2c2 0 4 3 5 1l4 3 3 3 3 4 2 2 1 5v4l4 2 4 1 5 1h5l8 2 2 1 4 2 3 1q2 0 2 2l3 3 3 3 4 3 2 2h5l11 1h5l5-1 6 1 5 1 4 3 6 1 10 2 3 1 3 1 9-5 5-2h6l9-1 4-2 2-4 3-2 1-2h1c1-2-5-4-6-6v-2q-1-3 2-4 2-1 9 3h3l3-3 1-2h3q4-1 6-4v-3q-1-2 3-2l2-1h2l3-2h4l2 1h3c3 0 0-3-1-4l-12-7q-4-2-6 1c-1 3-4-1-6 0h-3l-3 1c0-1-4-3-3-4l1-2-1-2v-10l7 2q3 1 4-2l4-2q0-2-2-2v-8q-1-2 1-5 1-2-2-4-1-3-3-2l-3-1 4-5 8-1h9l4 1 5 2c-1-2 6 0 6 1l3 2 1 1 2 1 4 3 3 3q1 2 3 2l3 4 4 2 3 4q2 0 2 2 3 4 8 4h3l5 2c-1-2 2 1 3 1l4 2 4 1 1 2 2 1q2 1 2 4l5 3h5c1 0 5 0 4-1q1-3 3-3l2 1 1-2 3-1 3 1 1 3q2 1 2 4l-1 1v2l1 1 1 3q2 4 0 4l1 3v6l-6-1-3-1-1 3-2 1 1 2 5 7q3 3 3 7v1l-3 1 4 4-6-4q-2-3-3-2l1 5h-2q0 2-2 3l-5 1q3 1 4 4h-6l-2-1-3-2-2 1v4l-1 3-2 1-1 1h-1l-1 2q-3 0-3 4-1 3-4 1l-2 1-1 1-3 1-2 3-1 2-2-1c1 1-2 4-3 1l3-1-1-2 2-1-6-1 2-1q-2-2 1-3l1-4c0-3-5-2-5-5q-1 2-3 1-3 0-2 2l-2 3-4 3-2 2 1 3-5 3-4-1q-2 1 0 4 1 3 5 4l2 1 2 1v-2q4 1 4 3 0 3 2 5l4 1q3 0 2-2s3-2 1-2l3-2 4 2h1l2 1 3 1 1-1 5 1-1 1 1 2-1 2-2-2v1h-2l-1 1-3 2h-2q2 0 1 2h-1v2l-1 1-2-2h-1l2 2c-2 1 0 4-3 4l-1 4 1 3 3 1 5 3 3 4 4 5 3 4 4 3 1 2 2 1 3 3-5-1-4-2c-2-1-3 2-5 1l-2-2-2-1v1h2l-1-1 1 2 4 1 1-1 2 1 1 1 2 1 5 4q3 1 3 3l-1 1-3 1-1 2-1 1h-2l-2 1 2-1q1 2 3 2h-1l4-1 3 2 4 1-2 2-1 1h-1v1l3-1v-1l1 2v2l-1-1v1l-1-1h-1v2l2 1-1 1q2 0 1 1l-4-1 2 1 2 1v2l-1 2-1-2-1 1c1 0-1 4-3 1l2 2v4l-1 2v1l-2-2c0 1 3 3 1 2l-1 2q2 2-1 3v-2 1l-1-2-2 1 1 1 1 2h1q1 1-1 2l-1 2-3-2 2 2h3l-1 2 1 3h-1l-1-2-1 2 1 1-1 1-2-1q0 2 2 2l-2 1v1l-1 2-1-1q0 2-2 1l-1 1h-2 2l1 1-1 1-1 2-1-1v3h-2l-2 2h-1q0 2-2 1l2 2h-2q1 2-1 2h-2c1 1-3 2-3 0h-2l2 2h-1l-2-1-3 1q2 1 0 1v-2l-2 1 1 2h-6q-2-2-2-5-1 2-1 0h2-3q1 2-1 1l2 2h-1q2 1 2 4c-1 2-3-2-3-3l2 4-1 1-1-2-1 3q-2-1-2 1-2 0-1-1l-1-1v2l-4-1q2 2-1 1 1 2-2 2l-1 1h-1l-3 1v-1 2l-2-1v2q-2 0-1 2h1v1l2 3q-1 2-4 1v-1l-1-3-2-1v-2l1-2-1-2v1l-2-2v1l-2 1q-1 1-2-2-1 1-1-1h-1l1 1-2-1-1-1q0 1 0 0v3l-1-1-1 2-2-2q-3 2-4 0v1l-3-2v-1l-3-1-1-5c1 1 1-4-2-2l-2-1h-3l-4-4-3 2v3q-3 2-4 0l-2 3-2-2q-1-1-1 1-2-2-3 0-2 2-3-1-3-1-4 2h-1l-1 1-1-1c-2 0-1 4-1 4l2 3v2l1 2h-3l-2-1-1-4q-2 3-5 3h-2v-2c-3 0-1-2-2-3l-5-1v-3q-1-3 1-4l-3-1-3-3-1-1q1-1-1-3l1-2h-6l-3 2v-4l-1-3q-1-1 1-1v-4c1 2 2-2 2-3 2 0 0-1 2-2h1l-1-2 1-3-1-5-1-4-3-2v1l-2-3-1-2-5-3v2l-1 1-1-1-2-1-2-1-3 1 1-2 1-1-2-3-2 1 1-2-2-2-3 1-1 2h-4l-2-2-2 1-3 3-4 1-1 3-3 2q1 3-2 3l-4 1h-1v-2l-3-1h-7l-1-2-4 1-3 4-2 3-1-5q-2-2-5 0l-6 1-4-2h-2v1l-3-2-1 2-3-4c0 2-4 1-4 0v-2h-3l-5-3q0-4-4-2-2 0-3-3l-5-2-6-5h-5q1 4-2 1l-5-2-2-1v-2l-2-1h-3l-4-4c-1-1-2 2-3 0v-2l-1-3-2-2-1-3q2-1 3 1h2l2-2q1-2-1-2l-1-3-4-2-2-6s3-1 1-1l-5-3c-3-2-2-5-6-7-2 0-9-1-9-4l-3 1-2-3v-2l-2-3-3-1q-2-2-4-1l-4-1c-1-2 3-1 3-2q2-1 0-2v-2l-1-2-1-1-1-3-4-2q-1 2-4 0v-2l-2-2v-3" class="landxx cn cnx"/></g><g id="hk"><title id="title1309">Hong Kong</title><g id="hk-" class="landxx coastxx cn hk"><path id="path2764" d="M2124 565h2v1l1-1v2q-3 0-3-2"/><path id="path2762" d="m2123 568 2-2-2 2"/><path id="path2760" d="M2126 567v1-1"/></g></g><g id="mo"><title id="title1317">Macao</title><path id="mo-" d="M2121 568v-1 1" class="landxx coastxx cn mo"/></g><g id="tw" class="limitxx coastxx cn tw"><title id="title1322">Taiwan</title><path id="path2738" d="m2154 547-1 1h1v-1"/><path id="path2746" d="M2168 556v4l2 4 4 3 1 2 1-3q-1-2 1-3 2-5 1-10v-2l1-2-1-4 1-2q-2-3-4-2l-3 2-1 3-2 4-1 6"/></g></g><g id="ca" class="landxx coastxx ca"><title id="title1328">Canada</title><path id="path3776" d="m450 289-1 1 1-1"/><path id="path4128" d="m446 290-3 2 3-2"/><path id="path4804" d="M437 329h-1 2l2 1-1 1h3l-5 3 4-1-1 1 2-1-2 2 2-1v1l-2 1q2 2 4 1h1l3-2-4 3v2l2 1 5 2 2-1 1-2-1 1v-4q2-1-1-3-3 0-2-2v-6l-5-1-5-2q-1-2-4-1-4 1-2 3h2s3-1 1-1h2l-2 1c1-2-5 2-2 1l-2 2h5l-1 1"/><path id="path4806" d="m443 307 4-3-2 3q3-1 4-5-2-1-5 2l2-1h1l-4 3"/><path id="path4808" d="m448 305-3 4 3-4"/><path id="path4810" d="m448 311 5-2q-5 0-8 3l3-1"/><path id="path4812" d="m449 299-2 2q2 1 2-2"/><path id="path4814" d="m449 305-1 1-1 1 2-2"/><path id="path4816" d="M450 325h-1 1"/><path id="path4818" d="M450 332v1-1"/><path id="path4820" d="M450 329q2-1 1-3l-1 3"/><path id="path4822" d="M452 325h-2 2"/><path id="path4824" d="m452 325-1 1v1q2 0 1-2"/><path id="path4826" d="m453 327-1 1 1-1"/><path id="path4828" d="m454 333-2-3 2 3"/><path id="path4830" d="M453 333h1-1"/><path id="path4832" d="m454 326-1 2 1-2"/><path id="path4834" d="M454 338v1-1"/><path id="path4836" d="m455 326-1 1 1-1"/><path id="path4838" d="m455 337 1 1-1-1"/><path id="path4842" d="m456 331-1 1 1-1"/><path id="path4848" d="M459 334h-1 1"/><path id="path5230" d="m860 254-2 1q1 1 2-1"/><path id="path5010" d="m729 233 1-1-1 1"/><path id="path5042" d="M757 302h-4q-4 0-2 2l6 2v-4"/><path id="path5048" d="m764 311-3 2 3-2"/><path id="path5052" d="m765 302-1 1 1-1"/><path id="path5054" d="m764 302 1-1-1 1"/><path id="path5074" d="m777 280 4-2-3 3 2-1 3-2-1 2 3-4-3 4 3-3v-2l-4 3 2-3-6 5"/><path id="path5090" d="m783 272-1 1 1-1"/><path id="path5092" d="m784 279-2 2 2-2"/><path id="path5094" d="M783 272h-1 1"/><path id="path5098" d="M788 276q-2 0-3 2l3-2"/><path id="path5602" d="m846 346-1 1 1-1"/><path id="path5606" d="M846 345v1-1"/><path id="path5598" d="M820 373v1-1"/><path id="path5600" d="m823 376-1 1 1-1"/><path id="path5126" d="m796 249 1-1-1 1"/><path id="path5150" d="M813 241h-4 4"/><path id="path5104" d="m786 267 1-1-1 1"/><path id="path5078" d="m778 277 5-2-5 2"/><path id="path5172" d="M823 105h3l1 1 3-2-2-1-5 2"/><path id="path5194" d="M836 115h-1 1"/><path id="path5200" d="m841 104 1 1h-2l1 1h2l7-1c-3 3-7 1-10 2l2 1h-1 7l-2 1 5-1q-1 0 0 0l2-1 1 1 3-1-3 1h7l-8 1h11-11l-10 1q1 2 4 2h-4l4 1h5-7q2 2 5 2l3 1 2-1q3-1 4 1 0-2 2-3c-1 3 3 3 4 1l2-1h4l-1-1 5-2-3 2c1 2 5-2 7-2q3 1 5-1h6q-1-3-3-2c-2-2-4 1-7 0l6-2h-3l3-1h-4l3-2h-4v1q-1 2-3-1h1c2-1-3-1-3-1h-3q2-1 0-1l-2-2-3-1h-6 5q-4 2-7 1h2l-2 1-3-1-2 1h-2l2 1h3-2l2 1h-11l2 1h-6q1 0 0 0l6 1h-2 7-4l1 1-10-1v1"/><path id="path5218" d="M853 100h-4 4"/><path id="path5242" d="m869 114-3 1 3-1"/><path id="path5262" d="m884 110-4 1 7-1h-3"/><path id="path5032" d="M760 114h5c2-1-3-2-4-2l-8 1-8 1h3l5 1h3l4-1"/><path id="path4926" d="m627 153-4 2-4 2h4c-2 0 1 1 1 1l2 2v3q5 1 9-2h6l5-3 13-5 7-2 7-1 7-2 6-1 3-2-2-1-1-2-6-1-7 2 2-2q-3 0-5 2l3-2-6-2-9 1h-9c-1 1-5 4-2 5l-13 4v2h-3l-1 1-3 1"/><path id="path4960" d="m686 130 4-1 3-2v2l3-1 3-1-1-1 5-1 3-1-4 3c3 2 5-1 8-1l4-1q3-1 1-1l3-1-1-1 7-1q-3-3-7-1h1l-4 1h-5l-13 2-11 3-5 1-7 2 3-1v1l-2 1 6-1h3l3-1-1 1h1l-2 1h2"/><path id="path4962" d="M674 129h-1 2-1"/><path id="path4990" d="m683 130-4 1 4-1"/><path id="path4994" d="m701 129-7 1-7 2h5l3-1 6-2"/><path id="path4996" d="m699 135-1 1q2 1 3-1h3l-1 1h4s3-2 1-2h4l1-1h3l-3 1s-3 0-1 1h-2 4l5-1-1 1 9-1q-6 3-12 2l-6 1-5 1c2 5 12 1 15 1l9-2 9-1h1q2 1 4-1l-1 1q4 2 8 0l7-3 4-3-3-1c-1 0-5 1-3 2h-2l1-1-6 1 3-1-3-1 3-1v-1l3-3q-6 0-10 2l-3 1 3 2-3 1h-3l4 1q-2 3-5 2h-8q0-3 2-2h-4l3-1q-3-3-9-2l1-1c-1-2-8-1-10 1h5-6l-6 2h9l-7 1-8 1h5l7-1-17 3q2 2 6 1h-1 1"/><path id="path5002" d="m725 125 4-1h-8l4 1"/><path id="path5006" d="M729 130h-1 1"/><path id="path5024" d="m757 117 3-1h-11c-2 0-12 0-11 4l2 1 4-1q5 1 10-2h-2l5-1"/><path id="path5044" d="M762 136q3-1 1-3l-6 2q3 2 5 1"/><path id="path5056" d="M768 129c2 0 9 2 10-1h-5l-5 1"/><path id="path5058" d="M778 129h-5l-4 1q5 1 9-1"/><path id="path5060" d="M771 130h-2 2"/><path id="path5062" d="M770 127q4 1 8-1h-4c2-1-2-1-2-1l-2 2"/><path id="path5064" d="M779 130q-5-2-9 1l9-1"/><path id="path5068" d="m775 122 3-1-1-1q1-2-2-2l-2 2v1l2 1"/><path id="path5076" d="M779 122h-2 2"/><path id="path5100" d="M786 113c0 3 9 1 11 1-3 1 2 1 3 1l3 1v1l4 1 4-1q2-2-1-2l4-2h-2v-1l-4-1h2l-3-1-5 1 1-2-4-1q-5-1-10 2h3l-3 1 7-1-3 1 4 1h-4l2 1h-9"/><path id="path5102" d="M794 125h-4l-4 1 8-1"/><path id="path5122" d="M797 117q-2-1-5 1h7l-2-1"/><path id="path5124" d="M795 125h3-3"/><path id="path5152" d="M812 123h-2 2"/><path id="path5164" d="M817 130q-2-1-3 1l3-1"/><path id="path5166" d="M816 129h-1 1"/><path id="path5168" d="m820 118 2-1h5l5-1-1-1 4-1-6-1-2-1-3-1c-1 0-5 1-3 2h-2v2l4 1h-5l2 1v1"/><path id="path5066" d="m781 136 4-1q-1 1 2 1h4l2-1h1l-1-1 3-1c-2 0 1 0 1-1q1 2 3 0l-2-1 2-1 2-1 1-1 1-1-2-1c2 0-1-1-1-1h1l-3 1-2 1v-1l-3-1-3 1-2 1h3l-3 1h4l-4 1 2 1h-3c1-1-2-1 0-1h-1l-1-1q1-1-1-1-2-1-5 1h4l-4 1h2l-1 1 1 1h-8q-2-1-2 2l9-1 11-1-3 1h-3l-2 1h1-4q2 1-1 1h3l-3 1 1 1"/><path id="path5072" d="m786 142-5 1h-5l1 1h4l5-2"/><path id="path5084" d="M784 132h1-4 3"/><path id="path5088" d="M783 141h-2 2"/><path id="path5110" d="m792 139-4 1 4-1"/><path id="path5132" d="m812 132-8 1h1l-2 1c2 0-1 0-1 1l-3 1h2q0 2 2 2h7c4 0 9-6 2-6"/><path id="path5134" d="m801 138-2 1h2v-1"/><path id="path5138" d="M806 132c-1 0-6 0-6 2l4-2h2"/><path id="path5156" d="m822 128 5-1 1 3q-1 2-3 2l-4 3h2c-1 1-4 2-1 3q3 1 5-1l-1 1v1h3q4 1 7-2v1q1-2 4 0l-4 1h7q2 2 3 0h7q0 2 3-1l-1 1h7l4-2c-2 3 4 3 6 3l5-1 5-1-1-1h6q-2-2-5-1c1-2 6-1 7-2q-2-2-3-1l1-1h-5l1-1c-3-2-8 1-12 0q-3-1-7 1l-8 1h2l-5 1q1-2-2-2l-3 1c1-2-3 0-3 0l-1-1-2 1-1-1h-3 1l3-1h-2q0-2-1-1h-6l6-1h-3l-2-1q2 0 0 0 3-1 6 1-1-1 2-1h3q-3-2-9-2h5q-3-2-6-1h-5l-5 2 4-2c2-1-3-1-4-2h-12l1 1-3 1h5l-3 1 5 1-3 1 3-1 4 1"/><path id="path5170" d="M838 118h-9q-3-1-8 1c1 2 6 1 7 1q6 1 10-2"/><path id="path5202" d="m844 126 3-1c-1-2-6-1-3 1"/><path id="path5204" d="m844 121-1 1 2-1h-1"/><path id="path5208" d="m849 122 3-2-4-1-2 1c-2 1 3 2 3 2"/><path id="path5214" d="m851 125-1 2 1-1 2-2-2 3h4l2-1 3 1 3-1-2 1h10-2l1-1c0 2 3-1 4-1l1 2q3 1 3-2v1q4 2 5-1-1 0 0 0h3l-2 1q3-1 5 1l-3 2 10-2 5-1c1 1 6-1 6-2 2-2-5 0-5 0l1-1h-3l3-1q-3-2-6 0h1l-4-1h-5 5l-2-1 1-1 2 1 4 1h7l3-1 3-1v-2h8l3-1h4l-5-1q4 1 9-1l-6-1h9l2-2h-7l3-1-13 1 4-1h-5 14l-10-1h10l7 1v-1h1-14q1-1-2-1h4l1-1 2 1h3l-4-1 10 1 7-1c1 0 4-1 1-1l-5-1h8v1q5 1 10-1h-1l4-1h-8l2-1h-1 11l-1-2 2 1h3l10-3 10-2 9-1h-11l-16 2h1-2l19-2h-10 2l-3-1h17-2l19-2 7-2h-5c2-1-1-1-1-1l-4 1 2-1-2-1h2-10l-15 1 12-2h-14q1 0 0 0l-3-1-6 1h3-4 1-10l4 1h-5l-5-1h-11l5 1h-2l4 1h-5 2l-4-1h-4l1-1h-11l3 1h1l4 1-4-1-3 1q-3-2-6-1l2 1h-7 2l-5 1 12 3-3-1h-5q-3-2-7-1l3 1h-4v-1q-2-2-6-1c2 0-1-1-1-1l-4 1 2 1h-7l7 1c-1 1-5-1-3 1l-4-1c-1 0-5 0-3 1l-1-1h-7l-3 1h-6l-8 1h10l-6 1h6l-4 1h4l-7 1h12l9-1h6l-12 1-12 1q7 3 15 0l10-1h9-13l-6 1-4 2h12l3-1 2-1-2 1 9-1q-5 0-8 2l11-1 11-2-1-1h8-1l6-1-6 1q1 0 0 0l-3 1-3 1h10q-9 0-16 2h8-13l-13 1 5 3q-1-1-2 1h8l-5 1-2-1h-3q2 0 0-1l-4-2-8-1-7 1c-1 1 4 1 4 2q-3-2-6 1h4l2 2v1l3 1h-6l7 1h4l4-1-4 1h-6l4 1h-2l1 1-5-2h-13l-3 1-2 1h-3c0 1-3 3-1 2l-2 1 10-2-4 2 6-1 5-2s-3 1-1 1l-3 1h4l-5 1h3l-8 1h7l-6 1h2l-3 1h4l-2 1 8-1 8-3-7 3h-3c0 1-3 1-1 2h-5l-6-1c3-1-1-2-2-3q-5-1-8 2v2h4-1c-3 0 1 0-1 1h1-4l-6 1-5 1-1 1-3 1 2 1 3-2"/><path id="path5258" d="M876 119h-2l3 1-1-1"/><path id="path5264" d="M885 128h1-1"/><path id="path5270" d="M897 129q-3-1-6 2l2-1h2l2-1"/><path id="path5318" d="m915 117-1 1 1-1"/><path id="path5162" d="M813 171h3l1-1q-3-1-4 1"/><path id="path5184" d="M832 173h-2 2"/><path id="path5196" d="m836 172 2 1-2-1"/><path id="path5198" d="M837 172h1-1"/><path id="path5212" d="m850 175 5-2h-6q-1-1 0 0h-3l4 2"/><path id="path5216" d="m848 183-1 1h2l-1-1"/><path id="path5220" d="m858 175-4 2-4 2q2 1 4-1l5-2-1-1"/><path id="path5222" d="m850 182 3-1h-2c2 1-1 1-1 1"/><path id="path5224" d="M854 190c-1 2 7 1 8 1l5-2 1-3 2-2q-3-2-8 0c-1 0-9 3-8 6"/><path id="path5228" d="m861 173-5 2c1 0 6-1 5-2"/><path id="path5234" d="m865 175-2 2q3 1 4-2h-2"/><path id="path5250" d="M871 183q3-1 1-2h-2l1 2"/><path id="path5252" d="M877 186q-3 0-3-2l-1 1h-2q-1 2 1 2 4 2 6-1h-1"/><path id="path5256" d="m874 181-1 1 2-1h-1"/><path id="path5260" d="M875 182v2-2"/><path id="path5178" d="m825 143 1-1-2 1h1"/><path id="path5244" d="M870 151h10l11-1q-1 0 0 0l-1-1-2-3-8-1h-4l-3-1-3 2-1 1 2 1-1 3"/><path id="path5246" d="M870 154h-1 1"/><path id="path5254" d="M873 154h-1 1"/><path id="path5276" d="m894 155-1 1 1-1"/><path id="path5284" d="m898 162 2-2-2 1 1-1q-3 0-1 2"/><path id="path5286" d="m899 159-1 1 1-1"/><path id="path5292" d="m901 159-1 1q2 0 1-1"/><path id="path5296" d="m903 163-3 1q3 2 5 0l-2-1"/><path id="path5302" d="M908 163h-2 2"/><path id="path5320" d="m918 173-3 1q1 1 3-1"/><path id="path5326" d="m920 174-2 1 2-1"/><path id="path5266" d="M888 195v1-1"/><path id="path5268" d="M893 233h-2 2"/><path id="path5272" d="M893 245q2-2-1-2l1 2"/><path id="path5282" d="M897 232v1-1"/><path id="path5288" d="M901 203h-1 1"/><path id="path5290" d="M901 227h-1 1"/><path id="path5294" d="M904 227q-2-1-4 1l4-1"/><path id="path5298" d="M905 219v1-1"/><path id="path5300" d="m908 210-2 2 2-2"/><path id="path5304" d="M907 198h1-1"/><path id="path5306" d="M908 213v1-1"/><path id="path5308" d="M909 219q-1-1-1 2l1-2"/><path id="path5312" d="M910 180h3-3"/><path id="path5314" d="M911 218h-1 1"/><path id="path5316" d="M912 181h1-1"/><path id="path5322" d="m916 183 1 1-1-1"/><path id="path5324" d="M919 185v-1h-2l2 1"/><path id="path5328" d="M923 184v1-1"/><path id="path5330" d="m930 188-1 1h1v-1"/><path id="path5332" d="M931 191h-2 2"/><path id="path5334" d="M931 203h-2 2"/><path id="path5336" d="M931 192h1-1"/><path id="path5338" d="m933 193-1-1 1 1"/><path id="path5340" d="M933 199h-1l1-1"/><path id="path5342" d="m933 193 3-1-3 1"/><path id="path5344" d="m936 191-1 1 1-1"/><path id="path5226" d="M855 212h-1l1 1v-1"/><path id="path5232" d="m860 212-2 1 2-1"/><path id="path5236" d="M868 225h-3 2q-2 1 1 2 2 0 0-2"/><path id="path5238" d="M865 224h1-1"/><path id="path5248" d="M874 243q-3 0-4 2c1 0 5-1 4-2"/><path id="path5278" d="M898 235q-3-2-5-1l2 2 3-1"/><path id="path4998" d="m707 181-3 1h3v-1"/><path id="path5000" d="M725 180q-2-1-4 1l4-1"/><path id="path5004" d="m729 177-2 1 2-1"/><path id="path5012" d="M734 178q-2-1-3 2s4 0 3-2"/><path id="path5016" d="M733 175h-1 1"/><path id="path5020" d="M735 179v-1 1"/><path id="path5026" d="m751 182 5-1 5-2h-3l1-2-1 1v-3l-2-1h-1c2-3-8-2-6 1q-2-1-2 1l-8 2v1h3-1 3q0 2 2 2l5 1"/><path id="path5030" d="m745 166-2 1 2 1 1-1-1-1"/><path id="path5046" d="M761 174h-3q1 3 3 0"/><path id="path5050" d="M765 174q-3-1-4 2l2-2-1 2 3-2"/><path id="path5008" d="M730 146h-2 2"/><path id="path5018" d="M732 147q1-1 3 1l1 3 4-2c1 0 7-2 5-4s-11-1-13 2"/><path id="path5034" d="M750 154c1 1 5 0 4 2q2-1 2 1 2 2 1 4 4 2 7-1-1-1 2-3l-2 2h5l4-1s4 0 1-1h2-1l2-1v-1q3 0 5-4l-4 1v-1l1-1q-3-1-6 1 1-3 4-2l6-2h-2l5-2-3-1h-3l-5 1q-1-3-5-1h3-3l-5 1 2 1h-6l3 2 2-1 2 1h-2l-2 1q2 1-1 2l1-2-2 2-6 1v-2q-2-2-5 0l-2 2 2 2h-1"/><path id="path5070" d="m784 218-2 4c-1 2 5-1 6-1l7-3 3-3 4-1-1 1 3 1-2 2h2l3 1q5 2 9-1l-2-1 2-1-2-1-1 1h-5c0-2 2 0 2-2l1-2-1-2h-2l-2-1-1-2-3-1-2-1-3 1v-2h1l1-2h-4l-3 2-5 6-3 2q0 2-2 3l-8 4q2 1 4-1h6"/><path id="path5080" d="m782 151-2 1 2-1"/><path id="path5086" d="M784 149q-3-1-3 1l3-1"/><path id="path5096" d="M786 156h-2l3 1h2q1-1 0 0l6-3q2-2-1-2h10l4-2 2-1q3 0 1-1l6-2 6-2q-3-2-7-1h-3l-2-1h-8l-6 1 1 1v1h-4l-4 4q-3 1-3 3t-2 4h2-1"/><path id="path5106" d="M787 228v2h3l4-1 8-5-8 1h-3l-4 3"/><path id="path5108" d="m787 173 2-1-2 1"/><path id="path5112" d="M789 177q2-1 0-1v1"/><path id="path5116" d="M790 180h1-1"/><path id="path5118" d="m793 175-2 1 2-1"/><path id="path5136" d="M802 201q-3-1-2 2 3 1 2-2"/><path id="path5140" d="M806 184h-1l-3 2v2q3 0 4-4"/><path id="path5142" d="M807 200h-2v2h2l-1 1h3l-2-1q2 0 0-2"/><path id="path5144" d="M806 234c1 2 4-2 5-2 1-1 4-4 1-4-1 0-9 4-6 6"/><path id="path5146" d="m807 161 11 1q0 2 2 2h-6l-6-1v1l-1 1v2l4 2h-1 6v-1h5q-2 0-2 2l5 1h-3l3-1 3 1h10l1 1 2 1 3-1-2-2-3-1 7 4 2-1-2-1h-1c2-2 7 2 9 0 0 2 5 1 6 1q2-1 1-3l-3-1h3l2-1h-1l1 1h1q0 2 2 1 2 1-1 4l5-2-2 1h2q-1 2-3 1 3 2 6 0l-3 1c-1 1 4 2 3 3l-5 1-2 1-1 2q4 0 8-3l1 1 3-1s-3 1-1 1h1l-2 1 2-1v3q3 0 2-2l2 1-2 1v2l3-1-2 1h3l-2 2 1 5-3 2-3 1q-1 1 2 1 4 2 6 0 2-3 5-2-2 1 0 1l1 1s5 1 3 2l2-1-2 1h2l-2 1h2l-3 1h-7l-4 2 1-1 1-2v-2l-7-1c-2 0-13 3-12 5l2 3c1 2-3 1-4 1l-3 2-3-1-2 1h-3l2 2-2 1v1-1l1-1-3-2-6-1-2 2h-2l-3 1-2 2v2l1 1 5 1 1-1 2 1 2-1h2v-1c-1-2 3 0 4 0h3q1-1-1-2l3-1-1 2 3-1v2l-2 1q2 0 2-2h2l1 1 2-1-2 1v2h1v2l1-1-1 2h3l-2 1h3v-1l3 2-6 1q2 0 2 2 2 2 4 0l-2 1 4 2h5q-2 1 0 3l5 2 6 1q3 2 6 1l-1-1 2-1-1-1h-1v-2l-2-1v-1l-2-1h-1l1-1q-3-1-4-4c-1-2 3 0 3-1l2 3 1-3c0 1 2 5 3 3v1l1-1v3l1-3 1 3v-1h2v1l1-1q-1 3 2 1v3q2-2 1-3l2 1 1-3-1-1h1l-1-1 2-1-1-1 1 2v1q2 1 1-1 2 0 2-2h-1 2l-1-1h1-2l1-1h-2q1-1-1-1 2-1 0-1l2-1 2-1h-4l2-2c-2 0 1-1-1-1l-2 1h1l-2 1 1-2-2-1-1 1v-1l1-1-2 1 1-1q0-2-2-1l3-1h-2l1-1q-2-2-4 0l2-2h-2v-2h2l-2-1h-2l4 1v1h4q1-1-1-2v-2l3 1h-1l2-1-2-1h5q-2 1 0 1l-1 2h3q-2 1 1 1l3-2c-1 0-5 2-4 3l6-1 4-2-4 3q-3-1-5 2h4-3q2 2 3 0l-3 2h3l-2 1 1 1 2-2-1 1 1 1v1l2-1c-2 1 1 1-1 1l1 1 2-2 1-1q-1-1 1-1l-1-1h2l-2-1q3 0 2-2 2 3 3 2h1-1l1-1s4 0 3-1l-3-1h5l-3-2h3-1 6-3l3-1-3-1h4q2-1 0-2h-2 2-2q1-1-1-1l-1 2-1-1-3 2 2-3-5 2c2-1-1 0-1-1l3-1 2-1 1-1q-3 0-5 2l2-1c-1-2-6 0-7 1q1-2 5-2l-5 1 3-1h-2 3q2-1 0-1l2-1-1-1h-2 1q0-2-2 0-1-2-2 0l3-2q-3-1-4 2v-2l-4 2 3-4q-2 3-6 3l3-1v-1h-3l2-1h-3l-2 1 3-2-3 1q2-1-1-1h7-5l1-1q-1-1-3 1v-1h-3c2-1-1-1-1-1h4l-3-1h-3v-1l4 1h4l-2-1h2l-2-1h4-7q1-1 0 0l3-1h-1 4l-5-1q2-1 6 1h4q3 1 3-1-3-2-7-2h-4l-6 1 6-1 5-1c1 0 6 1 6-1l-2-3-5 2-4 1h-2q-3 0-3 2l9-4h-5l-2 1-4 1 5-1h-2l8-2 3-1 1-1-5-2-4 2h-1l-1 1 5-3-6 1-8 5 5-4-5 2v-1l4-1 3-1 4-2c1-2-5 0-5 0l-4 1q-3 2-4 1l3-1h-3l7-2 4-1c1-3-4-3-6-2l-7 4 3-2c-2-2-4 2-6 1l4-2 1-1-6 2 2-1h-1l5-2q-2-1-4 1l1-1q-1-1-3 1l-1 1-3 1 2-1-1-1 3-1-4 1 3-1h-2l5-1 3-1c-2-4-9 2-12 2q2 0 3-2l3-1-6 2 4-2 5-1c2-1-3-3-4-2l-6-1h-5l-3 2 6 2h-3l1-1q-2-1-5 1 0-3-1-1l3 3-2-1v1c-2 0 0-4-3-1h-2l3-2h-4l1-2q-3 2-2 3h-3l-5 2 1-1-1-1h3c-2 0 2-2 3-2l-6 1 9-3q-1-2 1-3l-2-1q2-4-3-3h-5l-5 1v1h-6l-3 1 6 2-5-1h-4l6 2-6-1c-1 0-5 2-3 3v1h4c-5 1 0 2-1 3l-4-2-2 1-3 1 1 1q1 2 3 1 0 2-2 3-2 3-4 2v-1h2c-2-2-9 1-11 1l3-1 4-1h3l2-1c1 0-6-2-3-5l3-2v-2l4-2 5-3 6-2q2 0-1-1l-12 1-12 3-3 3-3 1-3 2s-3 2-1 2q-2-1-4 2l-3 3"/><path id="path5148" d="M810 202h-1 1"/><path id="path5160" d="m814 199-1-1 1 1"/><path id="path5174" d="M823 227h1-1"/><path id="path5176" d="M824 227h1-1"/><path id="path5180" d="M827 220h-3q2 3 4 2c3-1 0-2-1-2"/><path id="path5186" d="M832 183h-2 2"/><path id="path5188" d="M833 216h-2 2"/><path id="path5190" d="M836 220q-1-2-4-2 1 3 4 2"/><path id="path5206" d="M845 226h-1 3l-2-1"/><path id="path5210" d="M846 213h1-1"/><path id="path4864" d="M552 174h1-1"/><path id="path4854" d="M523 174h2-2"/><path id="path4856" d="M542 175h-1 1"/><path id="path4858" d="M542 176q1-1 0 0"/><path id="path4860" d="M543 174h2-2"/><path id="path4906" d="M785 157h-3l3 1h-3l-2 1-4 1h3l-3 2-2-1-4 2-3 2q2 2 3 1l-1 1h1l-6 2q-2 1 0 2l-1 1 2 1h1q2 2 4 0l1 2 4-1-1 2h1l-4 1 3-2q-3-1-5 2h1l-4 1-2 2q3 1 5-1l-1 1q1-2 3-2l-3 3h2l-8 3-7 1-4 3v3l-4 3h-3l1 1-2 1q1-2-1-3h3v1l2-1 2-1h-2l2-1h-4l2-1-2-1 4-2 4-3-3 1h-2l3-1h-4l-1-2h-2l-2 1h-3v2h-1v2q2-2 5-1v2q-3 1-5-1-2-3-2 0l-4 1-4-1q-4-1-8 1h-5l-2-1q-3 0-2-2s-10 1-6-1h-2l1-1h-3l1-2v-2q-2-1-6 1l-15 4h2q-2 0 0 0h4-1 4l3-1h2q3-3 7-2l-4 2-5 1-4 1-4 1v-1 1q-2 0-3 2l-1 2v2l-1 2c-1-2-2 2-2 0l1-1h-1l-2 2v3l-1-3v1l-1-2 1-1-1-1h4q1-2-2-2l1-1-3 1 1-2h-3q1-2-1-1l1-1h-3l-5 1-2 1h-15l-6-2h3l2-1q1-2 4-1l3-1q1-2-2-3l-4-2-2 1h-6l-4-1-5-2-4-2-5-1-6-1-6 3-6 1 5-3h-2l3-2q-3-1-5 1l3-1-5 2h2l-4 1-3 1h3q-3 2-5-1-2-1 1-4 1-1-2-3-3 1-1 1l-1 1h1l-4 1-3 2-6 1 4-2q-5 2-11 2l-8 4 1-1 2-1-2 1 3-2h1l5-2q4 1 7-2v-1l-3 1h-2l-5 1h-2l-4 2h-4q-2 1 0 1h-4l-3 1-7 2-4 1-1 2q-1 2-1-1h-5q2 0 0 2l-2-2h-5c-1 0-6-1-5-3q-2 1-2-1l-2-1h-7l-86 71h5l7-1-3 2 1 2 1 4-1 4 4-2 4-1 3-2 2-1 4-1h2c2 1-1 2-1 3l2 2-1 2q2 1 1 4l-1 3v4l-1 2v2l-2 3 5 3 1 1h1l-4 5-2 2-2 2 2-1-1 1h2q-3 0-4 2-3 1-1 1h-2q-1 1 1 1l-2 2v-3q-3 2-1 3l-1 1h3l-2 2q0-3-2-1l1 6 4-3 2-2q0 2 3-1-2 1 0 2-4-1-4 3h3l-3 1-1-2-1 1v2l-1 3h2l-3 2-3 3 3-2v1h1l-1 1 6-2v1h2q-2 2-1 3l-1-3-2 1-3 1-1 1-2 1-2 3h1l4-2-2 1 6-1q-1 2-4 1l-4 1-2 2 4-1c0 1-7 1-5 2l1 1c-3 1 4 2 1 1q3 1 5-1v1l-1 1 2-1-1 2 6-3c0 3-5 3-7 3l2 1h-2l3 1 3-2-2 2h3l2-1 1-2 1-1-2 3-2 1v1-1q-1 2 2 0h2l-3 1q1 2-2 3l1 1h3l1-2q2 0 1-1c2 0-1 1-1 2v3l-2 1q0-3 0 0h2l3-2q-2 4 0 3l-2 2-1 1 2 1 186-1v-3q2-1 2 1l-1 4c0 1 5 0 4 2l5-1 3 1 1 1q0 2 1 1h1l2 1v1l6-2q0 3 2 2h5c3 0 5-4 8-4l-2 2 5-4v1l-2 2 2-1 2-2q0-2 2-2l4 2h3q4 0 3 2v4l7 1q-2 1-2 4l1 2-2 2 2 1-1 1-2 2c1 0 5 0 3 1l3 1 4 1h5q3 0 2 1l2-1-1 1v1l3-1q-1 1 2 1l1 1 1 2v2l1-1v2l-1 1 1 2h1c-1 2-2-1-3 1l-1 2c-2 1-3-3-5-1l1-1h-2l1-1-1-2-2-1q3 4-2 7-3 1-4 6-2 4-7 6c-2 0-2 4-4 4 3 2-1 1-3 2q-3 1-1 2l3 1q2-3 5-3l4-2h10l-2-1 6-2h5q-1-1 1-3c-2 0-7 1-4-2l6-3 9-2q3-1 4 2l2-1q-2 0 1-2l-2 1c1-1-3-1-3-1h4q2 1 3-1h2l6-3 8-3h21q2 0 2-2l3-1 1 1 1-1v-1l2-2 4-4 2-2 3-4 4-3 3-2v2c2 1 5-2 6-1 3 2 0 6-1 9l-1 5q2 1 1 2v3q0-2 1 0h5l2-1v-1l2-1-1 1c1 2 4-1 6-1l4-2 2-3v2h2l-5 2-1 1 1 1 4-1 6 1c-2 1-7 0-7 3l-1-1v-2l-10 5h1l-2 1-4 2 3-1c-2 1-6 4-4 7l1-1 1 2 1 1 2-2 1-1c0 2 3-1 3-1l4-3h1l2-2 2-1c-2 1 3 3 2-1q2 2 4 0l6-2 6-2 3-1-2-1q2-1 0-2h-2l-1-1-6 2 2-1-4-1h-2l-3-2 2-1-4-1h-2q2-2 1-6v-1h-3l7-5-1-1h-2l-4 2q1-4-2-3l-2-1h-3l4-1h3l5 1 7-3 1-2-1-1 1-1 1 1c1-2-4-4-5-4h-7l-7 3-7 1q-8 3-15 9l-6 5-8 3 4-3 4-3q4-2 7-6l3-1 6-5q3 0 4-3l-1 2 2-1c-1-1 3-1 4-2l4-1c1-2 5-7 7-5q0-2 3-1l5-1h9l4 1 5-1 4 1h3l-2 1 7-1h5l3-2 1-1 5-3q0 2 0 0l1-1 3-1v-1h3l4-2 5 1 4-3 4-2 2-1v-1l-2-2 3 1q-2-2-5-2h3l2-1-2-1q4 0 1-2l3-1-1-1v-2l-3-1 1-1-3 1-3 2q1-1-1-1l4-2-1-3h-3q-2-1-4 1h3-3l-3 1-3 2-3 1-3 1q-1 2-4 1h2c-2 0 1-1 1-1l-2-2-2-1 4 2 4-2 10-3c-1 0-8 2-9 1l9-1 3-2h3-1l3-1-3-1-4-1-3-1 1-2-3 1 2-1c-2-1-4 4-6 3l3-2 1-2q-1 2-3 1l2-1-5 2 2-2-4 2 3-2-2 1 3-3-1 1 1-2 1-1-2 1v-1h-2l1-1h-2l1-1h-1v-2h-4 2c2 0-2-1-2-2q2 1 3-1h-3 2l-3-2h3l-2 1s4 2 3 0l4-2v-1l-2-1c2-1-2-1-3-2l4-1v-3l-2 1q1-1-1-1h2l-1-1h1-3l-3 1 3-1s3-1 1-1q2 0 2-2l-3 1h-3q3 0 1-1 3 0 4-2v-1h-2q3 0 1-1l2-1-6 1v-1l5-1h-2l1-1-1 1-1-1 2-1h-2v-1h1v-3l-2 1 1-2-3 1 3-1-1-1h1q-2-1-4 2l-1 2q-3-1-3 1l1 2-2-1q0 2-1 1 0 2-2 1l2 2h-2l-2 1h-2l1 2-3 2q3-2 0-4l-2 3h-2l-3 1-5 4q3-2 2-5l-3 3 3-3c0-2-2 1-3 1l-1 1-3 2-6 2 9-4 2-3q0-3-4-2l-6 2 1-1h-2l3-2v2l3-3 2-1-3-1 1-1 1-1 1-2-3-1h-4 7c2 0 2-5 4-6l2-1q1-2-1-1-2 2-3 1c2-2-2-1-2-1l-3-1q-2 1-2-1l-1-1h2-2l3-1q-1-2-3-1v-2l-4 1 3-3-3-1-4-1c-1 1-6 1-5 3q-4-3-7-1l2-1-7-2q-3-1-6 1l-4 3q0 3 2 4-2 0-3 2l-5 4 2-1c-2 1 1 1 1 1l-2 1 2 1-3 1 1 1-1 2h1l-1 2-2 1-1-1-2 3-6 3-2 3 2 2 1 1q2 2 2 5-1 8-6 12-6 6-14 8l-7 3-5 1v4h1v3l-2 1v1l-1 1-1 4h1v1l-1 1v4l-4 2v1l-2 1 1 2q-3 1-2 3l-1-2v-2l-5 3v5q1-6-4-5l-5 2q5-1 5-6 0-2-3-3l-3-1 3-1-1-3-1-2 3-3 2-4v-4l4-4 2-3h-5 1l-3-1q-2-1-1 1l-3-1h-7l-3 2 3-3-2-2-3-1c-1-1-6-3-7-2q1-3-2-5l-2-2-3-1-9-2-9 3 2-1-5 1q5-1 6-6l2-8q1-2-2-1h-4l-2-1 1-1-2-1h2l2-2 2-3s5-5 4-6h1c2 1 5-4 7-4l2-2h1c-1-3 5-3 6-4l-1-1q2 1 3-1l2-1 1-1 2 1v-1l3-2h4c-1-1-4-2-1-2h4l3-1h3l1-2 1-2h-3l-1-2-3 1 1-1-6-2q-2 2-2 0 2 0 1-2c1 3 7 3 9 4 1 0 7 2 6 0l3 1 2-1q0-2 2-2v-1l1-1v1l1 1h2v-1c1 3 8-1 9-2l6-3 4-3c1-1-3-1-3-1h-7l-1-2-3-2-4-1h-2 6c-2 1 1 1 1 1h2l-1-1 7 2h-2l4 3 5-2 6-2 5-3-4-2h7q3-1 1 1l5 1v-1l1 1h2v-3h1v-1l-2-1h1-4l4-1h1-1l1 1v1l2-1-1 2v2l9-3 3-1 3-1q5 0 5-5-3-2-1-3h-1v-2l3-1h2q3 0 4-3h-3q3 1 5-2l-2-1-2 1c2-1-1-2 1-2l-5-1h5l-9-2-4 1-3-1-1 2q-2 1 0 1l-1 1h-1l2 1q-1 1 1 1s-3 0-1 1h-3l2 1c-2 2-5-1-7 2l-7 5-5 3-3 1-3 1v-4q0-3 3-5v1l4-3-3-4-5 1-2 2-2 1-1 2-3 1v-1q1 0 0 0l1-1 1-2q2-2-1-4h3l3-1-6-1h3l-5 1-1-2h-3 2-2l7-2h-3q3-2 6-1l1-1h-3q2-1 0-1 2-2 0-2v-1h-1l3-3q1-1-1-3h-4q2 0 0-1l2-1zm-223 16h1zm46 20h3q-1 1 2 1l-6 1-6 2 4 1q-2 0 0 0h3l6-1 1-1 4-1v1l-3 1h2l-3 2-2 1-4 1 3 1h-2l-2 1h-3l-2-1h-2s-3 0-1 1h-3q-1 2 1 2l-2 1-4 1-5 1-4 2 1-2 4-1q4 0 6-3-5 0-11 4c-2 1-8 0-10-1l4-1 2-1 3-1 4-2-2-1 9-1-2-1h-3l-5 1-5-1-3 1-1 1h-2q0-2 2-3h6l10-1 3-1 6-2 7-1zm25 31 7 1-1 1h1l-3 1 1-1q-8-3-17 3l7-3h7-4 4l-7 1h2l-2 1 5-1-5 2h2-5l-2 1-4 1h1l-9 4-8 1-3 2q-2 2-4 1-5 3-10 1l-5-1h-2l-2-2 3 1h2l3-1h3v-1h2l2-2 5-1q3 0 2-1 1-2-1-2l2-2-2-2h1l3 2h4v1l2 2h3l9-2 10-5zm-174 58 1 2h-3zm187 14 3 1 2 1v6l-3 8v6c0 2-4 4-3 5h-2l-1 2q-1 1-2-1l3-4 3-3-3 2c1-1 5-3 4-4-1-2-3 2-4 1l2-4h-2l1-1q-1-1-2 2c-2 1-1-3-1-3l-1-1v-3q0-2 3-3l-4-1zm-192 4v1zm3 5-2 2zm-9 14-4 1h-1zm356 23 5 1h-5l1-1h-2z" class="landxx ca"/><path id="path4922" d="m536 179 3-1q-3 0-1-1h2l-1-1h3q1 1 2-1h4l4-1q-1 0 0 0h1c-1 2-12 3-10 7-2-1 0-3-2-2h-5"/><path id="path4928" d="M647 171v3h1c-2 1 4 2 4 3h10l-3 2-1 2v1h9q3 0 2-1h9l6-1 5-1 6-1 5-2 3-1c2 0-1 2-1 2h3l3 1-2 1h5l3 1 2-1 3 1 3-1q3 0 5-2h-1l2-2q-4-1-9 2l3-2-1-1h3q2 1 3-1l3-1 1 1 3-1q-1 2 1 1l3-3h-3l1-1h-2l-3-2h-1l-3-1-1-3 4-3 1-3 2-3 1-2 1-1q0-2-2-2l-4-1h-4q-3 1-5 5-3 2-2 5c-2-1-5 3-7 1l2-2h-1l4-4h-2c3-1-2-2-1-3h-5c-1 1 3 2 3 2h-3q2 1 0 1h-4l-2 1h-1q-2-1-4 1l1-1 2-1 3-1-2-1-4-1q-3-1-6 1c2 1-1 1-1 1h-2l-4 1 5-2 4-2c1-2-6-1-6-1l-11 2-6 1-8 3h1c-1 3-11 2-10 6h3l3-1-1 1h-3l2 1h4l6-1h5l-6 1h2l-7 1-7 1-4 1q0 2 2 3h8l9-1 7 1h4q0 2 2 1l-3 1h-13l-10 1-9 1"/><path id="path4950" d="M666 184h-1 1"/><path id="path4952" d="m667 186-2 1 2-1"/><path id="path4954" d="m671 185-1 1 1-1"/><path id="path4956" d="M672 182h-1 1"/><path id="path4958" d="M673 185h1-2 1"/><path id="path4966" d="m677 184-3 1 3-1"/><path id="path4968" d="M676 187h-1 1"/><path id="path4970" d="m676 193-1 1 1-1"/><path id="path4972" d="M676 185v1-1"/><path id="path4974" d="m677 193-1 1 1-1"/><path id="path4976" d="M678 186h-1 1"/><path id="path4978" d="m679 189-1 1 1-1"/><path id="path4980" d="m679 189-1 1 1-1"/><path id="path4984" d="M680 190h-1 1"/><path id="path4986" d="m681 188-2 2 2-2"/><path id="path4988" d="M681 186h-2 2"/><path id="path4992" d="m683 186-1 1 1-1"/><path id="path5370" d="M680 192h1-1"/><path id="path5388" d="m893 249 1-1q1 1-1 1"/><path id="path5392" d="M907 217h1q2-1 0 0l1 1-2-1"/><path id="path5562" d="M896 276h-2 2"/><path id="path5564" d="M896 275h-1l3 1-2-1"/><path id="path5566" d="M899 272q-2-1-2 1c-1 2 2 0 0 0l2-1"/><path id="path5568" d="m898 278-1 1 1-1"/><path id="path5570" d="M897 267h2-2"/><path id="path5572" d="m899 264-1 1 1-1"/><path id="path5574" d="M898 267h1-1"/><path id="path5576" d="M898 267h1-1"/><path id="path5578" d="M900 265h-1 1"/><path id="path5604" d="M846 360v-1q-3 0-1-2h-3l4-4-1 3q2 0 0 2h4q4 2 9 0l-2 1-3 2q2 1-1 2l-2-1 1-1v-1h-5"/><path id="path5610" d="M860 366c-2-3 2-5 4-7l4-4q1-2 3 0l-4 6 1-1-2 2-3 1 2-1-3 3h2l3-2h-2l4-3-2 1h3q0-2 2 0l-1 1v1l-4 2-3 1h-4"/><path id="path5612" d="m861 351 5-3-2 1-2 1 2-1-3 2 1 1h-2l1-1"/><path id="path5614" d="M863 366h-1 1"/><path id="path5618" d="M864 380h2-2"/><path id="path5624" d="m915 348-2 3 2-3"/><path id="path5630" d="M920 344h-2 2"/><path id="path5580" d="m913 288-2 1h2v-1"/><path id="path5584" d="M921 300h1-1"/><path id="path5608" d="m859 330 8 4q3 3-1 2-5 1-8-2l-3-3-3-1h7"/><path id="path5620" d="M886 349c-2-1-8 1-6-3l4-2 5-3h-6l4-2-2 1h2l2-2 2-2 2 1q-2 0 1-1-2 0 0-1c-4 1 1-4 1-2l1-2 2-3c1-1 3-5 5-4l-1-1 3-1 3-4 7-3 1 1q1-2 1 1c-2 1-4-1-4 2h1l-1 1q-1 3-2 1l-2 3-3 3-2 2-1 1-1 2 6-4v1h5l-6 3 2-1-1 2h-1 3v1l2-1v1l1-2q0 3-3 5l2-1v-1l3-1 3-1-1 2 2-2h1l4 2-6 4 2-1-1 1v1l1-1 1 1-2 1-2 1h2l1-1q0 2 2 0h1l2-1-1 2-3 1-2 1q-3 0 0 1h-1 1l-2 2 1 1v1l2-2q2-2 5-2-2 0-3 2l-1 2v1l4-3-1 3-3 5-2 2h-3q-1-2 1-2-2 1 0-1-2-1 1-1l-6 2 4-6q0-3-1-2l-4 4 1-2-5 3q-2 3-5 3-2 0-1-1l3-1 3-3 2-1 2-1-2 1 1-2q-2 2-4 1 0 3-2 2h-1v-1l-2 1 3-2v-2l-2 2v-1q-2 3-2 1l-3 1h-2l-2-1h-6l-1 1"/><path id="path5626" d="m915 322-1 1 1-1"/><path id="path5628" d="M918 332h-3 3"/><path id="path5632" d="m921 331 1 1h-3l2-1"/><path id="path5634" d="M439 330q-2 0-2 2 2 0 2-2"/><path id="path5636" d="m440 334-1 1 1-1"/><path id="path5638" d="M441 335v1-1"/><path id="path5640" d="m443 314-2 3 2-3"/><path id="path5642" d="M443 323h-1 1"/><path id="path5646" d="M445 312q-2 0-2 2l2-2"/><path id="path5648" d="M443 299h1q-2 4 1 1v-4c-2-1-2 3-2 3"/><path id="path5650" d="m444 311 1-1-1 1"/><path id="path5652" d="m445 310-1 2 1-2"/><path id="path5654" d="M444 322h2-2"/><path id="path5656" d="M446 301q-2 0-1 2l1-2"/><path id="path5658" d="M447 324h-2 2"/><path id="path5660" d="m446 295-1 1 1-1"/><path id="path5662" d="M446 311h-1 1"/><path id="path5664" d="m448 322-3 1 3-1"/><path id="path5666" d="M445 322v1l1-1h-1"/><path id="path5668" d="m446 300-1 1 1-1"/><path id="path5670" d="m447 309-1 1 1-1"/><path id="path5672" d="M447 310h-1 1"/><path id="path5676" d="m444 308-1 2q-1-2 1-2"/><path id="path5678" d="M444 308q-1-1 2-1l-2 1"/><path id="path5682" d="m426 311-1 1 1-1"/><path id="path5684" d="m427 306-1 1 1-1"/><path id="path5686" d="M427 305h-1 1"/><path id="path5688" d="M426 304h2-2"/><path id="path5690" d="m440 302 2-1-2-3v4"/><path id="path5692" d="M444 295q-2-1-3 2 0-2 1-1h1l-1 1q2 0 2-2"/><path id="path5694" d="m443 297-2 2 2-2"/><path id="path5696" d="M442 305v3-3"/><path id="path5698" d="m442 300 1-1-1 1"/><path id="path5700" d="m444 302-1 2 1-2"/><path id="path5702" d="M424 299q2-5 6-5l-1 2q3-2 3 0-2 3-5 2h1l-1 1 5-3 4-2-6 5q-2 3-6 4l-1-1q3-1 1-1h1l-1-2"/><path id="path5704" d="M425 302q3-1 4 1h-2l-2 2q2 0 0 2-1 2 2 2-2 3-2 1l-1 1v-6h-1l2-1-2-1 2-1"/><path id="path5738" d="m703 347-2 1 2-1"/><path id="path5740" d="m708 362 1-2q-2 0-1 2"/><path id="path5742" d="m711 362-1 1q2 1 1-1"/><path id="path5744" d="m720 366 3-2q-2 0-1-1l-1 1q1-2-2 0-1-2-3 0c-1 0-3-3-4-1l5 2 1 1 3-1-2 1h1"/><path id="path5746" d="m693 338-2 1 2-1"/><path id="path5748" d="M694 338v1-1"/></g><path id="sv" d="m588 641 1-2 2-1 2-2v-1h2c1 0 6 3 6 5h3q3-2 2 1l-1 2-1 3-5-1h-2l-3-2h-4l-2-2" class="landxx sv"><title id="title1616">El Salvador</title></path><path id="gy" d="m802 708 2-4q0-2 2-3h1l2-1 2-1q0-2-1-1-2-1-2-3l1-2 2-2 3-2q2-2 0-3l4 3-3-2 5 3 4 4 1 5-1 3-1 2c2 0 1-5 3-4q4 2 6 5 2 0 3 3l-2 6v2c0 1-6-1-5 2v6q-1 3 2 4l1 3h2l1 3 2 6 3 3c-2 1-5-2-7 0l-1 1-2 1-4 1-1 1h-1l1 1-4 1-1-1-2-1-2-3-1-2-1-2-1-6 2-4 1-2 1-3-1-2-1-2-2-1 1-3-1-3h-5l-5-6" class="landxx gy"><title id="title1619">Guyana</title></path><path id="be" d="m1298 320 6-3q-1 1 2 1h3v-1l2-1h3l6 3q-2 2-1 3h2c-1 1 2 1 1 2l1 2-2 1-1 1-1 2v3h-2l-1-2-3-1v-3l-2 2h-3v-3h-3l-2-2-1-1-3-1-1-2" class="landxx be eu"><title id="title1622">Belgium</title></path><g id="gq" class="landxx coastxx gq"><title id="title1625">Equatorial Guinea</title><path id="path5778" d="M1337 732c0-1 3-5 1-5l-2 1-1 2q0 2 2 2"/><path id="path5784" d="M1344 746h1v-2l1-5q1 3 3 2h8v10h-9q-2 1-2-1h-4l2-4" class="landxx gq"/></g><path id="ls" d="m1472 1016 2 3 1 3q2 3 4 3l2-4 3-1 3-2 2-3 1-2-3-3-2-3-3 1-2 1-3 1-2 4-3 2" class="landxx ls"><title id="title1630">Lesotho</title></path><path id="bg" d="m1432 381 2-3 2 1v2h5l5 1h5q3 1 5-1l5-2h9l3 2 2 1q1 3-1 2-2 0-3 3l-1 3v1l-2 1 4 4-3 1-3-1-3 1v1l-2 1c-5-1 1 2-2 3l-5 1-3-1-2-1-3-1-3 2-4 1-2-1v-3l-2-3-2-3c3-1 0-1 0-4h2l2-3q-3-1-5-5" class="landxx bg eu"><title id="title1633">Bulgaria</title></path><path id="bi" d="M1492 783c1-3 3 1 3 1q4 0 4-4h6q-3 2-1 2 0 5 2 3l-1 3-1 2h-1v2l-1 2-3 3-2 1-2-5-1-5v-2l-2-3" class="landxx bi"><title id="title1636">Burundi</title></path><path id="dj" d="M1589 664v-7l3-4q1-2 3-1l1-1 2-1q3 2 2 6l-4 2-2 2 4-1v4l-4 1q-2 2-5 0" class="landxx dj"><title id="title1639">Djibouti</title></path><g id="az" class="landxx coastxx az"><title id="title1642">Azerbaijan</title><g id="az-" class="landxx coastxx az"><path id="path5796" d="M1592 402q3-2 5 1h4l2 1c2-1-2-3-2-3l-1-2 1-2 4 2 2 2 2 2h2l2-2 3-3 4 3 3 5 1 1v1l3 1q3 0 4 3-2-2-4-1-3 1-2 4v4l-1 2q1 1-1 1c2-1-1-2-1 0l1 5h-2l-5-4 2-1v-3q-3-4-6-2l-3 3-3 3v-3l-2-2q1 0 0 0l-1-1-5-3 2-1q0-3-1-2-5-2-2-4l-4-3c2 0-1-1-1-2"/><path id="path5798" d="M1592 416q2-1 3 1l3 1h2l1 2 2 3q-4 0-6-2l-5-5"/></g></g><g id="ir" class="landxx coastxx ir"><title id="title1653">Iran, Islamic Republic of</title><path id="path4560" d="M1667 528h1-1"/><path id="path4562" d="M1673 530h-1 1"/><path id="path4564" d="m1686 527-4 2q1 2 3 0l2-1 3-2-4 1"/><path id="path4606" d="M1587 419c2-1 3 1 3-2q0-2 2-1l2 3 2 2 5 2h5l3-3 2-1 2-2q3-2 5 2c-3 1 1 3-1 3q-1 2 2 3l2 2h2l3 8 7 1 3 3 4 2q5 3 9 1l12-2-2 1h3l-2-5h5l1-3 4-3h6l2-1h3l3 1q1 2 4 2l4 2h5l3 3 4 2 3 3 6 1 1 4v2l2 3-1 3q1 4-2 6l1 1-2 2q0 3 3 5 2 0-1 4l3 7q0 4 2 7l6 1 1 5-3 4-3 4 2 2 8 9 3 2 2 1c2 0 2 5 2 6q0 5 4 3v4c0 2-8 0-7 4h-2l-1 8-1 1c0 2-4 1-4 0l-3-1h-10l-3-1-3-1h-5q-1-2-4-2l-3-8q-1-3-5-4l-4 2q-2 0-1 1l-3 1-3 2-5-2q-3 1-5-1l-3-2-4-2q0-2-3-3l-2-1-3-1-4-4-1-3-2-2v-1l-1-1q0-3-2-4l-3-4c-1-3-3 2-4 0l-3-1-2-1h2q0-2-2-1h1c-2 0 1 5-3 4h-1l-1-2-3-3q1-3-1-4-3-1-1-5l-2-4q-2-3-4-3l-4-4-3-1q-1 1-1-1c2-1-3-5-4-5l-1-2v-2l-1-2v-2l2 1-1-2 2-2 1-1v-1l-1-3 2-2-2-1h-2l-4-1c2-2-3-3-2-5l-1-2-2-3-1-2-1-3-3-2 2-3q-2-1-2-4l-1-2-2-3" class="landxx ir"/></g><g id="my" class="landxx coastxx my"><title id="title1660">Malaysia</title><path id="path4722" d="m2034 704 1-2 2 1 2 1 1 1q3 1 2 3t1 2l2-2 2 2q2-2 2-5l3 2 1 2 6 6a15 15 0 0 1 1 11l1 3v6l4 5 2 6c1 3-2 1-1 0l-1-1v2l-4 1q-2-3-6-5l-1-1-3-2-3-2-1-1-2-2v-1l-1-2-3-5q-2-1 0-2-2-1-2-4l-2-5-1-6-2-6" class="landxx my"/><path id="path2560" d="M2169 724v-1h2l-2 1"/><path id="path4708" d="m2121 738 1 1-1-3v2"/><path id="path4710" d="m2149 714 1-1-1 1"/><path id="path4712" d="M2162 697v-1 1"/><path id="path4714" d="M2163 696v2q2-2 0-2"/><path id="path4716" d="M2165 702h1-1"/><path id="path4718" d="M2174 719h2-2"/><path id="path2284" d="M2078 735v-2 2"/><path id="path2300" d="M2102 734q0 1 0 0"/><path id="path4700" d="m2032 704-1 1q2 1 1-1"/><path id="path4704" d="m2036 712-1 2 1-2"/><path id="path4706" d="M2066 735v1-1"/><path id="path4724" d="M2108 742c0 2 6 4 6 2l1 1 2 1 2 1 3 1q-2 0-3-2l1-1v-3l2-1h-2v-2h2c-2-2 2-4 3-4l9-3 3-5q4-3 4-7 3 0 2 2l3 3 1-5q-1-2 1-3 0 4 3 5l-1-4q0-2 1-1 3-1 1-3-2-1 1-3 1 2 2-1l2-4h1l1-2 2-5v4l3-4s3 6 3 3l2 3-1 2-1 2 2-1h2q2 0-1 2l3-1q2 0 2 3 2-1 3 1 2-1 3 1-2 3-5 3-3-2-3 1l2 3q2-1 1 1h-2q-3 1-5-1v2q-2 1-3-1l-6-1c0 3-1 0-2 1h-3l-1 1-1 3 1 3-1 2q0 2-2 3t0 4q-3 0-3 4 0 3-2 5h-5q-1 2-3 2l-4-3-6 1-1 3-2 1h-4q-3-1-4 1l-3-1-2-2-3-2-1-3v-2" class="landxx my"/><path id="path5822" d="m2183 719-1-2 1 2"/></g><g id="ph" class="landxx coastxx ph"><title id="title1678">Philippines</title><path id="path5800" d="M2162 692v-2 2"/><path id="path5806" d="M2174 699q1-2 0 0"/><path id="path5832" d="m2185 716 3-2h-1l-2 2"/><path id="path5838" d="M2190 704v2-2"/><path id="path5840" d="M2196 709q1-2-2-2l-1 2h3"/><path id="path5858" d="m2200 703 2 1 1-2-2-1-2 1 1 1"/><path id="path5860" d="m2200 707 1 1-1-1"/><path id="path5874" d="M2207 697c3-1-2-2 0 0"/><path id="path5882" d="M2212 681v-2 2"/><path id="path5888" d="M2213 677v-1 1"/><path id="path5892" d="M2214 671v-1 1"/><path id="path5900" d="m2221 681-1-1 1 1"/><path id="path5908" d="M2227 713h1-1"/><path id="path5910" d="m2230 700-1-2 1 2"/><path id="path5802" d="m2164 685-1 3 7-6c0-1 6-5 4-7v-1l3-1 1-1q0-2 2-2 2-1 0-4l-1-5-1 3 1 2-2-1 1 2-1 2-1 1v1h-1v2q-1-2-2 1l-1 2-3 3-1 1-1 1-3 4"/><path id="path5812" d="M2181 661q1-1 0 0"/><path id="path5814" d="M2182 653h-1q0 3 4 3l-1-2-2-1"/><path id="path5816" d="m2181 640 2 1-2-1"/><path id="path5818" d="m2182 656-1 1 1 2v-3"/><path id="path5820" d="m2183 668-1 1 1-1"/><path id="path5824" d="m2183 643 2 2 3 4c0 1 4 7 5 4v-5l-2-4c-1-1-7-2-8-1"/><path id="path5828" d="M2184 657v-1 1"/><path id="path5808" d="m2176 620 1 2 1 5 2 3q1 3 1 1l2 4q2-1 1-4c0 1 5 2 3 3l-2 2v4l1-1q2 0 1 2 2-1 2 1l2-1 1-1 2-1 3 2 3 4h1v-1l-1-2-1-3 4 3 3 3 1 2 2 1h1l2-1-1 3 2 1c0-2 0-7-3-5v-1l-2-3c-2-1 2-2 3-1l-3-2-3-1v3l-2-3q-3-4-5 0l-1-1 1 2-4-1q-3-3-1-6-4-2-3-6v-4l4-3v1l1-3 1-6-1-1-3-3 1-5q0-2-2-2l-1 1h-2l-2-1q-1-2-4-1h-2v2l-1 5 1 8 1 6c0 2-4-1-4-2l-1 2"/><path id="path5826" d="m2184 592 1 1-1-1"/><path id="path5830" d="m2184 597 1-1-1 1"/><path id="path5834" d="M2187 584v-2 2"/><path id="path5836" d="m2188 597 1-2-1 2"/><path id="path5842" d="m2193 630 2 3c0-1 0-5-2-3"/><path id="path5844" d="m2197 638-2-1 2 1"/><path id="path5846" d="M2195 643q1 4 2 1l-2-1"/><path id="path5848" d="M2197 632h-1 1"/><path id="path5850" d="M2196 658q3 1 2 4v7l4-2 2-2 3-2q0-4-2-2l-1-2-2 1-2-2-3-2v2"/><path id="path5852" d="M2197 651v4l1-5-1 1"/><path id="path5854" d="M2197 633h1-1"/><path id="path5856" d="M2199 651q2 0 0 0"/><path id="path5862" d="M2200 698q2 4 3 0l1-3q0-3 2-3l1 3h1l1-2v1l3 2-1-2 1-1v-1l2 1 3 3-1 3 1 5 3 3 5 2 1-2s0 5 1 4q3-1 2-5l-2-4 3-6 2 4v2l1 3v-5l1 1 1-3v-5l-1-2-1-2c2-2-2-3-2-4l2-2-2-2v-2h-2l-1-2-3-2 1 5v2l-2-1q0 3-2 1c-2-1 0 4-2 4l-2-1-1 3-2 1-2 1h1v-2q0-3-2-3l-1-1q-1 2-3 2 0 3-2 3-3 0-4 2l-1 3-1 4"/><path id="path5864" d="m2201 651-1 1 2 1-1-2"/><path id="path5866" d="m2204 678 2 1 1 2q2 1 2-1 1-1-1-3l1-7q2-3 0-5h-2q-2 0-1 3l-1 1v3q-1 2-3 2l2 4"/><path id="path5868" d="m2203 670 1-3q-2 1-1 3"/><path id="path5870" d="m2207 650-3-4c-1 1 3 3 3 4"/><path id="path5872" d="m2206 656 3-2 2 2 2 2q0-3-3-5l-1-1-3-1 1 3-1 2"/><path id="path5876" d="m2210 651 1 2-2-3 1 1"/><path id="path5878" d="m2210 673-1 5c2 0 2-5 3-6l2-4v-6l-2 4-2 7"/><path id="path5880" d="M2212 645h-1 1"/><path id="path5884" d="M2213 643q2-4-1-5-1 2 1 5"/><path id="path5886" d="m2213 646-1-1 1 1"/><path id="path5890" d="M2213 676c0 2 5-1 6-1q-1-3-3-3-3 1-3 4"/><path id="path5894" d="m2214 651 3 4 4 3-2 2 2 1q-2-1-2 1l-3-2q-1 3 2 5l2 2q-1 4 2 6l-1-3h3l-2-3-1-2v-3l2 1 4 1-2-2-1-4v-3l-1-1-1-1q0-2-2-2h-6"/><path id="path5896" d="M2217 660c1 1 0-2-1-1l1 1"/><path id="path5904" d="m2223 673 1 1-1-2v1"/><path id="path5906" d="M2226 673v2l1-2-1-2 1-2-2 3 1 1"/><path id="path5912" d="M2229 677v-2 2"/><path id="path5914" d="M2230 673v2-2"/><path id="path5920" d="M2216 668v-1 1"/><path id="path5924" d="M2221 661v1-1"/><path id="path5936" d="M2210 664c0-3 4-1 0 0"/></g><path id="uy" d="m850 1024 1-3h3l2-1 4 2q3 2 4 5l1 1 2-1c1 0 3 4 4 3l2 1 3 2 2 2 4 2 4 4q4 2 0 4-1 4 2 6l-2 5q-1 3-3 3 1 2-2 2h-9l-2 1-2-1-4-2q-1-2-4-1l-4-1-4-4c-1-1-2-6 0-7v-3l-1-2v-2l-1-4v-11" class="landxx uy"><title id="title1738">Uruguay</title></path><path id="cg" d="m1356 794 2-4c1-1 2 2 3 1l1-2-2-2s1-4-1-3v-4h4l3-1q-1-5 2-3l2 4 3 1 3-3 1 3 2-2 1-3q2-1 0-3 2-1 1-4v-5l-2-1-1-1q-3-1-1-3l1-4q2 0 3-2l-1-3-3-3-6 2v-4l1-4h11l3 1q4 0 7 3v-3l2-3 2-4v-3l1-3h3q3-2 4-1l4 1q3-1 4 2l-3 7-1 6-1 5-1 4v3l-1 3q1 4-1 7l-6 6-1 3-4 5v7q0 6-3 7l-2 2-3 2-2 3-3 1-1-4v-1l-4 1-1 2-2 2-2-3c-1 2-2-3-3-1l-2 2-3 2q-2 1-2-2-2-4-5-6" class="landxx cg"><title id="title1741">Congo</title></path><g id="me"><title id="title1744">Montenegro</title><path id="me-" d="M1406 392c2-1-2-5 1-4q0-4 2-2v-3l2 2 4 3 2 1-1 1 1 2h-2l-1-1q-2 3-2 7l-3-3-2-2h1l-2-1" class="landxx me"/></g><g id="ee" class="landxx coastxx ee eu"><title id="title1749">Estonia</title><path id="path5944" d="m1422 264 1-2 2-1h1l1-1 2-1-4-1-2 1h-2q-1 1 1 2v3"/><path id="path5946" d="m1425 254-4 1 3 2h2l1-1-2-2"/><path id="path5948" d="M1428 258h2-2"/><path id="path5950" d="M1428 255h1-1"/><path id="path5970" d="m1430 258 3-1h-3v-4h4l-1-1 3-1h2s5 1 4-1h5l4 1 8 1q-2 0-2 2l-2 3 1 2-1 2 2 1 1 2q-3 2-2 3l-3-1-3 1-5-3-2-1h-2l-5 1 1-3-1-1c-1 3-5-2-6-2" class="landxx ee eu"/></g><path id="rw" d="m1491 781 2-4q0-4 4-5l2-1 1 1q1-3 3-3l2 4q2 3 1 5 0 3-3 2h-4q1 2-2 4l-2-1h-3l-1-2" class="landxx rw"><title id="title1757">Rwanda</title></path><path id="am" d="M1581 404h4l6-1 1-1c0 1 3 2 1 2l4 3c-3 1 0 3 1 4l2 1q0 2-2 2l5 3 2 1q-2 2 1 2v3h-3l-3-4-1-2-1 1-3-1q-1-2-3-1l-4-3h-4v-4l-3-5" class="landxx am eaeu"><title id="title1760">Armenia</title></path><path id="sn" d="m1140 632-1 1 3-3 3-5c1-1 3-10 5-8 1 1 6 0 7-1q5-2 8 1 1 3 4 3 3 1 2 4l2 2 2 2 2 2 2 3v2l1 2v5l1 1 1 1c0-2 2 2 2 2l1 3v3h-4l-4 1-4-1-1-2h-14l-4 1-4 1-4 1h-2v-1q1-2 2-1l3-1 2 1h1l2-2-1 2-4-2c0 3-5 1-4 0l-1 2v-4l3-2h4l1-1h3q1-2 2-1l8 2 1-2h-4l-2-1-1-1-3-1-2 1v1h-8l-1-1 1-1v-2l-2 2 3-3-3 3q0-5-4-8" class="landxx sn"><title id="title1763">Senegal</title></path><path id="tg" d="m1270 663 4 1h4q-2 4-1 6l4 3 1 6 1 5v19l1 2-4 2-3-2-2-3 1-5-1-2 1-4v-4l-2-3 1-4v-2h-2l1-1v-4l-1-3-2-4v-2l-1-1" class="landxx tg"><title id="title1766">Togo</title></path><g id="es" class="landxx coastxx es eu"><title id="title1769">Spain</title><path id="path5984" d="m1140 520 1-1-1 1"/><path id="path5986" d="m1142 513-1-3q3 1 1 3"/><path id="path5988" d="M1146 517v-1 1"/><path id="path5990" d="m1150 517-1-3 5-2q-1 4-4 5"/><path id="path5992" d="M1158 520q-3-3 0-4c3-1 2 3 0 4"/><path id="path5994" d="M1167 517v-1l4-5v3l-4 3"/><path id="path5996" d="M1172 510h-1q2-3 3-2l-2 2"/><path id="path5998" d="M1214 389v-2l1-1 6-2q-1 0 0 0h-1l3-2 2-1c0 1 4 1 4 3q3-2 7-1h3l5 1h7q2-1 4 1l3-1 4 1h4l2 1v1h1l6 3 1-1 1 1 5 1 1-2 3 1q2 0 2 3l1-1 3 1h7l1 1-1 1v2q-2 3-5 4l-2 2h-4l-6 4q1 1-1 2l-4 4q-5 4-1 10 2 1 0 3l-4 2-1 3-1 2q1 2 0 0 0 3-3 2l-5 3q0 4-3 3-2-1-2 1h-12l-2 1-4 1-2 3-2 1-3-1-2-3q2 0 0-1-1-1 1-3l-1 1s-4-3-3-4l-2 1h-2l-1-4 1-1 1-2q2 0 3-2-3 1-3-2l3-5-2-2-1-2-1-2 3 1 1-2v-3l1-1 1-2-1-4q2 0 3-2l3-3-3-1v-2h-4l-3 1h-3q-2 1 0-2l-1-1-2 1-2 1 2-4-2 1 1-1-1-1 1-2-2 2q-1-1 1-3h-2" class="landxx es eu"/><path id="path6006" d="M1286 424q-2-2 0-2h1l-1 2"/><path id="path6008" d="M1286 425h1-1"/><path id="path6010" d="M1300 419h-3l-3-1v-2l5-2v2h2l-1 3"/><path id="path6012" d="M1303 414q3-2 4 1l-4-1"/></g><g id="ga" class="landxx coastxx ga"><title id="title1784">Gabon</title><path id="path5980" d="M1339 766v-1 1"/><path id="path6014" d="M1338 767v-2 2q1-2 1 0l3-5v-5l1 2h2l2-1q-3 1-4-2l-1-2 2 1v-4h13v-10q0-3 3-1h9q4-1 2 2v7l5-2q4 1 4 3 2 3-1 5-2 1-2 4v3l2 1 2 1v9q1 2-1 3l-1 3q0 2-2 2l-1-3-3 3-3-1c1-3-5-7-4-3q0 3-3 4l-2-1h-2v4q2 0 1 1v2l2 1v2l-1 2-2-2-3 4-5-6q-2-4-6-7c1-1 2 2 3 1l-3-1-3-5 2 1-2-2-1-1-1-3 1 3h3l-1-2-1 1v-2c-1 3-3-3-4-4" class="landxx ga"/></g><path id="hu" d="m1388 355 3-1v-3l1-2-1-1h3l1-3 2 1q4 3 10 1-2-2 1-2l3-1h2q2 1 4-1l1-2h7q1 2 3 1 2 0 5 3 2 0 0 2l-3 1-2 2-3 6-1 2q0 2-2 2l-2 1h-8l-2 1-4 1-2 1q-3 1-5-1l-3-1-3-3-2-2q-1-2-3-2" class="landxx hu eu"><title id="title1789">Hungary</title></path><path id="mw" d="m1519 878 2-4v-4l5-3q-3-3-2-8v-4q0-3 2-2 2-1-1-6c-2-2 1-2-1-3l-2-1v-2l2 1 2 1 3 1 2 4v4l1 7c0 3-4 5-3 7q5 7 2 7c0 5 3 4 2 6q0 6 2 2l3 3c1 1 0-4-2-6l-1-1q2-1 3 3l4 4 1 6-1 6-1 3-3 1-1 3 1 3v2l-2-1v-2l-5-6v-3l1-3 1-3-1-5h-3l-3 1-4-5z" class="landxx mw"><title id="title1792">Malawi</title></path><path id="tj" d="M1752 420q0-2 2-3h5l1-1 1-1q0-2 1-1l-1-1h1l-3-1h5v-5l3 1 3-3 3 2q1 1-1 2v2l2 1h2l-3 2c1-1-3-2-4-2q-3 0-3 2c-2-1-1 3 0 3h6v1l2-1 2 2 4-2 1 1h2v1q3 0 4 2c0-3 5-2 6-2l4-1v2l2 3v2l2 1 3-1q4 1 3 4l1 1 1 3 1 1 1 2-1 1-1-1h-3q-3 2-5 1c2-2-3-2-4-1q-2 1-2 3l-4 1c-6 6-6-3-6-7 0-3-1-1-2-2v-2l-3-2q-3 1-5 4l1 2q1 3-2 2h-3v2q-1 3-3 0h-2l-1 1-2 1-2 1q-3-2-1-6 3-3 0-6c-2-1 0-6-3-6h-2l-3-2" class="landxx tj"><title id="title1795">Tajikistan</title></path><g id="kh" class="landxx coastxx kh"><title id="title1798">Cambodia</title><path id="path3472" d="m2062 669-1 1 1 3v-4"/><path id="path6024" d="M2054 661h-1l1 1v-1"/><path id="path6026" d="M2056 667h-1 1"/><path id="path6044" d="M2047 644v-2q3-1 4-5 3-3 6-2h7c3-1 2 2 4 0 0 4 4 1 5 3h2l-1-3h2l1-1 1-1 1 2q4 1 6-3v2l-1 2 1 2 1 2 1 5v3l1 2q-1 5-3 3l-2 2-4 1 1 3q-2-2-4-1l-1 2 1 2 2 3v1h-2l-1-2q-3 2-5 1l-1 3-3 1h-2l-3-2-2 1v-1q1-2-1-4l-1 2h-2l-1-3v-2q-2-1 0-2l-1 1-2-4v-3l-4-8" class="landxx kh"/></g><g id="kr" class="landxx coastxx kr"><title id="title1805">Korea, Republic of</title><path id="path6028" d="M2176 433q-1 1 1 1l-1-1"/><path id="path6030" d="m2181 445-1-1 1 1"/><path id="path6032" d="M2185 458h1-1"/><path id="path6034" d="M2187 461h-1c-1 2 2 1 1 0"/><path id="path6036" d="M2194 469c-1 0-6 2-4 3s6-2 4-3"/><path id="path6038" d="m2190 462 1 1-1-1"/><path id="path6040" d="M2196 457q0 3 2 2l-2-2"/><path id="path6042" d="M2201 458q3 2 1-1l-1 1"/><path id="path6046" d="m2177 433 2 1q-4-3 0-6h7v-2l7 7 7 6 2 6s2 4 3 2l1 6-1-1q1 3-1 4l-3-1-1 2q1-1 1 1l-4-2-2 2 1 1v1l-2-2-1 1 2 1h-1l1 1q-2 1-2-1v-1q-2 1-2 3l-1-1-1 2-1-2q-2 0-2-2l1 1h1l-2-1 2-1h-1c0 2-2-2-3-2h2q-3-3 0-4h-2l1-2 1-1h-2l1-1c-1 1-4-3-3-4q-1 1-1-1-1-2-2 0l-2-2 1-1q0 2 0 0l1 1v-2l3 3 1-2q-2 0-1-1-3 0-1-2l-3-1v-2l-1-1" class="landxx kr"/></g><g id="hn" class="landxx coastxx hn"><title id="title1817">Honduras</title><path id="path5978" d="m595 635 1-4 2-2 4-4 2-1 2-1q1-2 3-1l6 1h5c0-1 3-1 1-2l5 1h5l4 1 3 3-2-1h-1v1l2 2-1-1h3v1q2 0-1-1l4 3-3 1-5 1-3 1-1-1-1-1-2 3-1 1v1l-5 4q-2-3-4 0l-3 1-1 4-1 1-3 1c1-1-3-2 0-3l-2-1-2 1 1-2q1-2-1-3h-2l-2 1c0-2-6-5-6-5" class="landxx hn"/><path id="path6082" d="m617 619 3-2-3 2"/></g><path id="is" d="m1151 205 4-1h6l-1 1 1-1 3 1-6 2h5c-2 3-7-1-9 2q0-2-1 0h-3q-2 1 1 1h8l-1 1 1 1 4-1-2 1v1h-2 4l-2 1-2 1-2 1h-1v-1l-1 2h7l3-1-1 1h2v1l2-1 1 1h-1q1 2 3 1l5 1h4l2-1 1-1h2q2 1 4-2 1 2 4 0l5-3 3 1 3-3 1-1h3l-1-1h2l-2-1h3q1-1-2-1l2-1h-2q3 0 2-2l-2-1-3 1 2-2-3 1 1-2-2-1 1-1 2-1-5 2-1-2-3-1q-2-1-2 1l-1 2-3-1-3 2q-1-2-4-2l1 2v2q-1-3-4-4l-1 1h-2l-1 2-3-2-2 1q1 3-1 3l-1-1-3 2v2q0-2-2-2c2-1-1-2-1-3 2 2 4-2 2-1q1-1-1-1l-1-1-2-1-1-1-3 1 3 1h-3l2 2-1 1q1-3-1-1h-1v-1l-1-1q-2 0-1 1v1l-2-1 2 2h-3l3 1h-1 1l-5-1 2 1v1h-4l3 1" class="landxx is"><title id="title1822">Iceland</title></path><path id="ni" d="m607 647 2 1v-1h2l1-2 2-1v-3h2l2-2q2-2 3 1l5-4 1-2 1-3 3 1h3l4-1 2-1h2l-2 1 1 5-3 5-1 7q1 3-1 5l1-4-2 2 1 5-1-2v6q-2 2-1 4 2 2 0 2h-3l-1-1h-1l-2-1h-3l-3-1q-1 0 0 0s7 3 5-1l-2-4-3-2-2-1v3l2 5c-1-1-1 2-2 0l-3-4-6-7c-1-1-5-4-3-5" class="landxx ni"><title id="title1825">Nicaragua</title></path><g id="cl" class="landxx coastxx cl"><title id="title1828">Chile</title><path id="path6426" d="M841 1236v-1 1"/><path id="path6432" d="M855 1239h-1 1"/><path id="path6440" d="M858 1239h-1 1"/><path id="path6442" d="M859 1239h-1 1"/><path id="path6428" d="M856 1233c-2-2-8-3-9-1l2 2h4q-1 0 0 0l1 1 2-2"/><path id="path6430" d="m853 1237 1-1-1 1"/><path id="path6434" d="m857 1238-1-1-1 1h2"/><path id="path6436" d="M855 1232h2-2"/><path id="path6438" d="M857 1234h-1l2 1-1-1"/><path id="path6444" d="M859 1234q1-1 0 0"/><path id="path6364" d="M803 1218h-1 1"/><path id="path6372" d="M806 1220q-1-1 0 0"/><path id="path6374" d="M807 1219h-1l1 1-2-1h2"/><path id="path6376" d="m815 1225 2-1v-1l-2-2h-2q-1-2-1 0-1-3-3-2l1 1h-2l3 1h-4l1 1q3-1 2 1h4l1 1h-2l2 1"/><path id="path6378" d="m812 1225-2-1 2 1"/><path id="path6380" d="M818 1224h-1v1q2 1 1-1"/><path id="path6382" d="M818 1227h1-2 1"/><path id="path6384" d="M818 1222v1-1"/><path id="path6386" d="M821 1223h-1l-2 1 3 2q2 0-1-2l2 1-1-2"/><path id="path6390" d="m820 1228-1-1 1 1"/><path id="path6392" d="M820 1227h-1 1"/><path id="path6394" d="m824 1224-3-1q2 3 3 2l1 1h2q-2-3-2-1l-1-1"/><path id="path6396" d="m823 1230-1-1 1 1"/><path id="path6400" d="m830 1226-2-3h2l-3-2v2h-1l4 3"/><path id="path6402" d="M829 1231h1-3l2 1"/><path id="path6404" d="M831 1225h-1"/><path id="path6406" d="M834 1234q0-2 1-1l-3-1 2-1-2 1-2-1 4 3"/><path id="path6408" d="M831 1226h-1 1"/><path id="path6410" d="M833 1231h-2 2"/><path id="path6412" d="m836 1231-1 1 1-1"/><path id="path6414" d="m837 1234-1-1 1 1"/><path id="path6418" d="m837 1232 4-1h-5l1 1"/><path id="path6420" d="m837 1233 3 1q0 2 3 1l-1-1-1-1 3 1q2 0 1 2h4l3 1-3-2-3-1h3q-4 0-6-2l3 1v-2l-3 1-3 1h-3"/><path id="path6422" d="M838 1234v1-1"/><path id="path6424" d="M840 1235h-1 1"/><path id="path6318" d="M790 1206v-1 1"/><path id="path6322" d="m792 1208-1-3v1l1 2"/><path id="path6326" d="m793 1208-1-2 1 2"/><path id="path6328" d="m794 1210-1-1 1 1"/><path id="path6332" d="m793 1208 2-1-2 1"/><path id="path6334" d="m797 1207-4-2 4 2"/><path id="path6340" d="M797 1206v-1l-2-2 2 3"/><path id="path6344" d="M799 1210q-1-2-3-2l2 1q-2 1 1 1"/><path id="path6346" d="M807 1218h2l-3-1c2 2-3-3-1 0l-5-2-4-1 5 2 3 1 3 1"/><path id="path6350" d="m798 1206-1-1 1 1"/><path id="path6352" d="m801 1209-4-2 4 2"/><path id="path6356" d="M800 1210h1l-3-1 2 1"/><path id="path6358" d="M799 1207q1 0 0 0"/><path id="path6360" d="M800 1209h-1 1"/><path id="path6362" d="M801 1213v-2 2"/><path id="path6366" d="m803 1216 1 1-1-1"/><path id="path6368" d="M806 1215h-3 3"/><path id="path6370" d="M804 1208v-2 2"/><path id="path6272" d="m782 1190-4-3q0 2 2 1l2 2"/><path id="path6286" d="m784 1193 1-1q-2 0-1-1h-3l2 2-2-1 1 1 1 1 1-1"/><path id="path6290" d="m784 1197-1-2h1-2v1l2 1"/><path id="path6294" d="M785 1194h-1 1"/><path id="path6300" d="m786 1197-1-1 1 1"/><path id="path6304" d="M787 1195v-1 1"/><path id="path6306" d="m789 1198-2-2q-1 2 2 2"/><path id="path6308" d="m789 1200 2-1q-1-2-3-2l1 1h-2l2 1v1"/><path id="path6310" d="M788 1204v-2l-1-1 1 3"/><path id="path6314" d="m792 1198-2-2v-1h-2l1 1 3 2"/><path id="path6316" d="M789 1203h2v-1q0-2-2 0v1"/><path id="path6320" d="m792 1201-1-2q-1 1 1 2"/><path id="path6324" d="m793 1201-2-3 2 3"/><path id="path6330" d="M795 1203q0-2-2-1l2 1"/><path id="path6338" d="m795 1202-1-1 1 1"/><path id="path6342" d="m797 1202-1-1 1 1"/><path id="path6206" d="M777 1180q0-4-5-6l1 2q2 1 0 1h2l2 3"/><path id="path6218" d="m774 1172-1-1v1h1"/><path id="path6220" d="M774 1180q2 0 1-2h-2l2 1h-1"/><path id="path6224" d="m774 1180 2-1-2 1"/><path id="path6226" d="m775 1172-1-1 1 1"/><path id="path6230" d="m777 1174-1-2v2h-2 3"/><path id="path6232" d="M777 1177q1-2-3-2l3 2"/><path id="path6234" d="m778 1183-3-2q1 2 3 2"/><path id="path6236" d="m776 1175-1-1 1 1"/><path id="path6242" d="M776 1183h-1 1"/><path id="path6254" d="M777 1184v-2q-2 2 0 2"/><path id="path6258" d="M778 1182h1l-2-1 1 1"/><path id="path6260" d="M777 1174v-1 1"/><path id="path6262" d="m778 1181-1-1 1 1"/><path id="path6264" d="M781 1180c1-1-3-5-3-5v1l1 2q-2-2-1 1l3 1"/><path id="path6266" d="m778 1187-1-1 1 1"/><path id="path6268" d="M784 1191h2l-1-1q2 1 0-2c2 1-1-2 0 0l-2-5-1-2h-1c-1-4-4 1-1 0q-2 0 0 1l1 3-1-1c1 2-2-1 0 1h-2l2 1-2-2 1 3 4 3-2-3 1-2q2 2 0 1l1 1-1 1 2 1 1 1-1 1"/><path id="path6270" d="M778 1180v-1 1"/><path id="path6274" d="M778 1173v-1 1"/><path id="path6276" d="M781 1184q-1-2-3-1l3 1"/><path id="path6280" d="M780 1177q1-2-1-2l1 2"/><path id="path6282" d="m780 1174 3-1-4-1 1 2"/><path id="path6284" d="m782 1178-1-2 1 2"/><path id="path6288" d="m784 1178-2-1 2 1"/><path id="path6292" d="m784 1174-1-1 1 1"/><path id="path6296" d="M785 1187h1l-1-1v1"/><path id="path6298" d="M785 1175v-1 1"/><path id="path6166" d="M769 1154h-1 1"/><path id="path6176" d="M769 1155h1v-2l-1 2"/><path id="path6222" d="M775 1156q0-2-1-1l1 1"/><path id="path6240" d="m776 1157 1-1q-2-1-1 1"/><path id="path6244" d="m776 1155-1-1 1 1"/><path id="path6248" d="M776 1150v-1 1"/><path id="path6250" d="m776 1167 1-1-1 1"/><path id="path6252" d="M777 1159q1-3-1-2l1 2"/><path id="path6256" d="m777 1157-1-1 1 1"/><path id="path6144" d="m767 1141-1-1 1 1"/><path id="path6174" d="m770 1144-1-1 1 1"/><path id="path6130" d="m764 1121-1 1-3-1q2 2 1 4l2 6v2l2 1 2 1v-3q2 0-1-2h2s-4-3-2-3q-2-1 1-2l-3-4"/><path id="path6132" d="m761 1137 1-1h-1v1"/><path id="path6134" d="m764 1148-1-1 1 1"/><path id="path6136" d="m765 1146-1-1 1 1"/><path id="path6138" d="M766 1128h-1 1"/><path id="path6140" d="M767 1127h-1 1"/><path id="path6142" d="M767 1146h-1 1"/><path id="path6146" d="m767 1144 1-1-2 1h1"/><path id="path6148" d="M767 1141h-1 1"/><path id="path6150" d="M767 1142h-1 1"/><path id="path6152" d="m768 1139 1-1-3 1h2"/><path id="path6154" d="M768 1147q1-1-1-1l1 1"/><path id="path6156" d="m768 1122-1-1 1 1"/><path id="path6158" d="M769 1131h-2 2"/><path id="path6160" d="m769 1147 2-1-2-1q-2 0 0 2"/><path id="path6162" d="M769 1143v-1l-1-1 1 2"/><path id="path6168" d="m769 1140-1-1 1 1"/><path id="path6170" d="M770 1145v-1l-2-1 2 2"/><path id="path6172" d="M770 1141h-1 1"/><path id="path6178" d="M769 1148h3-3"/><path id="path6180" d="m770 1151-1-1 1 1"/><path id="path6182" d="M770 1143h-1 1"/><path id="path6186" d="M770 1152v-1 1"/><path id="path6188" d="m771 1141-1-2 1 2"/><path id="path6190" d="m771 1144-1-1 1 1"/><path id="path6192" d="M771 1147v-1l-1 1h1"/><path id="path6194" d="M771 1155v-3 3"/><path id="path6196" d="m772 1148-2 1 4 1-2-2"/><path id="path6198" d="M773 1151h1l-3-1 2 1"/><path id="path6200" d="M772 1148q1-2-1-1l1 1"/><path id="path6202" d="M772 1146h1q-2-2-1 0"/><path id="path6204" d="M772 1124h-1 1"/><path id="path6208" d="M773 1153h1-1"/><path id="path6210" d="M773 1147h1l-1-1v1"/><path id="path6212" d="M774 1152h-1 1"/><path id="path6214" d="m774 1140-1-1 1 1"/><path id="path6216" d="m774 1154-1-1 1 1"/><path id="path6228" d="M778 1146v-2h-1l-2-1 1 2h-2l2 2q-2 1 0 1l2-2"/><path id="path6238" d="m777 1155-1-3q-2 1 1 3"/><path id="path6462" d="m742 918 4-2-1-3 1-1 2-1 1 3 2 2 1 4 4 6q2 2 0 4l1 2-1 2v3l2 1v1l3 6 4 8q-1 5 3 4 5-1 4 4l-2 7q-6 2-7 6l1 3q-2 2 0 5l1 3v3l2 5-2 1-2 3-3 9v5q-2 1-1 3l1 3 1 2v2q1 3-2 1l1 4-1 3v1l2 5 1 1-1 1 3 5 2 2v2c0 2 3 0 3 3v8l-1 3v3l-1 1 1 1 2 6v1l-1 2c0 2-2 0-2 2v3l1 2 1 4 2 4 2 3 1 2-3 3 1 5-1 1s2 4 0 3l2 2-1 2 2 5 1 5 3 3-2 2 1 3 2 4 2 1q-2 2 0 2l2 2v1l1 1v2l1 2 5 1-1 2-3 1c-3 0 0 1 1 1 2 0 6 3 3 5h-1l1 2 1 1-1 2q3 2 3 5v3l1 1-2 4v2l3 3-1 2 1 3-2 1q0 2-2 3l1 3 1 3 3 3 2 2h4l3 1v3l1 3 5 3q3 2 6 1 9-1 18 3l-4-1q-3 0-2 2l-3 1-5 1 2 4 1 3c2 3-2 2-3 2q-4 0-7-3c-1-2 3-1 2 0l1-1 1 2 1-4 1-1-2-2-2 3h-4l2 1h-1v2l2 1-8-3h4l-2-3h1l2-1 5-1h-6q-2 0-1-1-2 0-2 2h1l-1 1v2q-3 0-1-1l-2-1h1l-1-1 2-1v-1h-2v2l-1-1-1 1v-1c1-1-3-3-3-5l3 2h2q2 0 1-1 0 2-1-1l2 1q2 2 0 3h2l-1-3q-2-1 0-1l-3-3-4-2v1l5 2-5-1 2 1 1 1-1 2-2-3 2 3-3-2 1 1-1-2h-2l-1-1-1-2 3 2-3-4q2 1 0 0v1l-2-1-2-2h2l1-1v-1q-2 0-1-2l-1 3-3-3 1 1h1l-3-2-3-1c1-2 4 1 6 1q-4-1-5-3l3 1v-2c-1 2-4-1-2-1q-3 0-1-1l4 1-3-2-1-1h1l-1-3h-1v4l-3-4-1-2h3q-3 0-3-2h3l-1-1s-3 0-1-1l-5-2c0-2 3 1 3 1l-1-1h4l1 1h2v-1q-1 2-3-1l3 1-1-1-2-1-1-1-1-1v2l-6-1 1-1 3 1v-1h-1l-2-1c-1 0 0-3 2-1v-2h-2 2l-2-2h-4 2l-4-1-1-3-3 3c1-2 3 3 0 1-2-1 0-5 2-4v-2h1v-2c0 3-3 1-1 1l-2-1 3-1 2 1q-1-1 1-1l1 1 1 1q2 2-3 1l5 1-1-1 2 1v3l1-5-1 2q-2-3 1-5-2-1-2 1v-3l1-1 2 1q2-1 0 0l-1-1-3-1c2-1-2-2 1-2q3-3 2-5-3 1-5-3c-1-1 2-2 1-3h-1l-1-2v-4l-1-1v-2q-1-2 1-1l-2-2q1-1 3 2l-2-5q-4 2-2-1 3-1 1-3c1 4-2 1-4 0l-1 3c-1 0-5-1-3-2-4 0-4-6-5-9v-5l1-2v-3l-2-4-3-5-1-3-2-3v-1l-1-3h3l-1-5 1 1v-10l2-4-1-8 1-4-1-4 1-3-1-3v-2l-1-2-1-4-4-9q0-2 2-3v-3l-2-5-1-4 1-4v-4l1-4v-9l-1-7 1-3-1-5-1-5v-4l-2-2 1-3c1 1 1-4 1-4q1-7-1-13l-2-14-1-6-1-4" class="landxx cl"/><path id="path6464" d="M772 1155v-1 1"/><path id="path6470" d="M806 1209v-1 1"/><path id="path6472" d="m826 1218-1-3h2l-2-1h2q2-1 2-3l3 2 3-1 2 4 2 4 6 11-3-1 2 1h-5l-2-1h-2l1 1-2-1h-4l2-1-3 1-1-1-2-1-2 1h-2l-1-1h3-1 1c-2-2 3 0 4-1l1-1 1 3v-2l4 1-4-2-3-1 6 2v-1l2 2-1-2 3 1q2 0 1 2l2-1q-1-1 1-1-6-1-11-4c-1-2 5-2 4-4-1-3-6 2-8-1" class="landxx cl"/></g><g id="ma"><path id="ma-" d="m1176 520 2-2 4-1 8-3 6-6 5-6c1-1 4-5 1-7v-5q0-4 3-7 2-2 2-5l2-2q2-3 6-5l7-4q8-5 9-14l2-3 3-1 1 2 3 3q3 2 7 1c2-1 5 1 7-2v2q2 2 0 0l3 1q2-1 2 1l3 2q-1 2 1 2l-1 3v3l1 3v4l1 2 2 2c2 1-3 3-1 4-2 0-11-3-13 1q0 2-4 2-3 1-1 3c-2 1 1 3 0 3l-3 1-3 3h-3l-3 4-6 3q-2-1-3 1-2 2-4 0l-2 2h-3l-2 2-3 2-3 4v7h-33" class="landxx ma"><title id="title1986">Morocco</title></path><g id="eh"><path id="eh-" d="m1144 580 1-8 1-4 4-4 1-3 1-2 3-6-2 2 7-7 3-9q1-5 5-8 5-2 6-6l2-5h33v15h-25l-1 22-6 2q-3 2-3 6c1 1 2 9 0 10h-28q-2 1-2 5" class="landxx ma eh"><title id="title1989">Western Sahara</title></path><path id="xz" d="M1208 521v3l-2 1q-2-1-4 1l-3 1h-3l-2-2-5 1q1 2-1 3l-2 4-2 1-1 1-1 5-1 3-2 3q-3 1-4 4l-3 3-4 3-2 8-2 5-2 2q1 1-1 3h-16l-1 3q1-2 3-2h27l1-14q3-3 8-4v-16l1-6h25v-14z" class="limitxx ma eh xz"><title id="title1992">Sahrawi Arab Democratic Republic (Free Zone)</title></path></g></g><path id="lr" d="m1183 700 2-3 4-4 1-3q2-1 2-3l1-1h3l2 1v2l1 1-1 6q3-1 3 1 3 0 3-3l1-1 2 2v5l-1 2-1 1 2 1c-1 2 3 0 4 2l1 2 2 2v5q-2 3-1 7l-3-1-4-2-7-4-6-7c0-1-6-3-4-4l-3-2q-2 0-3-2" class="landxx lr"><title id="title1997">Liberia</title></path><g id="nl"><title id="title2000">Netherlands</title><g id="nlx" class="landxx coastxx nl nlx eu"><path id="path6448" d="M1306 314q1 2 2 1l-2-1"/><path id="path6450" d="M1307 314h3-3"/><path id="path6452" d="M1313 304v-2 2"/><path id="path6454" d="m1315 301-1 1 1-1"/><path id="path6456" d="m1316 301 2-1-2 1"/><path id="path6458" d="M1319 300h2-2"/><path id="path6482" d="M1303 318c0-2 5-1 6-1q-2 2-3 1h-3"/><path id="path6484" d="M1325 300q-5 0-7 2l-4 2-2 1-4 7q0 2 2 2h3l-5 1q2 1 0 0l1 2-2-2-3 1 3 1q3 1 4-1h3l6 3q-4 2 0 3v-2l2-4-2-2 2-1 4-1v-1h1c2-3-2-3-2-4l3-1 1-3zm-6 7v1l-1 2-3-1 2-1z" class="landxx nl nlx eu"/></g><g id="bq"><title id="title2011">Bonaire, Sint Eustatius and Saba</title><path id="bq-" d="m753 656-1-2v-1q2 1 1 3" class="landxx coastxx bq"/></g></g><path id="cf" d="m1451 678-2 4h1v2l5 1q0 3 2 3l3 1q1 2 3 2v3l2 2 3 2 2 2 2 3q-1 1 1 2-1 1 1 3l3 1 2 3 1 4q-2-2-4-1l-2 1h-1l-1-1-3-1q-2 1-4-1l-1 2-2 2h-3l-2-1-4 2-5 2q-1-3-4-1v2l-2 3-6-1h-2l-3-1-3-1-2-3-5-3q-3 0-5 3l-2 3-2 1 1 3v4h-5l-3-1-4 1q-3 0-4 2l-1 4-2 5-1-5-3-3c0-1-6-7-3-7l-3-4-1-6-1-1v-5l-1-2 2-2 1-3 4-6c1-3 2-1 4-2l3-1 2-2q0 2 2 3l3-2 7-2q2 1 4-1t3-5l-1-1c-1-1 4-1 5-1q6 0 10-5l3-4 3-4q-1-2 2-2l4-3 4 3 4 5z" class="landxx cf"><title id="title2017">Central African Republic</title></path><path id="sk" d="M1393 340q1-2 4-1l4-3c0-2 6-4 6-2l3-2q3 2 2 3 2 1 3-1h3l5-1q3-1 4 2l3 1v2l-2 4q1 0 0 0l-4-1h-4q-3-1-3 2-1 2-4 1t-3 1c-1 1-6 0-3 2l-5 1h-3l-2-2-3-2v-2l-1-2" class="landxx sk eu"><title id="title2020">Slovakia</title></path><path id="lt" d="M1417 278q1 1 2-1l3-1h17q2-1 3 1l3 1 3 1 4 3q0 2 2 3l-2 1-2 2c-3 1-1 2-3 5h1l-1 1h-2l-3 1-2 1h-6l-2-3q-2-3 0-5l-2-1-6-1-4-1-2-3-1-4" class="landxx lt eu"><title id="title2023">Lithuania</title></path><path id="zw" d="M1462 914h3l2 1q2 1 2-1l3 2q3 1 5-3l4-6 2-2 3-1q4-1 3-5l4-3 4-1h4q-1 4 3 3l5 1 5 3 4 1 2 1v15l-1 3-1 2 1 1v1l-1 1 1 3v3l-3 4v3q-2 3-1 4c-1-1-6 7-7 8l-2 2q-2-2-6-1l-4-1-4-1-2-1-1-2c-1-2-7 0-8-2l-1-6q1-4-3-3 0-4-3-5-4 0-6-4l-3-8q-3-3-3-6" class="landxx zw"><title id="title2026">Zimbabwe</title></path><g id="lk" class="landxx coastxx lk"><title id="title2029">Sri Lanka</title><path id="path6496" d="m1878 681 1 1-1-1"/><path id="path6498" d="M1879 694c0 3 1 16 7 14q6-2 8-5 2-4 0-8l-1-3-1-1-2-5h-1c2 0-2-5-3-6 0-1-4-6-5-5l2 2-4-2 2 2 3 1-3-1-1 1v3l-1 9-1-2 1 6"/></g><g id="il"><title id="title2035">Israel</title><path id="il-" d="M1524 490q3-2 2-4l2-8 1-3v-2h2l2-1v8l-2-2-2 2q-1 3 1 4c3 0-2 2-1 4l4-1v3l-1 5q0 5-2 9l-6-14" class="landxx il"/><g id="ps"><g id="ps-"><path id="gaza_strip" d="m1524 489 2-3q1 2-2 4v-1" class="limitxx il ps"><title id="title2038">Gaza Strip (State of Palestine)</title></path><path id="west_bank" d="M1529 481q-1-2 2-3l2 2v7l-2 1q-2 1-2-1l2-3h-2v-3" class="limitxx il ps"><title id="title2041">West Bank (State of Palestine)</title></path></g></g></g><path id="la" d="m2023 583 1-3 2-1v-2l1-2 2-2q1 3 3 3h2v-4l-1-2-1-3 1-2v1h3l1 1 2 3 2 2v-1l2 1v4q0 2 4 3l3 2 1-2h4l1 2-1 2 2 1 1 1q4 1 1 3l-3 2-3-1 1 2-1 2 2 1 4 3 4 1 1 3 2 1 1 2 3 3 3 3 2 3 1 3 1 1h2l1 1 3 3-1 2 2 3q2 1 2 3l-1 1v1q1 4-3 4-3 0-4-2l-1 1-1 1h-1l-1 1q2 2 1 3l-2-1-3-1q-2 0-2-2l2-2v-3l-1-1 1-2h-1l1-3q-3-1-2-3-5-1-6-6 1-5-2-8c-3-1-4-6-7-6 0 0-5-2-4 0l-2 3-1 1-2-1q-2 0-3-2c-1-1-1 2-3 1l-3 5h-2v-14q0-4-3-4l-1 1h-1l-2-2v-4l-1-2-2 1v-1" class="landxx la"><title id="title2047">Lao People&apos;s Democratic Republic</title></path><path id="kp" d="m2152 413 2-3 1-1 3-2 2-1 1-2q-1-3 1-5l1-1 3 2 5 2q2 1 2-2l-1-1-2-2 5-1q2 0 1-3h3l-1-5q2 0 3 2l6 4h-2l-1 1-1 5c0 1 5 6 3 7l-2 1v2l-2 1-1 2-3 1-1 1q-2 1-1 2l1 2v1l3 1c1 1 7 3 6 6 0 3-6 0-8 2l-1 4q-3-2-3 0l-2-1-3-1h1l-2 3 1-1-1-1-3-1h1l-4-1 2-1q-2-1-2-3l2-1 3 1c-1-2-4 0-5-3l1-4q-2 0-1-2l-6-1v1l-2-2s-3-1-1-2h-1" class="landxx kp"><title id="title2050">Korea, Democratic People&apos;s Republic of</title></path><g id="gr" class="landxx coastxx gr eu"><title id="title2053">Greece</title><path id="path6492" d="M1418 416h1l1-1q-1-1 1-2l2-2 1-2v-3h2l6-2h4l1-2h6l3-2h3l2 2q2-1 3 1l3-1h3q1-1-1-3h3l1 3q-2 1-1 3-1 2-3 2c1-1-4-1-5-1h-3l-3-1q-1 3-3 2-3 0-1 1v1l1 1q2 0 3 2l-3-2c-3 0 0 3 1 4l-4-3-1 1 2 2q-2 0-2-2l-4-2 1-2q-4 3-1 7c1 1 6 6 2 6q2-1-1-2-1 2 1 3-1 2-3 1l4 2h1q-1 1 1 1l4 2 1 3v3l-4-3-4 1 1 1s2 3 2 1l1 2-2 1-1-2h-2l2 4v3l1 2-3-2q-2-1-2 2l-2-3-1-2-1 3q-3-2-2-5c1-2-3-4-4-5l2-2 2-1 2-1 3 2 3 1q1 1 2-1v-1h-2q-1-2-2-1l-1-1-3 1q-2 1-5-1l-1 1q0-2-2-3l-1-2c0-1 4 1 3-1q-2-2-3 1l-3-4-2-3" class="landxx gr eu"/><path id="path3608" d="M1468 442q0-2 3-2l-3 2"/><path id="path6518" d="M1418 418v1l-3-4c3 0 1 3 3 3"/><path id="path6520" d="M1422 428v-1 1l2 2-3-1v1q-1-2 1-2"/><path id="path6522" d="m1423 424-1 2 1-2"/><path id="path6524" d="m1423 428-1-1 1 1"/><path id="path6526" d="m1424 434-1-2q2 0 1 2"/><path id="path6528" d="M1440 445v2-2"/><path id="path6530" d="m1443 431-1 1 1-1"/><path id="path6532" d="m1443 434-1-1 1 1"/><path id="path6534" d="M1443 427c1-2-3-4-4-3l2-2 2 2 4 1 1 4 2 1h-1l-2-3h-4"/><path id="path6536" d="m1444 422-1-1 1 1"/><path id="path6538" d="M1449 455h-4v-3l1-1q1 2 3 1v1h3l6 1q2-1 2 1h4v1l-2 1h-8l-1-1-4-1"/><path id="path6540" d="M1449 435v-1 1"/><path id="path6542" d="M1449 443v-1h2l-2 1"/><path id="path6544" d="M1450 409v-2 2"/><path id="path6546" d="m1450 424-1-1 2 1h-1"/><path id="path6550" d="M1453 414h3l-1 1-2-1"/><path id="path6552" d="m1453 434-2-3h1l1 3"/><path id="path6554" d="m1454 434 1 1-1-1"/><path id="path6556" d="M1454 443h-1 1"/><path id="path6558" d="m1455 440 1-2-1 2"/><path id="path6560" d="m1456 436 1-1-1 1"/><path id="path6562" d="m1457 443-1-1 1 1"/><path id="path6564" d="M1457 409v1l-1-1h1"/><path id="path6566" d="M1457 440v-1l1-1-1 2"/><path id="path6568" d="m1460 442 2-2-2 2"/><path id="path6570" d="M1461 430c-2-1 0-3-2-4 2-2 4 2 2 4"/><path id="path6572" d="m1461 435 2-1-2 1"/><path id="path6574" d="m1463 423-2-1 1-1h-2v-1q3-1 5 2l-2 1"/><path id="path6576" d="M1467 434s-3-1-1-1h2l-1 1"/><path id="path6578" d="M1467 439v-1 1"/><path id="path6580" d="m1468 440 1-1-1 1"/><path id="path6582" d="m1470 453 1-3-1 3"/><path id="path6584" d="M1475 448q0 2-1-1l3-3v3l-2 1"/></g><path id="tm" d="M1643 399q6-7 14-4 4 2 6 6 3 2 8 1l5 1v-2q-2-4 0-6c2-1 4 1 4-2 0-2 4 1 4 1l-2-3 2-1 2 1 3 1 1 2h3l2 2 2 2v3l5 2h3l2-1q4 1 5 5l4 6 7 5 8 4 7 4 6 3 3 1 3 1v2l1 3-6-1-1 1-2 2h-3l-1 3v3l-1 2q-4 4-9 3l1 2-1 2-4 2-3-2h-3l-2-1-1-3-1-2-1-4-2-1h-3l-4-3-4-2-3-3h-5l-4-2q-3 0-4-2l-3-1s-6-1-5 1h-5l-5 3v2l-2 1h-4l-1-3-1-6v-4l-2-2-1-1q-1-2-3 0-2-2 1-4c-2 2 2 1 2 1l-1-1v-1q-2-2-5-2 0 2-1 0l-1-2 1-4v-2l-1-1v-1l2 2q-1 1 1 1h1q1 1 1-1l2 3 2-1 1-1q-1 1 1 1l-1-2 1 1q4 0 1-2h1c-1-2-6-3-6-4l-3-6q-5 1-6 3v2q1-2 1 1l1 3-2-2-2-2" class="landxx tm"><title id="title2092">Turkmenistan</title></path><g id="ec" class="landxx coastxx ec"><title id="title2095">Ecuador</title><path id="path6588" d="M571 764v-2 2"/><path id="path6590" d="M570 760q2 0 2 2l2 3q-3 1-2 3 3 1 5-2l-2-2-1-2q-1-4-4-2"/><path id="path6592" d="M578 763q1-2-1-2c-2 0 1 2 1 2"/><path id="path6594" d="M579 757h-1 1"/><path id="path6596" d="M580 766q3-1 0-2-3 1 0 2"/><path id="path6598" d="M579 771h1-1"/><path id="path6600" d="M586 768q3-1 2-3l-2 3"/><path id="path4798" d="M660 782v-1 1"/><path id="path6602" d="m659 783-2 1 1 2 1-2 1-1h-1"/><path id="path6790" d="M652 779q2-1 1-3v-5q-2-3 1-4l1-1 2-1q-3-1-1-3 3-3 3-5v-4q2-3 3-1l2-2h3l1-3q3 4 8 5l2 2q0 2 2 3h7v-1q2 0 3 2l5 3h-3l3 2 1 5h-2q-1 8-9 14l-8 3-3 2-1 1v2c0-2-1 2-2 2l-1 5-2 4q0 2-2 2l-2-4-3-1-3-1q-2 2-1-1l-1-2h2q1-3-1-5l3-2 1-3v-7q-2 2-1 4-1 2 0 0l-1-1-2 3-3-3-2-1" class="landxx ec"/></g><path id="bj" d="m1277 667 1-3 1-1q2-3 4-2l5-2 1-3 1-3h1q3-2 4 1l1 2 2 2v2q-1 2 1 3l1 3v3l-1 1-1 3-1 2-2 2-1 4-2 1-1 3v6l1 4v7l-1 3h-7l-1-2-1-4 1-2v-12l-1-5-1-6-3-4-1-3" class="landxx bj"><title id="title2108">Benin</title></path><path id="si" d="m1371 363 1-2-2-1q2-3 3-2l5 1 4-2h6q-1-2 1-2l3 3q-3-1-2 1h-2l-3 2 1 2-3 2h1q0 2-2 2l-4-2-3 2h-4q3-1 2-2t-1-2" class="landxx si eu"><title id="title2111">Slovenia</title></path><g id="no" class="landxx coastxx no"><title id="title2114">Norway</title><g id="xv" class="landxx coastxx no xv"><path id="path6660" d="M1353 109h2v-1l2 1-2 1h2l-4 1 3 2h5l-3 1 5 1h3l3-1-1-1v-1q3 1 4-1v2h5l3-1-2 2h4l-7 1h-3l-5 1v1l-3-1c-2 1 2 2 3 2h10l4-1v1h-5l-6 1 7 1-7-1h-3q-2 0 0 2l6 2 3-1 3 1-5 1 4 2c2 0 6-1 3-2l2-1h-1l1-1 3-2q3-1 2-3c-1-1 3-1 3-1l-1-1 1-1q3-2 7-1 3 0 5-2l-9-1-3-1h-3q2-2-1-3l-2 1h-1q-1-1 1-1l-3-2-3 1q-2-2-3 0c-3-1 3 5 3 6l-4-2c1-1-3-3-4-3h-3l-2 1 1 2-4-2h-4l4-1h3q-1-2-4-1l-2 1h-3l-2-1s-3 1-1 1l-2 1h-2l1 1 2 1"/><path id="path6718" d="m1388 104-3 1 10 1 10-1-8 1 3 1-7-1q3 2 7 2h8q3 3 7 1l4-1 4-1-1-1 7-1q-2-3-6-2h-7l-2-1-2 1h-3l1-1-3-1-1 1v2l-4-1h-5l-5-2 2 1h-4l2 1h-8l2 1h3-1"/><path id="path6754" d="m1401 120 9-1-1 2h3l3-1 5-2-4-1h-5l2-1-6-1-6 1 3 1-1 2-2 1"/></g><path id="path6656" d="m1357 114-4-1q-1-3-3-2l3 3 5 1-1-1"/><path id="path6658" d="M1352 106h-2 2"/><path id="path6720" d="M1387 103v-1h-2l2 1"/><path id="path6730" d="m1394 141 1-1h-3l2 1"/><path id="path6732" d="M1395 108h1-3 2"/><path id="path6738" d="M1397 110h2-3 1"/><path id="path6740" d="M1398 100h-2 2"/><path id="path6742" d="m1396 114 4 1h3s5 0 3-2c-2-1-8 0-10 1"/><path id="path6744" d="m1397 101-1-1 1 1"/><path id="path6780" d="m1428 113 1-1h-2l1 1"/><path id="path6784" d="M1432 103h-1 1"/><path id="path6786" d="M1435 111h7-8 1"/><path id="path6788" d="m1449 104 10-1q-5-1-10 1"/><path id="path6606" d="m1317 238-1-1q0 2 1 1"/><path id="path6608" d="m1317 244-1-1 1 2v-1"/><path id="path6610" d="M1317 243h1-1"/><path id="path6612" d="M1317 242h1-1"/><path id="path6614" d="m1318 232-1-1 1 1"/><path id="path6616" d="M1318 252v2-2"/><path id="path6618" d="m1318 248-1 2 2-1-1-1"/><path id="path6620" d="M1319 247v2-2"/><path id="path6624" d="M1320 247h-1 2-1"/><path id="path6626" d="M1322 229h-1 1"/><path id="path6628" d="M1323 228v1-1"/><path id="path6630" d="M1325 228h-1 1"/><path id="path6632" d="M1324 228h1-1"/><path id="path6634" d="M1328 226h1-1"/><path id="path6636" d="M1329 225h-1 1"/><path id="path6638" d="m1333 224 1-1h-2l1 1"/><path id="path6642" d="M1336 221h-2 2"/><path id="path6644" d="M1336 222h1-2 1"/><path id="path6648" d="M1337 222h2-2"/><path id="path6650" d="M1337 220q3 1 5-1h-2q-1 0 0 0l-3 1"/><path id="path6652" d="M1340 218h-3 3"/><path id="path6654" d="m1339 220-1 1h1v-1"/><path id="path6662" d="m1353 208-1 1 1-1"/><path id="path6664" d="M1353 209h2-2"/><path id="path6666" d="m1355 212-1-1 1 1"/><path id="path6668" d="m1355 210-1 1h1v-1"/><path id="path6670" d="M1355 211h1-1"/><path id="path6672" d="m1358 207-2 1 2-1"/><path id="path6674" d="M1357 203h1-1"/><path id="path6676" d="M1362 201h2-3 1"/><path id="path6678" d="M1362 199c-1-1-1 2 1 1l-1-1"/><path id="path6680" d="M1364 186h-1q2 1 2-1l-1 1"/><path id="path6684" d="M1365 199h-1 1"/><path id="path6686" d="M1365 185h2-2"/><path id="path6690" d="M1367 184v1l3-1-1-1h-2v1"/><path id="path6692" d="m1371 184-1-1 1 1"/><path id="path6694" d="M1370 192h1-1"/><path id="path6696" d="M1371 184q3 1 5-2l-2 1c0-2-2 1-3 1"/><path id="path6698" d="m1374 181 3-1-2-2v2q-1-1-3 1l4-1-2 1"/><path id="path6700" d="M1374 182h1-2 1"/><path id="path6702" d="M1375 179h-1 1"/><path id="path6704" d="M1374 184h1-1"/><path id="path6706" d="M1375 186h2-2"/><path id="path6708" d="m1377 180 1 1h-2v2l2-1-1 1h2l1-1h3q2-1 1-3l-2 1-3 2c0-1 3-3 1-2q0-2-1-1v1h-2"/><path id="path6710" d="m1379 178 2-2-4 3 2-1"/><path id="path6712" d="m1379 185-1 1 2-1h-1"/><path id="path6714" d="M1381 182c3 2 2-2 0 0"/><path id="path6716" d="M1383 179h1-1"/><path id="path6722" d="M1386 176h1v1h-2 6v-2l-1-1c-2-1 0 2-1 0l-2 1h1l-3 1h1"/><path id="path6724" d="M1387 180h-2 2"/><path id="path6726" d="M1387 179h1-1"/><path id="path6728" d="M1396 173h1l-2-1v1l-1-1v1q-2 0 0 1h-2q3 2 4-1"/><path id="path6734" d="m1395 171 1-1h-1v1"/><path id="path6736" d="M1396 171c-1 3 4 0 4 0h-1l-1-1-2 1"/><path id="path6746" d="M1397 170h1-1"/><path id="path6748" d="M1398 170h1-1"/><path id="path6750" d="m1401 171-2 1 2-1"/><path id="path6752" d="m1402 170-3-1q2 2 3 1"/><path id="path6756" d="M1404 170q1 2 2-1l-2 1"/><path id="path6758" d="M1406 172h-1 1"/><path id="path6760" d="M1406 171h2-2"/><path id="path6764" d="M1420 166v-1h-2c2 2-3 0-1 1h-5l2 1-1 1 4-1 3-1"/><path id="path6770" d="M1417 169h1l-3-1 2 1"/><path id="path6772" d="m1421 167-4 1 2 1q2 0 2-2"/><path id="path6774" d="M1423 167q1-1-1-1-2 1 1 1"/><path id="path6776" d="M1423 164h1-1"/><path id="path6778" d="M1423 163h1-1"/><path id="path6782" d="M1434 164h1q-2 0-1-1h-4l1 1h3"/><path id="path6604" d="m1243 165 4-1 2-1-3 1-3 1"/><path id="path6794" d="m1317 236 5-1h-3c2-1-2 0 0-1h-2 2q-1 1-2-1h2c-2 0 1-1 1-1h2l1 1 5-1h-10l2-1-2-1 2 1h2l1-1 2 1-1-2q1-1 3 1c-2-4 4-1 2 0h1v-1h1l-3-1h-3l3-1h-3l4-1 5 1h-2q1-3 4-1c-1-2-3 1-4-1h1-4 2l-2-1h7l2 2-3-3q2-1 2 1h2q-2 0 0-1h-1l-1-1h4-2l1-1 1-1q2 0 1 1h2l-2-1h2-2l3-1q3 0 1 2h2c-2-1 1-1 1-1h3v-1h-1l4-1-1-1 2-1q-3 0-1-1l-4 2 2-1q0 3-3 3-3 2-4-1l2-1-3 1q1-1 0 0l4-2h-2 1v-1l1-1c0-2 4-1 4-3l2 1-1 1 3-1q-2 0 0-1h-2l3-1-1-1h4l-6 1-1-1h3-2 1c-2-1 3-1 0-1h3v-1h2-2q3 1 5-1l-2 1q-1 0 0 0l-1-1h-1l1-2v1h2l-2-1q0-2 2-1-2-3 2-1l-3-2 4-1h3l2-1-6 1 2-1h-2l-1-1h2l2-1h-3 2l-1-1h3-1 2l-3-1 3-1h3l-1-1h6l1-1h-7l2-1h1l-1-1h2-1 2l2 1 1-1h-3c2-1-2 0 0-1h3q-3-2-6 0l2-1h-2 2c-3 0 2-1 2-1h3l-4-1 2-1h2q0 2 2 3l-1-2c0 1 3 2 1 0q1 2 0 0h2-3l1-1h-1v-1l3 1-3-1h5l1 1v-1h3l-4-1h-4l2-2 4 1-1-1h2v-1q-2-1 2-2c-2-1 2-4 2 0q1-2 3-1l-3-1h2q2 0 3 2v-2h-2l1-1h-1q0-2 3-2v3l2-1v-1l2-2-2 5 2-2 3 1q-2-2 1-4l-1 1h2c-2-2 4 1 5 1l-2-1h1v-2q-2 1-5-1h2l2 1 2-1 2 1-1-1h3q-1 2-3 1h3q1 2 3 1l-1-1-1-1h1l2-1 3-1q-1-1 2-1l-2-1h2q-1-1 2-1s3 2 1 0l3 1-4 2 1 1-1 2h2v-2l6-4q2 2-1 2 3 1 1 2h3v-1h1l-1-1 2-1-2-1h7c1 1-3 1-3 1l2 1-3 1 4-1-3 2 3-1v2q-1-2 1-2c-2 0 1-2 1-2q3-1 3 1h3l2 1 5 1-2 1q-2 2-5 1h-6l3 1q3 0 2 1 3 0 1 1h3v-1l2 1h2c1 2-3 1-4 1l-2 2h-2l-1 2h-1v-2q2-2 0-3l-5-1q-1-2-4-1c-3 2-7 0-8 3l-1 3v2h-2l-1 2q-2 1-4-1h-11l-3-3h-5l1 1h-6q3 2 0 4h1q-3 2-8 0h-3v2q-2 3-5 1-4 2-6 5l1 2-3 4-2 1v1q-3 3-5 2v6l-2 2-3 3q4 1 3 4h-6q-3 0-5 4l-1 2 1 3v9l3 2 1 1-1 3-2 1 2 3-1 2-1 2q-2 0-2 2l-1 1v3q1 1-2 3l-1-2h-1l-3-2v-3q0-2-1 0v2-1l-1 1v3q0-2 0 0l-2 1h-1l-2-1q2 2-1 2v1h-2l1 1-3 2-5 2-2 1-2-1h-4l2-1c-3 1-11-4-8-6l4 1-1-1h3l-3 1-1-2h1q0-2 3-2l-2 1v-1h-1l3-2-2 1-2 1 1-1-2 1h1l-2 1v-2h-1v1l-1-1 2-2-1 2 1-1h2c-2-1 1-1 1-1l-2-1 3-2c-2 0 2-2 2-2v2q1-3 4-3l-5 1-2 1c-2 4-1 0-3 0l1-1-2 2-1-2 1-1q2 1 2-2l-3 1-2-1 3 1 1-2h-3l1-1q-1-1 0 0l5-1h3q3 0 2 2l2-1c-2-1 2-2 3-2q-3 0 0-2-2 1-2 3h-2l1-1c-1 1-5 1-3-1l-1 2h-9q2-1 0-1l3-1-3 1v-1" class="landxx no"/><path id="path6796" d="M1317 242h-1 2-1"/><path id="path6798" d="M1318 232h1-3 2"/><path id="path6800" d="M1320 243h-1l2-2-1 2"/><path id="path6802" d="m1324 251 2-1-2 1"/><path id="path6806" d="M1334 223q1 0 0 0"/><path id="path6812" d="M1457 172h1-1"/></g><g id="md"><title id="title2213">Moldova, Republic of</title><path id="md-" d="m1459 343 2-1h3c2-2 4 3 6 2l1 1h2l2 1 1 1 1 3 1 1h1l-1 3c1-2 6 3 4 4l1 1c-1 2-4-2-5 0l-1-1c-2 1 0 3-2 4l-2 4-2 1-1-2v-7l-2-5-5-5q-1-4-4-5" class="landxx md"/><g id="xp"><title id="title2216">Transnistria</title><path id="xp-" d="M1471 345h2l2 1 1 1 1 3 1 1h1l-1 3c1-2 6 3 4 4h-1l-3-2-1-1-1-2v-1l-1-3-1-2h-2l-1-1z" class="limitxx md xp"/></g></g><g id="ua"><title id="title2221">Ukraine</title><path id="ua-" d="M1498 309h-5q-1 3-3 2h-3l-1 1q-3-1-4 2v4l-3-2h-2l-2 1-2-1q-2-2-3 1l-1-1h-2l-2-1-1 1-3-1q-1 1-2-1h-4q-2-2-5-1h-9l-2 2-3 1q0 3 4 5l-1 1q2 3-1 4t-4 3q-2 2-2 5v2l1 1-2-1-1 2-2 4 2 1 1 1q2 0 3 2 1-2 3-1l3 1h5c1 0 2 3 4 1l5-1q2 0 2-2l2-1h2q-1-1 1-1l4-1q3 3 5 3l1 1h3l2 2 1 2 1 3c1-2 1 1 1 1 1 1 5 4 3 5l1 1c-1 2-4-2-5 0l-1-1q-2 0-1 2l-2 4q0 2-2 2c-2 1 1 2 1 2q2 2 4 0 4-3 4 1 2-1 0-2v-3c0 3 2 0 3-1l-1 2 3-3-2-3 2 3q1-3 4-5h2l1-1v1l2-1v-1l1 2h4q-4 2-7 1c1 1 6 0 2 2q2-1 3 1h8l1 1 1-1v-1h3l1 1h2v1c-2-1 0 3 1-1v1l2 1-1-3q3 1 2-2c3 1-1 3-1 4l5-5 4-1 3 1q0-3 2-2l3-2h3l1-2q-2 0 1-3l2-1h2l4-1 1-3h-1c2-1-1-2-1-3l2-1c0-2-2 0-2-2l1-1c2-1-1-3 0-4h-2l-2-1-2-1-5-1h-3l-3-2-2-2-5 2-4-2h-3l-2-5-4-1-4-1-1-3 2-1-3-3-2-2z" class="landxx ua"/><g id="xd"><title id="title2224">Donetsk People&apos;s Republic</title><path id="xd-" d="M1537 342h-1v2h-1v1h-1v3h1v1l1 1v1l-1 1v1h3v-2h-1v-1h1v-1h1l1-2h1l-1-1v-1h-1v-1h-1v-2z" class="limitxx ua xd"/></g><g id="xl"><title id="title2229">Luhansk People&apos;s Republic</title><path id="xl-" d="m1544 339-1 1-2-1-2 1v2l1 1-1 1v1h1v1l1 1h4l2-1 1-1v-3l-1-1-2-1zm-6 14" class="limitxx ua xl"/></g></g><g id="lb"><title id="title2235">Lebanon</title><path id="lb-" d="m1529 473 3-7 1-3 1-3h3v1h1l1 2c1 2-3 2-1 4q-4-1-2 2l-3 3h-1v1h-3" class="landxx lb"/></g><path id="np" d="m1863 509 1-3v-2l1-2q1-4 3-3h2v-2l2-1 3 1 7 5 4 3q1 2 4 2h2l2 3 5 2h2v2h4l3 3c1 2 1-1 1-1q1 3 3 1h3q2 2 4 1h5v6l2 6q-1 2-4 1-4 1-4-1h-3l-5-1q-2 1-2-1h-4l-3-2-2-2c0-1-7-3-6-1l-3-1h-3l-3-1q0-2-2-1l-4-2-4-2-3-2-4-3q-1 2-3 0l-1-2" class="landxx np"><title id="title2240">Nepal</title></path><g id="er" class="landxx coastxx er"><title id="title2243">Eritrea</title><path id="path6816" d="M1574 622q0 3-1 2l4 1-2-1-1-2"/><path id="path6830" d="m1547 628 2-4 1-4c1-2-1-8 2-8h2l2-3 3-1 3-4q4 6 5 14l1 3 1 3 2 2 1 3 1-3 1 2 2 2 3 1 2 2q3 0 4 3l3 4 2 1 1 1 1 2 2 2c1 0 3 4 3 2q2 1 1 2l-2 2c0 2-2-1-4 0l-2-4-4-5q-3-1-4-4l-5-4h-4q-3-2-5 0l-1-2-3 2-3-1-3-3-2 7-3-3-2 1-3 1-1-8" class="landxx er"/></g><g id="us" class="landxx coastxx us"><title id="title2248">United States of America</title><path id="path3780" d="M454 351v-2l-1 2h1"/><path id="path3782" d="M454 348v1-1"/><path id="path3784" d="M458 344v1-1"/><path id="path3818" d="m458 342-1 1-1 2v1q-1-2 2-4"/><path id="path3764" d="M406 466v-1h-1l1 1"/><path id="path3766" d="M408 465h2-2"/><path id="path3768" d="M414 474h-1l1 2v-2"/><path id="path3770" d="m415 470 1 1-1-1"/><path id="path3820" d="m554 521 2-2-3 4 1-2"/><path id="path3822" d="m559 516 3-2-3 2"/><path id="path4840" d="m456 340-1 2 1-2"/><path id="path4844" d="m458 339-2 1q2 1 2-1"/><path id="path4846" d="m457 341-1 1 1-1"/><path id="path4852" d="M459 339v1-1"/><path id="path3836" d="M647 503v-2 2"/><path id="path3860" d="m678 492-1 1 1-1"/><path id="path3824" d="m576 506-2 2 3-2h-1"/><path id="path3826" d="M600 504h-3 3"/><path id="path3828" d="M603 507c1-2-2 0 0 0"/><path id="path3830" d="M619 499h-1 1"/><path id="path3838" d="M648 503q2 1 3-1-1 2-3 1"/><path id="path3862" d="m678 515 1-3-1 3"/><path id="path3864" d="m679 519 1 5-1-5"/><path id="path3856" d="m676 540-3 3 3-3"/><path id="path3842" d="m664 530 1 1-1-1"/><path id="path3844" d="M664 530v-1 1"/><path id="path3848" d="m666 530 1-2-1 2"/><path id="path3872" d="M731 455h-1q3-2 3-5l-2 5"/><path id="path3874" d="m757 408-2 1 2-1"/><path id="path3876" d="M761 408h-1l-2 1-1-1 3-1 1-1h2l4-1 4-1-3 2 2-1 3-1q-5 3-12 4"/><path id="path4104" d="m780 400-1 1 1-1"/><path id="path4106" d="m784 401-2 1 2-1"/><path id="path4108" d="M787 403h-2l2-1v1"/><path id="path4110" d="m805 376-1 1 1-1"/><path id="path4112" d="m806 377-1 1 1-1"/><path id="path4116" d="m809 376-1 1q-1-1 1-1"/><path id="path4190" d="m685 351 2-1-5 1-1 1 1 1-1 1 4-3"/><path id="path4192" d="M686 344c-1 0-7 2-6 3l6-3"/><path id="path4194" d="m710 361-2 2q3 1 2-2"/><path id="path4196" d="m696 365-1-1v2l1-1"/><path id="path4198" d="M680 371q-2 1 1 1l3-4-4 3"/><path id="path3630" d="m73 571 2-2-2 2"/><path id="path3632" d="M79 570q3-1 1-3-5 2-1 3"/><path id="path3634" d="M90 576c2 0 0-4 0-4l-3 1 3 3"/><path id="path3636" d="m97 577 1-1-4 1h3"/><path id="path3638" d="M96 580q1-1-1-1l1 1"/><path id="path3642" d="m99 581 3-1q0-2-2-1l-2-1v2l1 1"/><path id="path3644" d="m101 595 3-1 4-2v-3l-1-2-2-2h-3l1 1-2 2v7"/><path id="path3920" d="M2406 306q1-2 3-1c-2 0-6-3-7-1l2 1 2 1"/><path id="path3922" d="M2414 309h-2 2"/><path id="path3924" d="m2429 245-4-1-3-1q4 0 7 2"/><path id="path3926" d="m2442 313 1-1-1-1v2"/><path id="path3928" d="m2450 314-2-1 2 1"/><path id="path3930" d="M2449 313q1-1 0 0"/><path id="path3932" d="M2454 315h-1l3 1q2 2 4 1l-6-2"/><path id="path3934" d="m2457 313-1-1q-1 1 1 1"/><path id="path3936" d="M2475 315v-2h-4l3 1v1h1"/><path id="path3938" d="M2473 270h-1 1"/><path id="path3940" d="m2477 315 2-1-2-1 1 1h-2l1 1"/><path id="path3944" d="M2485 314h1-1"/><path id="path3946" d="m2493 311-4 1 7-1-2-1c2 0-2-3-2 0q2-1 1 1"/><path id="path3948" d="m2501 312 2-1h-7l2 1h3"/><path id="path3950" d="M2505 310v-1h-1l1 1"/><path id="path3952" d="M2514 308v-1l-1-1 1 2"/><path id="path4038" d="m2404 220-4 1-4-3 4 1 4-1q5 1 8 4-4-3-9-2h1"/><path id="path4040" d="m2482 315-2-1h2l-1-2 3 2-2 1"/><path id="path4042" d="m2483 313 2 1-2-1"/><path id="path3778" d="M453 287q-3 0-3 2l3-2"/><path id="path4136" d="m449 289-1 1 1-1"/><path id="path4134" d="M449 273q-2 0-2 2h2v-2"/><path id="path4142" d="m435 284-3 1 2-1"/><path id="path4152" d="m435 283-1 1 1-1"/><path id="path4166" d="M439 279v1-1"/><path id="path3772" d="M444 267h1s-3 1-1 1l-4 3 4-1 1-2h2v-1l2-1v-2l1-1-1 3 3-4h-3v-2l-1 2-4 5"/><path id="path3774" d="m446 285 2-2-1 2 2-3q-1 3-3 3l2-1-1 1q3 0 5-3l1-2h-4q2 1-1 1 2 1 0 1l-1 1q-2 0-1 2"/><path id="path3654" d="M198 300c-1-2-5 1-6 1l-8 4 14-5"/><path id="path3656" d="m197 302 7-2 6-2h-2l4-3-3 2 1-2c-1 0-7 2-3 3h-2l-2 1c1 1-6 2-7 2l1 1"/><path id="path3658" d="m210 298 2-1-2 1"/><path id="path3660" d="m215 295 3-1h-1l-3 1h1"/><path id="path3662" d="m218 295 2-2-2 2"/><path id="path3664" d="M219 295h-1 1"/><path id="path3666" d="m222 294-1 1 1-1"/><path id="path3668" d="M227 290v2l5-2h5l1-1h2q-2 0 0-2l-7 1-6 2"/><path id="path3670" d="m240 291-1 1h1v-1"/><path id="path3672" d="m247 287-1 1 1-1"/><path id="path3730" d="M361 252h-2 2"/><path id="path3732" d="m363 243-2 1 2-1"/><path id="path3742" d="m384 247-2 2 5-2 4-2v-1l-7 3"/><path id="path3746" d="M389 244v-1l-3 3 3-2"/><path id="path3748" d="m389 241-1 1 1-1"/><path id="path3752" d="m391 240-2 1 2-1"/><path id="path3754" d="m398 244-2-1q-3 1-1 1l-2 1 5-1"/><path id="path3760" d="m405 247-3 1 4-1h-1"/><path id="path3700" d="m314 274-2 1 2-1"/><path id="path3706" d="M326 270q-2-2-4 1l4-1"/><path id="path3712" d="m333 262-1 1h1v-1"/><path id="path3718" d="m337 263-1 1 1-1"/><path id="path3720" d="m343 258-2 1 2-1"/><path id="path3722" d="M342 258h-1 1"/><path id="path3724" d="m343 261-1 1 1-1"/><path id="path3674" d="M252 286h-1l1 1v-1"/><path id="path3676" d="m261 284-3 2h2l2-2-2 1 1-1"/><path id="path3678" d="m263 287 2-2-2 1-3 2 3-1"/><path id="path3680" d="m263 284-1 1 1-1"/><path id="path3682" d="M265 284h-1 1"/><path id="path3684" d="m267 285-2 2 2-2"/><path id="path3686" d="m266 287-1 1 1-1"/><path id="path3688" d="m266 247 3 2 5-1 3-4h-3l-4 1c-1 1-5-1-4 2"/><path id="path3690" d="M289 258h-1q3 1 5-2l-4 2"/><path id="path3694" d="m294 274-1 1 2-1h-1"/><path id="path3696" d="m298 280-1 1 1-1"/><path id="path3698" d="m312 274-4 2 4-2"/><path id="path3702" d="M315 275h-2 2"/><path id="path3704" d="m318 272-3 1q4 1 6-2h-1l6-2v-1h4l-2-1 4 1 3-2h-1c0-1 3-2 1-2q-2-1-3 1l1-1-1-1c0 2-4 1-3 2h-2l1-1-3 1 1 1h-1v1q-2 0-2 2v-3l-5 1-2 3q-1 3 2 0l-2 1 3-1-2 1 4-1-3 1q2 1 0 1"/><path id="path3710" d="M330 263c-2 0 2 2 0 0"/><path id="path3714" d="m334 263 4-2-1 1 3-1q1 2 2 0h-1l1-1h-4l-3 1q-2 0-1 2"/><path id="path3726" d="M344 252h-2 2"/><path id="path3728" d="m347 255-1 1 1-1"/><path id="path3790" d="m245 287-2 1q0-2-1-1l-3 2 6-4q-2 1 0 1l2-1 5-2 11-4h2l-2 2c1 1 4-3 4 0h1c-3-3 10-6 11-7l5-1h2l3-2 5-2 6-3q0 2 2 1h-2l2-2 2-2q3-3 5-1l-1-1q1-3 5-3l8-4-5 2-4 1-6 1 1-2 1-1q2-1 3 1v-1l-1-1-2 1s-3 2-1 0l-4 3-3 2c-1-1 2-4 0-4h1l-3 1v-1l-1-1h1q-4-1-8 2l-4 1h-3l4-2 4-2h-2q1-2 5-3l1-3 3-3-1 1 8-5h-2l-7 4c1 3-12 4-13 3l1-1v-3q-2 1 0-1h-2l4-2 2-1h2q-1 1 1 1l-3 1 5-1-1 1 3-1-1-1h3v-1l-5 1h-4l3-2-1 1 1-2-2 1 2-2q-1 2-4 2v-1l2-2h-1q1-2 3-1l2-1 4-3 6-2 2-1v1h1c-2-1 3-2 4-3l-3 2q3-3 7-4c-2-1 3-1 3-1h2l-3 2 8-2 8-3-1 1q6 1 11-2l3-3q2-3 0-2c1-1 9-2 7-4h1l-3 1h-4c2 0-1 1-1 1h-3l-5 2q2-3-1-2l1 1h-2l-1-1h-4l-7 1c-1 0-5-1-4-2l2-1q0-3 2-3l-1 1h2l3-1-5-1-2-1q0-2 3-2l-3 1 5-1 5-1 10-2h-1l7-2 9-1-3 1-3 2v1h5s3-1 1 1l6-1 5-1-1 1 2-2h-4l2-2-1-2q4-1 2 1c-3 2 3 2 3 2q3 2 6-1h-7c-2 0 2-3 3-3h-4l2-1-2 1h-4q-3-1 0-3 1-3-1-5l-2-1-2-1 7-3 7-1 16-3 8-4 11-3-2 1 8-2 7-1-2 1h-1v1l2-1 4-1h-3l7-2h-2q6 1 12-1l11-3-1 1 3 1-6 1v2l4-2 3-1h3l-3 2h13l-3 1 2 1h-3 4l-1 1h4l3-1 1 1 7-1 2 1 3 1 7 1h3l1 1h7q3-2 7 0l2 1 2 1 2 1-86 71h5l3-1h4l-3 2 1 2 1 4-1 4 7-3 3-2h1l1-1h3l4-1c3 1-2 3 0 4l1 1-1 3q2 1 1 4l-1 5-1 3v2l-2 3 5 2q1 3 2 2 0 2-3 3l-2 3-9 5 1-1-2 1q3-3 7-4l-5 1 4-1h-2l3-4q0-2 2-3l-5 2 2-1-4 1-1 2h-3l3-2 2-2h4q-2 0-2-2l-2 2q-2-1 1-3v1l1-2h-1l2-1-2-1 1-1-1-1q-2 1-1-1l3-1h-2l2-2v-1l1 2v-2q1-2 3-1-3-1-4 1l2-3-2 1 1-2 4-2-4 2-3-1 1-2 1-1 1-3 2-3-1 1-1 2c-1-2-2 1-2 1l-2 3-3 3v-1h-3q1-3 5-4h-2l-2 1-1-2h-1l-3 1h3q-1 2 1 1l-2 1h2l-1 1-2 2q0-2-1-1h-1l-1 1c1-1-4-2-2-3l-1-2-1-2h1q-2 0-3-2l-2-1 2-2 2-2c3 0 0 3 0 3q1-2 3-1l-2-2-4 2q-4 1-8-1l2-2-3 1-5-1-9 1-3-2 6-4-6 3h-2l-2-1 3-1h-4l2-1h-3l4-1h-3l4-2-4 1-4 1v-1l-1 1 2-2-4 2h1-1c-2-1 3-3 4-3l-4 2h-3 2l-5 2-1 1 2-1-1 1 2-1q-2 3-5 2l4-1c1 2-4 2-5 3h1q-1 1 0 0l-3 2h-4 1l-3 1 1-2-4 3v-1h-1l-1 2q0-2-2 0l-4 1 3-2-4 2h1l-3 1h-4q1 2-1 1l-2 1-1-1 1-1 9-3-5 1c-1-1 5-4 6-5l4-2 2-2 8-2 2 1h5c-1-1-5-1-2-3l6-2-5 2q-3 1-3-1l-4 1-4 2-4 1-3 1-5 3-3 1h-3q2-1 0 2l-5 1v1l-3 1h-1l-2 1h-1l-3 1q2 1-1 1l-2 2h3q1 2-2 2l-4 2-2 1-4 1 2-1-3 2-4 1-3 1-4 1-4 2h-2l-4 2-1 1-3 1-2 1-3 1-1-1-2 1-2 1h-3c2 1-1 1-1 1l-5 2h2q-1 0 0 0l-2 1-2 1 2-1-2 1-4 1-4 1-3 2 2-2q-2-1-4 1h-1l-3 1h-2l-2 1h-3l4-1q-3-1-7 2h-2l-1 2h-3l1-2-3 2m65-24q-1 1 2 2l-1 1 1-1 2-1q-1-2-4-1m18-11h5l5-1q-1 0 0 0l2-1 5-1h-6l-4 1q-4 0-7 2" class="landxx us"/><path id="path3708" d="M331 219h-2 2"/><path id="path3796" d="m282 222 4-2 2 1h2q-1 2-4 1l-2 1-2 1v-2 1-1"/><path id="path3798" d="M313 200c4-2 2 1 0 0"/><path id="path3800" d="m382 247 2-1-2 1"/><path id="path3802" d="m383 246-2 1 2-1"/><path id="path3814" d="M451 260v1-1"/><path id="path4118" d="M433 274h3q-3 0-3 4l4-4 2-2 1-4-2-1h-1v2q-2 1 0 1l-3 2c2 1-1 2 1 1l-2 1"/><path id="path4120" d="m435 279 1-1 1-1q0 2 1 0l2-1 1-2h1l1-1-2 1 1-2-2 1-1 1-1 1c3 0-3 2-1 1l-2 3"/><path id="path4122" d="M436 264v4q-1-1 0 0 3-1 1-2l1-1 3 2 3-2h-2l-2-1 4 1-1-1q2 0 2-2l-4 1 2-2-4 1h-1v2l-2-1 1-1-2 2h1"/><path id="path4124" d="M442 268h-1 1"/><path id="path4126" d="m442 276 2-1s3-1 1-1l1-1c1 3 4-1 3-2-1 0-7-1-5 1q-2 1 0 0-2 1-2 4"/><path id="path4130" d="m447 275-3 2q2 1 3-2"/><path id="path4132" d="m448 276-3 2 1 2 2-2-1-1 1-1"/><path id="path4140" d="m435 268-3 3q3 0 3-3"/><path id="path4144" d="m434 280-1 1 1-1"/><path id="path4146" d="M434 284v-1l-1 1h1"/><path id="path4148" d="M436 285c-2 0-5 5-2 5v-2l2-3"/><path id="path4150" d="m435 285-2 1 2-1"/><path id="path4154" d="m436 288-1 1 1-1"/><path id="path4156" d="M438 287h-1c2 0-1 2 1 2h-1q2 1 4-2h-2l3-1-1-1h1l-1-1h1-2q2-2 3 0l1-4-2-1q2-2 1-3l-3 1 1 1c0 1-4 0-4 2l4-2-2 3 1-1-3 3 2-1q-2 1-1 2l-3 1h2q-1 1 0 0h1l-1 2h1"/><path id="path4158" d="M435 280h1-1"/><path id="path4160" d="m437 286-1 1 1-1"/><path id="path4162" d="M437 283h-1 1"/><path id="path4164" d="M438 281q-2-1-2 1l2-1"/><path id="path4168" d="m445 287-2 1 2-1"/><path id="path4170" d="M445 284q-2 0-1 2l1-2"/><path id="path4172" d="m446 285-2 2q2 1 2-2"/><path id="path4176" d="m440 280-1 1 1-1"/><path id="path3804" d="M402 428c1-2-2-3-1-6l2-7-1-4q1-4 4-4v-1l1-2 3-3 1-3v-3l2-3 1-3 2-2 2-2h1q1-1-1-1l4-2q-2 0 0-2l2-2 2-4 5-5q0-2 2-2l2-4 2-2h4l-2-1h-2l1-3-1 2 3-2-1-1q0-3 2-2l-1-1-1 1 3-7 2-5 6 2 4 1 1-1v2l-3 2h-1l-2 2h2l-2 1 2-3 4-2-3 3q2 0-1 2h1l-2 1 1-1-3 2q2-1 0 0 1-1 0 0h2l2-1 3-4 3-3v-4q2 1 2-2l1-2h185v-3q1-2 2 1-2 3 0 4l4 2 3-1 4 1 1 1v1h1l2 1h1v1l6-1 2 1h5l-12 5-5 3-5 3c1 2 8-2 10-2l-2 3h2l5-1 5-1 5-3 1 2-1 2 1-1q3-1 5 2l3 1 6-1 4-1h4l-1 2h4v3l2 1c-2 2-4-1-6 0l-1 2-1-2-7 1-6 2 2-2-4 2 1-1-7 5-1 2-2 1q-2 0-2 3 3-3 5-3l-2 3-2 3-4 6-2 3-1 4-2 8h4l7-5 2-4 2-4q-2-3 0-5l1-2 3-2 1-3 2-1 2-2 3-2-2 3 1-1-1 2q3-1 3-4l4-2q-1-2 2-3l3 1 4 2 1 3-1 3-3 4-3 2q-2 1-2 3h2c1-1 5-5 6-3v6q0 4-4 7 1-2-1-1l-1 2-2 2-2 2-2 2 2 1 2 1h-2 8l5-2 5-2 11-5 4-2q2-1 0-1-1-1 1-3l4-1h4l2 1 4-1 4-1 3-2 2-3h-1l-1-1 2-1q6-4 13-6h22l2-2 2-1 1 1 1-2 3-3 2-2 3-3 2-3 4-3c1-1 5-5 4-2q2 2 5 0 4 0 2 5l-2 5-1 4 1 2v3h1l-1 2q1-1 1 1h-2l-2 1q-3 2-2 0l-2 1-1 1-1-1q-1 2-1 0l-1 1v1q-2 0-1-3l-2 2-2 2-3 3-1-1q-1-2-1 1l1-2-1 1-1 2v-1q-2 1 0 0-2 1-1-1-2 1-2 3l-2 1c-2 1-7 6-4 7l-4 3 2 1 1 3q2 2 3-1l-1-1q2 1 1 3l-6 1 1-1-5 2 2-2h-2l-4 3h-4l-2 1h-4l-7 4 2-5-3 6q-3 1 0 2l-3 5 1-1c-2 0-2 4-4 4l-2 3-4 2 1-2-3-2c-1-3 3-3 4-5q-4 1-4 5v9q1-2 0 0l-2 1-3 4-3 3-2 2 2-4 3-3h-2q2-1 0-2l1-1-1 1-1-2v-1h2q0-2-2-1 0-2 2-1 1-1-2-1l3-2-1 1q0-3 3-3v-1l1-1-1 1v-1l-1 1q-1 2-1 0l-1 1-1 1h-1l1 1-1 1c-2-1-1 5-2 6l-1-3 1 3v2l-3-2-1-1q-2 1-1-1 3-1 2-3c0 1-4 4-3 5h2l2 2 2 1v2q-3 1-4-3l2 4q3 2-1 2l1 1q-2 1-3-2c1 2 4 4 1 5q-1-4-4-3l2 1q2 1 2 3h1l2-1v9-6h-1v4-1h-2l1 1h-3 1l-2 1v-2q-2 1-1 3l2-1 2 1-1 2 1-1 2-1q1 2-1 3l-2 1h-4l1-1-1 1-3-1q3 1 3 3l-1 1h-3l2 1h3l-2 2h-2l-3 1q-2 1-2-1v2l-2 1-3 4v-2q-2 3-5 3-5 2-6 5v-2l-1 3h-1l-1 1c-1 0-3 3-4 1q1 2-2 3h-2v1c-3 0 1 0-1 1 2 0-1 1-1-1q0 2-1 0v2l-4 3 1 1h-2v1l1-1-2 2v1h-1l1 1-2 2-1 3v7l2 10v7-4l-1-3 1 8v5c3 0 0 10-1 11q-1 4-4 7h-3q-3 0-1-2l1 1-1-2-2-3-2-2q1-2-1-4l2-2-2 2 1-4h-2q1 2-1 0l-1-4q3-1 2-4l-1-1v1q1 2-1 2 0-1 0 0 0-5 2-8l1-3q-1-2-3-2l-2-6-3-2-3 1-2 1-2 1-3 1q1-2-1-3v-1q1 1 0 0v-1h-2 1q-3 1-5-2h2-3l-4 1 2-1v-1l-1 1h-2l-2 1q2 0 1-1l-4 2v-4l-1 2-2 1h-2l-2-1-2 1-3 1-4-1-2 2h5l-2 1q2 2 2 0 2-1 1 1l-1 2-1 1 2 2 1 1-1 2h-2l1-1-1-1-2-1q0-2-2-2v1q1 3-2 3 1-2-1-2l-2 2q-4 0-3-4h-2l-1-2q-1 1-1-1-2 0-2 3h-4l-5-2 1-3-1 3h-4l1-2q-2 1-1 3-3 0-7 3l2-2h-2l1-2-1 1h-2l1 2-4 4-6 3 2-1-4 2 2-1h-1l-2-1v1c0-2-3 1 0 1q-2 2-3 0-1 3-2 2c0 2-2 0-2 2l1-1q0 3-4 3h1v1l-1 2h-3v2h2l-1 2v9l1-1-2 2-3-2h-3l-4-2-2-4-1-5 1-2-2-2-3-7v-3l-1-2-1-2-2-3h-3q-3-2-6 1l-6 6-3-2-2-1q-4-2-4-6v-4q1-2-2-3l-3-4c-3-2-1-4-4-4h-13v3h-20l-24-10 1-2-18 2 1-5-3-4q-1-2-2-1c-1-1 1-3-2-3q-2 0-3-2l-5-2q-3 1-4-1l2-4-1-2q1-1-1-3v-2l-2-4 2-3q2-1-1-3-2-1 0-4l1-3v2l1 1q0-3 2-5c-2-2-2 2-3 2l-3-1q1-3 2-1l-1-2" class="landxx us"/></g><g id="kz" class="landxx kz eaeu"><title id="title2401">Kazakhstan</title><path id="path3898" d="m1687 363 2-1 3 1-1 1-1 1h-4m-3-1-1-1-3 1v1l-1 1-16 5 7 31h-3l-3-1q-2-4-6-6l-7-1q-4 0-7 5v-8c2-1-3-2-4-2h-2l-2-2c0-2-2 1-2-2l-1-2-3-3q-1-3-4-3t-1-3h4l1 1h3l-4-2 2-5 2-1 1 1 2-1 7 1-3-2c-1-2 2-4 1-6q0-3-3-5h-3c-3 3-9-5-11-1l-2 1-2 1-2 1-1 1h-1l-2-1 1 1v1h-1l-5-2c0-2 5 1 2-3l-7-7h-4l-1 1-2-3h1l-2-2-3-1v-2q-1-1 2-3v-1l-2-4q-1-2 2-3v-4c3-2 6 5 8 5q3 0 2-2l-2-5 4-1c2-1-1-2 1-3l5-1q0-3 2-3v-1l4 1c1 3 2 0 3 1l1-1 2-1c2 4 6 1 9 3l4 2 3 3 1 2c2-1-1-3-1-4l4 1 4 2h3v-1l2-2h5l1 1h3q-1-3 1-1l3-1 2 3c1 2 7 0 6 2l2-1 1-2 2 2h3q3 1 4-2-1-2 1-3l-3-1-2-1-3-1-2-1-2-1v-1l5-3-3-3 1-2h5l2-1-2-1-5-1c-2-1 2-1 2-2h-2l-2-1q2-1-1-2h2c-1-2 3-1 4 0l2-1 3 1q-1-2 3-1v-1h5l1-1h3l2-1h1c0-3 6-2 8-2l10-3-1-1q3 0 3-2h6s4 3 5 1q2-1 4 1l1 2 2 2c-1 1 2 3 0 3l3 1h4v-2l3 2v2h2l-2-1c1-3 6 3 7 0l1 2q-2-1-2 1l2 2 3-2 2 1 1 1q0-3 3-3 2 0 2-2l2-1 2-1 2-1h2-1l1 2h-2l10 6 9 7 9 9c2 1 5 6 7 6-1-1 3-1 2-2v-2l3 1h1l1 2 3 1h5q1 1 3-1h1l1-1q7 1 9 6l5 1 3 3 1 2h6q2 1 2-1h2l1 1 2 2 2 1 1 1q-3-1-3 2 1 3-1 3-4 0-4 2 0 5 3 8 0 3-3 3h-6l-7-2c-2-1 0 4-1 6l-1 7c0 3 4 1 4 4h-5l-3-1-4 1-6 2c0 2 5 1 5 3q0 5 3 7l2 3 1 3q-2-1-2 1l1 1q-3 1-1 3l1 4q-2-4-5-3l-4-3-6-1h-7l-2-1-3 1h-6c1 3-10-3-12-3l-3 1q-1 3 1 6l-3-1-4-1-6-2-4 1-1 2q-1 3 1 2l-3 2h-2q-1 3-5 4l-1 1-1 2-2 3 1 2q-4 1-5-2 1-2-2-3-5 2-9 0l-2-5q-1-2-3-2-3-3-2-8-3 1-4-2l-4-3c-3-3-3 0-5 0h-10l-4 1-6-3-5-5-4-2-7-4v-2q-1-3-3-2l2 2-1 1-5-2v-2l1-1zm2-2-1-2q3 1 2 2zm102-7 3 1 4-1 2 1 1 1h10l4 1v-1l1-1 2 1-1-1q3-1 3 1v2c-1 1-5 0-4 1h-2l-3-1-3-1h-4c-1 0-10 1-9-1v1h-2l-1 1v2c-1 2-4 0-3 2v3c-1 2 2 3 1 5l-1-1-2-2-3-2v-4l2-1q-1-2 2-3l1-2zm-97 1 1 1h1l1 1 2-1h1l-1 1v2l-3 1v-1h-1l-2-1h-2v-2q2-1 2 1v-1h2z"/><path id="path7142" d="M1688 364h2v-1l-3 1z"/></g><g id="tf" class="antxx tf"><title id="title2406">French Southern Territories</title><path id="tf-" d="m1742 1183-1-1v1l1-3-1 1 1-2-2 3v2l-2 3h5q1 2 1-1l1 2 2-1q2-1 0 0t-2-2h4c2 1 2-4 0-2l-2 1-2 1v-1l-2-1-1 1 3-2-3 1 2-2-2 2"/></g><g id="sz" class="landxx sz"><title id="title2411">Eswatini</title><path id="sz-" d="m1501 991 2 1 1 2q2 2 5 1v-1l1-2h2l-2-6-2-3h-3l-2 3v1z"/></g><path id="uz" d="m1662 371 16-5c2 0-2 5 0 8l1 2 1 1 1-1v-3l-1-2 1-2-1-2 5 2-2 4c0-1 1 2 2 1q3-1 2-4l8 4q3 1 8 7l3 2h17l3-1 4 3q2 0 3 3h3q0 5 2 8l3 1 2 5q4 3 9 1l2 3q1 3 5 2l-1-2 2-3v-1l4-3 2-1 2-2 2-1h4q-4 1-6 6h2q1-1 2 1 2 2 5 2v-1l1-1v-2l2 3q2 0 3 2l4 1h2l-1 2h-3l1 2c-1 0-5 0-3 1l-2 1h-1l-1-1-3 1h-1l-4-2 2-2v-1l-2-2q-2 3-5 3-2-2-3 0l1 2v2h-5l3 1h-1v1l-1 1q2 2-1 3l-5-1h-1l-1 3 2 1 2 1 2 1 1 4 2 2q1 3-1 4v5h-2l-3-1-2-1h-2l-1-2-1-3-3-1-4-1-4-3-5-2-4-2-4-3-9-6-5-7q0-2-3-3l-1-1-1 2-5-1-3-1-1-1v-1l-1-2h1l-2-2q0-2-2-2l-3-1-3-1-3-2-2 1c-2 0 2 2 2 3l-2-1h-2c0 3-2 1-4 3v7h-3l-4-1-7-31" class="landxx uz"><title id="title2416">Uzbekistan</title></path><path id="mn" d="M1866 336q2 0 1-2c1-3 5 0 5-1h2l-1-1 4-1-2-2 3-1 1-1h2l2-2 3-1 1-1q2 0 3-2l3 2 1-1 2 2 5-1 4 2q3 4 7 4l4-1 8 2h4l2-1 1-3-2-2-3-3q-2-3 0-5-2-2 1-2v-3l5 1 5 2 5 1 6 1q5 0 6 4l3 3 3 2q3 0 5 2h3l4-1 4-1q5-1 10 1l4 2 6 1 2 2 3 2 5 1 6 1h8l4-1q2-2 6-1l2-2 3-3 3-2 5 1 4 2h4q3-1 5 1l1 12-1 3 4 3 3-1h8q1-2 3-2 5 0 9 4 5 2 8 6c2 2-2 2-4 2l-3-1h-2l-3 1-3 1-2 1-3 1v4l-2 3-4 1h-3l-2 3-1 1-2 1-4-1c-3 0-6-3-8-1l-1 3v2l1 1c1 1 7 4 5 5l-2 2-3 2-2 4-4 2-5 1h-6l-12 3-4 3-3 1-2-1-4-1-11-2-5-1-4-3-5-1h-16l-11-1h-4l-1-1-2-2-7-7-3-2q-1-2-4-2l-5-2-4-2q-3-2-10-1l-8-1q-4-1-6-5l1-4-2-4-4-4-3-4-4-2h-1l-1-1-3-1q-3 0-5-2l-4-2-2-1-2-2v-1l-1-1" class="landxx mn"><title id="title2419">Mongolia</title></path><path id="bt" d="M1930 525v-1l1-2 3-5 4-2h2v2h7q3 0 3 2-1 3 2 3 3 1 2 3v2h-4l-2 1h-3l-4-1-4 2-3-2q-3 1-4-2" class="landxx bt"><title id="title2422">Bhutan</title></path><g id="nc"><title id="title2425">New Caledonia</title><g id="nc-" class="landxx coastxx nc"><path id="path2568" d="m2504 939 3 3v1l2 2 2 2 4 3q0 2 2 1l-1 2q2-2 3 0 2 1 2-2l-2-1-2-3-4-3-2-3q0-2-2-2l-3-4h-2l-1-2v4l1 2"/><path id="path2570" d="m2520 939 2-2-2 2"/><path id="path2572" d="M2524 956v-1 1"/><path id="path2574" d="M2526 943c1-1 0-5-1-4l-1 2 2 2"/><path id="path2576" d="m2529 947 2-2-1-1q-2 1-1 3"/><path id="path3370" d="M2474 927v-2 2"/></g></g><g id="fj"><title id="title2436">Fiji</title><g id="fj-" class="landxx coastxx fj"><path id="path5538" d="m2608 908 1-1-1 1"/><path id="path5544" d="m2610 905 2-1-2 1"/><path id="path5536" d="M2609 917h4l4-1v-3q0-3-1-2c1-2-5-1-5 0-2 0-6 5-2 6"/><path id="path5542" d="m2611 925 1-1h2q-3-1-4 1h1"/><path id="path5546" d="M2619 913h1-1"/><path id="path5548" d="m2631 900-7 2-3 1-2 2 1 2q2-3 5-2l3-1q2 0 2-2-1 2-4 2l5-5"/><path id="path5550" d="M2622 916v-1 1"/><path id="path5552" d="m2625 921 1-1-1 1"/></g></g><g id="kw"><title id="title2449">Kuwait</title><g id="kw-" class="landxx coastxx kw"><path id="path5440" d="M1627 500s-2 4 1 3q2-1-1-3"/><path id="path5486" d="M1616 508c3-1 2-8 5-9l5 2 1 3c-1-2-2 1-3 1l3 2 3 6h-6l-1-4-7-1" class="landxx kw"/></g></g><g id="tl"><title id="title2456">Timor-Leste</title><g id="tl-" class="landxx tl"><path id="path2786" d="M2223 839q0 4 2 1l6-2 9-5q0-2-3-1l-5 1-5 1h-3l-2 3q3 0 1 2z"/><path id="path2788" d="m2214 841 4-2-1 3h-1l-2-1"/></g></g><g id="bs"><title id="title2463">Bahamas</title><g id="bs-" class="landxx coastxx bs"><path id="path6100" d="M709 557h-1 1"/><path id="path6086" d="M691 542q2-1 2 1l1 3c0 2-4 4-3 2l-2-1h1v-2l1-3"/><path id="path6088" d="M692 551v-1 1"/><path id="path6084" d="m690 530-2-1q2 1 3-1h5l-6 2"/><path id="path6090" d="m693 554 1-1q-1 1-2-1v-1l2-2-1 3 1-2q2 3-1 4"/><path id="path6092" d="M696 543h2-2"/><path id="path6094" d="m700 536-1-1 1-3 1-2-1-1q-1-2-4-2 3 0 5 2v3l-1 4"/><path id="path6096" d="m704 540-1-1 3 3v4-3l-2-3"/><path id="path6098" d="m706 555 1 1-1-1"/><path id="path6102" d="M710 551v-2l-1-3q3 3 1 5"/><path id="path6104" d="m711 555 1 4 1 2-2-2c2 1 0-3 0-4"/><path id="path6106" d="M714 555q1-1 0 0"/><path id="path6108" d="m717 567 3-2v-1q0 2-3 3"/><path id="path6110" d="M717 551h1l-1 1v-1"/><path id="path6112" d="m719 564-2-2 2 2"/><path id="path6122" d="M720 579q-1-3 2-3l1 1 2-2-1 3-4 1"/><path id="path6124" d="m725 574 1-1-1 1"/><path id="path6126" d="M728 567q-2 0-2-2l2 2"/></g></g><g id="vu"><title id="title2486">Vanuatu</title><g id="vu-" class="landxx coastxx vu"><path id="path6058" d="M2540 884v-2 2"/><path id="path6062" d="M2540 880v-2 2"/><path id="path6048" d="m2536 890-1-1c-1 0-2 3-2 0 0-1-1-4-1-1v7q5 0 4-5"/><path id="path6052" d="M2536 903q2 0 3-2l-3-2c-2-4-2 1-1 0l1 4"/><path id="path6054" d="M2535 896v-1h-1l1 1"/><path id="path6056" d="M2540 914q3-1 1-3l-2 2 1 1"/><path id="path6064" d="m2541 894 1-2-2 1v1"/><path id="path6066" d="M2541 901h2l-1-2-2 1 1 1"/><path id="path6068" d="m2543 905-2-2q0 3 2 2"/><path id="path6072" d="m2542 898 1-4-1 4"/><path id="path6074" d="M2543 893v-4 4"/><path id="path6076" d="M2545 924s0-4-1-3l-1 2 2 1"/><path id="path6078" d="M2545 930v-3q-3 1 0 3"/><path id="path6080" d="m2546 935 1-1q-2 0-1 1"/></g></g><g id="fk"><title id="title2505">Falkland Islands (Malvinas)</title><g id="fk-" class="landxx coastxx fk"><path id="path4876" d="M883 1207v-1l-1-1q-1 2 1 2"/><path id="path4878" d="m887 1202 1 1-5-1 2 1 3 2h-4 3v1l-1-1v1q-1 2-3 2h1l2 1 2-2q2 0 3-3l1-1q-1-2-1 0l-4-1"/><path id="path4880" d="M885 1202h2l-2-1 1 1h-1"/><path id="path4882" d="m887 1201 1 1-1-1"/><path id="path4884" d="M888 1201h2-2"/><path id="path4886" d="M892 1209h-1 1"/><path id="path4888" d="M892 1208q1 2 3 2l-1-2 2 1-1-2 2 1h1l-2-2h3l1-1h3l-3-2h2s-4-2-4 0l2 1q-3-1-2-2l-4-1-1 2 1 1-1-1 2 2q-3 0-3 3"/><path id="path4890" d="m899 1207 1 1-1-1"/></g></g><g id="gs"><title id="title2518">South Georgia and the South Sandwich Islands</title><g id="gs-" class="antxx gs"><path id="path4892" d="M1052 1231h1l-1-1h2l-2-2-3-2q1 2-2 0 1-1-2-1l-4-1h-3l5 1q-2 0 1 1l3 1 2 2 3 2"/></g></g><g id="gm"><title id="title2524">Gambia, Republic of The</title><path id="gm-" d="M1144 644h2l3 1c-2-1 3-2 4-2l-5 1-2-1q-1-1 1-1h7l1-1 3-1 1 1h2l1 2 2-1q3 0 2 1l-2 2q-6-1-8-3 1 3-3 2l-2 1c0 1-7 0-7 2v-3" class="landxx gm"/></g><g id="qa"><title id="title2529">Qatar</title><path id="qa-" d="M1650 541v-2l1-1c0-1 0-6 3-4l2 3-1 1v2l1 1v3q0 2-2 2-2 2-3 0l-1-5" class="landxx qa"/></g><g id="jm"><title id="title2534">Jamaica</title><path id="jm-" d="M681 602q4-4 9-2l5 2q2 0 3 3h-3l-2-1q1 0 0 0l-1 1-2 1-2-1-3-1-1-1-3-1" class="landxx coastxx jm"/></g><g id="cy"><title id="title2539">Cyprus</title><g id="cy-"><path id="path-cy-" d="m1508 457-1-1 4-1 2-1 5-1 6-2-4 3v3h-2l-2 2-3 1q-3 0-5-3" class="landxx cy eu"/></g><g id="xc"><title id="title2544">Northern Cyprus</title><path id="xc-" d="M1515 457v-1h-3q-2 0-1-1l2-1 5-1 6-2-4 3v2h-2z" class="limitxx cy xc eu"/></g></g><g id="pr"><title id="title2550">Puerto Rico</title><path id="pr-" d="M775 604h-8q-2 0-1-1v-1l-1-1c1-3 8-1 9-1l3 1-2 3" class="landxx coastxx pr"/></g><g id="bn"><title id="title2555">Brunei Darussalam</title><g id="bn-" class="landxx bn"><path id="path6824" d="M2142 720q4-1 6-4v2l-1 2s1 6-1 5l-3-3-1-2"/><path id="path6826" d="M2149 719v-2q3 2 2 5-2-1-2-3"/></g></g><g id="tt"><title id="title2562">Trinidad and Tobago</title><g id="tt-" class="landxx coastxx tt"><path id="path6114" d="m800 673 3-3q2-2-1-3l4-1q3 0 1 3 1 2-1 3l-6 1"/><path id="path6120" d="m809 663 2-1-2 1"/></g></g><g id="cv"><title id="title2569">Cabo Verde</title><g id="cv-" class="landxx coastxx cv"><path id="path5762" d="m1081 613 2-2q-2 0-2 2"/><path id="path5764" d="M1083 614c2 0-1-2 0 0"/><path id="path5766" d="M1087 631v-1 1"/><path id="path5768" d="m1088 617 2-1-3-1 1 2"/><path id="path5770" d="m1093 631-1-4q-2 4 1 4"/><path id="path5772" d="M1096 629c2-2-2-2 0 0"/><path id="path5774" d="M1099 621q2-2-1-2l1 2"/><path id="path5776" d="M1098 616v-2 2"/></g></g><g id="pf"><title id="title2582">French Polynesia</title><g id="pf-" class="landxx coastxx pf"><path id="path2790" d="m128 904-1-1 1 1"/><path id="path2792" d="m129 906-1-1 1 1"/><path id="path2794" d="M142 912q0-2-1-1l1 1"/><path id="path2796" d="m146 913 2 1-1-1-2-2-1 1 2 1"/><path id="path2798" d="m203 837 2-1h-2v1"/><path id="path2800" d="M205 841h-1 1"/><path id="path2802" d="M208 837q0-1 0 0"/><path id="path2804" d="m213 845 1-1h-2l1 1"/></g></g><g id="ws"><title id="title2595">Samoa</title><g id="ws-" class="landxx coastxx ws"><path id="path4782" d="m2692 876-2 1q1 2 4 2v-2l-2-1"/><path id="path4784" d="M2700 881q-2-3-5-1l5 1"/></g></g><g id="lu"><title id="title2602">Luxembourg</title><path id="lu-" d="M1319 330q0-1 0 0l1-3 1 2 3 1-1 3h-4v-3" class="landxx lu eu"/></g><g id="km"><title id="title2607">Comoros</title><g id="km-" class="landxx coastxx km"><path id="path5750" d="M1601 863v-2l-1-3-1 3 2 2"/><path id="path5752" d="M1604 867q0-2-2-1l2 1"/><path id="path5754" d="M1609 867q1-3-2-2l2 2"/></g></g><g id="mu"><title id="title2615">Mauritius</title><path id="mu-" d="M1704 933s-3 4-1 4c3 0 3-5 1-4" class="landxx coastxx mu"/></g><g id="fo"><title id="title2620">Faroe Islands</title><g id="fo-" class="landxx coastxx fo"><path id="path4614" d="M1244 231h1-1"/><path id="path4616" d="m1246 230-2-1 3 3-1-1v-1q1 2 0 0l1 1q1-2-2-2l1 1"/><path id="path4624" d="m1246 230-1-1q3 0 2 2l-1-1q2 2 0 0"/><path id="path4618" d="m1247 236-2-2 2 2"/><path id="path4620" d="M1247 233h-1 1"/><path id="path4622" d="M1248 230v-1 1"/></g></g><g id="st"><title id="title2631">Sao Tome and Principe</title><g id="st-" class="landxx coastxx st"><path id="path2898" d="M1327 746v-1 1"/><path id="path5384" d="m1320 759 2-1-1-2-1 3"/></g></g><g id="vi"><title id="title2638">Virgin Islands, U.S.</title><g id="vi-" class="landxx coastxx vi"><path id="path4052" d="m778 603 2-1-2 1"/><path id="path5520" d="M782 607q1-2 3-1l-3 1"/></g></g><g id="cw"><title id="title2645">Curacao</title><path id="cw-" d="m749 655-3-2 3 2" class="landxx coastxx cw"/></g><g id="sx"><title id="title2650">Sint Maarten (Dutch Part)</title><path id="sx-" d="M797 603v1l-1-1" class="landxx sx"/></g><g id="dm"><title id="title2655">Dominica</title><path id="dm-" d="M807 628v-4q2 2 0 4" class="landxx coastxx dm"/></g><g id="to"><title id="title2660">Tonga</title><g id="to-" class="landxx coastxx to"><path id="path5930" d="m2657 944 1-2h-3l2 2"/><path id="path5932" d="M2658 945v-1 1"/></g></g><g id="ki"><title id="title2667">Kiribati</title><g id="ki-" class="landxx coastxx ki"><path id="path4790" d="m69 745-2-3v2l2 1"/><path id="path35688" d="M2600 742q1-1 0 0"/></g></g><g id="fm"><title id="title2674">Micronesia, Federated States of</title><path id="fm-" d="M2477 701q3-1-1-2l1 2" class="landxx coastxx fm"/></g><g id="bh"><title id="title2679">Bahrain</title><path id="bh-" d="M1647 533v2l1 1s0-4-1-3" class="landxx coastxx bh"/></g><g id="ad"><title id="title2684">Andorra</title><path id="ad-" d="m1287 391 3 1-2 1-1-2" class="landxx ad"/></g><g id="mp"><title id="title2689">Northern Mariana Islands</title><path id="mp-" d="M2374 629v-1 1" class="landxx coastxx mp"/></g><g id="pw"><title id="title2694">Palau</title><path id="pw-" d="m2296 696 1-3q-2 2-1 3" class="landxx coastxx pw"/></g><g id="sc"><title id="title2699">Seychelles</title><path id="sc-" d="M1695 801q0-2-2-1l2 1" class="landxx coastxx sc"/></g><g id="ag"><title id="title2704">Antigua and Barbuda</title><g id="ag-" class="landxx coastxx ag"><path id="path6116" d="m806 613-1-2 1 2"/><path id="path6118" d="m806 608-1-1q1-1 1 1"/></g></g><g id="bb"><title id="title2711">Barbados</title><path id="bb-" d="m820 647-1-3q2 2 1 3" class="landxx coastxx bb"/></g><g id="tc"><title id="title2716">Turks and Caicos Islands</title><g id="tc-" class="landxx coastxx tc"><path id="path5532" d="M736 571h-1 1"/><path id="path5534" d="m737 572-1-1 1 1"/></g></g><g id="vc"><title id="title2724">Saint Vincent and the Grenadines</title><path id="vc-" d="M807 646v-2 2" class="landxx coastxx vc"/></g><g id="lc"><title id="title2729">Saint Lucia</title><path id="lc-" d="M809 641v-3 3" class="landxx coastxx lc"/></g><g id="gd"><title id="title2734">Grenada</title><path id="gd-" d="m802 656 1-2-1 2" class="landxx coastxx gd"/></g><g id="mt"><title id="title2739">Malta</title><path id="mt-" d="m1379 450-1-2q2 1 1 2" class="landxx coastxx mt eu"/></g><g id="mv"><title id="title2744">Maldives</title><path id="mv-" d="m1785 736-1-1 1 1" class="landxx coastxx mv"/></g><g id="ky"><title id="title2749">Cayman Islands</title><path id="ky-" d="M660 592h2l-2 1v-1" class="landxx coastxx ky"/></g><g id="kn"><title id="title2754">Saint Kitts and Nevis</title><g id="kn-" class="landxx coastxx kn"><path id="path5926" d="m799 611-2-2 2 2"/><path id="path5928" d="M799 612v-1 1"/></g></g><g id="ms"><title id="title2761">Montserrat</title><path id="ms-" d="M802 615v1" class="landxx coastxx ms"/></g><g id="bl"><title id="title2766">Saint Barthelemy</title><path id="bl-" d="M798 604h-1 1" class="landxx coastxx bl eu"/></g><g id="nu"><title id="title2771">Niue</title><path id="nu-" d="m2672 920-1 1 1-1" class="landxx coastxx nu"/></g><g id="pm"><title id="title2776">Saint Pierre and Miquelon</title><path id="pm-" d="m899 353-1 3v-3h1" class="landxx coastxx pm"/></g><g id="ck"><title id="title2781">Cook Islands</title><g id="ck-" class="landxx coastxx ck"><path id="path35652" d="M-1 870v-1 1"/><path id="path35654" d="M26 917q1-1 0 0"/></g></g><g id="wf"><title id="title2788">Wallis and Futuna</title><path id="wf-" d="m2671 875-1 2 1-2" class="landxx coastxx wf"/></g><g id="as"><title id="title2793">American Samoa</title></g><g id="mh" class="landxx coastxx mh"><title id="title2798">Marshall Islands</title><path id="mh-" d="M2578 702v-1l-1 1h1" class="landxx coastxx mh"/></g><g id="aw"><title id="title2803">Aruba</title><path id="aw-" d="m740 652-1-1 2 1h-1" class="landxx coastxx aw"/></g><g id="li"><title id="title2808">Liechtenstein</title><path id="li-" d="m1343 353 1-1q1 1-1 1" class="landxx li"/></g><g id="vg"><title id="title2813">Virgin Islands, British</title><g id="vg-" class="landxx coastxx vg"><path id="path5522" d="M783 601h-1 1"/><path id="path5524" d="M788 598h-1 1"/></g></g><g id="sh"><title id="title2820">Saint Helena, Ascension and Tristan Da Cunha</title><path id="sh-" d="M1220 908v-1 1" class="landxx coastxx sh"/></g><g id="je"><title id="title2825">Jersey</title><path id="je-" d="m1266 336 1-1-1 1" class="landxx coastxx je"/></g><g id="ai"><title id="title2830">Anguilla</title><path id="ai-" d="m796 602 1-1-1 1" class="landxx coastxx ai"/></g><g id="mf"><title id="title2835">Saint Martin (French Part)</title><path id="mf-" d="M796 603h1" class="landxx mf eu"/></g><g id="gg"><title id="title2840">Guernsey</title><path id="gg-" d="m1263 333 1-1-1 1" class="landxx coastxx gg"/></g><g id="sm"><title id="title2845">San Marino</title><path id="sm-" d="M1363 381h1v1z" class="landxx sm"/></g><g id="bm"><title id="title2850">Bermuda</title><path id="bm-" d="M802 480h1-1" class="landxx coastxx bm"/></g><g id="tv"><title id="title2855">Tuvalu</title><path id="tv-" d="M2630 832v1-1" class="landxx coastxx tv"/></g><g id="nr"><title id="title2860">Nauru</title><path id="nr-" d="M2531 743h1l-2-1 1 1" class="landxx coastxx nr"/></g><g id="gi"><title id="title2865">Gibraltar</title><path id="gi-" d="M1237 447h-1 1" class="landxx gi eu"/></g><g id="pn"><title id="title2870">Pitcairn</title><path id="pn-" d="m405 988-1-1 1 1" class="landxx coastxx pn"/></g><g id="mc"><title id="title2875">Monaco</title><path id="mc-" d="M1329 382v-1 1" class="landxx mc"/></g><g id="va"><title id="title2880">Holy See (Vatican City State)</title></g><g id="im"><title id="title2885">Isle of Man</title><path id="im-" d="m1252 295 3-2h-1l-2 2" class="landxx coastxx im"/></g><g id="gu"><title id="title2890">Guam</title><path id="gu-" d="m2368 645 2-3q-3 1-2 3" class="landxx coastxx gu"/></g><g id="sg"><title id="title2895">Singapore</title><path id="sg-" d="M2063 747q-1 1 2 1l-2-1" class="landxx coastxx sg"/></g><g id="nf"><title id="title2900">Norfolk Island</title><path id="nf-" d="M2521 998h-1" class="landxx coastxx nf"/></g><g id="tk"><title id="title2905">Tokelau</title></g></svg>`
