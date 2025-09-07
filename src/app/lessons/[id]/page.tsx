import { notFound } from 'next/navigation';
import { getLessonById, lessons } from '@/lib/data/phrases';
import LessonPage from '@/components/LessonPage';

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

  return <LessonPage lesson={lesson} />;
}

export function generateStaticParams() {
  return lessons.map((lesson: { id: string }) => ({
    id: lesson.id,
  }));
}
