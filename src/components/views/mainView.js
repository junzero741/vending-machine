import OperationView from './operationView';

import OrderView from './orderView';
import WalletView from './walletView';

export default class MainView {
  constructor() {
    this.orderView = new OrderView();
    this.operationView = new OperationView();
    this.walletView = new WalletView();
  }

  async init() {
    return await this.render();
  }
  async render() {
    return `
    <div class="body__container">
      <div class="vending-machine">
        ${await this.orderView.render()}
        ${this.operationView.render()}
      </div>
      <div class="raccoon-wallet">
        ${this.walletView.render()}
      </div>
    </div>
    `;
  }
}
