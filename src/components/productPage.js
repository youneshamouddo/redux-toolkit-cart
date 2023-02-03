import React, { useRef } from 'react';
import Animation from './Animation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { addToCart } from '../redux/slices/cartSlice';

const ProductPage = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(fetchProducts())
    },[]);
    
    return (
        <Animation>
            <section  className="products" id="products">
           

            <h1 className="heading-s">product<span>s</span> </h1>

         
            <div style={{textAlign:'center',fontSize:'2rem'}}>{products.length === 0 ? 'Error 404 NOT FOUND' : ''}</div>

            <div className="box-container">
                {products.map((product) =>(
                    <div className="box" key={product.isbn}>

                    <span className="discount">-{product.discount}%</span>
                    <div className="image">
                        <img src={require (`../assets/images/${product.image}`)} alt=""/>
                        <div className="icons">
                            
                            <Link onClick={()=> dispatch(addToCart(product))} className="cart-btn">add to cart</Link>
                        </div>
                    </div>
                    <div className="content">
                        <h3>{product.title}</h3>
                        <div className="price"> ${product.price} <span>${product.prePrice}</span> </div>
                    </div>
                </div>
                ))}
            </div>

            </section>
        </Animation>
    );
}

export default ProductPage;
