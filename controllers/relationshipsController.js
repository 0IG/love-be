const express = require('express');
const relationshipsController = express();
const { getAllRelationships, getOneRelationship, createRelationship, updateRelationship, deleteRelationship } = require('../queries/relationships');

const getAllRelationships = async (req, res) => {
    const relationships = await getAllRelationships();
    if (relationships) {
        res.json({
            success: true,
            payload: relationships
        });
    } else {
        res.status(500).json();
    }
}

const getOneRelationship = async (req, res) => {
    const id = req.params.id;
    const relationship = await getOneRelationship(id);
    if (relationship) {
        res.json({
            success: true,
            payload: relationship
        });
    } else {
        res.status(500).json();
    }
}   

const createRelationship = async (req, res) => {
    const newRelationship = req.body;
    const createdRelationship = await createRelationship(newRelationship);
    if (createdRelationship) {
        res.json({
            success: true,
            payload: createdRelationship
        });
    } else {
        res.status(500).json();
    }
}

const updateRelationship = async (req, res) => {
    const id = req.params.id;
    const updatedRelationship = await updateRelationship(id, req.body);
    if (updatedRelationship) {
        res.json({
            success: true,
            payload: updatedRelationship
        });
    } else {
        res.status(500).json();
    }
}

const deleteRelationship = async (req, res) => {
    const id = req.params.id;
    const deletedRelationship = await deleteRelationship(id);
    if (deletedRelationship) {
        res.json({
            success: true,
            payload: deletedRelationship
        });
    } else {
        res.status(500).json();
    }
}

module.exports = relationshipsController;

