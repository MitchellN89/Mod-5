const express = require("express");
const router = express.Router();

const controller = require("../controllers/controllers");

router.get("/products", (req, res) => {
  controller.getProducts(req, res);
});

router.get("/categories", (req, res) => {
  controller.getCategories(req, res);
});

router.get("/products/:category", (req, res) => {
  controller.getProductsOfCategory(req, res);
});

module.exports = router;
