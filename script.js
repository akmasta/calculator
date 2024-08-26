console.log("let's do the math, boy.")

let firstNumber = 0;
let secondNumber = 0;
let oeprator = "";

let a = 20;
let b = 4;

// Add two integers together

function add(a, b) {
    console.log((a + b));
};

add(a, b);

// Subtract one int from another

function subtract (a, b) {
    console.log(a - b);
};

subtract(a, b);

// Multiply to ints

function multiply (a, b) {
    console.log(a * b)
};

multiply(a, b);

// Divide one int through another

function divide (a, b) {
    console.log(a / b)
};

divide(a, b);

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

operate();