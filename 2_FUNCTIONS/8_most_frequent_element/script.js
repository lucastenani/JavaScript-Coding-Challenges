function mostFrequentElement(array) {
  let result = 0;

  array.forEach((element) => {
    const frequency = array.filter((x) => x == element).length;

    if (frequency > result) {
      result = element;
    }
  });

  return result;
}

console.log(mostFrequentElement([5, 5, 5, 5, 5, 5, 5])); // Expected output: 5
console.log(mostFrequentElement([1, 2, 3, 4, 5])); // Expected output: 1
console.log(mostFrequentElement([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])); // Expected output: 4
console.log(mostFrequentElement([])); // Expected output: 0
