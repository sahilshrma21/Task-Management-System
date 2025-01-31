import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
  category: { type: String },
  dueDate: { type: Date },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to the User
}, { timestamps: true });

const Task = mongoose.model.Task || mongoose.model("Task", taskSchema);
export default Task;
