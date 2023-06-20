import React from "react";
import Common from "./Common";
import web from "../src/images/about.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        visit="/contact"
        btname="Contact Now"
        imgsrc={web}
      />
    </>
  );
};

export default About;
