import OperatingView from './operatingView';
import OrderScreen from './orderScreen';
import WalletView from './walletView';

const orderScreen = new OrderScreen();
const operatingView = new OperatingView();
const walletView = new WalletView();

const orderTitleBox = orderScreen.renderTitle();
const buttonGroupBox = orderScreen.renderButtonGroup();
const operatingBox = operatingView.renderView();
const walletTitle = walletView.renderTitle();
const walletBox = walletView.renderUnitMoneyButton();

export default class MainView {
  init() {
    return this.render();
  }
  render() {
    return `
    <div class="body__container">
      <div class="vending-machine">
        ${orderTitleBox}
        ${buttonGroupBox}
        ${operatingBox}
      </div>
      <div class="raccoon-wallet">
        ${walletTitle}
        ${walletBox}
      </div>
    </div>
    `;
  }
}
