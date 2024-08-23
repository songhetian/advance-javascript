// function myArray(array, data) {
//   const newArray = [...array];
//   newArray.push(data);
//   return newArray;
// }

const myArray = (array, data) => [...array, data];

const arr = [1, 2, 3];

const newArr = myArray(arr, 4);

console.log(arr);
console.log(newArr);

function test() {
  console.log(num);
}

test((num = 123));

//IIEF就是为了创建私有的作用域

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log(this);
});

let obj = {
  name: "123",
  age: 12,
  say() {
    console.log(this);

    function say1() {
      console.log(this);
    }
    
    say1();
  },
};

obj.say();
