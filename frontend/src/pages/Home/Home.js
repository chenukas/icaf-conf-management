import React from "react";
import Hero from "../../components/Landing/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Timeline from "../../components/Landing/Timeline/Timeline";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Timeline />
    </>
  );
};

export default Home;
