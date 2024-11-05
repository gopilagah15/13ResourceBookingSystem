// components/ResourceAllocationForm.js
import React, { useState } from 'react';

const ResourceAllocationForm = ({ onBook, resources }) => {
  const [resourceId, setResourceId] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const resource = resources.find(res => res.id === resourceId);

    if (!resource) {
      alert("Selected resource not found.");
      return;
    }

    onBook({ resourceId, date, duration, rate: resource.rate, resourceName: resource.name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Resource Allocation Form</h2>
      <select value={resourceId} onChange={(e) => setResourceId(e.target.value)} required>
        <option value="">Select Resource</option>
        {resources.map(resource => (
          <option key={resource.id} value={resource.id}>{resource.name}</option>
        ))}
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="number" placeholder="Duration (hours)" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      <button type="submit">Book Resource</button>
    </form>
  );
};

export default ResourceAllocationForm;
