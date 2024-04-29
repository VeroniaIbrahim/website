/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const About = ({ className }) => {
  return (
    <div className={`about ${className}`}>
      <div className="overlap">
        <div className="the-DOF-hover-wrapper">
          <p className="the-DOF-hover">
            The 2 Dof Hover System Is Ideally Suited To Study Control Concepts And Theories Relevant To Real World
            Applications Of Flight Dynamics And Control In Vertical Lift Off Vehicles.
          </p>
        </div>
        <div className="div">
          <p className="about-the-DOF">About The 2 Dof Hover</p>
          <img className="element" alt="Element" src="https://c.animaapp.com/aDg8NBB3/img/3-1-1.png" />
        </div>
      </div>
    </div>
  );
};
