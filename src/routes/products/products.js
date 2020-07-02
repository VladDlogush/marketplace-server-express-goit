const products = require("../../db/products/all-products.json");

const getProducts = (request, response) => {
  if (products.length !== 0) {
    return response.status(200).json({
      status: "success",
      products: products,
    });
  }

  response.status(200).json({
    status: "no products",
    products: [],
  });
};

module.exports = getProducts;
