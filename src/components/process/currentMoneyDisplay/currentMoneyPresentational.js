class CurrentMoneyPresentational {
	constructor({ $target, currentMoney }) {
		this.render($target, currentMoney)
	}

	render($target, currentMoney) {
		$target.innerHTML = "";

		const $currentMoney = `
            <span class="current-money">${currentMoney} 원</span>
        `;

		$target.insertAdjacentHTML("beforeend", $currentMoney)
	}
}

export default CurrentMoneyPresentational