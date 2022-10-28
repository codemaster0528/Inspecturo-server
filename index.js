const express = require("express");
const db = require("./config/database.config");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
let bodyParser = require("body-parser");

const app = express();
const PORT = 9118; // Server PORT

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

var users = [];
var regions = [];

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

// Get Regions From Database
db.query(
  "SELECT inspecturo_regionValue FROM inspecturo_regions",
  (err, result) => {
    if (err) {
      console.log(err);
    }
    regions = result;
  }
);

// Login
app.post("/jwt/login", (req, res) => {
  const { email, password } = req.body;

  let error = {
    email: ["Something went wrong"],
  };

  // Search user from database with Email and Password
  const user = users.find(
    (u) =>
      u.inspecturo_userEmail === email &&
      u.inspecturo_userPassword === md5(password)
  );

  // User is exist. Email & Password
  if (user) {
    const accessToken = jwt.sign(
      { id: user.inspecturo_userId },
      jwtConfig.secret
    );

    // Get user regions from database.
    const userRegionsID = user.inspecturo_userRegions.split(",");
    let userRegionsText = [];
    console.log(userRegionsID);
    console.log(userRegionsID.length);
    for (let i = 0; i < userRegionsID.length; i++) {
      userRegionsText[i] = regions[i];
    }

    console.log(userRegionsText);
    const response = {
      accessToken,
      userEmail: user.inspecturo_userEmail,
      userName: user.inspecturo_userName,
      userRegionIds: user.inspecturo_userRegions,
      userRegionTexts: userRegionsText,
      userStatus: user.inspecturo_userStatus,
      userAddons: user.inspecturo_userAddons,
    };

    // User is exist but disabled.
    if (user.inspecturo_userStatus != "ACTIVE") {
      error = {
        email: ["User is not activated"],
      };
      return res.status(400).send(error);
    }

    // Success Login
    console.log(response);
    return res.status(200).send(response);
  }

  // User does not exist. Email & Password
  else {
    const user = users.find((u) => u.inspecturo_userEmail === email);

    // Password incorrect
    if (user) error = { password: ["Password is incorrect"] };
    // Email invalid
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
  const email = req.body.email;

  let error = {
    email: ["Something went wrong"],
  };
  console.log(users);
  console.log(email);
  const user = users.find((u) => u.inspecturo_userEmail === email);

  console.log("user : " + user);
  if (user) {
    const response = "Password reset recovery link has been sent to email";
    console.log(response);
    return res.status(200).send(response);
  } else {
    error = {
      email: ["Email is Invalid"],
    };
    return res.status(400).send(error);
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
