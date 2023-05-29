const object1 = {
  userName: "Alice",
  age: 25,
  city: "London",
  active: true,
  score: 9.5,
};

const object2 = {
  title: "Product A",
  price: 99.99,
  inStock: false,
  category: "Electronics",
  rating: 4.5,
};

function filterProps(object, allowedProps) {
  let result = {};

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key) && allowedProps.includes(key)) {
      result[key] = object[key];
    }
  }

  return result;
}

console.log(filterProps(object1, ["userName", "active", "score"]));
// Expected output: { userName: 'Alice', active: true, score: 9.5 }

console.log(filterProps(object2, ["title", "price", "inStock"]));
// Expected output: { title: 'Product A', price: 99.99, inStock: false }
