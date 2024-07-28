const db = require("../database/databaseConfig");

const getAllBoards = async () => {
  try {
    return await db.any("SELECT * FROM board");
  } catch (error) {
    console.log(error);
  }
};

const getOneBoard = async (id) => {
  try {
    return await db.one("SELECT * FROM board WHERE id = $1", id);
  } catch (error) {
    return null;
  }
};

const createBoard = async (board) => {
  try {
    return await db.one(
      "INSERT INTO board (owner_id, constributors_id, title, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [board.owner_id, board.constributors_id, board.title, board.description]
    );
  } catch (error) {
    return null;
  }
};

const updateBoard = async (id, board) => {
  try {
    return await db.one(
      "UPDATE board SET name = $1, owner_id = $2 WHERE id = $3 RETURNING *",
      [board.name, board.owner_id, id]
    );
  } catch (error) {
    return null;
  }
};

const deleteBoard = async (id) => {
  try {
    return await db.one("DELETE FROM board WHERE id = $1 RETURNING *", id);
  } catch (error) {
    return null;
  }
};

module.exports = {
  getAllBoards,
  getOneBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
