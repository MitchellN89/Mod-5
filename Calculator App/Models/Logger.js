class Logger {
  constructor() {}
  log(id, operation, num1, num2, result) {
    switch (operation) {
      case "add":
        console.log(
          `Calculator: ${id} has made a '${operation}' call: ${num1} + ${num2} = ${result}`
        );
        break;
      case "subtract":
        console.log(
          `Calculator: ${id} has made a '${operation}' call: ${num1} - ${num2} = ${result}`
        );
        break;
      case "divide":
        console.log(
          `Calculator: ${id} has made a '${operation}' call: ${num1} / ${num2} = ${result}`
        );
        break;
      case "multiply":
        console.log(
          `Calculator: ${id} has made a '${operation}' call: ${num1} * ${num2} = ${result}`
        );
        break;
    }
  }
}

module.exports = Logger;
