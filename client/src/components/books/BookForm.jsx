import React, { useState, useEffect } from 'react';
import { baseUrl, headers } from '../../Globals';
import { useNavigate } from 'react-router-dom';
const BookForm = ({ addBook, addErrors, clearErrors }) => {
  
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [summary, setSummary] = useState("")
  
  const navigate = useNavigate()
  
  useEffect(() => {
    return () => {
      clearErrors()
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    const paramsData = {
      author: {
        name: author
      },
      book: {
        title: title,
        summary: summary
      }
    }
   fetch(baseUrl + '/books',{
     method: "POST",
     headers,
     body: JSON.stringify(paramsData)
   })
   .then(res => res.json())
   .then(data => {
     //console.log(data)
     if (data.errors) {
        addErrors(data.errors)
     } else {
      addBook(data)
      navigate("/books")
     }
   })
  }

  return (
    <div className="form">
           <form onSubmit={ handleSubmit }>
           <div className="mb-3">
                <label htmlFor="title" className="form-label" >Title</label>
                <input 
                className="form-control"
                type="text" 
                name="title" 
                id="title"
                placeholder="Enter book's title"
                value={title}
                onChange={ e => setTitle(e.target.value)}
                />
          </div>
            
          <div className="mb-3">
              <label htmlFor="author" className="form-label">Author</label>
                <input 
                className="form-control"
                type="text" 
                name="author" 
                id="author"
                placeholder="Enter author's name"
                value={author}
                onChange={ e => setAuthor(e.target.value)}
                />
            </div>
          
            <div className="mb-3">
                    <label htmlFor="summary" className="form-label" >Summary</label>
                    <textarea
                    className="form-control"
                    rows="5"
                    type="text" 
                    name="summary" 
                    id="summary"
                    placeholder="Enter Summary"
                    value={summary}
                    onChange={ e => setSummary(e.target.value)}
                    />
            </div>
        
            <button 
            type="submit" 
            className="btn btn-primary"
            >Add Book</button>

            </form>
      
    </div>
  )
}

export default BookForm;
