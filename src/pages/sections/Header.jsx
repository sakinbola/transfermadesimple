import { useState } from 'react'
import { Link } from "react-router-dom"
// href for react router dom client side routing 

import "./header.css"

function Header() {

  return (
    <div className="header">

      <a className = "logo" href=""> 
        <img src="" alt="" /> Logo 
        <Link to = "/"> Home </Link>
      </a>


      <a href=""> Send </a>
      <a href=""> Collect </a>
      <a href=""> Contact Us</a>

      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default Header

// add hamburger menu for mobile view or short screen 

// add google login and sign up button 

