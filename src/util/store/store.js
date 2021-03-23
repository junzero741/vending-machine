class store {
  constructor() {
    this.state = {}
    this.observeListeners = [];

  }
  getState() {}
  dispatch() {}
  subscribe() {}
  unsubscribe() {}
}

export default store;

// const observable = {
  
//   subscribe: (observer) => {
//     this._observers.add(observer);
//   },
//   unsubscribe: (observer) => {
//     this._observers = [...this._observers].filter(subscriber => subscriber !== observer);
//   },
//   notify: (data) => {
//     this._observers.forEach(observer => observer(data));
//   }
// }

// return observable;