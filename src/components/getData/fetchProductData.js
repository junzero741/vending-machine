import { _ } from '../../util/const';

export default class FetchProductData {
  async fetchProductData() {
    const response = await fetch(_.riotDataUrl);
    const data = await response.json();
    return data;
  }
}
