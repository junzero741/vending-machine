import { _ } from '../../util/const';
import { createRandomNumber } from '../../util/util';
import FetchAPI from '../getData/fetchAPI';
import ProductModel from '../models/productModel';

export default class OrderView {
  constructor() {
    this.title = _.vendingMachineTitle;
    this.fetchAPI = new FetchAPI();
    this.productList = [];
  }

  async render() {
    await this.getOrderData();
    return `
      ${this.renderTitle()}
      ${this.renderOrderView()}
    `;
  }

  renderTitle() {
    return `
      <div class="order--title">
        ${this.title}
      </div>
      `;
  }

  getOrderItem(order, price, imgUrl, count) {
    return `
    <div class="list-group-item order--button__box">
      <button type="button" class="btn btn-default order--button" data-count="${count}">
        <img src=${imgUrl} title="${order}" alt="${order}">
        <div class="order--price"><span>${price} ${_.money}</span></div>
      </button>
    </div>
    `;
  }

  async getOrderData() {
    const response = await this.fetchAPI.fetchOrderData();
    const dataList = response.data;
    const dataListKeys = Object.keys(response.data);

    const emptyDataList = Array(_.productItemCount).fill();
    const orderDataList = emptyDataList.map(() => {
      const randomIdx = createRandomNumber(dataListKeys.length);
      const itemKey = dataListKeys[randomIdx];
      const item = dataList[itemKey];
      return {
        order: item.name,
        price: item.gold.base,
        imgUrl: `http://ddragon.leagueoflegends.com/cdn/11.6.1/img/item/${itemKey}.png`,
      };
    });
    this.productList = orderDataList.map((el) => {
      const product = new ProductModel(el.order, el.price, el.imgUrl);
      return product;
    });
  }

  renderOrderView() {
    const orderView = this.productList.reduce((acc, value) => {
      const { order, price, imgUrl, count } = value;
      acc += this.getOrderItem(order, price, imgUrl, count);
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
