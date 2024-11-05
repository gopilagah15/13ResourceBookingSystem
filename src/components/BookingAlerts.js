// components/BookingAlerts.js
import React from 'react';

const BookingAlerts = ({ alerts }) => {
  return (
    <div>
      <h2>Booking Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{alert}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingAlerts;
