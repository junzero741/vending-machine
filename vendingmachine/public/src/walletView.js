import coin from "./coin.js";
import CoinItem from "./coinItem.js";

class WalletView {
  constructor(walletDiv) {
    coin.forEach((c) => new CoinItem(c.unit, c.cnt, walletDiv).init());
  }
}

export default WalletView;
