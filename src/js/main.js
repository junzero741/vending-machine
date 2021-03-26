import "../style/style.scss";
import { createSectionWithClassname } from "./DOM.js";
import { _ } from "./utils.js";
import { VIEWS } from "./variables.js";
import ProductView from "./view/ProductView.js";
import WalletView from "./view/WalletView.js";
import ProcessView from "./view/ProcessView.js";
import WalletModel from "./model/WalletModel.js";
import ProductModel from "./model/ProductModel.js";
import Timer from "./Timer.js";

const app = _.$("#app");

function init() {
  _.$("body").insertAdjacentHTML("afterbegin", "<header><h1 class='title'>🧱Adela.json Vending Machine🛕</h1></header>");
  const header = _.$("header");
  Object.values(VIEWS).forEach((e) => createSectionWithClassname(app, e));
  const timer = new Timer(header);
  const walletModel = new WalletModel(timer);
  timer.init(walletModel);
  const productModel = new ProductModel();
  new WalletView(walletModel, _.$(`.${VIEWS.WALLET}`));
  new ProductView(walletModel, productModel, _.$(`.${VIEWS.PRODUCT}`));
  new ProcessView(walletModel, productModel, _.$(`.${VIEWS.PROCESS}`));
}

init();
