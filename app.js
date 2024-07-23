const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const photosController = require("./controllers/photosController");
const boardsController = require("./controllers/boardsController");
const usersController = require("./controllers/usersController");
const relationshipsController = require("./controllers/relationshipsController");

app.get("/", (req, res) => {
  res.send("Hello World :3");
});

app.use("/photos", photosController);
app.use("/boards", boardsController);
app.use("/users", usersController);
app.use("/relationships", relationshipsController);

module.exports = app;
