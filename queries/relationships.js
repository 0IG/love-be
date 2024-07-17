const db = require("../database/databaseConfig");

const getAllRelationships = async () => {
    try {
        return await db.any("SELECT * FROM relationships");
    } catch (error) {
        console.log(error);
    }
}

const getOneRelationship = async (id) => {
    try {
        return await db.one("SELECT * FROM relationships WHERE id = $1", id);
    } catch (error) {
        return null;
    }
}

const createRelationship = async (relationship) => {
    try {
        return await db.one("INSERT INTO relationships (user_id, partner_id) VALUES ($1, $2) RETURNING *", [relationship.user_id, relationship.partner_id]);
    } catch (error) {
        return null;
    }
}   

const updateRelationship = async (id, relationship) => {
    try {
        return await db.one("UPDATE relationships SET user_id = $1, partner_id = $2 WHERE id = $3 RETURNING *", [relationship.user_id, relationship.partner_id, id]);
    } catch (error) {
        return null;
    }
}   

const deleteRelationship = async (id) => {
    try {
        return await db.one("DELETE FROM relationships WHERE id = $1 RETURNING *", id);
    } catch (error) {
        return null;
    }
}   