import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'
import myimage from '../assets/img.jpg'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex flex-col md:flex-row sm:flex-row items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 sm:w-64 sm:h-64 mr-8">
            <img src={myimage} alt="Your Image" className="image object-cover rounded-full" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi 👋,  I'm <span className='text-[#915eff]'>Swastik</span></h1>
            <p className={`${styles.heroSubText} mt-1 text-white-100`}>
              Web Developer, Gaming Enthusiast, <br /> Sports Lover, Music admirer
            </p>
          </div>
        </div>

      </div>
      <ComputersCanvas />

      <div className='mx-auto absolute xs:bottom-10 bottom-25 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{y:[0, 24, 0]}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero