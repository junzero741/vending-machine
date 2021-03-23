class CurrentMoneyContainer { // presentational이 되어버렸다..
    constructor({ $target, currentMoney }) {
        this.render($target, currentMoney)
    }

    render($target, currentMoney) {
        const $currentMoney = `
            <span class="currentMoney">${currentMoney} 원</span>
        `;

        $target.insertAdjacentHTML("beforeend", $currentMoney)
    }

}

export default CurrentMoneyContainer