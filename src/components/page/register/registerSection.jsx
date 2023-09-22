import React from "react";
import RegisterImage from "../../../assets/images/registerImage.png";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./registerForm";

const RegisterSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full relative p-[8%]">
      <div className="w-full h-full absolute top-0 left-0 z-10"></div>
      <div className="w-full h-full relative z-20 flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-[50%] h-full hidden lg:flex flex-col gap-[17px]">
          <img src={RegisterImage} alt="A man sitting on a seat" />
        </div>
        <div className="w-full lg:w-[50%] h-full">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
