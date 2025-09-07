# French Learning App 🇫🇷

A Next.js 14 + TypeScript + React application for learning French phrases with interactive pronunciation features.

## Features

- **Interactive Phrase Learning**: Practice French phrases with English translations
- **Text-to-Speech**: Click buttons to hear French and English pronunciations
- **Organized Lessons**: Phrases grouped by topics (Family, Personal Info, Marital Status, Languages)
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, accessible interface with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Speech**: Web Speech API
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd petitmot

# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Home page
│   └── lessons/
│       └── [id]/
│           └── page.tsx    # Dynamic lesson pages
├── components/
│   ├── LessonCard.tsx      # Lesson preview card
│   ├── LessonPage.tsx      # Full lesson display
│   └── PhraseCard.tsx      # Individual phrase with speech
├── lib/
│   ├── data/
│   │   └── phrases.ts      # French phrases data
│   └── utils/
│       └── speech.ts       # Text-to-speech utilities
```

## Lessons Included

1. **Family & Children** - Talking about family and children
2. **Personal Information** - Introducing yourself and preferences
3. **Marital Status** - Relationship status vocabulary
4. **Languages** - Discussing languages you speak

## Speech Features

- **French Pronunciation**: Uses French voice when available
- **English Translation**: Speaks English translations
- **Stop Functionality**: Stop speech mid-sentence
- **Error Handling**: Graceful fallback when speech isn't supported

## Browser Support

- Modern browsers with Web Speech API support
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The app is ready to deploy to Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

## Contributing

Feel free to add more French phrases or improve the UI! The data structure in `src/lib/data/phrases.ts` makes it easy to add new lessons and phrases.

## License

MIT