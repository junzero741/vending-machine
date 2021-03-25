export default class Product {
  constructor(prod, index) {
    this.name = prod.name;
    this.price = prod.price;
    this.count = prod.count;
    this.status = false;
    this.index = index;
  }

  isEmpty() {
    return this.count === 0;
  }

  toggleStatus() {
    this.status = !this.status;
  }

  setCount(count) {
    this.count += count;
  }

}
