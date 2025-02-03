import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    category: "Emergency",
    dueDate: "",
    priority: "Medium",
    user: ""
  });

  const [username, setUsername] = useState([]);

  useEffect(() => {
    axios.get(backendUrl + "/api/user/userslist")
    .then(response => console.log(response.data.username, response.data._id,response.data))
      .then(response => setUsername(response.data.username,response.data._id))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(backendUrl + "/api/tasks/add", task, {
        headers: { 
          "Content-Type": "application/json",
          token: localStorage.getItem('token') 
        }
      });
      alert("Task Created Successfully!");
      setTask({
        title: "",
        description: "",
        status: "Pending",
        category: "Emergency",
        dueDate: "",
        priority: "Medium",
        user: ""
      });
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
      <input className="p-2 border w-full" name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
      <textarea className="p-2 border w-full mt-2" name="description" placeholder="Description" value={task.description} onChange={handleChange} required></textarea>
      <select className="p-2 border w-full mt-2" name="status" value={task.status} onChange={handleChange}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <select className="p-2 border w-full mt-2" name="category" value={task.category} onChange={handleChange}>
        <option>Emergency</option>
        <option>Moderate</option>
        <option>Easy</option>
      </select>
      <input className="p-2 border w-full mt-2" type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <select className="p-2 border w-full mt-2" name="priority" value={task.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select className="p-2 border w-full mt-2" name="user" value={task.user} onChange={handleChange} required>
        <option value="">Select User</option>
        {username.map(user => (
          <option key={user._id} value={user._id}>{user.username}</option>
        ))}
      </select>
      <button className="mt-3 p-2 bg-blue-500 text-white rounded-lg" type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;