const express = require("express");
const router = express.Router();
const controller = require("../Controllers/calculatorControllers");

router.get("/add", (req, res) => {
  controller.add(req, res);
});

router.get("/subtract", (req, res) => {
  controller.subtract(req, res);
});

router.get("/divide", (req, res) => {
  controller.divide(req, res);
});

router.get("/multiply", (req, res) => {
  controller.multiply(req, res);
});

module.exports = router;
