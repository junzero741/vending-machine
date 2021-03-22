import { _ } from '../../util/const';

export default class WalletView {
  constructor() {
    this.unitMoneyArray = [10, 50, 100, 500, 1000, 5000, 10000];
    this.title = 'Lonely Wallet';
  }

  renderTitle() {
    return `
      <div class="wallet--title">
        ${this.title}
      </div>
      `;
  }

  renderWalletMoney() {
    return `
    <div class="order--title">
      ${this.title}
    </div>
      `;
  }

  getWalletMoney() {
    return `
    <div class="list-group-item order--button__box">
      <button type="button" class="btn btn-default order--button">${this.order}</button>
      <div class="order--price"><span>${this.price}</span></div>
    </div>
      `;
  }

  getOperatingInfo() {}

  getUnitMoneyButton(unit) {
    return `
    <div class="list-group-item wallet--button__box">
      <button type="button" class="btn btn-default wallet--button">${unit} ${_.money}</button>
      <div class="wallet--count"><span>count ${_.count}</span></div>
    </div>
    `;
  }

  renderUnitMoneyButton() {
    const buttonGroup = this.unitMoneyArray.reduce((acc, cur) => {
      let button = this.getUnitMoneyButton(cur);
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
