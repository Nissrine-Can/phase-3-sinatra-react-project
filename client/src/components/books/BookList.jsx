import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, deleteBook }) => {

    const bookCards = books.map((book) => <BookCard book={ book } key={ book.id } deleteBook={ deleteBook } />)
  return (
    
       <div>
          {bookCards}
       </div>

  )
}

export default BookList;
