import React from "react";

const Subtext = (props) => {
  return (
    <h1 className={`${props.width} font-clash-display font-bold text-white text-[20px] lg:text-3xl text-center lg:text-left`}>
      {props.whiteText}<span className="text-strong-pink">{props.pinkText}</span>
    </h1>
  );
};

export default Subtext;
