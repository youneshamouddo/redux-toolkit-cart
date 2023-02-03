import React from 'react';
import icon1 from '../../assets/images/icon-1.png';
import icon2 from '../../assets/images/icon-2.png';
import icon3 from '../../assets/images/icon-3.png';
import icon4 from '../../assets/images/icon-4.png';

const Icons = () => {
    return (
    <section data-aos="fade-up" className="icons-container">

            <div className="icons">
                <img src={icon1} alt=""/>
                <div className="info">
                    <h3>free delivery</h3>
                    <span>on all orders</span>
                </div>
            </div>

            <div className="icons">
                <img src={icon2} alt=""/>
                <div className="info">
                    <h3>10 days returns</h3>
                    <span>moneyback guarantee</span>
                </div>
            </div>

            <div className="icons">
                <img src={icon3} alt=""/>
                <div className="info">
                    <h3>offer & gifts</h3>
                    <span>on all orders</span>
                </div>
            </div>

            <div className="icons">
                <img src={icon4} alt=""/>
                <div className="info">
                    <h3>secure paymens</h3>
                    <span>protected by paypal</span>
                </div>
            </div>
        
    </section>
    );
}

export default Icons;
