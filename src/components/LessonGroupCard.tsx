'use client';

import Link from 'next/link';
import { LessonGroup } from '@/lib/data/phrases';
import { useState } from 'react';

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
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  const handleDescriptionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };
  
  return (
    <div className="card-french p-6">
      {/* Lesson Group Emoji */}
      <div className="text-center mb-3">
        <div className="text-4xl">
          {getLessonGroupEmoji(group.id)}
        </div>
      </div>
      
      <h3 className="heading-french-small mb-2">
        {group.title}
      </h3>
      
      {/* Collapsible Description */}
      <div className="mb-4">
        <button
          onClick={handleDescriptionClick}
          className="flex items-center justify-between w-full text-left english-text text-sm hover:text-pink-600 transition-colors"
        >
          <span className="flex-1">
            {isDescriptionExpanded ? 'Hide details' : 'Details'}
          </span>
          <svg 
            className={`w-4 h-4 transition-transform ${isDescriptionExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </button>
        
        {isDescriptionExpanded && (
          <div className="mt-2 english-text text-sm leading-relaxed">
            {group.description}
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <span className="english-text text-sm">
          {group.lessons.length} lessons • {totalPhrases} phrases
        </span>
        
        <Link href={`/lesson-groups/${group.id}`}>
          <div className="flex items-center text-pink-600 hover:text-pink-700 transition-colors">
            <span className="text-sm mr-2">Enter lesson</span>
            <svg 
              className="w-5 h-5" 
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
        </Link>
      </div>
    </div>
  );
}
