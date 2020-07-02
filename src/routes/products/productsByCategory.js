const products = require("../../db/products/all-products.json");

const productsCategory = (request, response) => {
  const foundCategory = request.query.category;
  const lastIndex = foundCategory.lastIndexOf('"');
  const firstIndex = foundCategory.indexOf('"');
  const category = foundCategory.slice(firstIndex + 1, lastIndex);

  const filteredProducts = products.filter(
    (prod) => prod.categories[0] === category
  );

  if (filteredProducts.length !== 0) {
    return response.status(200).json({
      status: "success",
      products: filteredProducts,
    });
  }

  response.status(200).json({
    status: "no products",
    products: [],
  });
};

module.exports = productsCategory;
