import React from "react";
import Subtext from "../../atom/subtext";
import Star1 from "../../../assets/icons/star1.png";
import Star2 from "../../../assets/icons/star2.png";
import Flare from "../../../assets/images/flare.png";
import Rule from "../../../assets/images/rules.png";
import { motion } from "framer-motion";

const Rules = () => {
  return (
    <>
      <div className="w-full h-fit px-[4%] py-[10%] lg:p-[4%] flex flex-col-reverse lg:flex-row items-center overflow-x-clip">
        <div className="w-full lg:w-[50%] h-fit relative z-20 flex flex-col  justify-center items-center lg:justify-start lg:items-start">
          <img
            src={Flare}
            alt="flare"
            className="absolute z-10 opacity-40 object-cover left-[-10rem] lg:left-0 top-[-170%] lg:top-[-120%] "
          />
          <img
            src={Star2}
            alt="star icon"
            className="absolute w-4 lg:w-fit z-20 top-[2.25rem] lg:-top-5 right-[2%] lg:right-[50%]"
          />
          <img
            src={Star1}
            alt="star icon"
            className="absolute z-20 top-[98%] lg:top-[90%] right-[80%] lg:right-[4%] w-4 lg:w-[20px] object-contain"
          />
          <Subtext
            width="max-w-[107px] lg:max-w-[170px]"
            whiteText="Rules and "
            pinkText="Guidelines"
          />
          <motion.p
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              delay: 0.5,
              duration: 1,
            }}
            className="text-center lg:text-left text-white font-montserrat text-[13px] lg:text-sm max-w-[300px] lg:max-w-[520px] leading-[27.5px]"
          >
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </motion.p>
        </div>
        <div className="w-full lg:w-[50%] h-fit relative z-20">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              delay: 0.2,
              duration: 1,
            }}
            src={Rule}
            alt="A sitting lady image"
          />
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
