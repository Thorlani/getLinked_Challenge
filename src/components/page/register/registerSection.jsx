import React from "react";
import RegisterImage from "../../../assets/images/registerImage.png";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./registerForm";
import Star1 from "../../../assets/icons/star1.png";
import Star2 from "../../../assets/icons/star2.png";
import Star3 from "../../../assets/icons/star3.png";
import Flare from "../../../assets/images/flare.png";

const RegisterSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full relative p-[8%] overflow-clip">
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <img
          src={Star1}
          alt="Star"
          className="absolute w-[20px] object-contain left-[9%] top-[27%]"
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
        <img
          src={Flare}
          alt="purple flare"
          className="absolute z-10 opacity-40 object-contain top-[0%] right-[-550px]"
        />
        <img
          src={Flare}
          alt="purple flare"
          className="absolute z-10 opacity-40 object-contain top-0 lg:top-[-20%] left-[-50px] lg:left-[-200px]"
        />
      </div>
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
