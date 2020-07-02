const express = require("express");
const morgan = require("morgan");
const router = require("./routes/router");

const app = express();

const startServer = (port) => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use("/", router);
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on ${port}`);
  });
};

module.exports = startServer;
