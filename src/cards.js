const cards = [
    // Normal cards (values from 0 to 9 for each color)
  { value: 0, color: 'red', isWild: false, isAction: false },
  { value: 1, color: 'red', isWild: false, isAction: false },
  { value: 2, color: 'red', isWild: false, isAction: false },
  { value: 3, color: 'red', isWild: false, isAction: false },
  { value: 4, color: 'red', isWild: false, isAction: false },
  { value: 5, color: 'red', isWild: false, isAction: false },
  { value: 6, color: 'red', isWild: false, isAction: false },
  { value: 7, color: 'red', isWild: false, isAction: false },
  { value: 8, color: 'red', isWild: false, isAction: false },
  { value: 9, color: 'red', isWild: false, isAction: false },

  { value: 0, color: 'yellow', isWild: false, isAction: false },
  { value: 1, color: 'yellow', isWild: false, isAction: false },
  { value: 2, color: 'yellow', isWild: false, isAction: false },
  { value: 3, color: 'yellow', isWild: false, isAction: false },
  { value: 4, color: 'yellow', isWild: false, isAction: false },
  { value: 5, color: 'yellow', isWild: false, isAction: false },
  { value: 6, color: 'yellow', isWild: false, isAction: false },
  { value: 7, color: 'yellow', isWild: false, isAction: false },
  { value: 8, color: 'yellow', isWild: false, isAction: false },
  { value: 9, color: 'yellow', isWild: false, isAction: false },

  { value: 0, color: 'blue', isWild: false, isAction: false },
  { value: 1, color: 'blue', isWild: false, isAction: false },
  { value: 2, color: 'blue', isWild: false, isAction: false },
  { value: 3, color: 'blue', isWild: false, isAction: false },
  { value: 4, color: 'blue', isWild: false, isAction: false },
  { value: 5, color: 'blue', isWild: false, isAction: false },
  { value: 6, color: 'blue', isWild: false, isAction: false },
  { value: 7, color: 'blue', isWild: false, isAction: false },
  { value: 8, color: 'blue', isWild: false, isAction: false },
  { value: 9, color: 'blue', isWild: false, isAction: false },

  { value: 0, color: 'green', isWild: false, isAction: false },
  { value: 1, color: 'green', isWild: false, isAction: false },
  { value: 2, color: 'green', isWild: false, isAction: false },
  { value: 3, color: 'green', isWild: false, isAction: false },
  { value: 4, color: 'green', isWild: false, isAction: false },
  { value: 5, color: 'green', isWild: false, isAction: false },
  { value: 6, color: 'green', isWild: false, isAction: false },
  { value: 7, color: 'green', isWild: false, isAction: false },
  { value: 8, color: 'green', isWild: false, isAction: false },
  { value: 9, color: 'green', isWild: false, isAction: false },

  // Action cards (color-specific)
  { value: 2, color: 'red', isWild: false, isAction: true }, // Draw 2
  { value: 0, color: 'red', isWild: false, isAction: true },  // Skip
  { value: -1, color: 'red', isWild: false, isAction: true }, // Reverse Turns
  
  { value: 2, color: 'yellow', isWild: false, isAction: true },
  { value: 0, color: 'yellow', isWild: false, isAction: true },
  { value: -1, color: 'yellow', isWild: false, isAction: true },
  
  { value: 2, color: 'blue', isWild: false, isAction: true },
  { value: 0, color: 'blue', isWild: false, isAction: true },
  { value: -1, color: 'blue', isWild: false, isAction: true },

  { value: 2, color: 'green', isWild: false, isAction: true },
  { value: 0, color: 'green', isWild: false, isAction: true },
  { value: -1, color: 'green', isWild: false, isAction: true },

  // Wild cards
  { value: 4, color: null, isWild: true, isAction: true },  // Draw 4
  { value: 10, color: null, isWild: true, isAction: true }, // Wild Color Change
] 
export default cards