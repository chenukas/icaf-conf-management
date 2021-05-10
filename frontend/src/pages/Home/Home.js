import React from "react";
import Hero from "../../components/Landing/Hero/Hero";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
