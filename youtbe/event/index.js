const first = document.querySelector(".first");
const second = document.querySelector(".second");
const thr = document.querySelector(".thr");
const pElement = thr.querySelector("p");

first.addEventListener(
  "click",
  function (event) {
    document.body.style.background = "white";
    this.style.background = "green";
  },
  true
);
second.addEventListener(
  "click",
  function (event) {
    event.stopPropagation(); //节流
    this.style.background = "purple";
  },
  true
);
thr.addEventListener(
  "click",
  function (event) {
    // event.stopPropagation(); //节流
    this.style.background = "greenyellow";
  },
  true
);
pElement.addEventListener(
  "click",
  function (event) {
    this.style.background = "yellow";
  },
  true
);