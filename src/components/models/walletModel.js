import { _ } from '../../util/const';
import { $$, updateInputData } from '../../util/util';
import { createWalletData } from '../getData/createWalletData';

export default class WalletModel {
  constructor() {
    this.wallet = createWalletData();
    this.walletData = this.wallet.walletData;
    this.walletMoney = this.wallet.walletMoney;
  }

  updateWalletData() {
    const walletButtonContainer = $$('.wallet--button__box');
    walletButtonContainer.forEach((el, idx) => {
      el.querySelector('.wallet--count > span').innerText = `${this.walletData[idx].count} ${_.count}`;
    });
  }

  updateWalletMoney() {
    updateInputData(`wallet--money__input`, this.walletMoney);
  }

  minusMoney(unit) {
    for (const key in this.walletData) {
      if (this.walletData[key].unit === +unit) {
        this.walletData[key].count--;
      }
    }
  }

  plusMoney(data) {
    if (data === undefined) return;
    for (const key in this.walletData) {
      if (this.walletData[key].unit === data[key].unit) {
        this.walletData[key].count += data[key].count;
      }
    }
  }

  getReturnExtraMoney() {
    this.walletMoney = this.walletData.reduce((acc, cur) => {
      const units = cur.unit * cur.count;
      acc += units;
      return acc;
    }, 0);
  }

  getExtraMoney(unit) {
    this.walletMoney -= +unit;
  }

  checkUnitMoneyCount(idx) {
    return this.walletData[idx].count === 0;
  }

  toggleDisableButton() {
    const walletButtonContainer = $$('.wallet--button__box');
    walletButtonContainer.forEach((el, idx) => {
      if (this.checkUnitMoneyCount(idx)) {
        el.querySelector('.wallet--button').disabled = true;
        this.addColorDiasbleButton(el, `wallet--count`, `wallet--count--disabled`);
      } else {
        el.querySelector('.wallet--button').disabled = false;
        this.removeColorDiasbleButton(el, `wallet--count`, `wallet--count--disabled`);
      }
    });
  }

  removeColorDiasbleButton(element, className, removeClassName) {
    element.querySelector(`.${className}`).classList.remove(removeClassName);
  }

  addColorDiasbleButton(element, className, addClassName) {
    element.querySelector(`.${className}`).classList.add(addClassName);
  }
}
