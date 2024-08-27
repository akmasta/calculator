console.log("let's do the math, boy.")

let firstNumber = 0;
let secondNumber = 0;
let usedOperator = "";
let operatorClicked = false;

let a = 20;
let b = 4;

// Add two integers together
function add(a, b) {
    return a + b;
};

// Subtract one int from another
function subtract (a, b) {
    return a - b;
};

// Multiply to ints
function multiply (a, b) {
    return a * b;
};

// Divide one int through another
function divide (a, b) {
    return a / b;
};

// Prompt for numbers and operator

function operate () {

    if (usedOperator == "+") {
        return add(Number(firstNumber), Number(secondNumber));
    } else if (usedOperator == "-") {
        return subtract(Number(firstNumber), Number(secondNumber));
    } else if (usedOperator == "*") {
        return multiply(Number(firstNumber), Number(secondNumber));
    } else if (usedOperator == "/") {
        return divide(Number(firstNumber), Number(secondNumber));
    } else {
        alert("Error!");
    };
};

// Display manipulation
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button#num");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (display.textContent == 0 || operatorClicked) {
        display.textContent = event.target.textContent;
        operatorClicked = false;
        } else {
            display.textContent += event.target.textContent;
        };
    });
});

// Store values for operation
const operator = document.querySelectorAll(".buttons button#operator");
const equals = document.querySelector(".buttons button#equal")

operator.forEach(button => {
    button.addEventListener("click", (event) => {
        if (firstNumber == 0) {
            firstNumber = display.textContent;
            usedOperator = event.target.textContent;
            operatorClicked = true;
        } else { // Calculate with more than two operators
            secondNumber = display.textContent;
            display.textContent = operate();
            usedOperator = event.target.textContent;
            operatorClicked = true;
            firstNumber = display.textContent;
        }
    });
});

//Operate on values
equals.addEventListener("click", (event) => {
    secondNumber = display.textContent;
    display.textContent = operate();
})