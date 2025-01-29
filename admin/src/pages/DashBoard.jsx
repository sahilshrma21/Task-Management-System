import React from "react";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  return (
    <div className="flex">
     
      <div className="w-full p-5">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
