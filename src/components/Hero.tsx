import { useContext } from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Hero = () => {
  const { language } = useContext(LanguageContext);
  const heroText = language === "EN" ? HERO_CONTENT.EN : HERO_CONTENT.FR;
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-center overflow-hidden">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight 
             lg:text-6xl text-center lg:mt-16"
            >
              Christophe SAURY
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left lg:ml-32 w-full m-auto bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="w-full my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {heroText}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:motion.p-8 ">
          <div className="flex justify-center align-middle h-full">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              alt="Coding Gif"
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
              className="w-4/5 rounded-3xl m-auto lg:mt-16"
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};
