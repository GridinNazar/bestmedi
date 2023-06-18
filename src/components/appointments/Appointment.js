import React from "react"
import './Appointments.scss'

const Appointment = ({ day, time, lab, analys }) => {
	return (
    <div className="appointment">
      <div className="date">
        <div className="day">{day}</div>
        <div className="time">{time}</div>
      </div>
      <div className="appointment-bar"></div>
      <div className="analys-data">
        <div className="appointment-lab-name">{lab}</div>
        <div className="appointment-analys-name">{analys}</div>
      </div>
    </div>
  );
};

export default Appointment;
