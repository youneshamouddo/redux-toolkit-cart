import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cart = useSelector(state => state.cart)
    return(
        <header>
            <input type="checkbox" name="" id="toggler"></input>
            <label htmlFor="toggler" className='fas fa-bars'></label>
            <Link to='/' className='logo'>the <span>LIBRARY</span></Link>
            <nav className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Products</Link>
                <Link to="/contacts">Contact</Link>
                
            </nav>
            <div className='icons'>
                
                <Link  to="/cart" className="fas fa-shopping-cart"></Link>
                <div className='counter' style={cart.length === 0? {display:'none'}:null}>
                    {cart.length}
                </div>
            </div>
        </header>
    );
}

export default Header;
