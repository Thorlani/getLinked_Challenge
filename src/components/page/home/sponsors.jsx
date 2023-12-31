import React from "react";
import Subtext from "../../atom/subtext";
import SataGra from "../../../assets/icons/sata gra.png";
import Star1 from "../../../assets/icons/star1.png";
import Flare from "../../../assets/images/flare.png";
import Sponsor from "../../../assets/images/sponsors.png";
import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <>
      <div className="w-full h-fit px-[4%] py-[10%] lg:py-[8%] flex flex-col items-center overflow-x-clip relative">
        <img
          src={Flare}
          alt="A flare image"
          className="absolute z-10 top-[-10%] lg:top-[-8%] left-[0%] lg:left-[-8%] w-[640px] h-[640px] object-contain"
        />
        <img
          src={Star1}
          alt="A star icon"
          className="absolute z-10 top-[77%] left-[56%]  w-4 lg:w-[20px] object-contain"
        />
        <img
          src={SataGra}
          alt="A sata icon"
          className="absolute z-10 top-[40%] left-[56%]  w-4 lg:w-[15px] object-contain"
        />
        <img
          src={SataGra}
          alt="A sata icon"
          className="absolute z-10 top-[26%] left-[15%]  w-4 lg:w-[20px] object-contain"
        />
        <img
          src={Flare}
          alt="A flare image"
          className="absolute z-10 top-[20%] lg:top-[48%] right-[-64%] lg:right-[-28%] w-[640px] h-[640px] object-contain"
        />
        <div className="w-full h-fit flex flex-col items-center relative z-20">
          <div className="flex flex-col justify-center items-center">
            <Subtext
              width="138"
              whiteText="Partners and Sponsors"
              pinkText=""
            />
            <motion.p
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                delay: 0.5,
                duration: 1,
              }}
              className="font-montserrat text-white text-sm max-w-[452px] text-center leading-[27.76px]"
            >
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </motion.p>
          </div>
          <div className="w-fit h-fit p-[8%] border-strong-pink rounded border-1 mt-12">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                delay: 0.5,
                duration: 1,
              }}
              src={Sponsor}
              alt="list of GetLinked Hackathon sponsors"
              className=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Sponsors;
