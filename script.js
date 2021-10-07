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

const button = document.querySelectorAll("button");
const display = document.getElementById("display");
const clear = document.getElementById("clear");

button.forEach((button) => {
  button.addEventListener("click", (event) => {
    display.textContent += event.target.textContent;
  });
  clear.addEventListener("click", () => {
    display.textContent = " ";
  });
});
