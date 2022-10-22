const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

const app = express();
const PORT = 9118;
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
