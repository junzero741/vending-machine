import { _ } from "../utils.js";

export default class WalletView {
  constructor(walletModel, view) {
    this.walletModel = walletModel;
    this.view = view;
    this.walletBalanceHtml = null;
    this.currencyHtmls = null;
    this.init();
  }

  init() {
    this.setInitialView();
    this.clickCurrency();
    this.walletModel.subscribe(this.setView.bind(this));
  }

  // subscribe walletView setView
  setView({ target, balance }) {
    if (!target) return;
    this.currencyHtmls[target.getIndex()].classList.remove("disable");
    if (target.getCount() === 0) this.currencyHtmls[target.getIndex()].classList.add("disable");
    this.currencyHtmls[target.getIndex()].lastElementChild.innerText = `${target.getCount()}개`;
    this.walletBalanceHtml.firstElementChild.innerText = `${balance}`;
  }

  setInitialView() {
    const template = (unit, count) => {
      return /*html*/ `
        <li class="currency ${count === 0 ? "disable" : ""}">
          <div class="currency__unit" data-value="${unit}">${unit}원</div>
          <div class="currency__count" >${count}개</div>
        </li>
        `;
    };
    const templateBottom = () => {
      return /*html*/ `
        <li class="balance">
          <p>${this.walletModel.getBalance()}</p>
          <span>원</span>
        </li>
        `;
    };
    this.view.innerHTML = this.walletModel.getCurrencies().reduce((acc, val) => acc + template(val.getValue(), val.getCount()), `<ul class="currencies">`) + templateBottom() + `</ul>`;
    this.currencyHtmls = _.$$(".currency", this.view);
    this.walletBalanceHtml = _.$(".balance", this.view);
  }

  clickCurrency() {
    this.view.addEventListener("click", (e) => {
      const { target } = e;
      if (!target.classList.contains("currency__unit")) return;
      const sameCurrency = this.walletModel.getCurrencies().find((curr) => curr.getValue() === Number(target.dataset.value));
      if (!sameCurrency || sameCurrency.getCount() === 0) return;
      this.walletModel.updateCurrency(sameCurrency, -1);
      this.walletModel.updateInsertedBalance(sameCurrency.getValue());
    });
  }
}
