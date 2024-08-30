import React from 'react';
import './Sidebar.css';
import logo from '../assets/Dapp.svg';
function Sidebar({ activeItem, onItemSelect }) {
  return (
    <div className="unique-sidebar">
      <ul className="unique-sidebar-list">
        <img src={logo} alt='logo'className='unique-sidebar-logo'/>
        <li
          className={`unique-sidebar-item ${activeItem === 'Dashboard' ? 'active' : ''}`}
          onClick={() => onItemSelect('Dashboard')}
        >
          Dashboard
        </li>
        <li
          className={`unique-sidebar-item ${activeItem === 'About' ? 'active' : ''}`}
          onClick={() => onItemSelect('About')}
        >
          About
        </li>
        <li
          className={`unique-sidebar-item ${activeItem === 'Admin' ? 'active' : ''}`}
          onClick={() => onItemSelect('Admin')}
        >
          Admin Login
        </li>
        <li
          className={`unique-sidebar-item ${activeItem === 'Employee' ? 'active' : ''}`}
          onClick={() => onItemSelect('Employee')}
        >
          Vendor Login (Employee)
        </li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
