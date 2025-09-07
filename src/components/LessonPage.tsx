'use client';

import { Lesson } from '@/lib/data/phrases';
import PhraseCard from './PhraseCard';

interface LessonPageProps {
  lesson: Lesson;
}

export default function LessonPage({ lesson }: LessonPageProps) {
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
        </div>

        {/* Phrases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {lesson.phrases.map((phrase) => (
            <PhraseCard key={phrase.id} phrase={phrase} />
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
