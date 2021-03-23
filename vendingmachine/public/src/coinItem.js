class coinItem {
  constructor(unit, cnt, parent) {
    this.unit = unit;
    this.cnt = cnt;
    this.parent = parent;
  }
  init() {
    this.render();
  }
  render() {
    this.parent.innerHTML += this.makeCoinTemplate();
  }
  makeCoinTemplate() {
    return `<li>
    <div>${this.unit}원</div>
    <div>${this.cnt}개</div>
    </li>`;
  }
}

export default coinItem;
