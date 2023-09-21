import React from "react";
import Subtext from "../../atom/subtext";
import Btn from "../../atom/button";

const Judge = () => {
  return (
    <>
    <div className="w-full h-fit p-[4%] flex flex-col lg:flex-row items-center overflow-x-clip">
      <div className="w-full lg:w-[50%] h-fit relative">
        <div className="w-[110px] h-[110px] rounded-[50%] circle absolute z-10 left-[14%] top-[-7%]"></div>
        <img src="/public/images/criteria.png" alt="criteria image" className="relative z-20" />
        <img
          src="/public/icons/star2.png"
          alt="star icon"
          className="absolute right-[50%] bottom-[40%] opacity-40"
        />
        <img
          src="/public/icons/star1.png"
          alt="star icon"
          className="absolute right-10 -bottom-3"
        />
        <img
          src="/public/icons/sata.png"
          alt="sata icon"
          className="absolute left-[22%] top-[-18%]"
        />
        <img
            src="/public/images/flare.png"
            alt="flare"
            className="absolute z-10 opacity-40 object-cover left-[-18%] top-[16%] "
          />
      </div>
      <div className="w-full lg:w-[50%] h-fit relative z-20">
        <Subtext
          whiteText="Judging Criteria "
          pinkText="Key attributes"
          width="267"
        />
        <ul className="font-montserrat flex flex-col gap-4 mt-[1rem] text-white text-sm max-w-[530px] leading-[27.76px]">
          <li>
            <p>
              <span className="text-pink">Innovation and Creativity:{" "}</span>
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
          </li>
          <li>
            <p>
              <span className="text-pink">Functionality:{" "}</span>
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
          </li>
          <li>
            <p>
              <span className="text-pink">Impact and Relevance:{" "}</span>
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
          </li>
          <li>
            <p>
              <span className="text-pink">Technical Complexity:{" "}</span>
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
          </li>
          <li>
            <p>
              <span className="text-pink">Adherence to Hackathon Rules:{" "}</span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
          </li>
          <Btn text="Read More" width="w-[172px]" />
        </ul>
        <img
          src="/public/images/flare.png"
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
