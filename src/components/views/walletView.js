import { _ } from '../../util/const';
import { $, moneyComma } from '../../util/util';
import { walletButtonObservers, returnButtonObservers } from '../observer/observer';
import WalletModel from '../models/walletModel';

export default class WalletView extends WalletModel {
  constructor() {
    super();
    this.title = _.walletTitle;
    this.subscribeInsertMoney();
    this.subscribeReturnMoneyData();
  }

  subscribeInsertMoney() {
    walletButtonObservers.subscribe(this.minusMoney.bind(this));
    walletButtonObservers.subscribe(this.getExtraMoney.bind(this));
    walletButtonObservers.subscribe(this.updateWalletData.bind(this));
    walletButtonObservers.subscribe(this.updateWalletMoney.bind(this));
    walletButtonObservers.subscribe(this.toggleDisableButton.bind(this));
  }

  subscribeReturnMoneyData() {
    returnButtonObservers.subscribe(this.plusMoney.bind(this));
    returnButtonObservers.subscribe(this.getReturnExtraMoney.bind(this));
    returnButtonObservers.subscribe(this.updateWalletData.bind(this));
    returnButtonObservers.subscribe(this.updateWalletMoney.bind(this));
    returnButtonObservers.subscribe(this.toggleDisableButton.bind(this));
  }

  render() {
    return `
      ${this.renderTitle()}
      ${this.renderUnitMoneyButton()}
      ${this.renderWalletMoney()}
    `;
  }

  addEvent() {
    this.clickUnitMoneyButton();
    this.clickReturnButton();
  }

  clickUnitMoneyButton() {
    $('.wallet--button__container').addEventListener('click', (e) => walletButtonObservers.fire(e.target.id));
  }

  clickReturnButton() {
    $(`.extra--money__button`).addEventListener('click', () => returnButtonObservers.fire());
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
        <input type="text" class="form-control wallet--money__input" placeholder="${_.money}" value="${moneyComma(
      this.wallet.walletMoney
    )} ${_.money}">
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
      <button type="button" class="btn btn-default wallet--button" id=${unit}>${moneyComma(unit)} ${_.money}</button>
      <div class="wallet--count"><span>${count} ${_.count}</span></div>
    </div>
    `;
  }

  renderUnitMoneyButton() {
    const buttonGroup = this.wallet.walletData.reduce((acc, cur) => {
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
