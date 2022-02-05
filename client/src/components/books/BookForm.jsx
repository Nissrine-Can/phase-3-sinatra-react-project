import React from 'react';


const BookForm = () => {
  return (
    <div className="form">

           <div class="mb-3">
                <label for="title" className="form-label" >Title</label>
                <input 
                class="form-control"
                type="text" 
                name="title" 
                id="title"
                placeholder="Enter Book Title"
                />
          </div>
            
          <div class="mb-3">
              <label for="author" className="form-label">Author</label>
                <input 
                class="form-control"
                type="text" 
                name="author" 
                id="author"
                placeholder="Enter author's name"
                />
            </div>
          
            <div class="mb-3">
                    <label for="summary" class="form-label" >Summary</label>
                    <textarea
                    className="form-control"
                    rows="3"
                    type="text" 
                    name="summary" 
                    id="summary"
                    placeholder="Enter Summary"
                    />
            </div>
        
            <button 
            type="button" 
            class="btn btn-primary"
            >Add Book</button>
            
      
    </div>
  )
}

export default BookForm;
