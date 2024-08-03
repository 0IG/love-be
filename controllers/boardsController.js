const express = require("express");
const boardsController = express();
const { getAllBoards, getOneBoard, createBoard, updateBoard, deleteBoard } = require("../queries/boards");

boardsController.get("/", async (req, res) => {
    const boards = await getAllBoards();
    console.log(boards);

    if (boards) {
        res.json({
            success: true,
            payload: boards,
        });
    } else {
        res.status(500).json();
    }
})

boardsController.get("/:id", async (req, res) => {
    const id = req.params.id;
    const singleItem = await getOneBoard(id);
    if (singleItem) {
        res.json({
            success: true,
            payload: singleItem,
        });
    } else {
        res.status(500).json();
    }
});

boardsController.post("/", async (req, res) => {
    const newBoard = req.body;
    const createdBoard = await createBoard(newBoard);
    if (createdBoard) {
        res.json({
            success: true,
            payload: createdBoard,
        });
    } else {
        res.status(500).json();
    }
});

boardsController.put("/:id", async (req, res) => {
    const id = req.params.id;
    const updatedBoard = await updateBoard(id, req.body);
    if (updatedBoard) {
        res.json({
            success: true,
            payload: updatedBoard,
        });
    } else {
        res.status(500).json();
    }
});

boardsController.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedBoard = await deleteBoard(id);
    if (deletedBoard) {
        res.json({
            success: true,
            payload: deletedBoard,
        });
    } else {
        res.status(500).json();
    }

});

module.exports = boardsController;
