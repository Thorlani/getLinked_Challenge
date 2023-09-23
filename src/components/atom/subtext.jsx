import React from "react";
import { motion } from "framer-motion";

const Subtext = (props) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      className={`${props.width} font-clash-display font-bold text-white text-[20px] lg:text-3xl text-center lg:text-left`}
    >
      {props.whiteText}
      <span className="text-strong-pink">{props.pinkText}</span>
    </motion.h1>
  );
};

export default Subtext;
