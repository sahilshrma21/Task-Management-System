// import React from 'react'
import express from 'express'
<<<<<<< HEAD
import authMiddleware from '../middlewares/authMiddleware.js'
import authAdmin from '../middlewares/adminAuth.js'
import{ createTask,specificTask, getTasks, updateTask, deleteTask } from '../controllers/takscontroller.js'
=======

import Task from '../models/Task.js'
import authMiddleware from '../middlewares/authMiddleware.js'
>>>>>>> 11d2534 (with login page)


const router = express.Router()
// Create a new task
<<<<<<< HEAD
router.post("/create", authAdmin, createTask);

// Get all tasks for a user
router.get("/gettask", authMiddleware,specificTask );

// Get a specific task by ID
router.get("/:id", authMiddleware,getTasks );

// Update a task by ID
router.put("/:id", authAdmin,updateTask );

// Delete a task by ID
router.delete("/delete", authMiddleware ,deleteTask );
=======
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description, status, category, dueDate } = req.body;

    const newTask = new Task({
      title,
      description,
      status,
      category,
      dueDate,
      user: req.user.id, // Assuming tasks are associated with logged-in users
    });

    await newTask.save();
    res.status(201).json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

// Get all tasks for a user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// Get a specific task by ID
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch task" });
  }
});

// Update a task by ID
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { title, description, status, category, dueDate } = req.body;

    let task = await Task.findById(req.params.id);

    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ error: "Task not found" });
    }

    task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, status, category, dueDate },
      { new: true }
    );

    res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

// Delete a task by ID
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ error: "Task not found" });
    }

    await task.remove();
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});
>>>>>>> 11d2534 (with login page)


export default router;
