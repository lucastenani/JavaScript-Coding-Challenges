function arrayConcatenation(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(arrayConcatenation([1, 2, 3], [4, 5, 6]));
// Expected output: [1, 2, 3, 4, 5, 6]

console.log(arrayConcatenation(["apple", "banana"], ["orange", "grapefruit"]));
// Expected output: ["apple", "banana", "orange", "grapefruit"]

console.log(arrayConcatenation([1, 2, 3], ["apple", "banana"]));
// Expected output: [1, 2, 3, "apple", "banana"]

console.log(arrayConcatenation([], []));
// Expected output: []
