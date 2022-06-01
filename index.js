const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4000;

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.send(users);
//   } catch (e) {
//     console.log(e.message);
//   }
// });
 app.use(express.json());
// Create a new user account
// app.post("/users", async (req, res, next) => {
//   try {
//     const user = await User.create(req.body);
//     res.json(user);
//   } catch (e) {
//     next(e);
//   }
// });
// app.get("/users/:userId", async (req, res) => {
//   const userId = parseInt(req.params.userId);
//   const user = await User.findByPk(userId);
//   if (!user) {
//     res.status(404).send("User not found");
//   } else {
//     res.send(user);
//     console.log("find")
//   }
// });

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      //res.send(user)
      res.json(user);
      console.log("som")
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));


// app.post("/echo", (req, res) => {
//   res.json(req.body);
// });