'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className="nav-french">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {isHomePage ? (
          // Home page header
          <div className="flex items-center justify-center mb-2">
            <Image 
              src="https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1627668880/skeletoncrest_t9zecb.svg" 
              alt="French Learning Logo" 
              width={48}
              height={48}
              className="mr-3"
            />
            <h1 className="heading-french-large text-center">
              🇫🇷 French Learning App
            </h1>
          </div>
        ) : (
          // Other pages header
          <div className="flex items-center justify-between">
            <div>
              <Link 
                href="/" 
                className="nav-link-french inline-flex items-center"
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
            <div className="flex items-center">
              <Image 
                src="https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1627668880/skeletoncrest_t9zecb.svg" 
                alt="French Learning Logo" 
                width={40}
                height={40}
                className="mr-3"
              />
              <h1 className="heading-french-medium">
                🇫🇷 French Learning
              </h1>
            </div>
          </div>
        )}
        
        {isHomePage && (
          <p className="text-center english-text">
            Practice French phrases with pronunciation
          </p>
        )}
      </div>
    </header>
  );
}
