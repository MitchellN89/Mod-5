class FakeStore {
  constructor() {
    this.axios = require("axios");
  }
  getCategories() {
    return this.axios
      .get("https://fakestoreapi.com/products/categories")
      .then((data) => data.data);
  }
  getProducts(searchString) {
    return this.axios.get(`https://fakestoreapi.com/products`).then((data) => {
      return this.#filterDataBySearch(data.data, searchString);
    });
  }
  getProductsOfCategory(category) {
    return this.axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((data) => {
        return data.data;
      });
  }
  #filterDataBySearch(dataArr, searchString) {
    if (searchString) {
      const foundSet = dataArr.filter((product) => {
        return product.title.toUpperCase().includes(searchString.toUpperCase());
      });
      return foundSet;
    } else {
      return dataArr;
    }
  }
}

module.exports = FakeStore;
