export class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private frenchVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      
      // Load voices when they become available
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    
    this.voices = this.synth.getVoices();
    
    // Try to find a French voice
    this.frenchVoice = this.voices.find(voice => 
      voice.lang.startsWith('fr') || 
      voice.name.toLowerCase().includes('french') ||
      voice.name.toLowerCase().includes('français')
    ) || this.voices.find(voice => voice.lang.startsWith('fr')) || null;
  }

  speak(text: string, language: 'fr' | 'en' = 'fr'): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.synth) {
        reject(new Error('Speech synthesis not supported'));
        return;
      }

      // Cancel any ongoing speech
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set voice based on language
      if (language === 'fr' && this.frenchVoice) {
        utterance.voice = this.frenchVoice;
      } else if (language === 'en') {
        const englishVoice = this.voices.find(voice => voice.lang.startsWith('en'));
        if (englishVoice) {
          utterance.voice = englishVoice;
        }
      }

      // Set language
      utterance.lang = language === 'fr' ? 'fr-FR' : 'en-US';
      
      // Set speech parameters
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onend = () => resolve();
      utterance.onerror = (event) => reject(new Error(`Speech error: ${event.error}`));

      this.synth.speak(utterance);
    });
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }
}

// Create a singleton instance
export const speechService = new SpeechService();
