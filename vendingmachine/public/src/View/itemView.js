class ItemView {
  constructor(name, price, available, parent) {
    this.name = name;
    this.price = price;
    this.parent = parent;
    this.available = available;
  }
  init() {
    this.render();
  }
  render() {
    this.parent.innerHTML += this.makeTemplate();
  }
  makeTemplate() {
    return `<button ${this.available ? "" : "disabled"} class="item">
        <span>${this.name}</span>
        <span>${this.price}</span>
      </button>`;
  }
}

export default ItemView;
