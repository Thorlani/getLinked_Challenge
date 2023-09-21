import React from "react";
import Subtext from "../../atom/subtext";
import Btn from "../../atom/button";

const Secure = () => {
  return (
    <div className="w-full h-fit px-[4%] py-[8%] bg-[#261d45]/20 flex flex-col lg:flex-row items-end overflow-x-clip relative">
      <div className="w-full h-full absolute z-10 ">
        <img
          src="/public/icons/sata gra.png"
          alt="sata icon"
          className="absolute left-[20%] top-[5%]  object-contain"
        />
        <img
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
        />
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row lg:gap-10 items-end relative z-10">
        <div className="w-full lg:w-[50%] h-fit flex flex-col gap-[3rem] relative">
          <div>
            <Subtext
              width="300"
              whiteText="Privacy Policy and "
              pinkText="Terms"
            />
            <p className="font-montserrat mt-[1rem] text-white/70 text-sm max-w-[342px] leading-[27.76px]">
              Last updated on September 12, 2023
            </p>
          </div>
          <p className="font-montserrat text-white text-sm max-w-[438px] leading-[27.76px]">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className="w-full h-fit border-strong-pink bg-[#D434FE1F] border-1 rounded-lg relative p-[8%] flex flex-col gap-6">
            <p className="font-montserrat text-white text-sm max-w-[425px] leading-[27.76px]">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h5 className="font-montserrat text-base text-strong-pink font-bold">
                  Licensing Policy
                </h5>
                <h5 className="font-montserrat text-base font-bold">
                  Here are terms of our Standard License:
                </h5>
              </div>
              <ul className="flex flex-col gap-5">
                <li className="w-full h-fit flex justify-between items-start">
                  <img
                    src="/public/icons/mark.png"
                    alt="mark icon"
                    className="mt-1"
                  />
                  <p className="font-montserrat text-white text-sm max-w-[4o1px] leading-[27.76px] ml-3">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </li>
                <li className="flex justify-between items-start">
                  <img src="/public/icons/mark.png" alt="mark icon" />
                  <p className="font-montserrat text-white text-sm max-w-[4o1px] leading-[27.76px] ml-3">
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </li>
              </ul>
              <div className="w-full h-fit flex justify-center items-center">
                <Btn text="Read More" width="w-[142px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-fit relative bg-secured bg-no-repeat bg-top">
          <img
            src="/public/images/policies.png"
            alt="A man standing on a padlock"
          />
        </div>
      </div>
    </div>
  );
};

export default Secure;
