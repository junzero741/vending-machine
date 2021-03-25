import createStore from "./createStore.js";

import goods from "../reducers/goods.js";
import wallet from "../reducers/wallet.js";

const reducers = {
  goods,
  wallet
};

const store = {};

for (const reducer in reducers) {
  store[reducer] = createStore(reducers[reducer]);
}

export default store;