import { _ } from '../../util/const';

export default class OrderScreen {
  constructor() {
    this.title = _.vendingMachineTitle;
    this.buttonNumber = 20;
  }

  render() {
    return `
      ${this.renderTitle()}
      ${this.renderButtonGroup()}
    `;
  }

  renderTitle() {
    return `
      <div class="order--title">
        ${this.title}
      </div>
      `;
  }

  getOrderButton(order, price) {
    return `
    <div class="list-group-item order--button__box">
      <button type="button" class="btn btn-default order--button">${order}</button>
      <div class="order--price"><span>${price} ${_.money}</span></div>
    </div>
    `;
  }

  renderButtonGroup() {
    const tempArray = Array(this.buttonNumber).fill();
    const orderArray = [];
    const priceArray = [];
    const buttonGroup = tempArray.reduce((acc, cur) => {
      cur = this.getOrderButton(0, 0);
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
