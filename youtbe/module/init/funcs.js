const sayHello = function () {
  console.log("Hello");
};

const fun1 = () => {
  console.log("fun1");
};
const fun2 = () => {
  console.log("fun2");
};

// export default sayHello;
export {sayHello, fun1, fun2 };