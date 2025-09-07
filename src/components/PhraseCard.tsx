'use client';

import { useState } from 'react';
import { FrenchPhrase } from '@/lib/data/phrases';
import { speechService } from '@/lib/utils/speech';

interface PhraseCardProps {
  phrase: FrenchPhrase;
}

export default function PhraseCard({ phrase }: PhraseCardProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);

  const handleSpeak = async (text: string, language: 'fr' | 'en') => {
    if (!speechService.isSupported()) {
      setSpeechError('Speech synthesis is not supported in your browser');
      return;
    }

    setIsSpeaking(true);
    setSpeechError(null);

    try {
      await speechService.speak(text, language);
    } catch (error) {
      setSpeechError(error instanceof Error ? error.message : 'Speech error occurred');
    } finally {
      setIsSpeaking(false);
    }
  };

  const handleStop = () => {
    speechService.stop();
    setIsSpeaking(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        {/* French Phrase */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {phrase.french}
          </h3>
          <button
            onClick={() => handleSpeak(phrase.french, 'fr')}
            disabled={isSpeaking}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.814L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.814a1 1 0 011.617.814zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
            {isSpeaking ? 'Speaking...' : 'Speak French'}
          </button>
        </div>

        {/* English Translation */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-2">
            {phrase.english}
          </p>
          <button
            onClick={() => handleSpeak(phrase.english, 'en')}
            disabled={isSpeaking}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed transition-colors"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.814L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.814a1 1 0 011.617.814zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
            {isSpeaking ? 'Speaking...' : 'Speak English'}
          </button>
        </div>

        {/* Stop Button */}
        {isSpeaking && (
          <div className="text-center">
            <button
              onClick={handleStop}
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Stop
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
