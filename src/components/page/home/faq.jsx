import React from "react";
import Subtext from "../../atom/subtext";
import Drop from "../../atom/accordian";
import Sata from "../../../assets/icons/sata.png";
import Star4 from "../../../assets/icons/star4.png";
import Star1 from "../../../assets/icons/star1.png";
import Question1 from "../../../assets/icons/question1.png";
import Question2 from "../../../assets/icons/question2.png";
import SataGra from "../../../assets/icons/sata gra.png";
import FaqImage from "../../../assets/images/faq.png";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <>
      <div className="w-full h-fit p-[4%] pt-[8%] flex flex-col lg:flex-row items-center overflow-x-clip">
        <div className="w-full lg:w-[50%] h-fit relative flex flex-col justify-center items-center lg:justify-start lg:items-start mb-[7rem] lg:mb-0">
          <img
            src={Sata}
            alt="sata icon"
            className="absolute left-[-2%] top-[-9%]"
          />
          <Subtext
            width="max-w-[158px] lg:max-w-[253px]"
            whiteText="Frequently Ask "
            pinkText="Question"
          />
          <motion.p
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              delay: 0.5,
              duration: 1,
            }}
            className="font-montserrat mt-[1rem] text-white text-[13px] lg:text-sm max-w-[316px] lg:max-w-[342px] text-center lg:text-left leading-[27.76px]"
          >
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </motion.p>
          <Drop />
        </div>
        <div className="w-full lg:w-[50%] h-fit relative">
          <motion.img
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              delay: 0.1,
              duration: 1,
            }}
            src={FaqImage}
            alt="a man sitting on the cloud"
            className="mt-5"
          />
          <img
            src={SataGra}
            alt="sata gra icon"
            className="absolute left-[20%] top-[21%] w-[15px] object-contain"
          />
          <img
            src={Star4}
            alt="sata icon"
            className="absolute left-[12%] top-[49%] w-[15px] object-contain"
          />
          <img
            src={Star1}
            alt="sata icon"
            className="absolute left-[72%] top-[94%] w-[20px] object-contain"
          />
          <img
            src={SataGra}
            alt="sata icon"
            className="absolute left-[51%] top-[-4%] w-[15px] object-contain"
          />
          <motion.img
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              delay: 0.5,
              duration: 1,
            }}
            src={Question1}
            alt="question"
            className="absolute left-[36%] top-[-13%]"
          />
          <motion.img
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              delay: 0.5,
              duration: 1,
            }}
            src={Question2}
            alt="question"
            className="absolute left-[14%] top-[-9%]"
          />
          <motion.img
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              delay: 0.5,
              duration: 1,
            }}
            src={Question2}
            alt="question"
            className="absolute left-[60%] top-[-9%]"
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Faq;
