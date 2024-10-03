import { useContext } from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

const About = () => {
  const { language } = useContext(LanguageContext);
  const aboutText = language === "EN" ? ABOUT_TEXT.EN : ABOUT_TEXT.FR;

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mt-30">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className=""> Me</span>
      </h1>
      <div className="flex flex-wrap overflow-hidden">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex flex-col align-middle">
            <p className="m-auto max-w-xl py-6  ">{aboutText}</p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 "
        >
          <div className="flex items-center justify-self-center ">
            <img
              className="rounded-2xl w-3/4  m-auto mt-0"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
