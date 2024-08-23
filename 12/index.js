// let obj = { name: "123", age: 100 };
//
// let proxy = new Proxy(obj, {
//   get (target, property, receiver)  {
//     console.log("获取了log");
//     return Reflect.get(...arguments);
//   },
//   set (target, property, value, receiver)  {
//     console.log(receiver);
//     return Reflect.set(...arguments);
//   },
// });
//
// proxy.name = "1234";
//
// console.log(proxy.name);

// const aa = async () => {
//   const str = await Promise.reject('foo1');
//   return "foo";
// };
//
// aa().then((x) => console.log(x));

//BOM

console.log(window.parent);
console.log(window.self);
console.log(this);

window.moveTo(20, 20);

console.log(window.screenLeft, window.screenTop);

//

console.log(window.outerWidth, window.outerHeight); //浏览器宽高
console.log(window.innerWidth, window.innerHeight); //页面宽高
console.log(
  document.documentElement.clientWidth,
  document.documentElement.clientHeight
); //页面宽高
console.log(document.body.clientWidth, document.body.clientHeight); //页面宽高

window.resizeTo(100, 200);

console.log(window.pageXOffset, window.pageYOffset);

console.log(window.screenX, window.screenY);

window.scrollTo({
  left: 100,
  top: 100,
  behavior: "smooth",
});

console.log(window.location);
console.log(location.href, location.hostname);

console.log(location.search);

console.log(window.screen.height, window.screen.width);

