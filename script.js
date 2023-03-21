let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equalsBtn");
const clearButton = document.getElementById("clearBtn");
const deleteButton = document.getElementById("deleteBtn");
const pointButton = document.getElementById("pointBtn");
const lastOperationScreen = document.getElementById("lastOperationScreen");
const currentOperationScreen = document.getElementById(
  "currentOperationScreen"
);

window.addEventListener("keydown", handleKeyboardInput);
equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", appendPoint);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);



function appendNumber(number) {
  if (isNaN(number.trim())) return;

  if (currentOperationScreen.value === "0" || shouldResetScreen) resetScreen();
  currentOperationScreen.value += number.trim();
}



function resetScreen() {
  currentOperationScreen.value = "";
  shouldResetScreen = false;
}

function clear() {
  currentOperationScreen.value = "0";
  lastOperationScreen.value = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function appendPoint() {
  if (shouldResetScreen) resetScreen();
  if (currentOperationScreen.value === "") currentOperationScreen.value = "0";
  if (currentOperationScreen.value.includes(".")) return;
  currentOperationScreen.value += ".";
}

function deleteNumber() {
  currentOperationScreen.value = currentOperationScreen.value
    .toString()
    .slice(0, -1);
}

function setOperation(operator) {
  if (currentOperation !== null && firstOperand !== "" && currentOperationScreen.value !== "") {
    evaluate();
  }
  firstOperand = currentOperationScreen.value;
  currentOperation = operator;
  lastOperationScreen.value = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
}



function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "÷" && currentOperationScreen.value === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondOperand = currentOperationScreen.value;
  currentOperationScreen.value = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  lastOperationScreen.value = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === ".") appendPoint();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "Escape") clear();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    const operator = convertOperator(e.key);
    if (operator) setOperation(operator);
  }
}


function convertOperator(keyboardOperator) {
  if (keyboardOperator === "/") return "÷";
  if (keyboardOperator === "*") return "*"; // Change this line
  if (keyboardOperator === "-") return "-"; // Change this line
  if (keyboardOperator === "+") return "+";
}


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}



