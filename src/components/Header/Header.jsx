import React from 'react'
import './Header.css'
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Debug Media</h1>
        <FaCartShopping style={{fontSize:'2rem'}} />
      </div>
    </header>
  )
}

export default Header