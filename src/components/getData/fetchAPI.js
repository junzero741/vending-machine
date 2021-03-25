import { _ } from '../../util/const';

export default class FetchAPI {
  async fetchOrderData() {
    const response = await fetch(_.riotDataUrl);
    const data = await response.json();
    return data;
  }
}
