//期约的状态是不可逆的

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 10000);
});

setTimeout(console.log, 0, p);
// setTimeout(console.log, 11000, p);

//通过Promise.resolve可以实例化一个已经解决的期约
setTimeout(console.log, 0, Promise.resolve(3));
setTimeout(console.log, 0, Promise.reject(3));

console.log(123);

//期约的返回值

let p1 = Promise.resolve("foo");
setTimeout(console.log, 0, p1.then(), "p1.then()");

let p2 = Promise.resolve();
setTimeout(console.log, 0, p2.then(), "p2.then()");

let p3 = p1.then(() => Promise.resolve("bar"));
setTimeout(console.log, 0, p3, "p3");

let p4 = p1.then(() => "bar");
setTimeout(console.log, 0, p4, "p4");

//因为期约是幂等

const promise1 = Promise.resolve("bar");
const promise2 = Promise.resolve(Promise.resolve("bar"));

setTimeout(console.log, 0, promise1, "promise1");
setTimeout(console.log, 0, promise2, "promise2");

//拒绝期约

let rejectPromise = Promise.reject("foo");

setTimeout(console.log, 0, rejectPromise.then(), "rejectPromise");
//乍一看这可能有点违反直觉，但是想一想，onRejected 处理程序的任务不就是捕获异步错误吗？
// 因此，拒绝处理程序在捕获错误后不抛出异常是符合期约的行为，应该返回一个解决期约
let rp1 = rejectPromise.then(null, () => "bar");
setTimeout(console.log, 0, rp1, "rp1");

let rp2 = rejectPromise.then(null, () => {
    throw "error";
});

setTimeout(console.log, 0, rp2, "rp2");

//catch
let Onreject = function (e) {
    setTimeout(console.log, 0, "rejected");
};
let catchPromise = Promise.reject(3);

setTimeout(console.log, 0, catchPromise.then(null, Onreject), "catchPromise");

//finally

let fp = Promise.resolve("foo");

setTimeout(console.log, 0, fp.finally(), "fp");
setTimeout(
    console.log,
    0,
    fp.finally(() => Promise.resolve("bar")),
    "fp"
);

setTimeout(console.log, 0, fp.finally(), "fp");

let ps = new Promise((resolve, reject) => {
    try {
        throw "error";
    } catch (e) {
        reject(e);
    }
    resolve("foo");
});

setTimeout(console.log, 0, ps, "ps");

console.log("-----------验证-------------");

let pp = Promise.resolve("bar");
let pp1 = Promise.resolve(Promise.resolve(pp));
let pp2 = Promise.reject("1234");

setTimeout(
    console.log,
    0,
    pp1,
    pp2.then(null, (x) => {
        console.log(x, "1234");
    }),
    "pp1"
);

console.log("------promise.all");

let pa = Promise.all([1, 2]);
setTimeout(console.log, 0, pa, "promise.all");
//有reject返回reject 没有返回最后一次的
let pa1 = Promise.all([
                          Promise.resolve("bar"),
                          Promise.resolve("bar1"),
                          Promise.reject("1234"),
                          Promise.resolve("bar2"),
                          Promise.resolve("bar4")
                      ]);

pa1
    .then((x) => {
        console.log(x, "all");
    })
    .catch((e) => {
        console.log(e, "all-error");
    });
setTimeout(console.log, 0, pa1.then(), "promise.all");

let pr = Promise.race([
                          // Promise.resolve("bar"),
                          new Promise((resolve, reject) => {
                              setTimeout(reject, 500);
                          }),
                          new Promise((resolve, reject) => {
                              setTimeout(resolve, 200);
                          })
                      ]);
setTimeout(console.log, 3000, pr, "promise.race");

let arr = [1, 2, 3, 4];

console.log(
    arr.reduce((prev, currentValue, index, arr) => prev + currentValue, 0)
);

function addTwo(x) {return x + 2;}

function addThree(x) {return x + 3;}

function addFive(x) {return x + 5;}

function addTen(x) {
    return [addTwo, addThree, addFive]
        .reduce((promise, fn) => {
            return promise.then(fn);
        }, Promise.resolve(x));
}

addTen(8).then((x) => {console.log(x, 'xxxxx');}).catch(console.log); // 18