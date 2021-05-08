import React from "react";
import Hero from "../../components/LadingPage/Hero/Hero";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
    </>
  );
};

export default Home;
