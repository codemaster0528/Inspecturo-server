// core modules
const express = require("express");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
let bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

// config
const db = require("./config/database.config");
const auth = require("./config/auth.config");
const server = require("./config/server.config");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

var users = []; // users from database
var regions = []; // regions from database

// Get Users From Database
function getUsers() {
  db.query("SELECT * FROM inspecturo_users", (err, result) => {
    if (err) {
      console.log(err);
    }
    users = result;
  });
}
// Get Regions From Database
function getRegions() {
  db.query(
    "SELECT inspecturo_regionValue FROM inspecturo_regions",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      regions = result;
    }
  );
}

getUsers();
getRegions();

app.use(express.static(path.join(__dirname, "out")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "out", "index.html"));
});

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

  console.log(user);
  // User is exist. Email & Password
  if (user) {
    const accessToken = jwt.sign({ id: user.inspecturo_userId }, auth.secret);

    // Get user regions from database.
    const userRegionsID = user.inspecturo_userRegions.split(",");
    let userRegionsText = [];
    for (let i = 0; i < userRegionsID.length; i++) {
      userRegionsText[i] = regions[i];
    }

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

// Authentication
app.get("/auth/me", (req, res) => {
  const token = req.headers.authorization;

  // get the decoded payload and header
  const decoded = jwt.decode(token, { complete: true });
  if (decoded) {
    const { id: userId } = decoded.payload;
    const userData = JSON.parse(
      JSON.stringify(users.find((u) => u.inspecturo_userId === userId))
    );
    delete userData.inspecturo_userPassword;

    return res.status(200).send({ userData });
  } else {
    error = {
      email: ["Invalid User"],
    };
    return res.status(400).send(error);
  }
});

// Forgot Password
app.post("/forgotPassword", (req, res) => {
  const email = req.body.email;

  let error = {
    email: ["Something went wrong"],
  };
  const user = users.find((u) => u.inspecturo_userEmail === email);

  if (user) {
    const response = "Password reset recovery link has been sent to email";

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "juri.god0403@gmail.com",
        pass: "pfbfiriqcxsfthsx",
      },
    });

    function makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    var reset_password = makeid(40);

    db.query(
      `UPDATE inspecturo_users SET inspecturo_userPassword = "${reset_password}"`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );

    var mailOptions = {
      from: "Inspecturo.support@gmail.com",
      to: email,
      subject: "Password Reset Link",
      html: `<h1>Inspecturo.com</h1><a href="${server.website_url}/reset-password?q=${reset_password}">Password Reset</a>`,
    };

    getUsers();
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return res.status(200).send(response);
  } else {
    error = {
      email: ["Email is Invalid"],
    };
    return res.status(400).send(error);
  }
});

app.get("/reset-password", (req, res) => {
  var q = req.query.q;
  console.log(q);
  const user = users.find((u) => u.inspecturo_userPassword === q);
  console.log(user);
  if (user) {
    return res.redirect(`${server.website_url}/reset-password?q=${q}`);
  }
  return res.status(400).send("Invalid Link");
});

app.post("/resetPassword", (req, res) => {
  const resetToken = req.body.resetToken;
  const newPassword = req.body.newPassword;
  const hashPassword = md5(newPassword);

  const user = users.find((u) => u.inspecturo_userPassword === resetToken);

  if (user) {
    db.query(
      `UPDATE inspecturo_users SET inspecturo_userPassword = "${hashPassword}"`,
      (err, result) => {
        if (err) {
          return res.status(400).send(err);
        }

        getUsers();
        return res.status(200).send(newPassword);
      }
    );
  } else {
    return res.status(200).send("Invalid Reset Link");
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

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
