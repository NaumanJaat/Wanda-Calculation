import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelectCategory, onCreateFormula, isActive }) => {
  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <h2 className="sidebar-title">WANDA CALCULATOR</h2>
      <button onClick={() => onSelectCategory('Dry Animals')} className="sidebar-button">Dry Animals</button>
      <button onClick={() => onSelectCategory('Milking Animals')} className="sidebar-button">Milking Animals</button>
      <button onClick={() => onSelectCategory('Heifer')} className="sidebar-button">Heifer</button>
      <button onClick={onCreateFormula} className="sidebar-button">Create Formula</button>
    </div>
  );
};

export default Sidebar;
