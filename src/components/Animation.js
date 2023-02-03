import React from 'react';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
const animations = !isMobile?{
    initial:{scaleX: 0,rotateX: 0 },
    animate:{scaleX: 1,rotateX:[45,0]},
    transition:{ duration: 0.75,}
}:{
    initial:{},
    animate:{},
    transition:{}
}
const Animation = ({children}) => {
    return (
        
        <motion.div
            variants={animations}
            initial='initial'
            animate= 'animate'
            transition='transition'
                
        >{children}</motion.div>
    );
}

export default Animation;
