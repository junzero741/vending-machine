import { _, url, request, initNum, currency } from "./utils.js";
import Product from "./Product.js";

const createSectionWithClassname = (app, classname) => {
  const section = document.createElement("section");
  section.classList.add(classname);
  app.appendChild(section);
};

// async function getProductList() {
//   const prodData = await request(url.prod);
//   const prodList = prodData.product.map((item) => {
//     const product = new Product(item);
//     return product;
//   });
//   return prodList;
// }

// async function setProductsOnView(view) {
//   const prodList = await getProductList();
//   const template = (item) => {
//     return /*html*/ `
//         <div class="item">
//           <div class="item__name">${item.name}</div>
//           <div class="item__price">${item.price}</div>
//         </div>
//           `;
//   };
//   const htmlElement = prodList.reduce((acc, item) => acc + template(item), `<div class="items">`) + `</div>`;
//   view.innerHTML = htmlElement;
// }

// function setProcessOnView(view) {
//   const returnBtn = document.createElement("button");
//   const inputPrice = document.createElement("input");
//   const statusBoard = document.createElement("ul");
//   returnBtn.innerText = "반환";
//   inputPrice.readOnly = true;
//   statusBoard.readOnly = true;
//   view.appendChild(inputPrice);
//   view.appendChild(returnBtn);
//   view.appendChild(statusBoard);
// }

// function setWalletOnView(view) {
//   const template = (unit) => {
//     return /*html*/ `
//       <li class="currency">
//         <div class="currency__unit">${unit}원</div>
//         <div class="currency__count">${initNum}개</div>
//       </li>
//       `;
//   };
//   const templateBottom = () => {
//     return /*html*/ `
//         <li class="balance">
//           <p>adela</p>
//           <span>원</span>
//         </li>
//         `;
//   };
//   // const currency = new Currency();
//   const htmlElement = currency.units.reduce((acc, unit) => acc + template(unit), `<ul class="currencies">`) + templateBottom() + `</ul>`;
//   view.innerHTML = htmlElement;
// }

// async function drawHtml(views) {
//   views.forEach((view, i, array) => {
//     if (i === 0) setProductsOnView(_.$(`.${view}`));
//     if (i === 1) setProcessOnView(_.$(`.${view}`));
//     if (i === array.length - 1) setWalletOnView(_.$(`.${view}`));
//   });
// }

// export { createSectionWithClassname, drawHtml };

export { createSectionWithClassname };
