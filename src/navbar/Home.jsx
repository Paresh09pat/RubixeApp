import React from "react";
import Homecomponent from "./Homecomponent/Homecomponent";
import "./hamburger/Burger.css";
import Section2 from "./Homecomponent/Section2";
import Section3 from "./Homecomponent/Section3";
import Section4 from "./Homecomponent/Section4";
import Section5 from "./Homecomponent/Section5";
import Section6 from "./Homecomponent/Section6";
const Home = () => {
  return (
    <>
      <div className="homesection1">
        <Homecomponent />
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>


       
      </div>
      
    </>
  );
};

export default Home;
