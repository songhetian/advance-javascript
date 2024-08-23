// window.confirm("确定吗");
// window.prompt("niao");

const ulElement = document.querySelector(".ul_list");

console.log(ulElement.childNodes);
console.log(ulElement.firstChild);
console.log(ulElement.lastChild);
console.log(ulElement.firstElementChild);
console.log(ulElement.firstElementChild.nodeName);

console.log(ulElement.childNodes.item(1).parentNode);
console.log(ulElement.childNodes.item(1).parentElement);

console.log(ulElement.childNodes.item(1).previousSibling);
console.log(ulElement.childNodes.item(1).nextSibling);
console.log(ulElement.children);
console.log(ulElement.hasChildNodes());

const newNode = document.createElement("li");
newNode.textContent = "新加入的7";
ulElement.appendChild(newNode);

ulElement.insertBefore(newNode, ulElement.childNodes.item(6).nextSibling);
ulElement.insertBefore(newNode, ulElement.children.item(2));

ulElement.replaceChild(newNode, ulElement.childNodes.item(2));
ulElement.replaceChild(newNode, ulElement.children.item(2));

ulElement.removeChild(ulElement.firstChild);
ulElement.removeChild(ulElement.firstElementChild);

const deepClone = ulElement.cloneNode(true);
console.log(deepClone);
const deepClone1 = ulElement.cloneNode(false);
console.log(deepClone1);

console.log("---------Document----------------");

let html = document.documentElement; // 取得对<html>的引用
// alert(html === document.childNodes[0]); // true
// alert(html === document.firstChild);

console.log(document.title);
document.title = "DOM列表";

console.log(document.URL);
console.log(document.referrer);
console.log(document.domain);

document.write("123");
document.writeln("123");
document.writeln("123");

console.log(ulElement.tagName);
console.log(ulElement.nodeName);

console.log(ulElement.className);
console.log(ulElement.id);

console.log(ulElement.getAttribute("class"));
console.log(ulElement.getAttribute("data-src"));

ulElement.setAttribute("class", "class new-class");
console.log(ulElement.getAttribute("class"));

console.log(ulElement.attributes.getNamedItem("id").nodeValue);

ulElement.setAttribute("class", "class");

console.log(ulElement.children.item(0).nextElementSibling);
console.log(ulElement.children.item(0).nextSibling);

const text = document.createTextNode("function say() { alert(123)}");

ulElement.appendChild(text);
ulElement.insertBefore(text, ulElement.childNodes[0]);
ulElement.replaceChild(text, ulElement.childNodes[4]);
ulElement.replaceChild(text, ulElement.children.item(4));

ulElement.classList.add();
ulElement.classList.remove();
ulElement.classList.toggle();

//超时处理
const p = Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "成功");
  }),
  new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "超时");
  }),
]);

p.then((x) => console.log(x)).catch((e) => console.log(e));

async function asy() {
  console.log(2);
  await new Promise((resolve, reject) => {
    console.log("同步代码");
    setTimeout(() => {
      console.log(3);
    }, 2000);
  });
  return 1;
}

console.log(1);
asy().then((x) => console.log(x));
console.log(4);

//生成器
function* crate() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}

const c = crate();
console.log(c.next());

function* create() {
  yield* [1, 2, 3, 4];
}

c1 = create();
console.log(c1.next());