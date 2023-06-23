export default function SolarAgeCalculator(earthAge) {
  this.earthAge = earthAge;
  this.solarYearLengths = {
    Mercury: 0.24,
  };
}

getAgeInPlanetYears(planet) {
const solarYearLength = this.solarYearLength[planet];
return this.earthAge / solarYearLength;
}

module.exports = SolarAgeCalculator;
