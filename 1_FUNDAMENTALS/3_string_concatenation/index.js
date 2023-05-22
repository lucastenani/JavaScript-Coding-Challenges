function startConcat() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const city = document.getElementById("city").value;

  if (Number(age) <= 0 || Number(age) > 100) {
    alert("Age is not valid");
    return;
  }

  let message = `Hi ${name}! You're ${age} years old and live in ${city}. Nice to meet you!`;

  document.getElementById("result").textContent = message;
}
