const prepare = () => {
  return {
    prepare: () => {
      console.log("Preparing......");
    },
  };
};

const bake = () => {
  return {
      bake: () => {
      console.log("Baking......");
    },
  };
};

const toss = () => {
  return {
      toss: () => {
      console.log("Tossing......");
    },
  };
};

const ready = () => {
  return {
      ready: () => {
      console.log("Ready!......");
    },
  };
};

const stuff = () => {
  return {
      stuff: () => {
      console.log("stuffing the crust......");
    },
  };
};

const butter = () => {
  return {
      butter: () => {
      console.log("buttering the crust......");
    },
  };
};

const createPizza = (size, crust, sauce) => {
  const pizza = {
    size: size,
    crust: crust,
    sauce: sauce,
    toppings: [],
  };

  return {
    ...pizza,
    ...prepare(),
    ...bake(),
    ...ready(),
  };
};

let obj = {
  ...prepare(), 
    ...butter(),
    ...bake(),
};
console.log(obj);

let obj1 = { name: "123", age: 12 };

const { name, ...obj2 } = obj1;

console.log(obj2);
