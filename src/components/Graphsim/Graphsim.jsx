import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library
import "./style.css";
import { simulate } from "../2DOF_Model";

export const Graphsim = ({
  className,
  groupClassName,
  rectangleClassName,
  xPosClassName,
  rectangleClassNameOverride,
  yPosClassName,
  divClassName,
  divClassNameOverride,
  xVelClassName,
  rectangleClassName1,
  yVelClassName,
  groupClassName2,
  groupClassName4,
  divClassName1,
  SimulationPoints,
}) => {

  
  // Define chartRefs object
  /*var chartRefs = {
    XPos: useRef(),
    XVel: useRef(),
    YPos: useRef(),
    YVel: useRef(),
  };*/
  //chartRefs = SimulationPoints;

  // Define state to hold thetaX and thetaY values
  //const [thetaValues, setThetaValues] = useState({ XPos: 0, YPos: 0, XVel: 0, YVel: 0 });
  if(SimulationPoints==null){
    SimulationPoints = {
       XPos: useRef(),
       XVel: useRef(),
       YPos: useRef(),
       YVel: useRef(),
     }; }
  useEffect(() => {
    
    
    // Call the main function to get XPos, YPos, XVel, and YVel values
    /*const fetchData = async () => {
      const { XPos, YPos, XVel, YVel } = await simulate(Data); // Assuming main returns a promise
      setSimulationPoints({ XPos, YPos, XVel, YVel });
    };*/
    //fetchData(); // Fetch data when component mounts
    //const { XPos, YPos, XVel, YVel } = simulate(Data);
    
    console.log("GOT DATA: "+SimulationPoints.XPos);
    // Create charts when data changes

      if (SimulationPoints["XPos"]) {
        createGraph(getContext("2d"), "XPos", SimulationPoints.XPos);
      }

    // Cleanup function
    return () => {
      // Destroy all existing charts if Chart.js is loaded
      if (typeof Chart !== 'undefined' && Chart.helpers && Chart.helpers.each) {
        Chart.helpers.each(Chart.instances, function (instance) {
          instance.destroy();
        });
      }
    };
  }, [SimulationPoints]); // Run effect whenever thetaValues change

  // Function to create chart
  const createGraph = (ctx, label, data) => {
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((_, index) => index),
        datasets: [{
          label: label,
          borderColor: "black",
          borderWidth: 1,
          pointRadius: 0,
          data: data,
          fill: false,
        }],
      },
      options: {
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
          y: {
            type: "linear",
            position: "left",
          },
        },
      },
    });
  };

  return (
    <div className={`graphsim ${className}`}>
      <div className={`group-22 ${groupClassName}`}>
        <canvas ref={SimulationPoints.XPos} className={`rectangle-5 ${rectangleClassName}`} id={`chart-XPos`}></canvas>
        <div className={`text-wrapper-12 ${xPosClassName}`}>X Pos</div>
      </div>
      <div className={`text-wrapper-14 ${divClassName1}`}>Graphs</div>
  </div>
  );
};
