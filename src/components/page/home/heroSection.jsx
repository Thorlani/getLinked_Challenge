import React from "react";
import Btn from "../../atom/button";
import Star1 from "../../../assets/icons/star1.png";
import Star2 from "../../../assets/icons/star2.png";
import Star3 from "../../../assets/icons/star3.png";
import Bob from "../../../assets/icons/bob.png";
import Chain from "../../../assets/icons/chain.png";
import Blast from "../../../assets/icons/blast.png";
import Flare from "../../../assets/images/flare.png";
import Stars from "../../../assets/images/stars.png";
import Metrix from "../../../assets/images/metrix.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { cubicBezier, motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <hr />
      <div className="w-full h-[90vh] flex items-center flex-col px-[4%] pt-4">
        <div className="w-full h-[10vh] flex justify-end">
          <motion.img
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.6 }}
            transition={{
              ease: "linear",
              duration: 3,
              repeat: Infinity,
              alternate: true,
              delay: 0.5,
            }}
            src={Star1}
            alt="Star"
            className="absolute w-[20px] object-contain left-[9%] top-[2.3%]"
          />
          <img
            src={Star2}
            alt="Star"
            className="absolute w-[20px] object-contain left-[59%] top-[32%]"
          />
          <img
            src={Star3}
            alt="Star"
            className="absolute w-[20px] object-contain left-[35%] top-[87%]"
          />
          <div className="w-full flex flex-col">
            <motion.h2
              initial={{ x: 150 }}
              animate={{ x: 0 }}
              transition={{
                ease: "linear",
                duration: 1,
              }}
              className="italic font-bold md:text-xl lg:text-3xl font-clash-display text-center lg:text-right"
            >
              Igniting a Revolution in HR Innovation
            </motion.h2>
            <div className="w-full h-fit flex justify-end items-end">
              <motion.svg
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{
                  ease: "easeOut",
                  duration: 1,
                }}
                className="w-[115] lg:w-[255] h-[7px] lg:h-[17px] relative right-[47px] md:right-[175px] lg:right-0"
                viewBox="0 0 255 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                  stroke="#FF26B9"
                  stroke-width="5"
                />
              </motion.svg>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:h-[80vh] flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-[50%] h-full flex flex-col justify-center relative">
            <img
              src={Flare}
              alt="purple flare"
              className="absolute z-10 opacity-40 object-contain top-[-60%] right-[-100px]"
            />
            <div className="w-full relative flex z-20 justify-center items-center lg:justify-start lg:items-start">
              <motion.h1
                initial={{ opacity: 0.4, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                }}
                className="text-white font-bold text-4xl lg:text-7xl font-clash-display"
              >
                getlinked Tech
              </motion.h1>
              <div>
                <img
                  src={Bob}
                  alt="bob"
                  className="absolute w-[25px] lg:w-[40px] object-contain right-[72px] md:right-[232px] lg:right-20 -top-7 lg:-top-10"
                />
              </div>
            </div>
            <div className="w-full relative flex justify-center items-center lg:justify-start lg:items-start">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "linear",
                  delay: 0.5,
                  duration: 1,
                }}
                className="text-white font-bold text-4xl lg:text-7xl font-clash-display ml-[-3.6rem] lg:ml-0"
              >
                Hackathon{" "}
                <motion.span
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "linear",
                    delay: 1,
                    duration: 1,
                  }}
                  className="text-strong-pink"
                >
                  1.0
                </motion.span>
              </motion.h1>
              <div>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "linear",
                    delay: 1,
                    duration: 1,
                  }}
                  src={Chain}
                  alt="chain"
                  className="absolute w-[32px] lg:w-[70px] object-contain right-[3rem] md:right-[13.5rem] lg:-right-8 top-1"
                />
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "linear",
                    delay: 1,
                    duration: 1,
                  }}
                  src={Blast}
                  alt="blast"
                  className="absolute w-[22px] lg:w-[50px] object-contain right-[20px] md:right-[11.5rem] lg:right-[-100px] top-2"
                />
              </div>
            </div>
            <div className="w-full h-fit flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <motion.p
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "linear",
                  delay: 0.8,
                  duration: 1.1,
                }}
                className="text-white font-montserrat text-[13px] lg:text-lg text-center lg:text-left max-w-[264px] lg:max-w-[470px] mt-2 leading-[33.2px]"
              >
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "linear",
                  delay: 0.8,
                  duration: 1.1,
                }}
                className="mt-6 lg:mt-10"
              >
                <Button
                  onClick={() => navigate("/register")}
                  radius="small"
                  className={`btn text-white shadow-lg w-[172px]`}
                >
                  <p className="font-montserrat">Register</p>
                </Button>
              </motion.div>
              <div className="flex font-normal w-[200px] lg:w-[250px] mt-7 lg:mt-11 justify-between font-unica text-5xl lg:text-6xl text-white">
                <motion.p
                  initial={{ opacity: 0, y: -60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "linear",
                    delay: 0.5,
                    duration: 1.1,
                  }}
                >
                  00<span className="text-sm">H</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: -60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "linear",
                    delay: 1,
                    duration: 1.1,
                  }}
                >
                  00<span className="text-sm">M</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: -60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "linear",
                    delay: 1.5,
                    duration: 1.1,
                  }}
                >
                  00<span className="text-sm">S</span>
                </motion.p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] h-full relative">
            <motion.div
              initial={{ opacity: 0, y: -50, x: 50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                ease: "linear",
                delay: 0.5,
                duration: 1.1,
              }}
              className="w-full h-full relative z-20 bg-hero-section bg-center bg-no-repeat bg-contain"
            ></motion.div>
            <motion.img
              initial={{ opacity: 0, y: -50, x: -50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                ease: "linear",
                delay: 1,
                duration: 1.1,
              }}
              src={Stars}
              alt="stars"
              className="absolute z-30 w-[90%] h-[90%] object-contain top-0 left-0"
            />
            <img
              src={Flare}
              alt="purple flare"
              className="absolute z-20 w-[120%] h-[120%] object-contain top-[-100px] right-[-100px]"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "linear",
                delay: 1.5,
                duration: 1.1,
              }}
              src={Metrix}
              alt="Metrix"
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
