import { _, request, delay } from "../utils.js";
import { URL, NUMBERS } from "../variables.js";

export default class ProductView {
  constructor(walletModel, productModel, view) {
    this.walletModel = walletModel;
    this.productModel = productModel;
    this.view = view;
    this.productHtmls = null;
    this.init();
  }

  setView({ target, type }) {
    if (!target || type) return;
    const currHtml = this.productHtmls[target.getIndex()];
    currHtml.classList.remove("active", "disable");
    currHtml.classList.add(target.getStatus() ? "active" : "disable");
  }

  updateProductState({ flag, insertedBalance = null }) {
    if (!flag || insertedBalance === null) return;
    this.productModel.updateStatus(insertedBalance);
  }

  async init() {
    const data = await request(URL.PROD);
    this.productModel.setInitialData(data.product);
    this.setInitialView();
    this.buyProduct();
    this.productModel.subscribe(this.setView.bind(this));
    this.walletModel.subscribe(this.updateProductState.bind(this));
  }

  setInitialView() {
    const template = (item) => {
      return /*html*/ `
        <div class="item ${item.status ? "active" : "disable"}">
          <div class="item__name">${item.getName()}</div>
          <div class="item__price">${item.getPrice()}</div>
        </div>
          `;
    };
    this.view.innerHTML = this.productModel.getProductList().reduce((acc, item) => acc + template(item), `<div class="items">`) + `</div>`;
    this.productHtmls = _.$$(".item", this.view);
  }

  buyProduct() {
    this.view.addEventListener("click", async ({ target }) => {
      const itemBox = target.closest(".item");
      if (!itemBox) return;
      this.walletModel.getTimer().setCount(0);
      this.walletModel.getTimer().toggleClassOfTimerHtml("add", "hidden");
      await delay(NUMBERS.BUYPRODUCT);
      const sameProduct = this.productModel.getProductList().find((item) => item.getName() === itemBox.firstElementChild.innerText);
      if (!sameProduct || sameProduct.getPrice() > this.walletModel.getInsertedBalance()) return;
      this.walletModel.updateInsertedBalance(-1 * sameProduct.getPrice(), "buy");
      this.productModel.updateCount(sameProduct);
    });
  }
}
