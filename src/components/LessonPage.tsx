'use client';

import { useState } from 'react';
import { Lesson } from '@/lib/data/phrases';
import PhraseCard from './PhraseCard';

interface LessonPageProps {
  lesson: Lesson;
}

export default function LessonPage({ lesson }: LessonPageProps) {
  const [isFormal, setIsFormal] = useState(false);

  // Check if any phrases have formal versions
  const hasFormalVersions = lesson.phrases.some(phrase => phrase.formal);

  return (
    <div className="container-french">
      <div className="main-french">
        {/* Lesson Header */}
        <div className="text-center mb-8 w-full">
          <h1 className="heading-french-large mb-4">
            {lesson.title}
          </h1>
          <p className="english-text text-xl">
            {lesson.description}
          </p>
          
          {/* Formal/Informal Toggle */}
          {hasFormalVersions && (
            <div className="mt-6 flex items-center justify-center space-x-4">
              <span className={`english-text ${!isFormal ? 'font-semibold' : ''}`}>
                Informal (Tu)
              </span>
              <button
                onClick={() => setIsFormal(!isFormal)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                  isFormal ? 'bg-pink-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isFormal ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`english-text ${isFormal ? 'font-semibold' : ''}`}>
                Formal (Vous)
              </span>
            </div>
          )}
        </div>

        {/* Phrases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {lesson.phrases.map((phrase) => (
            <PhraseCard 
              key={phrase.id} 
              phrase={phrase} 
              isFormal={isFormal}
            />
          ))}
        </div>

        {/* Lesson Footer */}
        <div className="mt-12 text-center w-full">
          <p className="english-text">
            Practice these phrases and use the speech buttons to improve your pronunciation!
          </p>
        </div>
      </div>
    </div>
  );
}
