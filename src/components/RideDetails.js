import React from 'react';

const RideDetails = ({ driver, licensePlate, rideInfo, pickup, dropoff }) => {
  return (
    <div className="ride-details">
      <div className="driver-info">
        <p>You rode with {driver}</p>
        <p className="license">License Plate: {licensePlate}</p>
      </div>

      <div className="trip-type">
        <p>{rideInfo.type}</p>
        <p>{rideInfo.distance} kilometres | {rideInfo.duration} min(s)</p>
      </div>

      <div className="location-details">
        <div className="location pickup">
          <span className="time">{pickup.time}</span>
          <span className="address">{pickup.address}</span>
        </div>
        
        <div className="location dropoff">
          <span className="time">{dropoff.time}</span>
          <span className="address">{dropoff.address}</span>
        </div>
      </div>
    </div>
  );
};

export default RideDetails; 