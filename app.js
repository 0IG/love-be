const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World :3");
})

module.exports = app;