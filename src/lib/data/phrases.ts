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
        french: "0 - zéro",
        english: "0 - zero",
        category: "numbers",
        emoji: "0️⃣"
      },
      {
        id: "number-1",
        french: "1 - un",
        english: "1 - one",
        category: "numbers",
        emoji: "1️⃣"
      },
      {
        id: "number-2",
        french: "2 - deux",
        english: "2 - two",
        category: "numbers",
        emoji: "2️⃣"
      },
      {
        id: "number-3",
        french: "3 - trois",
        english: "3 - three",
        category: "numbers",
        emoji: "3️⃣"
      },
      {
        id: "number-4",
        french: "4 - quatre",
        english: "4 - four",
        category: "numbers",
        emoji: "4️⃣"
      },
      {
        id: "number-5",
        french: "5 - cinq",
        english: "5 - five",
        category: "numbers",
        emoji: "5️⃣"
      },
      {
        id: "number-6",
        french: "6 - six",
        english: "6 - six",
        category: "numbers",
        emoji: "6️⃣"
      },
      {
        id: "number-7",
        french: "7 - sept",
        english: "7 - seven",
        category: "numbers",
        emoji: "7️⃣"
      },
      {
        id: "number-8",
        french: "8 - huit",
        english: "8 - eight",
        category: "numbers",
        emoji: "8️⃣"
      },
      {
        id: "number-9",
        french: "9 - neuf",
        english: "9 - nine",
        category: "numbers",
        emoji: "9️⃣"
      },
      {
        id: "number-10",
        french: "10 - dix",
        english: "10 - ten",
        category: "numbers",
        emoji: "🔟"
      },
      {
        id: "number-11",
        french: "11 - onze",
        english: "11 - eleven",
        category: "numbers",
        emoji: "1️⃣1️⃣"
      },
      {
        id: "number-12",
        french: "12 - douze",
        english: "12 - twelve",
        category: "numbers",
        emoji: "1️⃣2️⃣"
      },
      {
        id: "number-13",
        french: "13 - treize",
        english: "13 - thirteen",
        category: "numbers",
        emoji: "1️⃣3️⃣"
      },
      {
        id: "number-14",
        french: "14 - quatorze",
        english: "14 - fourteen",
        category: "numbers",
        emoji: "1️⃣4️⃣"
      },
      {
        id: "number-15",
        french: "15 - quinze",
        english: "15 - fifteen",
        category: "numbers",
        emoji: "1️⃣5️⃣"
      },
      {
        id: "number-16",
        french: "16 - seize",
        english: "16 - sixteen",
        category: "numbers",
        emoji: "1️⃣6️⃣"
      },
      {
        id: "number-17",
        french: "17 - dix-sept",
        english: "17 - seventeen",
        category: "numbers",
        emoji: "1️⃣7️⃣"
      },
      {
        id: "number-18",
        french: "18 - dix-huit",
        english: "18 - eighteen",
        category: "numbers",
        emoji: "1️⃣8️⃣"
      },
      {
        id: "number-19",
        french: "19 - dix-neuf",
        english: "19 - nineteen",
        category: "numbers",
        emoji: "1️⃣9️⃣"
      },
      {
        id: "number-20",
        french: "20 - vingt",
        english: "20 - twenty",
        category: "numbers",
        emoji: "2️⃣0️⃣"
      },
      {
        id: "number-21",
        french: "21 - vingt et un",
        english: "21 - twenty-one",
        category: "numbers",
        emoji: "2️⃣1️⃣"
      },
      {
        id: "number-22",
        french: "22 - vingt-deux",
        english: "22 - twenty-two",
        category: "numbers",
        emoji: "2️⃣2️⃣"
      },
      {
        id: "number-29",
        french: "29 - vingt-neuf",
        english: "29 - twenty-nine",
        category: "numbers",
        emoji: "2️⃣9️⃣"
      },
      {
        id: "number-30",
        french: "30 - trente",
        english: "30 - thirty",
        category: "numbers",
        emoji: "3️⃣0️⃣"
      },
      {
        id: "number-40",
        french: "40 - quarante",
        english: "40 - forty",
        category: "numbers",
        emoji: "4️⃣0️⃣"
      },
      {
        id: "number-50",
        french: "50 - cinquante",
        english: "50 - fifty",
        category: "numbers",
        emoji: "5️⃣0️⃣"
      },
      {
        id: "number-60",
        french: "60 - soixante",
        english: "60 - sixty",
        category: "numbers",
        emoji: "6️⃣0️⃣"
      },
      {
        id: "number-70",
        french: "70 - soixante-dix\n(60 + 10)",
        english: "70 - seventy\n(60 + 10)",
        category: "numbers",
        emoji: "7️⃣0️⃣"
      },
      {
        id: "number-71",
        french: "71 - soixante et onze\n(60 + 11)",
        english: "71 - seventy-one\n(60 + 11)",
        category: "numbers",
        emoji: "7️⃣1️⃣"
      },
      {
        id: "number-72",
        french: "72 - soixante-douze\n(60 + 12)",
        english: "72 - seventy-two\n(60 + 12)",
        category: "numbers",
        emoji: "7️⃣2️⃣"
      },
      {
        id: "number-73",
        french: "73 - soixante-treize\n(60 + 13)",
        english: "73 - seventy-three\n(60 + 13)",
        category: "numbers",
        emoji: "7️⃣3️⃣"
      },
      {
        id: "number-74",
        french: "74 - soixante-quatorze\n(60 + 14)",
        english: "74 - seventy-four\n(60 + 14)",
        category: "numbers",
        emoji: "7️⃣4️⃣"
      },
      {
        id: "number-75",
        french: "75 - soixante-quinze\n(60 + 15)",
        english: "75 - seventy-five\n(60 + 15)",
        category: "numbers",
        emoji: "7️⃣5️⃣"
      },
      {
        id: "number-76",
        french: "76 - soixante-seize\n(60 + 16)",
        english: "76 - seventy-six\n(60 + 16)",
        category: "numbers",
        emoji: "7️⃣6️⃣"
      },
      {
        id: "number-77",
        french: "77 - soixante-dix-sept\n(60 + 17)",
        english: "77 - seventy-seven\n(60 + 17)",
        category: "numbers",
        emoji: "7️⃣7️⃣"
      },
      {
        id: "number-78",
        french: "78 - soixante-dix-huit\n(60 + 18)",
        english: "78 - seventy-eight\n(60 + 18)",
        category: "numbers",
        emoji: "7️⃣8️⃣"
      },
      {
        id: "number-79",
        french: "79 - soixante-dix-neuf\n(60 + 19)",
        english: "79 - seventy-nine\n(60 + 19)",
        category: "numbers",
        emoji: "7️⃣9️⃣"
      },
      {
        id: "number-80",
        french: "80 - quatre-vingt\n(4 × 20)",
        english: "80 - eighty\n(4 × 20)",
        category: "numbers",
        emoji: "8️⃣0️⃣"
      },
      {
        id: "number-81",
        french: "81 - quatre-vingt-un\n(4 × 20 + 1)",
        english: "81 - eighty-one\n(4 × 20 + 1)",
        category: "numbers",
        emoji: "8️⃣1️⃣"
      },
      {
        id: "number-82",
        french: "82 - quatre-vingt-deux\n(4 × 20 + 2)",
        english: "82 - eighty-two\n(4 × 20 + 2)",
        category: "numbers",
        emoji: "8️⃣2️⃣"
      },
      {
        id: "number-83",
        french: "83 - quatre-vingt-trois\n(4 × 20 + 3)",
        english: "83 - eighty-three\n(4 × 20 + 3)",
        category: "numbers",
        emoji: "8️⃣3️⃣"
      },
      {
        id: "number-84",
        french: "84 - quatre-vingt-quatre\n(4 × 20 + 4)",
        english: "84 - eighty-four\n(4 × 20 + 4)",
        category: "numbers",
        emoji: "8️⃣4️⃣"
      },
      {
        id: "number-85",
        french: "85 - quatre-vingt-cinq\n(4 × 20 + 5)",
        english: "85 - eighty-five\n(4 × 20 + 5)",
        category: "numbers",
        emoji: "8️⃣5️⃣"
      },
      {
        id: "number-86",
        french: "86 - quatre-vingt-six\n(4 × 20 + 6)",
        english: "86 - eighty-six\n(4 × 20 + 6)",
        category: "numbers",
        emoji: "8️⃣6️⃣"
      },
      {
        id: "number-87",
        french: "87 - quatre-vingt-sept\n(4 × 20 + 7)",
        english: "87 - eighty-seven\n(4 × 20 + 7)",
        category: "numbers",
        emoji: "8️⃣7️⃣"
      },
      {
        id: "number-88",
        french: "88 - quatre-vingt-huit\n(4 × 20 + 8)",
        english: "88 - eighty-eight\n(4 × 20 + 8)",
        category: "numbers",
        emoji: "8️⃣8️⃣"
      },
      {
        id: "number-89",
        french: "89 - quatre-vingt-neuf\n(4 × 20 + 9)",
        english: "89 - eighty-nine\n(4 × 20 + 9)",
        category: "numbers",
        emoji: "8️⃣9️⃣"
      },
      {
        id: "number-90",
        french: "90 - quatre-vingt-dix\n(4 × 20 + 10)",
        english: "90 - ninety\n(4 × 20 + 10)",
        category: "numbers",
        emoji: "9️⃣0️⃣"
      },
      {
        id: "number-91",
        french: "91 - quatre-vingt-onze\n(4 × 20 + 11)",
        english: "91 - ninety-one\n(4 × 20 + 11)",
        category: "numbers",
        emoji: "9️⃣1️⃣"
      },
      {
        id: "number-92",
        french: "92 - quatre-vingt-douze\n(4 × 20 + 12)",
        english: "92 - ninety-two\n(4 × 20 + 12)",
        category: "numbers",
        emoji: "9️⃣2️⃣"
      },
      {
        id: "number-93",
        french: "93 - quatre-vingt-treize\n(4 × 20 + 13)",
        english: "93 - ninety-three\n(4 × 20 + 13)",
        category: "numbers",
        emoji: "9️⃣3️⃣"
      },
      {
        id: "number-94",
        french: "94 - quatre-vingt-quatorze\n(4 × 20 + 14)",
        english: "94 - ninety-four\n(4 × 20 + 14)",
        category: "numbers",
        emoji: "9️⃣4️⃣"
      },
      {
        id: "number-95",
        french: "95 - quatre-vingt-quinze\n(4 × 20 + 15)",
        english: "95 - ninety-five\n(4 × 20 + 15)",
        category: "numbers",
        emoji: "9️⃣5️⃣"
      },
      {
        id: "number-96",
        french: "96 - quatre-vingt-seize\n(4 × 20 + 16)",
        english: "96 - ninety-six\n(4 × 20 + 16)",
        category: "numbers",
        emoji: "9️⃣6️⃣"
      },
      {
        id: "number-97",
        french: "97 - quatre-vingt-dix-sept\n(4 × 20 + 17)",
        english: "97 - ninety-seven\n(4 × 20 + 17)",
        category: "numbers",
        emoji: "9️⃣7️⃣"
      },
      {
        id: "number-98",
        french: "98 - quatre-vingt-dix-huit\n(4 × 20 + 18)",
        english: "98 - ninety-eight\n(4 × 20 + 18)",
        category: "numbers",
        emoji: "9️⃣8️⃣"
      },
      {
        id: "number-99",
        french: "99 - quatre-vingt-dix-neuf\n(4 × 20 + 19)",
        english: "99 - ninety-nine\n(4 × 20 + 19)",
        category: "numbers",
        emoji: "9️⃣9️⃣"
      },
      {
        id: "number-100",
        french: "100 - cent",
        english: "100 - one hundred",
        category: "numbers",
        emoji: "💯"
      },
      {
        id: "number-200",
        french: "200 - deux-cents",
        english: "200 - two hundred",
        category: "numbers",
        emoji: "2️⃣💯"
      },
      {
        id: "number-300",
        french: "300 - trois-cents",
        english: "300 - three hundred",
        category: "numbers",
        emoji: "3️⃣💯"
      },
      {
        id: "number-875",
        french: "875 - huit-cent-soixante-quinze",
        english: "875 - eight hundred seventy-five",
        category: "numbers",
        emoji: "8️⃣7️⃣5️⃣"
      },
      {
        id: "number-1000",
        french: "1000 - mille",
        english: "1000 - one thousand",
        category: "numbers",
        emoji: "🔢"
      },
      {
        id: "number-1400",
        french: "1400 - mille-quatre-cents",
        english: "1400 - one thousand four hundred",
        category: "numbers",
        emoji: "🔢"
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
        description: "Learn to ask questions with Où? Qui? Quand? Quoi? Pourquoi?",
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
          },
          {
            id: "why",
            french: "Pourquoi ?",
            english: "Why?",
            category: "questions",
            emoji: "🤔"
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
      },
      {
        id: "word-classification",
        title: "Word Classification Exercise",
        description: "Learn to classify words by question categories: Où (Where), Quand (When), Quoi (What), Qui (Who)",
        phrases: [
          {
            id: "where-morocco",
            french: "le Maroc",
            english: "Morocco (Where)",
            category: "classification-where",
            emoji: "🇲🇦"
          },
          {
            id: "where-bus-station",
            french: "une gare routière",
            english: "a bus station (Where)",
            category: "classification-where",
            emoji: "🚌"
          },
          {
            id: "where-train-station",
            french: "une gare",
            english: "a train station (Where)",
            category: "classification-where",
            emoji: "🚉"
          },
          {
            id: "where-airport",
            french: "un aéroport",
            english: "an airport (Where)",
            category: "classification-where",
            emoji: "✈️"
          },
          {
            id: "where-lyon",
            french: "Lyon",
            english: "Lyon (Where)",
            category: "classification-where",
            emoji: "🏙️"
          },
          {
            id: "when-morning",
            french: "le matin",
            english: "in the morning (When)",
            category: "classification-when",
            emoji: "🌅"
          },
          {
            id: "when-monday",
            french: "lundi",
            english: "Monday (When)",
            category: "classification-when",
            emoji: "📅"
          },
          {
            id: "when-afternoon",
            french: "l'après-midi",
            english: "in the afternoon (When)",
            category: "classification-when",
            emoji: "🌇"
          },
          {
            id: "when-noon",
            french: "à midi",
            english: "at noon (When)",
            category: "classification-when",
            emoji: "🕐"
          },
          {
            id: "when-summer",
            french: "l'été",
            english: "summer (When)",
            category: "classification-when",
            emoji: "☀️"
          },
          {
            id: "when-autumn",
            french: "l'automne",
            english: "autumn (When)",
            category: "classification-when",
            emoji: "🍂"
          },
          {
            id: "what-phone-exchange",
            french: "un échange de numéros de téléphone",
            english: "an exchange of phone numbers (What)",
            category: "classification-what",
            emoji: "📱"
          },
          {
            id: "what-meeting",
            french: "une rencontre",
            english: "a meeting/encounter (What)",
            category: "classification-what",
            emoji: "🤝"
          },
          {
            id: "what-appointment",
            french: "un rendez-vous",
            english: "an appointment (What)",
            category: "classification-what",
            emoji: "📅"
          },
          {
            id: "who-man",
            french: "un homme",
            english: "a man (Who)",
            category: "classification-who",
            emoji: "👨"
          },
          {
            id: "who-woman",
            french: "une femme",
            english: "a woman (Who)",
            category: "classification-who",
            emoji: "👩"
          },
          {
            id: "who-young-woman",
            french: "une jeune femme",
            english: "a young woman (Who)",
            category: "classification-who",
            emoji: "👩‍🦱"
          },
          {
            id: "who-gentleman",
            french: "un monsieur",
            english: "a gentleman/sir (Who)",
            category: "classification-who",
            emoji: "👔"
          },
          {
            id: "who-marius",
            french: "Marius Ndiaye",
            english: "Marius Ndiaye (Who)",
            category: "classification-who",
            emoji: "👤"
          }
        ]
      },
      {
        id: "dialogue-completion",
        title: "Dialogue Completion Exercise",
        description: "Complete dialogues using question words: qui (who), où (where), quand (when)",
        phrases: [
          {
            id: "dialogue-1-question-when",
            french: "Excusez-moi Monsieur, quand il arrive le train pour Nice ?",
            english: "Excuse me Sir, when does the train for Nice arrive?",
            category: "dialogue-completion",
            emoji: "❓🚂"
          },
          {
            id: "dialogue-1-answer-when",
            french: "Dans 15 minutes.",
            english: "In 15 minutes.",
            category: "dialogue-completion",
            emoji: "⏰"
          },
          {
            id: "dialogue-1-question-where",
            french: "Et c'est où exactement ?",
            english: "And where is it exactly?",
            category: "dialogue-completion",
            emoji: "❓📍"
          },
          {
            id: "dialogue-1-answer-where",
            french: "Quai n°3, Madame.",
            english: "Platform number 3, Madam.",
            category: "dialogue-completion",
            emoji: "🚉"
          },
          {
            id: "dialogue-2-question-who",
            french: "C'est qui sur la photo ?",
            english: "Who is that in the photo?",
            category: "dialogue-completion",
            emoji: "❓📸"
          },
          {
            id: "dialogue-2-answer-who",
            french: "C'est Laura.",
            english: "It's Laura.",
            category: "dialogue-completion",
            emoji: "👩"
          },
          {
            id: "dialogue-2-question-where-2",
            french: "Ah, et c'est où ?",
            english: "Ah, and where is this?",
            category: "dialogue-completion",
            emoji: "❓🌍"
          },
          {
            id: "dialogue-2-answer-where-2",
            french: "À Amsterdam.",
            english: "In Amsterdam.",
            category: "dialogue-completion",
            emoji: "🇳🇱"
          },
          {
            id: "dialogue-2-question-when-2",
            french: "Quand ?",
            english: "When?",
            category: "dialogue-completion",
            emoji: "❓📅"
          },
          {
            id: "dialogue-2-answer-when-2",
            french: "En automne, pendant les vacances.",
            english: "In autumn, during the holidays.",
            category: "dialogue-completion",
            emoji: "🍂🏖️"
          }
        ]
      },
      {
        id: "french-pronunciation",
        title: "French Pronunciation - Final Syllable Stress",
        description: "Learn to stress the final syllable in French words",
        phrases: [
          {
            id: "stress-gare",
            french: "Une gare → gare [gare]",
            english: "A train station → stress on 'gare'",
            category: "pronunciation-stress",
            emoji: "🚉🔊"
          },
          {
            id: "stress-train",
            french: "Un train → train [train]",
            english: "A train → stress on 'train'",
            category: "pronunciation-stress",
            emoji: "🚂🔊"
          },
          {
            id: "stress-voiture",
            french: "Une voiture → ture [voi-ture]",
            english: "A car → stress on 'ture'",
            category: "pronunciation-stress",
            emoji: "🚗🔊"
          },
          {
            id: "stress-matin",
            french: "Le matin → tin [ma-tin]",
            english: "The morning → stress on 'tin'",
            category: "pronunciation-stress",
            emoji: "🌅🔊"
          },
          {
            id: "stress-apres-midi",
            french: "L'après-midi → di [mi-di]",
            english: "The afternoon → stress on 'di'",
            category: "pronunciation-stress",
            emoji: "🌇🔊"
          },
          {
            id: "stress-tremblay",
            french: "Monsieur Tremblay → blay [Trem-blay]",
            english: "Mr. Tremblay → stress on 'blay'",
            category: "pronunciation-stress",
            emoji: "👔🔊"
          },
          {
            id: "stress-aeroport",
            french: "Un aéroport → port [aéro-port]",
            english: "An airport → stress on 'port'",
            category: "pronunciation-stress",
            emoji: "✈️🔊"
          },
          {
            id: "stress-avion",
            french: "Un billet d'avion → on [avi-on]",
            english: "A plane ticket → stress on 'on'",
            category: "pronunciation-stress",
            emoji: "🎫🔊"
          }
        ]
      },
      {
        id: "conversation-practice",
        title: "Conversation Practice",
        description: "Practice conversations about organizing activities and making plans",
        phrases: [
          {
            id: "dimitri-message",
            french: "Bonjour ! Ça va bien ? J'organise une activité touristique pour la classe. Des propositions ? Où ? Quand ? À bientôt !",
            english: "Hello! How are you? I'm organizing a tourist activity for the class. Any suggestions? Where? When? See you soon!",
            category: "conversation-practice",
            emoji: "👋🎒"
          },
          {
            id: "lea-response-greeting",
            french: "Bonjour Dimitri ! Merci pour ton message.",
            english: "Hello Dimitri! Thank you for your message.",
            category: "conversation-practice",
            emoji: "👋💌"
          },
          {
            id: "lea-response-suggestion-1",
            french: "On peut visiter le musée du Louvre à Paris.",
            english: "We can visit the Louvre museum in Paris.",
            category: "conversation-practice",
            emoji: "🏛️🗼"
          },
          {
            id: "lea-response-timing",
            french: "Ce serait bien samedi matin.",
            english: "Saturday morning would be good.",
            category: "conversation-practice",
            emoji: "📅🌅"
          },
          {
            id: "lea-response-suggestion-2",
            french: "On pourrait aussi faire un pique-nique dans un parc l'après-midi.",
            english: "We could also have a picnic in a park in the afternoon.",
            category: "conversation-practice",
            emoji: "🧺🌳"
          },
          {
            id: "lea-response-question",
            french: "Qu'en penses-tu ?",
            english: "What do you think?",
            category: "conversation-practice",
            emoji: "🤔💭"
          },
          {
            id: "lea-response-closing",
            french: "À bientôt, Léa.",
            english: "See you soon, Léa.",
            category: "conversation-practice",
            emoji: "👋💝"
          }
        ]
      },
      {
        id: "cross-cultural-greetings",
        title: "Cross-Cultural Greetings",
        description: "Compare formal greetings and politeness formulas across languages",
        phrases: [
          {
            id: "formal-greeting-french",
            french: "Bonjour Madame / Bonjour Monsieur",
            english: "Good morning Madam / Good morning Sir (French formal greeting)",
            category: "cross-cultural",
            emoji: "🇫🇷👋"
          },
          {
            id: "formal-greeting-english",
            french: "Good morning Sir / Good morning Madam",
            english: "Good morning Sir / Good morning Madam (English formal greeting)",
            category: "cross-cultural",
            emoji: "🇺🇸👋"
          },
          {
            id: "politeness-french-usage",
            french: "En français on utilise très souvent Madame et Monsieur.",
            english: "In French we use Madam and Sir very often.",
            category: "cross-cultural",
            emoji: "🇫🇷🎩"
          },
          {
            id: "politeness-english-usage",
            french: "En anglais, on utilise Sir et Madam, mais moins fréquemment.",
            english: "In English, we use Sir and Madam, but less frequently.",
            category: "cross-cultural",
            emoji: "🇺🇸🎩"
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
          },
          {
            id: "i-am-software-engineer-m",
            french: "Je suis ingénieur logiciel",
            english: "I am a software engineer (masculine)",
            category: "professions-l3",
            emoji: "👨‍💻",
            formal: {
              french: "Je suis ingénieure logiciel",
              english: "I am a software engineer (feminine)"
            }
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
            id: "camerounaise-f",
            french: "camerounaise",
            english: "Cameroonian (feminine)",
            category: "nationalities-l3",
            emoji: "🇨🇲"
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
            id: "suedoise-f",
            french: "suédoise",
            english: "Swedish (feminine)",
            category: "nationalities-l3",
            emoji: "🇸🇪"
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
            id: "anglaise-f",
            french: "anglaise",
            english: "English (feminine)",
            category: "nationalities-l3",
            emoji: "🇬🇧"
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
            id: "espagnole-f",
            french: "espagnole",
            english: "Spanish (feminine)",
            category: "nationalities-l3",
            emoji: "🇪🇸"
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
            id: "mexicaine-f",
            french: "mexicaine",
            english: "Mexican (feminine)",
            category: "nationalities-l3",
            emoji: "🇲🇽"
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
            id: "algerienne-f",
            french: "algérienne",
            english: "Algerian (feminine)",
            category: "nationalities-l3",
            emoji: "🇩🇿"
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
            id: "indienne-f",
            french: "indienne",
            english: "Indian (feminine)",
            category: "nationalities-l3",
            emoji: "🇮🇳"
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
            id: "russe-f",
            french: "russe",
            english: "Russian (feminine)",
            category: "nationalities-l3",
            emoji: "🇷🇺"
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
          },
          {
            id: "suisse-f",
            french: "suisse",
            english: "Swiss (feminine)",
            category: "nationalities-l3",
            emoji: "🇨🇭"
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
          },
          {
            id: "software-engineer-m",
            french: "ingénieur logiciel",
            english: "software engineer (masculine)",
            category: "professions-l3",
            emoji: "👨‍💻",
            formal: {
              french: "ingénieure logiciel",
              english: "software engineer (feminine)"
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
      },
      {
        id: "francophone-cultural-assessment",
        title: "Francophone Cultural Assessment",
        description: "Learn about francophone events and culture through comprehension exercises",
        phrases: [
          {
            id: "francophone-games-country",
            french: "Le pays des Jeux de la Francophonie est : la France, le Cameroun, la Côte-d'Ivoire.",
            english: "The country of the Francophone Games is: France, Cameroon, Ivory Coast.",
            category: "cultural-assessment",
            emoji: "🌍🏆"
          },
          {
            id: "francophone-games-cultural",
            french: "Les Jeux de la Francophonie sont une fête culturelle",
            english: "The Francophone Games are a cultural celebration",
            category: "cultural-assessment",
            emoji: "🎭✅"
          },
          {
            id: "francophone-games-sports",
            french: "Les Jeux de la Francophonie sont une fête sportive",
            english: "The Francophone Games are a sports celebration",
            category: "cultural-assessment",
            emoji: "🏃‍♂️✅"
          },
          {
            id: "francophone-games-not-cinema",
            french: "Les Jeux de la Francophonie ne sont pas un festival de cinéma",
            english: "The Francophone Games are not a film festival",
            category: "cultural-assessment",
            emoji: "🎬❌"
          },
          {
            id: "francophone-games-city-abidjan",
            french: "La ville des Jeux de la Francophonie est Abidjan",
            english: "The city of the Francophone Games is Abidjan",
            category: "cultural-assessment",
            emoji: "🏙️✅"
          },
          {
            id: "francophone-games-not-paris",
            french: "La ville des Jeux de la Francophonie n'est pas Paris",
            english: "The city of the Francophone Games is not Paris",
            category: "cultural-assessment",
            emoji: "🗼❌"
          },
          {
            id: "francophone-games-not-quebec",
            french: "La ville des Jeux de la Francophonie n'est pas Québec",
            english: "The city of the Francophone Games is not Quebec",
            category: "cultural-assessment",
            emoji: "🍁❌"
          },
          {
            id: "athletes-artists-francophone",
            french: "Les sportifs et les artistes sont francophones",
            english: "The athletes and artists are French-speaking",
            category: "cultural-assessment",
            emoji: "🏃‍♂️🎨✅"
          },
          {
            id: "athletes-artists-not-french",
            french: "Les sportifs et les artistes ne sont pas tous français",
            english: "The athletes and artists are not all French",
            category: "cultural-assessment",
            emoji: "🇫🇷❌"
          },
          {
            id: "continents-europe",
            french: "L'Europe est représentée",
            english: "Europe is represented",
            category: "cultural-assessment",
            emoji: "🇪🇺✅"
          },
          {
            id: "continents-africa",
            french: "L'Afrique est représentée",
            english: "Africa is represented",
            category: "cultural-assessment",
            emoji: "🌍✅"
          },
          {
            id: "continents-america",
            french: "L'Amérique est représentée",
            english: "America is represented",
            category: "cultural-assessment",
            emoji: "🌎✅"
          },
          {
            id: "continents-not-oceania",
            french: "L'Océanie n'est pas représentée",
            english: "Oceania is not represented",
            category: "cultural-assessment",
            emoji: "🌏❌"
          },
          {
            id: "continents-not-asia",
            french: "L'Asie n'est pas représentée",
            english: "Asia is not represented",
            category: "cultural-assessment",
            emoji: "🌏❌"
          },
          {
            id: "kareyce-fotso-singer",
            french: "Kareyce Fotso est une chanteuse camerounaise",
            english: "Kareyce Fotso is a Cameroonian singer (feminine)",
            category: "cultural-assessment",
            emoji: "🎤👩🇨🇲✅"
          },
          {
            id: "kareyce-fotso-not-male",
            french: "Kareyce Fotso n'est pas un chanteur camerounais",
            english: "Kareyce Fotso is not a Cameroonian singer (masculine)",
            category: "cultural-assessment",
            emoji: "🎤👨❌"
          },
          {
            id: "sofiane-milous-athlete",
            french: "Sofiane Milous est un sportif",
            english: "Sofiane Milous is an athlete",
            category: "cultural-assessment",
            emoji: "🏃‍♂️✅"
          },
          {
            id: "sofiane-milous-french",
            french: "Sofiane Milous est français",
            english: "Sofiane Milous is French",
            category: "cultural-assessment",
            emoji: "🇫🇷✅"
          },
          {
            id: "sofiane-milous-not-artist",
            french: "Sofiane Milous n'est pas un artiste",
            english: "Sofiane Milous is not an artist",
            category: "cultural-assessment",
            emoji: "🎨❌"
          },
          {
            id: "sofiane-milous-not-belgian",
            french: "Sofiane Milous n'est pas belge",
            english: "Sofiane Milous is not Belgian",
            category: "cultural-assessment",
            emoji: "🇧🇪❌"
          }
        ]
      },
      {
        id: "verb-etre-practice",
        title: "Verb ÊTRE Practice",
        description: "Practice using the verb être (to be) for giving personal information",
        phrases: [
          {
            id: "example-russian-question",
            french: "Tu es russe ?",
            english: "Are you Russian?",
            category: "verb-etre-practice",
            emoji: "❓🇷🇺"
          },
          {
            id: "example-russian-answer",
            french: "Oui, je suis russe.",
            english: "Yes, I am Russian.",
            category: "verb-etre-practice",
            emoji: "✅🇷🇺"
          },
          {
            id: "actress-question",
            french: "Elle est actrice ?",
            english: "Is she an actress?",
            category: "verb-etre-practice",
            emoji: "❓🎬"
          },
          {
            id: "actress-answer",
            french: "Oui, elle est actrice.",
            english: "Yes, she is an actress.",
            category: "verb-etre-practice",
            emoji: "✅🎬"
          },
          {
            id: "canadians-question",
            french: "Ils sont canadiens ?",
            english: "Are they Canadian?",
            category: "verb-etre-practice",
            emoji: "❓🇨🇦"
          },
          {
            id: "canadians-answer",
            french: "Oui, ils sont canadiens.",
            english: "Yes, they are Canadian.",
            category: "verb-etre-practice",
            emoji: "✅🇨🇦"
          },
          {
            id: "francophone-question",
            french: "Vous êtes francophones ?",
            english: "Are you French-speaking?",
            category: "verb-etre-practice",
            emoji: "❓🇫🇷"
          },
          {
            id: "francophone-answer",
            french: "Oui, nous sommes francophones.",
            english: "Yes, we are French-speaking.",
            category: "verb-etre-practice",
            emoji: "✅🇫🇷"
          },
          {
            id: "belgian-question",
            french: "Tu es belge ?",
            english: "Are you Belgian?",
            category: "verb-etre-practice",
            emoji: "❓🇧🇪"
          },
          {
            id: "belgian-answer",
            french: "Oui, je suis belge.",
            english: "Yes, I am Belgian.",
            category: "verb-etre-practice",
            emoji: "✅🇧🇪"
          },
          {
            id: "musicians-question",
            french: "Elles sont musiciennes ?",
            english: "Are they musicians (feminine)?",
            category: "verb-etre-practice",
            emoji: "❓🎵"
          },
          {
            id: "musicians-answer",
            french: "Oui, elles sont musiciennes.",
            english: "Yes, they are musicians (feminine).",
            category: "verb-etre-practice",
            emoji: "✅🎵"
          },
          {
            id: "director-question",
            french: "Il est réalisateur ?",
            english: "Is he a director?",
            category: "verb-etre-practice",
            emoji: "❓🎬"
          },
          {
            id: "director-answer",
            french: "Oui, il est réalisateur.",
            english: "Yes, he is a director.",
            category: "verb-etre-practice",
            emoji: "✅🎬"
          }
        ]
      },
      {
        id: "francophone-program",
        title: "Francophone Cultural Program",
        description: "Learn about francophone artists and their professions/nationalities from a cultural program",
        phrases: [
          {
            id: "slimane-ould-mohand",
            french: "Slimane Ould Mohand, peintre algérien",
            english: "Slimane Ould Mohand, Algerian painter",
            category: "francophone-program",
            emoji: "🎨🇩🇿"
          },
          {
            id: "pierre-ravach-director",
            french: "Pierre Ravach, réalisateur",
            english: "Pierre Ravach, director",
            category: "francophone-program",
            emoji: "🎬🇫🇷"
          },
          {
            id: "vietnamese-musician-film",
            french: "« Haï, parcours d'un musicien vietnamien »",
            english: "\"Haï, journey of a Vietnamese musician\"",
            category: "francophone-program",
            emoji: "🎵🇻🇳"
          },
          {
            id: "xavier-dolan-actor",
            french: "Xavier Dolan, acteur",
            english: "Xavier Dolan, actor",
            category: "francophone-program",
            emoji: "🎭🇨🇦"
          },
          {
            id: "gemma-arterton-actress",
            french: "Gemma Arterton, actrice anglaise",
            english: "Gemma Arterton, English actress",
            category: "francophone-program",
            emoji: "🎭🇬🇧"
          },
          {
            id: "saidou-abatcha-comedian",
            french: "Saidou Abatcha, humoriste",
            english: "Saidou Abatcha, comedian",
            category: "francophone-program",
            emoji: "😂🌍"
          },
          {
            id: "vietnam-orchestra",
            french: "Orchestre national symphonique du Vietnam",
            english: "Vietnam National Symphony Orchestra",
            category: "francophone-program",
            emoji: "🎼🇻🇳"
          },
          {
            id: "to-hai-tribute",
            french: "Hommage à Tô Hai",
            english: "Tribute to Tô Hai",
            category: "francophone-program",
            emoji: "🎵💐"
          },
          {
            id: "barbes-orchestra",
            french: "Orchestre national de Barbès, groupe algérien",
            english: "Barbès National Orchestra, Algerian group",
            category: "francophone-program",
            emoji: "🎶🇩🇿"
          },
          {
            id: "maurane-singer",
            french: "Maurane, chanteuse belge",
            english: "Maurane, Belgian singer",
            category: "francophone-program",
            emoji: "🎤🇧🇪"
          },
          {
            id: "thursday-exposition",
            french: "Jeudi - Exposition",
            english: "Thursday - Exhibition",
            category: "francophone-program",
            emoji: "📅🎨"
          },
          {
            id: "friday-cinema",
            french: "Vendredi - Cinéma",
            english: "Friday - Cinema",
            category: "francophone-program",
            emoji: "📅🎬"
          },
          {
            id: "saturday-comedy",
            french: "Samedi - Spectacle d'humour",
            english: "Saturday - Comedy show",
            category: "francophone-program",
            emoji: "📅😂"
          },
          {
            id: "sunday-concert",
            french: "Dimanche - Concert de musiques actuelles",
            english: "Sunday - Contemporary music concert",
            category: "francophone-program",
            emoji: "📅🎵"
          }
        ]
      },
      {
        id: "profession-sentences-etre",
        title: "Profession Sentences with ÊTRE",
        description: "Practice using professions in complete sentences with all pronouns (je, tu, il/elle, nous, vous, ils/elles)",
        phrases: [
          {
            id: "i-am-comedian",
            french: "Je suis comédien/comédienne",
            english: "I am an actor/comedian",
            category: "profession-sentences",
            emoji: "🎭",
            formal: {
              french: "Je suis comédienne",
              english: "I am an actress/comedian (feminine)"
            }
          },
          {
            id: "you-are-electrician",
            french: "Tu es électricien/électricienne",
            english: "You are an electrician",
            category: "profession-sentences",
            emoji: "⚡",
            formal: {
              french: "Vous êtes électricien/électricienne",
              english: "You are an electrician (formal)"
            }
          },
          {
            id: "he-is-actor",
            french: "Il est acteur",
            english: "He is an actor",
            category: "profession-sentences",
            emoji: "🎬"
          },
          {
            id: "she-is-actress",
            french: "Elle est actrice",
            english: "She is an actress",
            category: "profession-sentences",
            emoji: "🎬"
          },
          {
            id: "we-are-teachers",
            french: "Nous sommes instituteurs/institutrices",
            english: "We are elementary teachers",
            category: "profession-sentences",
            emoji: "👨‍🏫👩‍🏫"
          },
          {
            id: "you-plural-are-singers",
            french: "Vous êtes chanteurs/chanteuses",
            english: "You (plural) are singers",
            category: "profession-sentences",
            emoji: "🎤"
          },
          {
            id: "they-masculine-are-hairdressers",
            french: "Ils sont coiffeurs",
            english: "They (masculine) are hairdressers",
            category: "profession-sentences",
            emoji: "💇‍♂️"
          },
          {
            id: "they-feminine-are-hairdressers",
            french: "Elles sont coiffeuses",
            english: "They (feminine) are hairdressers",
            category: "profession-sentences",
            emoji: "💇‍♀️"
          },
          {
            id: "i-am-nurse",
            french: "Je suis infirmier/infirmière",
            english: "I am a nurse",
            category: "profession-sentences",
            emoji: "👨‍⚕️",
            formal: {
              french: "Je suis infirmière",
              english: "I am a nurse (feminine)"
            }
          },
          {
            id: "you-are-baker",
            french: "Tu es boulanger/boulangère",
            english: "You are a baker",
            category: "profession-sentences",
            emoji: "🥖",
            formal: {
              french: "Vous êtes boulanger/boulangère",
              english: "You are a baker (formal)"
            }
          },
          {
            id: "he-is-journalist",
            french: "Il est journaliste",
            english: "He is a journalist",
            category: "profession-sentences",
            emoji: "📰"
          },
          {
            id: "she-is-journalist",
            french: "Elle est journaliste",
            english: "She is a journalist",
            category: "profession-sentences",
            emoji: "📰"
          },
          {
            id: "we-are-veterinarians",
            french: "Nous sommes vétérinaires",
            english: "We are veterinarians",
            category: "profession-sentences",
            emoji: "👨‍⚕️🐕"
          },
          {
            id: "you-plural-are-software-engineers",
            french: "Vous êtes ingénieurs logiciel",
            english: "You (plural) are software engineers",
            category: "profession-sentences",
            emoji: "👨‍💻"
          },
          {
            id: "they-masculine-are-software-engineers",
            french: "Ils sont ingénieurs logiciel",
            english: "They (masculine) are software engineers",
            category: "profession-sentences",
            emoji: "👨‍💻"
          },
          {
            id: "they-feminine-are-software-engineers",
            french: "Elles sont ingénieures logiciel",
            english: "They (feminine) are software engineers",
            category: "profession-sentences",
            emoji: "👩‍💻"
          },
          {
            id: "i-am-not-actor",
            french: "Je ne suis pas acteur/actrice",
            english: "I am not an actor/actress",
            category: "profession-sentences",
            emoji: "🎬❌"
          },
          {
            id: "you-are-not-singer",
            french: "Tu n'es pas chanteur/chanteuse",
            english: "You are not a singer",
            category: "profession-sentences",
            emoji: "🎤❌",
            formal: {
              french: "Vous n'êtes pas chanteur/chanteuse",
              english: "You are not a singer (formal)"
            }
          },
          {
            id: "we-are-not-electricians",
            french: "Nous ne sommes pas électriciens/électriciennes",
            english: "We are not electricians",
            category: "profession-sentences",
            emoji: "⚡❌"
          },
          {
            id: "they-are-not-bakers",
            french: "Ils/Elles ne sont pas boulangers/boulangères",
            english: "They are not bakers",
            category: "profession-sentences",
            emoji: "🥖❌"
          },
          {
            id: "i-am-producer",
            french: "Je suis producteur/productrice",
            english: "I am a producer",
            category: "profession-sentences",
            emoji: "🎬📺",
            formal: {
              french: "Je suis productrice",
              english: "I am a producer (feminine)"
            }
          },
          {
            id: "you-are-producer",
            french: "Tu es producteur/productrice",
            english: "You are a producer",
            category: "profession-sentences",
            emoji: "🎬📺",
            formal: {
              french: "Vous êtes producteur/productrice",
              english: "You are a producer (formal)"
            }
          },
          {
            id: "he-is-producer",
            french: "Il est producteur",
            english: "He is a producer",
            category: "profession-sentences",
            emoji: "🎬📺"
          },
          {
            id: "she-is-producer",
            french: "Elle est productrice",
            english: "She is a producer",
            category: "profession-sentences",
            emoji: "🎬📺"
          },
          {
            id: "we-are-producers",
            french: "Nous sommes producteurs/productrices",
            english: "We are producers",
            category: "profession-sentences",
            emoji: "🎬📺"
          },
          {
            id: "they-are-producers",
            french: "Ils/Elles sont producteurs/productrices",
            english: "They are producers",
            category: "profession-sentences",
            emoji: "🎬📺"
          },
          {
            id: "i-am-comedian-sentence",
            french: "Je suis comédien/comédienne",
            english: "I am a comedian",
            category: "profession-sentences",
            emoji: "😂🎭",
            formal: {
              french: "Je suis comédienne",
              english: "I am a comedian (feminine)"
            }
          },
          {
            id: "you-are-comedian",
            french: "Tu es comédien/comédienne",
            english: "You are a comedian",
            category: "profession-sentences",
            emoji: "😂🎭",
            formal: {
              french: "Vous êtes comédien/comédienne",
              english: "You are a comedian (formal)"
            }
          },
          {
            id: "he-is-comedian",
            french: "Il est comédien",
            english: "He is a comedian",
            category: "profession-sentences",
            emoji: "😂🎭"
          },
          {
            id: "she-is-comedian",
            french: "Elle est comédienne",
            english: "She is a comedian",
            category: "profession-sentences",
            emoji: "😂🎭"
          },
          {
            id: "we-are-comedians",
            french: "Nous sommes comédiens/comédiennes",
            english: "We are comedians",
            category: "profession-sentences",
            emoji: "😂🎭"
          },
          {
            id: "they-are-comedians",
            french: "Ils/Elles sont comédiens/comédiennes",
            english: "They are comedians",
            category: "profession-sentences",
            emoji: "😂🎭"
          },
          {
            id: "i-am-server",
            french: "Je suis serveur/serveuse",
            english: "I am a server",
            category: "profession-sentences",
            emoji: "🍽️"
          },
          {
            id: "you-are-server",
            french: "Tu es serveur/serveuse",
            english: "You are a server",
            category: "profession-sentences",
            emoji: "🍽️"
          },
          {
            id: "he-is-server",
            french: "Il est serveur",
            english: "He is a server",
            category: "profession-sentences",
            emoji: "🍽️👨"
          },
          {
            id: "she-is-server",
            french: "Elle est serveuse",
            english: "She is a server",
            category: "profession-sentences",
            emoji: "🍽️👩"
          },
          {
            id: "we-are-servers",
            french: "Nous sommes serveurs/serveuses",
            english: "We are servers",
            category: "profession-sentences",
            emoji: "🍽️👥"
          },
          {
            id: "you-plural-are-servers",
            french: "Vous êtes serveurs/serveuses",
            english: "You (plural) are servers",
            category: "profession-sentences",
            emoji: "🍽️👥"
          },
          {
            id: "they-are-servers",
            french: "Ils/Elles sont serveurs/serveuses",
            english: "They are servers",
            category: "profession-sentences",
            emoji: "🍽️👥"
          },
          {
            id: "i-am-not-server",
            french: "Je ne suis pas serveur/serveuse",
            english: "I am not a server",
            category: "profession-sentences",
            emoji: "🍽️❌"
          },
          {
            id: "we-are-not-servers",
            french: "Nous ne sommes pas serveurs/serveuses",
            english: "We are not servers",
            category: "profession-sentences",
            emoji: "🍽️❌👥"
          },
          {
            id: "i-am-baker",
            french: "Je suis boulanger/boulangère",
            english: "I am a baker",
            category: "profession-sentences",
            emoji: "🥖"
          },
          {
            id: "he-is-baker",
            french: "Il est boulanger",
            english: "He is a baker",
            category: "profession-sentences",
            emoji: "🥖👨"
          },
          {
            id: "she-is-baker",
            french: "Elle est boulangère",
            english: "She is a baker",
            category: "profession-sentences",
            emoji: "🥖👩"
          },
          {
            id: "we-are-bakers",
            french: "Nous sommes boulangers/boulangères",
            english: "We are bakers",
            category: "profession-sentences",
            emoji: "🥖👥"
          },
          {
            id: "you-plural-are-bakers",
            french: "Vous êtes boulangers/boulangères",
            english: "You (plural) are bakers",
            category: "profession-sentences",
            emoji: "🥖👥"
          },
          {
            id: "they-are-bakers",
            french: "Ils/Elles sont boulangers/boulangères",
            english: "They are bakers",
            category: "profession-sentences",
            emoji: "🥖👥"
          },
          {
            id: "you-are-not-baker",
            french: "Tu n'es pas boulanger/boulangère",
            english: "You are not a baker",
            category: "profession-sentences",
            emoji: "🥖❌"
          },
          {
            id: "i-am-doctor",
            french: "Je suis docteur/docteure",
            english: "I am a doctor",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️"
          },
          {
            id: "you-are-doctor",
            french: "Tu es docteur/docteure",
            english: "You are a doctor",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️"
          },
          {
            id: "he-is-doctor",
            french: "Il est docteur",
            english: "He is a doctor",
            category: "profession-sentences",
            emoji: "👨‍⚕️"
          },
          {
            id: "she-is-doctor",
            french: "Elle est docteure",
            english: "She is a doctor",
            category: "profession-sentences",
            emoji: "👩‍⚕️"
          },
          {
            id: "we-are-doctors",
            french: "Nous sommes docteurs/docteures",
            english: "We are doctors",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️👥"
          },
          {
            id: "you-plural-are-doctors",
            french: "Vous êtes docteurs/docteures",
            english: "You (plural) are doctors",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️👥"
          },
          {
            id: "they-are-doctors",
            french: "Ils/Elles sont docteurs/docteures",
            english: "They are doctors",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️👥"
          },
          {
            id: "i-am-not-doctor",
            french: "Je ne suis pas docteur/docteure",
            english: "I am not a doctor",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️❌"
          },
          {
            id: "we-are-not-doctors",
            french: "Nous ne sommes pas docteurs/docteures",
            english: "We are not doctors",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️❌👥"
          },
          {
            id: "you-are-nurse",
            french: "Tu es infirmier/infirmière",
            english: "You are a nurse",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️"
          },
          {
            id: "he-is-nurse",
            french: "Il est infirmier",
            english: "He is a nurse",
            category: "profession-sentences",
            emoji: "👨‍⚕️"
          },
          {
            id: "she-is-nurse",
            french: "Elle est infirmière",
            english: "She is a nurse",
            category: "profession-sentences",
            emoji: "👩‍⚕️"
          },
          {
            id: "we-are-nurses",
            french: "Nous sommes infirmiers/infirmières",
            english: "We are nurses",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️👥"
          },
          {
            id: "you-plural-are-nurses",
            french: "Vous êtes infirmiers/infirmières",
            english: "You (plural) are nurses",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️👥"
          },
          {
            id: "they-are-nurses",
            french: "Ils/Elles sont infirmiers/infirmières",
            english: "They are nurses",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️👥"
          },
          {
            id: "you-are-not-nurse",
            french: "Tu n'es pas infirmier/infirmière",
            english: "You are not a nurse",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️❌"
          },
          {
            id: "they-are-not-nurses",
            french: "Ils/Elles ne sont pas infirmiers/infirmières",
            english: "They are not nurses",
            category: "profession-sentences",
            emoji: "👨‍⚕️👩‍⚕️❌👥"
          },
          {
            id: "i-am-teacher-enseignant",
            french: "Je suis enseignant/enseignante",
            english: "I am a teacher",
            category: "profession-sentences",
            emoji: "👨‍🏫👩‍🏫"
          },
          {
            id: "you-are-teacher-enseignant",
            french: "Tu es enseignant/enseignante",
            english: "You are a teacher",
            category: "profession-sentences",
            emoji: "👨‍🏫👩‍🏫"
          },
          {
            id: "he-is-teacher-enseignant",
            french: "Il est enseignant",
            english: "He is a teacher",
            category: "profession-sentences",
            emoji: "👨‍🏫"
          },
          {
            id: "she-is-teacher-enseignante",
            french: "Elle est enseignante",
            english: "She is a teacher",
            category: "profession-sentences",
            emoji: "👩‍🏫"
          },
          {
            id: "we-are-teachers-enseignants",
            french: "Nous sommes enseignants/enseignantes",
            english: "We are teachers",
            category: "profession-sentences",
            emoji: "👨‍🏫👩‍🏫👥"
          },
          {
            id: "you-plural-are-teachers-enseignants",
            french: "Vous êtes enseignants/enseignantes",
            english: "You (plural) are teachers",
            category: "profession-sentences",
            emoji: "👨‍🏫👩‍🏫👥"
          },
          {
            id: "they-are-teachers-enseignants",
            french: "Ils/Elles sont enseignants/enseignantes",
            english: "They are teachers",
            category: "profession-sentences",
            emoji: "👨‍🏫👩‍🏫👥"
          },
          {
            id: "i-am-not-teacher-enseignant",
            french: "Je ne suis pas enseignant/enseignante",
            english: "I am not a teacher",
            category: "profession-sentences",
            emoji: "👨‍🏫👩‍🏫❌"
          },
          {
            id: "we-are-not-teachers-enseignants",
            french: "Nous ne sommes pas enseignants/enseignantes",
            english: "We are not teachers",
            category: "profession-sentences",
            emoji: "👨‍🏫👩‍🏫❌👥"
          }
        ]
      },
      {
        id: "days-of-week-lesson3",
        title: "Days of the Week",
        description: "Learn the French days of the week with pronunciation and usage",
        phrases: [
          {
            id: "monday-l3",
            french: "lundi",
            english: "Monday",
            category: "days-l3",
            emoji: "📅"
          },
          {
            id: "tuesday-l3",
            french: "mardi",
            english: "Tuesday",
            category: "days-l3",
            emoji: "📅"
          },
          {
            id: "wednesday-l3",
            french: "mercredi",
            english: "Wednesday",
            category: "days-l3",
            emoji: "📅"
          },
          {
            id: "thursday-l3",
            french: "jeudi",
            english: "Thursday",
            category: "days-l3",
            emoji: "📅"
          },
          {
            id: "friday-l3",
            french: "vendredi",
            english: "Friday",
            category: "days-l3",
            emoji: "📅"
          },
          {
            id: "saturday-l3",
            french: "samedi",
            english: "Saturday",
            category: "days-l3",
            emoji: "📅"
          },
          {
            id: "sunday-l3",
            french: "dimanche",
            english: "Sunday",
            category: "days-l3",
            emoji: "📅"
          },
          {
            id: "today-is-monday",
            french: "Aujourd'hui, c'est lundi",
            english: "Today is Monday",
            category: "days-l3",
            emoji: "📅✨"
          },
          {
            id: "tomorrow-is-tuesday",
            french: "Demain, c'est mardi",
            english: "Tomorrow is Tuesday",
            category: "days-l3",
            emoji: "📅➡️"
          },
          {
            id: "on-wednesday",
            french: "Le mercredi",
            english: "On Wednesday / Wednesdays",
            category: "days-l3",
            emoji: "📅🔄"
          },
          {
            id: "this-thursday",
            french: "Ce jeudi",
            english: "This Thursday",
            category: "days-l3",
            emoji: "📅👉"
          },
          {
            id: "next-friday",
            french: "Vendredi prochain",
            english: "Next Friday",
            category: "days-l3",
            emoji: "📅⏭️"
          },
          {
            id: "last-saturday",
            french: "Samedi dernier",
            english: "Last Saturday",
            category: "days-l3",
            emoji: "📅⏮️"
          },
          {
            id: "every-sunday",
            french: "Tous les dimanches",
            english: "Every Sunday",
            category: "days-l3",
            emoji: "📅🔁"
          }
        ]
      },
      {
        id: "months-of-year-lesson3",
        title: "Months of the Year",
        description: "Learn the French months with pronunciation and seasonal context",
        phrases: [
          {
            id: "january-l3",
            french: "janvier",
            english: "January",
            category: "months-l3",
            emoji: "❄️"
          },
          {
            id: "february-l3",
            french: "février",
            english: "February",
            category: "months-l3",
            emoji: "💝"
          },
          {
            id: "march-l3",
            french: "mars",
            english: "March",
            category: "months-l3",
            emoji: "🌸"
          },
          {
            id: "april-l3",
            french: "avril",
            english: "April",
            category: "months-l3",
            emoji: "🌷"
          },
          {
            id: "may-l3",
            french: "mai",
            english: "May",
            category: "months-l3",
            emoji: "🌺"
          },
          {
            id: "june-l3",
            french: "juin",
            english: "June",
            category: "months-l3",
            emoji: "☀️"
          },
          {
            id: "july-l3",
            french: "juillet",
            english: "July",
            category: "months-l3",
            emoji: "🏖️"
          },
          {
            id: "august-l3",
            french: "août",
            english: "August",
            category: "months-l3",
            emoji: "🌞"
          },
          {
            id: "september-l3",
            french: "septembre",
            english: "September",
            category: "months-l3",
            emoji: "🍂"
          },
          {
            id: "october-l3",
            french: "octobre",
            english: "October",
            category: "months-l3",
            emoji: "🎃"
          },
          {
            id: "november-l3",
            french: "novembre",
            english: "November",
            category: "months-l3",
            emoji: "🍁"
          },
          {
            id: "december-l3",
            french: "décembre",
            english: "December",
            category: "months-l3",
            emoji: "🎄"
          },
          {
            id: "in-january",
            french: "En janvier",
            english: "In January",
            category: "months-l3",
            emoji: "❄️📅"
          },
          {
            id: "this-february",
            french: "Ce février",
            english: "This February",
            category: "months-l3",
            emoji: "💝📅"
          },
          {
            id: "next-march",
            french: "Mars prochain",
            english: "Next March",
            category: "months-l3",
            emoji: "🌸📅"
          },
          {
            id: "last-april",
            french: "Avril dernier",
            english: "Last April",
            category: "months-l3",
            emoji: "🌷📅"
          },
          {
            id: "during-summer",
            french: "Pendant l'été (juin, juillet, août)",
            english: "During summer (June, July, August)",
            category: "months-l3",
            emoji: "☀️🏖️"
          },
          {
            id: "during-winter",
            french: "Pendant l'hiver (décembre, janvier, février)",
            english: "During winter (December, January, February)",
            category: "months-l3",
            emoji: "❄️🌨️"
          }
        ]
      },
      {
        id: "personal-conversation-lesson3",
        title: "Personal Conversation Practice",
        description: "Practice personal conversations with real-life phrases and responses",
        phrases: [
          {
            id: "my-name-is-molly",
            french: "Je m'appelle Molly",
            english: "My name is Molly",
            category: "personal-conversation-l3",
            emoji: "👋"
          },
          {
            id: "how-are-you-conversation",
            french: "Comment allez-vous ?",
            english: "How are you?",
            category: "personal-conversation-l3",
            emoji: "😊",
            formal: {
              french: "Comment tu vas ?",
              english: "How are you? (informal)"
            }
          },
          {
            id: "how-was-your-week",
            french: "Comment s'est passée votre semaine ?",
            english: "How was your week?",
            category: "personal-conversation-l3",
            emoji: "📅",
            formal: {
              french: "Comment s'est passée ta semaine ?",
              english: "How was your week? (informal)"
            }
          },
          {
            id: "my-week-was-good",
            french: "Ma semaine s'est bien passée",
            english: "My week was good",
            category: "personal-conversation-l3",
            emoji: "✅"
          },
          {
            id: "learning-french-saturdays",
            french: "J'apprends le français pour ne pas travailler le samedi",
            english: "I'm learning French to get out of work on Saturdays",
            category: "personal-conversation-l3",
            emoji: "📚🏖️"
          },
          {
            id: "i-like-to-run",
            french: "J'aime courir",
            english: "I like to run",
            category: "personal-conversation-l3",
            emoji: "🏃‍♀️"
          },
          {
            id: "i-am-software-engineer",
            french: "Je suis ingénieure logiciel",
            english: "I am a software engineer",
            category: "personal-conversation-l3",
            emoji: "👩‍💻"
          },
          {
            id: "was-in-france-hackathon",
            french: "J'étais en France pour un hackathon en juillet",
            english: "I was in France for a hackathon in July",
            category: "personal-conversation-l3",
            emoji: "🇫🇷💻"
          },
          {
            id: "i-am-american",
            french: "Je suis américain/américaine",
            english: "I am American",
            category: "personal-conversation-l3",
            emoji: "🇺🇸"
          },
          {
            id: "my-last-name-is-beach",
            french: "Mon nom de famille est Beach",
            english: "My last name is Beach",
            category: "personal-conversation-l3",
            emoji: "🏖️"
          },
          {
            id: "my-first-name-is-molly",
            french: "Mon prénom est Molly",
            english: "My first name is Molly",
            category: "personal-conversation-l3",
            emoji: "👋"
          },
          {
            id: "i-am-american-software-engineer",
            french: "Je suis américaine et ingénieure logiciel",
            english: "I am American and a software engineer",
            category: "personal-conversation-l3",
            emoji: "🇺🇸👩‍💻"
          }
        ]
      },
      {
        id: "nationality-sentences-etre",
        title: "Nationality Sentences with ÊTRE",
        description: "Practice nationalities in complete sentences with all pronouns using the verb être",
        phrases: [
          {
            id: "je-suis-francais-m",
            french: "Je suis français",
            english: "I am French (masculine)",
            category: "nationality-sentences",
            emoji: "🇫🇷👨"
          },
          {
            id: "je-suis-francaise-f",
            french: "Je suis française",
            english: "I am French (feminine)",
            category: "nationality-sentences",
            emoji: "🇫🇷👩"
          },
          {
            id: "tu-es-anglais-m",
            french: "Tu es anglais",
            english: "You are English (masculine, informal)",
            category: "nationality-sentences",
            emoji: "🇬🇧👨"
          },
          {
            id: "tu-es-anglaise-f",
            french: "Tu es anglaise",
            english: "You are English (feminine, informal)",
            category: "nationality-sentences",
            emoji: "🇬🇧👩"
          },
          {
            id: "vous-etes-espagnol-m",
            french: "Vous êtes espagnol",
            english: "You are Spanish (masculine, formal)",
            category: "nationality-sentences",
            emoji: "🇪🇸👨"
          },
          {
            id: "vous-etes-espagnole-f",
            french: "Vous êtes espagnole",
            english: "You are Spanish (feminine, formal)",
            category: "nationality-sentences",
            emoji: "🇪🇸👩"
          },
          {
            id: "il-est-mexicain",
            french: "Il est mexicain",
            english: "He is Mexican",
            category: "nationality-sentences",
            emoji: "🇲🇽👨"
          },
          {
            id: "elle-est-mexicaine",
            french: "Elle est mexicaine",
            english: "She is Mexican",
            category: "nationality-sentences",
            emoji: "🇲🇽👩"
          },
          {
            id: "nous-sommes-canadiens",
            french: "Nous sommes canadiens",
            english: "We are Canadian (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇨🇦👥"
          },
          {
            id: "nous-sommes-canadiennes",
            french: "Nous sommes canadiennes",
            english: "We are Canadian (all feminine)",
            category: "nationality-sentences",
            emoji: "🇨🇦👩‍👩‍👧‍👧"
          },
          {
            id: "vous-etes-italiens",
            french: "Vous êtes italiens",
            english: "You all are Italian (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇮🇹👥"
          },
          {
            id: "vous-etes-italiennes",
            french: "Vous êtes italiennes",
            english: "You all are Italian (all feminine)",
            category: "nationality-sentences",
            emoji: "🇮🇹👩‍👩‍👧‍👧"
          },
          {
            id: "ils-sont-allemands",
            french: "Ils sont allemands",
            english: "They are German (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇩🇪👨‍👨‍👦‍👦"
          },
          {
            id: "elles-sont-allemandes",
            french: "Elles sont allemandes",
            english: "They are German (all feminine)",
            category: "nationality-sentences",
            emoji: "🇩🇪👩‍👩‍👧‍👧"
          },
          {
            id: "je-ne-suis-pas-americain",
            french: "Je ne suis pas américain",
            english: "I am not American (masculine)",
            category: "nationality-sentences",
            emoji: "🇺🇸❌👨"
          },
          {
            id: "je-ne-suis-pas-americaine",
            french: "Je ne suis pas américaine",
            english: "I am not American (feminine)",
            category: "nationality-sentences",
            emoji: "🇺🇸❌👩"
          },
          {
            id: "tu-n-es-pas-chinois",
            french: "Tu n'es pas chinois",
            english: "You are not Chinese (masculine, informal)",
            category: "nationality-sentences",
            emoji: "🇨🇳❌👨"
          },
          {
            id: "tu-n-es-pas-chinoise",
            french: "Tu n'es pas chinoise",
            english: "You are not Chinese (feminine, informal)",
            category: "nationality-sentences",
            emoji: "🇨🇳❌👩"
          },
          {
            id: "il-n-est-pas-japonais",
            french: "Il n'est pas japonais",
            english: "He is not Japanese",
            category: "nationality-sentences",
            emoji: "🇯🇵❌👨"
          },
          {
            id: "elle-n-est-pas-japonaise",
            french: "Elle n'est pas japonaise",
            english: "She is not Japanese",
            category: "nationality-sentences",
            emoji: "🇯🇵❌👩"
          },
          {
            id: "nous-ne-sommes-pas-bresiliens",
            french: "Nous ne sommes pas brésiliens",
            english: "We are not Brazilian (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇧🇷❌👥"
          },
          {
            id: "nous-ne-sommes-pas-bresiliennes",
            french: "Nous ne sommes pas brésiliennes",
            english: "We are not Brazilian (all feminine)",
            category: "nationality-sentences",
            emoji: "🇧🇷❌👩‍👩‍👧‍👧"
          },
          {
            id: "ils-ne-sont-pas-russes",
            french: "Ils ne sont pas russes",
            english: "They are not Russian (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇷🇺❌👨‍👨‍👦‍👦"
          },
          {
            id: "elles-ne-sont-pas-russes",
            french: "Elles ne sont pas russes",
            english: "They are not Russian (all feminine)",
            category: "nationality-sentences",
            emoji: "🇷🇺❌👩‍👩‍👧‍👧"
          },
          {
            id: "je-suis-camerounais",
            french: "Je suis camerounais",
            english: "I am Cameroonian (masculine)",
            category: "nationality-sentences",
            emoji: "🇨🇲👨"
          },
          {
            id: "je-suis-camerounaise",
            french: "Je suis camerounaise",
            english: "I am Cameroonian (feminine)",
            category: "nationality-sentences",
            emoji: "🇨🇲👩"
          },
          {
            id: "tu-es-suedois",
            french: "Tu es suédois",
            english: "You are Swedish (masculine, informal)",
            category: "nationality-sentences",
            emoji: "🇸🇪👨"
          },
          {
            id: "tu-es-suedoise",
            french: "Tu es suédoise",
            english: "You are Swedish (feminine, informal)",
            category: "nationality-sentences",
            emoji: "🇸🇪👩"
          },
          {
            id: "il-est-algerien",
            french: "Il est algérien",
            english: "He is Algerian",
            category: "nationality-sentences",
            emoji: "🇩🇿👨"
          },
          {
            id: "elle-est-algerienne",
            french: "Elle est algérienne",
            english: "She is Algerian",
            category: "nationality-sentences",
            emoji: "🇩🇿👩"
          },
          {
            id: "nous-sommes-indiens",
            french: "Nous sommes indiens",
            english: "We are Indian (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇮🇳👥"
          },
          {
            id: "nous-sommes-indiennes",
            french: "Nous sommes indiennes",
            english: "We are Indian (all feminine)",
            category: "nationality-sentences",
            emoji: "🇮🇳👩‍👩‍👧‍👧"
          },
          {
            id: "vous-etes-suisses-m",
            french: "Vous êtes suisses",
            english: "You all are Swiss (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇨🇭👥"
          },
          {
            id: "vous-etes-suisses-f",
            french: "Vous êtes suisses",
            english: "You all are Swiss (all feminine)",
            category: "nationality-sentences",
            emoji: "🇨🇭👩‍👩‍👧‍👧"
          },
          {
            id: "ils-sont-camerounais",
            french: "Ils sont camerounais",
            english: "They are Cameroonian (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇨🇲👨‍👨‍👦‍👦"
          },
          {
            id: "elles-sont-camerounaises",
            french: "Elles sont camerounaises",
            english: "They are Cameroonian (all feminine)",
            category: "nationality-sentences",
            emoji: "🇨🇲👩‍👩‍👧‍👧"
          },
          {
            id: "je-ne-suis-pas-suedois",
            french: "Je ne suis pas suédois",
            english: "I am not Swedish (masculine)",
            category: "nationality-sentences",
            emoji: "🇸🇪❌👨"
          },
          {
            id: "je-ne-suis-pas-suedoise",
            french: "Je ne suis pas suédoise",
            english: "I am not Swedish (feminine)",
            category: "nationality-sentences",
            emoji: "🇸🇪❌👩"
          },
          {
            id: "tu-n-es-pas-algerien",
            french: "Tu n'es pas algérien",
            english: "You are not Algerian (masculine, informal)",
            category: "nationality-sentences",
            emoji: "🇩🇿❌👨"
          },
          {
            id: "tu-n-es-pas-algerienne",
            french: "Tu n'es pas algérienne",
            english: "You are not Algerian (feminine, informal)",
            category: "nationality-sentences",
            emoji: "🇩🇿❌👩"
          },
          {
            id: "il-n-est-pas-indien",
            french: "Il n'est pas indien",
            english: "He is not Indian",
            category: "nationality-sentences",
            emoji: "🇮🇳❌👨"
          },
          {
            id: "elle-n-est-pas-indienne",
            french: "Elle n'est pas indienne",
            english: "She is not Indian",
            category: "nationality-sentences",
            emoji: "🇮🇳❌👩"
          },
          {
            id: "nous-ne-sommes-pas-suisses-m",
            french: "Nous ne sommes pas suisses",
            english: "We are not Swiss (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇨🇭❌👥"
          },
          {
            id: "nous-ne-sommes-pas-suisses-f",
            french: "Nous ne sommes pas suisses",
            english: "We are not Swiss (all feminine)",
            category: "nationality-sentences",
            emoji: "🇨🇭❌👩‍👩‍👧‍👧"
          },
          {
            id: "vous-n-etes-pas-camerounais",
            french: "Vous n'êtes pas camerounais",
            english: "You all are not Cameroonian (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇨🇲❌👥"
          },
          {
            id: "vous-n-etes-pas-camerounaises",
            french: "Vous n'êtes pas camerounaises",
            english: "You all are not Cameroonian (all feminine)",
            category: "nationality-sentences",
            emoji: "🇨🇲❌👩‍👩‍👧‍👧"
          },
          {
            id: "ils-ne-sont-pas-suedois",
            french: "Ils ne sont pas suédois",
            english: "They are not Swedish (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇸🇪❌👨‍👨‍👦‍👦"
          },
          {
            id: "elles-ne-sont-pas-suedoises",
            french: "Elles ne sont pas suédoises",
            english: "They are not Swedish (all feminine)",
            category: "nationality-sentences",
            emoji: "🇸🇪❌👩‍👩‍👧‍👧"
          },
          {
            id: "ils-ne-sont-pas-algeriens",
            french: "Ils ne sont pas algériens",
            english: "They are not Algerian (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇩🇿❌👨‍👨‍👦‍👦"
          },
          {
            id: "elles-ne-sont-pas-algeriennes",
            french: "Elles ne sont pas algériennes",
            english: "They are not Algerian (all feminine)",
            category: "nationality-sentences",
            emoji: "🇩🇿❌👩‍👩‍👧‍👧"
          },
          {
            id: "ils-ne-sont-pas-indiens",
            french: "Ils ne sont pas indiens",
            english: "They are not Indian (masculine/mixed)",
            category: "nationality-sentences",
            emoji: "🇮🇳❌👨‍👨‍👦‍👦"
          },
          {
            id: "elles-ne-sont-pas-indiennes",
            french: "Elles ne sont pas indiennes",
            english: "They are not Indian (all feminine)",
            category: "nationality-sentences",
            emoji: "🇮🇳❌👩‍👩‍👧‍👧"
          },
          {
            id: "my-friend-is-mexican-m",
            french: "Mon ami est mexicain",
            english: "My friend is Mexican (masculine)",
            category: "nationality-sentences",
            emoji: "🇲🇽👨‍🤝‍👨"
          },
          {
            id: "my-friend-is-mexican-f",
            french: "Mon amie est mexicaine",
            english: "My friend is Mexican (feminine)",
            category: "nationality-sentences",
            emoji: "🇲🇽👩‍🤝‍👩"
          },
          {
            id: "i-am-english-baker-m",
            french: "Je suis un boulanger anglais",
            english: "I am an English baker (masculine)",
            category: "nationality-sentences",
            emoji: "🇬🇧🥖👨"
          },
          {
            id: "i-am-english-baker-f",
            french: "Je suis une boulangère anglaise",
            english: "I am an English baker (feminine)",
            category: "nationality-sentences",
            emoji: "🇬🇧🥖👩"
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
