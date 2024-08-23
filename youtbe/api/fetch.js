// fetch("./data.txt")
//   .then((response) => response.text())
//   .then((data) => console.log(data));

fetch("./data.txt")
  .then((response) => {
    console.log(response);
    console.log(response.statusText);
    return response.json();
  })
  .then((data) => {
    const arr = data.filter((val) => val.userId === 1);
    return arr;
  })
  .then((result) => console.log(result));

fetch("/hand")
  .then((response) => {
    if (response.status !== 200) {
      throw "error";
    }
  })
  .catch((err) => console.log(err));

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ userId: 1, title: "leihou", body: "leihou" }),
})
  .then((response) => {
    console.log(response.status);
    return response.json();
  })
  .then((data) => console.log(data));

const regex = /^[a-z].{0,10}/gm;

console.log(regex.test("a1234"));