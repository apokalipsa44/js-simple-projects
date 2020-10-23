class Calculator {
  constructor(previousOperandField, currentOperandField) {
    this.previousOperandField = previousOperandField;
    this.currentOperandField = currentOperandField;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.previousOperand != "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    switch (this.operation.toString()) {
      case "+":
        this.currentOperand = this.currentOperand + this.previousOperand;
        this.previousOperand = "";
        this.operation = undefined;
        break;
      case "-":
        this.currentOperand = this.previousOperand - this.currentOperand;
        this.previousOperand = "";
        this.operation = undefined;
        break;
      case "*":
        this.currentOperand = this.previousOperand * this.currentOperand;
        this.previousOperand = "";
        this.operation = undefined;
        break;
      case "/":
        if (this.currentOperand.toString() === "0") {
          this.currentOperand = "error division by zero!!";
          this.previousOperand = "";
          this.operation = undefined;
          break;
        }
        this.currentOperand = this.previousOperand / this.currentOperand;
        this.previousOperand = "";
        this.operation = undefined;
        break;
      default:
        this.currentOperand = 'something is not yes';
        this.previousOperand = "";
        this.operation = undefined;
        break;
    }
    this.updateDisplay();
  }

  updateDisplay() {
    this.currentOperandField.innerText = this.currentOperand;
    this.previousOperandField.innerText =
      this.previousOperand + " " + this.operation.toString();
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandField = document.querySelector("[data-previous-operand]");
const currentOperandField = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandField, currentOperandField);
numberButtons.forEach((button) =>
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
);

operationButtons.forEach((button) =>
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
);
