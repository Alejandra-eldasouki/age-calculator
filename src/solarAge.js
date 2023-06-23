class SolarAgeCalculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.solarYearLength = {
      Earth: 1,
      Mercury: 0.24,
      Venus: 0.62,
      Mars: 1.88,
      Jupiter: 11.86,
    };
  }

  getAgeInPlanetYears(planet) {
    const solarYearLength = this.solarYearLength[planet];
    const ageInPlanetYears = this.earthAge / solarYearLength;
    return ageInPlanetYears;
  }

  getYearsPassed(pastBirthdayAge) {
    const yearsPassed = this.earthAge - pastBirthdayAge;

    const yearsPassedInPlanetYears = {};
    for (const planet in this.solarYearLength) {
      const solarYearLength = this.solarYearLength[planet];
      yearsPassedInPlanetYears[planet] = Math.floor(
        yearsPassed / solarYearLength
      );
    }

    return yearsPassedInPlanetYears;
  }
  roundToPrecision(value, precision) {
    const multiplier = 10 ** precision;
    return Math.round(value * multiplier) / multiplier;
  }

  getYearsRemaining(futureBirthdayAge) {
    const yearsRemaining = futureBirthdayAge - this.earthAge;
    const mercuryYears = this.roundToPrecision(yearsRemaining / 0.24, 2);
    const venusYears = this.roundToPrecision(yearsRemaining / 0.62, 2);
    const marsYears = this.roundToPrecision(yearsRemaining / 1.88, 2);
    const jupiterYears = this.roundToPrecision(yearsRemaining / 11.86, 2);

    return {
      Earth: yearsRemaining,
      Mercury: mercuryYears,
      Venus: venusYears,
      Mars: marsYears,
      Jupiter: jupiterYears,
    };
  }
}

module.exports = SolarAgeCalculator;
