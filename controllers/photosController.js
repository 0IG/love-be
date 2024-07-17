const express = require("express");
const photosController = express();
const { getOnePhoto } = require("../queries/photos");
const { getAllPhotos } = require("../queries/photos");

// all photos
photosController.get("/", async (req, res) => {
  const { url, user_id } = req.query;
  const photos = await getAllPhotos(url, user_id);
  console.log(photos);

  if (photos) {
    res.json({
      success: true,
      payload: photos,
    });
  } else {
    res.status(500).json();
  }
});

// single photo
photosController.get("/:id", async (req, res) => {
  const id = req.params.id;
  const singleItem = await getOnePhoto(id);
  if (singleItem) {
    res.json({
      success: true,
      payload: singleItem,
    });
  } else {
    res.status(500).json();
  }
});

module.exports = photosController;
