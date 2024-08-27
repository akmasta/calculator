console.log("let's do the math, boy.")

let firstNumber = 0;
let secondNumber = 0;
let oeprator = "";

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
    let firstNumber = Number(prompt("Enter a number:"));
    let operator = prompt("Enter an operator:");
    let secondNumber = Number(prompt("Enter another number:"));

    if (operator == "+") {
        return add(firstNumber, secondNumber);
    } else if (operator == "-") {
        return subtract(firstNumber,secondNumber);
    } else if (operator == "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator == "/") {
        return divide(firstNumber, secondNumber);
    } else {
        alert("Error!");
    };
};

// operate();

// Display manipulation
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button#num");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (display.textContent == 0) {
        display.textContent = event.target.textContent;
        } else {
            display.textContent += event.target.textContent;
        };
    });
});

// Storing values for operation
const operator = document.querySelectorAll(".buttons button#operator");

operator.forEach(button => {
    button.addEventListener("click", (event) => {
        firstNumber = display.textContent;
    });
});

