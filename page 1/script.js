// Array of translations for "Lost in Translation"
const translations = [
  "Perdido en la Traducción", // Spanish
  "失落在翻译中", // Chinese
  "Perdu dans la traduction", // French
  "Verloren in der Übersetzung", // German
  "Perso nella traduzione", // Italian
  "Perdido na Tradução", // Portuguese
  "翻訳の迷子", // Japanese
  "Затерянный в переводе", // Russian,
  "Tradu verloren", // Dutch
  "Hilang dalam Terjemahan", // Indonesian
  "अनुवाद में खो गया", // Hindi
  "Tradução Perdue", // Romanian
  "ترجمہ میں کھو گیا", // Urdu
  "Preklad sa stratil", // Slovak
  "Fordítás Elveszett" // Hungarian
];

// Select the text element
const mainText = document.getElementById('main-text');

// Create a flag to prevent overlapping transitions
let isHovering = false;

// Change text on hover by cycling through the translations
mainText.addEventListener('mouseover', () => {
  if (isHovering) return; // Prevent starting a new cycle if one is active
  isHovering = true;
  
  const randomIndex = Math.floor(Math.random() * translations.length);
  mainText.textContent = translations[randomIndex];
  

  setTimeout(() => {
    if (isHovering) {
      const nextIndex = Math.floor(Math.random() * translations.length);
      mainText.textContent = translations[nextIndex];
    }
  }, 500); 
});


mainText.addEventListener('mouseout', () => {
  mainText.textContent = 'Lost in Translation';
  isHovering = false; 
});

