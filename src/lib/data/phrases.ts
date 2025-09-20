export interface FrenchPhrase {
  id: string;
  french: string;
  english: string;
  category: string;
  emoji?: string;
  formal?: {
    french: string;
    english: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  phrases: FrenchPhrase[];
}

export interface LessonGroup {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export const lessonGroups: LessonGroup[] = [
  {
    id: "lesson_1",
    title: "Leçon 1 Bonjour ! / Lesson 1 Hello!",
    description: "Objectifs: Saluer, se présenter et prendre congé - Connaître des formules pour saluer et prendre congé - Le son [y] vs [u] - Situation formelle (vous) ou informelle (tu) - Les articles indéfinis (un, une, des) / Objectives: Greet, introduce yourself and say goodbye - Know formulas for greeting and saying goodbye - The sound [y] vs [u] - Formal (vous) or informal (tu) situation - Indefinite articles (un, une, des)",
    lessons: [
  {
    id: "transportation",
    title: "Transportation",
    description: "Learn transportation vocabulary and travel phrases",
    phrases: [
      {
        id: "airport",
        french: "un aéroport",
        english: "an airport",
        category: "transportation",
        emoji: "✈️"
      },
      {
        id: "bus-stop",
        french: "un arrêt de bus",
        english: "a bus stop",
        category: "transportation",
        emoji: "🚏"
      },
      {
        id: "bus-station",
        french: "une gare routière",
        english: "a bus station",
        category: "transportation",
        emoji: "🚌"
      },
      {
        id: "train-station",
        french: "une gare",
        english: "a train station",
        category: "transportation",
        emoji: "🚉"
      },
      {
        id: "ticket",
        french: "un billet",
        english: "a ticket",
        category: "transportation",
        emoji: "🎫"
      },
      {
        id: "plane",
        french: "un avion",
        english: "a plane",
        category: "transportation",
        emoji: "✈️"
      },
      {
        id: "car",
        french: "une voiture",
        english: "a car",
        category: "transportation",
        emoji: "🚗"
      },
      {
        id: "bus",
        french: "un bus",
        english: "a bus",
        category: "transportation",
        emoji: "🚌"
      },
      {
        id: "subway",
        french: "un métro",
        english: "a subway",
        category: "transportation",
        emoji: "🚇"
      },
      {
        id: "train",
        french: "un train",
        english: "a train",
        category: "transportation",
        emoji: "🚂"
      },
      {
        id: "tramway",
        french: "un tramway",
        english: "a tramway",
        category: "transportation",
        emoji: "🚋"
      },
      {
        id: "i-want-to-take-bus",
        french: "Je veux prendre un bus",
        english: "I want to take a bus",
        category: "transportation",
        emoji: "🚌💭"
      },
      {
        id: "i-want-to-go-paris",
        french: "Je veux aller à Paris",
        english: "I want to go to Paris",
        category: "transportation",
        emoji: "🗼✈️"
      },
      {
        id: "i-am-looking-for-route",
        french: "Je cherche ma route",
        english: "I am looking for my route",
        category: "transportation",
        emoji: "🗺️🔍"
      }
    ]
  },
  {
    id: "greetings-farewells",
    title: "Greetings & Farewells",
    description: "Learn essential greetings and farewells in French",
    phrases: [
      {
        id: "hello-formal",
        french: "Bonjour",
        english: "Hello (formal)",
        category: "greetings",
        emoji: "👋",
        formal: {
          french: "Bonjour",
          english: "Hello (formal)"
        }
      },
      {
        id: "hello-informal",
        french: "Salut",
        english: "Hi (informal)",
        category: "greetings",
        emoji: "👋😊",
        formal: {
          french: "Bonjour",
          english: "Hello (formal)"
        }
      },
      {
        id: "hello-casual",
        french: "Coucou",
        english: "Hey there (very casual)",
        category: "greetings",
        emoji: "👋😄",
        formal: {
          french: "Bonjour",
          english: "Hello (formal)"
        }
      },
      {
        id: "goodbye-formal",
        french: "Au revoir",
        english: "Goodbye (formal)",
        category: "farewells",
        emoji: "👋",
        formal: {
          french: "Au revoir",
          english: "Goodbye (formal)"
        }
      },
      {
        id: "see-you-later",
        french: "À plus tard",
        english: "See you later",
        category: "farewells",
        emoji: "👋⏰",
        formal: {
          french: "À plus tard",
          english: "See you later"
        }
      },
      {
        id: "see-you-soon",
        french: "À bientôt",
        english: "See you soon",
        category: "farewells",
        emoji: "👋⏱️",
        formal: {
          french: "À bientôt",
          english: "See you soon"
        }
      },
      {
        id: "see-you-later-today",
        french: "À tout à l'heure",
        english: "See you later today",
        category: "farewells",
        emoji: "👋🌅",
        formal: {
          french: "À tout à l'heure",
          english: "See you later today"
        }
      },
      {
        id: "good-day",
        french: "Bonne journée",
        english: "Have a good day",
        category: "farewells",
        emoji: "👋☀️",
        formal: {
          french: "Bonne journée",
          english: "Have a good day"
        }
      },
      {
        id: "welcome",
        french: "Bienvenue",
        english: "Welcome",
        category: "greetings",
        emoji: "👋🏠",
        formal: {
          french: "Bienvenue",
          english: "Welcome"
        }
      }
    ]
  },
  {
    id: "time-calendar",
    title: "Time & Calendar",
    description: "Learn days of the week, months, and time periods",
    phrases: [
      {
        id: "monday",
        french: "lundi",
        english: "Monday",
        category: "days",
        emoji: "📅"
      },
      {
        id: "tuesday",
        french: "mardi",
        english: "Tuesday",
        category: "days",
        emoji: "📅"
      },
      {
        id: "wednesday",
        french: "mercredi",
        english: "Wednesday",
        category: "days",
        emoji: "📅"
      },
      {
        id: "thursday",
        french: "jeudi",
        english: "Thursday",
        category: "days",
        emoji: "📅"
      },
      {
        id: "friday",
        french: "vendredi",
        english: "Friday",
        category: "days",
        emoji: "📅"
      },
      {
        id: "saturday",
        french: "samedi",
        english: "Saturday",
        category: "days",
        emoji: "📅"
      },
      {
        id: "sunday",
        french: "dimanche",
        english: "Sunday",
        category: "days",
        emoji: "📅"
      },
      {
        id: "january",
        french: "janvier",
        english: "January",
        category: "months",
        emoji: "❄️"
      },
      {
        id: "february",
        french: "février",
        english: "February",
        category: "months",
        emoji: "💝"
      },
      {
        id: "march",
        french: "mars",
        english: "March",
        category: "months",
        emoji: "🌸"
      },
      {
        id: "april",
        french: "avril",
        english: "April",
        category: "months",
        emoji: "🌷"
      },
      {
        id: "may",
        french: "mai",
        english: "May",
        category: "months",
        emoji: "🌺"
      },
      {
        id: "june",
        french: "juin",
        english: "June",
        category: "months",
        emoji: "☀️"
      },
      {
        id: "july",
        french: "juillet",
        english: "July",
        category: "months",
        emoji: "🏖️"
      },
      {
        id: "august",
        french: "août",
        english: "August",
        category: "months",
        emoji: "🌞"
      },
      {
        id: "september",
        french: "septembre",
        english: "September",
        category: "months",
        emoji: "🍂"
      },
      {
        id: "october",
        french: "octobre",
        english: "October",
        category: "months",
        emoji: "🎃"
      },
      {
        id: "november",
        french: "novembre",
        english: "November",
        category: "months",
        emoji: "🍁"
      },
      {
        id: "december",
        french: "décembre",
        english: "December",
        category: "months",
        emoji: "🎄"
      },
      {
        id: "morning",
        french: "le matin",
        english: "the morning",
        category: "time",
        emoji: "🌅"
      },
      {
        id: "noon",
        french: "le midi",
        english: "at noon",
        category: "time",
        emoji: "☀️"
      },
      {
        id: "afternoon",
        french: "l'après-midi",
        english: "the afternoon",
        category: "time",
        emoji: "🌤️"
      },
      {
        id: "evening",
        french: "le soir",
        english: "the evening",
        category: "time",
        emoji: "🌆"
      },
      {
        id: "night",
        french: "la nuit",
        english: "at night",
        category: "time",
        emoji: "🌙"
      },
      {
        id: "day",
        french: "le jour",
        english: "the day",
        category: "time",
        emoji: "☀️"
      },
      {
        id: "week",
        french: "la semaine",
        english: "the week",
        category: "time",
        emoji: "📅"
      },
      {
        id: "month",
        french: "le mois",
        english: "the month",
        category: "time",
        emoji: "📆"
      },
      {
        id: "year",
        french: "l'année",
        english: "the year",
        category: "time",
        emoji: "🗓️"
      }
    ]
  },
  {
    id: "family-children",
    title: "Family & Children",
    description: "Learn to talk about family and children",
    phrases: [
      {
        id: "do-you-have-children-qa",
        french: "Tu as des enfants ?\n\nJ'ai deux enfants",
        english: "Do you have children?\n\nI have two children",
        category: "family",
        formal: {
          french: "Avez-vous des enfants ?\n\nJ'ai deux enfants",
          english: "Do you have children?\n\nI have two children"
        }
      },
      {
        id: "i-have-no-children-qa",
        french: "Tu as des enfants ?\n\nJe n'ai pas d'enfant",
        english: "Do you have children?\n\nI don't have any children",
        category: "family",
        formal: {
          french: "Avez-vous des enfants ?\n\nJe n'ai pas d'enfant",
          english: "Do you have children?\n\nI don't have any children"
        }
      },
      {
        id: "how-many-children-qa",
        french: "Combien d'enfants as-tu ?\n\nJ'ai trois enfants",
        english: "How many children do you have?\n\nI have three children",
        category: "family",
        formal: {
          french: "Combien d'enfants avez-vous ?\n\nJ'ai trois enfants",
          english: "How many children do you have?\n\nI have three children"
        }
      }
    ]
  },
  {
    id: "directions",
    title: "Directions",
    description: "Learn cardinal directions and location words",
    phrases: [
      {
        id: "north",
        french: "au nord",
        english: "to the north",
        category: "directions"
      },
      {
        id: "east",
        french: "à l'est",
        english: "to the east",
        category: "directions"
      },
      {
        id: "south",
        french: "au sud",
        english: "to the south",
        category: "directions"
      },
      {
        id: "west",
        french: "à l'ouest",
        english: "to the west",
        category: "directions"
      },
      {
        id: "center",
        french: "au centre",
        english: "in the center",
        category: "directions"
      }
    ]
  },
  {
    id: "personal-info",
    title: "Personal Information",
    description: "Learn to introduce yourself and share personal details",
    phrases: [
      {
        id: "what-do-you-like-qa",
        french: "Qu'est-ce que tu aimes ?\n\nJ'aime courir",
        english: "What do you like?\n\nI like to run",
        category: "personal",
        emoji: "❤️🏃‍♀️",
        formal: {
          french: "Qu'est-ce que vous aimez ?\n\nJ'aime courir",
          english: "What do you like?\n\nI like to run"
        }
      },
      {
        id: "i-dont-like-qa",
        french: "Qu'est-ce que tu n'aimes pas ?\n\nJe n'aime pas les légumes",
        english: "What don't you like?\n\nI don't like vegetables",
        category: "personal",
        emoji: "❌🥕",
        formal: {
          french: "Qu'est-ce que vous n'aimez pas ?\n\nJe n'aime pas les légumes",
          english: "What don't you like?\n\nI don't like vegetables"
        }
      },
      {
        id: "what-is-your-name-qa",
        french: "Comment tu t'appelles ?\n\nJe m'appelle Marie",
        english: "What is your name?\n\nMy name is Marie",
        category: "personal",
        emoji: "👤📝",
        formal: {
          french: "Comment vous appelez-vous ?\n\nJe m'appelle Marie",
          english: "What is your name?\n\nMy name is Marie"
        }
      },
      {
        id: "first-name-qa",
        french: "Quel est ton prénom ?\n\nMon prénom est Marie",
        english: "What is your first name?\n\nMy first name is Marie",
        category: "personal",
        emoji: "✏️👤",
        formal: {
          french: "Quel est votre prénom ?\n\nMon prénom est Marie",
          english: "What is your first name?\n\nMy first name is Marie"
        }
      },
      {
        id: "last-name-qa",
        french: "Quel est ton nom de famille ?\n\nMon nom de famille est Dupont",
        english: "What is your last name?\n\nMy last name is Dupont",
        category: "personal",
        emoji: "👨‍👩‍👧‍👦📝",
        formal: {
          french: "Quel est votre nom de famille ?\n\nMon nom de famille est Dupont",
          english: "What is your last name?\n\nMy last name is Dupont"
        }
      },
      {
        id: "age-qa",
        french: "Quel âge as-tu ?\n\nJ'ai 29 ans",
        english: "What is your age?\n\nI am 29 years old",
        category: "personal",
        emoji: "🎂🔢",
        formal: {
          french: "Quel âge avez-vous ?\n\nJ'ai 29 ans",
          english: "What is your age?\n\nI am 29 years old"
        }
      },
      {
        id: "how-are-you-qa",
        french: "Comment tu vas ?\n\nÇa va bien, merci",
        english: "How are you?\n\nI'm doing well, thank you",
        category: "personal",
        emoji: "😊👍",
        formal: {
          french: "Comment allez-vous ?\n\nOui, je vais bien, merci",
          english: "How are you?\n\nYes, I'm doing well, thank you"
        }
      },
      {
        id: "how-are-you-casual-qa",
        french: "Ça va ?\n\nÇa va",
        english: "How's it going?\n\nIt's going well",
        category: "personal",
        emoji: "😊✅",
        formal: {
          french: "Comment allez-vous ?\n\nOui, je vais bien, merci",
          english: "How are you?\n\nYes, I'm doing well, thank you"
        }
      },
      {
        id: "are-you-doing-well-qa",
        french: "Tu vas bien ?\n\nOui, je vais bien",
        english: "Are you doing well?\n\nYes, I'm doing well",
        category: "personal",
        emoji: "😊👍",
        formal: {
          french: "Comment allez-vous ?\n\nOui, je vais bien, merci",
          english: "How are you?\n\nYes, I'm doing well, thank you"
        }
      }
    ]
  },
  {
    id: "places",
    title: "Places & Buildings",
    description: "Learn vocabulary for different places and buildings",
    phrases: [
      {
        id: "camping",
        french: "un camping",
        english: "camping",
        category: "places",
        emoji: "🏕️"
      },
      {
        id: "house",
        french: "une maison",
        english: "a house",
        category: "places",
        emoji: "🏠"
      },
      {
        id: "bedroom",
        french: "une chambre",
        english: "a bedroom",
        category: "places",
        emoji: "🛏️"
      },
      {
        id: "hotel",
        french: "un hôtel",
        english: "a hotel",
        category: "places",
        emoji: "🏨"
      },
      {
        id: "apartment",
        french: "un appartement",
        english: "a flat",
        category: "places",
        emoji: "🏢"
      },
      {
        id: "castle",
        french: "un château",
        english: "a castle",
        category: "places",
        emoji: "🏰"
      },
      {
        id: "cafe",
        french: "un café",
        english: "a café",
        category: "places",
        emoji: "☕"
      },
      {
        id: "bar",
        french: "un bar",
        english: "a pub",
        category: "places",
        emoji: "🍺"
      },
      {
        id: "restaurant",
        french: "un restaurant",
        english: "a restaurant",
        category: "places",
        emoji: "🍽️"
      },
      {
        id: "shop",
        french: "un magasin",
        english: "a shop",
        category: "places",
        emoji: "🛍️"
      }
    ]
  },
  {
    id: "marital-status",
    title: "Marital Status",
    description: "Learn to talk about your relationship status",
    phrases: [
      {
        id: "are-you-married",
        french: "Tu es marié(e) ?",
        english: "Are you married?",
        category: "marital",
        formal: {
          french: "Êtes-vous marié(e) ?",
          english: "Are you married?"
        }
      },
      {
        id: "i-am-married",
        french: "Je suis marié(e)",
        english: "I am married",
        category: "marital",
        formal: {
          french: "Je suis marié(e)",
          english: "I am married"
        }
      },
      {
        id: "i-am-not-married",
        french: "Je ne suis pas marié(e)",
        english: "I am not married",
        category: "marital",
        formal: {
          french: "Je ne suis pas marié(e)",
          english: "I am not married"
        }
      },
      {
        id: "i-am-single",
        french: "Je suis célibataire",
        english: "I am single",
        category: "marital",
        formal: {
          french: "Je suis célibataire",
          english: "I am single"
        }
      },
      {
        id: "i-am-widowed",
        french: "Je suis veuf / veuve",
        english: "I am widowed",
        category: "marital",
        formal: {
          french: "Je suis veuf / veuve",
          english: "I am widowed"
        }
      }
    ]
  },
  {
    id: "countries",
    title: "Countries",
    description: "Learn country names and their gender rules",
    phrases: [
      {
        id: "canada",
        french: "le Canada",
        english: "Canada (masculine)",
        category: "countries",
        emoji: "🇨🇦"
      },
      {
        id: "peru",
        french: "le Pérou",
        english: "Peru (masculine)",
        category: "countries",
        emoji: "🇵🇪"
      },
      {
        id: "brazil",
        french: "le Brésil",
        english: "Brazil (masculine)",
        category: "countries",
        emoji: "🇧🇷"
      },
      {
        id: "texas",
        french: "le Texas",
        english: "Texas (masculine)",
        category: "countries",
        emoji: "🤠"
      },
      {
        id: "mexico",
        french: "le Mexique",
        english: "Mexico (masculine)",
        category: "countries",
        emoji: "🇲🇽"
      },
      {
        id: "japan",
        french: "le Japon",
        english: "Japan (masculine)",
        category: "countries",
        emoji: "🇯🇵"
      },
      {
        id: "vietnam",
        french: "le Vietnam",
        english: "Vietnam (masculine)",
        category: "countries",
        emoji: "🇻🇳"
      },
      {
        id: "france",
        french: "la France",
        english: "France (feminine)",
        category: "countries",
        emoji: "🇫🇷"
      },
      {
        id: "belgium",
        french: "la Belgique",
        english: "Belgium (feminine)",
        category: "countries",
        emoji: "🇧🇪"
      },
      {
        id: "california",
        french: "la Californie",
        english: "California (feminine)",
        category: "countries",
        emoji: "🌴"
      },
      {
        id: "florida",
        french: "la Floride",
        english: "Florida (feminine)",
        category: "countries",
        emoji: "🦩"
      },
      {
        id: "russia",
        french: "la Russie",
        english: "Russia (feminine)",
        category: "countries",
        emoji: "🇷🇺"
      },
      {
        id: "china",
        french: "la Chine",
        english: "China (feminine)",
        category: "countries",
        emoji: "🇨🇳"
      },
      {
        id: "louisiana",
        french: "la Louisiane",
        english: "Louisiana (feminine)",
        category: "countries",
        emoji: "🎷"
      },
      {
        id: "thailand",
        french: "la Thaïlande",
        english: "Thailand (feminine)",
        category: "countries",
        emoji: "🇹🇭"
      },
      {
        id: "switzerland",
        french: "la Suisse",
        english: "Switzerland (feminine)",
        category: "countries",
        emoji: "🇨🇭"
      },
      {
        id: "england",
        french: "l'Angleterre",
        english: "England (starts with vowel)",
        category: "countries",
        emoji: "🇬🇧"
      },
      {
        id: "italy",
        french: "l'Italie",
        english: "Italy (starts with vowel)",
        category: "countries",
        emoji: "🇮🇹"
      },
      {
        id: "spain",
        french: "l'Espagne",
        english: "Spain (starts with vowel)",
        category: "countries",
        emoji: "🇪🇸"
      },
      {
        id: "australia",
        french: "l'Australie",
        english: "Australia (starts with vowel)",
        category: "countries",
        emoji: "🇦🇺"
      },
      {
        id: "germany",
        french: "l'Allemagne",
        english: "Germany (starts with vowel)",
        category: "countries",
        emoji: "🇩🇪"
      },
      {
        id: "alaska",
        french: "l'Alaska",
        english: "Alaska (starts with vowel)",
        category: "countries",
        emoji: "❄️"
      },
      {
        id: "india",
        french: "l'Inde",
        english: "India (starts with vowel)",
        category: "countries",
        emoji: "🇮🇳"
      },
      {
        id: "utah",
        french: "l'Utah",
        english: "Utah (starts with vowel)",
        category: "countries",
        emoji: "🏔️"
      },
      {
        id: "arizona",
        french: "l'Arizona",
        english: "Arizona (starts with vowel)",
        category: "countries",
        emoji: "🏜️"
      },
      {
        id: "united-states",
        french: "les États-Unis",
        english: "United States (plural)",
        category: "countries",
        emoji: "🇺🇸"
      },
      {
        id: "netherlands",
        french: "les Pays-Bas",
        english: "Netherlands (plural)",
        category: "countries",
        emoji: "🇳🇱"
      },
      {
        id: "uae",
        french: "les Émirats Arabes Unis",
        english: "United Arab Emirates (plural)",
        category: "countries",
        emoji: "🇦🇪"
      }
    ]
  },
  {
    id: "languages",
    title: "Languages",
    description: "Learn to talk about the languages you speak",
    phrases: [
      {
        id: "what-language-do-you-speak",
        french: "Tu parles quelle langue ?",
        english: "What language do you speak?",
        category: "languages",
        formal: {
          french: "Quelle langue parlez-vous ?",
          english: "What language do you speak?"
        }
      },
      {
        id: "i-speak",
        french: "Je parle .............",
        english: "I speak .............",
        category: "languages",
        formal: {
          french: "Je parle .............",
          english: "I speak ............."
        }
      },
      {
        id: "i-dont-speak",
        french: "Je ne parle pas ......",
        english: "I don't speak ......",
        category: "languages",
        formal: {
          french: "Je ne parle pas ......",
          english: "I don't speak ......"
        }
      }
    ]
  },
  {
    id: "verb-conjugations",
    title: "Verb Conjugations",
    description: "Learn common French verb conjugations",
    phrases: [
      {
        id: "avoir-i-have",
        french: "j'ai",
        english: "I have",
        category: "verbs"
      },
      {
        id: "avoir-you-have",
        french: "tu as",
        english: "you have",
        category: "verbs"
      },
      {
        id: "avoir-he-has",
        french: "il a",
        english: "he has",
        category: "verbs"
      },
      {
        id: "avoir-we-have",
        french: "nous avons",
        english: "we have",
        category: "verbs"
      },
      {
        id: "avoir-you-have-formal",
        french: "vous avez",
        english: "you have (formal)",
        category: "verbs"
      },
      {
        id: "avoir-they-have",
        french: "ils ont",
        english: "they have",
        category: "verbs"
      },
      {
        id: "etre-i-am",
        french: "je suis",
        english: "I am",
        category: "verbs"
      },
      {
        id: "etre-you-are",
        french: "tu es",
        english: "you are",
        category: "verbs"
      },
      {
        id: "etre-he-is",
        french: "il est",
        english: "he is",
        category: "verbs"
      },
      {
        id: "etre-we-are",
        french: "nous sommes",
        english: "we are",
        category: "verbs"
      },
      {
        id: "etre-you-are-formal",
        french: "vous êtes",
        english: "you are (formal)",
        category: "verbs"
      },
      {
        id: "etre-they-are",
        french: "ils sont",
        english: "they are",
        category: "verbs"
      },
      {
        id: "aller-i-go",
        french: "je vais",
        english: "I go",
        category: "verbs"
      },
      {
        id: "aller-you-go",
        french: "tu vas",
        english: "you go",
        category: "verbs"
      },
      {
        id: "aller-he-goes",
        french: "il va",
        english: "he goes",
        category: "verbs"
      },
      {
        id: "aller-we-go",
        french: "nous allons",
        english: "we go",
        category: "verbs"
      },
      {
        id: "aller-you-go-formal",
        french: "vous allez",
        english: "you go (formal)",
        category: "verbs"
      },
      {
        id: "aller-they-go",
        french: "ils vont",
        english: "they go",
        category: "verbs"
      },
      {
        id: "venir-i-come",
        french: "je viens",
        english: "I come",
        category: "verbs"
      },
      {
        id: "venir-you-come",
        french: "tu viens",
        english: "you come",
        category: "verbs"
      },
      {
        id: "venir-he-comes",
        french: "il vient",
        english: "he comes",
        category: "verbs"
      },
      {
        id: "venir-we-come",
        french: "nous venons",
        english: "we come",
        category: "verbs"
      },
      {
        id: "venir-you-come-formal",
        french: "vous venez",
        english: "you come (formal)",
        category: "verbs"
      },
      {
        id: "venir-they-come",
        french: "ils viennent",
        english: "they come",
        category: "verbs"
      },
      {
        id: "vouloir-i-want",
        french: "je veux",
        english: "I want",
        category: "verbs"
      },
      {
        id: "vouloir-you-want",
        french: "tu veux",
        english: "you want",
        category: "verbs"
      },
      {
        id: "vouloir-he-wants",
        french: "il veut",
        english: "he wants",
        category: "verbs"
      },
      {
        id: "vouloir-we-want",
        french: "nous voulons",
        english: "we want",
        category: "verbs"
      },
      {
        id: "vouloir-you-want-formal",
        french: "vous voulez",
        english: "you want (formal)",
        category: "verbs"
      },
      {
        id: "vouloir-they-want",
        french: "ils veulent",
        english: "they want",
        category: "verbs"
      }
    ]
  },
  {
    id: "indefinite-articles",
    title: "Indefinite Articles",
    description: "Learn the French indefinite articles: un, une, des",
    phrases: [
      {
        id: "article-un",
        french: "un",
        english: "a/an (masculine singular)",
        category: "articles",
        emoji: "♂️"
      },
      {
        id: "article-une",
        french: "une",
        english: "a/an (feminine singular)",
        category: "articles",
        emoji: "♀️"
      },
      {
        id: "article-des",
        french: "des",
        english: "some (plural)",
        category: "articles",
        emoji: "📦"
      },
      {
        id: "un-chien",
        french: "un chien",
        english: "a dog",
        category: "articles",
        emoji: "🐕"
      },
      {
        id: "une-maison",
        french: "une maison",
        english: "a house",
        category: "articles",
        emoji: "🏠"
      },
      {
        id: "des-enfants",
        french: "des enfants",
        english: "some children",
        category: "articles",
        emoji: "👶👧👦"
      },
      {
        id: "un-nom",
        french: "un nom",
        english: "a name",
        category: "articles",
        emoji: "📝"
      },
      {
        id: "un-prenom",
        french: "un prénom",
        english: "a first name",
        category: "articles",
        emoji: "✏️"
      },
      {
        id: "un-cocktail",
        french: "un cocktail",
        english: "a cocktail",
        category: "articles",
        emoji: "🍹"
      },
      {
        id: "une-nationalite",
        french: "une nationalité",
        english: "a nationality",
        category: "articles",
        emoji: "🌍"
      },
      {
        id: "une-invitation",
        french: "une invitation",
        english: "an invitation",
        category: "articles",
        emoji: "💌"
      },
      {
        id: "une-identite",
        french: "une identité",
        english: "an identity",
        category: "articles",
        emoji: "🆔"
      },
      {
        id: "des-droits",
        french: "des droits",
        english: "some rights",
        category: "articles",
        emoji: "⚖️"
      },
      {
        id: "des-professionnels",
        french: "des professionnels",
        english: "some professionals",
        category: "articles",
        emoji: "👔"
      },
      {
        id: "des-personnes",
        french: "des personnes",
        english: "some people",
        category: "articles",
        emoji: "👥"
      },
      {
        id: "des-rencontres",
        french: "des rencontres",
        english: "some meetings",
        category: "articles",
        emoji: "🤝"
      }
    ]
  },
  {
    id: "colors",
    title: "Colors",
    description: "Learn French color names and pronunciation",
    phrases: [
      {
        id: "blanc",
        french: "blanc",
        english: "white",
        category: "colors",
        emoji: "⚪"
      },
      {
        id: "orange",
        french: "orange",
        english: "orange",
        category: "colors",
        emoji: "🟠"
      },
      {
        id: "rose",
        french: "rose",
        english: "pink",
        category: "colors",
        emoji: "🩷"
      },
      {
        id: "vert",
        french: "vert",
        english: "green",
        category: "colors",
        emoji: "🟢"
      },
      {
        id: "marron",
        french: "marron",
        english: "brown",
        category: "colors",
        emoji: "🟤"
      },
      {
        id: "noir",
        french: "noir",
        english: "black",
        category: "colors",
        emoji: "⚫"
      },
      {
        id: "jaune",
        french: "jaune",
        english: "yellow",
        category: "colors",
        emoji: "🟡"
      },
      {
        id: "rouge",
        french: "rouge",
        english: "red",
        category: "colors",
        emoji: "🔴"
      },
      {
        id: "bleu",
        french: "bleu",
        english: "blue",
        category: "colors",
        emoji: "🔵"
      },
      {
        id: "violet",
        french: "violet",
        english: "purple",
        category: "colors",
        emoji: "🟣"
      },
      {
        id: "gris",
        french: "gris",
        english: "gray",
        category: "colors",
        emoji: "⚪"
      }
    ]
  },
  {
    id: "spatial-prepositions",
    title: "Spatial Prepositions",
    description: "Learn prepositions for describing position and location",
    phrases: [
      {
        id: "sur",
        french: "sur",
        english: "on (the ball is on the box)",
        category: "prepositions",
        emoji: "🔴📦"
      },
      {
        id: "sous",
        french: "sous",
        english: "under (the ball is under the box)",
        category: "prepositions",
        emoji: "📦🔴"
      },
      {
        id: "devant",
        french: "devant",
        english: "in front of (the ball is in front of the box)",
        category: "prepositions",
        emoji: "🔴📦"
      },
      {
        id: "derriere",
        french: "derrière",
        english: "behind (the ball is behind the box)",
        category: "prepositions",
        emoji: "📦🔴"
      },
      {
        id: "dans",
        french: "dans",
        english: "in (the ball is in the box)",
        category: "prepositions",
        emoji: "📦🔴"
      },
      {
        id: "entre",
        french: "entre",
        english: "between (the ball is between the boxes)",
        category: "prepositions",
        emoji: "📦🔴📦"
      },
      {
        id: "a-gauche-de",
        french: "à gauche de",
        english: "to the left of (the ball is to the left of the box)",
        category: "prepositions",
        emoji: "🔴📦"
      },
      {
        id: "a-droite-de",
        french: "à droite de",
        english: "to the right of (the ball is to the right of the box)",
        category: "prepositions",
        emoji: "📦🔴"
      },
      {
        id: "a-cote-de",
        french: "à côté de",
        english: "next to (the ball is next to the box)",
        category: "prepositions",
        emoji: "🔴📦"
      },
      {
        id: "loin-de",
        french: "loin de",
        english: "far from (the ball is far from the box)",
        category: "prepositions",
        emoji: "🔴📦"
      },
      {
        id: "pres-de",
        french: "près de",
        english: "near (the ball is near the box)",
        category: "prepositions",
        emoji: "🔴📦"
      },
      {
        id: "en-face-de",
        french: "en face de",
        english: "facing (the boxes are facing each other)",
        category: "prepositions",
        emoji: "📦📦"
      }
    ]
  },
  {
    id: "prepositions",
    title: "Prepositions",
    description: "Learn prepositions à, au, aux, en for countries and places",
    phrases: [
      {
        id: "prep-a-city",
        french: "à + ville",
        english: "to/in + city (J'habite à La Nouvelle Orléans)",
        category: "prepositions"
      },
      {
        id: "prep-au-masculine",
        french: "au + pays masculin",
        english: "to/in + masculine country (Je vais au Pérou)",
        category: "prepositions"
      },
      {
        id: "prep-en-feminine",
        french: "en + pays féminin",
        english: "to/in + feminine country (Je vais en France)",
        category: "prepositions"
      },
      {
        id: "prep-aux-plural",
        french: "aux + pays au pluriel",
        english: "to/in + plural country (Je suis aux Pays-Bas)",
        category: "prepositions"
      },
      {
        id: "prep-en-vowel",
        french: "en + pays commençant par voyelle",
        english: "to/in + country starting with vowel (Je suis en Espagne)",
        category: "prepositions"
      },
      {
        id: "i-live-in-canada",
        french: "J'habite au Canada",
        english: "I live in Canada",
        category: "prepositions"
      },
      {
        id: "i-go-to-france",
        french: "Je vais en France",
        english: "I go to France",
        category: "prepositions"
      },
      {
        id: "i-am-in-spain",
        french: "Je suis en Espagne",
        english: "I am in Spain",
        category: "prepositions"
      },
      {
        id: "i-come-from-louisiana",
        french: "Je viens de Louisiane",
        english: "I come from Louisiana",
        category: "prepositions"
      },
      {
        id: "i-go-to-bordeaux",
        french: "Je viens à Bordeaux",
        english: "I come to Bordeaux",
        category: "prepositions"
      }
    ]
  },
  {
    id: "french-letters",
    title: "French Letters",
    description: "Learn the French alphabet and letter pronunciation",
    phrases: [
      {
        id: "letter-a",
        french: "A",
        english: "A (ah)",
        category: "letters"
      },
      {
        id: "letter-b",
        french: "B",
        english: "B (bay)",
        category: "letters"
      },
      {
        id: "letter-c",
        french: "C",
        english: "C (say)",
        category: "letters"
      },
      {
        id: "letter-d",
        french: "D",
        english: "D (day)",
        category: "letters"
      },
      {
        id: "letter-e",
        french: "E",
        english: "E (uh)",
        category: "letters"
      },
      {
        id: "letter-f",
        french: "F",
        english: "F (eff)",
        category: "letters"
      },
      {
        id: "letter-g",
        french: "G",
        english: "G (zhay)",
        category: "letters"
      },
      {
        id: "letter-h",
        french: "H",
        english: "H (ahsh)",
        category: "letters"
      },
      {
        id: "letter-i",
        french: "I",
        english: "I (ee)",
        category: "letters"
      },
      {
        id: "letter-j",
        french: "J",
        english: "J (zhee)",
        category: "letters"
      },
      {
        id: "letter-k",
        french: "K",
        english: "K (kah)",
        category: "letters"
      },
      {
        id: "letter-l",
        french: "L",
        english: "L (ell)",
        category: "letters"
      },
      {
        id: "letter-m",
        french: "M",
        english: "M (emm)",
        category: "letters"
      },
      {
        id: "letter-n",
        french: "N",
        english: "N (enn)",
        category: "letters"
      },
      {
        id: "letter-o",
        french: "O",
        english: "O (oh)",
        category: "letters"
      },
      {
        id: "letter-p",
        french: "P",
        english: "P (pay)",
        category: "letters"
      },
      {
        id: "letter-q",
        french: "Q",
        english: "Q (koo)",
        category: "letters"
      },
      {
        id: "letter-r",
        french: "R",
        english: "R (air)",
        category: "letters"
      },
      {
        id: "letter-s",
        french: "S",
        english: "S (ess)",
        category: "letters"
      },
      {
        id: "letter-t",
        french: "T",
        english: "T (tay)",
        category: "letters"
      },
      {
        id: "letter-u",
        french: "U",
        english: "U (oo)",
        category: "letters"
      },
      {
        id: "letter-v",
        french: "V",
        english: "V (vay)",
        category: "letters"
      },
      {
        id: "letter-w",
        french: "W",
        english: "W (doo-bluh-vay)",
        category: "letters"
      },
      {
        id: "letter-x",
        french: "X",
        english: "X (eeks)",
        category: "letters"
      },
      {
        id: "letter-y",
        french: "Y",
        english: "Y (ee-grek)",
        category: "letters"
      },
      {
        id: "letter-z",
        french: "Z",
        english: "Z (zed)",
        category: "letters"
      }
    ]
  },
  {
    id: "sound-practice",
    title: "Sound Practice",
    description: "Practice French sounds: [y] vs [u] pronunciation",
    phrases: [
      {
        id: "sound-y-salut",
        french: "Salut",
        english: "Hi (sound: [y])",
        category: "sounds",
        emoji: "👋"
      },
      {
        id: "sound-y-tu",
        french: "Tu",
        english: "You (sound: [y])",
        category: "sounds",
        emoji: "👤"
      },
      {
        id: "sound-y-plus",
        french: "À plus tard",
        english: "See you later (sound: [y])",
        category: "sounds",
        emoji: "👋⏰"
      },
      {
        id: "sound-y-bienvenue",
        french: "Bienvenue",
        english: "Welcome (sound: [y])",
        category: "sounds",
        emoji: "👋🏠"
      },
      {
        id: "sound-y-etudiant",
        french: "Étudiant",
        english: "Student (sound: [y])",
        category: "sounds",
        emoji: "🎓"
      },
      {
        id: "sound-y-universite",
        french: "Université",
        english: "University (sound: [y])",
        category: "sounds",
        emoji: "🏫"
      },
      {
        id: "sound-y-russe",
        french: "Russe",
        english: "Russian (sound: [y])",
        category: "sounds",
        emoji: "🇷🇺"
      },
      {
        id: "sound-y-litterature",
        french: "Littérature",
        english: "Literature (sound: [y])",
        category: "sounds",
        emoji: "📚"
      },
      {
        id: "sound-y-culture",
        french: "Culture",
        english: "Culture (sound: [y])",
        category: "sounds",
        emoji: "🎭"
      },
      {
        id: "sound-u-bonjour",
        french: "Bonjour",
        english: "Hello (sound: [u])",
        category: "sounds",
        emoji: "👋"
      },
      {
        id: "sound-u-vous",
        french: "Vous",
        english: "You (formal) (sound: [u])",
        category: "sounds",
        emoji: "👥"
      },
      {
        id: "sound-u-beaucoup",
        french: "Beaucoup",
        english: "A lot (sound: [u])",
        category: "sounds",
        emoji: "📊"
      },
      {
        id: "sound-u-cours",
        french: "Cours",
        english: "Course (sound: [u])",
        category: "sounds",
        emoji: "📖"
      }
    ]
  },
      {
        id: "invitation-document",
        title: "Invitation Document",
        description: "Learn vocabulary from an embassy invitation and practice reading comprehension",
        phrases: [
          {
            id: "embassy",
            french: "une ambassade",
            english: "an embassy",
            category: "places",
            emoji: "🏛️"
          },
          {
            id: "invitation",
            french: "une invitation",
            english: "an invitation",
            category: "events",
            emoji: "💌"
          },
          {
            id: "children-rights-day",
            french: "Journée internationale des droits de l'enfant",
            english: "International Children's Rights Day",
            category: "events",
            emoji: "🧒🌍"
          },
          {
            id: "identity",
            french: "une identité",
            english: "an identity",
            category: "personal",
            emoji: "🆔"
          },
          {
            id: "nationality",
            french: "une nationalité",
            english: "a nationality",
            category: "personal",
            emoji: "🌍"
          },
          {
            id: "cocktail",
            french: "un cocktail",
            english: "a cocktail",
            category: "events",
            emoji: "🍹"
          },
          {
            id: "meetings",
            french: "des rencontres",
            english: "meetings",
            category: "events",
            emoji: "🤝"
          },
          {
            id: "professionals",
            french: "des professionnels",
            english: "professionals",
            category: "people",
            emoji: "👔"
          },
          {
            id: "rights",
            french: "des droits",
            english: "rights",
            category: "concepts",
            emoji: "⚖️"
          },
          {
            id: "people",
            french: "des personnes",
            english: "people",
            category: "people",
            emoji: "👥"
          }
        ]
      },
      {
        id: "indefinite-articles-practice",
        title: "Indefinite Articles Practice",
        description: "Practice using un, une, des with masculine, feminine, and plural nouns",
        phrases: [
          {
            id: "un-nom",
            french: "un nom",
            english: "a name (masculine)",
            category: "articles",
            emoji: "📝"
          },
          {
            id: "un-prenom",
            french: "un prénom",
            english: "a first name (masculine)",
            category: "articles",
            emoji: "✏️"
          },
          {
            id: "un-cocktail",
            french: "un cocktail",
            english: "a cocktail (masculine)",
            category: "articles",
            emoji: "🍹"
          },
          {
            id: "une-nationalite",
            french: "une nationalité",
            english: "a nationality (feminine)",
            category: "articles",
            emoji: "🌍"
          },
          {
            id: "une-invitation",
            french: "une invitation",
            english: "an invitation (feminine)",
            category: "articles",
            emoji: "💌"
          },
          {
            id: "une-identite",
            french: "une identité",
            english: "an identity (feminine)",
            category: "articles",
            emoji: "🆔"
          },
          {
            id: "des-droits",
            french: "des droits",
            english: "some rights (plural)",
            category: "articles",
            emoji: "⚖️"
          },
          {
            id: "des-professionnels",
            french: "des professionnels",
            english: "some professionals (plural)",
            category: "articles",
            emoji: "👔"
          },
          {
            id: "des-personnes",
            french: "des personnes",
            english: "some people (plural)",
            category: "articles",
            emoji: "👥"
          },
          {
            id: "des-rencontres",
            french: "des rencontres",
            english: "some meetings (plural)",
            category: "articles",
            emoji: "🤝"
          }
        ]
      },
      {
        id: "conversation-practice",
        title: "Conversation Practice",
        description: "Practice formal and informal greetings, introductions, and farewells",
        phrases: [
          {
            id: "greeting-formal",
            french: "Bonjour, comment allez-vous ?",
            english: "Hello, how are you? (formal)",
            category: "greetings",
            emoji: "👋",
            formal: {
              french: "Bonjour, comment allez-vous ?",
              english: "Hello, how are you? (formal)"
            }
          },
          {
            id: "greeting-informal",
            french: "Salut, ça va ?",
            english: "Hi, how's it going? (informal)",
            category: "greetings",
            emoji: "👋😊",
            formal: {
              french: "Bonjour, comment allez-vous ?",
              english: "Hello, how are you? (formal)"
            }
          },
          {
            id: "introduction-formal",
            french: "Je me présente : je m'appelle [nom], [prénom]",
            english: "Let me introduce myself: my name is [last name], [first name] (formal)",
            category: "introductions",
            emoji: "👤📝",
            formal: {
              french: "Je me présente : je m'appelle [nom], [prénom]",
              english: "Let me introduce myself: my name is [last name], [first name] (formal)"
            }
          },
          {
            id: "introduction-informal",
            french: "Moi, c'est [prénom]",
            english: "I'm [first name] (informal)",
            category: "introductions",
            emoji: "👤😊",
            formal: {
              french: "Je me présente : je m'appelle [nom], [prénom]",
              english: "Let me introduce myself: my name is [last name], [first name] (formal)"
            }
          },
          {
            id: "farewell-formal",
            french: "Au revoir, bonne journée",
            english: "Goodbye, have a good day (formal)",
            category: "farewells",
            emoji: "👋☀️",
            formal: {
              french: "Au revoir, bonne journée",
              english: "Goodbye, have a good day (formal)"
            }
          },
          {
            id: "farewell-informal",
            french: "À plus !",
            english: "See you later! (informal)",
            category: "farewells",
            emoji: "👋⏰",
            formal: {
              french: "Au revoir, bonne journée",
              english: "Goodbye, have a good day (formal)"
            }
          }
        ]
      },
      {
        id: "french-numbers",
        title: "French Numbers",
        description: "Learn to count and pronounce numbers in French",
        phrases: [
      {
        id: "number-0",
        french: "zéro",
        english: "zero",
        category: "numbers",
        emoji: "0️⃣"
      },
      {
        id: "number-1",
        french: "un",
        english: "one",
        category: "numbers",
        emoji: "1️⃣"
      },
      {
        id: "number-2",
        french: "deux",
        english: "two",
        category: "numbers",
        emoji: "2️⃣"
      },
      {
        id: "number-3",
        french: "trois",
        english: "three",
        category: "numbers",
        emoji: "3️⃣"
      },
      {
        id: "number-4",
        french: "quatre",
        english: "four",
        category: "numbers",
        emoji: "4️⃣"
      },
      {
        id: "number-5",
        french: "cinq",
        english: "five",
        category: "numbers",
        emoji: "5️⃣"
      },
      {
        id: "number-6",
        french: "six",
        english: "six",
        category: "numbers",
        emoji: "6️⃣"
      },
      {
        id: "number-7",
        french: "sept",
        english: "seven",
        category: "numbers",
        emoji: "7️⃣"
      },
      {
        id: "number-8",
        french: "huit",
        english: "eight",
        category: "numbers",
        emoji: "8️⃣"
      },
      {
        id: "number-9",
        french: "neuf",
        english: "nine",
        category: "numbers",
        emoji: "9️⃣"
      },
      {
        id: "number-10",
        french: "dix",
        english: "ten",
        category: "numbers",
        emoji: "🔟"
      },
      {
        id: "number-11",
        french: "onze",
        english: "eleven",
        category: "numbers"
      },
      {
        id: "number-12",
        french: "douze",
        english: "twelve",
        category: "numbers"
      },
      {
        id: "number-13",
        french: "treize",
        english: "thirteen",
        category: "numbers"
      },
      {
        id: "number-14",
        french: "quatorze",
        english: "fourteen",
        category: "numbers"
      },
      {
        id: "number-15",
        french: "quinze",
        english: "fifteen",
        category: "numbers"
      },
      {
        id: "number-16",
        french: "seize",
        english: "sixteen",
        category: "numbers"
      },
      {
        id: "number-17",
        french: "dix-sept",
        english: "seventeen",
        category: "numbers"
      },
      {
        id: "number-18",
        french: "dix-huit",
        english: "eighteen",
        category: "numbers"
      },
      {
        id: "number-19",
        french: "dix-neuf",
        english: "nineteen",
        category: "numbers"
      },
      {
        id: "number-20",
        french: "vingt",
        english: "twenty",
        category: "numbers"
      },
      {
        id: "number-30",
        french: "trente",
        english: "thirty",
        category: "numbers"
      },
      {
        id: "number-40",
        french: "quarante",
        english: "forty",
        category: "numbers"
      },
      {
        id: "number-50",
        french: "cinquante",
        english: "fifty",
        category: "numbers"
      },
      {
        id: "number-60",
        french: "soixante",
        english: "sixty",
        category: "numbers"
      },
      {
        id: "number-70",
        french: "soixante-dix",
        english: "seventy",
        category: "numbers"
      },
      {
        id: "number-71",
        french: "soixante et onze",
        english: "seventy-one",
        category: "numbers"
      },
      {
        id: "number-72",
        french: "soixante-douze",
        english: "seventy-two",
        category: "numbers"
      },
      {
        id: "number-80",
        french: "quatre-vingt",
        english: "eighty",
        category: "numbers"
      },
      {
        id: "number-81",
        french: "quatre-vingt-un",
        english: "eighty-one",
        category: "numbers"
      },
      {
        id: "number-82",
        french: "quatre-vingt-deux",
        english: "eighty-two",
        category: "numbers"
      },
      {
        id: "number-90",
        french: "quatre-vingt-dix",
        english: "ninety",
        category: "numbers"
      },
      {
        id: "number-91",
        french: "quatre-vingt-onze",
        english: "ninety-one",
        category: "numbers"
      },
      {
        id: "number-92",
        french: "quatre-vingt-douze",
        english: "ninety-two",
        category: "numbers"
      },
      {
        id: "number-100",
        french: "cent",
        english: "one hundred",
        category: "numbers"
      },
      {
        id: "number-200",
        french: "deux-cents",
        english: "two hundred",
        category: "numbers"
      },
      {
        id: "number-300",
        french: "trois-cents",
        english: "three hundred",
        category: "numbers"
      },
      {
        id: "number-875",
        french: "huit-cent-soixante-quinze",
        english: "eight hundred seventy-five",
        category: "numbers"
      },
      {
        id: "number-1000",
        french: "mille",
        english: "one thousand",
        category: "numbers"
      },
      {
        id: "number-1400",
        french: "mille-quatre-cents",
        english: "one thousand four hundred",
        category: "numbers"
      }
    ]
  }
]
},
  {
    id:"lesson_2",
    title: "Leçon 2 Ca se passe où ? / Lesson 2 Where does it happen?",
    description: "Lexique: Les moyens de transport - Grammaire: Demander et donner des informations - Utiliser Où ? Qui ? Quand ? Quoi ? - Focus langue: Les nombres / Vocabulary: Means of transportation - Grammar: Ask and give information - Use Where? Who? When? What? - Language focus: Numbers",
    lessons: [
      {
        id: "transportation-vocabulary",
        title: "Transportation Vocabulary",
        description: "Learn transportation vocabulary and locations",
        phrases: [
          {
            id: "plane",
            french: "un avion",
            english: "a plane",
            category: "transportation",
            emoji: "✈️"
          },
          {
            id: "airport",
            french: "un aéroport",
            english: "an airport",
            category: "transportation",
            emoji: "🏢"
          },
          {
            id: "plane-ticket",
            french: "un billet d'avion",
            english: "a plane ticket",
            category: "transportation",
            emoji: "🎫✈️"
          },
          {
            id: "car",
            french: "une voiture",
            english: "a car",
            category: "transportation",
            emoji: "🚗"
          },
          {
            id: "train",
            french: "un train",
            english: "a train",
            category: "transportation",
            emoji: "🚂"
          },
          {
            id: "train-station",
            french: "une gare",
            english: "a train station",
            category: "transportation",
            emoji: "🚉"
          },
          {
            id: "platform",
            french: "un quai",
            english: "a platform",
            category: "transportation",
            emoji: "🚉"
          },
          {
            id: "train-ticket",
            french: "un ticket de train",
            english: "a train ticket",
            category: "transportation",
            emoji: "🎫🚂"
          },
          {
            id: "bus",
            french: "un bus",
            english: "a bus",
            category: "transportation",
            emoji: "🚌"
          },
          {
            id: "bus-station",
            french: "une gare routière",
            english: "a bus station",
            category: "transportation",
            emoji: "🚌"
          },
          {
            id: "bus-stop",
            french: "un arrêt",
            english: "a stop",
            category: "transportation",
            emoji: "🚏"
          },
          {
            id: "bus-stop-location",
            french: "un arrêt de bus",
            english: "a bus stop",
            category: "transportation",
            emoji: "🚏🚌"
          }
        ]
      },
      {
        id: "question-words",
        title: "Question Words",
        description: "Learn to ask questions with Où? Qui? Quand? Quoi?",
        phrases: [
          {
            id: "where",
            french: "Où ?",
            english: "Where?",
            category: "questions",
            emoji: "📍"
          },
          {
            id: "who",
            french: "Qui ?",
            english: "Who?",
            category: "questions",
            emoji: "👤"
          },
          {
            id: "when",
            french: "Quand ?",
            english: "When?",
            category: "questions",
            emoji: "⏰"
          },
          {
            id: "what",
            french: "Quoi ?",
            english: "What?",
            category: "questions",
            emoji: "❓"
          },
          {
            id: "how-much",
            french: "Combien ?",
            english: "How much?",
            category: "questions",
            emoji: "💰"
          }
        ]
      },
      {
        id: "asking-for-information",
        title: "Asking for Information",
        description: "Learn to ask for information politely",
        phrases: [
          {
            id: "excuse-me-where-train",
            french: "Excusez-moi Monsieur, Madame, vous savez où est le train pour Paris ?",
            english: "Excuse me sir/madam, do you know where the train to Paris is?",
            category: "requests",
            emoji: "🚂❓"
          },
          {
            id: "excuse-me-when-train",
            french: "Pardon, Monsieur, Madame, vous savez quand part le train ?",
            english: "Excuse me sir/madam, do you know when the train leaves?",
            category: "requests",
            emoji: "⏰❓"
          },
          {
            id: "i-would-like-ticket",
            french: "Je voudrais un billet pour Paris s'il vous plaît.",
            english: "I would like a ticket to Paris please.",
            category: "requests",
            emoji: "🎫"
          }
        ]
      },
      {
        id: "question-answer-patterns",
        title: "Question & Answer Patterns",
        description: "Learn common question and answer patterns for travel",
        phrases: [
          {
            id: "where-train-leaves",
            french: "Le train part où ?\n\nLe train part à Paris",
            english: "Where does the train leave from?\n\nThe train leaves from Paris",
            category: "qa-patterns",
            emoji: "🚂📍"
          },
          {
            id: "where-train-arrives",
            french: "Le train arrive où ?\n\nLe train arrive à Paris",
            english: "Where does the train arrive?\n\nThe train arrives in Paris",
            category: "qa-patterns",
            emoji: "🚂🏁"
          },
          {
            id: "who-travels-train",
            french: "Qui voyage dans le train ?\n\nIl y a deux personnes",
            english: "Who travels on the train?\n\nThere are two people",
            category: "qa-patterns",
            emoji: "👥🚂"
          },
          {
            id: "when-train-leaves",
            french: "Le train part quand ?\n\nLe train part à 14h",
            english: "When does the train leave?\n\nThe train leaves at 2 PM",
            category: "qa-patterns",
            emoji: "⏰🚂"
          },
          {
            id: "when-train-arrives",
            french: "Le train arrive quand ?\n\nLe train arrive à 16h",
            english: "When does the train arrive?\n\nThe train arrives at 4 PM",
            category: "qa-patterns",
            emoji: "⏰🏁"
          },
          {
            id: "what-do-you-want",
            french: "Vous voulez quoi ?\n\nJe voudrais un billet de train",
            english: "What do you want?\n\nI would like a train ticket",
            category: "qa-patterns",
            emoji: "❓🎫"
          },
          {
            id: "how-much-costs",
            french: "Ça coûte combien ?\n\nÇa coûte 25 €",
            english: "How much does it cost?\n\nIt costs 25 euros",
            category: "qa-patterns",
            emoji: "💰"
          }
        ]
      },
      {
        id: "polite-formulas",
        title: "Polite Formulas",
        description: "Learn to transform requests into polite formulas using 'Pardon Monsieur/Madame' and 's'il vous plaît'",
        phrases: [
          {
            id: "where-is-platform-10-example",
            french: "Pardon Monsieur, où est le quai n°10, s'il vous plaît ?",
            english: "Excuse me Sir, where is platform number 10, please?",
            category: "polite-formulas-l2",
            emoji: "🎩🚂"
          },
          {
            id: "train-ticket-toulouse-polite",
            french: "Pardon Madame, un billet de train pour Toulouse, s'il vous plaît ?",
            english: "Excuse me Madam, a train ticket for Toulouse, please?",
            category: "polite-formulas-l2",
            emoji: "👩‍💼🎫"
          },
          {
            id: "is-this-train-geneva-polite",
            french: "Pardon Monsieur, est-ce que c'est le train pour Genève, s'il vous plaît ?",
            english: "Excuse me Sir, is this the train for Geneva, please?",
            category: "polite-formulas-l2",
            emoji: "🎩🚂"
          },
          {
            id: "plane-ticket-stockholm-polite",
            french: "Pardon Monsieur, un billet d'avion pour Stockholm, s'il vous plaît ?",
            english: "Excuse me Sir, a plane ticket for Stockholm, please?",
            category: "polite-formulas-l2",
            emoji: "🎩✈️"
          },
          {
            id: "where-is-station-polite",
            french: "Pardon Madame, où est la gare, s'il vous plaît ?",
            english: "Excuse me Madam, where is the train station, please?",
            category: "polite-formulas-l2",
            emoji: "👩‍💼🚉"
          },
          {
            id: "direct-where-platform-10",
            french: "Où est le quai n°10 ?",
            english: "Where is platform number 10? (direct form)",
            category: "polite-formulas-l2",
            emoji: "❓🚂"
          },
          {
            id: "direct-train-ticket-toulouse",
            french: "Un billet de train pour Toulouse.",
            english: "A train ticket for Toulouse. (direct form)",
            category: "polite-formulas-l2",
            emoji: "🎫🚂"
          },
          {
            id: "direct-is-train-geneva",
            french: "C'est le train pour Genève ?",
            english: "Is this the train for Geneva? (direct form)",
            category: "polite-formulas-l2",
            emoji: "❓🚂"
          },
          {
            id: "direct-plane-ticket-stockholm",
            french: "Un billet d'avion pour Stockholm.",
            english: "A plane ticket for Stockholm. (direct form)",
            category: "polite-formulas-l2",
            emoji: "🎫✈️"
          },
          {
            id: "direct-where-station",
            french: "Où est la gare ?",
            english: "Where is the train station? (direct form)",
            category: "polite-formulas-l2",
            emoji: "❓🚉"
          }
        ]
      }
    ]
  },
  {
    id: "lesson_3",
    title: "Leçon 3 Ils sont francophones / Lesson 3 They are French-speaking",
    description: "Objectifs: Donner des informations personnelles - Le masculin et le féminin (métiers, nationalités) - L'intonation (la voix qui monte, la voix qui descend) / Objectives: Give personal information - Masculine and feminine (jobs, nationalities) - Intonation (rising voice, falling voice)",
    lessons: [
      {
        id: "personal-information-lesson3",
        title: "Personal Information",
        description: "Learn to give personal information about yourself",
        phrases: [
          {
            id: "my-name-is-lea",
            french: "Je m'appelle Léa",
            english: "My name is Léa",
            category: "personal-info-l3",
            emoji: "👋"
          },
          {
            id: "i-am-french-feminine",
            french: "Je suis française",
            english: "I am French (feminine)",
            category: "nationalities-l3",
            emoji: "🇫🇷"
          },
          {
            id: "i-speak-french-english",
            french: "Je parle français et anglais",
            english: "I speak French and English",
            category: "languages-l3",
            emoji: "🗣️"
          },
          {
            id: "i-am-teacher-feminine",
            french: "Je suis enseignante",
            english: "I am a teacher (feminine)",
            category: "professions-l3",
            emoji: "👩‍🏫"
          }
        ]
      },
      {
        id: "nationalities-masculine-feminine",
        title: "Nationalities - Masculine and Feminine",
        description: "Learn masculine and feminine forms of nationalities",
        phrases: [
          {
            id: "camerounais-m",
            french: "camerounais",
            english: "Cameroonian (masculine)",
            category: "nationalities-l3",
            emoji: "🇨🇲",
            formal: {
              french: "camerounaise",
              english: "Cameroonian (feminine)"
            }
          },
          {
            id: "suedois-m",
            french: "suédois",
            english: "Swedish (masculine)",
            category: "nationalities-l3",
            emoji: "🇸🇪",
            formal: {
              french: "suédoise",
              english: "Swedish (feminine)"
            }
          },
          {
            id: "anglais-m",
            french: "anglais",
            english: "English (masculine)",
            category: "nationalities-l3",
            emoji: "🇬🇧",
            formal: {
              french: "anglaise",
              english: "English (feminine)"
            }
          },
          {
            id: "espagnol-m",
            french: "espagnol",
            english: "Spanish (masculine)",
            category: "nationalities-l3",
            emoji: "🇪🇸",
            formal: {
              french: "espagnole",
              english: "Spanish (feminine)"
            }
          },
          {
            id: "mexicain-m",
            french: "mexicain",
            english: "Mexican (masculine)",
            category: "nationalities-l3",
            emoji: "🇲🇽",
            formal: {
              french: "mexicaine",
              english: "Mexican (feminine)"
            }
          },
          {
            id: "algerien-m",
            french: "algérien",
            english: "Algerian (masculine)",
            category: "nationalities-l3",
            emoji: "🇩🇿",
            formal: {
              french: "algérienne",
              english: "Algerian (feminine)"
            }
          },
          {
            id: "indien-m",
            french: "indien",
            english: "Indian (masculine)",
            category: "nationalities-l3",
            emoji: "🇮🇳",
            formal: {
              french: "indienne",
              english: "Indian (feminine)"
            }
          },
          {
            id: "russe-m",
            french: "russe",
            english: "Russian (masculine)",
            category: "nationalities-l3",
            emoji: "🇷🇺",
            formal: {
              french: "russe",
              english: "Russian (feminine)"
            }
          },
          {
            id: "suisse-m",
            french: "suisse",
            english: "Swiss (masculine)",
            category: "nationalities-l3",
            emoji: "🇨🇭",
            formal: {
              french: "suisse",
              english: "Swiss (feminine)"
            }
          }
        ]
      },
      {
        id: "professions-masculine-feminine",
        title: "Professions - Masculine and Feminine",
        description: "Learn masculine and feminine forms of professions",
        phrases: [
          {
            id: "comedien-m",
            french: "comédien",
            english: "actor/comedian (masculine)",
            category: "professions-l3",
            emoji: "🎭",
            formal: {
              french: "comédienne",
              english: "actress/comedian (feminine)"
            }
          },
          {
            id: "electricien-m",
            french: "électricien",
            english: "electrician (masculine)",
            category: "professions-l3",
            emoji: "⚡",
            formal: {
              french: "électricienne",
              english: "electrician (feminine)"
            }
          },
          {
            id: "acteur-m",
            french: "acteur",
            english: "actor (masculine)",
            category: "professions-l3",
            emoji: "🎬",
            formal: {
              french: "actrice",
              english: "actress (feminine)"
            }
          },
          {
            id: "instituteur-m",
            french: "instituteur",
            english: "elementary teacher (masculine)",
            category: "professions-l3",
            emoji: "👨‍🏫",
            formal: {
              french: "institutrice",
              english: "elementary teacher (feminine)"
            }
          },
          {
            id: "chanteur-m",
            french: "chanteur",
            english: "singer (masculine)",
            category: "professions-l3",
            emoji: "🎤",
            formal: {
              french: "chanteuse",
              english: "singer (feminine)"
            }
          },
          {
            id: "coiffeur-m",
            french: "coiffeur",
            english: "hairdresser (masculine)",
            category: "professions-l3",
            emoji: "💇‍♂️",
            formal: {
              french: "coiffeuse",
              english: "hairdresser (feminine)"
            }
          },
          {
            id: "infirmier-m",
            french: "infirmier",
            english: "nurse (masculine)",
            category: "professions-l3",
            emoji: "👨‍⚕️",
            formal: {
              french: "infirmière",
              english: "nurse (feminine)"
            }
          },
          {
            id: "boulanger-m",
            french: "boulanger",
            english: "baker (masculine)",
            category: "professions-l3",
            emoji: "🥖",
            formal: {
              french: "boulangère",
              english: "baker (feminine)"
            }
          },
          {
            id: "journaliste-m",
            french: "journaliste",
            english: "journalist (masculine)",
            category: "professions-l3",
            emoji: "📰",
            formal: {
              french: "journaliste",
              english: "journalist (feminine)"
            }
          },
          {
            id: "veterinaire-m",
            french: "vétérinaire",
            english: "veterinarian (masculine)",
            category: "professions-l3",
            emoji: "👨‍⚕️🐕",
            formal: {
              french: "vétérinaire",
              english: "veterinarian (feminine)"
            }
          }
        ]
      },
      {
        id: "french-intonation",
        title: "French Intonation",
        description: "Learn rising and falling intonation patterns",
        phrases: [
          {
            id: "are-you-english-rising",
            french: "Tu es anglais ?",
            english: "Are you English? (rising intonation)",
            category: "intonation-l3",
            emoji: "⬆️🗣️"
          },
          {
            id: "no-i-am-american-falling",
            french: "Non, je suis américain.",
            english: "No, I am American. (falling intonation)",
            category: "intonation-l3",
            emoji: "⬇️🗣️"
          },
          {
            id: "question-rising-voice",
            french: "Question : La voix monte",
            english: "Question: The voice rises",
            category: "intonation-l3",
            emoji: "❓⬆️"
          },
          {
            id: "statement-falling-voice",
            french: "Parler ou réponse : La voix descend",
            english: "Statement or response: The voice falls",
            category: "intonation-l3",
            emoji: "💬⬇️"
          }
        ]
      }
    ]
  }
]

// Export all lessons as a flat array for backward compatibility
export const lessons: Lesson[] = lessonGroups.flatMap(group => group.lessons);

export const getAllPhrases = (): FrenchPhrase[] => {
  return lessons.flatMap(lesson => lesson.phrases);
};

export const getPhrasesByCategory = (category: string): FrenchPhrase[] => {
  return getAllPhrases().filter(phrase => phrase.category === category);
};

export const getLessonById = (id: string): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getLessonGroupById = (id: string): LessonGroup | undefined => {
  return lessonGroups.find(group => group.id === id);
};
