const router = require("express").Router();
let SignUp = require("../models/signup.model");

// router.route("/").get((req, res) => {
//   Exercise.find()
//     .then((exercises) => res.json(exercises))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.route("/").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = Number(req.body.password);

  const newSignUp = new SignUp({
    username,
    email,
    password,
  });
  newSignUp
    .save()
    .then(() => res.json("signup added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.route("/:id").get((req, res) => {
//   SignUp.findById(req.params.id)
//     .then((exercise) => res.json(SignUp))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/:id").delete((req, res) => {
//   SignUp.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Exercise deleted."))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/update/:id").post((req, res) => {
//   SignUp.findById(req.params.id)
//     .then((SignUp) => {
//       SignUp.username = req.body.username;
//       SignUp.email = req.body.email;
//       SignUp.password = Number(req.body.password);

//       SignUp.save()
//         .then(() => res.json("signup updated!"))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = router;
