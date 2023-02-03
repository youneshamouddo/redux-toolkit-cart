import { motion } from 'framer-motion';
import React from 'react';
import { isMobile } from 'react-device-detect';
const animations = !isMobile?{
    initial:{opacity: 0, x:100},
    animate:{opacity:1,x:0},
    exit:{opacity: 0,x:-100}
}:{
    initial:{},
    animate:{},
    exit:{}
}
const AnimationTwo = ({children}) => {
    return (
        
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
        >
             {children}
        </motion.div>
    );
}

export default AnimationTwo;
