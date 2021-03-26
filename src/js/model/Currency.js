export default class Currency {
  constructor(value = 0, count = 0, index) {
    this.value = value;
    this.count = count;
    this.index = index;
  }

  getValue() {
    return this.value;
  }

  getCount() {
    return this.count;
  }

  getIndex() {
    return this.index;
  }

  isEmpty() {
    return this.count === 0;
  }

  setCount(count) {
    this.count += count;
  }
}
