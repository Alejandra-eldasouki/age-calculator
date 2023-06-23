class SolarAgeCalculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.solarYearLength = {
      Mercury: 0.24,
      Venus: 0.62,
      //   Mars: 1.88,
      Jupiter: 11.86,
    };
  }

  getAgeInPlanetYears(planet) {
    const solarYearLength = this.solarYearLength[planet];
    const ageInPlanetYears = this.earthAge / solarYearLength;
    return ageInPlanetYears;
  }
}

module.exports = SolarAgeCalculator;
