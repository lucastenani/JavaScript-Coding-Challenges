function generateRandomArray(length, minValue, maxValue) {
  let arr = [0];

  for (let i = 1; i < length; i++) {
    const randomNum = Math.floor(Math.random() * (maxValue + 1)) + minValue;
    arr.push(randomNum);
  }

  return arr;
}

console.log(generateRandomArray(8, 0, 4));
console.log(generateRandomArray(3, 6, 29));
console.log(generateRandomArray(12, 80, 8000));
console.log(generateRandomArray(1, 0, 100));
