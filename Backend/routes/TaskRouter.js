
import express from 'express'
// import authMiddleware from '../middlewares/authMiddleware.js'
// import authAdmin from '../middlewares/adminAuth.js'
import{ addTask,singleTask, listTasks, updateTask, deleteTask } from '../controllers/takscontroller.js'
import upload from '../middlewares/multer.js';

const router = express.Router()
// Create a new task
router.post("/add",addTask);

// Get all tasks for a user
router.get("/list",listTasks );

// Get a specific task by ID
router.get("/single",singleTask );

// Update a task by ID
router.put("/update",updateTask );

// Delete a task by ID
router.delete("/delete",deleteTask );


export default router;
