import React from "react";

import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="nav flex justify-between items-center w-full py-6">
      <img src={logo} alt="hoo bank" className="w-[124px] h-[32px]" />
      <ul className="sm:flex list-none  hidden  flex-1   justify-end items-center ">
        {navLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white gap-10 hover:text-secondary ${(idx =
              idx === navLinks.length - 1 ? "" : "mr-10")}`}
          >
            <a href={`#${nav.id}`} className="">
              {nav.title}
            </a>
          </li>
        ))}
        ;
      </ul>
      <div className="sm:hidden flex items-center justify-end ">
        <img
          src={`${toggle ? close : menu}`}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar navbar-shadow`}
        >
          <ul className="flex list-none    flex-1   justify-end items-center flex-col ">
            {navLinks.map((nav, idx) => (
              <li
                key={nav.id}
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white gap-10 hover:text-secondary ${(idx =
                  idx === navLinks.length - 1 ? "" : "mb-4")}`}
              >
                <a href={`#${nav.id}`} className="">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
