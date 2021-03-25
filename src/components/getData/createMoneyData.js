import { createRandomNumber } from '../../util/util';
import FetchAPI from './fetchAPI';
import { _ } from '../../util/const';

export default class CreateMoneyData {
  constructor() {
    this.fetchAPI = new FetchAPI();
  }

  getCount() {
    return createRandomNumber();
  }

  async getOrderData() {
    return await this.fetchAPI.fetchOrderData();
  }
}
