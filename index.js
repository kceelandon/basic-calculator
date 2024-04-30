let displayValue = 0;

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}

function operate(numOne, operator, numTwo) {
    if (operator === "+") {
        return add(numOne, numTwo);
    } else if (operator === "-") {
        return subtract(numOne, numTwo);
    } else if (operator === "*") {
        return multiply(numOne, numTwo);
    } else {
        return divide(numOne, numTwo);
    }
}