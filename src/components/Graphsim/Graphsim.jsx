import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
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
  SimulationPoints,
}) => {

  const chartRefs = {
    XPos: useRef(),
    XVel: useRef(),
    YPos: useRef(),
    YVel: useRef(),
  };

  useEffect(() => {
    if (SimulationPoints) {
      
      for (const [key, ref] of Object.entries(chartRefs)) {
        if (SimulationPoints[key] && ref.current) {
          // Get existing chart instance if it exists
          
          try {
            createGraph(ref.current.getContext("2d"), key, SimulationPoints[key]);
          } catch(e) {
            console.error("Error creating graph:", e);
            var chart = Chart.getChart("XPOS_G");
            chart.destroy();
            chart = Chart.getChart("XVEL_G");
            chart.destroy();
            chart = Chart.getChart("YPOS_G");
            chart.destroy();
            chart = Chart.getChart("YVEL_G");
            chart.destroy();
            createGraph(ref.current.getContext("2d"), key, SimulationPoints[key]);
          }
        }
      }
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
  }, [SimulationPoints]);

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
        <canvas ref={chartRefs.XPos} className={`rectangle-5 ${rectangleClassName}`} id="XPOS_G" ></canvas>
        <div className={`text-wrapper-12 ${xPosClassName}`}>X Pos</div>
      </div>
      <div className={`group-24 ${divClassName}`}>
        <canvas ref={chartRefs.XVel} className={`rectangle-6 ${divClassNameOverride}`} id="XVEL_G"></canvas>
        <div className={`x-vel ${xVelClassName}`}> X Vel</div>
      </div>
      <div className={`group-26 ${groupClassName2}`}>
        <canvas ref={chartRefs.YPos} className={`rectangle-5 ${rectangleClassNameOverride}`} id="YPOS_G"></canvas>
        <div className={`text-wrapper-12 ${yPosClassName}`}>Y Pos</div>
      </div>
      <div className={`group-28 ${groupClassName4}`}>
        <canvas ref={chartRefs.YVel} className={`rectangle-5 ${rectangleClassName1}`} id="YVEL_G"></canvas>
        <div className={`text-wrapper-12 ${yVelClassName}`}>Y Vel</div>
      </div>
      <div className={`text-wrapper-14 ${divClassName1}`}>Graphs</div>
    </div>
  );
};
