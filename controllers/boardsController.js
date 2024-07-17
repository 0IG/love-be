const express = require('express');
const boardsController = express();
const { getAllBoards, getOneBoard, createBoard, updateBoard, deleteBoard } = require('../queries/boards');

const getAllBoards = async (req, res) => {
    const boards = await getAllBoards();
    if (boards) {
        res.json({
            success: true,
            payload: boards
        });
    } else {
        res.status(500).json();
    }
}

const getOneBoard = async (req, res) => {
    const id = req.params.id;
    const board = await getOneBoard(id);
    if (board) {
        res.json({
            success: true,
            payload: board
        });
    } else {
        res.status(500).json();
    }
}

const createBoard = async (req, res) => {
    const newBoard = req.body;
    const createdBoard = await createBoard(newBoard);
    if (createdBoard) {
        res.json({
            success: true,
            payload: createdBoard
        });
    } else {
        res.status(500).json();
    }
}

const updateBoard = async (req, res) => {
    const id = req.params.id;
    const updatedBoard = await updateBoard(id, req.body);
    if (updatedBoard) {
        res.json({
            success: true,
            payload: updatedBoard
        });
    } else {
        res.status(500).json();
    }
}

const deleteBoard = async (req, res) => {
    const id = req.params.id;
    const deletedBoard = await deleteBoard(id);
    if (deletedBoard) {
        res.json({
            success: true,
            payload: deletedBoard
        });
    } else {
        res.status(500).json();
    }
}

module.exports = boardsController;