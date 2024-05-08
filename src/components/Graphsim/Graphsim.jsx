import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library
import "./style.css";

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
  data
}) => {

  // Define chartRefs object
  const chartRefs = {
    XPos: useRef(),
    XPosPID: useRef(),
    XVel: useRef(),
    XVelPID: useRef(),
    YPos: useRef(),
    YPosPID: useRef(),
    YVel: useRef(),
    YVelPID: useRef(),
  };


  useEffect(() => {
    const createGraph = (ctx, label, data) => {
      console.log("Data for", label, ":", data);
      console.log("Mapped data for", label, ":", data.map(item => item[label.toLowerCase()]));
      return new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((item, index) => index),
          datasets: [{
            label: label,
            borderColor: "black",
            borderWidth: 1,
            pointRadius: 0,
            data: data.map(item => item[label.toLowerCase()]), // Extract data for the specific metric
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
    // Create charts when data changes
    if (data) {
      console.log("Data available, creating charts...");
      console.log("Data:", data);
      for (const [key, ref] of Object.entries(chartRefs)) {
        if (data[key] && ref.current) {
          console.log("Creating chart for", key);
          createGraph(ref.current.getContext("2d"), key, data[key]);
        }
      }
    } else {
      console.log("No data available yet.");
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
  }, [data]);

  return (
    <div className={`graphsim ${className}`}>
      <div className={`group-22 ${groupClassName}`}>
        <canvas ref={chartRefs.XPos} className={`rectangle-5 ${rectangleClassName}`} id={`chart-${key}`}></canvas>
        <div className={`text-wrapper-12 ${xPosClassName}`}>X Pos</div>
      </div>
      <div className={`group-24 ${divClassName}`}>
        <canvas ref={chartRefs.XVel} className={`rectangle-6 ${divClassNameOverride}`}></canvas>
        <div className={`x-vel ${xVelClassName}`}> X Vel</div>
      </div>
      <div className={`group-26 ${groupClassName2}`}>
        <canvas ref={chartRefs.YPos} className={`rectangle-5 ${rectangleClassNameOverride}`}></canvas>
        <div className={`text-wrapper-12 ${yPosClassName}`}>Y Pos</div>
      </div>
      <div className={`group-28 ${groupClassName4}`}>
        <canvas ref={chartRefs.YVel} className={`rectangle-5 ${rectangleClassName1}`}></canvas>
        <div className={`text-wrapper-12 ${yVelClassName}`}>Y Vel</div>
      </div>
      <div className={`text-wrapper-14 ${divClassName1}`}>Graphs</div>
    </div>
  );
};
