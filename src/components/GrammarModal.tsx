'use client';

import { useState, useEffect } from 'react';

interface GrammarModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'verb-conjugation' | 'articles' | 'pronouns' | 'prepositions' | 'noun-gender' | 'days' | 'months' | 'time' | 'family' | 'directions' | 'colors' | 'letters' | 'sounds' | 'numbers' | 'languages' | 'marital' | 'events' | 'people' | 'concepts' | 'introductions' | 'personal-info-l3' | 'nationalities-l3' | 'professions-l3' | 'languages-l3' | 'intonation-l3' | 'polite-formulas-l2';
  data: VerbConjugation | ArticleData | PronounData | Record<string, string> | NounGenderData | DaysData | MonthsData | TimeData | FamilyData | DirectionsData | ColorsData | LettersData | SoundsData | NumbersData | LanguagesData | MaritalData | EventsData | PeopleData | ConceptsData | IntroductionsData | PersonalInfoL3Data | NationalitiesL3Data | ProfessionsL3Data | LanguagesL3Data | IntonationL3Data | PoliteFormulasL2Data;
}

interface VerbConjugation {
  infinitive: string;
  translations: {
    [key: string]: string;
  };
  conjugations: {
    [key: string]: string;
  };
}

interface ArticleData {
  type: 'definite' | 'indefinite' | 'partitive';
  masculine: {
    singular: string;
    plural: string;
  };
  feminine: {
    singular: string;
    plural: string;
  };
}

interface PronounData {
  type: 'subject' | 'object' | 'possessive';
  pronouns: {
    [key: string]: string;
  };
}

interface NounGenderData {
  type: 'masculine' | 'feminine';
  rules: {
    [key: string]: string;
  };
  examples: {
    [key: string]: string;
  };
}

interface DaysData {
  type: 'days';
  days: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface MonthsData {
  type: 'months';
  months: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface TimeData {
  type: 'time';
  expressions: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface FamilyData {
  type: 'family';
  members: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface DirectionsData {
  type: 'directions';
  directions: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface ColorsData {
  type: 'colors';
  colors: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface LettersData {
  type: 'letters';
  alphabet: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface SoundsData {
  type: 'sounds';
  sounds: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface NumbersData {
  type: 'numbers';
  numbers: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface LanguagesData {
  type: 'languages';
  languages: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface MaritalData {
  type: 'marital';
  status: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface EventsData {
  type: 'events';
  events: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface PeopleData {
  type: 'people';
  people: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface ConceptsData {
  type: 'concepts';
  concepts: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface IntroductionsData {
  type: 'introductions';
  phrases: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface PersonalInfoL3Data {
  type: 'personal-info-l3';
  phrases: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface NationalitiesL3Data {
  type: 'nationalities-l3';
  masculine: {
    [key: string]: string;
  };
  feminine: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface ProfessionsL3Data {
  type: 'professions-l3';
  patterns: {
    [key: string]: string;
  };
  masculine: {
    [key: string]: string;
  };
  feminine: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface LanguagesL3Data {
  type: 'languages-l3';
  languages: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface IntonationL3Data {
  type: 'intonation-l3';
  patterns: {
    [key: string]: string;
  };
  examples: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

interface PoliteFormulasL2Data {
  type: 'polite-formulas-l2';
  formulas: {
    [key: string]: string;
  };
  transformations: {
    [key: string]: string;
  };
  examples: {
    [key: string]: string;
  };
  rules: {
    [key: string]: string;
  };
}

export default function GrammarModal({ isOpen, onClose, title, type, data }: GrammarModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  const renderVerbConjugation = (verbData: VerbConjugation) => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {verbData.infinitive}
        </h3>
        <p className="text-gray-600">
          {Object.values(verbData.translations).join(', ')}
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Conjugation</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(verbData.conjugations).map(([subject, conjugation]) => (
              <tr key={subject} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  {subject}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {conjugation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderArticles = (articleData: ArticleData) => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {articleData.type.charAt(0).toUpperCase() + articleData.type.slice(1)} Articles
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Gender</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Singular</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-medium">Masculine</td>
              <td className="border border-gray-300 px-4 py-2">{articleData.masculine.singular}</td>
              <td className="border border-gray-300 px-4 py-2">{articleData.masculine.plural}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-medium">Feminine</td>
              <td className="border border-gray-300 px-4 py-2">{articleData.feminine.singular}</td>
              <td className="border border-gray-300 px-4 py-2">{articleData.feminine.plural}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPronouns = (pronounData: PronounData) => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {pronounData.type.charAt(0).toUpperCase() + pronounData.type.slice(1)} Pronouns
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">English</th>
              <th className="border border-gray-300 px-4 py-2 text-left">French</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(pronounData.pronouns).map(([english, french]) => (
              <tr key={english} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  {english}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {french}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderNounGender = (nounData: NounGenderData) => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {nounData.type.charAt(0).toUpperCase() + nounData.type.slice(1)} Nouns
        </h3>
      </div>
      
      {/* Rules Section */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">Common Endings</h4>
        <div className="bg-gray-50 p-4 rounded-lg">
          {Object.entries(nounData.rules).map(([key, value]) => (
            <div key={key} className="mb-2">
              <span className="font-medium text-gray-800">{key}:</span>
              <span className="ml-2 text-gray-600">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Examples Section */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-3">Examples</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">French</th>
                <th className="border border-gray-300 px-4 py-2 text-left">English</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(nounData.examples).map(([french, english]) => (
                <tr key={french} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    {french}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {english}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderGenericData = (data: Record<string, any>, dataKey: string, title: string) => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data[dataKey] && Object.entries(data[dataKey]).map(([key, value]) => (
          <div key={key} className="p-4 border border-gray-300 rounded-lg">
            <div className="font-medium text-gray-800">{key}</div>
            <div className="text-gray-600">{String(value)}</div>
          </div>
        ))}
      </div>
      
      {data.rules && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Rules</h4>
          <div className="space-y-2">
            {Object.entries(data.rules).map(([rule, explanation]) => (
              <div key={rule} className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-800">{rule}</div>
                <div className="text-gray-600">{String(explanation)}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderNationalitiesL3 = (data: NationalitiesL3Data) => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Nationalities - Masculine & Feminine
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Masculine</h4>
          <div className="space-y-2">
            {Object.entries(data.masculine).map(([key, value]) => (
              <div key={key} className="p-3 border border-gray-300 rounded-lg">
                <div className="font-medium text-gray-800">{key}</div>
                <div className="text-gray-600">{value}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Feminine</h4>
          <div className="space-y-2">
            {Object.entries(data.feminine).map(([key, value]) => (
              <div key={key} className="p-3 border border-gray-300 rounded-lg">
                <div className="font-medium text-gray-800">{key}</div>
                <div className="text-gray-600">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Rules</h4>
        <div className="space-y-2">
          {Object.entries(data.rules).map(([rule, explanation]) => (
            <div key={rule} className="p-3 bg-gray-50 rounded-lg">
              <div className="font-medium text-gray-800">{rule}</div>
              <div className="text-gray-600">{explanation}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfessionsL3 = (data: ProfessionsL3Data) => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Professions - Masculine & Feminine
        </h3>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Formation Patterns</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(data.patterns).map(([pattern, examples]) => (
            <div key={pattern} className="p-4 border border-gray-300 rounded-lg">
              <div className="font-medium text-gray-800">{pattern}</div>
              <div className="text-gray-600 text-sm">{examples}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Masculine</h4>
          <div className="space-y-2">
            {Object.entries(data.masculine).map(([key, value]) => (
              <div key={key} className="p-3 border border-gray-300 rounded-lg">
                <div className="font-medium text-gray-800">{key}</div>
                <div className="text-gray-600">{value}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Feminine</h4>
          <div className="space-y-2">
            {Object.entries(data.feminine).map(([key, value]) => (
              <div key={key} className="p-3 border border-gray-300 rounded-lg">
                <div className="font-medium text-gray-800">{key}</div>
                <div className="text-gray-600">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Rules</h4>
        <div className="space-y-2">
          {Object.entries(data.rules).map(([rule, explanation]) => (
            <div key={rule} className="p-3 bg-gray-50 rounded-lg">
              <div className="font-medium text-gray-800">{rule}</div>
              <div className="text-gray-600">{explanation}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderIntonationL3 = (data: IntonationL3Data) => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          French Intonation
        </h3>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Intonation Patterns</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(data.patterns).map(([pattern, explanation]) => (
            <div key={pattern} className="p-4 border border-gray-300 rounded-lg">
              <div className="font-medium text-gray-800">{pattern}</div>
              <div className="text-gray-600">{explanation}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Examples</h4>
        <div className="space-y-3">
          {Object.entries(data.examples).map(([french, english]) => (
            <div key={french} className="p-4 border border-gray-300 rounded-lg">
              <div className="font-medium text-gray-800 text-lg">{french}</div>
              <div className="text-gray-600">{english}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Rules</h4>
        <div className="space-y-2">
          {Object.entries(data.rules).map(([rule, explanation]) => (
            <div key={rule} className="p-3 bg-gray-50 rounded-lg">
              <div className="font-medium text-gray-800">{rule}</div>
              <div className="text-gray-600">{explanation}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPoliteFormulasL2 = (data: PoliteFormulasL2Data) => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Polite Formulas
        </h3>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Formulas</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(data.formulas).map(([formula, explanation]) => (
            <div key={formula} className="p-4 border border-gray-300 rounded-lg">
              <div className="font-medium text-gray-800">{formula}</div>
              <div className="text-gray-600">{explanation}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Transformations</h4>
        <div className="space-y-3">
          {Object.entries(data.transformations).map(([pattern, rule]) => (
            <div key={pattern} className="p-4 border border-gray-300 rounded-lg">
              <div className="font-medium text-gray-800">{pattern}</div>
              <div className="text-gray-600">{rule}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Examples</h4>
        <div className="space-y-3">
          {Object.entries(data.examples).map(([type, example]) => (
            <div key={type} className="p-4 border border-gray-300 rounded-lg">
              <div className="font-medium text-gray-800">{type}</div>
              <div className="text-gray-600 text-lg">{example}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Rules</h4>
        <div className="space-y-2">
          {Object.entries(data.rules).map(([rule, explanation]) => (
            <div key={rule} className="p-3 bg-gray-50 rounded-lg">
              <div className="font-medium text-gray-800">{rule}</div>
              <div className="text-gray-600">{explanation}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (type) {
      case 'verb-conjugation':
        return renderVerbConjugation(data as VerbConjugation);
      case 'articles':
        return renderArticles(data as ArticleData);
      case 'pronouns':
        return renderPronouns(data as PronounData);
      case 'noun-gender':
        return renderNounGender(data as NounGenderData);
      case 'prepositions':
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Prepositions
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(data as Record<string, string>).map(([key, value]) => (
                <div key={key} className="p-4 border border-gray-300 rounded-lg">
                  <div className="font-medium text-gray-800">{key}</div>
                  <div className="text-gray-600">{value}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'days':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'days', 'Days of the Week');
      case 'months':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'months', 'Months of the Year');
      case 'time':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'expressions', 'Time Expressions');
      case 'family':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'members', 'Family Members');
      case 'directions':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'directions', 'Directions');
      case 'colors':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'colors', 'Colors');
      case 'letters':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'alphabet', 'French Alphabet');
      case 'sounds':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'sounds', 'French Sounds');
      case 'numbers':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'numbers', 'French Numbers');
      case 'languages':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'languages', 'Languages');
      case 'marital':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'status', 'Marital Status');
      case 'events':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'events', 'Events');
      case 'people':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'people', 'People');
      case 'concepts':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'concepts', 'Concepts');
      case 'introductions':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'phrases', 'Introduction Phrases');
      case 'personal-info-l3':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'phrases', 'Personal Information - Lesson 3');
      case 'nationalities-l3':
        return renderNationalitiesL3(data as NationalitiesL3Data);
      case 'professions-l3':
        return renderProfessionsL3(data as ProfessionsL3Data);
      case 'languages-l3':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderGenericData(data as Record<string, any>, 'languages', 'Languages - Lesson 3');
      case 'intonation-l3':
        return renderIntonationL3(data as IntonationL3Data);
      case 'polite-formulas-l2':
        return renderPoliteFormulasL2(data as PoliteFormulasL2Data);
      default:
        return <div>Unsupported grammar type</div>;
    }
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />
        
        <div className={`relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {renderContent()}
          </div>
          
          {/* Footer */}
          <div className="flex justify-end p-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
