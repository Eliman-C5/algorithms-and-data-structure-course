//RETRY

// In Java example, they are compared based on ascii values of characters
// This could be a good approach too, but continue with courses and try this way at the end

const orderString = (str: string) => {
  //Split string into array of characters, then sort them alphabetically, then join them back into a string
  //This way we can compare strings with the same characters in different order
  return str.split("").sort().join("");
};

const getAnagrams = (words: string[]) => {
  const anagrams = new Map();

  for (let i = 0; i < words.length; i++) {
    const sortedWord = orderString(words[i]);

    if (anagrams.has(sortedWord)) {
      anagrams.get(sortedWord).push(words[i]);
    } else {
      anagrams.set(sortedWord, [words[i]]);
    }
  }

  return anagrams;
};
