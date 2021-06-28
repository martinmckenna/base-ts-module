import './styles/index.css';
import { doSomething } from 'my-package';

((): void => {
  const element = document.createElement('div');

  element.innerHTML = doSomething('some test string');
  document.body.appendChild(element);
})();
