const display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = null;

function updateDisplay() {
    display.textContent = currentInput;
}

// Number input
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '0') {
            currentInput = button.textContent;
        } else {
            currentInput += button.textContent;
        }
        updateDisplay();
    });
});

// Operator input
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (operator === null) {
            previousInput = currentInput;
            currentInput = '';
        }
        operator = button.textContent;
        updateDisplay();
    });
});

// Decimal point
document.querySelector('.decimal').addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
});

// Reset button
document.querySelector('.reset').addEventListener('click', () => {
    currentInput = '0';
    previousInput = '';
    operator = null;
    updateDisplay();
});

// Delete button
document.querySelector('.del').addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay();
});

// Equal button
document.querySelector('.equals').addEventListener('click', () => {
    if (operator && previousInput) {
        currentInput = String(evaluate(previousInput, currentInput, operator));
        operator = null;
        previousInput = '';
        updateDisplay();
    }
});

function evaluate(prev, current, operator) {
    const num1 = parseFloat(prev);
    const num2 = parseFloat(current);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return current;
    }
}
