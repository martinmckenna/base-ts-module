import './styles/index.css';
import { doSomething } from 'my-package';
import { login } from 'src/utils/login';
import { refresh } from 'src/utils/refresh';

((): void => {
  const element = document.createElement('div');
  login();

  setTimeout(() => {
    refresh();
  }, 2000);

  element.innerHTML = doSomething('marty');
  document.body.appendChild(element);
})();
