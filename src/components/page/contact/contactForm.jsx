import React from "react";
import Btn from "../../atom/button";
import { InstaIcon } from "../../../assets/insta";
import { TwitterIcon } from "../../../assets/twitter";
import { FacebookIcon } from "../../../assets/facebook";
import { LinkedInIcon } from "../../../assets/linkedIn";

const ContactForm = () => {
  return (
    <div className="min-w-full min-h-full formBackground p-[8%] flex flex-col gap-8">
      <div className="font-clash-display text-[20px] max-w-[200px] md:w-full font-semibold text-strong-pink">
        <h3>Questions or need assistance?</h3>
        <h3>Let us know about it!</h3>
      </div>
      <form className="w-full h-fit flex flex-col gap-10">
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
        <div className="w-full flex lg:hidden justify-center items-center">
          <ul>
            <li className="flex flex-col gap justify-center items-center">
              <span className=" text-strong-pink">Share on</span>
              <div className="flex items-center gap-4">
                <InstaIcon />
                <TwitterIcon />
                <FacebookIcon />
                <LinkedInIcon />
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
