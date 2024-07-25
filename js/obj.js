
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

//设置多个属性

let book1 = {};

Object.defineProperties(book1, {
    _year: {
        value: 100
    },
    edition: {
        value: 1
    },
    year: {
        get() {
            return this._year;
        },
        set(newValue) {
            this.edition = newValue;
        }
    }
});

console.log(book1.year);

const desc = Object.getOwnPropertyDescriptor(book1, "_year");

console.log(desc);

const desc1 = Object.getOwnPropertyDescriptor(book1, "year");

console.log(desc1);

const desc2 = Object.getOwnPropertyDescriptors(book1);

console.log(desc2);

//浅拷贝

let dest, src, result;

dest = {}
src = { a: { name: "1234" } }

result = Object.assign(dest, src);

result.a.name = "456";

console.log(result);

dest = {
    _a: "1234",
    // set a(val) {
    //     console.log("set a");
    //     this._a = val;
    // }
    a: {
        set() {
            console.log("set a");
            this._a = "456";
        }
    }
}

src = {
    get a1() {
        return "12345";
    }
}

result = Object.assign(dest, src);

console.log(dest);
console.log(result);
console.log(Object.getOwnPropertyDescriptors(src)); //);
console.log(Object.getOwnPropertyDescriptors(dest)); //);

//属性值简写
let age = 123;

let person3 = {
    age
}

console.log(person3); // 123


//可变属性

const nameKey = "name";
const ageKey = "age";
const sexKey = "sex";

function uniqueKey(key) {
    return "_" + Math.random().toString(36).slice(2, 9) + key;
}

const person4 = {
    [uniqueKey(nameKey)]: "John",
    [uniqueKey(ageKey)]: 12,
    [uniqueKey(sexKey)]: "男"
}

console.log(person4); // { name: 'John', age: 12, sex: '男' }

const str = "1234567890";

console.log(str.slice(0, 2)); // "0000123456"


//简写方法名
const person6 = {
    _name: "John",
    sayHello: function () {
        console.log(`Hello, my name is ${this._name}`);
    }
}

const personKey = "test";
const person5 = {
    _name: "person5",
    sayHello() {
        console.log(`Hello, my name is ${this._name}`);
    },
    get name() {
        return this._name;
    },
    set name(val) {
        this._name = val;
    },
    [personKey]() {
        return `我是可变属性的值${this._name}`;
    }

}

person5.sayHello(); // Hello, my name is person5
person6.sayHello();
person5.name = "约翰";
person5.sayHello();

console.log(person5[personKey]()); // 我是可变属性的值约��



//嵌套结构
const student = {
    name: "john",
    ages: 100
}

let { name, ages } = student;
let { name: jname, ages: jages } = student;

console.log(name, ages); // john
console.log(jname, jages); // john

//提前声明变量赋值需要使用括号
let name1, ages1;

({ name: name1, ages: ages1 } = student);
console.log(name1, ages1);



let person = {
    name: 'Matt',
    age: 27,
    job: {
        title: 'Software engineer'
    }
};
let personCopy = {};

({ name: personCopy.name, age: personCopy.age, job: personCopy.job } = person);

const { job: { title } } = person;

//部分结构
console.log(title);
console.log(personCopy);


//参数结构
function great(f1, { name, age }, f2) {
    console.log(...arguments);
    console.log(name, age);

}

great(1, person, 2);