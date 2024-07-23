const database = require("../database/databaseConfig");

const getAllPhotos = async () => {
  try {
    return await database.any("SELECT * FROM photos");
  } catch (error) {
    console.log(error);
  }
};

const getOnePhoto = async (id) => {
  try {
    return await database.one("SELECT * FROM photos WHERE id = $1", id);
  } catch (error) {
    return null;
  }
};
const createPhoto = async (url, user_id) => {
  try {
    return await database.one(
      "INSERT INTO photos (url, user_id) VALUES ($1, $2) RETURNING *",
      [url, user_id]
    );
  } catch (error) {
    return null;
  }
};

const updatePhoto = async (id, url, user_id) => {
  try {
    return await database.one(
      "UPDATE photos SET url = $1, user_id = $2 WHERE id = $3",
      [url, user_id, id]
    );
  } catch (error) {
    return null;
  }
};

const deletePhoto = async (id) => {
  try {
    return await database.one("DELETE FROM photos WHERE id = $1", id);
  } catch (error) {
    return null;
  }
};

module.exports = {
  getAllPhotos,
  getOnePhoto,
  createPhoto,
  updatePhoto,
  deletePhoto,
};
