const database = require("../database/databaseConfig");

const getAllPhotos = async (user_id) => {
  try {
    return await database.any("SELECT * FROM photos WHERE user_id = $1", user_id);
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

const createPhoto = async (photo) => {
  try {
    return await database.one(
      "INSERT INTO photos (user_id, url) VALUES ($1, $2) RETURNING *",
      [photo.user_id, photo.url]
    );
  } catch (error) {
    return null;
  }

}

const updatePhoto = async (id, photo) => {
  try {
    return await database.one(
      "UPDATE photos SET user_id = $1, url = $2 WHERE id = $3 RETURNING *",
      [photo.user_id, photo.url, id]
    );
  } catch (error) {
    return null;
  }

}

const deletePhoto = async (id) => {
  try {
    return await database.one(
      "DELETE FROM photos WHERE id = $1 RETURNING *",
      id
    );
  } catch (error) {
    return null;
  }


}

module.exports = { getAllPhotos, getOnePhoto, createPhoto, updatePhoto, deletePhoto };
