import { _ } from '../../util/const';
import { createRandomNumber } from '../../util/util';

export default class CreateWalletData {
  getWalletData() {
    const walletDataArray = _.walletMoneyArray.map((el) => {
      return {
        unit: el,
        count: createRandomNumber(),
      };
    });
    return walletDataArray;
  }

  getWalletMoney() {
    const walletDataArray = this.getWalletData();
    const walletMoney = walletDataArray.reduce((acc, cur) => {
      const units = cur.unit * cur.count;
      console.log(cur.unit, cur.count);
      acc += units;
      return acc;
    }, 0);
    const result = { walletDataArray, walletMoney };
    return result;
  }
}
