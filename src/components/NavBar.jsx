import React from "react";
import "../index.css";

function NavBar({ title, onLogout,onAddTaskClick,isFormOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{title}</h1>
      </div>

      <div className="navbar-actions">
        <button>className="{isFormOpen ?" 'btn-secondary' : 'btn-primary'} onClick={onAddTaskClick}>
          {isFormOpen ? 'close' : 'Add Task'}
        <button className="btn-secondary" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
