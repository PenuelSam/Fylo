import React from "react";
import {  illustration } from "../images";
const Hero = () => {
  return (
    <div className="bg-darkBlueIntro flex flex-col justify-center items-center">
      <img src={illustration} alt="" className="max-w-{100%}" />
      <div className="relative z-[5] sm:mt-0 mt-[3rem]">
        <h1 className="text-White text-center sm:mt-[1.5rem] mt-[3rem] font-Raleway font-[700] sm:text-[40px] text-[30px]">
          All your files in one secure location,{" "}
          <br className="sm:flex hidden" /> accessible anywhere.
        </h1>
        <p className=" mx-auto text-White text-center   font-Raleway font-[300]  text-[18px]">
          Fylo stores all your most important files in one secure location.{" "}
          <br className="sm:flex hidden" /> Access them whether you need, share
          and collaborate with <br className="sm:flex hidden" /> friends,
          family, and co-workers.
        </p>

        <button className="bg-cyan sm:mx-[15rem] ml-[5rem] my-[1rem] px-[5rem] text-center rounded-full py-[10px]  text-White">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
