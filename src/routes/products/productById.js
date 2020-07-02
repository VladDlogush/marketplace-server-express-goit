const products = require("../../db/products/all-products.json");

const productId = (request, response) => {
  const id = +request.params.id;
  const foundProduct = products.filter((prod) => prod.id === id);

  if (foundProduct.length !== 0) {
    return response.status(200).json({
      status: "success",
      products: foundProduct,
    });
  }

  response.status(200).json({
    status: "no products",
    products: [],
  });
};

module.exports = productId;
