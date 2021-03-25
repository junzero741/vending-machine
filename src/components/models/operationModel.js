import { _ } from '../../util/const';
import { updateInputData } from '../../util/util';
import Observer from '../observer/observer';

export default class OperationModel extends Observer {
  constructor() {
    super();
    this.insertMoney = 0;
    this.message = _.infoMessage;
    this.displayMoneySubscribe();
  }

  displayMoneySubscribe() {
    this.subscribe(this.plusDisplayMoney.bind(this));
    this.subscribe(this.updateDisplayMoney.bind(this));
  }

  plusDisplayMoney(unit) {
    this.insertMoney += +unit;
  }

  updateDisplayMoney() {
    updateInputData(`insert--money__input`, this.insertMoney);
  }
}
