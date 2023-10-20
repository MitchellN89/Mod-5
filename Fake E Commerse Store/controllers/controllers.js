const FakeStore = require("../models/FakeStore");
const fakeStore = new FakeStore();

const getProducts = (req, res) => {
  const searchString = req.query.string;
  fakeStore.getProducts(searchString).then((data) => {
    res.json(data);
  });
};

const getCategories = (req, res) => {
  fakeStore.getCategories().then((data) => {
    res.json(data);
  });
};

const getProductsOfCategory = (req, res) => {
  const category = req.params.category;
  fakeStore.getProductsOfCategory(category).then((data) => {
    res.json(data);
  });
};

module.exports = {
  getProducts,
  getCategories,
  getProductsOfCategory,
  // getProductsOfSearch,
};
