// god I hope there isn't a typo
const DICT = {
  'A': ".-",
  'B': "-...",
  'C': "-.-.",
  'D': "-..",
  'E': ".",
  'F': "..-.",
  'G': "--.",
  'H': "....",
  'I': "..",
  'J': ".---",
  'K': "-.-",
  'L': ".-..",
  'M': "--",
  'N': "-.",
  'O': "---",
  'P': ".--.",
  'Q': "--.-",
  'R': ".-.",
  'S': "...",
  'T': "-",
  'U': "..-",
  'V': "...-",
  'W': ".--",
  'X': "-..-",
  'Y': "-.--",
  'Z': "--..",
  '1': ".----",
  '2': "..---",
  '3': "...--",
  '4': "....-",
  '5': ".....",
  '6': "-....",
  '7': "--...",
  '8': "---..",
  '9': "----.",
  '0': "-----",
  '.': ".-.-.-",
  ',': "--..--",
  '?': "..--..",
  '\'': ".----.",
  '!': "-.-.--",
  '/': "-..-.",
  '(': "-.--.",
  ')': "-.--.-",
  '&': ".-...",
  ':': "---...",
  ';': "-.-.-.",
  '=': "-...-",
  '+': ".-.-.",
  '-': "-....-",
  '_': "..--.-",
  '"': ".-..-.",
  '$': "...-..-",
  '@': ".--.-.",
};
const DIT = 1;
const DAH = 3;
const SPACE = 1;
const LETTER = 3;
const WORD = 7;

function vibrate (morse, time, strength) {
  
  const dit = time * DIT;
  const dah = time * DAH;
  const space = time * SPACE;
  const letter = time * LETTER;
  const word = time * WORD;
  
  var chain = Promise.resolve();
  for (const i in morse) {
    const char = morse [i];
    
    if (char === '.') {
      
      chain = chain.then (() => {
        
        Bangle.buzz (dit, strength);
      });
      
      chain = chain.then (() => {
        
        Bangle.buzz (space, strength);
      });
    } else if (char === '-') {
      
      chain = chain.then (() => {
        
        Bangle.buzz (dah, strength);
      });
      
      chain = chain.then (() => {
        
        Bangle.buzz (space, strength);
      });
    } else if (char === ' ') {
      
      chain = chain.then (() => {
        
        Bangle.buzz (letter, strength);
      });
    } else if (char === '/') {
      
      chain = chain.then (() => {
        
        Bangle.buzz (word, strength);
      });
    }
  }
  
  return (chain);
}

exports.transmit = function (message, time, strength) {
  
  var msg = "";
  for (const i in message) {
    const char = message [i].toUpperCase();
    
    if (char === ' ') {
      
      msg = msg + '/';
      continue;
    }
    
    const pattern = DICT [char];
    if (pattern === undefined) {
      
      return (Promise.reject ("No such character " + char));
    }
    
    msg = msg + pattern + ' ';
  }
  
  return (vibrate (msg, time, strength));
};
