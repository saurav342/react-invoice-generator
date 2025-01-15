import React, { useState } from 'react';
import InputForm from './components/InputForm';
import InvoiceContainer from './components/InvoiceContainer';

function App() {
  const [invoiceData, setInvoiceData] = useState(null);

  const handleFormSubmit = (formData) => {
    // Add a default icon path for the payment method
    const data = {
      ...formData,
      paymentMethod: {
        ...formData.paymentMethod,
        icon: '/path-to-amazon-pay-icon.png' // You can replace this with actual icon path
      }
    };
    setInvoiceData(data);
  };

  return (
    <div className="App">
      {!invoiceData ? (
        <InputForm onSubmit={handleFormSubmit} />
      ) : (
        <div>
          <button 
            onClick={() => setInvoiceData(null)}
            style={{
              margin: '20px',
              padding: '10px 20px',
              backgroundColor: '#666',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Back to Form
          </button>
          <InvoiceContainer data={invoiceData} />
        </div>
      )}
    </div>
  );
}

export default App;
