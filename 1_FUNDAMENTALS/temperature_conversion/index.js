// Create a temperature conversion code from Celsius to Fahrenheit and vice versa

function convertTemperature(originalUnit) {
  let convertedTemp, formula;
  let originalTemp = prompt(
    `What temperature in degrees ${originalUnit} would you like to convert?`
  );

  if (originalUnit == "Celsius") {
    convertedTemp = (originalTemp * 9) / 5 + 32;
    formula = `(${originalTemp} °C × 9/5) + 32 = ${convertedTemp} °F`;
  } else {
    convertedTemp = ((originalTemp - 32) * 5) / 9;
    formula = `(${originalTemp} °F − 32) × 5/9 = ${convertedTemp}°C`;
  }

  alert(
    `${originalTemp} degrees ${originalUnit} is ${convertedTemp} degrees ${
      originalUnit === "Celsius" ? "Fahrenheit" : "Celsius"
    }\rFormula: ${formula}`
  );
}
