import products from '../../api/products.json';
import CartButtons from './CartButtons';
import './ProductList.css'
import { useSelector } from 'react-redux';

function ProductList() {

  const { cartList } = useSelector((state) => state.cart)
  // console.log(cartCount);
  console.log(cartList);
  return (
    <section className='container'>
      {
        products?.map((product, key) => (
          <div className="product-container" key={key}>
            <img src={product.image} alt="" />
            <h3>{product?.title}</h3>
            <CartButtons product={product} />
          </div>
        ))
      }
    </section>
  )
}

export default ProductList