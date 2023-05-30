const myObject = {
  props1: "value1",
  props2: 123,
  props3: true,
  props4: ["item1", "item2"],
  props5: { subProps: "subvalue" },
};

const myOtherObject = {
  otherProps1: "newValue",
  otherProps2: 456,
  otherProps3: false,
  otherProps4: ["item3", "item4"],
  otherProps5: { newSubProps: "newSubvalue" },
};

function uniteObjects(object1, object2) {
  return { ...object1, ...object2 };
}

console.log(uniteObjects(myObject, myOtherObject));

// Expected output:
// {
//   props1: 'value1',
//   props2: 123,
//   props3: true,
//   props4: [ 'item1', 'item2' ],
//   props5: { subProps: 'subvalue' },
//   otherProps1: 'newValue',
//   otherProps2: 456,
//   otherProps3: false,
//   otherProps4: [ 'item3', 'item4' ],
//   otherProps5: { newSubProps: 'newSubvalue' }
// }
