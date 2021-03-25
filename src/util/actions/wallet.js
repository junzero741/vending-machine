import * as ACTION from "../enums/action.js"

const addMoney = (item) => {
  return { type: ACTION.ADD_MONEY, payload: item }
}

const outMoney = (item) => {
  return { type: ACTION.OUT_MONEY, payload: item }
}

export { addMoney, outMoney };