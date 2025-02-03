import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Style/TaskList.module.css"; // Updated import

const TaskList = () => {
  const navigate = useNavigate();

  const [tasks] = useState([
    {
      id: 1,
      name: "Complete Project Report",
      description: "Write and submit the final project report",
      status: "In Progress",
      priority: "High",
      startDate: "2025-01-10",
      dueDate: "2025-02-10",
      assignedBy: "Manager A",
      comments: "Ensure to include all financial details.",
    },
    {
      id: 2,
      name: "Update Website",
      description: "Make changes to the homepage.",
      status: "Pending",
      priority: "Medium",
      startDate: "2025-01-15",
      dueDate: "2025-01-30",
      assignedBy: "Manager B",
      comments: "Focus on improving UI/UX design.",
    },
    {
      id: 3,
      name: "Prepare Presentation",
      description: "Prepare the slides for the client meeting.",
      status: "Completed",
      priority: "Low",
      startDate: "2025-01-20",
      dueDate: "2025-01-25",
      assignedBy: "Manager C",
      comments: "Make sure to add key points summary.",
    },
  ]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <h2>Assigned Tasks</h2>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={styles.taskCard}
            onClick={() => navigate(`/task/${task.id}`, { state: { task } })}
          >
            <div className={styles.heading}>
              <h3>{task.name}</h3>
            </div>
            <p className={styles.taskDetail}>{task.description}</p>
            <p className={styles.taskDetail}>
              <strong>Start Date:</strong> {task.startDate}
            </p>
            <p className={styles.taskDetail}>
              <strong>Due Date:</strong> {task.dueDate}
            </p>
            <p className={styles.taskDetail}>
              <strong>Status:</strong> {task.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;