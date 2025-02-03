import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../Style/TaskDescription.module.css"; // Updated import

const TaskDescription = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const originalTask = location.state.task;

  // Create a local copy of the task data
  const [task, setTask] = useState({ ...originalTask });
  const [status, setStatus] = useState(task.status);

  // Update the local task status when the status changes
  useEffect(() => {
    setTask((prevTask) => ({ ...prevTask, status }));
  }, [status]);

  return (
    <div className={styles.taskDetailContainer}>
      <div className={styles.navbar}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          ←
        </button>
        <h2 className={styles.taskName}>Task Description</h2>
      </div>
      <div className={styles.taskDetails}>
        <div className={styles.content}>
          <h3 className={styles.taskTitle}>
            <strong>Task Name:</strong> {task.name}
          </h3>
          <p className={styles.details}>
            <strong>Description:</strong> {task.description}
          </p>
          <p className={styles.details}>
            <strong>Start Date:</strong> {task.startDate}
          </p>
          <p className={styles.details}>
            <strong>Due Date:</strong> {task.dueDate}
          </p>
          <p className={styles.details}>
            <strong>Priority:</strong>{" "}
            <span className={`${styles.priority} ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </p>
          <p className={styles.details}>
            <strong>Assigned By:</strong> {task.assignedBy}
          </p>
          <p className={styles.details}>
            <strong>Comments:</strong> {task.comments}
          </p>
          <p className={styles.details}>
            <strong>Status:</strong>
            <select
              className={styles.statusSelect}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskDescription;