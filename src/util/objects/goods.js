import ITEM from '../enums/item.js';

class Good {
  constructor({name, price}) {
    this.name = name;
    this.price = price;
  }
  isGoods() {
    return true;
  }
}

class Coke extends Good {
  constructor() {
    super(ITEM.COKE);
  }
}

class PineappleFanta extends Good {
  constructor() {
    super(ITEM.PINEAPPLE_FANTA);
  }
}

class Cider extends Good {
  constructor() {
    super(ITEM.CIDER);
  }
}

export { Coke, PineappleFanta, Cider };