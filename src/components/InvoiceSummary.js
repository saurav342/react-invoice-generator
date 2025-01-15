import React from 'react'

const InvoiceSummary = ({ total, tripCharge, gst }) => {
  return (
    <div className="invoice-summary">
      <div className="total-section">
        <h3>Total</h3>
        <p className="amount">₹{total}</p>
      </div>
      
      <div className="charge-details">
        <div className="charge-item">
          <span>Trip charge</span>
          <span>₹{tripCharge}</span>
        </div>
        
        <div className="charge-item subtotal">
          <span>Subtotal</span>
          <span>₹{tripCharge}</span>
        </div>
      </div>
      
      <div className="gst-notice">
        <p>The total of ₹{total} has a GST of ₹{gst} included.</p>
      </div>
    </div>
  )
}

export default InvoiceSummary;