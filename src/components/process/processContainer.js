import CurrentMoneyPresentational from "./currentMoneyDisplay/currentMoneyPresentational.js";
import ReturnButtonPresentational from "./returnButton/returnButtonPresentational.js"
import MessagesPresentational from "./messages/messagesPresentational.js"

class ProcessContainer {
	constructor({ $target, state }) {
		this.$target = $target;

		this.moneyPocket = [];
		this.currentMoney = null;
		this.messages = [];

		this.presentationals = null;

		const testState = {
			type: "CHANGE_CASH",
			method: "put",
			item: 1000
		}

		const testState2 = {
			type: "SELECT_GOODS",
			method: "selected",
			item: { name: "COKE", price: 500 }
		}

		const testState3 = {
			type: "INIT"
		}
		this.setState(state);
		// this.setState(testState)
	}

	setState(state) {
		// 메시지 업데이트
		this.updateMessage(state);
		// 상태 변경 
		switch (state.type) {
			case "CHANGE_CASH":
				if (state.method === "put") {
					this.moneyPocket.push(state.item);
					this.currentMoney += state.item;
				}
				else if (state.method === "return") {
					this.currentMoney -= state.item;
				}

			case "SELECT_GOODS":
				if (state.method === "selected") {
					this.currentMoney -= state.item.price;
					this.moneyPocket = this.changeMoney(this.currentMoney);
					console.log(this.moneyPocket)
				}
				break;
			default:
				new Error(`${state.type} || ${state.method} is undefined`);
				break;
		}
		// 상태 변경 후 리렌더링
		this.render();
	}

	returnMoney() {
		const shiftedCoin = this.moneyPocket.shift();

		const state = {
			type: "CHANGE_CASH",
			method: "return",
			item: shiftedCoin
		};

		this.setState(state);

		if (this.moneyPocket.length !== 0) {
			this.returnMoney();
		}
	}

	updateMessage(state) {
		this.messages.push(this.selectMessage(state));
	}

	selectMessage(state) {
		switch (state.type) {
			case "INIT":
				this.currentMoney = 0;
				return `자판기 시작`

			case "CHANGE_CASH":
				if (state.method === "put") {
					return `${state.item}원이 투입 되었습니다.`
				}
				else if (state.method === "return") {
					return `잔돈 ${state.item}원이 반환 되었습니다.`
				}
				break;

			case "SELECT_GOODS":
				if (state.method === "selected") {
					return `${state.item.name} 선택 하셨습니다.`
				}
				break;

			default:
				new Error(`${state.type} || ${state.method} || ${state.item} is undefined`)
				break;
		}
	}

	changeMoney(currentMoney) {
		const currentMoneyArr = currentMoney.toString().split("").reverse();
		let zero = "";
		let change = [];

		for (let i = 0; i < currentMoneyArr.length; i++) {
			const share = parseInt(currentMoneyArr[i] / 5);
			const rest = parseInt(currentMoneyArr[i] % 5);

			const fiveMoney = (share + zero) * 5;
			const oneMoney = [];

			for (let j = 0; j < rest; j++) {
				if (rest === 0) break;
				oneMoney.push(Number(1 + zero))
			}

			change.push(fiveMoney);
			oneMoney.forEach(v => change.push(v));
			zero += "0";
		}
		change = change.filter(v => v !== 0)
		return change
	}

	render() {
		const $process = document.createElement("section");
		$process.className = "process";

		const $currentMoney = document.createElement("section");
		$currentMoney.className = "current-money-section";

		const $returnButton = document.createElement("section");
		$returnButton.className = "return-button-section";

		const $messages = document.createElement("section");
		$messages.className = "messages-section";

		const elements = [$currentMoney, $returnButton, $messages];

		elements.forEach((element) => $process.appendChild(element))

		this.$target.appendChild($process)

		this.presentationals = {
			currentMoney: new CurrentMoneyPresentational({
				$target: $currentMoney,
				currentMoney: this.currentMoney
			}),
			returnButton: new ReturnButtonPresentational({
				$target: $returnButton,
				reset: this.returnMoney.bind(this)
			}),
			messages: new MessagesPresentational({
				$target: $messages,
				messages: this.messages
			})
		}
	}
}

export default ProcessContainer;