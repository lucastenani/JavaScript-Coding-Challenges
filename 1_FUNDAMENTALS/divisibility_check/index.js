function divisibilityCheck() {
  let numberToCheck = document.getElementById("numberToCheck").value;
  let divisor = document.getElementById("divisor").value;

  let isDivisible = numberToCheck % divisor === 0;

  let message = isDivisible
    ? `The number ${numberToCheck} is divisible by the number ${divisor}`
    : `The number ${numberToCheck} is not divisible by the number ${divisor}`;

  document.getElementById("result").textContent = message;
}
