import React, { useState } from 'react';
import './Auction.css';

function Auction({ onBack }) {
  const [formData, setFormData] = useState({
    workOrderId: '',
    startTime: '',
    endTime: '',
    bidAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Auction details submitted:', formData);
    // You can add logic to handle the auction submission here
  };

  return (
    <div className="auction">
      <h2>Auction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="workOrderId">Work Order ID</label>
          <input
            type="text"
            id="workOrderId"
            name="workOrderId"
            value={formData.workOrderId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startTime">Start Time and Date</label>
          <input
            type="datetime-local"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endTime">End Time and Date</label>
          <input
            type="datetime-local"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bidAmount">Bid Amount</label>
          <input
            type="number"
            id="bidAmount"
            name="bidAmount"
            value={formData.bidAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="button" className="back-button" onClick={onBack}>Back</button>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Auction;