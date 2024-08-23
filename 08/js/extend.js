let person = {
    name: 'John',
    age: 30
}

let p1 = Object.create(person);

console.log(p1);

//寄生组合继承

function Animal(name, age) {
    this.name = name;
    this.age = age;

}


function Cat(name, age) {
    Animal.call(this, name, age);
    this.color = 'black';
}

const a = new Animal("tome1", 12);

console.log(a);

Cat.prototype = new Animal();
// Cat.prototype.constructor = Cat;

const cat = new Cat('tom', 12);
console.log(cat);

//立即执行函数

(function (x) {
    console.log(x);
})('aad1')

new class Test {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }
    sayHello() {
        console.log('Hello' + this.name);
    }
}('tianhesong');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.locate = () => {
            console.log(this);
        }
    }

    locate() {
        console.log(this);
    }
}

let p3 = new Person("p3", 10);

p3.locate();
Person.prototype.locate();


// 生成器和迭代器
class PersonPro {
    constructor() {
        this.nikename = ['John', 'Jane', 'Tom', 'Bob'];
    }

    // *[Symbol.iterator]() {
    //     yield* this.nikename;
    // }

    // [Symbol.iterator]() {
    //     const _this = this;
    //     let index = 0;
    //     return {
    //         next() {
    //             if (_this.nikename.length > index) {

    //                 const obj = { done: false, value: _this.nikename[index] };
    //                 index++;
    //                 return obj;
    //             } else {
    //                 return { done: true };
    //             }
    //         }
    //     }
    // }

    *[Symbol.iterator]() {
        yield* this.nikename;
    }



    * createNicknameIterator() {
        yield 'John';
        yield 'Jane';
        yield 'Tom';
        yield 'Bob';
    }

    static * createJobIterator() {
        yield 'Engineer';
        yield 'Doctor';
        yield 'Teacher';
        yield 'Lawyer';
        return 'ad';
    }
}

let itar = PersonPro.createJobIterator();
console.log(itar.next());
console.log(itar.next());
console.log(itar.next());
console.log(itar.next());
console.log(itar.next());

let p = new PersonPro();

itar = p.createNicknameIterator();
console.log(itar.next());
console.log(itar.next());
console.log(itar.next());
console.log(itar.next());

itar = p[Symbol.iterator]();

console.log(itar.next());
console.log(itar.next());
console.log(itar.next());

for (const e of p) {
    console.log(e);
}

//继承

class Vehicle {
    constructor(color) {
        // 抽象类---不能被new的类
        if (new.target === Vehicle) {
            throw new Error("Cannot create an instance of Vehicle directly");
        }
        this.color = color;
    }

    static createVehicle() {
        console.log("Vehicle Static");
    }
}

class Car extends Vehicle {
    constructor(color, brand) {
        super(color);
        this.brand = brand;
    }

    static createVehicle() {
        super.createVehicle();
        console.log("Car Static");
    }
}

const c = new Car('blue', 'asdf');
console.log(Car.prototype.constructor === Car);
Car.createVehicle();

//抽象类
const v = new Vehicle();
