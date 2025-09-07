import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Petitmot French Learning App",
  description: "Learn about Petitmot, the French learning application designed to help you master French phrases with pronunciation.",
};

export default function AboutPage() {
  return (
    <div className="container-french">
      <div className="main-french">
        <div className="mb-8 w-full">
          <h1 className="heading-french-large mb-6">About Petitmot 🇫🇷</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="phrase-card-french p-6">
              <h2 className="heading-french-medium mb-4">Our Mission</h2>
              <p className="english-text mb-4">
                Petitmot is designed to make learning French accessible, enjoyable, and effective. 
                We believe that mastering a language starts with understanding its rhythm, pronunciation, 
                and everyday expressions.
              </p>
              <p className="english-text">
                Our interactive approach combines visual learning with audio pronunciation, 
                helping you build confidence in speaking French from day one.
              </p>
            </div>

            <div className="phrase-card-french p-6">
              <h2 className="heading-french-medium mb-4">Why Choose Petitmot?</h2>
              <ul className="english-text space-y-2">
                <li>• Interactive pronunciation with text-to-speech</li>
                <li>• Structured lessons from basics to advanced</li>
                <li>• Beautiful, salon-inspired design</li>
                <li>• Practice with real French phrases</li>
                <li>• Learn at your own pace</li>
              </ul>
            </div>
          </div>

          <div className="phrase-card-french p-6 mb-8">
            <h2 className="heading-french-medium mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl leading-none">📚</span>
                </div>
                <h3 className="heading-french-small mb-2">Choose a Lesson</h3>
                <p className="english-text text-sm">
                  Select from our curated collection of French lessons, 
                  each focusing on specific topics and vocabulary.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl leading-none">🎧</span>
                </div>
                <h3 className="heading-french-small mb-2">Listen & Learn</h3>
                <p className="english-text text-sm">
                  Use our pronunciation buttons to hear native-like French 
                  pronunciation for every phrase.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl leading-none">💬</span>
                </div>
                <h3 className="heading-french-small mb-2">Practice Speaking</h3>
                <p className="english-text text-sm">
                  Repeat the phrases and practice your pronunciation 
                  to build confidence in real conversations.
                </p>
              </div>
            </div>
          </div>

          <div className="phrase-card-french p-6">
            <h2 className="heading-french-medium mb-4">About the Creator</h2>
            <p className="english-text mb-4">
              Petitmot was created by mollybeach, a passionate language learner and developer 
              who understands the challenges of mastering French pronunciation and conversation skills.
            </p>
            <p className="english-text">
              The app draws inspiration from the elegant aesthetics of French salon culture, 
              creating a beautiful and immersive learning environment that makes studying French 
              a delightful experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
