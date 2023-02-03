import React from 'react';
import video from '../assets/video/the book video.mp4'
import AnimationTwo from './Animation2';
const About = () => {
    return (
        <AnimationTwo>
        <section className="about" id="about">

            <h1 className="heading-s"> <span> about </span> us </h1>

            <div className="row">

                <div className="video-container">
                    <video src={video} loop autoPlay muted></video>
                    <h3>best book sellers</h3>
                </div>

                <div className="content">
                    <h3>why choose us?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cumque sit nemo pariatur corporis perspiciatis aspernatur a ullam repudiandae autem asperiores quibusdam omnis commodi alias repellat illum, unde optio temporibus.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea est commodi incidunt magni quia molestias perspiciatis, unde repudiandae quidem.</p>
                    <a href="#" className="btn">learn more</a>
                </div>

            </div>

        </section>
        </AnimationTwo>
    );
}

export default About;
