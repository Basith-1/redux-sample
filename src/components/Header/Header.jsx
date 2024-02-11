import React from 'react'
import './Header.css'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';

function Header() {

  const { cartList } = useSelector((state) => state.cart)
  console.log(cartList.length);

  return (
    <header>
      <div className="container">
        <h1>Debug Media</h1>
        <div className='rightSection'>
          <div className='cartCount'>{ cartList?.length }</div>
          <FaCartShopping style={{fontSize:'2rem'}} />
        </div>
      </div>
    </header>
  )
}

export default Header