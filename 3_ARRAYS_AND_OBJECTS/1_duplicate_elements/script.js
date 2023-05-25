function duplicateElements(array) {
  return Array.from(new Set(array));
}

console.log(duplicateElements([1, 2, 3, 4, 4, 5, 6, 6]));
console.log(duplicateElements([7, 8, 9, 10]));
console.log(
  duplicateElements(["apple", "banana", "apple", "orange", "banana"])
);
console.log(duplicateElements([1, "apple", 2, "banana", "apple", 3, "banana"]));
