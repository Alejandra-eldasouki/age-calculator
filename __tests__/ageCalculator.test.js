const SolarAgeCalculator = require('../src/solarAge.js');

describe('solarAgeCalculator', () => {
  test('should calculate age in Mercury years', () => {
    const earthAge = 30;
    const calculator = new SolarAgeCalculator(earthAge);

    const mercuryAge = calculator.getAgeInPlanetYears('Mercury');
    expect(mercuryAge).toBeCloseTo(125, 2);
  });
});
