import React from 'react';
import './App.css';
//import components
import NavSidebar from './components/NavSidebar';
import Overview from './components/Overview';


function App() {
  return (
      <div className="App">
        <div className="app-content">
          <NavSidebar />
          <Overview />
        </div>
      </div>
  );
}

export default App;
