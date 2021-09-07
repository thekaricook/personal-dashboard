import React from 'react';
import SimpleCalendar from './SimpleCalendar';

const NewCalendar = () => {

    const dayBuilder = (d) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        return `${day}`
      }
    const dateBuilder = (d) => {
        let date = d.getDate();
        return `${date}`
      }
    const monthBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[d.getMonth()];
        return `${month}`
      }
      
    return (
            <div className="calendar-content">
                <div className="overview-date">
                    <h2 className="overview-day">{dayBuilder(new Date())}</h2>
                    <h2 className="overview-month">{monthBuilder(new Date())}, {dateBuilder(new Date())}</h2>
                </div>
                <SimpleCalendar />
                <div className="events-container">
                    <h3>events</h3>
                </div>
          </div>
    )
}

export default NewCalendar;