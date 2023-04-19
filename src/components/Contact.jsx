import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import gmail from "../assets/gmail.png"
import astroend from "../assets/astroend.png"
const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-br sm:w-full p-8 rounded-2xl h-[400px] from-indigo-500 hover:from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white-100 hover:from-fuchsia-500 hover:via-purple-500 hover:to-violet-500"
      >
        <h3  className={`${styles.sectionSubText} text-white-200 sm:text-[17px]`}>Contacts</h3>

        <div className="mb-3 text-white-100">
          {" "}
          <a href="https://t.me/aishirin">
            {" "}
            <img src={telegram} alt="teleg" className="w-6 h-6 inline sm:h-3 sm:w-3" />
          </a>
          <a
            href="https://t.me/aishirin"
            className={`${styles.sectionSubText} sm:text-[7px]`}
          >
            
            +996779662013
          </a>
        </div>
        {/*  */}
        <div>
          {" "}
          <a href="https://www.linkedin.com/in/aishirin-zhoomartova/">
            {" "}
            <img src={instagram} alt="inst" className="w-6 h-6 inline sm:h-3 sm:w-3" />
          </a>
          <a 
            href="https://www.linkedin.com/in/aishirin-zhoomartova/"
            className={`${styles.sectionSubText} sm:text-[7px]`}
          >
            {" "}
            Aishirin Zhoomartova
          </a>
        </div>
        <div className="mt-[15px] sm:flex items-center gap-2">
          {" "}
          <a href="mailto:awrnjoomartova@gmail.com">
            {" "}
            <img src={gmail} alt="inst" className="w-6 h-6 inline sm:h-3 sm:w-3" />
          </a>
          <a 
            href="mailto:awrnjoomartova@gmail.com"
            className={`${styles.sectionSubText} sm:text-[7px] sm:w-10`}
          >
            {" "}
            awrnjoomartova@gmail.com
          </a>
        </div>
        <motion.img
  src={astroend}
  alt="planet"
  className="ml-[auto] mt-0 mr-[auto] w-44 h-44"
  animate={{
    rotate: 0,
    scale: [1, 1.3, 1],
    transition: { duration: 5, repeat: Infinity, repeatType: "reverse" },
  }}
/>
      
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] sm:w-[180px] sm:h-[180px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");