import CoinItem from "./coinItem.js";
import _ from "../util.js";

export default class WalletView {
  constructor(walletModel, parent) {
    this.walletModel = walletModel;
    this.walletData = walletModel.walletData;
    this.ul = this.MakeUlContainer(parent);
    this.total = this.MakeTotalContainer(parent);
    this.parent = parent;
    this.init();
  }

  init() {
    this.renderCoinItem(this.walletData);
    this.renderTotalMoney(this.walletData);
    this.walletModel.subscribe((data) => this.updateCoinItem(data[0]));
    this.walletModel.subscribe((data) => this.renderTotalMoney(data[0]));
    this.onClickEvent(this.ul);
  }
  MakeTotalContainer(parent) {
    const div = _.genEl("DIV", {
      classNames: ["wallet__total"],
    });
    parent.appendChild(div);
    return div;
  }

  MakeUlContainer(parent) {
    const ul = _.genEl("UL", {
      classNames: ["wallet__coins"],
    });
    parent.appendChild(ul);
    return ul;
  }

  renderCoinItem(wallet) {
    wallet.coin.forEach((c) => new CoinItem(c.unit, c.cnt, this.ul).init());
  }

  renderTotalMoney(wallet) {
    this.total.innerHTML = `${this.getTotalMoney(wallet)} 원`;
  }

  getTotalMoney(wallet) {
    return wallet.coin.reduce((acc, cur) => (acc += cur.unit * cur.cnt), 0);
  }

  updateCoinItem(wallet) {
    this.ul.innerHTML = "";
    this.renderCoinItem(wallet);
  }

  onClickEvent(parents) {
    _.on(parents, "click", ({ target }) => this.clickHandler(target));
  }

  clickHandler(target) {
    if (target.tagName !== "BUTTON") return;
    this.walletModel.insertCoin(target.className);
  }
}
