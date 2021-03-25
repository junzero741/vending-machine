import Observable from "./observable.js";

export default class WalletModel extends Observable {
  constructor(data) {
    super();
    this.walletData = { coin: data, total: 0 };
  }

  insertCoin(data) {
    let selectCoin = this.walletData.coin.find((v) => v.unit === Number(data));
    if (selectCoin.cnt > 0) selectCoin.cnt--;
    else {
      alert(`${selectCoin.unit}짜리 지폐가 부족합니다`);
      return;
    }
    this.walletData.total += selectCoin.unit;
    this.notify([this.walletData, selectCoin]);
  }

  distributeCoin() {
    const moneyUnits = [10000, 5000, 1000, 500, 100, 50, 10];
    moneyUnits.forEach((e) => {
      let count = parseInt(this.walletData.total / e);
      this.walletData.total -= count * e;
      this.walletData.coin.find((v) => v.unit === e).cnt += count;
    });
  }

  resetCoin() {
    this.distributeCoin();
    let selectCoin = "reset";
    this.notify([this.walletData, selectCoin]);
  }

  buy(price, name) {
    if (this.walletData.total < price) {
      alert("돈이부족합니다!!");
      return;
    }
    this.walletData.total -= price;
    this.notify([this.walletData, name]);
  }
}
