import React from "react";
// Components
import Navbar from "./Navbar";
import Hero from "./Hero";
import Pricing from "./Pricing";
// Styles
import "./HomeStyles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
    </>
  );
};

export default Home;
