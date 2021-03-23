// const ADD_ITEM = "goods/ADD_ITEM";
// const OUT_ITEM = "goods/OUT_ITEM";

const addItem = (item) => {
  return {type: ADD_ITEM, item }
}

const outItem = (item) => {
  return {type: OUT_ITEM, item }
}

export {addItem, outItem};