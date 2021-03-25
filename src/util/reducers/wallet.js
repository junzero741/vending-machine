import * as ACTION from "../enums/action.js"

const initialState = {
  wallet: []
}

const wallet = (state = initialState, { type, payload }) => {
  const name = Object.keys(payload)[0];
  const value = Object.values(payload)[0];
  
  switch(type) {
    case ACTION.ADD_MONEY:
      // 처음 들어올 때
      if (!state.wallet?.[name]) {
        return  { 
          wallet: {
            ...state.wallet,
            [name]: [value]
          } 
        }
      }
      // 처음 들어오는게 아닐 때
      return {
        wallet: {
          ...state.wallet,
          [name]: [...state.wallet[name], value]   
        }
      }
    
    case ACTION.OUT_MONEY:
      const returnItem = state.wallet[name].pop();
      return {
        wallet: {
          ...state.wallet,
          [name]: state.wallet[name]
        }
      }
    default:
      console.log("error");
  }
}

export default wallet;