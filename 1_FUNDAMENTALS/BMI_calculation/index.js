function startCalculation() {
  let bmiInterpretation;
  let height = parseFloat(
    prompt(`What is your height in meters? (e.g., 1.70)`)
  );
  let weight = parseFloat(prompt(`What is your weight in kilos? (e.g., 90)`));

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

  alert(
    `Your BMI is ${bmi.toFixed(
      2
    )}\nYour BMI classification is ${bmiInterpretation}`
  );
}
