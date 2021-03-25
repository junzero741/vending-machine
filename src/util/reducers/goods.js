import * as ACTION from "../enums/action.js"

const initialState = {
  goods: []
}

const goods = (state = initialState, { type, payload }) => {
  
  switch(type) {
    case ACTION.ADD_ITEM:
      // 처음 들어올 때
      const name = Object.keys(payload)[0];
      const value = Object.values(payload)[0];
  
      if (!state.goods?.[name]) {
        return  { 
          goods: {
            ...state.goods,
            [name]: [value]
          } 
        }
      }
      // 처음 들어오는게 아닐 때
      return {
        goods: {
          ...state.goods,
          [name]: [...state.goods[name], value]   
        }
      }
    
    case ACTION.OUT_ITEM:
      console.log(state.goods)
      console.log(payload)
      const returnItem = state.goods[payload].pop();
      return {
        goods: {
          ...state.goods,
          [payload]: state.goods[payload]
        }
      }
    default:
      console.log("error");
  }
}

export default goods;