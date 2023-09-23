import React, { useState } from "react";
import { InstaIcon } from "../../../assets/insta";
import { TwitterIcon } from "../../../assets/twitter";
import { FacebookIcon } from "../../../assets/facebook";
import { LinkedInIcon } from "../../../assets/linkedIn";
import axios from "axios";
import { Button } from "@nextui-org/react";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    firstname: "",
    email: "",
    message: "",
  });
  const [inputChecker, setInputChecker] = useState(false);

  const contactFormDetails = {
    first_name: contactForm.firstname,
    email: contactForm.email,
    message: contactForm.message,
  };
  const url = `${
    import.meta.env.VITE_BASE_API_URL + "/hackathon/contact-form"
  }`;

  //Function to submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the mutate function to trigger the mutation
    if (
      contactForm.email === "" ||
      contactForm.firstname === "" ||
      contactForm.message === ""
    ) {
      setInputChecker(true);
    } else if (
      contactForm.email !== "" ||
      contactForm.firstname !== "" ||
      contactForm.message !== ""
    ) {
      setInputChecker(false);
      try {
        axios
          .post(url, contactFormDetails)
          .then(
            setContactForm({
              ...contactForm,
              email: "",
              firstname: "",
              message: "",
            }),
            window.location.reload(true)
          )
          .catch();
      } catch (error) {
        console.log(error);
      }
    }
  };

  //Form input fields onChange function
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setContactForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  return (
    <div className="min-w-full min-h-full formBackground p-[8%] flex flex-col gap-8">
      <div className="font-clash-display text-[20px] w-full font-semibold text-strong-pink">
        <h3>Questions or need assistance?</h3>
        <h3>Let us know about it!</h3>
      </div>
      <form className="w-full h-fit flex flex-col gap-10">
        <div>
          <input
            placeholder="Firstname"
            type="text"
            name="firstname"
            value={contactForm.firstname}
            className="h-[47px] px-[29px] py-[11px] w-full border-1 outline-none input"
            onChange={handleChange}
            required
          />
          {inputChecker === true && contactForm.firstname === "" && (
            <p className="text-[red] text-xs mt-2">Please fill in your name</p>
          )}
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={contactForm.email}
            className="h-[47px] px-[29px] py-[11px] w-full border-1 outline-none input"
            onChange={handleChange}
            required
          />
          {inputChecker === true && contactForm.email === "" && (
            <p className="text-[red] text-xs mt-2">Please fill in your email</p>
          )}
        </div>
        <div>
          <textarea
            placeholder="Message"
            name="message"
            value={contactForm.message}
            className="min-h-[160px] lg:min-h-[119px] w-full px-[15px] py-[6px] border-1 outline-none input"
            onChange={handleChange}
            required
          />
          {inputChecker === true && contactForm.message === "" && (
            <p className="text-[red] text-xs mt-2">
              Please fill in your message
            </p>
          )}
        </div>
        <div className="w-full flex justify-center items-center">
          <Button
            type="button"
            onClick={handleSubmit}
            radius="small"
            className={`btn text-white shadow-lg w-[172px]`}
          >
            <p className="font-montserrat">Submit</p>
          </Button>
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
