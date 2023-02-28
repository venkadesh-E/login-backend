const SignUp = require("../models/signup.model");

const router = require("express").Router();

router.route("/").get((req, res) => {
  SignUp.find()
    .then((signin) => {
      console.log("SignIn", signin);
      if (signin.length > 0) {
        res.send("You got the SignUp Users Array in node js");
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
