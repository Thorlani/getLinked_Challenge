import React from "react";
import { InstaIcon } from "../../../assets/insta";
import { TwitterIcon } from "../../../assets/twitter";
import { FacebookIcon } from "../../../assets/facebook";
import { LinkedInIcon } from "../../../assets/linkedIn";
import ContactForm from "./contactForm";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../../assets/icons/backIcon.png";
import Star1 from "../../../assets/icons/star1.png";
import Sata from "../../../assets/icons/sata.png";
import SataGra from "../../../assets/icons/sata gra.png";
import Star2 from "../../../assets/icons/star2.png";
import Star3 from "../../../assets/icons/star3.png";
import Flare from "../../../assets/images/flare.png";

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full relative p-[8%] overflow-clip">
      {/* This div is the background that has the stars */}
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <img
          src={Sata}
          alt="Sata"
          className="absolute w-4 lg:w-[20px] object-contain left-[53%] lg:left-[9%] top-[8%] lg:top-[12%]"
        />
        <img
          src={Star2}
          alt="Star"
          className="absolute w-[20px] object-contain left-[90%] top-[18%] lg:top-[5%]"
        />
        <img
          src={Star1}
          alt="Star"
          className="absolute w-5 lg:w-[25px] object-contain left-[95%] top-[90%]"
        />
        <img
          src={SataGra}
          alt="Star"
          className="absolute w-5 lg:w-[25px] object-contain left-[9%] lg:left-[49%] top-[77%] lg:top-[67%]"
        />
        <img
          src={Flare}
          alt="purple flare"
          className="absolute z-10 opacity-40 object-contain top-[0%] right-[-550px]"
        />
        <img
          src={Flare}
          alt="purple flare"
          className="absolute z-10 opacity-40 object-contain top-0 lg:top-[-20%] left-[-50px] lg:left-[-200px]"
        />
      </div>
      <div className="w-full h-full relative z-20 flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div
          onClick={() => navigate("/")}
          className="mb-[40px] ml-[7px] block lg:hidden"
        >
          <img src={BackIcon} alt="Back icon" className="w-[23px] h-[23px]" />
        </div>
        <div className="w-full lg:w-[50%] h-full hidden lg:flex flex-col gap-[17px]">
          <h2 className="font-clash-display text-3xl font-semibold text-strong-pink">
            Get in Touch
          </h2>
          <ul className="flex flex-col gap-[17px] font-montserrat">
            <li className="max-w-[96px]">Contact Information</li>
            <li className="max-w-[119px]">
              27,Alara Street Yaba 100012 Lagos State
            </li>
            <li>Call Us : 07067981819</li>
            <li className="max-w-[272px]">
              we are open from Monday-Friday 08:00am - 05:00pm
            </li>
            <li className="mt-[8px] flex flex-col gap">
              <span className=" text-strong-pink">Share on</span>
              <div className="flex items-center gap-4">
                <InstaIcon />
                <TwitterIcon />
                <FacebookIcon />
                <LinkedInIcon />
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[50%] h-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
