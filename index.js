// Function to check if a word is a palindrome
function isPalindrome(word) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare the cleaned word with its reversed version
  return cleanedWord === cleanedWord.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  1. Clean the word by removing non-alphanumeric characters and convert to lowercase.
  2. Reverse the cleaned word.
  3. Compare the cleaned word and its reversed version.
  4. If they are the same, return true, otherwise false.
*/

/*
  Add written explanation of your solution here
  - We clean the word by removing any characters that are not letters or numbers.
  - We then reverse the cleaned word and check if it's equal to the original cleaned word.
  - If they match, the word is a palindrome, otherwise it's not.
*/

module.exports = isPalindrome;

