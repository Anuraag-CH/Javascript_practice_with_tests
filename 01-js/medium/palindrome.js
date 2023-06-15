/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = ignoreSpacesAndConvertToLower(str)

  if (str.length == 0 || str.length == 1) {
    return true
  }


  l = Math.floor(str.length / 2)

  for (i = 0; i < l; i++) {

    n = str.length

    if (str[i] != str[n - i - 1]) {
      return false
    }

  }

  return true;
}

function ignoreSpacesAndConvertToLower(str) {
  var punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  // Replace punctuations with an empty string
  str = str.replace(punctuationRegex, "");

  // Remove spaces
  const stringWithoutSpaces = str.replace(/ /g, '');

  // Convert to lowercase
  const lowercaseString = stringWithoutSpaces.toLowerCase();

  return lowercaseString;
}

module.exports = isPalindrome;

isPalindrome("ABccc")