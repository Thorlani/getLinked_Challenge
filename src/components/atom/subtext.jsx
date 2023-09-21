import React from "react";

const Subtext = (props) => {
  return (
    <h1 className={`max-w-[${props.width}px] font-clash-display font-bold text-white text-3xl`}>
      {props.whiteText}<span className="text-strong-pink">{props.pinkText}</span>
    </h1>
  );
};

export default Subtext;
