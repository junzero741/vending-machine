// import {addItem, outItem} from "../actions/goods.js";

const ADD_ITEM = "goods/ADD_ITEM";
const OUT_ITEM = "goods/OUT_ITEM";

const initialState = {
  goods: []
}

const goods = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        //...state,
        goods: [...state.goods, action.item]
      }
    case OUT_ITEM:
      const items = state.goods.filter((item) => {
        return item !== action.item;
      });
      return {
        // ...state,
        goods: [...items]
      }
    default:
      console.log("error");
  }
}

export default goods;