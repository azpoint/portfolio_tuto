import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
      <section className="relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
            <div className="w-1 h-40 violet-gradient sm:h-80"/>

          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'am <span className="text-[#915eff]">Alejandro</span></h1>
            <p className={`${styles.heroSubText}`}>I develop full web applications <br className="block lg:hidden"/> with some 3D magic</p>
          </div>
        </div>

          <ComputersCanvas />

          <div className="absolute bottom-[150px] sm:bottom-0 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-8 h-16 rounded-3xl border-4 border-secondary flex justify-center p-2">
                <motion.div animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary my-1"
                >
                  
                </motion.div>
              </div>
            </a>
          </div>

      </section>
    );
};

export default Hero;
