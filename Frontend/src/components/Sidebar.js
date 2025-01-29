import React from "react";
import { NavLink } from "react-router-dom";
import assets from "../assets/more.png"; // Replace with your actual image path
import "../Style/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-menu">
        <NavLink
          className="menu-item"
          to="/add"
        >
          <img className="menu-icon" src={assets} alt="Add" />
          <p className="menu-text">ADD Task</p>
        </NavLink>

        <NavLink
          className="menu-item"
          to="/list"
        >
          <img className="menu-icon" src={assets} alt="List" />
          <p className="menu-text">LIST Task</p>
        </NavLink>

        <NavLink
          className="menu-item"
          to="/orders"
        >
          <img className="menu-icon" src={assets} alt="Orders" />
          <p className="menu-text">ORDER</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
