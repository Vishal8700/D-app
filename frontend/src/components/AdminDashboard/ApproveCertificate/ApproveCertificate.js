import React, { useState } from 'react';
import './ApproveCertificate.css';

function ApproveCertificate({ onBack }) {
  const [formData, setFormData] = useState({
    recipient: '',
    issuer: '',
    issuedByDepartment: '',
    details: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Certificate approved:', formData);
  };

  return (
    <div className="approve-certificate">
      <h2>Approve Certificate</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="recipient">Recipient</label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="issuer">Issuer</label>
          <input
            type="text"
            id="issuer"
            name="issuer"
            value={formData.issuer}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="issuedByDepartment">Issued By Department</label>
          <input
            type="text"
            id="issuedByDepartment"
            name="issuedByDepartment"
            value={formData.issuedByDepartment}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="button" className="back-button" onClick={onBack}>Back</button>
          <button type="submit" className="submit-button">Approve</button>
        </div>
      </form>
    </div>
  );
}

export default ApproveCertificate;