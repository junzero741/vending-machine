import * as ITEM_ENUM from "../../../util/enums/item.js";

class ItemPresentational {
  constructor({ $target, korean, name, status, amount, isSelected }) {
    this.render($target, korean, name, status, amount, isSelected);
  }
  
  render($target, korean, name, status, amount, isSelected) {
    $target.innerHTML = ""; // 초기화
    
    const $item = document.createElement("div");
    $item.className = "item";
    
    let $itemContents;
    switch (status) {
      case ITEM_ENUM.STATUS.default:
        $itemContents = /* html */ `
          <span> ${korean}, ${amount} </span>
        `;
        break;
      case ITEM_ENUM.STATUS.isAbleToBuy:
        $item.className += " isAbleToBuy"
        $itemContents = /* html */ `
          <span> ${korean} 구매가능 </span>
        `;
        break;
      case ITEM_ENUM.STATUS.isSoldOut:
        $item.className += " isSoldOut"
        $itemContents = /* html */ `
          <span> ${korean} 품절 </span>
        `;
        break; 
    }
    $item.insertAdjacentHTML("beforeend", $itemContents);
    
    $item.addEventListener("click", (e) => {
      console.log(e.target.innerText, e.target);
      isSelected(name)
    })

    $target.append($item);
    
  }
}

export default ItemPresentational;