import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/TaskList.css';

const TaskList = () => {
  const navigate = useNavigate();

  const [tasks] = useState([
    {
      id: 1,
      name: 'Complete Project Report',
      description: 'Write and submit the final project report.',
      status: 'In Progress',
      priority: 'High',
      startDate: '2025-01-10',
      dueDate: '2025-02-10',
      assignedBy: 'Manager A',
      comments: 'Ensure to include all financial details.',
    },
    {
      id: 2,
      name: 'Update Website',
      description: 'Make changes to the homepage.',
      status: 'Pending',
      priority: 'Medium',
      startDate: '2025-01-15',
      dueDate: '2025-01-30',
      assignedBy: 'Manager B',
      comments: 'Focus on improving UI/UX design.',
    },
    {
      id: 3,
      name: 'Prepare Presentation',
      description: 'Prepare the slides for the client meeting.',
      status: 'Completed',
      priority: 'Low',
      startDate: '2025-01-20',
      dueDate: '2025-01-25',
      assignedBy: 'Manager C',
      comments: 'Make sure to add key points summary.',
    },
  ]);

  return (
    <div className="home-container">
      <h2>Assigned Tasks</h2>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className="task-card" onClick={() => navigate(`/task/${task.id}`, { state: { task } })}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p><strong>Start Date:</strong> {task.startDate}</p>
            <p><strong>Due Date:</strong> {task.dueDate}</p>
            <p><strong>Status:</strong> {task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
