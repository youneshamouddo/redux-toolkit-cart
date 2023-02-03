import React from 'react';
import AnimationTwo from './Animation2';
const Contacts = () => {
    return (
<AnimationTwo>
<section className="contact" id="contact">

    <h1 className="heading-s"> <span> contact </span> us </h1>

    <div className="row">

        <form action="">
            <input type="text" placeholder="name" className="box"/>
            <input type="email" placeholder="email" className="box"/>
            <input type="number" placeholder="number" className="box"/>
            <textarea name="" className="box" placeholder="message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className="btn"/>
        </form>

       

    </div>

</section>
</AnimationTwo>


    );
}

export default Contacts;
