const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

const app = express();
const PORT = 9118;
app.use(cors());
app.use(express.json());

var users = [
  {
    id: 1,
    role: "admin",
    password: "admin",
    fullName: "John Doe",
    username: "johndoe",
    email: "admin@materialize.com",
  },
  {
    id: 2,
    role: "client",
    password: "client",
    fullName: "Jane Doe",
    username: "janedoe",
    email: "client@materialize.com",
  },
];

const jwtConfig = {
  secret: "dd5f3089-40c3-403d-af14-d0c228b05cb4",
  refreshTokenSecret: "7c4c1c50-3230-45bf-9eae-c9b2e401c767",
};

// Get Users From Database
db.query("SELECT * FROM inspecturo_users", (err, result) => {
  if (err) {
    console.log(err);
  }
  users = result;
  console.log(users);
});

// Login
app.post("/jwt/login", (req, res) => {
  const { email, password } = req.body;

  let error = {
    email: ["Something went wrong"],
  };
  const user = users.find(
    (u) =>
      u.inspecturo_userEmail === email &&
      u.inspecturo_userPassword === md5(password)
  );
  if (user) {
    const accessToken = jwt.sign(
      { id: user.inspecturo_userId },
      jwtConfig.secret
    );

    const response = {
      accessToken,
    };
    console.log(response);
    return res.status(200).send(response);
  } else {
    console.log("not");
    error = {
      email: ["email or Password is Invalid"],
    };

    return res.status(400).send(error);
  }
});

// Forgot Password
app.post("/forgotPassword", (req, res) => {
  const email = req.body;

  let error = {
    email: ["Something went wrong"],
  };
  const user = users.find((u) => u.inspecturo_userEmail === email);
  if (user) {
    const response = "Password reset recovery link has been sent to email";
    console.log(response);
    return res.status(200).send(response);
  } else {
    console.log("not");
    error = {
      email: ["Email is Invalid"],
    };

    return res.status(200).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
