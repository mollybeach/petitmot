export interface FrenchPhrase {
  id: string;
  french: string;
  english: string;
  category: string;
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
        id: "do-you-have-children",
        french: "Tu as des enfants ?",
        english: "Do you have children?",
        category: "family"
      },
      {
        id: "i-have-children",
        french: "J'ai ... enfants",
        english: "I have ... children",
        category: "family"
      },
      {
        id: "i-have-no-children",
        french: "Je n'ai pas d'enfant",
        english: "I don't have any children",
        category: "family"
      }
    ]
  },
  {
    id: "personal-info",
    title: "Personal Information",
    description: "Learn to introduce yourself and share personal details",
    phrases: [
      {
        id: "i-am",
        french: "Je suis",
        english: "I am",
        category: "personal"
      },
      {
        id: "what-do-you-like",
        french: "Qu'est-ce que tu aimes ?",
        english: "What do you like?",
        category: "personal"
      },
      {
        id: "i-like",
        french: "J'aime .............",
        english: "I like .............",
        category: "personal"
      },
      {
        id: "i-dont-like",
        french: "Je n'aime pas .......",
        english: "I don't like .......",
        category: "personal"
      },
      {
        id: "what-is-your-name",
        french: "Comment tu t'appelles ?",
        english: "What is your name?",
        category: "personal"
      },
      {
        id: "my-name-is",
        french: "Je m'appelle .......",
        english: "My name is .......",
        category: "personal"
      },
      {
        id: "first-name",
        french: "prénom",
        english: "first name",
        category: "personal"
      },
      {
        id: "last-name",
        french: "nom (de famille)",
        english: "last name",
        category: "personal"
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
        category: "marital"
      },
      {
        id: "i-am-married",
        french: "Je suis marié(e)",
        english: "I am married",
        category: "marital"
      },
      {
        id: "i-am-not-married",
        french: "Je ne suis pas marié(e)",
        english: "I am not married",
        category: "marital"
      },
      {
        id: "i-am-single",
        french: "Je suis célibataire",
        english: "I am single",
        category: "marital"
      },
      {
        id: "i-am-widowed",
        french: "Je suis veuf / veuve",
        english: "I am widowed",
        category: "marital"
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
        category: "languages"
      },
      {
        id: "i-speak",
        french: "Je parle .............",
        english: "I speak .............",
        category: "languages"
      },
      {
        id: "i-dont-speak",
        french: "Je ne parle pas ......",
        english: "I don't speak ......",
        category: "languages"
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
