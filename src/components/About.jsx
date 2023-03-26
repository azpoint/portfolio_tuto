import React from 'react'
import Tilt from "react-parallax-tilt"
import {motion} from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion.js"

import {SectionWrapper} from "../hoc"

const ServiceCard = ({service, icon, title, index}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full bg-gradient-to-t from-[#004691] to-[#3da4c4] p-1 rounded-xl shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-15 h-16 object-contain"/>
          <h3 className="text-white text-lg font-bold text-center">{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '',0.1, 1)} className='mt-4 text-secondary text-,d max-w-3xl leading-7'>
      With experience in the technology sector since 2015, I currently work as a FullStack with the MERN stack (Mongo-Express-React-Node) mainly, but also with vanilla HTML, CSS and JavaScript. Continuous learning and being self-taught gave me the ability to self-manage. This allows me to achieve the goals set, forcing me to learn more at every step of each project, either on my own or relying on the experience of my fellow professionals.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map( (service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")