import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library
import "./style.css";

export const Graphs = ({
  className,
  groupClassName,
  rectangleClassName,
  xPosClassName,
  groupClassNameOverride,
  rectangleClassNameOverride,
  yPosClassName,
  divClassName,
  divClassNameOverride,
  xVelClassName,
  groupClassName1,
  rectangleClassName1,
  yVelClassName,
  groupClassName2,
  rectangleClassName2,
  xPosPidClassName,
  groupClassName3,
  rectangleClassName3,
  yPosPidClassName,
  groupClassName4,
  rectangleClassName4,
  xVelPidClassName,
  groupClassName5,
  rectangleClassName5,
  yVelPidClassName,
  divClassName1,
  apiUrl = 'https://vxg0tzfd94.execute-api.eu-west-3.amazonaws.com/test'
}) => {
  const chartRefs = {
    xpos: useRef(null),
    ypos: useRef(null),
    xvel: useRef(null),
    yvel: useRef(null),
    xposPID: useRef(null),
    yposPID: useRef(null),
    xvelPID: useRef(null),
    yvelPID: useRef(null),
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);


  useEffect(() => {
    const createGraph = (ctx, label, dataset) => {
      return new Chart(ctx, {
        type: "line",
        data: {
          labels: dataset.map((item, index) => index),
          datasets: [{
            label: label,
            borderColor: "black",
            borderWidth: 1,
            pointRadius: 0,
            data: dataset,
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

    // Create the graphs
    for (const key of Object.keys(chartRefs.current)) {
      const ctx = chartRefs.current[key]?.getContext("2d");
      if (ctx && data && data[key.toLowerCase()]) {
        const chart = createGraph(ctx, key, data[key.toLowerCase()]);
      }
    }

    // Cleanup function
    return () => {
      for (const ref of Object.values(chartRefs.current)) {
        if (ref) {
          ref.destroy();
        }
      }
    };
  }, [data]);

  return (
    <div className={`graphs ${className}`}>
      <div className={`group-22 ${groupClassName}`}>
        {Object.keys(chartRefs.current).map((key, index) => (
          <div key={xpos}>
            <canvas className={`rectangle-5 ${rectangleClassName}`} ref={(ref) => chartRefs.current[key] = ref}></canvas>
            <div className={`text-wrapper-12 ${xPosClassName}`}>{key}</div>
          </div>
        ))}
      </div>
      <div className={`group-23 ${groupClassNameOverride}`}>
        <canvas ref={chartRefs.XPosPID} className={`rectangle-6 ${rectangleClassName2}`}></canvas>
        <div className={`text-wrapper-13 ${xPosPidClassName}`}>X Pos Pid</div>
      </div>
      <div className={`group-24 ${divClassName}`}>
        <canvas ref={chartRefs.XVel} className={`rectangle-6 ${divClassNameOverride}`}></canvas>
        <div className={`x-vel ${xVelClassName}`}> X Vel</div>
      </div>
      <div className={`group-25 ${groupClassName1}`}>
        <canvas ref={chartRefs.XVelPID} className={`rectangle-6 ${rectangleClassName4}`}></canvas>
        <div className={`x-vel-PID ${xVelPidClassName}`}>X Vel Pid</div>
      </div>
      <div className={`group-26 ${groupClassName2}`}>
        <canvas ref={chartRefs.YPos} className={`rectangle-5 ${rectangleClassNameOverride}`}></canvas>
        <div className={`text-wrapper-12 ${yPosClassName}`}>Y Pos</div>
      </div>
      <div className={`group-27 ${groupClassName3}`}>
        <canvas ref={chartRefs.YPosPID} className={`rectangle-6 ${rectangleClassName3}`}></canvas>
        <div className={`text-wrapper-13 ${yPosPidClassName}`}>Y Pos Pid</div>
      </div>
      <div className={`group-28 ${groupClassName4}`}>
        <canvas ref={chartRefs.YVel} className={`rectangle-5 ${rectangleClassName1}`}></canvas>
        <div className={`text-wrapper-12 ${yVelClassName}`}>Y Vel</div>
      </div>
      <div className={`group-29 ${groupClassName5}`}>
        <canvas ref={chartRefs.YVelPID} className={`rectangle-5 ${rectangleClassName5}`}></canvas>
        <div className={`text-wrapper-12 ${yVelPidClassName}`}>Y Vel Pid</div>
      </div>
      <div className={`text-wrapper-14 ${divClassName1}`}>Graphs</div>
    </div>
  );
};



