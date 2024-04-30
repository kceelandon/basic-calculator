let displayValue = "0";
let currentButton = "0";

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

// initializes number and clear button functionality to populate display.
function initializeButtons() {
    let buttons = document.querySelectorAll(".button-column button");
    buttons.forEach((btn) => {
        btn.addEventListener("click", function() {
            if (displayValue === "0") {
                displayValue = btn.textContent;
            } else if (displayValue.length <= 7) {
                displayValue += btn.textContent;
            }
            document.getElementById("display-content").textContent = displayValue;
        });
    });
    document.getElementById("clear").addEventListener("click", function() {
        displayValue = "0";
        document.getElementById("display-content").textContent = displayValue;
    });
}

initializeButtons();