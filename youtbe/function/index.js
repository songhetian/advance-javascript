//去抖函数1

const clickLog = () => console.log("Clicked");

const btn = document.querySelector(".btn");

const debounce = function (fn, delay) {
  let id;
  console.log(`id at immediate load: ${id}`);
  return (...args) => {
    console.log(`previous id : ${id}`);
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
btn.addEventListener("click", debounce(clickLog, 2000));

document.querySelector(".btn1").addEventListener("click", function () {
  console.log("clicked");
  this.disabled = true;
  setTimeout(() => {
    this.disabled = false;
  }, 2000);
});

const throttleFunc = (fn, delay) => {
  let now = 0;
  return (...args) => {
    const time = new Date().getTime();
    // console.log(time);
    if (time - now < delay) return;
    fn(...args);
    now = time;
  };
};

const throttle = document.querySelector(".btn2");

throttle.addEventListener("click", throttleFunc(clickLog,2000));

window.addEventListener("scroll", throttleFunc(clickLog,2000));
