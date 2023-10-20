class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 100_000_000);
  }
  add(num1, num2) {
    return num1 + num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

module.exports = Calculator;
