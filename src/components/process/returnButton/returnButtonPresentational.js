class ReturnButtonPresentational {
    constructor({ $target, moneyPocket }) {
        // this.moneyPocket = moneyPocket;
        // this.totalMoney = this.moneyPocket.reduce((acc, curr) => acc + curr, 0)
        this.addEvent($target, moneyPocket)
    }

    //5초뒤 자동반환을 어떡할까..

    addEvent($target, moneyPocket) {
        $target.addEventListener("click", this.render.bind(this, moneyPocket))
        //this.accMoney message select & setState
    }

    render(moneyPocket) {
    }
}

export default ReturnButtonPresentational