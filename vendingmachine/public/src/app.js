import _ from "./util.js";
import product from "./product.js";
import coin from "./coin.js";
import WalletView from "./View/walletView.js";
import LogView from "./View/LogView.js";
import ProductView from "./View/productView.js";
import WalletModel from "./Model/walletModel.js";
import ProductModel from "./Model/productModel.js";

const productDiv = _.$(".section__products");
const walletDiv = _.$(".section__wallet");
const controllerDiv = _.$(".section__controller");

const walletModel = new WalletModel(coin);
const productModel = new ProductModel(product);

new WalletView(walletModel, walletDiv);
new LogView(walletModel, productModel, controllerDiv);
new ProductView(walletModel, productModel, productDiv);
