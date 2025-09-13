import { notFound } from 'next/navigation';
import { getLessonGroupById, lessonGroups } from '@/lib/data/phrases';
import LessonCard from '@/components/LessonCard';

interface LessonGroupPageProps {
  params: Promise<{ id: string; }>;
}

export default async function LessonGroup({ params }: LessonGroupPageProps) {
  const { id } = await params;
  const group = getLessonGroupById(id);

  if (!group) {
    notFound();
  }

  return (
    <div className="container-french">
      <div className="main-french">
        {/* Lesson Group Header */}
        <div className="text-center mb-8 w-full">
          <h1 className="heading-french-large mb-4">
            {group.title}
          </h1>
          <p className="english-text text-xl">
            {group.description}
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {group.lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>

        {/* Lesson Group Footer */}
        <div className="mt-12 text-center w-full">
          <p className="english-text">
            Practice these phrases and use the speech buttons to improve your pronunciation!
          </p>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return lessonGroups.map((group: { id: string }) => ({
    id: group.id,
  }));
}
