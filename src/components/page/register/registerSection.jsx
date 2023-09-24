import React, { useState } from "react";
import RegisterImage from "../../../assets/images/registerImage.png";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./registerForm";
import Star1 from "../../../assets/icons/star1.png";
import Star2 from "../../../assets/icons/star2.png";
import Star3 from "../../../assets/icons/star3.png";
import Flare from "../../../assets/images/flare.png";
import Congratulation from "../../../assets/images/congratulation.png";
import emoji from "../../../assets/images/emoji.png";
import { Button } from "@nextui-org/react";
import BackIcon from "../../../assets/icons/backIcon.png";

const RegisterSection = () => {
  const navigate = useNavigate();

  //This when set to true throws up the pop-up
  const [isSubmitted, setIsSubmitted] = useState(false);
  if (isSubmitted === true) {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }

  //A function to clear the input field and close the popup
  const closePopup = () => {
    window.location.reload(true);
  };

  return (
    <>
      <div className="w-full h-full relative p-[8%] overflow-clip">
         {/* This div is the background that has the stars */}
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
        <div
          onClick={() => navigate("/")}
          className="w-full mb-[40px] block lg:hidden"
        >
          <img src={BackIcon} alt="Back icon" className="w-[23px] h-[23px]" />
        </div>
          <div className="w-full lg:w-[50%] h-full hidden lg:flex flex-col gap-[17px]">
            <img src={RegisterImage} alt="A man sitting on a seat" />
          </div>
          <div className="w-full lg:w-[50%] h-full">
            <RegisterForm
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
            />
          </div>
        </div>
      </div>

      {isSubmitted && (
        <div className="w-full h-full fixed bg-[#140F28]/80 top-0 left-0 z-[99999] flex justify-center items-center">
          <div className="min-w-[50%] min-h-[50%] p-[4%] border-1 border-strong-pink rounded-md flex flex-col justify-center items-center">
            <img
              src={Congratulation}
              alt="A man saying congratulation"
              className="w-[250px] object-contain"
            />
            <h4 className="font-bold font-montserrat lg:text-2xl">
              Congratulations
            </h4>
            <h4 className="font-bold font-montserrat lg:text-2xl">
              you have successfully Registered!
            </h4>
            <div className="relative">
              <p className="max-w-[300px] text-center">
                Yes, it was easy and you did it! check your mail box for next
                step{" "}
              </p>
              <img
                src={emoji}
                alt="emoji"
                className="absolute bottom-0 right-[46px]"
              />
            </div>
            <button
              onClick={closePopup}
              radius="small"
              className={`btn h-[53px] rounded text-white shadow-lg w-full mt-3`}
            >
              <p className="font-montserrat">Register Now</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterSection;
