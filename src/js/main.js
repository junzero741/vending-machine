import "../style/style.scss";
import { createSectionWithClassname, drawHtml } from "./DOM.js";
import { _ } from "./utils.js";

// import Currency from "./Currency.js";

const app = _.$("#app");

async function init() {
  // addEventListener, dom 다 하기
  const views = ["productView", "conductionView", "walletView"];
  views.forEach((e) => createSectionWithClassname(app, e));
  await drawHtml(views);
}

init();
