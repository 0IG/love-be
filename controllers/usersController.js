const express = require("express");
const usersController = express();

const { getAllUsers, getOneUser, getOneByFirebaseId, createUser, updateUser, deleteUser } = require("../queries/users");

usersController.get("/", async (req, res) => {
    const users = await getAllUsers();
    console.log(users);

    if (users) {
        res.json({
            success: true,
            payload: users,
        });
    } else {
        res.status(500).json();
    }
})

usersController.get("/:id", async (req, res) => {
    const id = req.params.id;
    const singleItem = await getOneUser(id);
    if (singleItem) {
        res.json({
            success: true,
            payload: singleItem,
        });
    } else {
        res.status(500).json();
    }
});

usersController.get("/firebase/:id", async (req, res) => {
    const id = req.params.id;
    const singleFirebaseUser = await getOneByFirebaseId(id);
    if (singleFirebaseUser) {
        res.json({
            success: true,
            payload: singleFirebaseUser,
        });
    } else {
        res.status(500).json();
    }
});



usersController.post("/", async (req, res) => {
    const newUser = req.body;
    const createdUser = await createUser(newUser);
    if (createdUser) {
        res.json({
            success: true,
            payload: createdUser,
        });
    } else {
        res.status(500).json();
    }
});

usersController.put("/:id", async (req, res) => {
    const id = req.params.id;
    const updatedUser = await updateUser(id, req.body);
    if (updatedUser) {
        res.json({
            success: true,
            payload: updatedUser,
        });
    } else {
        res.status(500).json();
    }
});

usersController.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedUser = await deleteUser(id);
    if (deletedUser) {
        res.json({
            success: true,
            payload: deletedUser,
        });
    } else {
        res.status(500).json();
    }
});


module.exports = usersController;
