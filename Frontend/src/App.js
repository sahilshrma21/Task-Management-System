import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskDescription from './pages/TaskDescription';
import TaskList from './pages/TaskList';

const App = () => {
  return (
    <div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDescription />} />
        </Routes>
      </div>
    </div>
  );
};

export default App
