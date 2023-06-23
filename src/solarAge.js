export default function SolarAgeCalculator(earthAge) {
  this.earthAge = earthAge;
  this.solarYearLengths = {
    Mercury: 0.24,
  };
}

module.exports = SolarAgeCalculator;
