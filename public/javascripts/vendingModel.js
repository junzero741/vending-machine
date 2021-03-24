import { _ } from "./util.js";
import  Observable  from "./observable.js";

export class VendingModel extends Observable {
	constructor(data, walletModel) {
		super();
		this.wallet = walletModel;
		this.list = data.productInfo;
		this.account = 0;
		this.init();
	}

	init() {}

	inputMoney(money) {
		this.account += money;
		this.changeMoneyEvent();
		this.notify({
			type: "inputMoney",
			value: money,
		});
	}

	getPurchasableList(money) {
		return this.list.filter((e) => e.price <= money && e.stock > 0);
	}

	changeMoneyEvent() {
		this.notify({
			type: "purchasableList",
			value: this.getPurchasableList(this.account),
		});
		this.notify({
			type: "accountChange",
			value: this.account,
		});
	}

	returnMoney() {
		this.wallet.addAmount(this.account);
		this.notify({
			type: "returnMoney",
			value: this.account,
		});
		this.account = 0;
		this.changeMoneyEvent();
	}

	sell(itemName) {
		const targetItem = this.list.find(({ name }) => name === itemName);
		if (targetItem.stock > 0) {
			targetItem.stock--;
			this.account -= targetItem.price;
			this.changeMoneyEvent(-targetItem.price);
			this.notify({
				type: "sell",
				value: itemName,
			});
		}
	}
}
