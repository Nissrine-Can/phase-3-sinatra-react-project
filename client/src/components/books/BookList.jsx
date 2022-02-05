import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {

    const bookCards = books.map((book) => <BookCard book={ book } key={ book.id }/>)
  return (
    
       <div>
          {bookCards}
       </div>

  )
}

export default BookList;
