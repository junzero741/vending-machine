import './style/main.scss';
import MainView from './components/views/mainView';
import { $$, changeSoldOutColor, isEmpty } from './util/util';

window.addEventListener('DOMContentLoaded', async () => {
  const targetEl = document.querySelector('#root');
  const mainView = new MainView();
  const mainViewHTML = await mainView.init();
  targetEl.innerHTML += `
    ${mainViewHTML}
  `;

  mainView.walletView.addEvent();
  mainView.operationView.addEvent();
  mainView.productView.addEvent();
  mainView.walletView.toggleDisableButton();

  const orderButtonList = $$(`.order--button`);
  orderButtonList.forEach((el) => {
    if (isEmpty(el.dataset.count)) {
      changeSoldOutColor(el);
    }
  });
  orderButtonList.forEach((el) => {
    if (+el.dataset.price === 0) {
      el.classList.add('order--button--possible');
      el.disabled = false;
    }
  });
});
