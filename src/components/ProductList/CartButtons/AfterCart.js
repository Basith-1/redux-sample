import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../../redux/Cart'
import './CartButtons.css'

const AfterCart = ({ cartCount, productID }) => {

    const dispatch = useDispatch()

    return (
        <div className='after-cart'>
            <button className='cart-counter-btn' onClick={() => dispatch(decrement(productID))}>-</button>
            <div className='cart-count'>{cartCount}</div>
            <button className='cart-counter-btn' onClick={() => dispatch(increment(productID))}>+</button>
        </div>
    )
}

export default AfterCart