import React from 'react';
import Card  from 'react-bootstrap/Card'


const BookCard = ({ book, deleteBook }) => {

  const handleDelete = () => {
   console.log('fetch delete Sinatra')
   deleteBook(book)
  }

  return (
    <div className="container">
  <div  className="row">
    
  <div className="col-lg-9">
          <Card className="card">
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <p><em>-By: { book.author.name }</em></p>
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
