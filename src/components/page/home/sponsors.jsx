import React from "react";
import Subtext from "../../atom/subtext";
import SataGra from "../../../assets/icons/sata gra.png";
import Star1 from "../../../assets/icons/star1.png";
import Star4 from "../../../assets/icons/star4.png";
import Sliver from "../../../assets/icons/sliver.png";
import Gold from "../../../assets/icons/gold.png";
import Bronze from "../../../assets/icons/bronze.png";
import Flare from "../../../assets/images/flare.png";
import Sponsor from "../../../assets/images/sponsors.png";

const Sponsors = () => {
  return (
    <>
      <div className="w-full h-fit p-[4%] py-[8%] flex flex-col items-center overflow-x-clip relative">
        <img
          src={Flare}
          alt="A flare image"
          className="absolute z-10 top-[-10%] lg:top-[-8%] left-[0%] lg:left-[-8%] w-[640px] h-[640px] object-contain"
        />
        <img
          src={Flare}
          alt="A flare image"
          className="absolute z-10 top-[20%] lg:top-[48%] right-[-64%] lg:right-[-28%] w-[640px] h-[640px] object-contain"
        />
        <div className="w-full h-fit flex flex-col items-center relative z-20">
          <div className="flex flex-col justify-center items-center">
            <Subtext
              width="138"
              whiteText="Partners and Sponsors"
              pinkText=""
            />
            <p className="font-montserrat text-white text-sm max-w-[452px] text-center leading-[27.76px]">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
          <div className="w-fit h-fit p-[8%] border-strong-pink rounded border-1 mt-12">
            <img
              src={Sponsor}
              alt="list of GetLinked Hackathon sponsors"
              className=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Sponsors;
