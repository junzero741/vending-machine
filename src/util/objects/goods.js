import { ITEM } from '../enums/item.js';

class Good {
  constructor({name, price, korean}) {
    this.name = name;
    this.price = price;
    this.korean = korean;
  }
  isGoods() {
    return true;
  }
}

export class Coke extends Good {
  constructor() { super(ITEM.COKE); }
}

export class Cider extends Good {
  constructor() { super(ITEM.CIDER); }
}

export class PineappleFanta extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}

export class GrapeFanta extends Good {
  constructor() { super(ITEM.GRAPE_FANTA); }
}

export class LemonAde extends Good {
  constructor() { super(ITEM.LEMONADE); }
}

export class BonBon extends Good {
  constructor() { super(ITEM.BONBON); }
}

export class CocoaJuice extends Good {
  constructor() { super(ITEM.COCOA_JUICE); }
}

export class CokeZero extends Good {
  constructor() { super(ITEM.COKE_ZERO); }
}

export class PowerAde extends Good {
  constructor() { super(ITEM.POWERADE); }
}

export class ChocoMilk1 extends Good {
  constructor() { super(ITEM.CHOCO_MILK_1); }
}
export class ChocoMilk2 extends Good {
  constructor() { super(ITEM.CHOCO_MILK_2); }
}
export class ChocoMilk3 extends Good {
  constructor() { super(ITEM.CHOCO_MILK_3); }
}

// 미완
/*
export class StrawberryBananaJuice extends Good {
  constructor() { super(ITEM.STRAWBERRY_BANANA_JUICE); }
}

class BananaMilk extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class CoffeeMilk extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class Aloe extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class CornChip extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class ShrimpKkang extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class PotatoChip extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class CanCho extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
*/