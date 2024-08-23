
const m = new Map();
m.set('name', '123');
const s = new Set();

s.add(1);

let obj = {
    name: "提娜和宋",
    age: 11,
    likes: ['洗澡', '上厕所', '拉屎'],
    say() {
        console.log('Hello');
    },
    m: m,
    s: s
}

obj.__proto__.say2 = function () {
    console.log('Hello1');
}
//只适用于简单的情况 对map set function filelist imgageDates RegExps无效
const json_str = JSON.stringify(obj);
console.log(json_str);

const json_obj = JSON.parse(json_str);

json_obj.likes[0] = '123';
console.log(json_obj);
console.log(obj);

console.log(json_obj === obj);

//深拷贝
console.log("-------------------深拷贝开始---------------------");
const Map1 = new Map();
Map1.set('name', '123');
const Set1 = new Set();
Set1.add(1);

const DeepObj = {
    name: "田鹤松",
    age: 11,
    likes: ['洗澡', '上厕所', '拉屎'],
    say() {
        console.log('Hello');
    },
    mMap: Map1,
    sSet: Set1
}

console.log(DeepObj, 'DeepObj');

function deepClone1(ObjectValue) {
    if (typeof ObjectValue !== 'object' || ObjectValue === null || ObjectValue === 'function') return ObjectValue;
    let newObj = Array.isArray(ObjectValue) ? [] : {};
    for (let key in ObjectValue) {
        const value = ObjectValue[key];
        newObj[key] = deepClone1(value);
        if (key === 'say') {
            console.log(newObj['say'], 's');
        }
    }
    return newObj;
}
const fun1 = () => {
    console.log('hasOwnProperty');

}
console.log(typeof fun1);



const deep = deepClone1(DeepObj);
console.log(deep, 'set');


console.log("-------------------深拷贝结束---------------------");





function Person() {
}
Person.prototype.say = function say() {
    console.log('Hello');
}
Person.prototype.name = "John";

Person.prototype.age = 100;

function Son() { }

Son.prototype = Object.create(Person.prototype);

const son = new Son();

console.log(Person.prototype.isPrototypeOf(son));
// console.log(Object.getPrototypeOf(son));
console.log(son.__proto__.constructor);


function Son1() { }

Object.setPrototypeOf(Son1.prototype, Person.prototype);

const son1 = new Son1();

console.log(Son1.prototype.isPrototypeOf(son1));

