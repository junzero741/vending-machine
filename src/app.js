import './style/main.scss';
import MainView from './components/views/mainView';

window.addEventListener('DOMContentLoaded', () => {
  const targetEl = document.querySelector('#root');
  const mainView = new MainView().init();
  targetEl.innerHTML += `
    ${mainView}
  `;
});
