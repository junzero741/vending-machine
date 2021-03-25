class coinItem {
  constructor(unit, cnt, parent) {
    this.unit = unit;
    this.cnt = cnt;
    this.parent = parent;
  }
  init() {
    this.render();
  }
  update() {
    this.parent.innerHTML = "";
  }
  render() {
    this.parent.innerHTML += this.makeCoinTemplate();
  }
  makeCoinTemplate() {
    return `<li>
    <button class="${this.unit}">${this.unit}원</button>
    <div>${this.cnt}개</div>
    </li>`;
  }
}

export default coinItem;
