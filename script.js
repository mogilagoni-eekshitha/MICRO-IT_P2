let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === '') {
        firstOperand = currentInput;
    } else {
        calculateResult();
    }
    operator = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    operator = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (firstOperand === '' || currentInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    firstOperand = '';
    operator = '';
    document.getElementById('display').value = currentInput;
}
