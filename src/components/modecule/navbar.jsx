import React, { useLayoutEffect, useRef, useState } from "react";
import Btn from "../atom/button";
import { CancelIcon } from "../../assets/cancel";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  if (isNavbarActive === true) {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }

  return (
    <div className="relative z-40">
      <div className="w-full h-fit hidden lg:flex justify-between items-center pt-[43px] pb-[25px] px-[4%]">
        <h2
          onClick={() => navigate("/")}
          className="text-white text-4xl font-clash-display cursor-pointer"
        >
          get<span className="text-strong-pink">Linked</span>
        </h2>

        <div className="w-[54%] flex items-center justify-between">
          <ul className=" font-montserrat font-normal cursor-pointer text-white w-[60%] flex justify-between items-center">
            <a href="#timeline">
              <li>Timeline</li>
            </a>
            <a href="#overview">
              <li>Overview</li>
            </a>
            <a href="#faq">
              <li>FAQs</li>
            </a>
            <li
              onClick={() => navigate("/contact")}
              className={`${location.pathname === "/" ? "#fff" : "contact"}`}
            >
              Contact
            </li>
          </ul>
          <Btn
            navigation={() => navigate("/register")}
            text="Register"
            width="w-[172px]"
            register={props.register}
          />
        </div>
      </div>
      <div className="w-full h-fit flex lg:hidden justify-between items-center p-[6%] md:py-[5%] relative">
        <h2
          onClick={() => navigate("/")}
          className="text-white text-xl md:text-2xl font-clash-display"
        >
          get<span className="text-strong-pink">Linked</span>
        </h2>
        <ul
          onClick={toggleNavbar}
          className=" font-montserrat font-normal flex flex-col gap-1 w-[20px]"
        >
          <li className="w-full h-fit flex items-start justify-start">
            <div className="w-[50%] h-[3px] bg-white rounded-lg"></div>
          </li>
          <li className="w-full h-fit flex items-center justify-center">
            <div className="w-full h-[3px] bg-white rounded-lg"></div>
          </li>
          <li className="w-full h-fit flex items-end justify-end">
            <div className="w-[50%] h-[3px] bg-white rounded-lg"></div>
          </li>
        </ul>
      </div>
      <div
        className={`w-full h-[100vh] fixed ${
          isNavbarActive ? "navIn" : "hidden"
        } lg:hidden bg-dark-blue top-0 p-[4%]`}
      >
        <div className="w-full h-fit flex lg:hidden justify-end items-end p-[6%] md:py-[5%] relative">
          <div onClick={toggleNavbar} className="w-fit h-fit relative">
            <CancelIcon />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              className="absolute top-[6.5px] left-[6px]"
            >
              <path
                d="M0.307505 10.6925C0.504459 10.8894 0.771552 11 1.05005 11C1.32854 11 1.59563 10.8894 1.79259 10.6925L5.50634 6.97874L9.22009 10.6925C9.41818 10.8838 9.68348 10.9897 9.95886 10.9873C10.2342 10.9849 10.4977 10.8744 10.6924 10.6797C10.8871 10.485 10.9976 10.2216 11 9.94617C11.0024 9.6708 10.8965 9.4055 10.7052 9.20741L6.99142 5.49366L10.7052 1.77991C10.8965 1.58182 11.0024 1.31652 11 1.04114C10.9976 0.765767 10.8871 0.502346 10.6924 0.307617C10.4977 0.112889 10.2342 0.00243378 9.95886 4.1008e-05C9.68348 -0.00235271 9.41818 0.103509 9.22009 0.294824L5.50634 4.00858L1.79259 0.294824C1.5945 0.103509 1.3292 -0.00235271 1.05383 4.1008e-05C0.778448 0.00243378 0.515027 0.112889 0.320299 0.307617C0.12557 0.502346 0.0151142 0.765767 0.0127213 1.04114C0.0103283 1.31652 0.11619 1.58182 0.307505 1.77991L4.02126 5.49366L0.307505 9.20741C0.110609 9.40437 0 9.67146 0 9.94995C0 10.2284 0.110609 10.4955 0.307505 10.6925Z"
                fill="#F8F8F8"
              />
            </svg>
          </div>
        </div>
        <ul
          id="navbarItems"
          className="w-full h-fit p-[8%] font-montserrat font-normal cursor-pointer text-lg text-white relative flex flex-col gap-10 mt-8"
        >
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li
            onClick={() => navigate("/contact")}
            className={`${location.pathname === "/contact" ? "contact" : ""}`}
          >
            Contact
          </li>
          <li>
            <Btn
              navigation={() => navigate("/register")}
              text="Register"
              width="w-[172px]"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
