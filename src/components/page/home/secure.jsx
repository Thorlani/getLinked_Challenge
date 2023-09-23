import React from "react";
import Subtext from "../../atom/subtext";
import Btn from "../../atom/button";
import Flare from "../../../assets/images/flare.png";
import Star4 from "../../../assets/icons/star4.png";
import Star1 from "../../../assets/icons/star1.png";
import SataGra from "../../../assets/icons/sata gra.png";
import Mark from "../../../assets/icons/mark.png";
import Policies from "../../../assets/images/policies.png";
import { motion } from "framer-motion";

const Secure = () => {
  return (
    <div className="w-full h-fit px-[4%] py-[10%] lg:p-[4%] bg-[#261d45]/20 flex flex-col lg:flex-row items-end overflow-x-clip relative">
      <div className="w-full h-full absolute z-10 ">
        <img
          src={Star4}
          alt="star icon"
          className="absolute left-[32%] top-[18%] w-[18px]  object-contain"
        />
        <img
          src={SataGra}
          alt="sata icon"
          className="absolute left-[42%] top-[33%] w-[20px]  object-contain"
        />
        <img
          src={Star1}
          alt="star icon"
          className="absolute left-[82%] top-[40%] w-[15px]  object-contain"
        />
        <img
          src={SataGra}
          alt="sata icon"
          className="absolute z-20 left-[62%] top-[63%] w-[15px]  object-contain"
        />
        <img
          src={Star1}
          alt="star icon"
          className="absolute z-20 left-[57%] top-[73%] w-[15px]  object-contain"
        />
        <img
          src={Star4}
          alt="star icon"
          className="absolute z-20 left-[93%] top-[85%] w-[20px]  object-contain"
        />
        <img
          src={SataGra}
          alt="sata icon"
          className="absolute left-[-2%] top-[83%] w-[15px]  object-contain"
        />
        <img
          src={Flare}
          alt="A flare image"
          className="absolute z-10 top-[20%] lg:top-[48%] right-[-64%] lg:left-[-28%] w-[640px] h-[640px] object-contain"
        />

        {/* <img
          src="/public/icons/sata gra.png"
          alt="sata icon"
          className="absolute left-[72.7%] top-[22.5%] w-[20px]  object-contain"
        />
        <img
          src="/public/icons/star1.png"
          alt="sata icon"
          className="absolute left-[56%] top-[35%] w-[15px] object-contain"
        />
        <img
          src="/public/icons/star1.png"
          alt="sata icon"
          className="absolute left-[94%] top-[40%] w-[15px] object-contain"
        />
        <img
          src="/public/icons/star4.png"
          alt="sata icon"
          className="absolute left-[82%] top-[90%] w-[15px] object-contain"
        />
        <img
          src="/public/icons/star1.png"
          alt="sata icon"
          className="absolute left-[20%] top-[86.3%] w-[15px] object-contain"
        /> */}
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row lg:gap-10 items-end relative z-20">
        <div className="w-full lg:w-[50%] h-fit flex flex-col justify-center items-center lg:justify-start lg:items-start gap-7 lg:gap-[3rem] relative">
          <div className="w-full flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <Subtext
              width="max-w-[188px] lg:max-w-[300px]"
              whiteText="Privacy Policy and "
              pinkText="Terms"
            />
            <motion.p
              initial={{ opacity: 0.6, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: "linear",
                duration: 1,
              }}
              className="font-montserrat lg:mt-[1rem] text-white/70 text-sm max-w-[342px] leading-[27.76px]"
            >
              Last updated on September 12, 2023
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0.6, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
            className="font-montserrat text-white text-[13px] lg:text-sm max-w-[316px] lg:max-w-[438px] text-center lg:text-left leading-[27.76px]"
          >
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </motion.p>
          <div className="w-full h-fit border-strong-pink bg-[#D434FE1F] border-1 rounded-lg relative p-[8%] flex flex-col gap-6 justify-center items-center lg:justify-start lg:items-start">
            <motion.p
              initial={{ opacity: 0.6, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                ease: "linear",
                duration: 1,
              }}
              className="font-montserrat text-white text-[13px] lg:text-sm max-w-[270px] lg:max-w-[425px] text-center lg:text-left leading-[25.968px] lg:leading-[27.76px]"
            >
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </motion.p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h5 className="font-montserrat text-[13px] lg:text-base text-strong-pink font-bold">
                  Licensing Policy
                </h5>
                <h5 className="font-montserrat text-[12px] lg:text-base font-bold">
                  Here are terms of our Standard License:
                </h5>
              </div>
              <ul className="flex flex-col gap-5">
                <motion.li
                  initial={{ opacity: 0.6, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "linear",
                    duration: 1,
                  }}
                  className="w-full h-fit flex justify-between items-start"
                >
                  <img src={Mark} alt="mark icon" className="mt-1" />
                  <p className="font-montserrat text-white text-[12px] lg:text-sm max-w-[218px] lg:max-w-[401px] leading-[27.76px] ml-[14px] lg:ml-3">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0.6, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "linear",
                    duration: 1,
                  }}
                  className="flex justify-between items-start"
                >
                  <img src={Mark} alt="mark icon" />
                  <p className="font-montserrat text-white text-sm max-w-[218px] lg:max-w-[401px] leading-[27.76px] ml-[14px] lg:ml-3">
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </motion.li>
              </ul>
              <div className="w-full h-fit flex justify-center items-center">
                <Btn text="Read More" width="w-[142px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-fit relative bg-secured bg-no-repeat bg-contain">
          <motion.img
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              delay: 0.1,
              duration: 1,
            }}
            src={Policies}
            alt="A man standing on a padlock"
          />
        </div>
      </div>
    </div>
  );
};

export default Secure;
