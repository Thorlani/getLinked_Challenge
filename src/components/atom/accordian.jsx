import React from "react";
import { PlusIcon } from "../../assets/plus";

const Drop = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="mt-[4rem] text-[13px] max-w-[316px] lg:max-w-[342px]">
      <ul className="flex flex-col gap-6">
        <li className=" cursor-pointer">
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-sm leading-[27.76px]">
              Can I work on a project I started before the hackathon?
            </p>
            <PlusIcon />
          </div>
        </li>
        <li className=" cursor-pointer">
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-[13px] lg:text-sm leading-[27.76px]">
              What happens if I need help during the hackathon?
            </p>
            <PlusIcon />
          </div>
        </li>
        <li className=" cursor-pointer">
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-[13px] lg:text-sm leading-[27.76px]">
              What happens if I don't have an idea for a project?
            </p>
            <PlusIcon />
          </div>
        </li>
        <li className=" cursor-pointer">
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-[13px] lg:text-sm leading-[27.76px]">
              Can I join a team or do I have to come with one?
            </p>
            <PlusIcon />
          </div>
        </li>
        <li className=" cursor-pointer">
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-[13px] lg:text-sm leading-[27.76px]">
              What happens after the hackathon ends
            </p>
            <PlusIcon />
          </div>
        </li>
        <li className=" cursor-pointer">
          <div className=" border-b-1 border-strong-pink w-full flex pb-1 justify-between items-center">
            <p className="font-montserrat text-white text-[13px] lg:text-sm leading-[27.76px]">
              Can I work on a project I started before the hackathon?
            </p>
            <PlusIcon />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Drop;
