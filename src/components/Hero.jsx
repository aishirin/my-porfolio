import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import {DeskCanvas} from "./canvas"
import planet from "../assets/planet.png"
import astro from "../assets/astro.png"

const Hero = () => {
  return (
    <section className={`relative w-full h-[103vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]   max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div >
          <h1 className={`${styles.heroHeadText} sm:absolute sm:top-0 sm:hidden  text-transparent  bg-clip-text bg-gradient-to-bt from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%`}>Aishirin
            {/* <span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-indigo-500 hover:from-10% via-sky-500 hover:via-30% to-emerald-500 to-90%">Aishirin</span> */}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 sm:hidden`}>
            I am enthusiastic and motivated Frontend developer with positive and growth mindset.
          </p>
          
        </div>
       <motion.img
  src={astro}
  alt="planet"
  className="ml-6 w-64 h-64 sm:hidden"
  animate={{
    rotate: 30,
    scale: [1, 1, 1],
    transition: { duration: 5, repeat: Infinity, repeatType: "reverse" },
  }}
/>
        <motion.img
  src={planet}
  alt="planet"
  className="absolute top-1/2 left-1/7 w-44 h-44 sm:mr-8 "
  animate={{
    rotate: 0,
    scale: [1, 1.5, 1],
    transition: { duration: 5, repeat: Infinity, repeatType: "loop" },
  }}
/>
      </div>
      {/* <ComputersCanvas /> */}
   
        <DeskCanvas/>
        
      
      <div className="absolute  bottom-7 w-[80%] flex justify-end items-center">
      <div className='absolute  bottom-7 w-[80%] flex justify-end items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      </div>

     
    </section>
  );
};

export default Hero;
