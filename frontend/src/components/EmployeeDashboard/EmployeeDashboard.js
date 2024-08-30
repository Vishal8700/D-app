import React, { useState } from 'react';
import './EmployeeDashboard.css';
import Bid from './Bid/Bid';
import SubmitWork from './SubmitWork/SubmitWork';

function EmployeeDashboard() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    setSelectedOption(null); // Reset the selected option to go back to the dashboard
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Bid':
        return <Bid onBack={handleBack} />;
      case 'Submit Work':
        return <SubmitWork onBack={handleBack} />;
      default:
        return (
          <div className="employee-dashboard">
            <div className="employee-header">
              <h1>Vendor Dashboard (Employee)</h1>
            </div>
            <div className="dashboard-boxes">
              <div className="dashboard-box" onClick={() => handleOptionClick('Bid')}>
                <h3>Bid on Auction</h3>
              </div>
              <div className="dashboard-box" onClick={() => handleOptionClick('Submit Work')}>
                <h3>Submit Work</h3>
              </div>
            </div>
          </div>
        );
    }
  };

  return <div className="employee-dashboard">{renderContent()}</div>;
}

export default EmployeeDashboard;