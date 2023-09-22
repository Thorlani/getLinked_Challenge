import React from "react";
import Subtext from "../../atom/subtext";
import Star1 from "../../../assets/icons/star1.png";
import Star2 from "../../../assets/icons/star2.png";
import Flare from "../../../assets/images/flare.png";
import Rule from "../../../assets/images/rules.png";

const Rules = () => {
  return (
    <>
      <div className="w-full h-fit px-[4%] py-[10%] lg:p-[4%] flex flex-col-reverse lg:flex-row items-center overflow-x-clip">
        <div className="w-full lg:w-[50%] h-fit relative z-20 flex flex-col  justify-center items-center lg:justify-start lg:items-start">
          <img
            src={Flare}
            alt="flare"
            className="absolute z-10 opacity-40 object-cover top-[-120%] "
          />
          <img
            src={Star2}
            alt="star icon"
            className="absolute z-20 -top-5 right-[50%]"
          />
          <img
            src={Star1}
            alt="star icon"
            className="absolute z-20 top-[90%] right-[4%] w-[20px] object-contain"
          />
          <Subtext width="max-w-[107px] lg:max-w-[170px]" whiteText="Rules and " pinkText="Guidelines" />
          <p className="text-center lg:text-left text-white font-montserrat text-[13px] lg:text-sm max-w-[300px] lg:max-w-[520px] leading-[27.5px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="w-full lg:w-[50%] h-fit relative z-20">
          <img src={Rule} alt="A sitting lady image" />
          <img
            src={Flare}
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
