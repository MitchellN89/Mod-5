const Calculator = require("../Models/Calculator");
const Logger = require("../Models/Logger");
const mycalc = new Calculator();
const myLogger = new Logger();

console.log(mycalc.id); // see the id of the new calc object

const add = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = mycalc.add(num1, num2);
    myLogger.log(mycalc.id, "add", num1, num2, result);
    res.status(200).json({ result });
  }
};

const multiply = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = mycalc.multiply(num1, num2);
    myLogger.log(mycalc.id, "multiply", num1, num2, result);
    res.status(200).json({ result });
  }
};

const divide = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = mycalc.divide(num1, num2);
    myLogger.log(mycalc.id, "divide", num1, num2, result);
    res.status(200).json({ result });
  }
};

const subtract = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = mycalc.subtract(num1, num2);
    myLogger.log(mycalc.id, "subtract", num1, num2, result);
    res.status(200).json({ result });
  }
};

module.exports = { add, multiply, subtract, divide };
