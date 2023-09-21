import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-fit py-[4%] px-[8%] grid grid-cols-[1.5fr_.6fr_.6fr] items-start">
      <div>
        <h2 className="text-white text-4xl font-clash-display">
          get<span className="text-strong-pink">Linked</span>
        </h2>
        <p className="font-montserrat text-xs max-w-[412px] leading-[27.76px]">
          Getlinked Tech Hackathon is a technology innovation program
          established by a group of organizations with the aim of showcasing
          young and talented individuals in the field of technology
        </p>

        <div className="flex gap-3 items-center text-xs mt-[60px]">
          <p>Terms</p>
          <span className="w-[2px] h-[16px] bg-strong-pink"></span>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-strong-pink text-sm font-semibold font-montserrat">
          Useful Links
        </h2>
        <ul className="text-xs font-normal font-montserrat leading-[20.688px] flex flex-col gap-3">
          <li>Overview</li>
          <li>Timeline</li>
          <li>Faq</li>
          <li>Register</li>
          <li>
            <span className="text-strong-pink">Follow us</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-strong-pink text-sm font-semibold font-montserrat">
          Contact Us
        </h2>
        <ul className="text-xs font-normal font-montserrat leading-[20.688px] flex flex-col gap-3">
          <li>Overview</li>
          <li>Timeline</li>
          <li>Faq</li>
          <li>Register</li>
          <li>
            <span className="text-strong-pink">Follow us</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
