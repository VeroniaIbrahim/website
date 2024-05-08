import React, { useEffect, useRef } from "react";
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
  // Define chartRefs object
  const chartRefs = {
    XPos: useRef(),
    XVel: useRef(),
    YPos: useRef(),
    YVel: useRef(),
  };

  useEffect(() => {
    // Create new charts when data changes
    if (SimulationPoints) {
      for (const [key, ref] of Object.entries(chartRefs)) {
        const canvas = ref.current;
        const context = canvas.getContext("2d");

        // Destroy existing chart instance, if any
        if (canvas.chart) {
          canvas.chart.destroy();
        }

        // Create new chart
        canvas.chart = createGraph(context, key, SimulationPoints[key]);
      }
    }
  }, [SimulationPoints]); // Run effect whenever SimulationPoints change

  // Function to create chart
  const createGraph = (ctx, label, data) => {
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((_, index) => index),
        datasets: [
          {
            label: label,
            borderColor: "black",
            borderWidth: 1,
            pointRadius: 0,
            data: data,
            fill: false,
          },
        ],
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
        <canvas
          ref={chartRefs.XPos}
          className={`rectangle-5 ${rectangleClassName}`}
          id={`chart-XPos`}
        ></canvas>
        <div className={`text-wrapper-12 ${xPosClassName}`}>X Pos</div>
      </div>
      <div className={`group-24 ${divClassName}`}>
        <canvas
          ref={chartRefs.XVel}
          className={`rectangle-6 ${divClassNameOverride}`}
        ></canvas>
        <div className={`x-vel ${xVelClassName}`}> X Vel</div>
      </div>
      <div className={`group-26 ${groupClassName2}`}>
        <canvas
          ref={chartRefs.YPos}
          className={`rectangle-5 ${rectangleClassNameOverride}`}
        ></canvas>
        <div className={`text-wrapper-12 ${yPosClassName}`}>Y Pos</div>
      </div>
      <div className={`group-28 ${groupClassName4}`}>
        <canvas
          ref={chartRefs.YVel}
          className={`rectangle-5 ${rectangleClassName1}`}
        ></canvas>
        <div className={`text-wrapper-12 ${yVelClassName}`}>Y Vel</div>
      </div>
      <div className={`text-wrapper-14 ${divClassName1}`}>Graphs</div>
    </div>
  );
};
