
const OldPerson = new Object();

OldPerson.name = 'John';
OldPerson.age = 92;
OldPerson.job = 'Engineer';
OldPerson.sayAge = function () {
    console.log(`我今年${this.age}`);
}

const Person = {
    name: "John",
    age: 21,
    job: "无业游民",
    sayName: function () {
        console.log(`我是${this.name}`);
    }
}
//属性是否能删除并重新定义以及是否能变为访问器属性
Object.defineProperty(OldPerson, "name", {
    configurable: false
});

//再次调用会报错
// Object.defineProperty(OldPerson, "name", {
//     configurable: true
// });

delete OldPerson.name;


//属性是否能被修改
Object.defineProperty(OldPerson, "age", {
    writable: false
});

OldPerson.age = 900;

console.log(OldPerson.age);

//属性能否通过for-in遍历
Object.defineProperty(OldPerson, "age", {
    enumerable: false,
    value: 900
});

for (const key in OldPerson) {
    console.log(OldPerson[key]);
}


Person.age = 22;
console.log(Person.age); // 21



console.log(OldPerson.name); // John

OldPerson.sayAge();
Person.sayName();


// 访问器属性

let book = {
    _year: 20170,
    edition: 1
}

Object.defineProperty(book, "year", {
    configurable: false,
    get() {
        return this._year;
    },

    set(newValue) {
        this.edition = newValue;
    }
});

delete book.year;
console.log(book.year);
book.year = 20171;
console.log(book.edition);


class Person1 {
    _name = 'John';
    getName() { return `我是${this._name}` }
}

const person1 = new Person1();

console.log(person1._name);
console.log(person1.getName());

function Person2() {
    const name = 'John';
    this.getName = function () { return `我是${name}` }
}

const person2 = new Person2();

console.log(person2.getName());