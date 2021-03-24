import WalletModel from "./walletModel.js";

export class WalletView {
	constructor(selectors, vendingModel, walletModel) {
		this.$ = selectors;
		this.walletModel = walletModel
    this.vendingModel = vendingModel;
		this.init();
	}

	init() {
		this.render();
		this.controllEventListener();
		this.walletModel.subscribe(this.setValueOnCurrencyUnit);
		this.walletModel.subscribe(this.setValueOnTotalAmount);
	}

	render() {
		const makeWalletHTML = () => {
			const currencyUnits = [10, 50, 100, 500, 1000, 5000, 10000];
			const walletInnerHTML = (unit) => {
				return `<li class="currency-unit__${unit}">
                   <div>${unit}<span>원</span></div>
                   <div class="currency-unit__count">0<span>개</span></div>
                </li>`;
			};
			return `<ul class="wallet__currency-unit"> 
                ${template(currencyUnits, walletInnerHTML)} 
              </ul>
              <ul>
                <li class="wallet__total"><input type="text"><span>원</span></li>
              </ul>`;
		};

		const template = (data, innerHTML) => {
			const html = data.map((unit) => innerHTML(unit)).join(" ");
			return html;
		};

		const html = makeWalletHTML();
		this.$.$wallet.innerHTML = html;
	}

	setValueOnCurrencyUnit(data) {
		const currencyUnits = data.individualCurrencyUnit;

		currencyUnits.map((v) => {
			const $unitCount = document.querySelector(`.currency-unit__${v.currencyUnit} .currency-unit__count`);
			$unitCount.innerHTML = `${v.count}개`;
		});
	}

	setValueOnTotalAmount(data) {
		const totalAmount = data.totalAmount;
		const $walletInput = document.querySelector(".wallet__total input");

		$walletInput.value = totalAmount;
	}

	controllEventListener() {
		const $currencyUnits = document.querySelector(".wallet__currency-unit");
		const $walletInput = document.querySelector(".wallet__total input");
		$currencyUnits.addEventListener("click", ({ target }) => {
			const unit = parseInt(target.parentNode.className.replace("currency-unit__", ""));
			this.walletModel.deductAmount(unit);
			this.vendingModel.inputMoney(unit);
		});
		this.debounce(
			$walletInput,
			"keyup",
			(e) => {
				this.walletModel.changeToCurrencyUnit(e);
			},
			1000
		);
	}

	debounce(target, event, fn, delay) {
		let debounceTimeoutId;
		target.addEventListener(event, (e) => {
			clearTimeout(debounceTimeoutId);
			debounceTimeoutId = setTimeout(fn.bind(this, e), delay);
		});
	}
}
