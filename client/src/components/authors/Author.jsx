import React, { useState, useEffect } from 'react';
import { baseUrl } from '../../Globals';
import { useParams } from 'react-router-dom';
import BookCard from '../books/BookCard';

const Author = ({ deleteBook }) => {

    const [author, setAuthor] = useState({ books: [] })
     const params = useParams()

    useEffect(() => {
        
        fetch(baseUrl + '/authors/' + params.id)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAuthor(data)
        })
    }, [])
    
    const deleteBookByAuthor = book => {
        setAuthor({
            ...author,
            books: author.books.filter(b => b.id !== book.id)
        })
    }

    const bookCards = author.books.map(book => {
    return <BookCard book={ book } key={ book.id } deleteBook={ deleteBook } author={ author } deleteBookByAuthor={ deleteBookByAuthor }/>
   })


  return (
    <div>
        <h2>Collection By: -<em>{ author.name }</em></h2>
        {bookCards}
    </div>
  )
}

export default Author;
