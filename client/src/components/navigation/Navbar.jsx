import React from 'react';
import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'


const Navbar = () => {
  return (
      <>
        <div className="header">
           <h1 className="logo">Read Aloud Tracker</h1>
           <h6>Grades K- 3</h6>
        </div>
        < div className="nav-header">
           <Stack direction="horizontal" gap={3}>
              <Link className="btn btn-primary" to="/">Home</Link>{' '}
              <Link className="btn btn-primary" to="/books">Book List</Link>{' '}
              <Link className="btn btn-primary" to="/books/new">Add Book</Link>
            </Stack>
         </div>
    </>
  )
}


export default Navbar;
