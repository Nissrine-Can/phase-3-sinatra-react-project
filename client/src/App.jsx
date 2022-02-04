/*The below two statements are required in our index.js to import dependencies inside React file in order to use bootstrap classes in our React app components.*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

import React , { useState, useEffect } from 'react';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/static/Home';
import BookList from './components/books/BookList';
import BookForm from './components/books/BookForm';
import { baseUrl } from './Globals';



function App() {

   const [books, setBooks] = useState([])

   useEffect(() => {
     fetch(baseUrl + "/books")
     .then(res => res.json())
     .then(data => setBooks(data))
   }, [])

  return (
    <Router>
         <Navbar />
         <Routes>
           <Route path="/" element={ <Home />} />
           <Route path="/books" element={ <BookList books={ books }/>} />
           <Route path="/books/new" element={ <BookForm/>} />
         </Routes>
    </Router>
  )
}

export default App;
