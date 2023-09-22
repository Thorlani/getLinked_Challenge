import React from "react";

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
      </form>
    </div>
  );
};

export default ContactForm;
