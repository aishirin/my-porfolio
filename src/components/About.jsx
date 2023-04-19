import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";


import { styles } from "../styles";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import astroabout from "../assets/astroabout.png"
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-[250px]">
       <motion.div
  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-38% to-emerald-500 to-90% p-[1px] rounded-[35%] shadow-lg hover:from-purple-700 hover:via-purple-900 hover:to-indigo-700"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  <div
    options={{
      max: 25,
      scale: 1.1,
      speed: 900,
    }}
    className="opacity-80 bg-gradient-to-br from-fuchsia-700 via-purple-700 to-violet-700 rounded-[40%] py-6 px-12 h-[180px] flex justify-center items-center flex-col hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 to-90%"
  >
            <div className="flex justify-center items-center w-20 h-20 bg-white rounded-full mb-8">
      <img src={icon} alt="web-development" className="w-12 h-12 object-contain" />
    </div>
    <h3 className="text-white text-2xl font-bold text-center">{title}</h3>
   
  </div>
</motion.div>

  </Tilt>
);

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}
      className="flex">
        <h2 className={`${styles.sectionHeadText} sm:text-[20px]`}>About me</h2>
        <motion.img
  src={astroabout}
  alt="planet"
  className="ml-6  w-24 h-24"
  animate={{
    rotate: 30,
    scale: [1, 1.2, 1],
    transition: { duration: 5, repeat: Infinity, repeatType: "reverse" },
  }}
/>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 flex text-secondary text-[17px] max-w-full leading-[30px]"
      >
         Hey there! My name is Aishirin and I'm a software developer with experience in JavaScript and expertise in frameworks
            like React, Next.js, and Three.js. I'm passionate about creating innovative and intuitive web applications that solve
            real-world problems. I pride myself on being a quick learner and love to collaborate closely with clients to create
            efficient, scalable, and user-friendly solutions. Let's work together to bring your ideas to life!
            
      </motion.p>
      <h3 className={`${styles.sectionHeadText} text-center mt-10`}>My stack</h3>
      <div className="mt-20 flex flex-wrap gap-10">
        {technologies.map((service, index) => (
          <ServiceCard key={service.name} index={index} title={service.name} icon={service.icon} />
        ))}
      </div>
    </div>
   
  );
};

export default SectionWrapper(About, "about");
