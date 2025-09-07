import { lessons } from '@/lib/data/phrases';
import LessonCard from '@/components/LessonCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            🇫🇷 French Learning App
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Practice French phrases with pronunciation
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Choose a Lesson
          </h2>
          <p className="text-gray-600">
            Select a lesson below to start practicing French phrases. Each phrase includes 
            pronunciation buttons to help you learn the correct pronunciation.
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500">
          <p>Practice makes perfect! Bonne chance! 🍀</p>
        </div>
      </footer>
    </div>
  );
}
