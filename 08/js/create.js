//工厂模式
function createPerson(name, age) {
    let o = new Object();
    o.name = name;
    o.age = age;

    return o;
}

let p1 = createPerson('p1', 12);
let p2 = createPerson('p2', 120);

console.log(p1); //

//构造函数模式

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(`我是${this.name}`);
    }
}

let p3 = new Person('p3', 10);
p3.sayName(); //

const Person1 = function (name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(`我是${this.name}`);
    }
}
let p4 = new Person1('p4', 15);
console.log(Object.getOwnPropertyDescriptors(p4));
p4.sayName();
console.log(p3.constructor);
console.log(p4.constructor);

//如果不使用new
Person("window对象", 12);
console.log(window.name);

//apply() call() bind()

let o = {};

Person.call(o, "callName", 100);

console.log(o.name, o.age);

Person.apply(o, ["apply", 100]);

console.log(o.name, o.age);

const fx = Person.bind(o, "bind", 120);
fx();
console.log(o.name, o.age);

//原型模式

//let PersonPro = function(){};
function PersonPro() {}

PersonPro.prototype.name = "原型模式";
PersonPro.prototype.sayName = function () {
    console.log(`我是原型上的sayName方法${this.name}`);
}
PersonPro.prototype.age = 100;

const p5= new PersonPro();
const p6= new PersonPro();

console.log(p5.name);
console.log(p6.name);
console.log(p5.sayName === p6.sayName);
