// let nums = {
//   numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   [Symbol.iterator]() {
//     const _this = this;
//     let limit = 0;
//     return {
//       next() {
//         if (_this.numbers.length > limit) {
//           const obj = { done: false, value: _this.numbers[limit] };
//           limit++;
//           return obj;
//         } else {
//           return { done: true, value: undefined };
//         }
//       },
//     };
//   },
// };
// for (const num of nums) {
//   console.log(num);
// }
//
// const iter = nums[Symbol.iterator]();
// console.log(iter.next());

const str = "hello world";

const iter = str[Symbol.iterator]();
console.log(iter.next());

//生成器  生成数据

function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

// /生成器的执行机制
// 生成器函数() 并不是执行函数里的代码 而且是创建一个迭代器
// 调用next才开始执行生成器函数 执行遇到yield的时候就停止 并跳出这个函数 返回yield后面的值

let iter1 = genFunc();
console.log(iter1.next());

// 生成器函数的执行机制
// 1.通过调用生成器函数来创建迭代器 姿势生成器的代码不会执行
// 2.通过迭代器调用next执行生成器函数里的代码
// 3.执行遇到yield 暂时跳出函数 并把yield后面的执返回

// 迭代器的应用场景
// 第一个异步请求再去发送第二个请求 每个请求是基于前一次请求成功之后的

// 自定义迭代器
class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let index = 0;
    const _this = this;
    return {
      next() {
        if (index < _this.limit) {
          index++;
          return { done: false, value: index };
        } else {
          return { done: true, value: undefined };
        }
      },
      return() {
        console.log("手动退出");
        return { done: true };
      },
    };
  }
}

const counter = new Counter(3);

const iter2 = counter[Symbol.iterator]();

console.log(iter2.next());

for (const iter2Element of counter) {
  if (iter2Element > 1) break;
  console.log(iter2Element);
}

//生成器

function* nTimes(n) {
  while (n--) {
    yield;
  }
}

for (const i of nTimes(4)) {
  console.log("foo");
}

//yield作为参数使用
function* generatorFn(initial) {
  console.log(initial);
  console.log(yield);
  console.log(yield);
}

let generatorObject = generatorFn("foo");
generatorObject.next("bar");
generatorObject.next("tux");
generatorObject.next("age");

//生成器加强

function* generatorSuperObject() {
  yield* [1, 2, 3, 100];
}

for (const never of generatorSuperObject()) {
  console.log(never);
}
generatorSuperObject().return("123");

function* Ntime(n) {
  if (n > 0) {
    yield* Ntime(n - 1);
    yield n - 1;
  }
}

let n = Ntime(3);
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());

function* Ntime1(n) {
  yield n - 1;
}

function* n2() {
  yield* Ntime1(4);
}

let n2y = n2();
console.log(n2y.next());

let obj = {
  a: 12,
  fn() {
    const _this =  this;
    console.log(this);
    return {
      fn1() {
        console.log(this);
      },
    };
  },
};

obj.fn().fn1();
