const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => {
      console.log("Users ******", users);
      res.send({
        status: 200,
        data: users,
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  console.log("req.body", req.body.username);
  const username = req.body.username;
  console.log(username);
  const newUser = new User({ username });
  console.log(newUser);
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
