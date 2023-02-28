const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const uri = process.env.ATLAS_URI;
let op = {
  poolSize: 10,
  bufferMaxEntries: 0,
  reconnectTries: 5000,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    reconnectTries: 5000,
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("123.Inside Err Statemnt", err);
    } else {
      console.log("Monogodb connected Successfully!!...");
    }
  },
  op
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("123456.MongoDB database connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
const signupRouter = require("./routes/signup");
const signinRouter = require("./routes/signin");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
