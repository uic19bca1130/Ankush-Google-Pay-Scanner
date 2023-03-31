import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [formData, setFormData] = useState({
    latitude: '30.6991158',
    longitude: '76.6914105',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Generate QR Code</h1>
      <form>
        <label>
          Latitude:
          <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} />
        </label>
        <label>
          Longitude:
          <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} />
        </label>
      </form>
      <div className="qr-code-container">
        <QRCode
          value={`geo:${formData.latitude},${formData.longitude}`}
          fgColor="#AF0000"
        />
      </div>
    </div>
  );
}

export default QRCodeGenerator;