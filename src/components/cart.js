import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFromCart ,clear , increment  , decrement} from '../redux/slices/cartSlice';
import Animation from './Animation';
const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const totalPrice = cart.reduce((acc,product)=>{acc+=product.price * product.quantity
    return acc ;
  },0)
    return (
        
        <Animation>
        <div>
        <div className="cart-container">
      <h1 className='heading-s'>Shopping <span>Cart</span> </h1>
      
        <div className="cart-empty" style={cart.length !== 0? {display:'none'}:{}}>
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/product">
          
              {/* svg place */}
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      
        <div style={cart.length === 0? {display:'none'}:{}}>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          {cart.map((product)=>(
            <div className="cart-items" key={product.isbn}>
            
              
            <div className="cart-item" >
              <div className="cart-product">
                <img src={require (`../assets/images/${product.image}`)} alt="" />
                <div>
                  <h3>{product.title}</h3>
                  
                  <button onClick={()=> dispatch(deleteFromCart(product))} >
                    Remove
                  </button>
                </div>
              </div>
              <div className="cart-product-price">{product.price}$</div>
              <div className="cart-product-quantity">
                <button onClick={()=> dispatch(decrement(product))}>
                  -
                </button>
                <div className="count">{product.quantity}</div>
                <button onClick={()=> dispatch(increment(product))} >+</button>
              </div>
              <div className="cart-product-total-price">
                {product.quantity * product.price}$
              </div>
            </div>
          </div>
          ))}
          <div className="cart-summary">
            <button onClick={()=> dispatch(clear())} className="clear-btn">
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>total</span>
                <span className="amount">${totalPrice}</span>
              </div>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/product">
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      
    </div>
    </div>
        </Animation>
    );
}

export default Cart;
