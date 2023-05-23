function isPalindrome(string) {
  let reverseString = string.toLowerCase().split("").reverse().join("");
  return reverseString === string.toLowerCase();
}

console.log(isPalindrome("osso"));
console.log(isPalindrome("Ana"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("Roma é amor"));
console.log(isPalindrome("Hello, World!"));
console.log(isPalindrome("JavaScript is fun"));
