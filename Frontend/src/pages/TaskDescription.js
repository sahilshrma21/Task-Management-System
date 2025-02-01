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
      <div className="navbar">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h2 className="task-name">Task Description</h2>
      </div>
      <div className="task-details">
        <div className='content'>
        <h3 className="task-title"><strong>Task Name:</strong>{task.name}</h3>
        <p className='details'><strong>Description:</strong> {task.description}</p>
        <p className='details'><strong>Start Date:</strong> {task.startDate}</p>
        <p className='details'><strong>Due Date:</strong> {task.dueDate}</p>
        <p className='details'><strong>Priority:</strong> <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span></p>
        <p className='details'><strong>Assigned By:</strong> {task.assignedBy}</p>
        <p className='details'><strong>Comments:</strong> {task.comments}</p>
        <p className='details'><strong>Status:</strong>
          <select className="status-select" value={status} onChange={(e) => setStatus(e.target.value)}>
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
