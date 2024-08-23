class Pizza {
  #age; //私有变量
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this._price = 1000;
    this.#age = 10;
  }

  get pizzaCrust() {
    return this.crust;
  }

  set pizzaCrust(value) {
    this.crust = value;
  }
}

const pizza = new Pizza(120, "必胜客");
console.log(pizza.pizzaCrust);
pizza.pizzaCrust = "麦当劳";
console.log(pizza.size);
console.log(pizza.crust);

/// 私有变量

const handler = {
  get(target, prototype) {
    if (prototype.startsWith("_")) return;
    return Reflect.get(...arguments);
  },
  set(target, prototype, value) {
    if (prototype.startsWith("_")) return;
    return Reflect.set(...arguments);
  },
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
};

const obj = new Proxy(pizza, handler);
obj.size = 10000;
console.log(obj.size);
console.log(obj.crust);
console.log(obj._price);

console.log(Object.keys(obj));

console.log(Object.getPrototypeOf(obj));

console.log(pizza.#age);
Symbol();