import { useState } from 'react'
import "./header.css"

function Header() {

  return (
    <div className="header">

      <a className = "logo" href=""> 
        <img src="" alt="" /> Logo 
      </a>


      <a href=""> Send </a>
      <a href=""> Collect </a>
      <a href=""> Contact Us</a>

      <a href=""> Log In </a>
      <a href=""> Sign Up </a>
    </div>
  )
}

export default Header

// add hamburger menu for mobile view or short screen 