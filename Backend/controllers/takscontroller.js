// import express from 'express';
import Task from '../models/Task.js';


const createTask = async (req, res) => {
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
   console.log(newTask);
    const task = new Task(newTask);

    await task.save();
    res.status(201).json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
} 

// Get All Tasks
 const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  }
  catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
}


const specificTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch task" });
  }
};

// Update Task Status
 const updateTask =async (req, res) => {
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
}

// Delete Task
const deleteTask = async (req, res) => {
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
}

export { createTask,specificTask, getTasks, updateTask, deleteTask };