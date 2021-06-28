import { doSomething } from './something';

it('should do the thing', () => {
  expect(doSomething('aaaa')).toBe('Hello aaaa');
  expect(doSomething('ddd')).not.toBe('ddd');
});
