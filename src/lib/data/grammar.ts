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
    '31-40': 'trente-et-un, trente-deux, ..., quarante',
    '50': 'cinquante',
    '60': 'soixante',
    '70': 'soixante-dix',
    '80': 'quatre-vingts',
    '90': 'quatre-vingt-dix',
    '100': 'cent'
  },
  rules: {
    'Hyphens': 'Use hyphens for compound numbers (vingt-et-un)',
    'Plural': 'Cent and vingt are invariable when followed by another number',
    'Counting': 'Numbers agree in gender when used as adjectives'
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
