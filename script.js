const key = document.querySelector("#buttons");
const display = document.querySelector("#display");
const clear = document.getElementById("clear");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("#equals");

var displayValue = "0";
var firstargument = 0;
var Operator = "";
var waitingforsecondargument = false;
var secondargument = null;
/*
operator.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    firstargument = displayValue;
    Operator = event.target.textContent;
  });
});

button.forEach((button) => {
  button.addEventListener("click", (event) => {
    inputdisplay.textContent += event.target.textContent;
    return (displayValue = inputdisplay.textContent);
  });
});

clear.addEventListener("click", () => {
  inputdisplay.textContent = "";
  resultdisplay.textContent = "";
});
equal.addEventListener("click", () => {
  secondargument = displayValue;
});
*/

function updateDisplay() {
  display.textContent = displayValue;
}

function inputdigit(digit) {
  if (waitingforsecondargument === true) {
    displayValue = digit;
    waitingforsecondargument = false;
  } else {
    displayValue = displayValue === "0" ? digit : displayValue + digit;
  }
}

key.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
  }
  if (target.classList.contains("clear")) {
    console.log("clear", target.value);
    return;
  }
  inputdigit(target.value);
  updateDisplay();
});

function handleOperator(nextOperator) {
  const inputValue = parseInt(displayValue);
  if ((firstargument = 0 && !isNaN(inputValue))) {
    firstargument = inputValue;
    console.log(firstargument);
  } else if (Operator) {
    const result = operate(Operator, firstargument, secondargument);
    displayValue = String(result);
    firstargument = result;
  }
  waitingforsecondargument = true;
  Operator = nextOperator;
  console.log(Operator, firstargument, displayValue);
}

const operate = function (operator, num1, num2) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "/") {
    return num1 / num2;
  } else if (operator == "*") {
    return num1 * num2;
  }
  return secondargument;
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
