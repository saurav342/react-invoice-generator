import React, { useState } from 'react';
import './InputForm.css';

const InputForm = ({ onSubmit }) => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const licensePlates = [
    'KA51AK9049',
    'KA51AK9050',
    'KA51AK9051',
    'KA51AK9052',
    'KA51AK9053'
  ];

  const drivers = ["Chandan Kumar", "Jabed Lashkar",  "Muni Raju"];

  const initialTotal = 599;
  const initialBase = (initialTotal / 1.05).toFixed(2);
  const initialGst = (initialTotal - initialBase).toFixed(2);

  const [formData, setFormData] = useState({
    date: today,
    customerName: 'Gautam Kumar',
    total: initialTotal,
    tripCharge: initialBase,
    gst: initialGst,
    paymentMethod: {
      name: 'UPI',
      time: ''
    },
    driverName: drivers[0],
    licensePlate: licensePlates[0],
    rideInfo: {
      type: '',
      distance: '55',
      duration: '120',
      tripDate: today,
      tripTime: ''
    },
    pickup: {
      address: 'Terminal 1, Bengaluru Airport'
    },
    dropoff: {
      address: 'Terminal 1, Bengaluru Airport'
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'total') {
      // Calculate GST (5%) and Trip Charge (95%) when total amount changes
      const totalAmount = parseFloat(value) || 0;
      const gst = (totalAmount * 0.05).toFixed(2);
      const tripCharge = (totalAmount * 0.95).toFixed(2);
      
      setFormData(prev => ({
        ...prev,
        total: value,
        gst: gst,
        tripCharge: tripCharge
      }));
    } else if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else if (name === 'driverName') {
      setFormData(prev => ({
        ...prev,
        driverName: value
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <h2>Malama GST Receipt Generator</h2>
      
      <div className="form-section">
        <h3>Invoice Details</h3>
        
        <div className="form-group-container">
          {/* Basic Details */}
          <div className="form-group required">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group required">
            <label>Customer Name:</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Payment Details */}
          <div className="form-group required">
            <label>Total Amount (₹):</label>
            <input
              type="number"
              step="0.01"
              name="total"
              value={formData.total}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group required">
            <label>Trip Charge (₹):</label>
            <input
              type="number"
              step="0.01"
              name="tripCharge"
              value={formData.tripCharge}
              onChange={handleChange}
              required
              readOnly
            />
          </div>
          <div className="form-group required">
            <label>GST (₹):</label>
            <input
              type="number"
              step="0.01"
              name="gst"
              value={formData.gst}
              onChange={handleChange}
              required
              readOnly
            />
          </div>

          {/* Payment Method */}
          <div className="form-group required">
            <label>Payment Type:</label>
            <input
              type="text"
              name="paymentMethod.name"
              value={formData.paymentMethod.name}
              onChange={handleChange}
              required
              readOnly
            />
          </div>
          <div className="form-group required">
            <label>Payment Time:</label>
            <input
              type="time"
              name="paymentMethod.time"
              value={formData.paymentMethod.time}
              onChange={handleChange}
              required
            />
          </div>

          {/* Driver Details */}
          <div className="form-group">
            <label htmlFor="driverName">Driver</label>
            <select
              id="driverName"
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
              required
            >
              {drivers.map(driver => (
                <option key={driver} value={driver}>
                  {driver}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group required">
            <label>License Plate:</label>
            <select
              name="licensePlate"
              value={formData.licensePlate}
              onChange={handleChange}
              required
              className="form-select"
            >
              {licensePlates.map(plate => (
                <option key={plate} value={plate}>
                  {plate}
                </option>
              ))}
            </select>
          </div>

          {/* Ride Information */}
        
          <div className="form-group required">
            <label>Distance (km):</label>
            <input
              type="number"
              step="0.01"
              name="rideInfo.distance"
              value={formData.rideInfo.distance}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group required">
            <label>Duration (min):</label>
            <input
              type="number"
              name="rideInfo.duration"
              value={formData.rideInfo.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group required">
            <label>Trip Date:</label>
            <input
              type="date"
              name="rideInfo.tripDate"
              value={formData.rideInfo.tripDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group required">
            <label>Trip Time:</label>
            <input
              type="time"
              name="rideInfo.tripTime"
              value={formData.rideInfo.tripTime}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location Details - Full Width */}
          <div className="form-group required full-width">
            <label>Pickup Address:</label>
            <textarea
              name="pickup.address"
              value={formData.pickup.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group required full-width">
            <label>Drop-off Address:</label>
            <textarea
              name="dropoff.address"
              value={formData.dropoff.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <button type="submit" className="submit-btn">Generate Invoice</button>
    </form>
  );
};

export default InputForm;
