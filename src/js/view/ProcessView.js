import Observable from "../Observable.js";
import { _ } from "../utils.js";

export default class ProcessView extends Observable {
  constructor(walletModel, productModel, view) {
    super();
    this.walletModel = walletModel;
    this.productModel = productModel;
    this.insertedBalanceHtml = null;
    this.returnButton = null;
    this.statusBoard = null;
    this.view = view;
    this.init();
  }

  // subscribe walletModel updateInsertedBalance
  setViewAboutWallet({ flag, type, insertedCurrency }) {
    if (!flag || type === "buy") return;
    this.insertedBalanceHtml.value = `${this.walletModel.getInsertedBalance()}원`;
    this.printMessage(type, insertedCurrency);
  }

  setViewAboutProduct({ type, target }) {
    if (!type || type !== "buy") return;
    this.insertedBalanceHtml.value = `${this.walletModel.getInsertedBalance()}원`;
    this.printMessage(type, target);
  }

  init() {
    this.setInitialView();
    this.returnInsertedBalance();
    this.walletModel.subscribe(this.setViewAboutWallet.bind(this));
    this.productModel.subscribe(this.setViewAboutProduct.bind(this));
  }

  setInitialView() {
    const template = (value) => {
      return /*html*/ `
          <input class="inputBalance" value="${value}원" readonly>
          <button class="returnButton">반환</button>
          <div class="statusBoard"></div>
        `;
    };
    this.view.innerHTML = template(this.walletModel.getInsertedBalance());
    this.returnButton = _.$(".returnButton", this.view);
    this.statusBoard = _.$(".statusBoard", this.view);
    this.insertedBalanceHtml = _.$(".inputBalance", this.view);
  }

  printMessage(type, target) {
    const setMsg = (target) => {
      if (type === "buy") return `<p class="board__message">${target.getName()}(을/를) 구매하였습니다.</p>`;
      if (type === "insert") return `<p class="board__message">${target}원을 입금하였습니다.</p>`;
      if (type === "return") return `<p class="board__message">${-1 * target}원을 반환하였습니다.</p>`;
    };
    if (type === "insert" && target < 0) return;
    this.statusBoard.insertAdjacentHTML("beforeend", setMsg(target));
    this.statusBoard.scrollTop = this.statusBoard.scrollHeight;
  }

  returnInsertedBalance() {
    this.returnButton.addEventListener("click", () => this.walletModel.returnBalance());
  }
}
