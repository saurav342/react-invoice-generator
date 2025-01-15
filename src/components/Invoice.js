import React from 'react';
import './Invoice.css';
import BillingDetails from './BillingDetails';
import InvoiceSummary from './InvoiceSummary';
import RideDetails from './RideDetails';

const Invoice = ({ data }) => {
  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h1>Malama GST</h1>
        <p className="date">{data.date}</p>
      </div>
      
      <div className="invoice-title">
        <h2>Here's your receipt for your ride, {data.customerName}</h2>
        <p className="subtitle">We hope you enjoyed your ride this evening.</p>
      </div>

      <InvoiceSummary 
        total={data.total}
        tripCharge={data.tripCharge}
        gst={data.gst}
      />

      <div className="payment-section">
        <h3>Payments</h3>
        <div className="payment-method">
          <img src={data.paymentMethod.icon} alt="Payment Method" />
          <div className="payment-details">
            <p>{data.paymentMethod.name}</p>
            <p className="payment-time">{data.paymentMethod.time}</p>
          </div>
          <p className="payment-amount">₹{data.total}</p>
        </div>
      </div>

      <RideDetails 
        driver={data.driver}
        licensePlate={data.licensePlate}
        rideInfo={data.rideInfo}
        pickup={data.pickup}
        dropoff={data.dropoff}
      />

      <div className="invoice-footer">
        <p>Fares are inclusive of GST. Please download the tax invoice from the trip detail page for a full tax breakdown.</p>
      </div>
    </div>
  );
};

export default Invoice;