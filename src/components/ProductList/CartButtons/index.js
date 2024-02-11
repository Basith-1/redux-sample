import React, { useMemo } from 'react'
import AfterCart from './AfterCart'
import BeforeCart from './BeforeCart'
import { useSelector } from 'react-redux'

const CartButtons = ({ product }) => {
  // console.log(productID);
  const { cartList } = useSelector((state) => state.cart)

  const cartCount = useMemo(() => {
    return cartList?.find((item) => item?.id === product?.id)?.count
  },[cartList])
  // console.log(cartCount);

  return (
    <>
    {
      cartCount > 0 ? <AfterCart productID={product?.id} cartCount={cartCount} /> : <BeforeCart product={product} />
    }
       
    </>
  )
}

export default CartButtons