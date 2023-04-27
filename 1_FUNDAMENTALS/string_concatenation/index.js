function startConcat() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  let city = prompt("What city do you live in?");

  if (isNaN(Number(age)) || Number(age) <= 0 || Number(age) > 100) {
    alert("Age is not valid");
    return;
  }

  alert(
    `Hi ${name}! You're ${age} years old and live in ${city}. Nice to meet you!`
  );
}
