import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About me</h2>
      <p>I love Rats! They are super cute!</p>
      <img src={image} alt="I made this"/>
    </div>
  )
}

export default About;
