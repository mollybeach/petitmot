'use client';

import { useState, useEffect } from 'react';
import { lessonGroups } from '@/lib/data/phrases';
import { speechService } from '@/lib/utils/speech';

interface GameCard {
  id: string;
  text: string;
  type: 'french' | 'english';
  phraseId: string;
  matched: boolean;
}

interface MatchingPair {
  french: string;
  english: string;
  phraseId: string;
}

export default function MatchingGame() {
  const [selectedLessonGroup, setSelectedLessonGroup] = useState<string>('');
  const [gameCards, setGameCards] = useState<GameCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<GameCard[]>([]);
  const [matches, setMatches] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  const [availablePhrases, setAvailablePhrases] = useState<MatchingPair[]>([]);
  const [speakingCards, setSpeakingCards] = useState<Set<string>>(new Set());
  const [speechError, setSpeechError] = useState<string | null>(null);

  // Get available lessons when lesson group changes
  useEffect(() => {
    if (selectedLessonGroup) {
      const group = lessonGroups.find(g => g.id === selectedLessonGroup);
      if (group) {
        const allPhrases: MatchingPair[] = [];
        group.lessons.forEach(lesson => {
          lesson.phrases.forEach(phrase => {
            allPhrases.push({
              french: phrase.french,
              english: phrase.english,
              phraseId: phrase.id
            });
          });
        });
        setAvailablePhrases(allPhrases);
      }
    }
  }, [selectedLessonGroup]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startGame = () => {
    if (!selectedLessonGroup) return;
    
    // Get phrases for the selected lesson group (limit to 6 pairs for playability)
    const selectedPhrases = availablePhrases.slice(0, 6);
    
    // Create cards for French and English
    const cards: GameCard[] = [];
    
    selectedPhrases.forEach((phrase, index) => {
      cards.push({
        id: `french-${index}`,
        text: phrase.french,
        type: 'french',
        phraseId: phrase.phraseId,
        matched: false
      });
      
      cards.push({
        id: `english-${index}`,
        text: phrase.english,
        type: 'english',
        phraseId: phrase.phraseId,
        matched: false
      });
    });
    
    // Shuffle the cards
    setGameCards(shuffleArray(cards));
    setSelectedCards([]);
    setMatches(0);
    setAttempts(0);
    setGameComplete(false);
  };

  const speakCard = async (card: GameCard) => {
    if (card.type === 'french') {
      setSpeakingCards(prev => new Set(prev).add(card.id));
      setSpeechError(null);
      
      try {
        await speechService.speak(card.text, 'fr');
      } catch (error) {
        setSpeechError(error instanceof Error ? error.message : 'Speech error occurred');
      } finally {
        setSpeakingCards(prev => {
          const newSet = new Set(prev);
          newSet.delete(card.id);
          return newSet;
        });
      }
    }
  };

  const handleCardClick = async (card: GameCard) => {
    if (card.matched || selectedCards.length === 2) return;
    
    // Speak the card if it's French
    await speakCard(card);
    
    const newSelectedCards = [...selectedCards, card];
    setSelectedCards(newSelectedCards);
    
    if (newSelectedCards.length === 2) {
      setAttempts(prev => prev + 1);
      
      // Check if it's a match
      const [card1, card2] = newSelectedCards;
      if (card1.phraseId === card2.phraseId && card1.type !== card2.type) {
        // It's a match!
        setTimeout(() => {
          setGameCards(prev => 
            prev.map(c => 
              c.phraseId === card1.phraseId ? { ...c, matched: true } : c
            )
          );
          setMatches(prev => prev + 1);
          setSelectedCards([]);
          
          // Check if game is complete
          if (matches + 1 === availablePhrases.slice(0, 6).length) {
            setGameComplete(true);
          }
        }, 1000);
      } else {
        // Not a match
        setTimeout(() => {
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setGameCards([]);
    setSelectedCards([]);
    setMatches(0);
    setAttempts(0);
    setGameComplete(false);
    setSelectedLessonGroup('');
    setSpeakingCards(new Set());
    setSpeechError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎮 Matching Game
          </h1>
          <p className="text-lg text-gray-600">
            Match French phrases with their English translations!
          </p>
        </div>

        {/* Game Setup */}
        {gameCards.length === 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Choose a Lesson to Play
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Lesson Group:
                </label>
                <select
                  value={selectedLessonGroup}
                  onChange={(e) => setSelectedLessonGroup(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Choose a lesson group...</option>
                  {lessonGroups.map(group => (
                    <option key={group.id} value={group.id}>
                      {group.title}
                    </option>
                  ))}
                </select>
              </div>
              
              {selectedLessonGroup && availablePhrases.length > 0 && (
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Ready to play with {Math.min(6, availablePhrases.length)} phrase pairs!
                  </p>
                  <button
                    onClick={startGame}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    🎯 Start Game
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Game Stats */}
        {gameCards.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center">
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{matches}</div>
                  <div className="text-sm text-gray-600">Matches</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{attempts}</div>
                  <div className="text-sm text-gray-600">Attempts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {attempts > 0 ? Math.round((matches / attempts) * 100) : 0}%
                  </div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  🔊 Click French cards to hear pronunciation
                </div>
                <button
                  onClick={resetGame}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  🔄 New Game
                </button>
              </div>
            </div>
            {speechError && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <div className="flex items-center">
                  <span className="mr-2">⚠️</span>
                  <span>Speech Error: {speechError}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Game Complete Message */}
        {gameComplete && (
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-lg p-8 mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2">🎉 Félicitations!</h2>
            <p className="text-xl mb-4">
              You completed the game in {attempts} attempts with {Math.round((matches / attempts) * 100)}% accuracy!
            </p>
            <button
              onClick={resetGame}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              🎮 Play Again
            </button>
          </div>
        )}

        {/* Game Cards */}
        {gameCards.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gameCards.map((card) => {
              const isSpeaking = speakingCards.has(card.id);
              return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className={`
                  relative p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 min-h-[120px] flex items-center justify-center text-center
                  ${card.matched 
                    ? 'bg-gradient-to-br from-green-400 to-green-500 text-white' 
                    : selectedCards.includes(card)
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-white'
                    : isSpeaking
                    ? 'bg-gradient-to-br from-orange-400 to-orange-500 text-white animate-pulse'
                    : card.type === 'french'
                    ? 'bg-gradient-to-br from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600'
                    : 'bg-gradient-to-br from-purple-400 to-purple-500 text-white hover:from-purple-500 hover:to-purple-600'
                  }
                  ${card.matched ? 'cursor-default' : 'hover:shadow-xl'}
                `}
              >
                {/* Card Type Indicator */}
                <div className="absolute top-2 right-2 text-xs font-semibold opacity-75">
                  {card.type === 'french' ? '🇫🇷' : '🇺🇸'}
                </div>
                
                {/* Speaking Indicator */}
                {isSpeaking && (
                  <div className="absolute top-2 left-2 text-xl animate-bounce">
                    🔊
                  </div>
                )}
                
                {/* Card Text */}
                <div className="font-medium text-sm leading-tight">
                  {card.text}
                </div>
                
                {/* Match Indicator */}
                {card.matched && (
                  <div className="absolute top-2 left-2 text-xl">
                    ✅
                  </div>
                )}
              </div>
              );
            })}
          </div>
        )}

        {/* How to Play */}
        {gameCards.length === 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📋 How to Play
            </h2>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">1️⃣</span>
                <p>Choose a lesson group to practice vocabulary from</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">2️⃣</span>
                <p>Click on cards to select them - French cards are blue 🇫🇷, English cards are purple 🇺🇸</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">3️⃣</span>
                <p>French cards will speak when clicked 🔊 - listen to improve your pronunciation!</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">4️⃣</span>
                <p>Match French phrases with their English translations</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">5️⃣</span>
                <p>Correct matches turn green ✅ and stay matched</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">6️⃣</span>
                <p>Try to match all pairs with the fewest attempts possible!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
