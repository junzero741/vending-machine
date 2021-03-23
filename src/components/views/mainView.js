import CreateMoneyData from '../models/createMoneyData';
import CreateWalletData from '../models/createWalletData';
import OperatingView from './operatingView';
import OrderScreen from './orderScreen';
import WalletView from './walletView';

const createMoneyData = new CreateMoneyData();
createMoneyData.getOrderData().then((res) => console.log(res.data));

const createWalletData = new CreateWalletData();
const walletData = createWalletData.getWalletMoney();

export default class MainView {
  constructor() {
    this.orderScreen = new OrderScreen();
    this.operatingScreen = new OperatingView();
    this.walletScreen = new WalletView(
      walletData.walletDataArray,
      walletData.walletMoney
    );
  }

  init() {
    return this.render();
  }
  render() {
    return `
    <div class="body__container">
      <div class="vending-machine">
        ${this.orderScreen.render()}
        ${this.operatingScreen.render()}
      </div>
      <div class="raccoon-wallet">
        ${this.walletScreen.render()}
      </div>
    </div>
    `;
  }
}
