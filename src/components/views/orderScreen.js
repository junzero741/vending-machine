import { _ } from '../../util/const';

export default class OrderScreen {
  constructor() {
    this.title = `Lonely Vending Machine`;
    this.buttonNumber = 20;
    this.order = 'order';
    this.price = 'price';
  }

  renderTitle() {
    return `
      <div class="order--title">
        ${this.title}
      </div>
      `;
  }

  getOrderButton() {
    // data는 fetch로 받아올 것
    return `
    <div class="list-group-item order--button__box">
      <button type="button" class="btn btn-default order--button">${this.order}</button>
      <div class="order--price"><span>${this.price} ${_.money}</span></div>
    </div>
    `;
  }

  renderButtonGroup() {
    const tempArray = Array(this.buttonNumber).fill();
    const buttonGroup = tempArray.reduce((acc, cur) => {
      cur = this.getOrderButton();
      acc += cur;
      return acc;
    }, ``);

    return `
    <div class="order--button__container">
      ${buttonGroup}
    </div>
    `;
  }

  etc() {
    return `
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-danger">Danger</button>
  `;
  }
}
