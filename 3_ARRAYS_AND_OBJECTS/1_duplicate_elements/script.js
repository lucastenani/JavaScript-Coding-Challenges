function duplicateElements(array) {
  return Array.from(new Set(array));
}

console.log(duplicateElements([1, 2, 3, 4, 4, 5, 6, 6]));
// Expected output: [ 1, 2, 3, 4, 5, 6 ]
console.log(duplicateElements([7, 8, 9, 10]));
// Expected output: [ 7, 8, 9, 10 ]
console.log(
  duplicateElements(["apple", "banana", "apple", "orange", "banana"])
);
// Expected output: [ 'apple', 'banana', 'orange' ]
console.log(duplicateElements([1, "apple", 2, "banana", "apple", 3, "banana"]));
// Expected output: [ 1, 'apple', 2, 'banana', 3 ]
