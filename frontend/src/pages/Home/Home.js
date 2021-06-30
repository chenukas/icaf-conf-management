import React from "react";
import Hero from "../../components/Landing/Hero/Hero";
import Timeline from "../../components/Landing/Timeline/Timeline";
import AboutUs from "../../components/Landing/AboutUs/AboutUs";
import Speakers from "../../components/Landing/Speakers/Speakers";
import Footer from "../../components/Landing/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="container-fluid" style={{ padding: "0px" }}>
        <Hero />
        <AboutUs />
        <Speakers />
        <Timeline />
        <Footer />
      </div>
    </>
  );
};

export default Home;
