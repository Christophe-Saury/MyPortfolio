import React from "react";
import logo from "../assets/new_logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import ExampleDoc from "../assets/CV-Christophe-SAUR.pdf";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
        <div className="relative inline-block text-left ">
          <div className="">
            <button
              type="button"
              className="inline-flex w-full m-auto gap-x-1.5 rounded-md bg-neutral-900 px-2 py-1 text-sm font-semibold text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-300 hover:text-neutral-900 "
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <span className="fi fi-gb fis m-auto"></span>
              EN
              <svg
                className="-mr-1 m-auto h-2 w-2 text-neutral-300"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Account settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Support
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                License
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
