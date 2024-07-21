import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    departure: '',
    arrival: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    travelClass: 'economy'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process booking form data
    console.log(formData);
  };

  return (
    <div className="booking">
      <h2>Book Your Flight</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="departure">Departure</label>
          <input
            type="text"
            id="departure"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrival">Arrival</label>
          <input
            type="text"
            id="arrival"
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Departure Date</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="returnDate">Return Date</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passengers</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="travelClass">Travel Class</label>
          <select
            id="travelClass"
            name="travelClass"
            value={formData.travelClass}
            onChange={handleChange}
          >
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
        </div>
        <button type="submit">Search Flights</button>
      </form>
    </div>
  );
};

export default Booking;
