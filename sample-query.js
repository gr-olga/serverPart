const User = require("./models/").user;

async function getAllUsers() {
  try {
    const allUsers = await User.findAll();
    console.log(allUsers)
    return allUsers;
  } catch (e) {
    console.log(e);
  }
}

getAllUsers().then(users => console.log(users));