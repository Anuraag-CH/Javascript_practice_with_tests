/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // Remove spaces
  str1 = ignoreSpacesAndConvertToLower(str1)
  str2 = ignoreSpacesAndConvertToLower(str2)

  if (str1.length != str2.length) {
    return false
  }
  if (str1.length == 0 && str2.length == 0) {
    return true
  }
  //step 1 is to count the number of individual letters

  str1LetterCount = getLetterCount(str1)
  str2LetterCount = getLetterCount(str2)


  for (key in str1LetterCount) {
    if (str1LetterCount[key] != str2LetterCount[key]) {
      return false
    }
  }

  return true


}

function ignoreSpacesAndConvertToLower(str) {
  // Remove spaces
  const stringWithoutSpaces = str.replace(/ /g, '');

  // Convert to lowercase
  const lowercaseString = stringWithoutSpaces.toLowerCase();

  return lowercaseString;
}


function getLetterCount(str) {
  countObject = {}

  for (i = 0; i < str.length; i++) {
    if (countObject[str[i]]) {
      countObject[str[i]] += 1
    }
    else {
      countObject[str[i]] = 1
    }

  }
  return countObject

}

module.exports = isAnagram;

