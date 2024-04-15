import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import { Wrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20opx] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className='w-25 h-25 object-contain rounded-md' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-1 text-secondary text-[17px] max-w-3xl leading-[30px]'  
      >
        I'm a 2022 B.Tech graduate who embarked on a professional journey at Oracle, where I currently serve as a Full-Time Employee. 
        My passion for technology and a perpetual hunger for learning have driven me to explore various domains. 
        While I've been immersed in the world of ReactJS, crafting elegant and user-friendly frontend websites, my quest for knowledge knows no bounds.
        Beyond the world of coding, my heart belongs to cricket. Although I didn't make it to the pitch professionally, the sport remains an enduring love of mine. 
        In my leisure moments, you'll find me enjoying the thrill of a cricket match, immersing myself in the latest video games, grooving to music, or indulging in cinematic experiences 
        with movies and series. Additionally, I'm an avid reader, with novels offering a delightful escape into different worlds.
        My journey is one of continuous growth and exploration, both in the realm of technology and in the pursuits that ignite my passions.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br /> <br />
      <motion.div variants={textVariant()}>
        <a href="https://drive.google.com/drive/folders/1vs5TZzgFMC28uOXth4_LVBDYtYRZE0tD?usp=share_link" target="_blank">
          <h3 className="text-[40px] hover:text-red-800">Click here to view my Résumé</h3>
        </a>
      </motion.div>

    </>
  )
}

export default Wrapper(About, "about")