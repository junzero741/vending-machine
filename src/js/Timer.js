import { NUMBERS } from "./variables.js";
import { _ } from "./utils.js";

export default class Timer {
  constructor(target) {
    this.count = 0;
    this.target = target;
    this.timerHtml = null;
  }

  getCount() {
    return this.count;
  }

  getTarget() {
    return this.target;
  }

  getTimerHtml() {
    return this.timerHtml;
  }

  setTextIntoTimerHtml(text) {
    this.timerHtml.innerText = text;
  }

  toggleClassOfTimerHtml(flag, classname) {
    if (flag === "remove") this.timerHtml.classList.remove(classname);
    if (flag === "add") this.timerHtml.classList.add(classname);
  }

  setCount(value) {
    this.count = value;
  }

  init(walletModel) {
    this.render();
    this.timerHtml = _.$(".timer");
    setInterval(() => {
      if (this.count >= NUMBERS.TERM) {
        walletModel.returnBalance();
        this.count = 0;
        this.timerHtml.classList.add("hidden");
        return;
      }
      this.timerHtml.innerText = ++this.count;
    }, NUMBERS.INITMS);
  }

  render() {
    this.target.insertAdjacentHTML("beforeend", "<div class='timer hidden'></div>");
  }
}
