const SolarAgeCalculator = require('../src/solarAge.js');

describe('solarAgeCalculator', () => {
  test('should calculate age in Mercury years', () => {
    const earthAge = 30;
    const calculator = new SolarAgeCalculator(earthAge);

    const mercuryAge = calculator.getAgeInPlanetYears('Mercury');
    expect(mercuryAge).toBeCloseTo(125, 2);
  });
  test('should calculate age in Venus years', () => {
    const earthAge = 30;
    const calculator = new SolarAgeCalculator(earthAge);

    const venusAge = calculator.getAgeInPlanetYears('Venus');
    expect(venusAge).toBeCloseTo(48.39, 2);
  });
  test('should calculate age in Jupiter years', () => {
    const earthAge = 30;
    const calculator = new SolarAgeCalculator(earthAge);

    const jupiterAge = calculator.getAgeInPlanetYears('Jupiter');
    expect(jupiterAge).toBeCloseTo(2.39, 2);
  });
});
