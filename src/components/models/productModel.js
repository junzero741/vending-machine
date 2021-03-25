import { createRandomNumber } from '../../util/util';
import Observer from '../observer/observer';
import { $ } from '../../util/util';

export default class ProductModel extends Observer {
  constructor(order, price, imgUrl) {
    super();
    this.order = order;
    this.price = price;
    this.imgUrl = imgUrl;
    this.count = createRandomNumber(10);
  }

  isEmpty() {
    return this.count === 0;
  }

  changeSoldOutColor() {
    console.log(this.count);
    if (this.isEmpty()) {
      $(`.order--button`).disabled = true;
    }
  }

  updateCount() {
    this.count--;
  }
}
