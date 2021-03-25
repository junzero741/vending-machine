import Observable from "./observable.js";

export default class ProductModel extends Observable {
  constructor(data) {
    super();
    this.productData = data;
  }

  selectProduct(selectName) {
    this.reduceItemCount(this.checkData(selectName));
  }

  checkData(selectName) {
    return this.productData.find((product) => product.name === selectName);
  }

  reduceItemCount(data) {
    data.count--;
    if (data.count <= 0) {
      data.available = false;
      this.notify(this.productData);
    }
  }
}
