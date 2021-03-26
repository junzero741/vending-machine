import { _ } from '../../util/const';
import { $, $$ } from '../../util/util';
import ProductListModel from '../models/productListModel';
import { productButtonObservers } from '../observer/observer';

export default class ProductView extends ProductListModel {
  constructor() {
    super();
    this.title = _.vendingMachineTitle;
    this.subscribeProductButton()
  }


  subscribeProductButton() {
    productButtonObservers.subscribe(this.changeCount.bind(this));
  }

  async render() {
    await this.getOrderData();
    return `
      ${this.renderTitle()}
      ${this.renderOrderView()}
    `;
  }

  addEvent() {
    this.clickProductButton();
  }

  clickProductButton() {
    $('.order--button__container').addEventListener('click', (e) => {
        productButtonObservers.fire(e.target.closest('.order--button'))
      });
  }

  renderTitle() {
    return `
      <div class="order--title">
        ${this.title}
      </div>
      `;
  }

  getOrderItem(order, price, imgUrl, count, idx) {
    return `
    <div class="list-group-item order--button__box">
      <button type="button" id="${idx}" class="btn btn-default order--button" data-count="${count}" data-price="${price}" disabled>
        <img src=${imgUrl} title="${order}" alt="${order}">
        <div class="order--price"><span>${price} ${_.money}</span></div>
      </button>
    </div>
    `;
  }

  renderOrderView() {
    const orderView = this.productList.reduce((acc, value, idx) => {
      const { order, price, imgUrl, count } = value;
      acc += this.getOrderItem(order, price, imgUrl, count, idx);
      return acc;
    }, ``);

    return `
    <div class="order--button__container">
      ${orderView}
    </div>
    `;
  }

  etc() {
    return `
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-danger">Danger</button>
  `;
  }
}
