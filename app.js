const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const photosController = require("./controllers/photosController");

app.get("/", (req, res) => {
  res.send("Hello World :3");
});

app.use("/photos", photosController);

module.exports = app;
