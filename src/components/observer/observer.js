class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fnToRemove) {
    this.observers.filter((fn) => {
      if (fn !== fnToRemove) fn;
    });
  }

  fire(data) {
    this.observers.forEach((fn) => fn(data));
  }
}

const walletButtonObservers = new Observer();
const returnButtonObservers = new Observer();
const productButtonObservers = new Observer();

export { walletButtonObservers, returnButtonObservers, productButtonObservers };
