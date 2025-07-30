// Audio utility functions for the virtual koto

// List of expected audio files for each string
export const KOTO_SOUNDS = {
  1: '/sounds/string1.mp3',
  2: '/sounds/string2.mp3',
  3: '/sounds/string3.mp3',
  4: '/sounds/string4.mp3',
  5: '/sounds/string5.mp3',
  6: '/sounds/string6.mp3',
  7: '/sounds/string7.mp3',
  8: '/sounds/string8.mp3',
  9: '/sounds/string9.mp3',
  10: '/sounds/string10.mp3',
  11: '/sounds/string11.mp3',
  12: '/sounds/string12.mp3',
  13: '/sounds/string13.mp3',
};

// Hirajoshi tuning frequencies (approximate)
export const HIRAJOSHI_FREQUENCIES = {
  1: 220.00,  // A3
  2: 246.94,  // B3
  3: 277.18,  // C#4
  4: 329.63,  // E4
  5: 369.99,  // F#4
  6: 415.30,  // G#4
  7: 493.88,  // B4
  8: 554.37,  // C#5
  9: 659.25,  // E5
  10: 739.99, // F#5
  11: 830.61, // G#5
  12: 987.77, // B5
  13: 1108.73, // C#6
};

// Preload all audio files
export const preloadAudio = () => {
  const audioElements = [];

  Object.values(KOTO_SOUNDS).forEach((src) => {
    const audio = new Audio();
    audio.src = src;
    audio.preload = 'auto';
    audioElements.push(audio);
  });

  return audioElements;
};

// Play a specific string sound
export const playStringSound = (stringNumber) => {
  const audio = new Audio(KOTO_SOUNDS[stringNumber]);

  audio.play().catch((error) => {
    console.warn(`Could not play string ${stringNumber} sound:`, error);
    // Fallback to generated tone
    playGeneratedTone(stringNumber);
  });

  return audio;
};

// Fallback: Generate a tone using Web Audio API
export const playGeneratedTone = (stringNumber) => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Use Hirajoshi frequencies
    const frequency = HIRAJOSHI_FREQUENCIES[stringNumber] || 440;
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    // Create a more koto-like envelope
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1.5);

    console.log(`Playing generated tone for string ${stringNumber} at ${frequency}Hz`);
  } catch (error) {
    console.warn('Web Audio API not supported or failed:', error);
  }
};

// Check if audio files exist
export const checkAudioFiles = async () => {
  const missingFiles = [];

  for (const [stringNum, path] of Object.entries(KOTO_SOUNDS)) {
    try {
      const response = await fetch(path, { method: 'HEAD' });
      if (!response.ok) {
        missingFiles.push(stringNum);
      }
    } catch (error) {
      missingFiles.push(stringNum);
    }
  }

  return missingFiles;
};
