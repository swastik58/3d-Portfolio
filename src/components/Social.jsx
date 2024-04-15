import React from 'react'
import { BallCanvas } from './canvas'
import {motion} from 'framer-motion'
import { textVariant} from '../utils/motion'
import {styles} from '../styles'

import { Wrapper } from '../hoc'
import { social } from '../constants'

const Social = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Links</h2>
          <p className={styles.sectionSubText}>To find me on the Internet</p>
        </motion.div>
      <br />
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {social.map((soc) => (
          <div className='w-20 h-28' key={soc.name}>
            <a href={soc.link} target="_blank">
                <BallCanvas icon={soc.icon} />
            </a>
          </div>
        ))}
      </div>
  </>
  )
}

export default Wrapper(Social, "")