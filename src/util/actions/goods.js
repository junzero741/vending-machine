import * as ACTION from "../enums/action.js"

const addItem = (item) => {
  return { type: ACTION.ADD_ITEM, payload: item }
}

const outItem = (item) => {
  return { type: ACTION.OUT_ITEM, payload: item }
}

export { addItem, outItem };