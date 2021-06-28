import './styles/index.css';
import { doSomething } from 'my-package/dist';

((): void => {
  const element = document.createElement('div');

  element.innerHTML = doSomething('marty');
  document.body.appendChild(element);
})();
