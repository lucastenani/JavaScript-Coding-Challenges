function startCalculation() {
  let bmiInterpretation, message;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight)) {
    return (message = "Enter valid measurements");
  }

  let bmi = weight / (height * height);

  switch (true) {
    case bmi <= 18.5:
      bmiInterpretation = "underweight";
      break;
    case bmi >= 18.65 && bmi <= 24.9:
      bmiInterpretation = "normal";
      break;
    case bmi >= 25 && bmi <= 29.9:
      bmiInterpretation = "overweight";
      break;
    case bmi >= 30 && bmi <= 39.9:
      bmiInterpretation = "obese";
      break;
    case bmi >= 40:
      bmiInterpretation = "morbidly obesity";
      break;
  }

  message = `Your BMI is ${bmi.toFixed(
    2
  )}\nYour BMI classification is ${bmiInterpretation}`;

  document.getElementById("result").textContent = message;
}
