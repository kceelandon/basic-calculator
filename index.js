let displayValue = "0";
let currentOperator = null;
let firstNum = 0;
let secondNum = null;

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
        if (numTwo === 0) {
            alert("Cannot divide by zero.");
            return null;
        }
        return divide(numOne, numTwo);
    }
}

// initializes number and clear button functionality to populate display.
function initializeNumButtons() {
    let buttons = document.querySelectorAll(".button-column button, #zero");
    buttons.forEach((btn) => {
        btn.addEventListener("click", function() {
            // first case: second part of an equation
            if (currentOperator !== null) {
                displayValue = "0";
                if (displayValue === "0") {
                    displayValue = btn.textContent;
                } else if (displayValue.length <= 7) {
                    displayValue += btn.textContent;
                }
            } else {  // second case: no operator has been clicked
                if (displayValue === "0") {
                    displayValue = btn.textContent;
                } else if (displayValue.length <= 7) {
                    displayValue += btn.textContent;
                }
            }
            document.getElementById("display-content").textContent = displayValue;
        });
    });
    clearCalculator();
}

function clearCalculator() {
    document.getElementById("clear").addEventListener("click", function() {
        displayValue = "0";
        currentOperator = null;
        firstNum = 0;
        secondNum = null;
        document.getElementById("display-content").textContent = displayValue;
    });
}

function initializeOperators() {
    initializeAdd();
    initializeSubtract();
    initializeMultiply();
    initializeDivide();
    initializeEquals();
}

function initializeAdd() {
    document.getElementById("add").addEventListener("click", function() {
        firstNum = parseInt(displayValue);
        currentOperator = "+";
    });
}

function initializeSubtract() {
    document.getElementById("subtract").addEventListener("click", function () {
        firstNum = parseInt(displayValue);
        currentOperator = "-";
    });
}

function initializeMultiply() {
    document.getElementById("multiply").addEventListener("click", function () {
        firstNum = parseInt(displayValue);
        currentOperator = "*";
    });
}

function initializeDivide() {
    document.getElementById("divide").addEventListener("click", function () {
        firstNum = parseInt(displayValue);
        currentOperator = "/";
    });
}

function initializeEquals() {
    document.getElementById("equals").addEventListener("click", function () {
        secondNum = parseInt(displayValue);
        if (firstNum !== null && secondNum !== null && currentOperator !== null) {
            let result = operate(firstNum, currentOperator, secondNum);
            if (result !== null) {
                displayValue = result.toString();
                firstNum = result;
                secondNum = null;
                currentOperator = null;
            } else {
                clearCalculator();
            }
            document.getElementById("display-content").textContent = displayValue;
        }
    });
}

initializeNumButtons();
initializeOperators();