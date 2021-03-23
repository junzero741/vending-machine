export default class Manager {
  constructor() {
    this.productView = null;
    this.processView = null;
    this.walletView = null;
  }

  setView(productView, processView, walletView) {
    this.processView = processView;
    this.productView = productView;
    this.walletView = walletView;
  }

  buyProduct(product) {
    if (this.isPossibleToBuy(product)) {
      product.count--; // 상품 재고 수량 변경
      this.processView.setBalance(-1 * product.price);
      this.productView.activeProducts(this.processView.balance); // 상품 활성화 여부 변경
      const message = `${product.name}을(를) 구입하였습니다.`;
      this.processView.printMessage(message);
    }
  }

  returnBalance() {
    if (!this.processView.balance) return;
    this.walletView.addChange(this.processView.balance);
    const message = `${this.processView.balance}원이 반환되었습니다.`;
    this.processView.printMessage(message);
    this.processView.setBalance(0);
    this.productView.activeProducts(this.processView.balance);
  }

  isPossibleToBuy(target) {
    if (target.count <= 0) return false;
    if (this.processView.balance < target.price) return false;
    return true;
  }

  inputCurrency(value) {
    const currentBalance = this.processView.setBalance(value);
    this.productView.activeProducts(currentBalance);
  }
}
