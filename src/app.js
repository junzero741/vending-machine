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
  mainView.walletView.wallet.toggleDisableButton();

  const orderButtonList = $$(`.order--button`);
  orderButtonList.forEach((el) => {
    if (isEmpty(el.dataset.count)) {
      changeSoldOutColor(el);
    }
  });
});
