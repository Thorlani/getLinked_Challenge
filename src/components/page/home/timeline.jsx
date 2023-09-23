import React from "react";
import Subtext from "../../atom/subtext";
import SataGra from "../../../assets/icons/sata gra.png";
import Star1 from "../../../assets/icons/star1.png";
import Star4 from "../../../assets/icons/star4.png";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <>
      <div className="w-full h-fit p-[4%] flex flex-col items-center justify-center overflow-x-clip relative">
        <div className="w-full h-full bg-[#261d45]/20 bg-bottom absolute z-10">
          <img
            src={SataGra}
            alt="sata icon"
            className="absolute w-4 lg:w-fit left-[20%] top-[13%] lg:top-[15%]  object-contain"
          />
          <img
            src={Star1}
            alt="star icon"
            className="absolute left-[85%] top-[48%] w-4 lg:w-[20px] object-contain"
          />
          <img
            src={Star4}
            alt="star icon"
            className="absolute left-[5%] lg:left-[8%] top-[91.3%] w-4 lg:w-[20px] object-contain"
          />
        </div>
        <div className="w-full h-full relative z-20">
          <div className="flex flex-col justify-center items-center">
            <Subtext
              width="max-w-[92px] lg:max-w-[138px]"
              whiteText="Timeline"
              pinkText=""
            />
            <motion.p
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                delay: 0.5,
                duration: 1,
              }}
              className="font-montserrat text-white text-sm max-w-[292px] lg:max-w-[346px] text-center leading-[24.136px] lg:leading-[27.76px]"
            >
              Here is the breakdown of the time we anticipate using for the
              upcoming event.
            </motion.p>
          </div>

          {/* This section is for Desktop view */}
          <motion.div
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              delay: 1,
              duration: 1,
            }}
            className="w-full h-fit mt-[4rem] hidden lg:flex flex-col justify-center items-center"
          >
            <div className="w-[3px] h-[137px] bg-strong-pink"></div>
            <div className="w-full h-fit grid grid-cols-[1fr_.5fr_1fr] place-items-center">
              <div className="w-full flex flex-col items-end">
                <h3 className="font-clash-display font-bold text-2xl text-strong-pink">
                  Hackathon Announcement
                </h3>
                <p className="text-right indent-7 font-montserrat text-sm leading-[23.926px] max-w-[436px]">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="timeline w-[53px] h-[53px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-2xl font-bold">1</p>
                </div>
              </div>
              <div className="w-full">
                <h3 className="font-clash-display font-bold text-2xl text-strong-pink">
                  November 18, 2023
                </h3>
              </div>
            </div>
            <div className="w-[3px] h-[86px] bg-strong-pink"></div>
            <div className="w-full h-fit grid grid-cols-[1fr_.5fr_1fr] place-items-center">
              <div className="w-full flex justify-end">
                <h3 className="font-clash-display font-bold text-2xl text-strong-pink">
                  November 18, 2023
                </h3>
              </div>
              <div className="flex justify-center items-center">
                <div className="timeline w-[53px] h-[53px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-2xl font-bold">2</p>
                </div>
              </div>
              <div className="w-full flex flex-col items-start">
                <h3 className="font-clash-display font-bold text-2xl text-strong-pink">
                  Teams Registration begins
                </h3>
                <p className="text-left font-montserrat text-sm leading-[23.926px] max-w-[485px]">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </div>
            <div className="w-[3px] h-[86px] bg-strong-pink"></div>
            <div className="w-full h-fit grid grid-cols-[1fr_.5fr_1fr] place-items-center">
              <div className="w-full flex flex-col items-end">
                <h3 className="font-clash-display font-bold text-2xl text-strong-pink">
                  Teams Registration ends
                </h3>
                <p className="text-right indent-7 font-montserrat text-sm leading-[23.926px] max-w-[388px]">
                  Interested Participants are no longer Allowed to register
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="timeline w-[53px] h-[53px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-2xl font-bold">3</p>
                </div>
              </div>
              <div className="w-full">
                <h3 className="font-clash-display font-bold text-2xl text-strong-pink">
                  November 18, 2023
                </h3>
              </div>
            </div>
            <div className="w-[3px] h-[86px] bg-strong-pink"></div>
            <div className="w-full h-fit grid grid-cols-[1fr_.5fr_1fr] place-items-center">
              <div className="w-full flex justify-end">
                <h3 className="font-clash-display font-bold text-2xl text-strong-pink">
                  November 18, 2023
                </h3>
              </div>
              <div className="flex justify-center items-center">
                <div className="timeline w-[53px] h-[53px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-2xl font-bold">4</p>
                </div>
              </div>
              <div className="w-full flex flex-col items-start">
                <h3 className="font-clash-display font-bold text-2xl text-strong-pink">
                  Announcement of the accepted teams and ideas
                </h3>
                <p className="text-left font-montserrat text-sm leading-[23.926px] max-w-[436px]">
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </div>
            <div className="w-[3px] h-[86px] bg-strong-pink"></div>
            <div className="w-full h-fit grid grid-cols-[1fr_.5fr_1fr] place-items-center">
              <div className="w-full flex flex-col items-end">
                <h3 className="text-right font-clash-display font-bold text-2xl text-strong-pink">
                  Getlinked Hackathon 1.0 Offically Begins
                </h3>
                <p className="text-right indent-7 font-montserrat text-sm leading-[23.926px] max-w-[388px]">
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="timeline w-[53px] h-[53px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-2xl font-bold">5</p>
                </div>
              </div>
              <div className="w-full">
                <h3 className="font-clash-display font-bold text-2xl text-strong-pink">
                  November 18, 2023
                </h3>
              </div>
            </div>
            <div className="w-[3px] h-[86px] bg-strong-pink"></div>
            <div className="w-full h-fit grid grid-cols-[1fr_.5fr_1fr] place-items-center">
              <div className="w-full flex justify-end">
                <h3 className="font-clash-display font-bold text-2xl text-strong-pink">
                  November 18, 2023
                </h3>
              </div>
              <div className="flex justify-center items-center">
                <div className="timeline w-[53px] h-[53px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-2xl font-bold">6</p>
                </div>
              </div>
              <div className="w-full flex flex-col items-start">
                <h3 className="font-clash-display font-bold text-2xl text-strong-pink">
                  Demo Day
                </h3>
                <p className="text-left font-montserrat text-sm leading-[23.926px] max-w-[415px]">
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>
            </div>
          </motion.div>

          {/* This section is for mobile view */}
          <motion.div
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              delay: 1,
              duration: 1,
            }}
            className="w-full h-fit mt-[4rem] flex lg:hidden flex-col gap-7 justify-center items-center"
          >
            <div className="w-full h-fit grid grid-cols-[.2fr_1fr] ">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="w-[3px] h-[77px] bg-strong-pink"></div>
                <div className="timeline w-[22px] h-[22px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-xs font-bold">1</p>
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col items-start justify-start">
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink max-w-[243px]">
                    Hackathon Announcement
                  </h3>
                  <p className=" font-montserrat text-xs leading-[23.926px] max-w-[269px]">
                    The getlinked tech hackathon 1.0 is formally announced to
                    the general public and teams begin to get ready to register
                  </p>
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full h-fit grid grid-cols-[.2fr_1fr] ">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="w-[3px] h-[77px] bg-strong-pink"></div>
                <div className="timeline w-[22px] h-[22px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-xs font-bold">2</p>
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col items-start justify-start">
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink max-w-[243px]">
                    Teams Registration begins
                  </h3>
                  <p className=" font-montserrat text-xs leading-[23.926px] max-w-[269px]">
                    Interested teams can now show their interest in the
                    getlinked tech hackathon 1.0 2023 by proceeding to register
                  </p>
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full h-fit grid grid-cols-[.2fr_1fr] ">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="w-[3px] h-[77px] bg-strong-pink"></div>
                <div className="timeline w-[22px] h-[22px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-xs font-bold">3</p>
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col items-start justify-start">
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink max-w-[243px]">
                    Teams Registration ends
                  </h3>
                  <p className=" font-montserrat text-xs leading-[23.926px] max-w-[269px]">
                    Interested Participants are no longer Allowed to register
                  </p>
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full h-fit grid grid-cols-[.2fr_1fr] ">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="w-[3px] h-[77px] bg-strong-pink"></div>
                <div className="timeline w-[22px] h-[22px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-xs font-bold">4</p>
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col items-start justify-start">
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink max-w-[243px]">
                    Announcement of the accepted teams and ideas
                  </h3>
                  <p className=" font-montserrat text-xs leading-[23.926px] max-w-[269px]">
                    All teams whom idea has been accepted into getlinked tech
                    hackathon 1.0 2023 are formally announced
                  </p>
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full h-fit grid grid-cols-[.2fr_1fr] ">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="w-[3px] h-[77px] bg-strong-pink"></div>
                <div className="timeline w-[22px] h-[22px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-xs font-bold">5</p>
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col items-start justify-start">
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink max-w-[243px]">
                    Getlinked Hackathon 1.0 Offically Begins
                  </h3>
                  <p className=" font-montserrat text-xs leading-[23.926px] max-w-[269px]">
                    Accepted teams can now proceed to build their ground
                    breaking skill driven solutions
                  </p>
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full h-fit grid grid-cols-[.2fr_1fr] ">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="w-[3px] h-[77px] bg-strong-pink"></div>
                <div className="timeline w-[22px] h-[22px] rounded-[50%] flex justify-center items-center">
                  <p className="font-montserrat text-xs font-bold">6</p>
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col items-start justify-start">
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink max-w-[243px]">
                    Demo Day
                  </h3>
                  <p className=" font-montserrat text-xs leading-[23.926px] max-w-[269px]">
                    Teams get the opportunity to pitch their projects to judges.
                    The winner of the hackathon will also be announced on this
                    day
                  </p>
                  <h3 className="font-clash-display font-bold text-xs text-strong-pink">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
