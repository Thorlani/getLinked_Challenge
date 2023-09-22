import React from "react";
import { CallIcon } from "../../assets/call";
import { AddressIcon } from "../../assets/address";
import { InstaIcon } from "../../assets/insta";
import { TwitterIcon } from "../../assets/twitter";
import { FacebookIcon } from "../../assets/facebook";
import { LinkedInIcon } from "../../assets/linkedIn";
import Star4 from "../../assets/icons/star4.png";
import Star1 from "../../assets/icons/star1.png";
import SataGra from "../../assets/icons/sata gra.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-fit p-[10%] lg:py-[4%] lg:px-[8%] grid grid-cols-1 lg:grid-cols-[1.5fr_.6fr_.6fr] gap-5 gap-x-14 items-start relative">
        <div className="w-full h-full absolute z-10 ">
        <img
          src={Star1}
          alt="star icon"
          className="absolute left-[2%] top-[28%] w-[15px]  object-contain"
        />
        <img
          src={SataGra}
          alt="star icon"
          className="absolute left-[42%] top-[88%] w-[18px]  object-contain"
        />
        <img
          src={Star4}
          alt="star icon"
          className="absolute right-[30%] top-[24%] w-[15px]  object-contain"
        />
        <img
          src={Star1}
          alt="star icon"
          className="absolute right-[12%] top-[68%] w-[17px]  object-contain"
        />
        </div>
        <div>
          <h2 className="text-white text-[20px] lg:text-4xl font-clash-display">
            get<span className="text-strong-pink">Linked</span>
          </h2>
          <p className="font-montserrat text-xs max-w-[268px] lg:max-w-[412px] leading-[20.688px] lg:leading-[27.76px]">
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
            <li className="flex items-start gap-3">
              <span className="text-strong-pink">Follow us</span>
              <InstaIcon />
              <TwitterIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-strong-pink text-sm font-semibold font-montserrat">
            Contact Us
          </h2>
          <ul className="text-xs font-normal font-montserrat leading-[20.688px] flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <CallIcon />
              <p className="text-xs font-montserrat max-w-[89px]">
                +234 679 81819
              </p>
            </li>
            <li className="flex items-start gap-3">
              <AddressIcon />
              <p className="text-xs font-montserrat max-w-[89px]">
                27,Alara Street Yaba 100012 Lagos State
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-fit p-[2%] flex flex-col justify-center items-center">
        <p className="text-xs font-montserrat">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </>
  );
};

export default Footer;
