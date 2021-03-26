import Observable from "../Observable.js";
import Product from "./Product.js";

export default class ProductModel extends Observable {
  constructor() {
    super();
    this.productList = null;
  }

  getProductList() {
    return this.productList;
  }

  // notify processView setViewAboutProduct
  updateCount(target) {
    this.notify({ type: "buy", target });
    target.setCount(-1);
  }

  setInitialData(data) {
    this.productList = data.map((e, i) => new Product(e, i));
  }

  // notify productView setView
  updateStatus(balance) {
    this.productList.forEach((target) => {
      if (this.isStatusChange(target, balance)) {
        target.toggleStatus();
        this.notify({ target });
      }
    });
  }

  isStatusChange(target, balance) {
    return (target.getStatus() && (target.getPrice() > balance || !target.getCount())) || (!target.getStatus() && target.getPrice() <= balance && target.getCount() > 0);
  }
}
