import Observable from './observable.js';

export class WalletModel extends Observable {
  constructor() {
    super();
    this.individualCurrencyUnit = [
      { currencyUnit: 10000, count: 0 },
      { currencyUnit: 5000, count: 0 },
      { currencyUnit: 1000, count: 0 },
      { currencyUnit: 500, count: 0 },
      { currencyUnit: 100, count: 0 },
      { currencyUnit: 50, count: 0 },
      { currencyUnit: 10, count: 0 },
    ];
    this.totalAmount = 0;
  }

  changeToCurrencyUnit(evt) {
    this.totalAmount = evt.target.value;
    const currencyUnits = [10000, 5000, 1000, 500, 100, 50, 10];
    const checkCurrentUnit = () => {
      const curProperty = this.individualCurrencyUnit;
      let amount = this.totalAmount;
      currencyUnits.map((cur) => {
        const currentUnit = curProperty.find((v) => v.currencyUnit === cur);
        currentUnit.count = ~~(amount / cur);
        amount -= currentUnit.count * cur;
      });
    };
    checkCurrentUnit();
    this.notify(this);
  }

  deductAmount(selectedCurrency) {
    const targetUnit = this.individualCurrencyUnit.find(
      (v) => v.currencyUnit === selectedCurrency
    );
    targetUnit.count--;
    this.totalAmount -= selectedCurrency;
    this.notify(this);
  }

  addAmount(money){
    this.changeToCurrencyUnit({
      target:{
        value: this.totalAmount + money
      }
    })
    this.notify(this);
  }
}
