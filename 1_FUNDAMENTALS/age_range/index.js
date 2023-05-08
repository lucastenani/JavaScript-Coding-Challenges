function checkAgeRange() {
  let ageRange;
  let age = parseInt(document.getElementById("age").value);

  switch (true) {
    case age >= 0 && age <= 12:
      ageRange = "child";
      break;

    case age >= 13 && age <= 17:
      ageRange = "teenager";
      break;

    case age >= 18 && age <= 59:
      ageRange = "adult";
      break;

    case age >= 60 && age <= 100:
      ageRange = "elderly";
      break;

    default:
      ageRange = false;
      break;
  }

  let message = ageRange
    ? `As long as you are ${age} years old, you qualify as a ${ageRange}.`
    : "Your age is not valid";

  document.getElementById("result").textContent = message;
}
