import showHealth from '../index';

test.each([
  [{ name: 'маг', health: 50 }, 'wounded'],
  [{ name: 'мечник', health: 15 }, 'wounded'],
  [{ name: 'лучник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 100 }, 'healthy'],
  [{ name: 'мечник', health: 0 }, null],
  [{ name: 'лучник', health: 60 }, 'healthy'],

])('testing function of showing health level of %s character', (character, expected) => {
  const result = showHealth(character);

  expect(result).toBe(expected);
});
