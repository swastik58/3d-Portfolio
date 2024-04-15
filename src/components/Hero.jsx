import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'
import myimage from '../assets/img.jpg'

const Hero = () => {

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

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
      {isDesktop && <ComputersCanvas />}

    </section>
  )
}

export default Hero
