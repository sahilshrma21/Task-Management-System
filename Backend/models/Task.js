import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    category: {
      type: String,
      enum: ["Emergency", "Moderate", "Easy"],
      required: true,
    },
    dueDate: { type: Date },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    user: {
      type:String,
      ref: "User",
      required: true,
    },
    // file: { type: String }, // Path to uploaded file
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

const Task = mongoose.model.tasks ||  mongoose.model("Tasks", taskSchema);
export default Task;

