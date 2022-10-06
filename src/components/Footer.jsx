import React from "react";
import { logo, location, phone, email, facebook, twitter, instagram } from "../images";
const Footer = () => {
  return (
    <div className="bg-darkBlueFooter  py-[10rem] px-[5rem]">
      <img src={logo} alt="" className="md:m-0 m-auto" />
      <div className="flex md:flex-row flex-col gap-[1rem] md:gap-[3rem] items-center">
        <div className="flex md:flex-row sm:flex-col flex-row mt-5 gap-5">
          <img src={location} alt="" className="w-[5%] h-[5%] m-auto"/>
          <p className="font-Raleway font-[400] text-White text-[16px] md:text-start sm:text-center text-start">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing  elit, sed do
            eiusmud tempor <br /> incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <div className="flex sm:mt-auto mt-[1rem] gap-1">
            <img src={phone} alt="" className="w-[15%] h-[15%]" />
            <span className=" font-Raleway text-White text-[14px]">+1-543-123-4567</span>
          </div>
          <div className="flex gap-1">
            <img src={email} alt="" className="w-[15%] h-[15%]"/>
            <span className=" font-Raleway text-White text-[14px]">expamle@fylo.com</span>
          </div>
        </div>

        <ul className="flex-1 font-Raleway mt-[2rem]  text-[18px] mb-[1rem] text-gray-300">
          <li className="hover:text-White cursor-pointer">About Us</li>
          <li className="hover:text-White cursor-pointer">Jobs</li>
          <li className="hover:text-White cursor-pointer">Press</li>
          <li className="hover:text-White cursor-pointer">Blog</li>
        </ul>

        <ul className="flex-1 font-Raleway mt-[1rem]  text-[18px] mb-[1rem] text-gray-300">
          <li className="hover:text-White cursor-pointer">Contact Us</li>
          <li className="hover:text-White cursor-pointer">Terms</li>
          <li className="hover:text-White cursor-pointer">Privacy</li>
        </ul>

        <div className="flex justify-between gap-[3rem] flex-1">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
