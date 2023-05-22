function compareNumbers() {
  const firstNumber = Number(document.getElementById("firstNumber").value);
  const secondNumber = Number(document.getElementById("secondNumber").value);
  let message = "";

  if (firstNumber === secondNumber) {
    message = `The number ${firstNumber} is equal to the number ${secondNumber}`;
  } else if (firstNumber > secondNumber) {
    message = `The number ${firstNumber} is greater than the number ${secondNumber}`;
  } else if (firstNumber < secondNumber) {
    message = `The number ${firstNumber} is less than the number ${secondNumber}`;
  }

  document.getElementById("result").textContent = message;
}
