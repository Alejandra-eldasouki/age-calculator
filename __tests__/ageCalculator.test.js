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
  test('should calculate age in Mars years', () => {
    const earthAge = 30;
    const calculator = new SolarAgeCalculator(earthAge);

    const marsAge = calculator.getAgeInPlanetYears('Mars');
    expect(marsAge).toBeCloseTo(15.96, 2);
  });
  test('should calculate age in Jupiter years', () => {
    const earthAge = 30;
    const calculator = new SolarAgeCalculator(earthAge);

    const jupiterAge = calculator.getAgeInPlanetYears('Jupiter');
    expect(jupiterAge).toBeCloseTo(2.53, 2);
  });
  test('should determine years passed since a past birthday', () => {
    const earthAge = 56;
    const pastBirthdayAge = 43;
    const calculator = new SolarAgeCalculator(earthAge);

    const yearsPassed = calculator.getYearsPassed(pastBirthdayAge);
    expect(yearsPassed).toEqual({
      Earth: 13,
      Mercury: 54.17,
      Venus: 20.97,
      Mars: 6.91,
      Jupiter: 1.09,
    });
  });
});
