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
