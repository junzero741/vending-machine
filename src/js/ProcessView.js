import { _ } from "./utils.js";

export default class ProcessView {
  constructor(view, manager) {
    this.balance = 0;
    this.inputBalance = null;
    this.statusBoard = null;
    this.returnButton = null;
    this.manager = manager;
    this.view = view;
  }

  init() {
    this.render();
    this.updateBalance();
  }

  render() {
    const template = (value) => {
      return /*html*/ `
            <input class="inputBalance" value="${value}원" readonly>
            <button class="returnButton">반환</button>
            <div class="statusBoard"></div>
          `;
    };
    this.view.innerHTML = template(this.balance);
    this.returnButton = _.$(".returnButton", this.view);
    this.statusBoard = _.$(".statusBoard", this.view);
    this.inputBalance = _.$(".inputBalance", this.view);
  }

  printMessage(message) {
    this.statusBoard.insertAdjacentHTML("beforeend", `<p class="board__message">${message}</p>`);
  }

  setBalance(value) {
    if (value === 0) this.balance = value;
    else this.balance += Number(value);
    this.inputBalance.value = `${this.balance}원`;
    return this.balance;
  }

  updateBalance() {
    // 자판기 잔액 반환 이벤트
    // 지갑에 돈 추가
    // 자판기 잔액은 0원
    // 프린트
    this.returnButton.addEventListener("click", () => this.manager.returnBalance());
  }
}
