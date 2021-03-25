
import { _ } from './util.js';
export class ProductView {
  constructor(selectors, { productInfo }, model) {
    this.$ = selectors;
    this.model = model;
    this.itemList = productInfo;
    this.bindedEvent = this.selectProduct.bind(this);
    this.init();
  }

  init() {
    this.render();
    this.model.subscribe((data) => {
      if (data.type === 'purchasableList') this.addHighlight(data.value);
    });
    this.addEvent();
  }

  render() {
    let html = '';
    this.itemList.forEach(({ name, price }) => {
      html += `<li class="product__item">
               		<div class="product__item--name">${name}</div>
                    <div class="product__item--price">${price}</div>
                </li>`;
    });
    this.$.$itemList.innerHTML = html;
  }

  addHighlight(purchasableList) {
    const itemNames = _.$a('.product__item--name', this.$.$itemList);
    itemNames.forEach((e) => _.cr(e, 'highlighted'));
    purchasableList.forEach(({ id }) => _.ca(itemNames[id], 'highlighted'));
  }

  async selectProduct({ target }) {
    if (target.className !== 'product__item--name highlighted') return;
    _.ca(target, 'selected');
    this.$.$itemList.removeEventListener('click', this.bindedEvent);
    await _.delay(() => this.model.sell(target.innerHTML), 2000);
    _.cr(target, 'selected');
    this.addEvent();
  }

  addEvent() {
    _.on(this.$.$itemList, 'click', this.bindedEvent);
  }

}
