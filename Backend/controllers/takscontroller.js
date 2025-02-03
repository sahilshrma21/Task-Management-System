// import express from 'express';
import Task from '../models/Task.js';
import mongoose from 'mongoose';


const addTask = async (req, res) => {
  try {
    const { title , description, status ,category, dueDate , priority ,user} = req.body;
   
    console.log(req.body);
    

    // Validate required fields
    if (!title || !description || !category || !user) {
      return res.status(400).json({ success: false, message: "All required fields must be filled." });
    }

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).json({ success: false, message: "Invalid User ID." });
    }

    // File handling (if a file is uploaded)
    const filePath = req.file ? req.file.path : null;

    // Create a new task
    const newTask = new Task({
      title,
      description,
      status: status || "Pending",
      category,
      dueDate,
      priority: priority || "Medium",
      user,
      file: filePath,
    });

    // Save the task to the database
    const savedTask = await newTask.save();

    res.status(201).json({ success: true, message: "Task created successfully", task: savedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error creating task", error: error.message });
  }
} 

// Get All Tasks
 const listTasks = async (req, res) => {
  console.log(listTasks);
  try {
    const tasks = await Task.find({ });
    console.log(tasks);
    res.json({success:true , tasks});
  }
  catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
}


const singleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.body._id);

    // if (!task || task.user.toString() !== req.user.id) {
    //   return res.status(404).json({ error: "Task not found" });
    // }

    res.status(200).json({success:true , task});
  } catch (error) {
    res.status(500).json({success:false, error: "Failed to fetch task" });
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
    
    const task = await Task.findByIdAndDelete(req.body._id);
    console.log(task);

    // if (!task || task.user.toString() !== req.user._id) {
    //   return res.status(404).json({ error: "Task not found" });
    // }

    // await task.remove();
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete task" });
  }
}

export { addTask,singleTask, listTasks, updateTask, deleteTask };