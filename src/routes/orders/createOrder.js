const fs = require("fs");

const productsList = require("../../db/products/all-products.json");
const ordersList = require("../../db/users/orders/all-orders.json");
const pathToFile =
  "../marketplace-server-express-goit/src/db/users/orders/all-orders.json";

const createOrder = (request, response) => {
  const userOrder = request.body.products;
  let foundProducts;

  userOrder.map((order) => {
    foundProducts = productsList.filter(
      (product) => product.categories[0] === order
    );
  });

  fs.readFile(pathToFile, "utf-8", (err, data) => {
    if (err) {
      response.status(200).json({
        status: "error",
        message: err,
      });
    } else if (foundProducts.length !== 0) {
      ordersList.push(request.body);
      fs.writeFile(pathToFile, JSON.stringify(ordersList), (err) => {
        console.log("done");
      });
    }
  });

  if (foundProducts.length !== 0) {
    return response.status(200).json({
      status: "success",
      order: request.body,
    });
  }

  response.status(200).json({ status: "failed", order: null });
};

module.exports = createOrder;
