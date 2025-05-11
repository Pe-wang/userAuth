let users = [];
let userId = 1;

function createUser(username, password, role) {
  users.push({ id: userId++, username, password, role });
}

function findUser(username) {
  return users.find(user => user.username === username);
}

module.exports = { users, createUser, findUser };
