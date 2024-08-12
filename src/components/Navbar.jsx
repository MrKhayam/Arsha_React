import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const links = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Team",
    "Pricing",
    "Dropdown",
    "Contact",
  ];

  const [isNav, setIsNav] = useState(false);
  const handleNav = () => {
    setIsNav(true);
  };
  const handleCross = () => {
    setIsNav(false);
  };
  return (
    <>
      <div
        className={`${isNav ? 'block' : 'hidden'} w-full lg:hidden h-screen fixed top-0 bg-[#0000009e] z-10`}
      >
        <IoCloseSharp onClick={handleCross} className="text-white text-3xl absolute top-2 right-2" />
        <div className="w-[94%] mx-auto rounded-md h-[93%] mt-10 bg-white">
          <ul className="flex flex-col p-3 w-full h-auto gap-4">
            {links.map((item, index) => {
              return (
                <li
                  className="text-black text-xl px-2 font-semibold hover:text-[#6493e3] cursor-pointer transition-all duration-300"
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="fixed w-full h-auto top-0">
        <div className="flex items-center h-auto py-6 justify-between w-[90%] md:w-[80%] overflow-hidden mx-auto text-white">
          <div className="logo md:text-2xl text-xl font-semibold">ARSHA</div>
          <div className="right flex items-center justify-between gap-9">
            <ul className="md:hidden lg:flex items-center gap-9 sm:hidden hidden ">
              {links.map((item, index) => {
                return (
                  <li
                    className="text-white font-semibold hover:text-[#6493e3] cursor-pointer transition-all duration-300"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-2 items-center">
              <button className="bg-[#6493e3] sm:px-8 px-4 py-1 sm:py-2 rounded-full">
                Get Started
              </button>
              <FaBars onClick={handleNav} className="lg:hidden block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
