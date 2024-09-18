import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-between ">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-16 flex flex-row items-center justify-center gap-4 text-2xl ">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};
