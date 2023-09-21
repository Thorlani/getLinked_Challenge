import React from "react";
import Subtext from "../../atom/subtext";

const Rules = () => {
  return (
    <>
      <div className="w-full h-fit p-[4%] flex flex-col lg:flex-row items-center overflow-x-clip">
        <div className="w-full lg:w-[50%] h-fit relative z-20">
          <img
            src="/public/images/flare.png"
            alt="flare"
            className="absolute z-10 opacity-40 object-cover top-[-120%] "
          />
          <img
            src="/public/icons/star2.png"
            alt="star icon"
            className="absolute z-20 -top-5 right-[50%]"
          />
          <Subtext width="170" whiteText="Rules and " pinkText="Guidelines" />
          <p className="text-white font-montserrat text-sm max-w-[520px] leading-[27.5px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="w-full lg:w-[50%] h-fit relative z-20">
          <img src="/public/images/rules.png" alt="A sitting lady image" />
          <img
            src="/public/images/flare.png"
            alt="flare"
            className="absolute z-10 opacity-40 object-cover bottom-[-40%] right-[-60%] "
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Rules;
