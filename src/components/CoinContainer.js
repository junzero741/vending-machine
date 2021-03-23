class CoinContainer {
  // $target DOM, 상태, 함수
  constructor(cashValue) {
    
    this.value = null;
    this.setState(cashValue);
  }

  setState(newState) {
    // 비교
    this.value = cashValue;
  }

  render() {
    const $coinLists = document.createElement("ul");

    const $li = (asdf) => { `<li> ${asdf} </li>` }
    
    cashValue.map((each) => {
      $coinLists.insertAdjacentHTML("beforeend", $li(each))
    })
    
    // for ()
    // const $coin = `<html>

    // </html>`;
    this.target.insertAdjacentHTML("beforeend", $coin);

  }
}

export default CoinContainer;

new Coin(50);
new Coin(100);
new Coin(500);