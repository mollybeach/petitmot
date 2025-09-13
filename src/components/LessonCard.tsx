import Link from 'next/link';
import { Lesson } from '@/lib/data/phrases';

interface LessonCardProps {
  lesson: Lesson;
}

// Function to get lesson emoji based on lesson ID
const getLessonEmoji = (lessonId: string): string => {
  const emojiMap: { [key: string]: string } = {
    'transportation': '🚗',
    'greetings-farewells': '👋',
    'time-calendar': '📅',
    'family-children': '👨‍👩‍👧‍👦',
    'directions': '🧭',
    'personal-info': '👤',
    'places': '🏠',
    'marital-status': '💍',
    'countries': '🌍',
    'languages': '🗣️',
    'verb-conjugations': '📝',
    'indefinite-articles': '📄',
    'french-letters': '🔤',
    'sound-practice': '🎵',
    'french-numbers': '🔢',
    'colors': '🎨',
    'spatial-prepositions': '📍',
    'prepositions': '🔗'
  };
  return emojiMap[lessonId] || '📚';
};

export default function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Link href={`/lessons/${lesson.id}`}>
      <div className="card-french p-6 cursor-pointer">
        {/* Lesson Emoji */}
        <div className="text-center mb-3">
          <div className="text-3xl">
            {getLessonEmoji(lesson.id)}
          </div>
        </div>
        
        <h3 className="heading-french-small mb-2">
          {lesson.title}
        </h3>
        <p className="english-text mb-4">
          {lesson.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="english-text text-sm">
            {lesson.phrases.length} phrases
          </span>
          <svg 
            className="w-5 h-5" 
            style={{ color: 'var(--salon-pink)' }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
