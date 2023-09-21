import React from "react";
import Subtext from "../../atom/subtext";

const Award = () => {
  return (
    <div className="w-full h-fit px-[4%] py-[8%] flex flex-col lg:flex-row items-center justify-center overflow-x-clip relative">
      <div className="w-full h-full absolute z-10">
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
      <div className="w-full h-full relative z-20 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%] h-fit relative">
          <img src="/public/images/flare.png" alt="An award image" className="absolute z-10 top-[-18%] left-[8%]" />
          <img src="/public/images/award.png" alt="An award image" className="relative z-20" />
        </div>
        <div className="w-full lg:w-[50%] h-fit relative">
        <img src="/public/images/flare.png" alt="An award image" className="absolute z-10 top-[48%] left-[88%]" />
          <div className="max-w-[174px]">
            <Subtext whiteText="Prizes and " pinkText="Rewards" width="174" />
          </div>
          <p className="max-w-[361px] font-montserrat text-sm mt-3">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
          <img
            src="/public/icons/gold.png"
            alt="gold medal"
            className="absolute top-[24%] left-[28.5%] w-[250px] h-[250px] object-cover z-20"
          />
          <div className="w-full h-fit grid grid-cols-3 gap-5 mt-[180px] relative z-10">
            <div className="w-full h-[266px] border-strong-pink bg-[#D434FE1F] border-1 rounded-lg relative px-[4%] py-[16%] flex flex-col justify-end items-center">
              <img
                src="/public/icons/sliver.png"
                alt="sliver medal"
                className="absolute top-[-28%] w-[179px] object-contain "
              />
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-3xl font-montserrat font-bold">2nd</h4>
                <p className="text-2xl font-montserrat font-semibold">Runner</p>
                <p className="text-2xl font-montserrat font-semibold text-strong-pink">
                  N300,000
                </p>
              </div>
            </div>
            <div className="w-full h-[266px] mt-[8%] border-purple bg-[#903AFF1F] border-1 rounded-lg relative px-[4%] py-[16%] flex flex-col justify-end items-center">
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-4xl font-montserrat font-bold">1st</h4>
                <p className="text-2xl font-montserrat font-semibold">Runner</p>
                <p className="text-2xl font-montserrat font-bold text-purple">
                  N400,000
                </p>
              </div>
            </div>
            <div className="w-full h-[266px] border-strong-pink bg-[#D434FE1F] border-1 rounded-lg relative px-[4%] py-[16%] flex flex-col justify-end items-center">
              <img
                src="/public/icons/bronze.png"
                alt="bronze medal"
                className="absolute top-[-28%] w-[179px] object-contain "
              />
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-3xl font-montserrat font-bold">3nd</h4>
                <p className="text-2xl font-montserrat font-semibold">Runner</p>
                <p className="text-2xl font-montserrat font-bold text-strong-pink">
                  N150,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
