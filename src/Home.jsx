import React, { useState, useEffect } from "react";
import Navbar from "./components/modecule/navbar";
import Footer from "./components/modecule/footer";
import HeroSection from "./components/page/home/heroSection";
import Intro from "./components/page/home/intro";
import Rules from "./components/page/home/rules";
import Judge from "./components/page/home/judge";
import Faq from "./components/page/home/faq";
import Timeline from "./components/page/home/timeline";
import Award from "./components/page/home/award";
import Sponsors from "./components/page/home/sponsors";
import Secure from "./components/page/home/secure";
import upArrow from "./assets/images/upArrow.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-x-clip">
      <button
        onClick={scrollToTop}
        className="w-[40px] h-[40px] btn rounded-[50%] flex justify-center items-center fixed bottom-[20px] right-[40px] z-[999999]"
      >
        <img src={upArrow} alt="back to top arrow" width={25} height={25} />
      </button>
      <Navbar />
      <HeroSection />
      <Intro />
      <Rules />
      <Judge />
      <Faq />
      <Timeline />
      <Award />
      <Sponsors />
      <Secure />
      <Footer />
    </div>
  );
};

export default Home;
