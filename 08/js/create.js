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
function PersonPro1() {}

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

console.log(PersonPro.prototype,'123');
console.log(p5,'p5');
console.log(Object.prototype.constructor,'Object.prototype.constructor');
Object.name = "12345667";
console.log(PersonPro.prototype.__proto__, 'Object.prototype.constructor');
console.log(PersonPro.prototype.__proto__ === Object.prototype);
console.log(PersonPro.prototype.__proto__.constructor);
console.log(PersonPro.prototype.__proto__.__proto__);

console.log(PersonPro.prototype.isPrototypeOf(p5)); //

//返回对象的原型对象
console.log(Object.getPrototypeOf(p5) === PersonPro.prototype);

// Object.defineProperty(p5, "name", {
//    
// });
const a1 = {name : 'a'};
console.log(Object.getOwnPropertyDescriptors(a1));

const a2 = {};

Object.defineProperties(a2,{
    name:{
        value:'a2'
    },
    age : {
        value:100
    },
    a2 : {
        get : function () {
           return this.age; 
        },
        set(val) {
            this.age = val;
        }
    }
});

//设置原型
let biped = {
    number: 2
}
let person10 = {
    name : 'john'
}

Object.setPrototypeOf(person10,biped);
console.log(person10.__proto__);
console.log(Object.getPrototypeOf(person10));

let person11 = Object.create(biped);
person11.name = "test";
console.log(person11.__proto__,"person11");
console.log(biped.isPrototypeOf(person11));
console.log(Object.getPrototypeOf(person11)===biped);

//判断属性是在实例上还是原型上
let Person12 = function() {};
const p01 = new Person12(12);
console.log(p01.hasOwnProperty('age'),'p01');
console.log(person11.hasOwnProperty('name'));
console.log(person11.hasOwnProperty('number'));
console.log(PersonPro.hasOwnProperty('name'));

console.log(Object.getOwnPropertyDescriptors(p01));
console.log(Object.getOwnPropertyDescriptor(p01,'age'));

//in操作符

console.log("name" in person10);
console.log("number" in person10);

console.log(Object.keys(person10));

console.log(Object.getOwnPropertyNames(Person12.prototype));


//其他原型语法

function Person01() {};
// Person01.prototype.name = "test";

// Person01.prototype = new Object();
Person01.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

let friend = new Person01();

console.log(friend.constructor);
console.log(friend instanceof Object); // true
console.log(friend instanceof Person01); // true

console.log(friend.constructor == Person); // false
console.log(friend.constructor == Object); // true

//继承
let SuperType = function() {
    this.superPrototype = true;
}
SuperType.prototype.getSuperValue = function() {
    return this.superPrototype;
}

let SubType = function() {
    this.subPrototype = false;
};

SubType.prototype = Object.create(SuperType.prototype);

SubType.prototype.getSubValue = function() {
    return this.subPrototype;
}

const instance = new SubType();

console.log(SuperType.prototype,"supertype");
console.log(SubType.prototype,"subtype");
console.log(instance.getSuperValue());
console.log(instance.getSubValue());
console.log(SubType.prototype.isPrototypeOf(instance));
console.log(Object.getPrototypeOf(instance) === SubType.prototype);
console.log(SubType.prototype);