import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return(
  <div>

      <NavLink
      to = "/"
      exact
      >Home</NavLink>
      <NavLink
      to = "/"
      exact
      >Types</NavLink>

  </div>
  )
}

export default Navbar