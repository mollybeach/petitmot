export interface FrenchPhrase {
  id: string;
  french: string;
  english: string;
  category: string;
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

export const lessons: Lesson[] = [
  {
    id: "transportation",
    title: "Transportation",
    description: "Learn transportation vocabulary and travel phrases",
    phrases: [
      {
        id: "airport",
        french: "un aéroport",
        english: "an airport",
        category: "transportation"
      },
      {
        id: "bus-stop",
        french: "un arrêt de bus",
        english: "a bus stop",
        category: "transportation"
      },
      {
        id: "bus-station",
        french: "une gare routière",
        english: "a bus station",
        category: "transportation"
      },
      {
        id: "train-station",
        french: "une gare",
        english: "a train station",
        category: "transportation"
      },
      {
        id: "ticket",
        french: "un billet",
        english: "a ticket",
        category: "transportation"
      },
      {
        id: "plane",
        french: "un avion",
        english: "a plane",
        category: "transportation"
      },
      {
        id: "car",
        french: "une voiture",
        english: "a car",
        category: "transportation"
      },
      {
        id: "bus",
        french: "un bus",
        english: "a bus",
        category: "transportation"
      },
      {
        id: "subway",
        french: "un métro",
        english: "a subway",
        category: "transportation"
      },
      {
        id: "train",
        french: "un train",
        english: "a train",
        category: "transportation"
      },
      {
        id: "tramway",
        french: "un tramway",
        english: "a tramway",
        category: "transportation"
      },
      {
        id: "i-want-to-take-bus",
        french: "Je veux prendre un bus",
        english: "I want to take a bus",
        category: "transportation"
      },
      {
        id: "i-want-to-go-paris",
        french: "Je veux aller à Paris",
        english: "I want to go to Paris",
        category: "transportation"
      },
      {
        id: "i-am-looking-for-route",
        french: "Je cherche ma route",
        english: "I am looking for my route",
        category: "transportation"
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
        category: "days"
      },
      {
        id: "tuesday",
        french: "mardi",
        english: "Tuesday",
        category: "days"
      },
      {
        id: "wednesday",
        french: "mercredi",
        english: "Wednesday",
        category: "days"
      },
      {
        id: "thursday",
        french: "jeudi",
        english: "Thursday",
        category: "days"
      },
      {
        id: "friday",
        french: "vendredi",
        english: "Friday",
        category: "days"
      },
      {
        id: "saturday",
        french: "samedi",
        english: "Saturday",
        category: "days"
      },
      {
        id: "sunday",
        french: "dimanche",
        english: "Sunday",
        category: "days"
      },
      {
        id: "january",
        french: "janvier",
        english: "January",
        category: "months"
      },
      {
        id: "february",
        french: "février",
        english: "February",
        category: "months"
      },
      {
        id: "march",
        french: "mars",
        english: "March",
        category: "months"
      },
      {
        id: "april",
        french: "avril",
        english: "April",
        category: "months"
      },
      {
        id: "may",
        french: "mai",
        english: "May",
        category: "months"
      },
      {
        id: "june",
        french: "juin",
        english: "June",
        category: "months"
      },
      {
        id: "july",
        french: "juillet",
        english: "July",
        category: "months"
      },
      {
        id: "august",
        french: "août",
        english: "August",
        category: "months"
      },
      {
        id: "september",
        french: "septembre",
        english: "September",
        category: "months"
      },
      {
        id: "october",
        french: "octobre",
        english: "October",
        category: "months"
      },
      {
        id: "november",
        french: "novembre",
        english: "November",
        category: "months"
      },
      {
        id: "december",
        french: "décembre",
        english: "December",
        category: "months"
      },
      {
        id: "morning",
        french: "le matin",
        english: "the morning",
        category: "time"
      },
      {
        id: "noon",
        french: "le midi",
        english: "at noon",
        category: "time"
      },
      {
        id: "afternoon",
        french: "l'après-midi",
        english: "the afternoon",
        category: "time"
      },
      {
        id: "evening",
        french: "le soir",
        english: "the evening",
        category: "time"
      },
      {
        id: "night",
        french: "la nuit",
        english: "at night",
        category: "time"
      },
      {
        id: "day",
        french: "le jour",
        english: "the day",
        category: "time"
      },
      {
        id: "week",
        french: "la semaine",
        english: "the week",
        category: "time"
      },
      {
        id: "month",
        french: "le mois",
        english: "the month",
        category: "time"
      },
      {
        id: "year",
        french: "l'année",
        english: "the year",
        category: "time"
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
        category: "places"
      },
      {
        id: "house",
        french: "une maison",
        english: "a house",
        category: "places"
      },
      {
        id: "bedroom",
        french: "une chambre",
        english: "a bedroom",
        category: "places"
      },
      {
        id: "hotel",
        french: "un hôtel",
        english: "a hotel",
        category: "places"
      },
      {
        id: "apartment",
        french: "un appartement",
        english: "a flat",
        category: "places"
      },
      {
        id: "castle",
        french: "un château",
        english: "a castle",
        category: "places"
      },
      {
        id: "cafe",
        french: "un café",
        english: "a café",
        category: "places"
      },
      {
        id: "bar",
        french: "un bar",
        english: "a pub",
        category: "places"
      },
      {
        id: "restaurant",
        french: "un restaurant",
        english: "a restaurant",
        category: "places"
      },
      {
        id: "shop",
        french: "un magasin",
        english: "a shop",
        category: "places"
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
        category: "countries"
      },
      {
        id: "peru",
        french: "le Pérou",
        english: "Peru (masculine)",
        category: "countries"
      },
      {
        id: "brazil",
        french: "le Brésil",
        english: "Brazil (masculine)",
        category: "countries"
      },
      {
        id: "texas",
        french: "le Texas",
        english: "Texas (masculine)",
        category: "countries"
      },
      {
        id: "mexico",
        french: "le Mexique",
        english: "Mexico (masculine)",
        category: "countries"
      },
      {
        id: "japan",
        french: "le Japon",
        english: "Japan (masculine)",
        category: "countries"
      },
      {
        id: "vietnam",
        french: "le Vietnam",
        english: "Vietnam (masculine)",
        category: "countries"
      },
      {
        id: "france",
        french: "la France",
        english: "France (feminine)",
        category: "countries"
      },
      {
        id: "belgium",
        french: "la Belgique",
        english: "Belgium (feminine)",
        category: "countries"
      },
      {
        id: "california",
        french: "la Californie",
        english: "California (feminine)",
        category: "countries"
      },
      {
        id: "florida",
        french: "la Floride",
        english: "Florida (feminine)",
        category: "countries"
      },
      {
        id: "russia",
        french: "la Russie",
        english: "Russia (feminine)",
        category: "countries"
      },
      {
        id: "china",
        french: "la Chine",
        english: "China (feminine)",
        category: "countries"
      },
      {
        id: "louisiana",
        french: "la Louisiane",
        english: "Louisiana (feminine)",
        category: "countries"
      },
      {
        id: "thailand",
        french: "la Thaïlande",
        english: "Thailand (feminine)",
        category: "countries"
      },
      {
        id: "switzerland",
        french: "la Suisse",
        english: "Switzerland (feminine)",
        category: "countries"
      },
      {
        id: "england",
        french: "l'Angleterre",
        english: "England (starts with vowel)",
        category: "countries"
      },
      {
        id: "italy",
        french: "l'Italie",
        english: "Italy (starts with vowel)",
        category: "countries"
      },
      {
        id: "spain",
        french: "l'Espagne",
        english: "Spain (starts with vowel)",
        category: "countries"
      },
      {
        id: "australia",
        french: "l'Australie",
        english: "Australia (starts with vowel)",
        category: "countries"
      },
      {
        id: "germany",
        french: "l'Allemagne",
        english: "Germany (starts with vowel)",
        category: "countries"
      },
      {
        id: "alaska",
        french: "l'Alaska",
        english: "Alaska (starts with vowel)",
        category: "countries"
      },
      {
        id: "india",
        french: "l'Inde",
        english: "India (starts with vowel)",
        category: "countries"
      },
      {
        id: "utah",
        french: "l'Utah",
        english: "Utah (starts with vowel)",
        category: "countries"
      },
      {
        id: "arizona",
        french: "l'Arizona",
        english: "Arizona (starts with vowel)",
        category: "countries"
      },
      {
        id: "united-states",
        french: "les États-Unis",
        english: "United States (plural)",
        category: "countries"
      },
      {
        id: "netherlands",
        french: "les Pays-Bas",
        english: "Netherlands (plural)",
        category: "countries"
      },
      {
        id: "uae",
        french: "les Émirats Arabes Unis",
        english: "United Arab Emirates (plural)",
        category: "countries"
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
        category: "articles"
      },
      {
        id: "article-une",
        french: "une",
        english: "a/an (feminine singular)",
        category: "articles"
      },
      {
        id: "article-des",
        french: "des",
        english: "some (plural)",
        category: "articles"
      },
      {
        id: "un-chien",
        french: "un chien",
        english: "a dog",
        category: "articles"
      },
      {
        id: "une-maison",
        french: "une maison",
        english: "a house",
        category: "articles"
      },
      {
        id: "des-enfants",
        french: "des enfants",
        english: "some children",
        category: "articles"
      },
      {
        id: "un-nom",
        french: "un nom",
        english: "a name",
        category: "articles"
      },
      {
        id: "un-prenom",
        french: "un prénom",
        english: "a first name",
        category: "articles"
      },
      {
        id: "un-cocktail",
        french: "un cocktail",
        english: "a cocktail",
        category: "articles"
      },
      {
        id: "une-nationalite",
        french: "une nationalité",
        english: "a nationality",
        category: "articles"
      },
      {
        id: "une-invitation",
        french: "une invitation",
        english: "an invitation",
        category: "articles"
      },
      {
        id: "une-identite",
        french: "une identité",
        english: "an identity",
        category: "articles"
      },
      {
        id: "des-droits",
        french: "des droits",
        english: "some rights",
        category: "articles"
      },
      {
        id: "des-professionnels",
        french: "des professionnels",
        english: "some professionals",
        category: "articles"
      },
      {
        id: "des-personnes",
        french: "des personnes",
        english: "some people",
        category: "articles"
      },
      {
        id: "des-rencontres",
        french: "des rencontres",
        english: "some meetings",
        category: "articles"
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
        category: "sounds"
      },
      {
        id: "sound-y-tu",
        french: "Tu",
        english: "You (sound: [y])",
        category: "sounds"
      },
      {
        id: "sound-y-plus",
        french: "À plus tard",
        english: "See you later (sound: [y])",
        category: "sounds"
      },
      {
        id: "sound-y-bienvenue",
        french: "Bienvenue",
        english: "Welcome (sound: [y])",
        category: "sounds"
      },
      {
        id: "sound-y-etudiant",
        french: "Étudiant",
        english: "Student (sound: [y])",
        category: "sounds"
      },
      {
        id: "sound-y-universite",
        french: "Université",
        english: "University (sound: [y])",
        category: "sounds"
      },
      {
        id: "sound-y-russe",
        french: "Russe",
        english: "Russian (sound: [y])",
        category: "sounds"
      },
      {
        id: "sound-y-litterature",
        french: "Littérature",
        english: "Literature (sound: [y])",
        category: "sounds"
      },
      {
        id: "sound-y-culture",
        french: "Culture",
        english: "Culture (sound: [y])",
        category: "sounds"
      },
      {
        id: "sound-u-bonjour",
        french: "Bonjour",
        english: "Hello (sound: [u])",
        category: "sounds"
      },
      {
        id: "sound-u-vous",
        french: "Vous",
        english: "You (formal) (sound: [u])",
        category: "sounds"
      },
      {
        id: "sound-u-beaucoup",
        french: "Beaucoup",
        english: "A lot (sound: [u])",
        category: "sounds"
      },
      {
        id: "sound-u-cours",
        french: "Cours",
        english: "Course (sound: [u])",
        category: "sounds"
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
        category: "numbers"
      },
      {
        id: "number-1",
        french: "un",
        english: "one",
        category: "numbers"
      },
      {
        id: "number-2",
        french: "deux",
        english: "two",
        category: "numbers"
      },
      {
        id: "number-3",
        french: "trois",
        english: "three",
        category: "numbers"
      },
      {
        id: "number-4",
        french: "quatre",
        english: "four",
        category: "numbers"
      },
      {
        id: "number-5",
        french: "cinq",
        english: "five",
        category: "numbers"
      },
      {
        id: "number-6",
        french: "six",
        english: "six",
        category: "numbers"
      },
      {
        id: "number-7",
        french: "sept",
        english: "seven",
        category: "numbers"
      },
      {
        id: "number-8",
        french: "huit",
        english: "eight",
        category: "numbers"
      },
      {
        id: "number-9",
        french: "neuf",
        english: "nine",
        category: "numbers"
      },
      {
        id: "number-10",
        french: "dix",
        english: "ten",
        category: "numbers"
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
];

export const getAllPhrases = (): FrenchPhrase[] => {
  return lessons.flatMap(lesson => lesson.phrases);
};

export const getPhrasesByCategory = (category: string): FrenchPhrase[] => {
  return getAllPhrases().filter(phrase => phrase.category === category);
};

export const getLessonById = (id: string): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
};
