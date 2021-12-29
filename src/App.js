import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/home'
import Destination from './components/destination'

import Crew from './components/crew'
import Technology from './components/technology'


function App() {
  return (
    <div className="App">
     <Router>
        
        <Routes>
          <Route path="/*"  element={<Home />}/>
          <Route path="destination/*"  element={<Destination />}/>
          <Route path="crew/*" element={<Crew />}/>
          <Route path="technology/*"  element={<Technology />}/>
         

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
