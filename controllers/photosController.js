const express = require("express");
const photosController = express();
const {
  getAllPhotos,
  getOnePhoto,
  createPhoto,
  updatePhoto,
  deletePhoto,
} = require("../queries/photos");

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

photosController.post("/", async (req, res) => {
  const newPhoto = req.body;
  const createdPhoto = await createPhoto(newPhoto);
  if (createdPhoto) {
    res.json({
      success: true,
      payload: createdPhoto,
    });
  } else {
    res.status(500).json();
  }
});

photosController.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updatedPhoto = await updatePhoto(id, req.body);
  if (updatedPhoto) {
    res.json({
      success: true,
      payload: updatedPhoto,
    });
  } else {
    res.status(500).json();
  }
});

photosController.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedPhoto = await deletePhoto(id);
  if (deletedPhoto) {
    res.json({
      success: true,
      payload: deletedPhoto,
    });
  } else {
    res.status(500).json();
  }
});

module.exports = photosController;
