//this is to be done in the future when i want to add an intro animation to my portfolio
import React from 'react'
import { motion } from 'framer-motion'

const IntroAnimation = () => {
  return (
    <motion.div className='fixed inset-0 bg-black z-50 flex items-center justify-center'
    variants={{
      initial:{opacity:1},
      animate:{opacity:0}



    }}
    initial="initial"
    animate="animate"
    transition={{duration:1}}
    >
      <div className='text-white text-4xl font-bold'>SitaRam Das</div>
    </motion.div>
  )
}

export default IntroAnimation