import React from "react";
import { logo, menu, close } from "../images/index";
import { navLinks } from "../constant";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-darkBlueIntro flex justify-between items-center md:px-[5rem] py-[2rem]">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="list-none pr-[2rem] sm:flex hidden">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`text-White font-OpenSans  text-[16px] cursor-pointer ${
                index === navLinks.length - 1 ? "mr-0" : "mr-5"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='sm:hidden flex'>
        <img
          src={toggle ? close : menu}
          alt=""
          onClick={() => setToggle((prev) => !prev)}
          className='mr-5 cursor-pointer'
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-darkBlueMain
          absolute top-20 right-0 mx-4 my-2 min-w-[100%] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col justify-end item-center flex-1'>
      {navLinks.map((nav,index) => (
        <li
        key={nav.id}
        className={`font-poppins
        font-normal
        cursor-pointer text-[16px]
        text-center
        text-white ${index === navLinks.length - 1
         ? 'mr-0' : 'mb-4'}`}
        >
          <a href={`#${nav.id}`}>
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

export default Navbar;
