const buttons = document.querySelectorAll('.buttons button');
const display = document.querySelector('.display');

let firstValue = '';
let operatorValue = '';
let secondValue = '';

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const value = this.getAttribute('value');
    if (!isNaN(value)) {
      operatorValue ? secondValue += value : firstValue += value;
      display.textContent = operatorValue ? secondValue : firstValue;
    } else if (value === 'clear') {
      firstValue = secondValue = operatorValue = '';
      display.textContent = 0;
    } else if (value === '=') {
      firstValue = parseFloat(firstValue);
      secondValue = parseFloat(secondValue);
      display.textContent = eval(`${firstValue} ${operatorValue} ${secondValue}`);
      firstValue = secondValue = operatorValue = '';
    } else {
      operatorValue = value;
    }
  });
});
