function arrayConcatenation(arr1, arr2) {
  let result = arr1;

  arr2.forEach((e) => result.push(e));

  return result;
}

console.log(arrayConcatenation([1, 2, 3], [4, 5, 6]));
// Expected output: [1, 2, 3, 4, 5, 6]

console.log(arrayConcatenation(["apple", "banana"], ["orange", "grapefruit"]));
// Expected output: ["apple", "banana", "orange", "grapefruit"]

console.log(arrayConcatenation([1, 2, 3], ["apple", "banana"]));
// Expected output: [1, 2, 3, "apple", "banana"]

console.log(arrayConcatenation([], []));
// Expected output: []
