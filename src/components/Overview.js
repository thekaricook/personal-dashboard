import React from 'react'
import Tasklist from './Tasklist';
import Time from './Time';
import Weather from './Weather';
import Calendar from './Calendar';


const Overview = () => {
    return(
        <div className="overview-container">
          <div className="grid">
            <div className="tasklist-container">
                <Time />
                <Weather />
                <Tasklist />
            </div>
            <div className="calendar-content">
                <Calendar />
            </div>
          </div>
        </div>
    );
};

export default Overview;