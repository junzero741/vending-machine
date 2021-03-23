import ItemPresentational from "./ItemPresentational.js";
import * as ITME_ENUM from "../../../util/enums/item.js";
// import "./item.scss";

// const STATUS = ["default", "isAbleToBuy", "isSoldOut"];

class ItemContainer {
  constructor({ $target, name, amount }) {
    this.$target = $target;
    this.presentational = null;

    // state
    this.amount = null;
    this.name = name;
    this.status = ITME_ENUM.STATUS.default;
    
    this.setState({
      type: "amount", value: amount
    });
  }
  setState({type, value}) {
    switch(type) {
      case "amount":
        this.amount = value;
        if (value === 0) this.status = ITME_ENUM.STATUS.isSoldOut;
        break;
      case "status":
        this.status = value;
        break;
      default:
        console.error(type, value);
        break;
    }
    this.render();
  }
  
  isAbleToBuy() {
    this.setState({ type: "status", value: ITME_ENUM.STATUS.isAbleToBuy });
  }

  isSelected(value) {
    console.log("isSelected value", value);
    // 옵저버블의 dispatch() 이벤트로 향후 갈 것이다.
  }

  render() {
    this.presentational = new ItemPresentational({
      $target: this.$target, 
      name: this.name,
      status: this.status,
      isSelected: this.isSelected.bind(this)
    });
  }
}

export default ItemContainer;