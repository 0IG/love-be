const db = require('../database/databaseConfig');

const getAllUsers = async () => {
  try {
    return await db.any('SELECT * FROM users');
  } catch (error) {
    console.log(error);
  }
}

const getOneUser = async (id) => {
    try {
        return await db.one('SELECT * FROM users WHERE id = $1', id);
    } catch (error) {
        return null;
    }
}

const createUser = async (user) => {
    try {
        return await db.one('INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *', [user.username, user.password, user.email]);
    } catch (error) {
        return null;
    }
}

const updateUser = async (id, user) => {
    try {
        return await db.one('UPDATE users SET username = $1, password = $2, email = $3 WHERE id = $4 RETURNING *', [user.username, user.password, user.email, id]);
    } catch (error) {
        return null;
    }
}

const deleteUser = async (id) => {
    try {
        return await db.one('DELETE FROM users WHERE id = $1 RETURNING *', id);
    } catch (error) {
        return null;
    }
}

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };