import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {backendUrl} from "../App.jsx";

const TaskList = ({ token }) => {
  const [list, setList] = useState([]);
  const [username, setUsername] = useState([]);




  useEffect(() => {
    axios.get(backendUrl + "/api/user/userdetails")
    .then(response => console.log(response.data.username, response.data._id,response.data))
      .then(response => setUsername(response.data.username,response.data._id))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const fetchlist = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/tasks/list', {
        headers: { token: localStorage.getItem('token') }
      });
      console.log(response.data);

      if (response.data.success) {
        setList(response.data.tasks);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteTask = async (_id) => {
    try {
      const response = await axios.delete(
        'http://localhost:3001/api/tasks/delete',
        { 
          data: { _id }, // Send _id in request body
          headers: { token: localStorage.getItem('token') } 
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchlist();
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Task List</h2>
      <table className="w-full border-collapse border border-gray-300 mt-3">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Assigned To</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Due Date</th>
            <th className="border p-2">Priority</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((task) => (
              <tr key={task._id} className="text-center">
                <td className="border p-2">{task.title}</td>
                <td className="border p-2">{task.description}</td>
                {/* Fixed: Display user's name */}
                <td className="border p-2">
                  {username.users ?.username || "Unknown User"}
                </td>
                <td className="border p-2">{task.status}</td>
                <td className="border p-2">{task.category}</td>
                <td className="border p-2">
                  {new Date(task.dueDate).toLocaleDateString()}
                </td>
                <td className="border p-2">{task.priority}</td>
                <td className="border p-2">
                  <button
                    className="text-red-500 font-bold"
                    onClick={() => deleteTask(task._id)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center p-4">
                No tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;