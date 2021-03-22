# fe-w7-vm

## 구조

## 기능 백로그

## drink

- constructor({name,price}){
  this.name = name;
  this.price = price;
  }

const coke = new drink("cocacola", 500);

this.drinks.cocacola = 배열
this.drinks.ciders = 배열
this.drinks.fantas = 배열

putItems(drinkName) => {
this.drinks[drinkName] = coke
}
this.drinks[parameter] = 배열

- 음료 상태 변경
- this.setState(add,)
- setState({method,value}){
  switch(method) {
  case "add":
  this.drinks[value.name] = this.drinks[value.name].push(value);
  break;

          case "remove":
              return this.drinks[value.name].unshift();
      }

  }
