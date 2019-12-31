import { doSomething } from './something'

it('should do the thing', () => {
  expect(doSomething()).toBe('')
  expect(doSomething()).not.toBe('fdsfdsaf')
});