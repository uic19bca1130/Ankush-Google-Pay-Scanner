import React, { useState } from 'react';
import QRCode from 'qrcode.react';


function QRCodeGenerator() {
  const [formData, setFormData] = useState({
    firstName: 'Dilbag',
    lastName: 'Singh',
    role: 'Team Leader',
    phoneNumber: '99898989898',
    email:'dilbag singh@gmail.com',
    address:'Mohali',
    latitude: 30.6990948,
    longitude: 76.6914017,
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
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
          Role:
          <input type="role" name="role" value={formData.role} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="tel"name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
        </label>
        <label>
          Email:
          <input type="email"name="email" value={formData.email} onChange={handleChange}/>
        </label>
        <label>
          Address
          <input type="address"name="address" value={formData.address} onChange={handleChange}/>
        </label>
      </form>
      {/* Include the location in the QR code */}
      <div className="qr-code-container">
        <QRCode
          value={`BEGIN:VCARD\nVERSION:3.0\nN:${formData.lastName};${formData.firstName};;;\nTEL;TYPE=CELL:${formData.phoneNumber}\nEMAIL:${formData.email}\nADR:${formData.address}\nGEO:${formData.latitude},${formData.longitude}\nEND:VCARD`}
          fgColor="#AF0000"
        />
      </div>
    </div>
  );
}

export default QRCodeGenerator;