class ReturnButtonPresentational {
	constructor({ $target, reset }) {
		this.$target = $target

		this.render(this.$target)
		this.addEvent(reset)
	}

	addEvent(reset) {
		this.$target.querySelector(".return-button").addEventListener("click", () => reset())
	}

	render($target) {
		$target.innerHTML = "";

		const $returnButton = `
            <button class="return-button">반환</button>
        `

		$target.insertAdjacentHTML("beforeend", $returnButton)
	}

}

export default ReturnButtonPresentational