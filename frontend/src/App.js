import React, { useState } from 'react';
import Sidebar from './components/SideBar/SideBar';
import MainContent from './components/MainContent/MainContent';
import './App.css';

function App() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemSelect = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="unique-app-container">
      <Sidebar activeItem={activeItem} onItemSelect={handleItemSelect} />
      <MainContent activeItem={activeItem} />
    </div>
  );
}

export default App;
