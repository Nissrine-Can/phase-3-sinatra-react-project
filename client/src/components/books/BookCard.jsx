import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div>
        <h3>{book.title}</h3>
        <p><em>By: { book.author.name }</em></p>
        <p>{ book.summary }</p>
        <button>Delete</button>
    </div>
  )
}

export default BookCard;
