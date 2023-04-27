function startCalculation() {
  let triangleArea, trianglePerimeter;
  let triangleLength = Number(prompt("What is the length of the triangle?"));
  let triangleWide = Number(prompt("How wide is the triangle?"));

  triangleArea = calculateArea(triangleLength, triangleWide);
  trianglePerimeter = calculatePerimeter(triangleLength, triangleWide);

  alert(`Assuming the triangle is ${triangleLength} long and ${triangleWide} wide.
The area of the triangle is ${triangleArea}.
The perimeter of the triangle is ${trianglePerimeter}`);
}

function calculateArea(length, wide) {
  return length * wide;
}

function calculatePerimeter(length, wide) {
  return 2 * (length + wide);
}
