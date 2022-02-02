/*The below two statements are required in our index.js to import dependencies inside React file in order to use bootstrap classes in our React app components.*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './containers/Home';


function App() {
   
  return (
    <Router>
       <Routes>
         < Route path="/" element={ <Home /> } />
         < Route path="/tasks"  />
         < Route path="/tasks/new"  />
         < Route path="/types/:id" />

       </Routes>

    </Router> 
    
  );
}

export default App;
