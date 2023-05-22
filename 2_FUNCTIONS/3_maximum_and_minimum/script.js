function maximumNumber(x, y) {
  return x > y
    ? `The number ${x} is greater than the number ${y}`
    : `The number ${y} is greater than the number ${x}`;
}

function minimumNumber(x, y) {
  return x < y
    ? `The number ${x} is less than the number ${y}`
    : `The number ${y} is less than the number ${x}`;
}

console.log(maximumNumber(1, 9));
console.log(maximumNumber(90, 89));

console.log(minimumNumber(800, 98123));
console.log(minimumNumber(9000, 15));
