import ItemView from "./itemView.js";
import Controller from "./controller.js";
import _ from "./util.js";

class ListView {
  constructor(data, parent) {
    //this.render(data);
    this.data = data;
    this.parent = parent;
    this.init();
  }
  init() {
    this.render(this.data);
    _.on(this.parent, "click", ({ target }) => {
      this.clickHandler(target.closest("div"));
    });
  }
  render(data) {
    data.forEach((item) => {
      new ItemView(item.name, item.price, this.parent).init();
    });
  }
  clickHandler(target) {
    if (target.classList[0] === "item") {
      target.classList.add("select");
      const selectName = target.children[0].innerText;
      new Controller(this.checkData(this.data, selectName));
    }
  }
  checkData(data, selectName) {
    return data.filter((item) => item.name === selectName)[0];
  }
}
export default ListView;
