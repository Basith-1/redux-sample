import products from '../../api/products.json';
import AfterCart from './CartButtons/AfterCart';
import BeforeCart from './CartButtons/BeforeCart';
import './ProductList.css'
import { useSelector } from 'react-redux';

function ProductList() {

  const { cartCount } = useSelector((state) => state.cart)
  console.log(cartCount);
  return (
    <section className='container'>
      {
        products?.map((product, key) => (
          <div className="product-container" key={key}>
            <img src={product.image} alt="" />
            <h3>{product?.title}</h3>

            { cartCount > 0 ? <AfterCart /> : <BeforeCart /> }
            
          </div>
        ))
      }
    </section>
  )
}

export default ProductList