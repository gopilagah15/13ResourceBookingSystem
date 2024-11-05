// App.js
import React, { useState, useEffect } from 'react';
import ResourceAllocationForm from './components/ResourceAllocationForm';
import BookingAlerts from './components/BookingAlerts';
import UsageBilling from './components/UsageBilling';
import UtilizationReport from './components/UtilizationReport';

const App = () => {
  const [resources, setResources] = useState([
    { id: '1', name: 'Conference Room', rate: 20 },
    { id: '2', name: 'Projector', rate: 10 },
  ]);
  const [bookings, setBookings] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [billing, setBilling] = useState([]);

  const handleBooking = (booking) => {
    setBookings([...bookings, booking]);
    setAlerts([...alerts, `Booking confirmed for ${booking.resourceName} on ${booking.date}`]);
  };

  useEffect(() => {
    const updatedBilling = bookings.map((booking) => ({
      resourceId: booking.resourceId,
      cost: booking.duration * booking.rate
    }));
    setBilling(updatedBilling);
  }, [bookings]);

  return (
    <div>
      <h1>Resource Booking System</h1>
      <ResourceAllocationForm onBook={handleBooking} resources={resources} />
      <BookingAlerts alerts={alerts} />
      <UsageBilling billing={billing} />
      <UtilizationReport bookings={bookings} />
    </div>
  );
};

export default App;
