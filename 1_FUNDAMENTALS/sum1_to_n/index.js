function sum1ToN() {
  const nNumber = Number(document.getElementById("nNumber").value);
  result = 0;

  if (nNumber < 1 || isNaN(nNumber)) {
    return alert("Please enter a valid number greater than or equal to 1");
  }

  for (let i = 1; i <= nNumber; i++) {
    result += i;
  }

  const message = `The sum of all numbers between 1 and ${nNumber} is ${result}`;

  document.getElementById("result").textContent = message;
}
