import React from 'react';
import './App.css';
//import components
import NavSidebar from './components/NavSidebar';
import Overview from './components/Overview';
import Tasklist from './components/Tasklist';
import Rightside from './components/Rightside';
import MainCalendar from './components/MainCalendar';


function App() {
  return (
      <div className="App">
        <div className="app-content">
          <NavSidebar />
          <Overview />
          <MainCalendar />
        </div>
      </div>
  );
}

export default App;
