import React, { useState } from 'react';
import '../Style/Home.css';

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Complete Project Report',
      description: 'Write and submit the final project report.',
      status: 'In Progress',
      startDate: '2025-01-10',
      dueDate: '2025-02-10',
    },
    {
      id: 2,
      name: 'Update Website',
      description: 'Make changes to the homepage.',
      status: 'Pending',
      startDate: '2025-01-15',
      dueDate: '2025-01-30',
    },
    {
      id: 3,
      name: 'Prepare Presentation',
      description: 'Prepare the slides for the client meeting.',
      status: 'Completed',
      startDate: '2025-01-20',
      dueDate: '2025-01-25',
    },
  ]);

  const [userDetails] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com',
    role: 'User',
  });

  const handleStatusChange = (id, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="home-container">
      <div className="user-details">
        <h2>Welcome, {userDetails.username}</h2>
        <p>Email: {userDetails.email}</p>
        <p>Role: {userDetails.role}</p>
      </div>

      <div className="task-list">
        <h2>Assigned Tasks</h2>
        <div className="tasks">
          {tasks.map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p><strong>Status:</strong> 
                <select 
                  value={task.status} 
                  onChange={(e) => handleStatusChange(task.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </p>
              <p><strong>Start Date:</strong> {task.startDate}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
