function startCalculation() {
  let triangleArea, trianglePerimeter;
  let triangleLength = Number(document.getElementById("triangleLength").value);
  let triangleWide = Number(document.getElementById("triangleWide").value);

  triangleArea = calculateArea(triangleLength, triangleWide);
  trianglePerimeter = calculatePerimeter(triangleLength, triangleWide);

  let message = `Assuming the triangle has a base length of ${triangleLength} and a wide of ${triangleWide}, the area of the triangle is ${triangleArea} and the perimeter is ${trianglePerimeter}.`;

  document.getElementById("result").textContent = message;
}

function calculateArea(length, wide) {
  return length * wide;
}

function calculatePerimeter(length, wide) {
  return 2 * (length + wide);
}
