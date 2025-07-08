// 1.	Simple Calculator. Implement the required functions in an external file to let calculator.html works properly

let currentInput = "";
let previousInput = "";
let operation = null;
let resetScreen = false;

const Answer = document.getElementById("Answer");

function EnterNumber(number) {
  if (resetScreen) {
    currentInput = "";
    resetScreen = false;
  }
  if (number === "." && currentInput.includes(".")) return;
  currentInput += number;
  Answer.value = currentInput;
}

function EnterOperator(operator) {
  if (currentInput === "" && previousInput === "") return;
  if (currentInput === "" && previousInput !== "") {
    operation = operator;
    return;
  }
  if (previousInput !== "") {
    calculate();
  }
  operation = operator;
  previousInput = currentInput;
  currentInput = "";
}

function EnterEqual() {
  if (currentInput === "" || previousInput === "" || operation === null) return;
  calculate();
  operation = null;
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  previousInput = "";
  Answer.value = currentInput;
  resetScreen = true;
}

function EnterClear() {
  currentInput = "";
  previousInput = "";
  operation = null;
  Answer.value = "";
}
