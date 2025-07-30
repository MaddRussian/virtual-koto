# Koto Audio Setup Guide

## Getting Koto Sound Samples

### Option 1: Free Sources
1. **Freesound.org** - Search for "koto string" or "koto pluck"
   - Visit: https://freesound.org/search/?q=koto
   - Download individual string samples
   - Check licensing (many are Creative Commons)

2. **Musopen** - Classical music library
   - Visit: https://musopen.org/music/instrument/koto/
   - Look for koto recordings you can extract samples from

3. **Spitfire Audio LABS** - Free Koto library
   - Visit: https://labs.spitfireaudio.com/koto
   - Download the free koto library
   - Extract individual note samples

### Option 2: YouTube to Audio
1. Find koto performances on YouTube
2. Use a tool to extract short samples (for educational use only)
3. Cut into individual string samples

### Option 3: Record Your Own
If you have access to a koto, record each string being plucked individually.

## File Setup

1. **Create the sounds folder:**
   ```
   public/
   └── sounds/
       ├── string1.mp3
       ├── string2.mp3
       ├── string3.mp3
       ├── ...
       └── string13.mp3
   ```

2. **File naming convention:**
   - Use exactly: `string1.mp3`, `string2.mp3`, etc.
   - Format: MP3 or WAV (MP3 recommended for web)
   - Duration: 1-3 seconds per sample
   - Quality: 44.1kHz, 128-320kbps

3. **Testing:**
   - Start your app with `npm start`
   - Click on strings to test audio
   - Check browser console for any missing file errors

## Audio File Requirements

- **Format:** MP3 or WAV
- **Sample Rate:** 44.1kHz
- **Bitrate:** 128-320kbps
- **Duration:** 1-3 seconds per sample
- **Volume:** Normalized levels
- **Quality:** Clear, no background noise

## Troubleshooting

### No Sound Playing
1. Check browser console for errors
2. Verify file paths are correct
3. Ensure audio files are in `public/sounds/`
4. Check browser autoplay settings

### Missing Files
The app will log missing files to the console. Add the missing files to the `public/sounds/` folder.

### Browser Compatibility
- Modern browsers support MP3/WAV
- Some browsers require user interaction before playing audio
- Test in Chrome, Firefox, Safari

## Alternative: Use Web Audio API

If you can't find koto samples, you can generate simple tones:

```javascript
// In String.jsx, replace the audio element with:
const playTone = (frequency) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 1);
};
```

## Next Steps

1. Download koto samples from the sources above
2. Place them in `public/sounds/` with the correct naming
3. Test the app by clicking strings
4. Adjust volume levels if needed
5. Consider adding different tunings with different audio files
