import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap flex-row items-center justify-center gap-4  ">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-bounce ">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-bounce">
          <FaJava className="text-7xl text-red-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-bounce">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-bounce">
          <FaPython className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-bounce">
          <FaPhp className="text-7xl text-blue-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-bounce">
          <SiMysql className="text-7xl text-orange-400" />
        </div>
      </div>
    </div>
  );
};
