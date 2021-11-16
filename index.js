function isPalindrome(word) {
  const wordAsArray = word.split("");
  const reversedArray = wordAsArray.reverse();
  const reversedWord = reversedArray.join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false
  }
}

/* 
build function that accepts one string as parameter
test string to see if string forward === string backward
if true, return true
if false, return false


*/

/*
write a function that takes in one string(input), checks to see if that string
is a palindrome(Same forward and backward), and returns true or false 
depending on if it's a palindrome or not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome('tenet'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome('algorithm'));
}

module.exports = isPalindrome;
