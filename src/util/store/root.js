import { goods as goodsReducer } from "../reducers/goods.js";

const reducers = [goodsReducer];

const store = createStore(reducers);

const createStore = (reducers) => {
  
  const observable = {
    observeListeners: [],
    subscribe: (observer) => {
      this._observers.add(observer);
    },
    unsubscribe: (observer) => {
      this._observers = [...this._observers].filter(subscriber => subscriber !== observer);
    },
    notify: (data) => {
      this._observers.forEach(observer => observer(data));
    }
  }
  
  return observable;
}

export default store;