export default class Controller {
  constructor(data) {
    this.data = data;
    this.init();
  }
  init() {
    this.changeItemCount(this.data);
  }

  changeItemCount(data) {
    data.count -= 1;
  }
}
