import { _ } from '../../util/const';
import { createRandomNumber } from '../../util/util';
import FetchProductData from '../getData/fetchProductData';
import ProductModel from './productModel';

export default class ProductListModel extends ProductModel {
  constructor() {
    super();
    this.fetchProductData = new FetchProductData();
    this.productList = [];
  }

  changeCount(data) {
    console.log(data.id)
    console.log(this.productList)
  }



  async getOrderData() {
    const response = await this.fetchProductData.fetchProductData();
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
    this.productList = orderDataList.map(({ order, price, imgUrl }) => {
      const product = new ProductModel(order, price, imgUrl);
      return product;
    });
  }
}
