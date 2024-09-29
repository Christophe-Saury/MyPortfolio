import React, { useContext } from "react";
import logo from "../assets/new_logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import ExampleDoc from "../assets/CV-Christophe-SAUR.pdf";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { LanguageContext } from "../context/LanguageContext.tsx";

export const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = () => {
    setLanguage(language === "EN" ? "FR" : "EN");
  };

  return (
    <nav className="mb-2 flex items-center justify-between ">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-16 flex flex-row items-center justify-center gap-4 text-2xl ">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/christophe-saury-fr-usa/"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Christophe-Saury"
        >
          <FaGithub />
        </a>
        <a href={ExampleDoc} download="CV-Christophe-SAURY" target="_blank">
          <TbFileCv />
        </a>

        <button
          className="inline-flex w-full m-auto gap-x-1.5 rounded-md bg-neutral-900 px-2 py-1 text-sm font-semibold text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-300 hover:text-neutral-900"
          onClick={handleLanguageChange}
        >
          <span
            className={`fi fi-${language === "EN" ? "gb" : "fr"} fis m-auto`}
          ></span>
          {language}
        </button>
      </div>
    </nav>
  );
};
