import Observer from '../observer/observer';
import { createWalletData } from '../getData/createWalletData';
import { _ } from '../../util/const';
import { $$, updateInputData } from '../../util/util';

export default class WalletModel extends Observer {
  constructor() {
    super();
    this.wallet = createWalletData();
    this.walletData = this.wallet.walletData;
    this.walletMoney = this.wallet.walletMoney;
    this.subscribeInsertMoney();
  }

  subscribeInsertMoney() {
    this.subscribe(this.minusMoney.bind(this));
    this.subscribe(this.getExtraMoney.bind(this));
    this.subscribe(this.updateWalletData.bind(this));
    this.subscribe(this.updateWalletMoney.bind(this));
    this.subscribe(this.toggleDisableButton.bind(this));
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

  plusMoney() {
    // 반환되는 잔돈을 unit별로 나눠서 더해주고
    // 지갑 잔돈을 구해주기
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
        this.toggleColorDiasbleButton(el, `wallet--count`, `wallet--count--disabled`);
      }
    });
  }

  toggleColorDiasbleButton(element, className, addClassName) {
    element.querySelector(`.${className}`).classList.add(addClassName);
  }
}
