// import React from 'react'
import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import authAdmin from '../middlewares/adminAuth.js'
import{ createTask,specificTask, getTasks, updateTask, deleteTask } from '../controllers/takscontroller.js'


const router = express.Router()
// Create a new task
router.post("/create", authAdmin, createTask);

// Get all tasks for a user
router.get("/gettask", authMiddleware,specificTask );

// Get a specific task by ID
router.get("/:id", authMiddleware,getTasks );

// Update a task by ID
router.put("/:id", authAdmin,updateTask );

// Delete a task by ID
router.delete("/delete", authMiddleware ,deleteTask );


export default router;
