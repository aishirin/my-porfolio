import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import rinlogo from "../assets/rinlogo.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import gmail from "../assets/gmail.png"

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
        <motion.img
  src={rinlogo}
  alt="planet"
  className="w-7 h-7 object-contain"
  animate={{
    rotate: 360,
    scale: [1,1,1],
    transition: { duration: 5, repeat: Infinity, repeatType: "loop" },
  }}
/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Aishrin Zhoomartova &nbsp;
          </p>
        </Link>

        <ul className="list-none xs:hidden sm:hidden flex flex-row gap-10">
          
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-between list-none gap-10 sm:hidden">
            <a href="mailto:awrnjoomartova@gmail.com">
            {" "}
            <img src={gmail} alt="inst" className="w-7 h-7 inline" />
          </a><a href="https://www.linkedin.com/in/aishirin-zhoomartova/">
            {" "}
            <img src={instagram} alt="inst" className="w-6 h-6 inline" />
          </a><a href="https://t.me/aishirin">
            {" "}
            <img src={telegram} alt="teleg" className="w-6 h-6 inline" />
          </a>
            </div>
        <div className="hidden  sm:flex flex-1 justify-end items-center">
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
