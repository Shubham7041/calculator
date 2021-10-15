const key = document.querySelector("#numbers");
const inputDisplay = document.querySelector("#inputDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const clear = document.getElementById("clear");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("#equals");

var displayValue = "";
var firstargument = 0;
var Operator = "";
var waitingforsecondargument = false;
var secondargument = 0;

function clearDisplay() {
  inputDisplay.textContent = "";
  resultDisplay.textContent = "";
  displayValue = "";
  firstargument = 0;
  secondargument = 0;
  Operator = "";
  waitingforsecondargument = false;
}

function updateDisplay() {
  inputDisplay.innerHTML += displayValue;
}

//function inputDigit(digit) {
//  displayValue = displayValue === "" ? digit : displayValue + digit;
//}

function manageOperator(operator) {
  const input = Number(displayValue);
  if (firstargument == 0) {
    firstargument = input;
    waitingforsecondargument = true;
  }
  Operator = operator;
}

key.addEventListener("click", (event) => {
  const { target } = event;
  if (target.classList.contains("number")) {
    if (displayValue == "") {
      displayValue += target.value;
    } else {
      displayValue = target.value;
    }
    updateDisplay();
  }
});

operator.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    const { target } = event;
    if (target.value == "=") {
      if (waitingforsecondargument === true) {
        secondargument = Number(displayValue);
        waitingforsecondargument = false;
      }
      const result = operate(Operator, firstargument, secondargument);
      resultDisplay.textContent = result;
    }
    if (
      target.value == "+" ||
      target.value == "-" ||
      target.value == "/" ||
      target.value == "*"
    ) {
      if (firstargument == 0 && Operator == "") {
        Operator = target.value;
        firstargument = Number(displayValue);
        displayValue = "";
        waitingforsecondargument = true;
      }
      updateDisplay();
    }
  });
});

clear.addEventListener("click", clearDisplay);

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
  return num2;
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
