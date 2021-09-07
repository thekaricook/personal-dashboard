import React from 'react'
import Tasklist from './Tasklist';
import Time from './Time';
import Weather from './Weather';

const Overview = () => {
    return(
        <div className="overview-container">
          <div className="time-container">
            <Time />
          </div>
          <div className="weather-container">
              <Weather />
          </div>
          <div className="tasklist-container">
            <Tasklist />
          </div>

        </div>
    );
};

export default Overview;