import React from "react"
import './Appointments.scss'
import Appointment from './Appointment';

const data = [
  {
    day: "Пн 26.06,",
    time: "8:00",
    lab: "Лаборатория 1",
    analys: "Общий анализ крови",
  },
  {
    day: "Пт 30.06,",
    time: "9:30",
    lab: "Лаборатория 3",
    analys: "Вакцинация от кори",
  },
];

const Appointments = () => {
	return (
    <div className="appointments">
      <div className="appointments-title">Ваши записи</div>
			<div className='appointments-container'>
				{Array.from({length: data.length}).map((item, index) => {
					return (<Appointment day={data[index].day} time={data[index].time} lab={data[index].lab} analys={data[index].analys}/>)
				})}
			</div>
    </div>
  );
};

export default Appointments;
