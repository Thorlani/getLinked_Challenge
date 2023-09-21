import React from "react";
import Btn from "../../atom/button";

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-[90vh] flex items-center flex-col px-[4%] pt-4">
        <div className="w-full h-[10vh] flex justify-end">
          <img
            src="/public/icons/star1.png"
            alt="Star"
            className="absolute w-[20px] object-contain left-[9%] top-[27%]"
          />
          <img
            src="/public/icons/star2.png"
            alt="Star"
            className="absolute w-[20px] object-contain left-[59%] top-[32%]"
          />
          <img
            src="/public/icons/star3.png"
            alt="Star"
            className="absolute w-[20px] object-contain left-[35%] top-[87%]"
          />
          <div className="flex flex-col items-center lg:items-end">
            <h2 className="text-[#fff] italic font-bold text-3xl font-clash-display">
              Igniting a Revolution in HR Innovation
            </h2>
            <svg
              width="255"
              height="17"
              viewBox="0 0 255 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                stroke="#FF26B9"
                stroke-width="5"
              />
            </svg>
          </div>
        </div>
        <div className="w-full h-[80vh] flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-[50%] h-full flex flex-col justify-center relative">
            <img
              src="/public/images/flare.png"
              alt="purple flare"
              className="absolute z-10 opacity-40 object-contain top-[-60%] right-[-100px]"
            />
            <div className="relative flex z-20">
              <h1 className="text-white font-bold text-7xl font-clash-display">
                getlinked Tech
              </h1>
              <div>
                <img
                  src="/public/icons/bob.png"
                  alt="bob"
                  className="absolute w-[40px] object-contain right-20 -top-10"
                />
              </div>
            </div>
            <div className="relative flex">
              <h1 className="text-white  font-bold text-7xl font-clash-display">
                Hackathon <span className="text-strong-pink">1.0</span>
              </h1>
              <div>
                <img
                  src="/public/icons/chain.png"
                  alt="chain"
                  className="absolute w-[70px] object-contain -right-8 top-1"
                />
                <img
                  src="/public/icons/blast.png"
                  alt="blast"
                  className="absolute w-[50px] object-contain right-[-100px] top-2"
                />
              </div>
            </div>
            <p className="text-white font-montserrat text-lg max-w-[470px] mt-2 leading-[33.2px]">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div className=" mt-10">
              <Btn text="Register" width="w-[172px]" />
            </div>
            <div className="flex font-normal w-[250px] mt-11 justify-between font-unica text-6xl text-white">
              <p>
                00<span className="text-sm">H</span>
              </p>
              <p>
                00<span className="text-sm">M</span>
              </p>
              <p>
                00<span className="text-sm">S</span>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[50%] h-full relative">
            <div className="w-full h-full relative z-20 bg-hero-section bg-center bg-no-repeat bg-contain"></div>
            <img
              src="/public/images/stars.png"
              alt="stars"
              className="absolute z-30 w-[90%] h-[90%] object-contain top-0 left-0"
            />
            <img
              src="/public/images/flare.png"
              alt="purple flare"
              className="absolute z-20 w-[120%] h-[120%] object-contain top-[-100px] right-[-100px]"
            />
            <img
              src="/public/images/metrix.png"
              alt="purple flare"
              className="absolute z-10 w-[120%] object-contain top-0"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default HeroSection;
