import React, { useState } from "react";
import "../Style/AdminDashboard.css";

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Complete Project Report",
      assignedTo: "John Doe",
      dueDate: "2025-02-10",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Update Website",
      assignedTo: "Jane Smith",
      dueDate: "2025-01-30",
      status: "Pending",
    },
    {
      id: 3,
      name: "Prepare Presentation",
      assignedTo: "Michael Brown",
      dueDate: "2025-01-25",
      status: "Completed",
    },
  ]);

  const handleEdit = (id) => {
    alert(`Edit Task ID: ${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Dashboard</h2>
      <div className="task-container">
        <div className="task-list">
          <div className="task-header">
            <span>Task Name</span>
            <span>Assigned To</span>
            <span>Due Date</span>
            <span>Status</span>
            <span>Actions</span>
          </div>
          {tasks.map((task) => (
            <div key={task.id} className="task-row">
              <span>{task.name}</span>
              <span>{task.assignedTo}</span>
              <span>{task.dueDate}</span>
              <span className={`status ${task.status.toLowerCase().replace(' ', '-')}`}>{task.status}</span>
              <div className="task-actions">
                <button className="edit-btn" onClick={() => handleEdit(task.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;