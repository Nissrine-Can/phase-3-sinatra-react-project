import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {

    const bookCards = books.map((book) => <BookCard book={ book } key={ book.id }/>)
  return (
    <div>
       <h1>Book List</h1>
       <ul>
          {bookCards}
       </ul>
    </div>
  )
}

export default BookList;
