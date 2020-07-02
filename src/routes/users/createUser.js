const fs = require("fs");
const usersList = require("../../db/users/all-users.json");
const pathToFile =
  "../marketplace-server-express-goit/src/db/users/all-users.json";

const createUser = (request, response) => {
  fs.readFile(pathToFile, "utf-8", (err, data) => {
    if (err) {
      response.status(200).json({
        status: "error",
        message: err,
      });
    } else {
      usersList.push(request.body);
      fs.writeFile(pathToFile, JSON.stringify(usersList), (err) => {
        console.log("done");
      });
    }
  });

  response.status(200).json({
    status: "success",
    user: request.body,
  });
};

module.exports = createUser;
