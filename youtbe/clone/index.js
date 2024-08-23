const m = new Map();
m.set("name", "John");

const Person = {
  name: "John",
  age: 21,
  sayName: function () {
    console.log(`我是${this.name}`);
  },
  likes: [1, 2, 3, 4, 5],
};

const m1 = m;
m1.set("name", "John1");
console.log(m1.get("name"));
for (const element of m1.entries()) {


}

const s = new Set();

s.add(1);

for (const element of s) {
  console.log(element);
}
console.log(s.entries());

function DeepClone(obj) {
  if (typeof obj !== "object" || typeof obj === null) return obj;

  let NewObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];

    NewObj[key] = DeepClone(value);
  }

  return NewObj;
}

const deep = DeepClone(Person);

console.log(deep);