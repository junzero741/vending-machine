import { _ } from '../../util/const';
import { updateInputData } from '../../util/util';
import { $$ } from '../../util/util';

export default class OperationModel {
  constructor() {
    this.insertMoney = 0;
    this.message = _.infoMessage;
  }

  isEnough(insertMoney, price) {
    return insertMoney >= +price;
  }

  changeStatePossible() {
    const classList = $$(`.order--button`);
    classList.forEach((el) => {
      if (this.isEnough(this.insertMoney, el.dataset.price)) {
        el.classList.add('order--button--possible');
        el.disabled = false;
      }
    });
  }

  changeStateImpossible() {
    const classList = $$(`.order--button`);
    classList.forEach((el) => {
      if (!this.isEnough(this.insertMoney, el.dataset.price)) {
        el.classList.remove('order--button--possible');
        el.disabled = true;
      }
    });
  }

  plusDisplayMoney(unit) {
    this.insertMoney += +unit;
  }

  updateDisplayMoney() {
    updateInputData(`insert--money__input`, this.insertMoney);
  }

  initCurrentMoney() {
    this.insertMoney = 0;
  }

  calculateReturnMoney() {
    let returnMoney = +this.insertMoney;
    const returnMoneyData = _.walletMoneyList.map((el) => {
      const moneyData = {
        unit: 0,
        count: 0,
      };
      if (returnMoney >= el) {
        moneyData.unit = el;
        moneyData.count = parseInt(returnMoney / el);
        returnMoney %= el;
      } else {
        moneyData.unit = el;
        moneyData.count = parseInt(returnMoney / el);
      }
      return moneyData;
    });
    this.initCurrentMoney();
    return returnMoneyData;
  }
}
