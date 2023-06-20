import React from "react";
import Common from "./Common";
import web from "../src/images/demo.jpg";

const Home = () => {
  return (
    <>
      <Common
        name="Welcome to Service Page"
        visit="/service"
        btname="Get Started"
        imgsrc={web}
      />
    </>
  );
};

export default Home;
