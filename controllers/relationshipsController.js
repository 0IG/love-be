const express = require("express");
const relationshipsController = express();
const { getAllRelationships, getOneRelationship, createRelationship, updateRelationship, deleteRelationship } = require("../queries/relationships");


relationshipsController.get("/", async (req, res) => {
    const relationships = await getAllRelationships();
    console.log(relationships);

    if (relationships) {
        res.json({
            success: true,
            payload: relationships,
        });
    } else {
        res.status(500).json();
    }
});

relationshipsController.get("/:user_id", async (req, res) => {
    const user_id = req.params.user_id;
    const singleItem = await getOneRelationship(user_id);
    if (singleItem) {
        res.json({
            success: true,
            payload: singleItem,
        });
    } else {
        res.status(500).json();
    }
}); 

relationshipsController.post("/", async (req, res) => {
    const newRelationship = req.body;
    const createdRelationship = await createRelationship(newRelationship);
    if (createdRelationship) {
        res.json({
            success: true,
            payload: createdRelationship,
        });
    } else {
        res.status(500).json();
    }
});

relationshipsController.put("/:id", async (req, res) => {
    const id = req.params.id;
    const updatedRelationship = await updateRelationship(id, req.body);
    if (updatedRelationship) {
        res.json({
            success: true,
            payload: updatedRelationship,
        });
    } else {
        res.status(500).json();
    }
});

relationshipsController.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedRelationship = await deleteRelationship(id);
    if (deletedRelationship) {
        res.json({
            success: true,
            payload: deletedRelationship,
        });
    } else {
        res.status(500).json();
    }
});

module.exports = relationshipsController;