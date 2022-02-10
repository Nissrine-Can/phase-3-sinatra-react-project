import React from 'react';
import Card from "react-bootstrap/Card"
import { baseUrl, headers } from '../../Globals';
import { Link } from "react-router-dom";


const BookCard = ({ book, deleteBook, author, deleteBookByAuthor }) => {

  const handleDelete = () => {
   //console.log('fetch delete Sinatra')
   fetch(baseUrl + "/books/" + book.id, {
     method: "DELETE",
     headers,  
   })
   .then(res => res.json())
   .then(data => {
     deleteBook(data)
     if(author) {
      deleteBookByAuthor(data)
     }
   })
  }

  return (
    <div className="container">
  <div  className="row">
    
  <div className="col-lg-9">
          <Card className="card">
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
             {book.author ? <p><em>By: <Link to={ `/authors/${book.author.id}`}>{ book.author.name }</Link></em></p> : null}
              <Card.Text>
              { book.summary }
              </Card.Text>
              <button 
              className="btn btn-secondary"
              onClick={ handleDelete }
              >Delete</button>
            </Card.Body>
          </Card>
      
          </div>
    </div>
    </div>
      
      
      
      
      
    
  )
}

export default BookCard;
