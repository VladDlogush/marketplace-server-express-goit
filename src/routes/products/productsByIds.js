const products = require("../../db/products/all-products.json");

const productIds = (request, response) => {
  const arrOfIds = request.query.ids.split(",");

  let arrOfProducts = [];

  arrOfIds.map((id) => {
    const product = products.find((product) => product.id === +id);
    if (product) arrOfProducts.push(product);
  });

  if (arrOfProducts.length !== 0) {
    return response.status(200).json({
      status: "success",
      products: arrOfProducts,
    });
  }

  response.status(200).json({
    status: "no products",
    products: [],
  });
};

module.exports = productIds;
