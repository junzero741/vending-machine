class ItemView {
  constructor(name, price, parent) {
    this.name = name;
    this.price = price;
    this.parent = parent;
  }
  init() {
    this.render();
  }
  render() {
    this.parent.innerHTML += this.makeTemplate();
  }
  makeTemplate() {
    return `<div class="item">
        <span>${this.name}</span>
        <span>${this.price}</span>
      </div>`;
  }
}

export default ItemView;
