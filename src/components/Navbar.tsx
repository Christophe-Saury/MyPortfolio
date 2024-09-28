import React from "react";
import logo from "../assets/new_logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

import ExampleDoc from "../assets/CV-Christophe-SAUR.pdf";

export const Navbar = () => {
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
      </div>
    </nav>
  );
};
