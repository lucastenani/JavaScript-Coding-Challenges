function isEvenOrOdd(num) {
  if (isNaN(num)) return "Enter a valid number";

  return num % 2 == 0 ? `number ${num} is even` : `number ${num} is odd`;
}

console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(3));
console.log(isEvenOrOdd(25));
console.log(isEvenOrOdd("String"));
