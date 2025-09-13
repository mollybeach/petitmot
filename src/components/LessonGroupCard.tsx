import Link from 'next/link';
import { LessonGroup } from '@/lib/data/phrases';

interface LessonGroupCardProps {
  group: LessonGroup;
}

// Function to get lesson group emoji based on group ID
const getLessonGroupEmoji = (groupId: string): string => {
  const emojiMap: { [key: string]: string } = {
    'lesson_1': '📚',
    'lesson_2': '📖',
    'lesson_3': '📝',
    'lesson_4': '📋',
    'lesson_5': '📄'
  };
  return emojiMap[groupId] || '📚';
};

export default function LessonGroupCard({ group }: LessonGroupCardProps) {
  const totalPhrases = group.lessons.reduce((total, lesson) => total + lesson.phrases.length, 0);
  
  return (
    <Link href={`/lesson-groups/${group.id}`}>
      <div className="card-french p-6 cursor-pointer">
        {/* Lesson Group Emoji */}
        <div className="text-center mb-3">
          <div className="text-4xl">
            {getLessonGroupEmoji(group.id)}
          </div>
        </div>
        
        <h3 className="heading-french-small mb-2">
          {group.title}
        </h3>
        
        <p className="english-text mb-4">
          {group.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="english-text text-sm">
            {group.lessons.length} lessons • {totalPhrases} phrases
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
