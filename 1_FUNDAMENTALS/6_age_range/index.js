function checkAgeRange() {
  let ageRange = false;
  const age = parseInt(document.getElementById("age").value);

  if (age >= 0 && age <= 12) {
    ageRange = "child";
  } else if (age >= 13 && age <= 17) {
    ageRange = "teenager";
  } else if (age >= 18 && age <= 59) {
    ageRange = "adult";
  } else if (age >= 60 && age <= 100) {
    ageRange = "elderly";
  }

  let message = ageRange
    ? `As long as you are ${age} years old, you qualify as a ${ageRange}.`
    : "Your age is not valid.";

  document.getElementById("result").textContent = message;
}
