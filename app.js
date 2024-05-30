const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const aController = require("./controllers/aController");

app.get("/", (req, res) => {
  res.send("Hello World :3");
});

app.use("/photos", aController);

module.exports = app;
