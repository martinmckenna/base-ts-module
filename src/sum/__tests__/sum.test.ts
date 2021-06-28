import sum from '../sum';

it('should do the thing', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, '9')).toBe(10);
  expect(sum('1', 9)).toBe(10);
});
