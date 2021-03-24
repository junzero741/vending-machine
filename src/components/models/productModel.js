export default class ProductModel {
  constructor(order, price, imgUrl) {
    this.order = order;
    this.price = price;
    this.imgUrl = imgUrl;
    this.count = 10;
  }

  isNotEmpty() {
    return this.count > 0;
  }

  updateCount() {
    this.isNotEmpty() && this.count--;
  }
}
