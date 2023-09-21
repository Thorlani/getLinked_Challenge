import React from "react";
import Subtext from "../../atom/subtext";
import Idea from "../../../assets/images/idea.png";
import Arrow from "../../../assets/icons/arrow.png";
import Sata from "../../../assets/icons/sata.png";
import StarPu from "../../../assets/icons/star-pu.png";

const Intro = () => {
  return (
    <>
      <div className="w-full h-fit p-[4%] flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-[50%] h-fit relative">
          <img src={Idea} alt="Idea image" />
          <img src={Arrow} alt="arrow icon" className="absolute right-10 -bottom-3" />
          <img src={Sata} alt="sata icon" className="absolute -left-6 top-[150px]" />
        </div>
        <div className="w-full lg:w-[50%] h-fit flex flex-col relative">
        <Subtext width="390" whiteText="Introduction to getlinked " pinkText="tech Hackathon 1.0" />
          <p className="text-white font-montserrat text-sm max-w-[520px] leading-[27.5px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img src={StarPu} alt="star pu icon" className="absolute right-20 w-5 object-contain top-[37px]" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Intro;
