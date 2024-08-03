const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const photosController = require("./controllers/photosController");
const relationshipsController = require("./controllers/relationshipsController");
const usersController = require("./controllers/usersController");
const boardsController = require("./controllers/boardsController");
app.get("/", (req, res) => {
  res.send("Hello World :3");
});

app.use("/photos", photosController);
app.use("/relationships", relationshipsController);
app.use("/users", usersController);
app.use("/boards", boardsController);

module.exports = app;
