'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="nav-french">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1627668649/verticalheadcrest_zegh6d.svg" 
              alt="French Learning Logo" 
              width={32}
              height={32}
              className="mr-2"
            />
            <h1 className="heading-french-medium">
              Petitmot 🇫🇷
            </h1>
          </Link>

          {/* Cosmopolite Link */}
          <a 
            href="https://cosmopolite.hachettefle.fr/cosmopolite-1_livre-de-l-eleve_fr.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center text-pink-600 hover:text-pink-700 transition-colors font-medium"
          >
            📖 Cosmopolite
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`nav-link-french ${pathname === '/' ? 'font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/lesson-groups/lesson_1" 
              className={`nav-link-french ${pathname.includes('/lesson-groups') || pathname.includes('/lessons') ? 'font-semibold' : ''}`}
            >
              Lessons
            </Link>
            <Link 
              href="/matching-game" 
              className={`nav-link-french ${pathname === '/matching-game' ? 'font-semibold' : ''}`}
            >
              Matching Game
            </Link>
            <Link 
              href="/about" 
              className="nav-link-french"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="nav-link-french"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="nav-link-french">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
