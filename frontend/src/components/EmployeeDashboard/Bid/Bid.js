import React, { useState } from 'react';
import './Bid.css';

function Bid({ onBack }) {
  const [formData, setFormData] = useState({
    amount: '',
    time: '',
    auctionId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Bid details submitted:', formData);
    // You can add logic to handle the bid submission here
  };

  return (
    <div className="bid">
      <h2>Place a Bid</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="datetime-local"
            id="time"
            name="time"
            value={formData.time}
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
        <div className="button-group">
          <button type="button" className="back-button" onClick={onBack}>Back</button>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Bid;