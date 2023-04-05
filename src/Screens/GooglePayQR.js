import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function GooglePayQRCode() {
  const [formData, setFormData] = useState({
    amount: '10000.00',
    currency: 'INR',
    Name: 'Ankush kumar',
    UPIID: 'ak626513@okaxis',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1 style={{ color: 'purple', border: '1px solid black', padding: '20px' }}>Ankush Google Pay QR Code</h1>

      <form>
        <label>
          Amount:
          <input style={{color:'green',border: '1px solid black', padding: '10px'}} type="text" name="amount" value={formData.amount} onChange={handleChange} />
        </label>
        <label>
          Currency:
          <input style={{color:'green',border: '1px solid black', padding: '10px'}} type="text" name="currency" value={formData.currency} onChange={handleChange} />
        </label>
        <label>
           Name:
          <input style={{color:'green',border: '1px solid black', padding: '10px'}} type="text" name="Name" value={formData.Name} onChange={handleChange} />
        </label>
        <label>
        UPI ID:
          <input style={{color:'green',border: '1px solid black', padding: '10px'}} type="text" name="UPI ID" value={formData.UPIID} onChange={handleChange} />
        </label>
      </form>
      <div className="qr-code-container" style={{ background: 'linear-gradient(to right, #3f87a6, #ebf8e1)', padding: '20px', borderRadius: '10px' }}>
        <QRCode
          value={`upi://pay?pa=${formData.UPIID}&pn=${formData.Name}&tr=${Math.floor(Math.random() * 1000000000)}&am=${formData.amount}&cu=${formData.currency}`}
          fgColor="#CCCCCC"
          bgColor="##E6E6E6"
          size={250}
          level="L"
          includeMargin={true}
        />
      </div>
    </div>
  );
}

export default GooglePayQRCode;