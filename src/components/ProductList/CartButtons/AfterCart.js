import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../../redux/Cart'
import './CartButtons.css'

const AfterCart = () => {

    const dispatch = useDispatch()
    const { cartCount } = useSelector((state) => state.cart)

    return (
        <div className='after-cart'>
            <button className='cart-counter-btn' onClick={() => dispatch(decrement())}>-</button>
            <div className='cart-count'>{cartCount}</div>
            <button className='cart-counter-btn' onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default AfterCart