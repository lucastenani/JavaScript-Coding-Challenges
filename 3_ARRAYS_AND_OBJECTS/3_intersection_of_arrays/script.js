function arraysIntersection(arr1, arr2) {
  let result = [];

  arr1.forEach((e) => {
    arr2.includes(e) && !result.includes(e) ? result.push(e) : "";
  });

  return result;
}

console.log(arraysIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
// Expected output: [4, 5]
console.log(arraysIntersection(["a", "b", "c", "d"], ["c", "d", "e", "f"]));
// Expected output: ['c', 'd']
console.log(arraysIntersection([true, false, true], [true, true, false, true]));
// Expected output: [true, false]
console.log(
  arraysIntersection(["apple", "banana", "orange"], ["pear", "grape", "banana"])
);
// Expected output: ['banana']
console.log(arraysIntersection([10, 20, 30, 40], [50, 60, 70, 80]));
// Expected output: []
