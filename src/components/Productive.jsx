import React from "react";
import { illustration2, arrow } from "../images";

const Productive = () => {
  return (
    <div className="flex md:flex-row text-White py-[5rem] sm:px-[5rem] px-[2rem] flex-col justify-center items-center">
      <div className="flex-1">
        <img src={illustration2} alt="" className="max-w-{100%}" />
      </div>
      <div className="flex-1 sm:mx-[2rem] ">
        <h1 className="font-Raleway sm:mt-0 mt-5 text-start font-[700] sm:text-[40px] text-[30px]">Stay productive, <br className="sm:flex hidden" /> wherever you are</h1>
        <p className="font-Raleway  text-start  font-[400] my-5 text-[16px] sm:text-[20px]">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="font-Raleway text-start  font-[400] my-5 text-[16px] sm:text-[20px]">
          Securely share files and folders with friends, family and collegues
          for the collaboration. No email attachment required.
        </p>
        <div className="flex cursor-pointer gap-2   ">
          <h1 className="text-cyan hover:text-White font-Raleway font-[400] text-[16px]">
            See how Fylo works
          </h1>
          <img src={arrow} alt="" />
        </div>
        <hr className="sm:w-[32%] w-[52%] h-0 bg-cyan hover:bg-White" />
      </div>
    </div>
  );
};

export default Productive;
