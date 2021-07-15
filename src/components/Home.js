import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const styleObj= {
    color: "firebrick"
  }
  // update the JSX being returned!
  return (<div id="home">
    <h1 style= {styleObj}>{name} is a Web Developer from {city}</h1>
    </div>
    );
}

export default Home;
