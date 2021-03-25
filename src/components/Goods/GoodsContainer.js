import ItemContainer from "./Item/ItemContainer.js";
import { useSelector, useSubscribe, useDispatch } from "../../util/store/useStore.js";

import { outItem } from "../../util/actions/goods.js";
import * as ACTION from "../../util/enums/action.js";

class GoodsContainer {
  constructor({$target}) {
    this.$target = $target;
    this.subscribe = useSubscribe("goods");
    this.dispatch = useDispatch("goods");
    
    // components
    this.items = [];

    // state
    this.goods = useSelector((state) => state.goods.getState());
    this.setState({});
    
    this.subscribe( ACTION.OUT_ITEM, (name) => {
      this.setState({type: "amount", name});
    });
    
  }

  setState({ type, name }) {
    switch (type) {
      case "amount":
        this.items.map((item) => {
          if (item.name === name) {
            item.setState({type, value: this.goods[name].length})
          }
        });
      return;
    }
    this.render();
  }
  
  handleChangeGoods(name) {
    this.dispatch( outItem(name) );
  }

  render() {
    const $goods = document.createElement("ul");
    $goods.className = "goods"

    for (const name in this.goods) {
      const $good = document.createElement("li");
      const item = new ItemContainer({
        $target: $good,
        name: name, 
        korean: this.goods[name][0].korean,
        amount: this.goods[name].length,
        handleChangeGoods: this.handleChangeGoods.bind(this)
      });

      this.items.push(item);
      $goods.append($good);
    }

    this.$target.append($goods);
  }
}

export default GoodsContainer;