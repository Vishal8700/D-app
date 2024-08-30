import React, { useState } from 'react';
import './UploadWorkorder.css';

function UploadWorkorder({ onBack }) { // Accept onBack prop
  const [formData, setFormData] = useState({
    issuedBy: '',
    department: '',
    orderToDepartment: '',
    implementationDate: '',
    workOrder: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="upload-workorder">
      <h2>Upload Work Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="issuedBy">Issued By</label>
          <input
            type="text"
            id="issuedBy"
            name="issuedBy"
            value={formData.issuedBy}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="orderToDepartment">Order to Department</label>
          <input
            type="text"
            id="orderToDepartment"
            name="orderToDepartment"
            value={formData.orderToDepartment}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="implementationDate">Implementation Date</label>
          <input
            type="date"
            id="implementationDate"
            name="implementationDate"
            value={formData.implementationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="workOrder">Work Order</label>
          <textarea
            id="workOrder"
            name="workOrder"
            value={formData.workOrder}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="button" className="back-button" onClick={onBack}>Back</button> {/* Call onBack */}
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UploadWorkorder;