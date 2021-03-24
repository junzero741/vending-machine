import { _ } from '../../util/const';
import { moneyComma } from '../../util/util';

export default class WalletView {
  constructor(unitMoneyArray, myMoney) {
    this.unitMoneyArray = unitMoneyArray;
    this.myMoney = myMoney;
    this.title = _.walletTitle;
  }

  render() {
    return `
      ${this.renderTitle()}
      ${this.renderUnitMoneyButton()}
      ${this.renderWalletMoney()}
    `;
  }

  renderTitle() {
    return `
      <div class="wallet--title">
        ${this.title}
      </div>
      `;
  }

  getWalletMoney() {
    return `
    <form class="navbar-form wallet--money__form" role="search">
      <div class="form-group form-group-div">
        <input type="text" class="form-control wallet--money__input" placeholder="${_.money}" value="${moneyComma(this.myMoney)} ${_.money}">
      </div>
    </form>
      `;
  }

  renderWalletMoney() {
    return `
    <div class="wallet__box">
      ${this.getWalletMoney()}
    </div>
      `;
  }

  getUnitMoneyButton({ unit, count }) {
    return `
    <div class="list-group-item wallet--button__box">
      <button type="button" class="btn btn-default wallet--button">${moneyComma(unit)} ${_.money}</button>
      <div class="wallet--count"><span>${count} ${_.count}</span></div>
    </div>
    `;
  }

  renderUnitMoneyButton() {
    const buttonGroup = this.unitMoneyArray.reduce((acc, cur) => {
      const button = this.getUnitMoneyButton(cur);
      acc += button;
      return acc;
    }, ``);

    return `
    <div class="wallet--button__container">
      ${buttonGroup}
    </div>
    `;
  }
}
