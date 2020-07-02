const users = require("../../db/users/all-users.json");

const userId = (request, response) => {
  const id = request.params.id;
  const foundUser = users.filter((user) => user.id === id);

  if (foundUser.length !== 0) {
    return response.status(200).json({
      status: "success",
      users: foundUser,
    });
  }

  response.status(200).json({
    status: "not found",
    users: [],
  });
};

module.exports = userId;
