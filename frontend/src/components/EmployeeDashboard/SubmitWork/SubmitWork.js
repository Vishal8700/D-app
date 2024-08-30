import React, { useState } from 'react';
import './SubmitWork.css';

function SubmitWork({ onBack }) {
  const [formData, setFormData] = useState({
    workOrderId: '',
    auctionId: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Work submitted:', formData);
    // You can add logic to handle the work submission here
  };

  return (
    <div className="submit-work">
      <h2>Submit Work</h2>
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
          <label htmlFor="auctionId">Auction ID</label>
          <input
            type="text"
            id="auctionId"
            name="auctionId"
            value={formData.auctionId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
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

export default SubmitWork;