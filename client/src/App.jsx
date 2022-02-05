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
import ErrorList from './components/errors/ErrorList';



function App() {

   const [books, setBooks] = useState([])
   const [errors, setErrors] = useState([])

   useEffect(() => {
     fetch(baseUrl + "/books")
     .then(res => res.json())
     .then(data => setBooks(data))
   }, [])

   const addBook = book => {
     setBooks([...books, book])
   }
  
   const deleteBook = book => {
     //console.log("remove book from state(filter)", book)
     setBooks(books.filter(b => b.id !== book.id))
   }
   const addErrors = errors => {
     setErrors(errors)
   }

   const clearErrors = () => {
     setErrors([])
   }

  return (
    <Router>
         <Navbar />
         <ErrorList errors={ errors }/>
         <Routes>
           <Route path="/" element={ <Home />} />
           <Route path="/books" element={ <BookList books={ books } deleteBook={ deleteBook } />} />
           <Route 
           path="/books/new" 
           element={ <BookForm addBook={ addBook } addErrors={ addErrors } clearErrors={ clearErrors } />} />
         </Routes>
    </Router>
  )
}

export default App;
