import React from 'react';
import HomeSection from './Homepage/homeSection';
import Icons from './Homepage/iconsSection';
import Reviews from './Homepage/reviews';
import Faq from './Homepage/faq';
import AnimationTwo from './Animation2';


const Home = () => {
    return (
        <AnimationTwo>
        <HomeSection/>
        <Icons/>
        <Reviews/>
        <Faq/>
        </AnimationTwo>
      
    );
}

export default Home;
