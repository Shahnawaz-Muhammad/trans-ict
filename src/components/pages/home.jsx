import React from "react";
import Partners from "../partners";
import Features from "../features";
import Services from "../services";

const Home = () => {
  return (
    <div>
      <div className="bg-[#EFF2F8]">
        <Partners />
        <Features />
      </div>

      <Services />
    </div>
  );
};

export default Home;
