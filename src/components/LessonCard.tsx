import Link from 'next/link';
import { Lesson } from '@/lib/data/phrases';

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Link href={`/lessons/${lesson.id}`}>
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {lesson.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {lesson.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {lesson.phrases.length} phrases
          </span>
          <svg 
            className="w-5 h-5 text-blue-600" 
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
