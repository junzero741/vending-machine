export default class Observer {
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
