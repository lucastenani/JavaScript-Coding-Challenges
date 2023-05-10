function calculate() {
  const firstNumber = Number(document.getElementById("firstNumber").value);
  const secondNumber = Number(document.getElementById("secondNumber").value);
  const operator = document.getElementById("operator").value;
  let result;

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
  }

  document.getElementById(
    "result"
  ).textContent = `The result of ${firstNumber} + ${secondNumber} is ${result}`;
}
