import { addClassName, createRandomNumber, isEmpty } from '../../util/util';

export default class ProductModel {
  constructor(order, price, imgUrl) {
    this.order = order;
    this.price = price;
    this.imgUrl = imgUrl;
    this.count = createRandomNumber(10);
  }

  changeStatePossible() {
    addClassName(`order--button`, `order--button--possible`);
  }


}
