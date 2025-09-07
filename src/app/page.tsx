import { lessons } from '@/lib/data/phrases';
import LessonCard from '@/components/LessonCard';

export default function Home() {
  return (
    <div className="container-french">
      <div className="main-french">
        <div className="mb-8 w-full">
          <h2 className="heading-french-medium mb-4">
            Choose a Lesson
          </h2>
          <p className="english-text">
            Select a lesson below to start practicing French phrases. Each phrase includes 
            pronunciation buttons to help you learn the correct pronunciation.
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
    </div>
  );
}
