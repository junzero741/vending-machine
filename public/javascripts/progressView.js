
import { _ } from './util';

export class ProgressView {
  constructor(VendingModel, selectors) {
    this.model = VendingModel;
    this.$ = selectors;
    this.init();
  }

  init() {
    this.model.subscribe((data) => {
      if (data.type === 'accountChange') this.updateAccount(data.value);
      if (data.type === 'inputMoney')
        this.updateLog(`${data.value}원이 투입되었습니다.`);
      if (data.type === 'sell') this.updateLog(`${data.value}가 팔렸습니다.`);
      if (data.type === 'returnMoney')
        this.updateLog(`${data.value}원만큼 반환되었습니다.`);
    });
    this.addEvent();
  }

  addEvent() {
    _.on(
      this.$.$returnButton,
      'click',
      this.model.returnMoney.bind(this.model)
    );
  }

  updateAccount(account) {
    this.$.$account.innerHTML = `${account}원`;
  }

  updateLog(message) {
    this.$.$display.innerHTML += `${message} <br>`;
  }

}
