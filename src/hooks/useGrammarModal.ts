import { useState } from 'react';

interface GrammarModalData {
  title: string;
  type: 'verb-conjugation' | 'articles' | 'pronouns' | 'prepositions' | 'noun-gender' | 'days' | 'months' | 'time' | 'family' | 'directions' | 'colors' | 'letters' | 'sounds' | 'numbers' | 'languages' | 'marital' | 'events' | 'people' | 'concepts' | 'introductions' | 'personal-info-l3' | 'nationalities-l3' | 'professions-l3' | 'languages-l3' | 'intonation-l3' | 'polite-formulas-l2' | 'classification-where' | 'classification-when' | 'classification-what' | 'classification-who' | 'dialogue-completion' | 'pronunciation-stress' | 'conversation-practice' | 'cross-cultural' | 'cultural-assessment' | 'verb-etre-practice' | 'classification-why' | 'questions' | 'francophone-program' | 'profession-sentences' | 'days-l3' | 'months-l3';
  data: unknown;
}

export function useGrammarModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<GrammarModalData | null>(null);

  const openModal = (title: string, type: GrammarModalData['type'], data: unknown) => {
    setModalData({ title, type, data });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Keep modalData for smooth transition
    setTimeout(() => setModalData(null), 300);
  };

  return {
    isOpen,
    modalData,
    openModal,
    closeModal
  };
}
