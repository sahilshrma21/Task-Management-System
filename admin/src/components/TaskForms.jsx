import React, { useState } from "react";
import axios from "axios";
import  backendUrl  from "../App.jsx";

const TaskForm = ({token}) => {
  const [task, setTask] = useState({ title: "", description: "", assignedTo: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post( "http://localhost:4000/api/tasks/taskfrom", task, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log("Task Assigned!");
      alert("Task Assigned!");
    } catch (error) {
      console.error(error);
    }
  };

 
  return (
    <form className="p-5 border rounded-lg shadow-md bg-white w-[400px] mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Assign a New Task</h2>

      <input
        className="p-2 border w-full rounded-md mb-2"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />

      <textarea
        className="p-2 border w-full rounded-md mb-2"
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />

      <input
        className="p-2 border w-full rounded-md mb-2"
        placeholder="Employee ID"
        value={task.assignedTo}
        onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
        required
      />

      <input
        type="date"
        className="p-2 border w-full rounded-md mb-2"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        required
      />

      <select
        className="p-2 border w-full rounded-md mb-2"
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
        required
      >
        <option value="Emergency">🚨 Emergency</option>
        <option value="Moderate">⚠️ Moderate</option>
        <option value="Easy">✅ Easy</option>
      </select>

      <button
        className="mt-3 p-2 bg-blue-500 text-white w-full rounded-lg shadow-lg hover:bg-blue-400"
        type="submit"
      >
        Assign Task
      </button>
    </form>
  );
};

export default TaskForm;
