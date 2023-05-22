function checkPrimeNumber() {
  const nNumber = Number(document.getElementById("nNumber").value);
  const tableList = document.querySelector("#tableList ul");

  if (isNaN(nNumber)) return alert("Enter a valid number");

  const message = `The prime numbers from 1 to ${nNumber} are:`;
  document.getElementById("result").textContent = message;

  tableList.innerHTML = "";

  for (let i = 1; i <= nNumber; i++) {
    if (isPrime(i)) {
      const li = document.createElement("li");
      li.textContent = i;
      tableList.appendChild(li);
    }
  }
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
