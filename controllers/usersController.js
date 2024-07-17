const express = require('express');
const usersController = express();
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../queries/users');


const getAllUsers = async (req, res) => {
    const users = await getAllUsers();
    if (users) {
        res.json({
            success: true,
            payload: users
        });
    } else {
        res.status(500).json();
    }
}

const getOneUser = async (req, res) => {
    const id = req.params.id;
    const user = await getOneUser(id);
    if (user) {
        res.json({
            success: true,
            payload: user
        });
    } else {
        res.status(500).json();
    }
}

const createUser = async (req, res) => {
    const newUser = req.body;
    const createdUser = await createUser(newUser);
    if (createdUser) {
        res.json({
            success: true,
            payload: createdUser
        });
    } else {
        res.status(500).json();
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const updatedUser = await updateUser(id, req.body);
    if (updatedUser) {
        res.json({
            success: true,
            payload: updatedUser
        });
    } else {
        res.status(500).json();
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const deletedUser = await deleteUser(id);
    if (deletedUser) {
        res.json({
            success: true,
            payload: deletedUser
        });
    } else {
        res.status(500).json();
    }
}

module.exports = usersController;