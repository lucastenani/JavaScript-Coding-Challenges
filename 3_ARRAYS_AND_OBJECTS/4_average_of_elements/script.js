function elementsAverage(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

console.log(elementsAverage([1, 2, 3, 4, 5]));
// Expected output: 3

console.log(elementsAverage([15, 27, 34, 9, 12, 45, 18, 21, 33, 29]));
// Expected output: 24.3

console.log(elementsAverage([2.5, 3.7, 1.8, 4.2, 2.1]));
// Expected output: 2.66

console.log(elementsAverage([0, 0, 0, 0, 0]));
// Expected output: 0
