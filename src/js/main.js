import "../style/style.scss";
import { createSectionWithClassname } from "./DOM.js";
import { _ } from "./utils.js";
import ProductView from "./ProductView.js";
import ProcessView from "./ProcessView.js";
import WalletView from "./WalletView.js";
import Manager from "./Manager.js";

// import Currency from "./Currency.js";

const app = _.$("#app");
const views = ["productView", "conductionView", "walletView"];

function init() {
  // await setDom();
  views.forEach((e) => createSectionWithClassname(app, e));
  const manager = new Manager();
  const productView = new ProductView(_.$(`.${views[0]}`), manager);
  const processView = new ProcessView(_.$(`.${views[1]}`), manager);
  const walletView = new WalletView(_.$(`.${views[2]}`), manager);
  manager.setView(productView, processView, walletView);
  productView.init();
  processView.init();
  walletView.init();
}

// async function setDom() {
// addEventListener, dom 다 하기

// }

init();
