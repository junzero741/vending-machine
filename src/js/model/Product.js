export default class Product {
  constructor(prod, index) {
    this.name = prod.name;
    this.price = prod.price;
    this.count = prod.count;
    this.status = false;
    this.index = index;
  }
  getIndex() {
    return this.index;
  }

  getPrice() {
    return this.price;
  }

  getStatus() {
    return this.status;
  }

  getCount() {
    return this.count;
  }

  getName() {
    return this.name;
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
