import React from "react";
import Subtext from "../../atom/subtext";
import Btn from "../../atom/button";
import Flare from "../../../assets/images/flare.png";
import Star2 from "../../../assets/icons/star2.png";
import Star1 from "../../../assets/icons/star1.png";
import Sata from "../../../assets/icons/sata.png";
import Criteria from "../../../assets/images/criteria.png";
import { motion } from "framer-motion";

const Judge = () => {
  return (
    <>
      <div className="w-full h-fit px-[4%] py-[10%] lg:p-[4%] flex flex-col lg:flex-row items-center overflow-x-clip">
        <div className="w-full lg:w-[50%] h-fit relative">
          <div className="w-[110px] h-[110px] rounded-[50%] circle absolute z-10 left-[14%] top-[-7%] hidden lg:block"></div>
          <motion.img
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              delay: 0.1,
              duration: 1,
            }}
            src={Criteria}
            alt="criteria image"
            className="relative z-20"
          />
          <img
            src={Star2}
            alt="star icon"
            className="absolute right-[50%] bottom-[40%] opacity-40"
          />
          <img
            src={Star1}
            alt="star icon"
            className="absolute right-10 -bottom-3"
          />
          <img
            src={Sata}
            alt="sata icon"
            className="absolute w-4 lg:w-fit left-[50%] lg:left-[22%] top-[-10%] lg:top-[-18%]"
          />
          <img
            src={Flare}
            alt="flare"
            className="absolute z-10 opacity-40 object-cover left-[-18%] top-[16%] "
          />
        </div>
        <div className="w-full lg:w-[50%] h-fit relative z-20 flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <Subtext
            whiteText="Judging Criteria "
            pinkText="Key attributes"
            width="max-w-[167px] lg:max-w-[267px]"
          />
          <ul className="font-montserrat flex flex-col gap-4 mt-[1rem] text-white text-[13px] lg:text-sm max-w-[316px] lg:max-w-[520px] text-center lg:text-left leading-[27.76px]">
            <li>
              <motion.p
                initial={{ opacity: 0.6, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                }}
              >
                <span className="text-pink">Innovation and Creativity: </span>
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </motion.p>
            </li>
            <li>
              <motion.p
                initial={{ opacity: 0.6, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                }}
              >
                <span className="text-pink">Functionality: </span>
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </motion.p>
            </li>
            <li>
              <motion.p
                initial={{ opacity: 0.6, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                }}
              >
                <span className="text-pink">Impact and Relevance: </span>
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </motion.p>
            </li>
            <li>
              <motion.p
                initial={{ opacity: 0.6, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                }}
              >
                <span className="text-pink">Technical Complexity: </span>
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </motion.p>
            </li>
            <li>
              <motion.p
                initial={{ opacity: 0.6, x: 140 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                }}
              >
                <span className="text-pink">
                  Adherence to Hackathon Rules:{" "}
                </span>
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </motion.p>
            </li>
            <motion.div
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: "linear",
                duration: 1.1,
              }}
              className="w-full flex justify-center items-center lg:justify-start"
            >
              <Btn text="Read More" width="w-[172px]" />
            </motion.div>
          </ul>
          <img
            src={Flare}
            alt="flare"
            className="absolute z-10 opacity-40 object-cover bottom-[-40%] right-[-60%] "
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Judge;
