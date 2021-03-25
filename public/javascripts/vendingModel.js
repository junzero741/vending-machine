
import { _ } from './util.js';
import Observable from './observable.js';

export class VendingModel extends Observable {
  constructor(data, walletModel) {
    super();
    this.wallet = walletModel;
    this.itemList = data.productInfo;
    this.account = 0;
    this.timer;
  }

  inputMoney(money) {
    this.account += money;
    this.changeMoneyEvent();
    this.notify({
      type: 'inputMoney',
      value: money,
    });
  }

  getPurchasableList(money) {
    return this.itemList.filter((e) => e.price <= money && e.stock > 0);
  }

  changeMoneyEvent() {
    this.notify({
      type: 'purchasableList',
      value: this.getPurchasableList(this.account),
    });
    this.notify({
      type: 'accountChange',
      value: this.account,
    });
    this.resetTimer();
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.timer = setTimeout(this.returnMoney.bind(this), 5000);
  }

  returnMoney() {
    if (this.account === 0) return;
    this.wallet.addAccount(this.account);
    this.notify({
      type: 'returnMoney',
      value: this.account,
    });
    this.account = 0;
    this.changeMoneyEvent();
  }

  sell(itemName) {
    const targetItem = this.itemList.find(({ name }) => name === itemName);
    if (targetItem.stock === 0) return;
    targetItem.stock--;
    this.account -= targetItem.price;
    this.changeMoneyEvent();
    this.notify({
      type: 'sell',
      value: itemName,
    });
  }

}
