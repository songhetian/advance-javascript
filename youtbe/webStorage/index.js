const btn = document.querySelector(".btn");
const remove = document.querySelector(".remove");

btn.addEventListener("click", function () {
  localStorage.setItem("name", "测试1");
  document.querySelector("p").textContent = localStorage.getItem("name");
});

remove.addEventListener("click", function () {
  localStorage.clear();
  document.querySelector("p").textContent = localStorage.getItem("name");
});

document.addEventListener("click", function (event) {
    console.log(event.clientX);
    console.log(event.clientY);
});