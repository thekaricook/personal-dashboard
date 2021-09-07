import React from 'react';
import Time from './Time';

const Rightside = () => {
    return (
        <div className="rightside-container">
            <div className="rightside-content">
                <div className="clock-content">
                    <Time />
                </div>
                <div className="weather-content">
                    <h3>Weather</h3>
                </div>
            </div>
        </div>
    )
}

export default Rightside;