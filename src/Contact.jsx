import React from "react";
import Navbar from "./components/modecule/navbar";
import ContactSection from "./components/page/contact/contactSection";

const Contact = () => {
  return (
    <div className="w-full min-h-screen overflow-x-clip">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <ContactSection />
    </div>
  );
};

export default Contact;
