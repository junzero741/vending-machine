import WalletContainer from "./components/Wallet/WalletContainer.js";
import GoodsContainer from "./components/Goods/GoodsContainer.js";

class App {
  constructor({$target}) {
    this.$target = $target;
    
    // containers
    this.wallet = null;
    
    // root state
    this.state = {
      wallet: {
        "10": [],
        "50": [],
      },
      
      // vendingMachineComputer: {
        // currentAmount: []
        // actionDisplay: []
      // },
      
      goods: {
       coke: ["coke", "coke", "coke"],
       cider: ["cider", "cider", "cider"],
       fanta: ["fanta", "fanta", "fanta"],
      }
    }
    this.setState({});
  }

  setState({type, method, value}) { // destructured value is new state
    switch(type) {
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
            ...this.state.wallet.slice(i+1, this.state.wallet.length)
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
      default:
        break;
    }
    this.render() // 상태가 바뀜, 리렌더
  }
  
  handleChangeWallet({method, value}) {
    const state = {
      type: "wallet",
      method: method,
      value: value
    };
    this.setState(state);
  }
  
  handleChangeGoods({method, value}) {

  }

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
  }
}

export default App;