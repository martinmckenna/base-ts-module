import { doSomething } from './something';

it('should do the thing', () => {
  expect(doSomething('aaaa')).toBe('aaaa');
  expect(doSomething('ddd')).not.toBe('fdsfdsaf');
});
