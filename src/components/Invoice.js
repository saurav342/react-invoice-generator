import React from 'react';
import './Invoice.css';
import RideDetails from './RideDetails';

import logo from '../assets/mainlogo.png';

const Invoice = ({ data }) => {
  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <div className="header-left">
          <h1>Malama Cabs</h1>
          <p className="bill-number">Bill No: {data.billNumber}</p>
        </div>
        <img src={logo} alt="Malama Cabs Logo" />
        <p className="date">{data.date}</p>
      </div>
      
      <div className="invoice-title">
        <h2>Here is your receipt for the ride,  {data.customerName}. Thank you for choosing our service!</h2>
      </div>

      <div className="calculation-table">
        <table>
          <tbody>
            <tr>
              <td>Trip Charge</td>
              <td className="amount">₹{data.tripCharge}</td>
            </tr>
            <tr>
              <td>GST (5%)</td>
              <td className="amount">₹{data.gst}</td>
            </tr>
            <tr className="total-row">
              <td>Total</td>
              <td className="amount">₹{data.total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="payment-section">
        <h3>Payments</h3>
        <div className="payment-method">
          {/* <img src={data.paymentMethod.icon} alt="Payment Method" /> */}
          <div className="payment-details">
           Payment Method: {data.paymentMethod.name}
            {/* <p className="payment-time">{data.paymentMethod.time}</p> */}
          </div>
          {/* <p className="payment-amount">₹{data.total}</p> */}
        </div>
      </div>

      <RideDetails 
        driver={data.driverName}
        licensePlate={data.licensePlate}
        rideInfo={data.rideInfo}
        pickup={data.pickup}
        dropoff={data.dropoff}
      />

      <div className="invoice-footer">
        <p>Fares are inclusive of GST.</p>
      </div>
      <div>
      GSTIN: 29ABOCS3648C1Z0
      </div>

      <div className="ride-details">
        <h3>Ride Details</h3>
        <div className="ride-info">
          <div className="trip-timing">
            <p>Trip Date: {data.rideInfo.tripDate}</p>
            <p>Trip Time: {data.rideInfo.tripTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;