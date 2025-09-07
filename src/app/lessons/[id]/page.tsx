import { notFound } from 'next/navigation';
import { getLessonById } from '@/lib/data/phrases';
import LessonPage from '@/components/LessonPage';
import Link from 'next/link';

interface LessonPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Lesson({ params }: LessonPageProps) {
  const { id } = await params;
  const lesson = getLessonById(id);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
                Back to Lessons
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              🇫🇷 French Learning
            </h1>
          </div>
        </div>
      </header>

      {/* Lesson Content */}
      <LessonPage lesson={lesson} />
    </div>
  );
}

export function generateStaticParams() {
  const { lessons } = require('@/lib/data/phrases');
  return lessons.map((lesson: { id: string }) => ({
    id: lesson.id,
  }));
}
