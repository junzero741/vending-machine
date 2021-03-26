import Observable from "../Observable.js";
import { getRandom } from "../utils.js";
import { NUMBERS, TYPES } from "../variables.js";
import Currency from "./Currency.js";

export default class WalletModel extends Observable {
  constructor(timer) {
    super();
    this.currencies = null;
    this.insertedBalance = 0;
    this.balance = 0;
    this.timer = timer;
    this.init();
  }

  init() {
    this.balance = getRandom(NUMBERS.DEFAULTVALUE);
    this.setInitialCurrencies();
    this.distributeCurrency(this.balance);
  }

  getTimer() {
    return this.timer;
  }

  getInsertedBalance() {
    return this.insertedBalance;
  }

  getCurrencies() {
    return this.currencies;
  }

  getBalance() {
    return this.balance;
  }

  setInitialCurrencies() {
    this.currencies = TYPES.map((curr, i) => new Currency(curr, 0, i));
  }

  // 첫 지갑 총액 - 화폐 랜덤 분배
  distributeCurrency(balance) {
    while (balance > 0) {
      const randomCount = parseInt(Math.random() * this.currencies.length);
      const target = this.currencies[randomCount];
      if (target.getValue() > balance) continue;
      balance -= target.getValue();
      target.setCount(+1);
    }
  }

  // 반환 후 합산된 지갑 총액 기준으로 큰 화폐 단위 우선 분배 - 화폐 개수 갱신
  updateCurrencies(balance) {
    this.currencies.reduceRight((arr, cur) => {
      const currencyCount = parseInt(balance / cur.getValue());
      if (currencyCount) {
        balance -= cur.getValue() * currencyCount;
        this.updateCurrency(cur, currencyCount);
      }
    }, 0);
  }

  // 화폐 개수 갱신, 총액 값 갱신
  // notify productView setView
  //        walletView setView
  updateCurrency(target, count) {
    target.setCount(count);
    this.updateBalance(target.getValue() * count);
    this.notify({ target, ...this });
  }

  // 지갑 총액 갱신
  updateBalance(balance) {
    this.balance += balance;
  }

  // notify processView setViewAboutWallet
  updateInsertedBalance(value, type = "") {
    if (type !== "buy") type = this.insertedBalance + value ? "insert" : "return";
    this.timer.setCount(0);
    this.timer.setTextIntoTimerHtml(this.timer.getCount());
    this.timer.toggleClassOfTimerHtml("remove", "hidden");
    this.insertedBalance += value;
    this.notify({ flag: true, ...this, type, insertedCurrency: value });
  }

  returnBalance() {
    if (!this.insertedBalance) return;
    this.updateCurrencies(this.insertedBalance);
    this.updateInsertedBalance(-1 * this.insertedBalance);
  }
}
