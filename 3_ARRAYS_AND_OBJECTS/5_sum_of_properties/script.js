const myObject = {
  prop1: 42,
  prop2: 3.14,
  prop3: 100,
  prop4: 7.5,
  prop5: 0,
  prop6: -10,
  prop7: 99.9,
};

const myOtherObject = {
  prop1: 10,
  prop2: 25,
  prop3: -5,
  prop4: 3.14159,
  prop5: 1000,
};

const emptyObj = {};

function propertiesSum(object) {
  let result = 0;
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      result += object[key];
    }
  }
  return result;
}

console.log(propertiesSum(myObject));
// Expected output: 242.54

console.log(propertiesSum(myOtherObject));
// Expected output: 1033.14159

console.log(propertiesSum(emptyObj));
// Expected output: 0
