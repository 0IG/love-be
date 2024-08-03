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
        return await db.one('INSERT INTO users (username, password, email, profileImg ,address, zipcode, rating, customerType, admin, region, province, city, town, spots,dob,firebase_id, joinedDate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,$13,$14,$15,$16,$17) RETURNING *', [user.username, user.password, user.email , user.profileImg, user.address, user.zipcode, user.rating, user.customerType, user.admin, user.region, user.province, user.city, user.town, user.spots, user.dob, user.firebase_id, user.joinedDate
          ]);
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