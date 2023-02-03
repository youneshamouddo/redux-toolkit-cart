import React from 'react';
import { Link } from 'react-router-dom';

const HomeSection = () => {
    return (
        <section className='home' id='home'>
            <div className='content'>
                <h3>best books</h3>
                <span> best & top rates books</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloribus quo nihil illum, tempore illo neque voluptatum ullam amet saepe sint distinctio ea voluptas inventore quibusdam iure. Sed, earum ratione.</p>
                <Link to='/product' className='btn'>shop now</Link>
            </div>
        </section>
    );
}

export default HomeSection;
