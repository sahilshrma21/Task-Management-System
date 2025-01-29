import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Style/TaskDescription.css';

const TaskDescription = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const task = location.state.task;

  const [status, setStatus] = useState(task.status);

  return (
    <div className="task-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h2>{task.name}</h2>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Start Date:</strong> {task.startDate}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <p><strong>Priority:</strong> <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span></p>
      <p><strong>Assigned By:</strong> {task.assignedBy}</p>
      <p><strong>Comments:</strong> {task.comments}</p>
      <p><strong>Status:</strong> 
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </p>
    </div>
  );
};

export default TaskDescription;
