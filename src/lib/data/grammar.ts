// Grammar data for the modal

export const verbConjugations = {
  avoir: {
    infinitive: 'avoir',
    translations: {
      en: 'to have',
      es: 'tener',
      de: 'haben'
    },
    conjugations: {
      'je': 'j\'ai',
      'tu': 'tu as',
      'il/elle/on': 'il/elle/on a',
      'nous': 'nous avons',
      'vous': 'vous avez',
      'ils/elles': 'ils/elles ont'
    }
  },
  être: {
    infinitive: 'être',
    translations: {
      en: 'to be',
      es: 'ser/estar',
      de: 'sein'
    },
    conjugations: {
      'je': 'je suis',
      'tu': 'tu es',
      'il/elle/on': 'il/elle/on est',
      'nous': 'nous sommes',
      'vous': 'vous êtes',
      'ils/elles': 'ils/elles sont'
    }
  },
  aller: {
    infinitive: 'aller',
    translations: {
      en: 'to go',
      es: 'ir',
      de: 'gehen'
    },
    conjugations: {
      'je': 'je vais',
      'tu': 'tu vas',
      'il/elle/on': 'il/elle/on va',
      'nous': 'nous allons',
      'vous': 'vous allez',
      'ils/elles': 'ils/elles vont'
    }
  },
  venir: {
    infinitive: 'venir',
    translations: {
      en: 'to come',
      es: 'venir',
      de: 'kommen'
    },
    conjugations: {
      'je': 'je viens',
      'tu': 'tu viens',
      'il/elle/on': 'il/elle/on vient',
      'nous': 'nous venons',
      'vous': 'vous venez',
      'ils/elles': 'ils/elles viennent'
    }
  },
  vouloir: {
    infinitive: 'vouloir',
    translations: {
      en: 'to want',
      es: 'querer',
      de: 'wollen'
    },
    conjugations: {
      'je': 'je veux',
      'tu': 'tu veux',
      'il/elle/on': 'il/elle/on veut',
      'nous': 'nous voulons',
      'vous': 'vous voulez',
      'ils/elles': 'ils/elles veulent'
    }
  },
  faire: {
    infinitive: 'faire',
    translations: {
      en: 'to do/make',
      es: 'hacer',
      de: 'machen/tun'
    },
    conjugations: {
      'je': 'je fais',
      'tu': 'tu fais',
      'il/elle/on': 'il/elle/on fait',
      'nous': 'nous faisons',
      'vous': 'vous faites',
      'ils/elles': 'ils/elles font'
    }
  },
  dire: {
    infinitive: 'dire',
    translations: {
      en: 'to say/tell',
      es: 'decir',
      de: 'sagen'
    },
    conjugations: {
      'je': 'je dis',
      'tu': 'tu dis',
      'il/elle/on': 'il/elle/on dit',
      'nous': 'nous disons',
      'vous': 'vous dites',
      'ils/elles': 'ils/elles disent'
    }
  },
  pouvoir: {
    infinitive: 'pouvoir',
    translations: {
      en: 'to be able to/can',
      es: 'poder',
      de: 'können'
    },
    conjugations: {
      'je': 'je peux',
      'tu': 'tu peux',
      'il/elle/on': 'il/elle/on peut',
      'nous': 'nous pouvons',
      'vous': 'vous pouvez',
      'ils/elles': 'ils/elles peuvent'
    }
  },
  devoir: {
    infinitive: 'devoir',
    translations: {
      en: 'to have to/must',
      es: 'deber',
      de: 'müssen'
    },
    conjugations: {
      'je': 'je dois',
      'tu': 'tu dois',
      'il/elle/on': 'il/elle/on doit',
      'nous': 'nous devons',
      'vous': 'vous devez',
      'ils/elles': 'ils/elles doivent'
    }
  },
  savoir: {
    infinitive: 'savoir',
    translations: {
      en: 'to know (facts)',
      es: 'saber',
      de: 'wissen'
    },
    conjugations: {
      'je': 'je sais',
      'tu': 'tu sais',
      'il/elle/on': 'il/elle/on sait',
      'nous': 'nous savons',
      'vous': 'vous savez',
      'ils/elles': 'ils/elles savent'
    }
  }
};

export const articleData = {
  definite: {
    type: 'definite',
    masculine: {
      singular: 'le',
      plural: 'les'
    },
    feminine: {
      singular: 'la',
      plural: 'les'
    }
  },
  indefinite: {
    type: 'indefinite',
    masculine: {
      singular: 'un',
      plural: 'des'
    },
    feminine: {
      singular: 'une',
      plural: 'des'
    }
  },
  partitive: {
    type: 'partitive',
    masculine: {
      singular: 'du',
      plural: 'des'
    },
    feminine: {
      singular: 'de la',
      plural: 'des'
    }
  }
};

export const pronounData = {
  subject: {
    type: 'subject',
    pronouns: {
      'I': 'je',
      'you (informal)': 'tu',
      'he': 'il',
      'she': 'elle',
      'we': 'nous',
      'you (formal/plural)': 'vous',
      'they (masculine)': 'ils',
      'they (feminine)': 'elles'
    }
  },
  object: {
    type: 'object',
    pronouns: {
      'me': 'me',
      'you (informal)': 'te',
      'him': 'le',
      'her': 'la',
      'us': 'nous',
      'you (formal/plural)': 'vous',
      'them (masculine)': 'les',
      'them (feminine)': 'les'
    }
  },
  possessive: {
    type: 'possessive',
    pronouns: {
      'my (masculine)': 'mon',
      'my (feminine)': 'ma',
      'your (informal, masculine)': 'ton',
      'your (informal, feminine)': 'ta',
      'his': 'son',
      'her': 'sa',
      'our (masculine)': 'notre',
      'our (feminine)': 'notre',
      'your (formal/plural, masculine)': 'votre',
      'your (formal/plural, feminine)': 'votre',
      'their (masculine)': 'leur',
      'their (feminine)': 'leur'
    }
  }
};

export const nounGenderData = {
  masculine: {
    type: 'masculine',
    rules: {
      'Common endings': 'age, eau, ier, isme, ment, oir, on, ou',
      'Examples': 'le château, le garçon, le livre, le journal'
    },
    examples: {
      'le château': 'the castle',
      'le garçon': 'the boy',
      'le livre': 'the book',
      'le journal': 'the newspaper',
      'le café': 'the café',
      'le train': 'the train',
      'le bus': 'the bus',
      'le métro': 'the subway'
    }
  },
  feminine: {
    type: 'feminine',
    rules: {
      'Common endings': 'ade, aison, ance, ence, eur, ie, ion, té, ure',
      'Examples': 'la maison, la voiture, la gare, la station'
    },
    examples: {
      'la maison': 'the house',
      'la voiture': 'the car',
      'la gare': 'the station',
      'la station': 'the station',
      'la rue': 'the street',
      'la ville': 'the city',
      'la table': 'the table',
      'la chaise': 'the chair'
    }
  }
};

export const prepositionData = {
  'à': 'to, at, in',
  'de': 'from, of',
  'dans': 'in, inside',
  'sur': 'on, upon',
  'sous': 'under',
  'avec': 'with',
  'sans': 'without',
  'pour': 'for',
  'par': 'by, through',
  'entre': 'between',
  'devant': 'in front of',
  'derrière': 'behind',
  'près de': 'near',
  'loin de': 'far from',
  'à côté de': 'next to',
  'en face de': 'facing, across from'
};

// Days of the week
export const daysData = {
  type: 'days',
  days: {
    'lundi': 'Monday',
    'mardi': 'Tuesday',
    'mercredi': 'Wednesday',
    'jeudi': 'Thursday',
    'vendredi': 'Friday',
    'samedi': 'Saturday',
    'dimanche': 'Sunday'
  },
  rules: {
    'Capitalization': 'Days are not capitalized in French',
    'Articles': 'Use "le" for "on [day]" (le lundi = on Monday)',
    'Weekend': 'le weekend (masculine)'
  }
};

// Months of the year
export const monthsData = {
  type: 'months',
  months: {
    'janvier': 'January',
    'février': 'February',
    'mars': 'March',
    'avril': 'April',
    'mai': 'May',
    'juin': 'June',
    'juillet': 'July',
    'août': 'August',
    'septembre': 'September',
    'octobre': 'October',
    'novembre': 'November',
    'décembre': 'December'
  },
  rules: {
    'Capitalization': 'Months are not capitalized in French',
    'Articles': 'Use "en" for "in [month]" (en janvier = in January)',
    'Gender': 'All months are masculine'
  }
};

// Time expressions
export const timeData = {
  type: 'time',
  expressions: {
    'le matin': 'in the morning',
    'l\'après-midi': 'in the afternoon',
    'le soir': 'in the evening',
    'la nuit': 'at night',
    'aujourd\'hui': 'today',
    'hier': 'yesterday',
    'demain': 'tomorrow',
    'maintenant': 'now',
    'toujours': 'always',
    'jamais': 'never'
  },
  rules: {
    'Articles': 'Use "le" for morning/evening, "l\'" for afternoon',
    'Time of day': 'le matin, l\'après-midi, le soir, la nuit'
  }
};

// Family vocabulary
export const familyData = {
  type: 'family',
  members: {
    'la famille': 'the family',
    'le père': 'the father',
    'la mère': 'the mother',
    'le fils': 'the son',
    'la fille': 'the daughter',
    'le frère': 'the brother',
    'la sœur': 'the sister',
    'le grand-père': 'the grandfather',
    'la grand-mère': 'the grandmother',
    'l\'oncle': 'the uncle',
    'la tante': 'the aunt',
    'le cousin': 'the cousin (male)',
    'la cousine': 'the cousin (female)'
  },
  rules: {
    'Gender': 'Family members have specific genders',
    'Articles': 'Use "le/la" with family members',
    'Possession': 'Use "mon/ma" for "my" family members'
  }
};

// Directions
export const directionsData = {
  type: 'directions',
  directions: {
    'au nord': 'to the north',
    'à l\'est': 'to the east',
    'au sud': 'to the south',
    'à l\'ouest': 'to the west',
    'au centre': 'in the center',
    'à droite': 'to the right',
    'à gauche': 'to the left',
    'tout droit': 'straight ahead'
  },
  rules: {
    'Articles': 'au nord/sud, à l\'est/ouest',
    'Prepositions': 'Use "au" for masculine directions, "à l\'" for vowel sounds'
  }
};

// Colors
export const colorsData = {
  type: 'colors',
  colors: {
    'rouge': 'red',
    'bleu': 'blue',
    'vert': 'green',
    'jaune': 'yellow',
    'noir': 'black',
    'blanc': 'white',
    'gris': 'gray',
    'rose': 'pink',
    'violet': 'purple',
    'orange': 'orange',
    'marron': 'brown'
  },
  rules: {
    'Agreement': 'Colors agree with the noun they describe',
    'Position': 'Most colors come after the noun (une voiture rouge)',
    'Exceptions': 'Some colors come before: beau, bon, grand, petit, etc.'
  }
};

// French alphabet
export const lettersData = {
  type: 'letters',
  alphabet: {
    'A': 'ah',
    'B': 'bay',
    'C': 'say',
    'D': 'day',
    'E': 'uh',
    'F': 'eff',
    'G': 'zhay',
    'H': 'ash',
    'I': 'ee',
    'J': 'zhee',
    'K': 'kah',
    'L': 'ell',
    'M': 'em',
    'N': 'en',
    'O': 'oh',
    'P': 'pay',
    'Q': 'koo',
    'R': 'air',
    'S': 'ess',
    'T': 'tay',
    'U': 'oo',
    'V': 'vay',
    'W': 'doo-bluh-vay',
    'X': 'eeks',
    'Y': 'ee-grek',
    'Z': 'zed'
  },
  rules: {
    'Pronunciation': 'Each letter has a specific French pronunciation',
    'Accents': 'French uses accents: é, è, ê, ç, à, ù',
    'Silent letters': 'Many letters are silent at the end of words'
  }
};

// Sound practice
export const soundsData = {
  type: 'sounds',
  sounds: {
    '[y] vs [u]': 'French [y] (like "tu") vs [u] (like "tout")',
    '[e] vs [ɛ]': 'French [e] (like "été") vs [ɛ] (like "est")',
    '[o] vs [ɔ]': 'French [o] (like "beau") vs [ɔ] (like "bon")',
    '[a] vs [ɑ]': 'French [a] (like "patte") vs [ɑ] (like "pâte")',
    '[œ] vs [ø]': 'French [œ] (like "peur") vs [ø] (like "peu")'
  },
  rules: {
    'Lip position': '[y] requires rounded lips, [u] requires more rounded lips',
    'Tongue position': 'Different tongue positions create different sounds',
    'Practice': 'Listen and repeat to master French sounds'
  }
};

// Numbers
export const numbersData = {
  type: 'numbers',
  numbers: {
    '0-10': 'zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix',
    '11-20': 'onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt',
    '21-30': 'vingt-et-un, vingt-deux, ..., trente',
    '70s': 'soixante-dix (60 + 10), soixante et onze (60 + 11), soixante-douze (60 + 12)',
    '80s': 'quatre-vingt (4 × 20), quatre-vingt-un (4 × 20 + 1), quatre-vingt-deux (4 × 20 + 2)',
    '90s': 'quatre-vingt-dix (4 × 20 + 10), quatre-vingt-onze (4 × 20 + 11), quatre-vingt-douze (4 × 20 + 12)',
    '100+': 'cent, deux-cents, mille'
  },
  mathExplanations: {
    '70 = 60 + 10': 'soixante-dix (literally "sixty-ten")',
    '71 = 60 + 11': 'soixante et onze (sixty and eleven)',
    '72 = 60 + 12': 'soixante-douze (sixty-twelve)',
    '80 = 4 × 20': 'quatre-vingt (literally "four-twenty")',
    '81 = 4 × 20 + 1': 'quatre-vingt-un (four-twenty-one)',
    '90 = 4 × 20 + 10': 'quatre-vingt-dix (four-twenty-ten)',
    '91 = 4 × 20 + 11': 'quatre-vingt-onze (four-twenty-eleven)',
    '92 = 4 × 20 + 12': 'quatre-vingt-douze (four-twenty-twelve)',
    '93 = 4 × 20 + 13': 'quatre-vingt-treize (four-twenty-thirteen)'
  },
  rules: {
    'Hyphens': 'Use hyphens for compound numbers (vingt-deux)',
    'Et Usage': 'Use "et" only for 21, 31, 41, 51, 61, 71 (vingt et un)',
    'Mathematical Logic': 'French uses base-20 system for 80-99 (quatre-vingt = 4×20)',
    'Belgian/Swiss': 'Belgium and Switzerland use septante (70), octante (80), nonante (90)',
    'Plural Rules': 'Cent and vingt take -s when not followed by another number'
  }
};

// Languages
export const languagesData = {
  type: 'languages',
  languages: {
    'le français': 'French',
    'l\'anglais': 'English',
    'l\'espagnol': 'Spanish',
    'l\'allemand': 'German',
    'l\'italien': 'Italian',
    'le portugais': 'Portuguese',
    'le chinois': 'Chinese',
    'le japonais': 'Japanese',
    'l\'arabe': 'Arabic',
    'le russe': 'Russian'
  },
  rules: {
    'Articles': 'Use "le" for masculine languages, "l\'" for vowel sounds',
    'Nationality': 'Language names are usually masculine',
    'Speaking': 'Use "parler" + language (je parle français)'
  }
};

// Marital status
export const maritalData = {
  type: 'marital',
  status: {
    'célibataire': 'single',
    'marié(e)': 'married',
    'divorcé(e)': 'divorced',
    'veuf/veuve': 'widowed',
    'fiancé(e)': 'engaged'
  },
  rules: {
    'Agreement': 'Marital status adjectives agree with gender',
    'Articles': 'Use "être" + marital status (je suis marié)',
    'Gender': 'Add (e) for feminine forms'
  }
};

// Events
export const eventsData = {
  type: 'events',
  events: {
    'un anniversaire': 'a birthday',
    'un mariage': 'a wedding',
    'une fête': 'a party',
    'une réunion': 'a meeting',
    'un rendez-vous': 'an appointment',
    'un voyage': 'a trip',
    'des vacances': 'vacation',
    'un concert': 'a concert',
    'un spectacle': 'a show'
  },
  rules: {
    'Gender': 'Events have specific genders',
    'Articles': 'Use appropriate articles (un/une/des)',
    'Plural': 'Some events are always plural (vacances)'
  }
};

// People
export const peopleData = {
  type: 'people',
  people: {
    'une personne': 'a person',
    'un homme': 'a man',
    'une femme': 'a woman',
    'un enfant': 'a child',
    'un bébé': 'a baby',
    'un ami': 'a friend (male)',
    'une amie': 'a friend (female)',
    'un voisin': 'a neighbor (male)',
    'une voisine': 'a neighbor (female)',
    'un collègue': 'a colleague (male)',
    'une collègue': 'a colleague (female)'
  },
  rules: {
    'Gender': 'People have specific genders',
    'Articles': 'Use "un/une" with people',
    'Plural': 'Add "s" for plural (des amis)'
  }
};

// Concepts
export const conceptsData = {
  type: 'concepts',
  concepts: {
    'le temps': 'time',
    'l\'espace': 'space',
    'la liberté': 'freedom',
    'la justice': 'justice',
    'la paix': 'peace',
    'la guerre': 'war',
    'l\'amour': 'love',
    'la haine': 'hate',
    'le bonheur': 'happiness',
    'la tristesse': 'sadness'
  },
  rules: {
    'Gender': 'Abstract concepts have specific genders',
    'Articles': 'Use "le/la/l\'" with concepts',
    'Plural': 'Most concepts are singular'
  }
};

// Introductions
export const introductionsData = {
  type: 'introductions',
  phrases: {
    'Je m\'appelle...': 'My name is...',
    'Comment vous appelez-vous?': 'What is your name? (formal)',
    'Comment tu t\'appelles?': 'What is your name? (informal)',
    'Enchanté(e)': 'Pleased to meet you',
    'Ravi(e) de vous rencontrer': 'Pleased to meet you (formal)',
    'Ravi(e) de te rencontrer': 'Pleased to meet you (informal)'
  },
  rules: {
    'Formality': 'Use "vous" for formal, "tu" for informal',
    'Agreement': 'Enchanté changes to "Enchantée" for women',
    'Reflexive': 'S\'appeler is a reflexive verb'
  }
};

// Lesson 3 - Personal Information
export const personalInfoL3Data = {
  type: 'personal-info-l3',
  phrases: {
    'Je m\'appelle Léa': 'My name is Léa',
    'Je suis française': 'I am French (feminine)',
    'Je parle français et anglais': 'I speak French and English',
    'Je suis enseignante': 'I am a teacher (feminine)'
  },
  rules: {
    'Self-introduction': 'Use "Je m\'appelle" for your name',
    'Nationality': 'Nationality adjectives agree with gender',
    'Languages': 'Use "Je parle" + language name',
    'Profession': 'Profession names agree with gender'
  }
};

// Lesson 3 - Nationalities with Gender
export const nationalitiesL3Data = {
  type: 'nationalities-l3',
  masculine: {
    'camerounais': 'Cameroonian',
    'suédois': 'Swedish',
    'anglais': 'English',
    'espagnol': 'Spanish',
    'mexicain': 'Mexican',
    'algérien': 'Algerian',
    'indien': 'Indian',
    'russe': 'Russian',
    'suisse': 'Swiss'
  },
  feminine: {
    'camerounaise': 'Cameroonian',
    'suédoise': 'Swedish',
    'anglaise': 'English',
    'espagnole': 'Spanish',
    'mexicaine': 'Mexican',
    'algérienne': 'Algerian',
    'indienne': 'Indian',
    'russe': 'Russian',
    'suisse': 'Swiss'
  },
  rules: {
    'Gender Agreement': 'Nationality adjectives must agree with the person\'s gender',
    'Common Patterns': 'Most add -e for feminine (français → française)',
    'Special Cases': 'Some are identical (russe, suisse)',
    'Pronunciation': 'Some change pronunciation (algérien → algérienne [è])'
  }
};

// Lesson 3 - Professions with Gender
export const professionsL3Data = {
  type: 'professions-l3',
  patterns: {
    '-ien → -ienne': 'comédien → comédienne, électricien → électricienne',
    '-teur → -trice': 'acteur → actrice, instituteur → institutrice',
    '-eur → -euse': 'chanteur → chanteuse, coiffeur → coiffeuse',
    '-er → -ère': 'infirmier → infirmière, boulanger → boulangère',
    'ingénieur → ingénieure': 'ingénieur logiciel → ingénieure logiciel',
    'Identical': 'journaliste, vétérinaire (same for both genders)'
  },
  masculine: {
    'comédien': 'actor/comedian',
    'électricien': 'electrician',
    'acteur': 'actor',
    'instituteur': 'elementary teacher',
    'chanteur': 'singer',
    'coiffeur': 'hairdresser',
    'infirmier': 'nurse',
    'boulanger': 'baker',
    'journaliste': 'journalist',
    'vétérinaire': 'veterinarian',
    'ingénieur logiciel': 'software engineer'
  },
  feminine: {
    'comédienne': 'actress/comedian',
    'électricienne': 'electrician',
    'actrice': 'actress',
    'institutrice': 'elementary teacher',
    'chanteuse': 'singer',
    'coiffeuse': 'hairdresser',
    'infirmière': 'nurse',
    'boulangère': 'baker',
    'journaliste': 'journalist',
    'vétérinaire': 'veterinarian',
    'ingénieure logiciel': 'software engineer'
  },
  rules: {
    'Gender Agreement': 'Profession names must agree with the person\'s gender',
    'Articles': 'Use "un/une" with professions (un acteur, une actrice)',
    'Verb Usage': 'Use "être" + profession (je suis enseignante)'
  }
};

// Lesson 3 - Languages for Lesson 3
export const languagesL3Data = {
  type: 'languages-l3',
  languages: {
    'français': 'French',
    'anglais': 'English',
    'espagnol': 'Spanish',
    'allemand': 'German',
    'italien': 'Italian',
    'chinois': 'Chinese',
    'japonais': 'Japanese',
    'arabe': 'Arabic',
    'russe': 'Russian'
  },
  rules: {
    'Speaking Languages': 'Use "Je parle" + language name',
    'Multiple Languages': 'Connect with "et" (français et anglais)',
    'Articles': 'Language names are masculine (le français)',
    'No Capitalization': 'Language names are not capitalized in French'
  }
};

// Lesson 3 - French Intonation
export const intonationL3Data = {
  type: 'intonation-l3',
  patterns: {
    'Questions': 'Voice rises at the end (Tu es anglais? ↗)',
    'Statements': 'Voice falls at the end (Je suis américain. ↘)',
    'Yes/No Questions': 'Rising intonation indicates a question',
    'Declarative': 'Falling intonation indicates a statement or response'
  },
  examples: {
    'Tu es anglais ?': 'Are you English? (rising ↗)',
    'Non, je suis américain.': 'No, I am American. (falling ↘)',
    'Tu parles français ?': 'Do you speak French? (rising ↗)',
    'Oui, je parle français.': 'Yes, I speak French. (falling ↘)'
  },
  rules: {
    'Question Intonation': 'Voice goes up at the end of yes/no questions',
    'Statement Intonation': 'Voice goes down at the end of statements',
    'Listening Practice': 'Pay attention to voice direction to understand meaning',
    'Speaking Practice': 'Use correct intonation to sound natural'
  }
};

// Lesson 2 - Polite Formulas
export const politeFormulasL2Data = {
  type: 'polite-formulas-l2',
  formulas: {
    'Pardon Monsieur/Madame': 'Excuse me Sir/Madam (formal address)',
    's\'il vous plaît': 'please (formal)',
    'est-ce que': 'question marker (makes questions more polite)',
    'Excusez-moi': 'Excuse me (alternative to Pardon)'
  },
  transformations: {
    'Direct → Polite': 'Add "Pardon Monsieur/Madame" + "s\'il vous plaît"',
    'Question Formation': 'Use "est-ce que" to make questions more polite',
    'Gender Agreement': 'Use "Monsieur" for men, "Madame" for women',
    'Formal Register': 'Always use "vous" in polite formulas'
  },
  examples: {
    'Direct': 'Où est le quai n°10 ?',
    'Polite': 'Pardon Monsieur, où est le quai n°10, s\'il vous plaît ?',
    'Direct Request': 'Un billet de train pour Toulouse.',
    'Polite Request': 'Pardon Madame, un billet de train pour Toulouse, s\'il vous plaît ?'
  },
  rules: {
    'Address Forms': 'Always use Monsieur/Madame in formal situations',
    'Please': 'Add "s\'il vous plaît" at the end of requests',
    'Question Politeness': 'Use "est-ce que" to soften direct questions',
    'Tone': 'Polite formulas show respect and courtesy'
  }
};

// Lesson 2 - Word Classification: Où (Where)
export const classificationWhereData = {
  type: 'classification-where',
  questionWord: 'Où',
  meaning: 'Where',
  words: {
    'le Maroc': 'Morocco',
    'une gare routière': 'a bus station',
    'une gare': 'a train station',
    'un aéroport': 'an airport',
    'Lyon': 'Lyon'
  },
  rules: {
    'Question Word': 'Où = Where (asking about location or place)',
    'Places': 'Countries, cities, buildings, and locations answer "Où?"',
    'Articles': 'Places often use articles: le Maroc, une gare, un aéroport',
    'Proper Nouns': 'City names like Lyon don\'t use articles'
  }
};

// Lesson 2 - Word Classification: Quand (When)
export const classificationWhenData = {
  type: 'classification-when',
  questionWord: 'Quand',
  meaning: 'When',
  words: {
    'le matin': 'in the morning',
    'lundi': 'Monday',
    'l\'après-midi': 'in the afternoon',
    'à midi': 'at noon',
    'l\'été': 'summer',
    'l\'automne': 'autumn'
  },
  rules: {
    'Question Word': 'Quand = When (asking about time)',
    'Time Expressions': 'Days, times of day, seasons answer "Quand?"',
    'Articles': 'Time expressions often use articles: le matin, l\'été',
    'Prepositions': 'Some use prepositions: à midi (at noon)'
  }
};

// Lesson 2 - Word Classification: Quoi (What)
export const classificationWhatData = {
  type: 'classification-what',
  questionWord: 'Quoi',
  meaning: 'What',
  words: {
    'un échange de numéros de téléphone': 'an exchange of phone numbers',
    'une rencontre': 'a meeting/encounter',
    'un rendez-vous': 'an appointment'
  },
  rules: {
    'Question Word': 'Quoi = What (asking about things, actions, events)',
    'Events/Actions': 'Activities, meetings, and events answer "Quoi?"',
    'Articles': 'Events use indefinite articles: un échange, une rencontre',
    'Complex Phrases': 'Some are longer phrases describing specific actions'
  }
};

// Lesson 2 - Word Classification: Qui (Who)
export const classificationWhoData = {
  type: 'classification-who',
  questionWord: 'Qui',
  meaning: 'Who',
  words: {
    'un homme': 'a man',
    'une femme': 'a woman',
    'une jeune femme': 'a young woman',
    'un monsieur': 'a gentleman/sir',
    'Marius Ndiaye': 'Marius Ndiaye'
  },
  rules: {
    'Question Word': 'Qui = Who (asking about people)',
    'People': 'All people, names, and person descriptions answer "Qui?"',
    'Gender': 'French nouns for people have gender: un homme, une femme',
    'Proper Names': 'Personal names like Marius Ndiaye don\'t use articles'
  }
};

// Lesson 2 - Word Classification: Pourquoi (Why)
export const classificationWhyData = {
  type: 'classification-why',
  questionWord: 'Pourquoi',
  meaning: 'Why',
  words: {
    'parce que': 'because',
    'car': 'because/for',
    'à cause de': 'because of',
    'grâce à': 'thanks to',
    'pour': 'for/in order to'
  },
  examples: {
    'Pourquoi tu apprends le français?': 'Why are you learning French?',
    'Parce que j\'aime cette langue.': 'Because I love this language.',
    'Pourquoi il voyage?': 'Why is he traveling?',
    'Pour le travail.': 'For work.'
  },
  rules: {
    'Question Word': 'Pourquoi = Why (asking about reasons)',
    'Answers': 'Use "parce que" or "pour" to answer "Pourquoi?"',
    'Common Responses': 'parce que + sentence, pour + noun/infinitive',
    'Formal vs Informal': 'Same form in both registers'
  }
};

// General Question Words Data
export const questionWordsData = {
  type: 'questions',
  questionWords: {
    'Où': 'Where - asking about location',
    'Qui': 'Who - asking about people',
    'Quand': 'When - asking about time',
    'Quoi': 'What - asking about things',
    'Combien': 'How much/many - asking about quantity',
    'Pourquoi': 'Why - asking about reasons'
  },
  usage: {
    'Question Formation': 'Question word + subject + verb + ?',
    'Intonation': 'Rising intonation for all questions',
    'Word Order': 'Question word usually comes first',
    'Politeness': 'Add "Excusez-moi" for formal situations'
  },
  examples: {
    'Où est la gare?': 'Where is the train station?',
    'Qui parle français?': 'Who speaks French?',
    'Quand arrive le train?': 'When does the train arrive?',
    'Quoi de neuf?': 'What\'s new?',
    'Combien ça coûte?': 'How much does it cost?',
    'Pourquoi tu études?': 'Why are you studying?'
  },
  rules: {
    'Essential Questions': 'These 6 question words cover most basic questions',
    'Frequency': 'Most commonly used question words in French',
    'Learning Strategy': 'Master these to ask about anything',
    'Combination': 'Can be combined with polite formulas'
  }
};

// Lesson 2 - Dialogue Completion
export const dialogueCompletionData = {
  type: 'dialogue-completion',
  questionWords: {
    'Quand': 'When - asking about time',
    'Où': 'Where - asking about location',
    'Qui': 'Who - asking about people'
  },
  examples: {
    'Quand il arrive le train?': 'When does the train arrive?',
    'C\'est où exactement?': 'Where is it exactly?',
    'C\'est qui sur la photo?': 'Who is that in the photo?'
  },
  dialogueStructure: {
    'Question': 'Use question word + subject + verb',
    'Polite Address': 'Start with "Excusez-moi Monsieur/Madame"',
    'Response': 'Answer directly with specific information',
    'Courtesy': 'End with polite address (Madame/Monsieur)'
  },
  rules: {
    'Question Formation': 'Question word + il/elle + verb (Quand il arrive?)',
    'Politeness': 'Always use Monsieur/Madame in formal situations',
    'Context': 'Questions and answers should match logically',
    'Intonation': 'Questions have rising intonation'
  }
};

// Lesson 2 - French Pronunciation Stress
export const pronunciationStressData = {
  type: 'pronunciation-stress',
  concept: 'Final Syllable Stress',
  rule: 'French words are stressed on the final syllable',
  examples: {
    'une gare': '[gare] - stress on final syllable',
    'un train': '[train] - stress on final syllable',
    'une voiture': '[voi-TURE] - stress on final syllable',
    'le matin': '[ma-TIN] - stress on final syllable',
    'l\'après-midi': '[a-près-mi-DI] - stress on final syllable'
  },
  patterns: {
    'Single Syllable': 'Stress the only syllable (gare, train)',
    'Multi-Syllable': 'Always stress the last syllable (voi-TURE)',
    'Compound Words': 'Stress the final syllable of the last word',
    'Names': 'Follow same rule (Trem-BLAY)'
  },
  rules: {
    'Universal Rule': 'French always stresses the final syllable',
    'No Exceptions': 'Unlike English, French stress is predictable',
    'Rhythm': 'This creates French\'s characteristic rhythm',
    'Practice': 'Listen and repeat to master the pattern'
  }
};

// Lesson 2 - Conversation Practice
export const conversationPracticeData = {
  type: 'conversation-practice',
  scenario: 'Organizing Activities',
  keyPhrases: {
    'J\'organise une activité': 'I\'m organizing an activity',
    'Des propositions?': 'Any suggestions?',
    'On peut visiter': 'We can visit',
    'Ce serait bien': 'That would be good',
    'Qu\'en penses-tu?': 'What do you think?'
  },
  conversationFlow: {
    'Opening': 'Greeting + explaining purpose',
    'Request': 'Asking for suggestions',
    'Response': 'Providing specific suggestions',
    'Details': 'When and where information',
    'Closing': 'Asking for opinion + farewell'
  },
  rules: {
    'Informal Register': 'Use "tu" with friends and classmates',
    'Suggestions': 'Use "On peut..." (We can...) for suggestions',
    'Conditional': 'Use "Ce serait..." (That would be...) for polite suggestions',
    'Questions': 'End with question to engage the other person'
  }
};

// Lesson 2 - Cross-Cultural Greetings
export const crossCulturalData = {
  type: 'cross-cultural',
  comparison: 'French vs English Politeness',
  formalGreetings: {
    'French': 'Bonjour Madame/Monsieur',
    'English': 'Good morning Sir/Madam'
  },
  usage: {
    'French Frequency': 'Very often - Madame/Monsieur used constantly',
    'English Frequency': 'Less frequent - Sir/Madam more formal'
  },
  culturalNotes: {
    'French Politeness': 'Essential for daily interactions',
    'Formality Level': 'Higher than many other cultures',
    'Social Expectation': 'Not using titles can seem rude',
    'Universal Usage': 'Used in shops, restaurants, streets'
  },
  rules: {
    'When to Use': 'Always in formal situations and with strangers',
    'Age Factor': 'Use with adults regardless of age difference',
    'Professional': 'Essential in business and service contexts',
    'Cultural Respect': 'Shows understanding of French social norms'
  }
};

// Lesson 3 - Cultural Assessment
export const culturalAssessmentData = {
  type: 'cultural-assessment',
  topic: 'Francophone Games',
  facts: {
    'Event Type': 'Cultural and sports celebration',
    'Location': 'Abidjan, Ivory Coast',
    'Participants': 'Francophone athletes and artists',
    'Scope': 'International francophone event'
  },
  trueStatements: {
    'Une fête culturelle': 'The games are a cultural celebration',
    'Une fête sportive': 'The games are a sports celebration',
    'Abidjan': 'The city hosting the games',
    'Francophones': 'Participants are French-speaking'
  },
  falseStatements: {
    'Un festival de cinéma': 'NOT a film festival',
    'Paris': 'NOT held in Paris',
    'Québec': 'NOT held in Quebec',
    'Tous français': 'NOT all participants are French citizens'
  },
  rules: {
    'Francophone vs French': 'Francophone = French-speaking, not necessarily French citizen',
    'Cultural Events': 'Combine sports and cultural activities',
    'Geography': 'Francophone events happen in various francophone countries',
    'Gender Agreement': 'Professions agree with gender (chanteuse vs chanteur)'
  }
};

// Lesson 3 - Verb ÊTRE Practice
export const verbEtrePracticeData = {
  type: 'verb-etre-practice',
  verb: 'être',
  meaning: 'to be',
  conjugations: {
    'je suis': 'I am',
    'tu es': 'you are (informal)',
    'il/elle est': 'he/she is',
    'nous sommes': 'we are',
    'vous êtes': 'you are (formal/plural)',
    'ils/elles sont': 'they are'
  },
  questionFormation: {
    'Tu es russe?': 'Are you Russian? (informal)',
    'Elle est actrice?': 'Is she an actress?',
    'Ils sont canadiens?': 'Are they Canadian?',
    'Vous êtes francophones?': 'Are you French-speaking? (formal)'
  },
  answerPatterns: {
    'Oui, je suis...': 'Yes, I am...',
    'Oui, elle est...': 'Yes, she is...',
    'Oui, ils sont...': 'Yes, they are...',
    'Oui, nous sommes...': 'Yes, we are...'
  },
  rules: {
    'Question Formation': 'Subject + être + adjective/noun + ?',
    'Answer Pattern': 'Oui/Non + subject pronoun + être + adjective/noun',
    'Gender Agreement': 'Adjectives agree with the subject (canadien/canadienne)',
    'Nationality': 'Nationalities are adjectives that agree with gender'
  }
};

// Lesson 3 - Francophone Program
export const francophoneProgramData = {
  type: 'francophone-program',
  program: 'La francophonie du Nord au Sud',
  artists: {
    'Slimane Ould Mohand': 'peintre algérien (Algerian painter)',
    'Pierre Ravach': 'réalisateur (director)',
    'Xavier Dolan': 'acteur (actor)',
    'Gemma Arterton': 'actrice anglaise (English actress)',
    'Saidou Abatcha': 'humoriste (comedian)',
    'Maurane': 'chanteuse belge (Belgian singer)'
  },
  events: {
    'Jeudi - Exposition': 'Thursday - Exhibition',
    'Vendredi - Cinéma': 'Friday - Cinema',
    'Samedi - Spectacle d\'humour': 'Saturday - Comedy show',
    'Dimanche - Concert': 'Sunday - Concert'
  },
  culturalGroups: {
    'Orchestre national symphonique du Vietnam': 'Vietnam National Symphony Orchestra',
    'Orchestre national de Barbès': 'Barbès National Orchestra (Algerian group)'
  },
  rules: {
    'Artist Identification': 'Name + profession + nationality (Maurane, chanteuse belge)',
    'Cultural Diversity': 'Francophone events include artists from many countries',
    'Program Structure': 'Events organized by days of the week',
    'Profession + Nationality': 'Learn to describe people by their work and origin'
  }
};

// Lesson 3 - Profession Sentences with ÊTRE
export const professionSentencesData = {
  type: 'profession-sentences',
  verb: 'être',
  meaning: 'to be',
  conjugations: {
    'Je suis': 'I am',
    'Tu es': 'You are (informal)',
    'Il est': 'He is',
    'Elle est': 'She is',
    'Nous sommes': 'We are',
    'Vous êtes': 'You are (formal/plural)',
    'Ils sont': 'They are (masculine)',
    'Elles sont': 'They are (feminine)'
  },
  negativeConjugations: {
    'Je ne suis pas': 'I am not',
    'Tu n\'es pas': 'You are not (informal)',
    'Il n\'est pas': 'He is not',
    'Elle n\'est pas': 'She is not',
    'Nous ne sommes pas': 'We are not',
    'Vous n\'êtes pas': 'You are not (formal/plural)',
    'Ils ne sont pas': 'They are not (masculine)',
    'Elles ne sont pas': 'They are not (feminine)'
  },
  professionExamples: {
    'Je suis comédien/comédienne': 'I am an actor/comedian',
    'Tu es électricien/électricienne': 'You are an electrician',
    'Il est acteur': 'He is an actor',
    'Elle est actrice': 'She is an actress',
    'Il est producteur': 'He is a producer',
    'Elle est productrice': 'She is a producer',
    'Nous sommes instituteurs': 'We are teachers',
    'Vous êtes chanteurs': 'You are singers',
    'Ils sont coiffeurs': 'They are hairdressers (masculine)',
    'Elles sont coiffeuses': 'They are hairdressers (feminine)',
    'Nous sommes comédiens': 'We are comedians',
    'Ils sont producteurs': 'They are producers'
  },
  rules: {
    'Verb Agreement': 'ÊTRE conjugates with the subject pronoun',
    'Gender Agreement': 'Professions agree with the person\'s gender',
    'Plural Agreement': 'Add -s for plural professions (instituteurs)',
    'Negation': 'Use ne...pas around the verb (Je ne suis pas)',
    'Formal vs Informal': 'Tu/Vous changes the verb form (tu es / vous êtes)',
    'Profession Usage': 'No article needed after être + profession (Je suis acteur)'
  }
};
