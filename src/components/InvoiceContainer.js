import React from 'react';
import { usePDF } from 'react-to-pdf';
import Invoice from './Invoice';

const InvoiceContainer = ({ data }) => {
  const { toPDF, targetRef } = usePDF({
    filename: `Malama GST-receipt-${data.date}.pdf`
  });

  return (
    <div>
      <button 
        onClick={() => toPDF()}
        style={{
          margin: '20px',
          padding: '10px 20px',
          backgroundColor: '#000',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Download PDF
      </button>
      <div ref={targetRef}>
        <Invoice data={data} />
      </div>
    </div>
  );
};

export default InvoiceContainer;