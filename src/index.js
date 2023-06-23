const SolarAgeCalculator = require('./solarAge');

const earthAgeInput = document.getElementById('earth-age');
const calculateButton = document.getElementById('calculate-button');
const resultContainer = document.getElementById('results-container');

calculateButton.addEventListener('click', () => {
  const earthAge = parseFloat(earthAgeInput.value);
  if (isNaN(earthAge)) {
    resultContainer.textContent = 'Invalid input. Please enter a valid age.';
    return;
  }

  const calculator = new SolarAgeCalculator(earthAge);

  const mercuryAge = calculator.getAgeInPlanetYears('Mercury');
  const venusAge = calculator.getAgeInPlanetYears('Venus');
  const marsAge = calculator.getAgeInPlanetYears('Mars');
  const jupiterAge = calculator.getAgeInPlanetYears('Jupiter');

  const yearsSincePastBirthday = calculator.getYearsSincePastBirthday(
    'Mercury',
    43
  );
  const yearsUntilFutureBirthday = calculator.getYearsUntilFutureBirthday(
    'Jupiter',
    61
  );

  resultContainer.innerHTML = `
    <p>Your age in Mercury years: ${mercuryAge.toFixed(2)}</p>
    <p>Your age in Venus years: ${venusAge.toFixed(2)}</p>
    <p>Your age in Mars years: ${marsAge.toFixed(2)}</p>
    <p>Your age in Jupiter years: ${jupiterAge.toFixed(2)}</p>
    <p>Years since your past birthday on Mercury: ${yearsSincePastBirthday.toFixed(
      2
    )}</p>
    <p>Years until your future birthday on Jupiter: ${yearsUntilFutureBirthday.toFixed(
      2
    )}</p>
  `;
});
