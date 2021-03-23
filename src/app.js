import WalletContainer from "./components/Wallet/WalletContainer.js";
import GoodsContainer from "./components/Goods/GoodsContainer.js";
import ProcessContainer from "./components/process/processContainer.js";

import { Coke, PineappleFanta, Cider } from "./util/objects/goods.js";

class App {
  constructor({ $target }) {
    this.$target = $target;

    // components
    this.wallet = null;
    this.goods = null;
    this.process = null;

    // root state 
    // 향후 모델로 옮겨집니다.
    this.state = {
      wallet: {
        "10": [],
        "50": [],
      },

      goods: {
        coke: Array(10).fill(new Coke()),
        cider: Array(10).fill(new Cider()),
        pineappleFanta: Array(10).fill(new PineappleFanta()),
      },

      process: {
        $target: this.$target,
        type: "cash",
        method: "put",
        // item : initial setting cash
      },

    }
    this.setState({});
  }
  setState({ type, method, value }) { // destructured value is new state
    switch (type) {
      case "wallet":
        // 비교 함수 생략
        if (method === "new") {
          const updatedWallet = [...this.state.wallet, value];

          this.state.wallet = updatedWallet;
        }
        else if (method === "use") {
          let targetIdx = null;
          for (const [i, coin] of this.state.wallet.entries()) {
            if (coin.amount === value.amount) {
              targetIdx = i;
              break;
            }
          }
          const updatedWallet = [
            ...this.state.wallet.slice(0, i),
            ...this.state.wallet.slice(i + 1, this.state.wallet.length)
          ];
          const response = this.state.wallet[i];

          //
          this.state.wallet = updatedWallet;
          // 전파
          // 상태화면 변경 함수
          // 상품화면 변경 함수

          return response;
        }
        break;
      case "goods":
        if (method === "add") {
          const newGoods = [...this.goods[value.name], value];
          this.goods[value.name] = newGoods;
        } else if (method === "remove") {

        }
        break;
      default:
        break;
    }
    // 상태가 변화 했으므로 리렌더
    this.render();
  }

  handleChangeWallet({ method, value }) {
    const state = {
      type: "wallet",
      method: method,
      value: value
    };
    this.setState(state);
  }

  // handleChangeGoods({ method, value }) {}

  render() {
    
    this.wallet = new WalletContainer({
      $target: this.$target,
      handleChangeWallet: this.handleChangeWallet.bind(this),
    });

    this.goods = new GoodsContainer({
      $target: this.$target,
      goods: this.state.goods,
      handleChangeGoods: this.handleChangeGoods.bind(this),
    })

    this.process = new ProcessContainer({
      $target: this.$target,
      type: this.state.process.type,
      method: this.state.process.method,
      // item : this.state.process.item
    })
  }
}

export default App;