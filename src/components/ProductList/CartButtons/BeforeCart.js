import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/Cart';
import './CartButtons.css'

const BeforeCart = () => {

    const dispatch = useDispatch()

    return (
        <div className='before-cart'>
            <button className='add-to-cart-btn' onClick={() => dispatch(addToCart())}>Add to cart</button>
        </div>
    )
}

export default BeforeCart