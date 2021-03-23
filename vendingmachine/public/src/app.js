import WalletView from "./walletView.js";
import _ from "./util.js";
import product from "./product.js";
import Item from "./item.js";
import ListView from "./listView.js";

const productDiv = _.$(".section__products");
const walletDiv = _.$(".wallet__coins");

new WalletView(walletDiv);

let itemList = [];

product.forEach((p) => itemList.push(new Item(p.name, p.price, p.count)));

new ListView(itemList, productDiv);
