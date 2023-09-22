import React from "react";
import RegisterImageMobile from "../../../assets/images/registerImageMobile.png";
import { useNavigate } from "react-router-dom";
import Btn from "../../atom/button";

const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <div className="min-w-full min-h-full formBackground p-[8%] flex flex-col gap-8">
      <form className="w-full h-fit flex flex-col gap-10">
        <h2 className="font-clash-display text-[20px] max-w-[200px] md:w-full font-semibold text-strong-pink">
          Register
        </h2>
        <div className="w-full flex lg:hidden justify-center items-center ">
          <img src={RegisterImageMobile} alt="A man sitting on a seat" />
        </div>
        <div>
          <div className="flex">
            <p className="font-montserrat text-xs lg:text-sm">Be part of this movement!</p>
            <div></div>
          </div>
          <p className="font-montserrat text-xl lg:text-2xl">CREATE YOUR ACCOUNT</p>
        </div>
        <div>
          <input
            placeholder="Firstname"
            type="text"
            name=""
            id=""
            className="h-[47px] px-[29px] py-[11px] w-full border-1 outline-none input"
          />
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            name=""
            id=""
            className="h-[47px] px-[29px] py-[11px] w-full border-1 outline-none input"
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            name=""
            id=""
            className="min-h-[119px] w-full px-[15px] py-[6px] border-1 outline-none input"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <Btn text="Submit" submit={() => {}} width="w-[172px]" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
