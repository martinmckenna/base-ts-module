import './styles/index.css';
import { doSomething, sum } from 'my-package';

((): void => {
  const h1 = document.createElement('h1');
  h1.innerHTML = doSomething('some test string');
  document.body.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.innerHTML = `Sum: ${sum(1, 3)}`;
  document.body.appendChild(h2);
})();
