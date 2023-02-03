import React from 'react';
import pic1 from '../../assets/images/p1.png';
import pic2 from '../../assets/images/p2.png';
import pic3 from '../../assets/images/P3.png';

const Reviews = () => {
    return (
        <section data-aos="fade-up" className="review" id="review">

<h1 className="heading"> customer's <span>review</span> </h1>

<div className="box-container">

    <div className="box">
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam nesciunt eaque nulla dignissimos.</p>
        <div className="user">
            <img src={pic1} alt=""/>
            <div className="user-info">
                <h3>john deo</h3>
                <span>happy customer</span>
            </div>
        </div>
        <span className="fas fa-quote-right"></span>
    </div>

    <div className="box">
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam nesciunt eaque nulla dignissimos.</p>
        <div className="user">
            <img src={pic2} alt=""/>
            <div className="user-info">
                <h3>john deo</h3>
                <span>happy customer</span>
            </div>
        </div>
        <span className="fas fa-quote-right"></span>
    </div>

    <div className="box">
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam nesciunt eaque nulla dignissimos.</p>
        <div className="user">
            <img src={pic3} alt=""/>
            <div className="user-info">
                <h3>john deo</h3>
                <span>happy customer</span>
            </div>
        </div>
        <span className="fas fa-quote-right"></span>
    </div>

</div>
    
</section>

    );
}

export default Reviews;
