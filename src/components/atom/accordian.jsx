import React from "react";
import { PlusIcon } from "../../assets/plus";
import { motion } from "framer-motion";

const Drop = () => {
  return (
    <div className="mt-[4rem] text-[13px] max-w-[316px] lg:max-w-[342px]">
      <ul className="flex flex-col gap-6">
        <motion.li
          initial={{ opacity: 0.6, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className=" cursor-pointer"
        >
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-sm leading-[27.76px]">
              Can I work on a project I started before the hackathon?
            </p>
            <PlusIcon />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0.6, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className=" cursor-pointer"
        >
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-[13px] lg:text-sm leading-[27.76px]">
              What happens if I need help during the hackathon?
            </p>
            <PlusIcon />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0.6, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className=" cursor-pointer"
        >
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-[13px] lg:text-sm leading-[27.76px]">
              What happens if I don't have an idea for a project?
            </p>
            <PlusIcon />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0.6, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className=" cursor-pointer"
        >
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-[13px] lg:text-sm leading-[27.76px]">
              Can I join a team or do I have to come with one?
            </p>
            <PlusIcon />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0.6, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className=" cursor-pointer"
        >
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-[13px] lg:text-sm leading-[27.76px]">
              What happens after the hackathon ends
            </p>
            <PlusIcon />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0.6, x: -140 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className=" cursor-pointer"
        >
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-[13px] lg:text-sm leading-[27.76px]">
              Can I work on a project I started before the hackathon?
            </p>
            <PlusIcon />
          </div>
        </motion.li>
      </ul>
    </div>
  );
};

export default Drop;
