function factorial(num) {
  if (isNaN(num) || num < 0) return "Enter a valid number";

  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }

  return `Factorial of ${num} is ${result}`;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-3));
console.log(factorial("String"));
