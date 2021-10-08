const button = document.querySelectorAll("button");
const display = document.querySelector("#display");
const clear = document.getElementById("clear");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("#equals");

var displayValue = "";
var firstargument = "";
var Operator = "";
var secondargument = "";

operator.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    firstargument = displayValue;
    Operator = event.target.textContent;
  });
});

button.forEach((button) => {
  button.addEventListener("click", (event) => {
    display.textContent += event.target.textContent;
    return (displayValue = display.textContent);
  });
  clear.addEventListener("click", () => {
    display.textContent = "";
  });
  equal.addEventListener("click", () => {
    secondArgument = displayValue;
  });
});

const operate = function (operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  }
};

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};
