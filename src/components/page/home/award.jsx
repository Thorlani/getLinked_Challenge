import React from "react";
import Subtext from "../../atom/subtext";
import SataGra from "../../../assets/icons/sata gra.png";
import Star1 from "../../../assets/icons/star1.png";
import Star4 from "../../../assets/icons/star4.png";
import Sliver from "../../../assets/icons/sliver.png";
import Gold from "../../../assets/icons/gold.png";
import Bronze from "../../../assets/icons/bronze.png";
import Flare from "../../../assets/images/flare.png";
import AwardImage from "../../../assets/images/award.png";
import { motion } from "framer-motion";

const Award = () => {
  return (
    <div className="w-full h-fit px-[4%] py-[8%] flex flex-col items-center justify-center overflow-x-clip relative">
      <div className="w-full h-full absolute z-10">
        <img
          src={SataGra}
          alt="sata icon"
          className="absolute w-4 lg:w-fit left-[20%] top-[5%]  object-contain"
        />
        <img
          src={SataGra}
          alt="sata icon"
          className="absolute left-[72.7%] top-[22.5%] w-4 lg:w-[20px]  object-contain"
        />
        <img
          src={Star1}
          alt="star icon"
          className="absolute left-[56%] top-[35%] w-4 lg:w-[15px] object-contain"
        />
        <img
          src={Star1}
          alt="star icon"
          className="absolute left-[94%] top-[40%] w-4 lg:w-[15px] object-contain"
        />
        <img
          src={Star4}
          alt="star icon"
          className="absolute left-[82%] top-[90%]  w-4 lg:w-[15px] object-contain"
        />
        <img
          src={Star1}
          alt="star icon"
          className="absolute left-[20%] top-[86.3%]  w-4 lg:w-[15px] object-contain"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center lg:justify-end lg:items-end relative z-30">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <Subtext
            whiteText="Prizes and "
            pinkText="Rewards"
            width="max-w-[174px]"
          />
          <motion.p
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              delay: 0.5,
              duration: 1,
            }}
            className="max-w-[277px] lg:max-w-[361px] text-center lg:text-left font-montserrat text-sm mt-3"
          >
            Highlight of the prizes or rewards for winners and for participants.
          </motion.p>
        </div>
      </div>
      <div className="w-full h-full relative z-20 flex flex-col lg:flex-row mt-10 lg:mt-0">
        <div className="w-full lg:w-[50%] h-fit relative">
          <img
            src={Flare}
            alt="A flare image"
            className="absolute z-10 top-[-18%] left-[8%]"
          />
          <img
            src={AwardImage}
            alt="An award image"
            className="relative z-20"
          />
        </div>
        <div className="w-full lg:w-[50%] h-fit relative">
          <img
            src={Flare}
            alt="An award image"
            className="absolute z-10 top-[48%] left-[88%]"
          />
          <img
            src={Gold}
            alt="gold medal"
            className="absolute top-[32%] lg:top-[11%] left-[30.5%] lg:left-[28.5%] w-[125px] lg:w-[250px] h-[125px] lg:h-[250px] object-cover z-20"
          />
          <div className="w-full h-fit grid grid-cols-3 gap-5 mt-[180px] relative z-10">
            <div className="w-[90px] lg:w-full h-[126px] lg:h-[266px] border-strong-pink bg-[#D434FE1F] border-1 rounded-lg relative px-[4%] py-[16%] flex flex-col justify-end items-center">
              <img
                src={Sliver}
                alt="sliver medal"
                className="absolute top-[-42%] lg:top-[-28%]  w-[179px] object-contain "
              />
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-xs lg:text-3xl font-montserrat font-bold">
                  2nd
                </h4>
                <p className="text-xs lg:text-2xl font-montserrat font-semibold">
                  Runner
                </p>
                <p className="text-sm lg:text-2xl font-montserrat font-semibold text-strong-pink">
                  N300,000
                </p>
              </div>
            </div>
            <div className="w-[90px] lg:w-full h-[126px] lg:h-[266px] mt-[8%] border-purple bg-[#903AFF1F] border-1 rounded-lg relative px-[4%] py-[16%] flex flex-col justify-end items-center">
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-sm lg:text-4xl font-montserrat font-bold">
                  1st
                </h4>
                <p className="text-xs lg:text-2xl font-montserrat font-semibold">
                  Runner
                </p>
                <p className="text-sm lg:text-2xl font-montserrat font-bold text-purple">
                  N400,000
                </p>
              </div>
            </div>
            <div className="w-[90px] lg:w-full h-[126px] lg:h-[266px] border-strong-pink bg-[#D434FE1F] border-1 rounded-lg relative px-[4%] py-[16%] flex flex-col justify-end items-center">
              <img
                src={Bronze}
                alt="bronze medal"
                className="absolute top-[-42%] lg:top-[-28%] w-[179px] object-contain "
              />
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-xs lg:text-3xl font-montserrat font-bold">
                  3nd
                </h4>
                <p className="text-xs lg:text-2xl font-montserrat font-semibold">
                  Runner
                </p>
                <p className="text-sm lg:text-2xl font-montserrat font-bold text-strong-pink">
                  N150,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
