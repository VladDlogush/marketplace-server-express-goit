const { Router } = require("express");
const { uuid } = require("uuidv4");

const findProductsByIds = require("./products/productsByIds");
const findProductsByCategory = require("./products/productsByCategory");
const findProductById = require("./products/productById");
const products = require("./products/products");
const createUser = require("./users/createUser");
const usersById = require("./users/userById");
const createOrder = require("./orders/createOrder");
const notFoundRoute = require("./notFound/notFound");

const router = Router();

const createId = (request, response, next) => {
  request.body.id = uuid();
  next();
};

router.get("/products/:id", findProductById);

router.get("/products/*", (request, response) => {
  if (request.url.includes("ids")) {
    findProductsByIds(request, response);
    return;
  }

  if (request.url.includes("category")) {
    findProductsByCategory(request, response);
    return;
  }
});

router.get("/products", products);
router.post("/users", createId, createUser);
router.get("/users/:id", usersById);
router.post("/orders", createId, createOrder);
router.get("*", notFoundRoute);

module.exports = router;
