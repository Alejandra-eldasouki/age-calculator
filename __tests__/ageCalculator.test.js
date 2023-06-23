import SolarAgeCalculator from '../src/solarAge.js';

describe('solarAgeCalculator', () => {
  const earthAge = 56;
  const calculator = new SolarAgeCalculator(earthAge);
});
test('should calculate age in Mercury years', () => {
  const mercuryAge = calculator.getInPlanetYears('Mercury');
  expect(mercuryAge).toBeCloseTo(233.33, 2);
});
