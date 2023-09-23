import React, { useEffect } from "react";
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

const Home = () => {
  return (
    <div className="relative overflow-x-clip">
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
