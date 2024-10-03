import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.tsx";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const projectText = language === "EN" ? PROJECTS.EN : PROJECTS.FR;
  return (
    <div className=" pb-8 overflow-hidden">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="">
        {projectText.map((project, index) => (
          <div
            key={index}
            className="mb-8 border-b border-gray-900 pb-6 flex flex-column  flex-wrap md:flex-row justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className=" mb-6  md:w1/4 justify-self-center"
            >
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded ml-0 justify-self-center sm:ml-12 sm:justify-self-start "
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 m-auto"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
