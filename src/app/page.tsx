import { lessons } from '@/lib/data/phrases';
import LessonCard from '@/components/LessonCard';
import Image from 'next/image';

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

      {/* Left Side Images */}
      <div className="hidden lg:flex flex-col space-y-4 absolute -left-16 top-1/2 transform -translate-y-1/2">
        <Image 
          src="https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1627669562/hairgirl_adatvb.jpg"
          alt="Hair styling"
          width={120}
          height={120}
          className="side-image rounded-lg border-2 border-white shadow-md"
        />
        <Image 
          src="https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1627669635/victoriancrest_qg1wyx.svg"
          alt="Victorian Crest"
          width={120}
          height={120}
          className="side-image rounded-lg border-2 border-white shadow-md"
        />
        <Image 
          src="https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1627669445/lookingbackgirl_u5ssmo.jpg"
          alt="Looking back girl"
          width={120}
          height={120}
          className="side-image rounded-lg border-2 border-white shadow-md"
        />
      </div>

      {/* Right Side Images */}
      <div className="hidden lg:flex flex-col space-y-4 absolute -right-16 top-1/2 transform -translate-y-1/2">
        <Image 
          src="https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1627669061/crosswalk_whiqif.png"
          alt="Nails"
          width={120}
          height={120}
          className="side-image rounded-lg border-2 border-white shadow-md"
        />
        <Image 
          src="https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1627669667/windowdressgirl_zrdxmf.jpg"
          alt="Window Dress Girl"
          width={120}
          height={120}
          className="side-image rounded-lg border-2 border-white shadow-md"
        />
        <Image 
          src="https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1627669602/eiffeltowergirl_aiasuh.jpg"
          alt="Eiffel Tower Girl"
          width={120}
          height={120}
          className="side-image rounded-lg border-2 border-white shadow-md"
        />
      </div>
    </div>
  );
}
