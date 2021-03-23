import ItemContainer from "./Item/ItemContainer.js";

class GoodsContainer {
  constructor({$target, goods}) {
    this.$target = $target;
    this.items = [];

    // state
    console.log(goods)
    this.goods = goods;
    
    this.setState();
  }
  
  setState() {
    this.render();
  }
  render() {
    console.log(this.$target)
    const $goods = document.createElement("ul");
    $goods.className = "goods"

    /* 
    goods: {
      coke: ["coke", "coke", "coke"],
      cider: ["cider", "cider"],
      fanta: [],
    }
    */
    
    for(const name in this.goods) {
      console.log(name)
      const $good = document.createElement("li");
      const item = new ItemContainer({
        $target: $good,
        name: name, 
        amount: this.goods[name].length,
      });
      
      this.items.push(item);
      $goods.append($good);
    }

    this.$target.append($goods); 
  }
}

export default GoodsContainer;