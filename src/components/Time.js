import React  from 'react';
import Clock from 'react-live-clock';
import Moment from 'react-moment';
import 'moment-timezone';

export default class Time extends React.Component {
    render() {
      return(
        <div className="current-time">
          <Clock
            format={'h:mm a'}
            ticking={true}
            timezone={'US/Mountain'} 
          />
        </div>
      )
    }
}