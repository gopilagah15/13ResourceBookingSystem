// components/UsageBilling.js
import React from 'react';

const UsageBilling = ({ billing }) => {
  return (
    <div>
      <h2>Usage Billing</h2>
      <ul>
        {billing.map((entry, index) => (
          <li key={index}>
            Resource {entry.resourceId} - Cost: ${entry.cost}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsageBilling;
