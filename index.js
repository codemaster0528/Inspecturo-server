const express = require("express");
const db = require("./config/database.config");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
let bodyParser = require("body-parser");

const app = express();
const PORT = 9118;

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

var users = [];

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
    console.log("* : " + user.inspecturo_userStatus);
    if (user.inspecturo_userStatus != "ACTIVE") {
      error = {
        email: ["User is not activated"],
      };
      return res.status(400).send(error);
    }
    console.log(response);
    return res.status(200).send(response);
  } else {
    const user = users.find((u) => u.inspecturo_userEmail === email);
    if (user) error = { password: ["Password is incorrect"] };
    else {
      error = {
        email: ["Email is Invalid"],
      };
    }
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

// Get CarImage from Inspecturo_manufacturers
app.get("/getcarimage", (req, res) => {
  const carMake = req.query.carMake;
  var carImage;
  db.query(
    'SELECT * FROM inspecturo_manufacturers where inspecturo_maufacturerName="' +
      carMake +
      '"',
    (err, result) => {
      if (err) {
        return res.status(200).send("abbott-detroit.png");
      }

      if (result.length == 0) {
        return res.status(200).send("abbott-detroit.png");
      } else {
        carImage = result[0].inspecturo_maufacturerValue;
      }
      return res.status(200).send(carImage);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
