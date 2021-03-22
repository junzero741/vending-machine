export default class Product {
  constructor(prod) {
    this.name = prod.name;
    this.price = prod.price;
    this.count = prod.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  setCount(newCount) {
    this.count = newCount;
  }
}
