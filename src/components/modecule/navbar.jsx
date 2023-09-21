import React from "react";
import Btn from "../atom/button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-between items-center pt-[43px] pb-[25px] px-[4%]">
        <h2 className="text-white text-4xl font-clash-display">
          get<span className="text-strong-pink">Linked</span>
        </h2>

        <div className="w-[54%] flex items-center justify-between">
          <ul className=" font-montserrat font-normal text-white w-[60%] flex justify-between items-center">
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
          <Btn text="Register" width="w-[172px]" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
