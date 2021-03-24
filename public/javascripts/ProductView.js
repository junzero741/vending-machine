import { _ } from "./util.js";
export class ProductView {
	constructor(data, model) {
		this.model = model;
		this.data = data;
		this.init();
	}

	init() {
		this.render();
		this.model.subscribe((data) => {
			if (data.type === "purchasableList") this.addHighlight(data.value);
		});
		this.addEvent();
	}

	render() {
		let html = "";
		this.data.productInfo.forEach(({ name, price }) => {
			html += `<li class="product__item">
                        <div class="product__item--name">${name}</div>
                        <div class="product__item--price">${price}</div>
                    </li>`;
		});
		this.data.itemList.innerHTML = html;
	}

	addHighlight(list) {
		const itemList = _.$a(".product__item--name", this.data.itemList);
		itemList.forEach((e) => _.cr(e, "highlighted"));
		list.forEach(({ id }) => _.ca(itemList[id], "highlighted"));
	}

	selectProduct({ target }) {
		this.model.sell(target.innerHTML);
	}

	addEvent() {
		_.on(this.data.itemList, "click", this.selectProduct.bind(this));
	}
}
