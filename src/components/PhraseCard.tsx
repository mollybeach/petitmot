'use client';

import { useState } from 'react';
import { FrenchPhrase } from '@/lib/data/phrases';
import { speechService } from '@/lib/utils/speech';

interface PhraseCardProps {
  phrase: FrenchPhrase;
  isFormal?: boolean;
}

export default function PhraseCard({ phrase, isFormal = false }: PhraseCardProps) {
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


  return (
    <div className="phrase-card-french">
      <div className="space-y-4">
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
