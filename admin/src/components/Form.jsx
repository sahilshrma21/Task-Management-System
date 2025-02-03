import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";

const Form = () => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "", status: "" ,user: localStorage.getItem("user")});
  // const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", task.title);
    formData.append("description", task.description);
    formData.append("dueDate", task.dueDate);
    formData.append("status", task.status);
    formData.append("user", task.user);

    console.log(formData);
    // if (file) {
    //   formData.append("name", file); // "name" must match the field name in multer
    // }

    try {
      await axios.post(backendUrl + "/api/tasks/add", formData, {
        headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Task Assigned with file!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="p-5" onSubmit={handleSubmit} encType="multipart/form-data">
      <h2 className="text-2xl font-semibold mb-1.5">Assign Task</h2>
      <input className="p-2 border w-full" placeholder="Title" onChange={(e) => setTask({ ...task, title: e.target.value })} />
      <input className="p-2 border w-full mt-2" placeholder="Description" onChange={(e) => setTask({ ...task, description: e.target.value })} />
      <input className="p-2 border w-full mt-2" placeholder="Employee ID" onChange={(e) => setTask({ ...task, assignedTo: e.target.value })} />
      <input className="p-2 border w-full mt-2" type="date" onChange={(e) => setTask({ ...task, dueDate: e.target.value })} />
      <select className="p-2 border w-full mt-2" onChange={(e) => setTask({ ...task, status: e.target.value })}>
        <option value="Yet to Start">Yet to Start</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      {/* <input className="p-2 border w-full mt-2" type="file" onChange={(e) => setFile(e.target.files[0])} /> */}
      <button className="mt-3 p-2 bg-blue-500 text-white rounded-2xl drop-shadow-2xl hover:bg-blue-400" type="submit">Assign Task</button>
    </form>
  );
};

export default Form;
