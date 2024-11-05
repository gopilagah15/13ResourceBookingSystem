// components/UtilizationReport.js
import React from 'react';

const UtilizationReport = ({ bookings }) => {
  const resourceUsage = bookings.reduce((acc, booking) => {
    acc[booking.resourceId] = (acc[booking.resourceId] || 0) + parseInt(booking.duration);
    return acc;
  }, {});

  return (
    <div>
      <h2>Utilization Report</h2>
      <ul>
        {Object.entries(resourceUsage).map(([resourceId, hours], index) => (
          <li key={index}>Resource {resourceId} - Total Usage: {hours} hours</li>
        ))}
      </ul>
    </div>
  );
};

export default UtilizationReport;
