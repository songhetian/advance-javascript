// 'use strict';

function test(name = "song") {
  console.log(name);
  console.log(arguments[0]);
}

test("john");
test();

console.log(test2("john", 20));

function test2(name = "song", age = 20) {
  return 11122;
}

console.log(test2("john", 20));

//calllee
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * arguments.callee(num - 1);
}

console.log(factorial(3));

//caller
function inner() {
  console.log(arguments.callee.caller);
}

function outer() {
  inner();
}

outer();

function User(name, age) {
  if (new.target) {
    console.log(new.target === User);
  }

  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(`我是${this.name}`);
  };
}

let user = new User("hone", 12);

window.iter = "The Windows";
let Obj = {
  name: "john",
  age: 21,
  iter: "the obj",
  job: "无业游民",
  sayName() {
    let index = 0;
    return function () {
      index += 1;
      console.log(`我是${index}`);
      console.log(`我是${this}`);
    };
  },
  sayArrow() {
    return () => {
      console.log(`我是${this}`);
    };
  },
};

let result = Obj.sayName();
let result1 = Obj.sayArrow();

result();
result1();

const btn = document.getElementById("btn");

// btn.addEventListener('click', function () {
//     console.log(this);
// });

// btn.addEventListener('click', () => {
//     console.log(this);
// });
btn.onclick = function () {
  console.log(this, 1);
};

btn.onclick = () => {
  console.log(this, 2);
};

btn.onclick = function () {
  console.log(this, 1);
};

console.log(btn === window.btn);

const obj1 = {
  name: "john",
  sayName() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

console.log(obj1);

console.log("---------------立即执行函数-------------------");

(function () {
  let name = "";

  function Person(value) {
    name = value;
  }

  Person.prototype.getName = function () {
    return name;
  };

  Person.prototype.setName = function (value) {
    name = value;
  };
  console.log(1111);
})();

