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

module.exports = { getAllPhotos, getOnePhoto };
