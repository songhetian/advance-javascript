// // 空代理
// const target = { id: 'target', foo: 'foo target' }

// const handler = {

//     // get(trapTarget, prototype, received) {
//     //     // return "get failed 失败";
//     //     console.log(trapTarget === target);
//     //     console.log(prototype);
//     //     console.log(received === proxy);

//     //     //return trapTarget[prototype]
//     //     return Reflect.get(...arguments);
//     // }
//     get: Reflect.get
// }

// // const proxy = new Proxy(target, handler);
// const { proxy, revoke } = Proxy.revocable(target, handler);

// // 撤销代理
// // revoke();

// console.log(proxy.foo);

// //
// proxy.id = 'target1001';

// console.log(proxy.id); // target1
// console.log(target.id); // target1


// //Proxy没有protorype

// console.log(Object.create(proxy)['id']);
// console.dir(Proxy.prototype);

// let str = "abc";

// const t = {
//     set() {
//         console.log('12345');
//     }
// };

// const proxy1 = new Proxy(target, t);

// str = "123";

// console.log(str);

//捕获器的方法

const myTarget = { name: 'target' };

Object.defineProperty(myTarget, 'foo', {
    configurable: false,
    writable: true,
    value: 'bar'
});

// Object.defineProperty(myTarget, 'foo', {
//     writable: true,
//     value: 'bar'
// });

myTarget.foo = 'bar1';

console.log(myTarget.foo); // bar


const proxyGet = new Proxy(myTarget, {
    get(target, prototype, received) {
        console.log('get()');
        console.log(...arguments);
        return Reflect.get(target, prototype);
    },
    set(target, prototype, value) {
        console.log('set()----');
        console.log(...arguments);
        target[prototype] = value;
    }
});
console.log(proxyGet.name);
proxyGet.foo = '123';
console.log(myTarget);
console.log(proxyGet);


const proxySet = new Proxy(myTarget, {
    set() {
        console.log('set()');
        console.log(...arguments);
        return Reflect.set(...arguments);
    }
});

proxySet.foo = '456';


// has()

const proxyHas = new Proxy(myTarget, {
    has() {
        console.log('has()');
        return Reflect.has(...arguments);
    }
});

console.log('name' in proxyHas);

//definePrototy() 调用Object.defindePrototy

const proxyDefine = new Proxy(myTarget, {
    defineProperty(target, prototype, descriptor) {
        console.log('defineProperty()');
        return Reflect.defineProperty(...arguments);
    }
});

Object.defineProperty(proxyDefine, 'age', {
    value: 18,
    writable: false,
    configurable: false
});

console.log(proxyDefine.age);
console.log(Reflect.get(myTarget, 'age'));

//getOwnPropertyDescriptor()

const proxyGetDesc = new Proxy(myTarget, {
    getOwnPropertyDescriptor(target, prototype) {
        console.log('getOwnPropertyDescriptor()');
        return Reflect.getOwnPropertyDescriptor(...arguments);
    }
});

console.log(Object.getOwnPropertyDescriptor(proxyGetDesc, 'age'));

//deleteProperty()
const proxyDeleteDesc = new Proxy(myTarget, {
    deleteProperty(target, prototype) {
        console.log('deleteProperty()');
        return Reflect.deleteProperty(...arguments);
    }
});

delete proxyDeleteDesc.age;


//ownKeys()

const proxyOwnKeys = new Proxy(myTarget, {
    ownKeys(target) {
        console.log('ownKeys()');
        return Reflect.ownKeys(...arguments);
    }
});

Object.keys(proxyOwnKeys);

//getPrototypeOf()

const proxyGetProto = new Proxy(myTarget, {
    getPrototypeOf(target) {
        console.log('getPrototypeOf()');
        return Reflect.getPrototypeOf(...arguments);
    }
});

Object.getPrototypeOf(proxyGetProto);

//setPrototypeOf()

const proxySetProto = new Proxy(myTarget, {
    setPrototypeOf(target, prototype) {
        console.log('setPrototypeOf()');
        return Reflect.setPrototypeOf(...arguments);
    }
});

Object.setPrototypeOf(proxySetProto, { name: 'newTarget' });

//construct()

const proxyConstruct = new Proxy(function () {
    console.log('construct1()');
}, {
    construct(target, args, newTarget) {
        console.log('construct2()');
        console.log(...arguments);
        return Reflect.construct(...arguments);
    }
});

new proxyConstruct();