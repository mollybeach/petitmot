'use client';

import { useState } from 'react';
import { FrenchPhrase } from '@/lib/data/phrases';
import { speechService } from '@/lib/utils/speech';
import { 
  verbConjugations, 
  articleData, 
  pronounData, 
  nounGenderData, 
  prepositionData,
  daysData,
  monthsData,
  timeData,
  familyData,
  directionsData,
  colorsData,
  lettersData,
  soundsData,
  numbersData,
  languagesData,
  maritalData,
  eventsData,
  peopleData,
  conceptsData,
  introductionsData,
  personalInfoL3Data,
  nationalitiesL3Data,
  professionsL3Data,
  languagesL3Data,
  intonationL3Data
} from '@/lib/data/grammar';

interface PhraseCardProps {
  phrase: FrenchPhrase;
  isFormal?: boolean;
  onOpenGrammar?: (title: string, type: 'verb-conjugation' | 'articles' | 'pronouns' | 'prepositions' | 'noun-gender' | 'days' | 'months' | 'time' | 'family' | 'directions' | 'colors' | 'letters' | 'sounds' | 'numbers' | 'languages' | 'marital' | 'events' | 'people' | 'concepts' | 'introductions' | 'personal-info-l3' | 'nationalities-l3' | 'professions-l3' | 'languages-l3' | 'intonation-l3', data: unknown) => void;
}

export default function PhraseCard({ phrase, isFormal = false, onOpenGrammar }: PhraseCardProps) {
  const [speakingStates, setSpeakingStates] = useState<{ [key: string]: boolean }>({});
  const [speechError, setSpeechError] = useState<string | null>(null);

  // Get the appropriate version based on formal/informal toggle
  const getDisplayText = () => {
    if (isFormal && phrase.formal) {
      return {
        french: phrase.formal.french,
        english: phrase.formal.english
      };
    }
    return {
      french: phrase.french,
      english: phrase.english
    };
  };

  const displayText = getDisplayText();

  const handleSpeak = async (text: string, language: 'fr' | 'en', buttonId: string) => {
    if (!speechService.isSupported()) {
      setSpeechError('Speech synthesis is not supported in your browser');
      return;
    }

    setSpeakingStates(prev => ({ ...prev, [buttonId]: true }));
    setSpeechError(null);

    try {
      await speechService.speak(text, language);
    } catch (error) {
      setSpeechError(error instanceof Error ? error.message : 'Speech error occurred');
    } finally {
      setSpeakingStates(prev => ({ ...prev, [buttonId]: false }));
    }
  };

  const handleGrammarClick = () => {
    if (!onOpenGrammar) return;

    switch (phrase.category) {
      case 'verbs':
        // Find the verb in our conjugations data
        const verbKey = Object.keys(verbConjugations).find(key => 
          phrase.french.toLowerCase().includes(key.toLowerCase())
        ) as keyof typeof verbConjugations;
        if (verbKey) {
          onOpenGrammar(`Verb: ${verbConjugations[verbKey].infinitive}`, 'verb-conjugation', verbConjugations[verbKey]);
        }
        break;
      case 'articles':
        onOpenGrammar('Indefinite Articles', 'articles', articleData.indefinite);
        break;
      case 'prepositions':
        onOpenGrammar('Prepositions', 'prepositions', prepositionData);
        break;
      case 'places':
      case 'transportation':
        // For places and transportation, detect gender based on article
        if (phrase.french.includes('une ')) {
          onOpenGrammar('Feminine Nouns', 'noun-gender', nounGenderData.feminine);
        } else {
          onOpenGrammar('Masculine Nouns', 'noun-gender', nounGenderData.masculine);
        }
        break;
      case 'personal':
        onOpenGrammar('Subject Pronouns', 'pronouns', pronounData.subject);
        break;
      case 'greetings':
      case 'farewells':
        onOpenGrammar('Subject Pronouns', 'pronouns', pronounData.subject);
        break;
      case 'countries':
        // For countries, show both masculine and feminine rules
        if (phrase.french.includes('le ')) {
          onOpenGrammar('Masculine Countries', 'noun-gender', nounGenderData.masculine);
        } else if (phrase.french.includes('la ')) {
          onOpenGrammar('Feminine Countries', 'noun-gender', nounGenderData.feminine);
        } else {
          onOpenGrammar('Country Gender Rules', 'noun-gender', nounGenderData.masculine);
        }
        break;
      case 'days':
        onOpenGrammar('Days of the Week', 'days', daysData);
        break;
      case 'months':
        onOpenGrammar('Months of the Year', 'months', monthsData);
        break;
      case 'time':
        onOpenGrammar('Time Expressions', 'time', timeData);
        break;
      case 'family':
        onOpenGrammar('Family Members', 'family', familyData);
        break;
      case 'directions':
        onOpenGrammar('Directions', 'directions', directionsData);
        break;
      case 'colors':
        onOpenGrammar('Colors', 'colors', colorsData);
        break;
      case 'letters':
        onOpenGrammar('French Alphabet', 'letters', lettersData);
        break;
      case 'sounds':
        onOpenGrammar('French Sounds', 'sounds', soundsData);
        break;
      case 'numbers':
        onOpenGrammar('French Numbers', 'numbers', numbersData);
        break;
      case 'languages':
        onOpenGrammar('Languages', 'languages', languagesData);
        break;
      case 'marital':
        onOpenGrammar('Marital Status', 'marital', maritalData);
        break;
      case 'events':
        onOpenGrammar('Events', 'events', eventsData);
        break;
      case 'people':
        onOpenGrammar('People', 'people', peopleData);
        break;
      case 'concepts':
        onOpenGrammar('Concepts', 'concepts', conceptsData);
        break;
      case 'introductions':
        onOpenGrammar('Introduction Phrases', 'introductions', introductionsData);
        break;
      case 'personal-info-l3':
        onOpenGrammar('Personal Information - Lesson 3', 'personal-info-l3', personalInfoL3Data);
        break;
      case 'nationalities-l3':
        onOpenGrammar('Nationalities - Masculine & Feminine', 'nationalities-l3', nationalitiesL3Data);
        break;
      case 'professions-l3':
        onOpenGrammar('Professions - Masculine & Feminine', 'professions-l3', professionsL3Data);
        break;
      case 'languages-l3':
        onOpenGrammar('Languages - Lesson 3', 'languages-l3', languagesL3Data);
        break;
      case 'intonation-l3':
        onOpenGrammar('French Intonation', 'intonation-l3', intonationL3Data);
        break;
      default:
        // For other categories, show subject pronouns as default
        onOpenGrammar('Subject Pronouns', 'pronouns', pronounData.subject);
        break;
    }
  };

  const shouldShowGrammarButton = () => {
    // Show grammar button for ALL categories
    return true;
  };


  return (
    <div className="phrase-card-french">
      <div className="space-y-4">
        {/* Emoji Header */}
        {phrase.emoji && (
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">
              {phrase.emoji}
            </div>
          </div>
        )}
        
        {/* French Phrase */}
        <div className="text-center">
          <div className="mb-4">
            {displayText.french.split('\n\n').map((part, index) => {
              const buttonId = `${phrase.id}-${index}`;
              const isThisButtonSpeaking = speakingStates[buttonId] || false;
              
              return (
                <div key={index} className="mb-4">
                <h3 className="french-text mb-2">
                  {part}
                </h3>
                <button
                  onClick={() => handleSpeak(part, 'fr', buttonId)}
                  disabled={isThisButtonSpeaking}
                  className="btn-french inline-flex items-center px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <svg 
                      className="w-4 h-4 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.814L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.814a1 1 0 011.617.814zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                    </svg>
                    {isThisButtonSpeaking ? 'Speaking...' : 'Speak French'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* English Translation */}
        <div className="text-center">
          {displayText.english.split('\n\n').map((part, index) => (
            <p key={index} className="english-text mb-2">
              {part}
            </p>
          ))}
        </div>


        {/* Grammar Button */}
        {shouldShowGrammarButton() && onOpenGrammar && (
          <div className="text-center mt-4">
            <button
              onClick={handleGrammarClick}
              className="btn-french-secondary inline-flex items-center px-4 py-2"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Grammar
            </button>
          </div>
        )}

        {/* Error Message */}
        {speechError && (
          <div className="text-center">
            <p className="text-red-600 text-sm bg-red-50 p-2 rounded">
              {speechError}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
