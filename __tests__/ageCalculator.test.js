const solarAgeCalculator = require('./solarAge');

describe('solarAgeCalculator', () => {
  const earthAge = 56;
  const calculator = new solarAgeCalculator(earthAge);
});
test('should calculate age in Mercury years', () => {
  const mercuryAge = calculator.getInPlanetYears('Mercury');
  expect(mercuryAge).toBeCloseTo(233.33, 2);
});
