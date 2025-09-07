'use client';

import { Lesson } from '@/lib/data/phrases';
import PhraseCard from './PhraseCard';

interface LessonPageProps {
  lesson: Lesson;
}

export default function LessonPage({ lesson }: LessonPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Lesson Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {lesson.title}
        </h1>
        <p className="text-xl text-gray-600">
          {lesson.description}
        </p>
      </div>

      {/* Phrases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lesson.phrases.map((phrase) => (
          <PhraseCard key={phrase.id} phrase={phrase} />
        ))}
      </div>

      {/* Lesson Footer */}
      <div className="mt-12 text-center">
        <p className="text-gray-500">
          Practice these phrases and use the speech buttons to improve your pronunciation!
        </p>
      </div>
    </div>
  );
}
