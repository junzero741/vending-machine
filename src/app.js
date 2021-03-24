import './style/main.scss';
import MainView from './components/views/mainView';

window.addEventListener('DOMContentLoaded', async () => {
  const targetEl = document.querySelector('#root');
  const mainView = await new MainView().init();
  targetEl.innerHTML += `
    ${mainView}
  `;
});
