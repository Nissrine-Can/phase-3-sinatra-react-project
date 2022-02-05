import React from 'react';
import Card  from 'react-bootstrap/Card'
import { baseUrl, headers } from '../../Globals';


const BookCard = ({ book, deleteBook }) => {

  const handleDelete = () => {
   //console.log('fetch delete Sinatra')
   fetch(baseUrl + "/books/" + book.id, {
     method: "DELETE",
     headers,  
   })
   .then(res => res.json())
   .then(data => {
     deleteBook(data)
   })
   
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
