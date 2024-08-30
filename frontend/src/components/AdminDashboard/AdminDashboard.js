import React, { useState } from 'react';
import './AdminDashboard.css';
import UploadWorkorder from './UploadWorkOrder/UploadWorkorder';
import ApproveCertificate from './ApproveCertificate/ApproveCertificate';
import Auction from './Auction/Auction';

function AdminDashboard() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    setSelectedOption(null); // Reset the selected option to go back to the dashboard
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Upload Workorder':
        return <UploadWorkorder onBack={handleBack} />;
      case 'Approve Certificate':
        return <ApproveCertificate onBack={handleBack} />;
      case 'Auction':
        return <Auction onBack={handleBack} />;
      default:
        return (
          <div className="admin-dashboard">
            <div className="admin-header">
              <h1>Admin Dashboard</h1>
            </div>
            <div className="dashboard-boxes">
              <div className="dashboard-box" onClick={() => handleOptionClick('Upload Workorder')}>
                <h3>Upload Workorder</h3>
              </div>
              <div className="dashboard-box" onClick={() => handleOptionClick('Auction')}>
                <h3>Auction</h3>
              </div>
              <div className="dashboard-box" onClick={() => handleOptionClick('Approve Certificate')}>
                <h3>Approve Certificate</h3>
              </div>
              <div className="dashboard-box" onClick={() => handleOptionClick('View Blockchain')}>
                <h3>View Blockchain</h3>
              </div>
            </div>
          </div>
        );
    }
  };

  return <div className="admin-dashboard">{renderContent()}</div>;
}

export default AdminDashboard;