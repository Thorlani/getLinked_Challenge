import React from "react";
import Subtext from "../../atom/subtext";
import Drop from "../../atom/accordian";

const Faq = () => {
  return (
    <>
      <div className="w-full h-fit p-[4%] pt-[8%] flex flex-col lg:flex-row items-center overflow-x-clip">
        <div className="w-full lg:w-[50%] h-fit relative">
          <img
            src="/public/icons/sata.png"
            alt="sata icon"
            className="absolute left-[-2%] top-[-9%]"
          />
          <Subtext
            width="253"
            whiteText="Frequently Ask "
            pinkText="Question"
          />
          <p className="font-montserrat mt-[1rem] text-white text-sm max-w-[342px] leading-[27.76px]">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <Drop />
        </div>
        <div className="w-full lg:w-[50%] h-fit relative">
          <img
            src="/public/images/faq.png"
            alt="a man sitting on the cloud"
            className="mt-5"
          />
          <img
            src="/public/icons/sata gra.png"
            alt="sata icon"
            className="absolute left-[20%] top-[21%] w-[15px] object-contain"
          />
          <img
            src="/public/icons/star4.png"
            alt="sata icon"
            className="absolute left-[12%] top-[49%] w-[15px] object-contain"
          />
          <img
            src="/public/icons/star1.png"
            alt="sata icon"
            className="absolute left-[72%] top-[94%] w-[20px] object-contain"
          />
          <img
            src="/public/icons/sata gra.png"
            alt="sata icon"
            className="absolute left-[51%] top-[-4%] w-[15px] object-contain"
          />
          <img
            src="/public/icons/question1.png"
            alt="question"
            className="absolute left-[36%] top-[-13%]"
          />
          <img
            src="/public/icons/question2.png"
            alt="question"
            className="absolute left-[14%] top-[-9%]"
          />
          <img
            src="/public/icons/question2.png"
            alt="question"
            className="absolute left-[60%] top-[-9%]"
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Faq;
