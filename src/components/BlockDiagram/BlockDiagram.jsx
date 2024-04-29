/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const BlockDiagram = ({ className }) => {
  return (
    <div className={`block-diagram ${className}`}>
      <div className="pitch-set-point-wrapper">
        <div className="pitch-set-point">Pitch Set Point</div>
      </div>
      <div className="overlap-5">
        <div className="overlap-6">
          <div className="summation-point" />
          <div className="text-wrapper-2">
            +<br />
            &nbsp;&nbsp;-
          </div>
          <img className="arrow-3" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-1-3.svg" />
        </div>
        <div className="overlap-7">
          <div className="pitch-angle">Pitch Angle</div>
          <div className="overlap-8">
            <div className="setpoints-box" />
            <div className="position-pid">Pid</div>
            <div className="summation-point-2" />
            <div className="text-wrapper-3">
              +<br />
              &nbsp;&nbsp;-
            </div>
            <img className="arrow-4" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-2-3.svg" />
            <img className="arrow-5" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-3-3.svg" />
          </div>
          <div className="sensed-angular">Pitch Angular Velocity</div>
          <div className="overlap-9">
            <div className="setpoints-box-2" />
            <div className="position-pid-2">Pid</div>
            <div className="img-box" />
            <div className="setpoints-box-3" />
            <div className="position-pid-3">Pid</div>
            <div className="text-wrapper-4">Plant</div>
            <img className="arrow-6" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-4-1.svg" />
            <img className="arrow-7" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-5-1.svg" />
            <img className="arrow-8" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-16-1.svg" />
            <img className="arrow-9" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-13-1.svg" />
          </div>
          <div className="overlap-10">
            <div className="setpoints-box" />
            <div className="position-pid">Pid</div>
            <div className="summation-point-2" />
            <img className="arrow-4" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-11-1.svg" />
            <img className="arrow-5" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-12-1.svg" />
            <div className="text-wrapper-3">
              +<br />
              &nbsp;&nbsp;-
            </div>
          </div>
          <div className="roll-angle">Roll Angle</div>
          <div className="overlap-11">
            <img className="arrow-10" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-8-1.svg" />
            <img className="line-6" alt="Line" src="https://c.animaapp.com/aDg8NBB3/img/line-2-3.svg" />
          </div>
          <div className="overlap-12">
            <img className="arrow-11" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-9-1.svg" />
            <img className="line-7" alt="Line" src="https://c.animaapp.com/aDg8NBB3/img/line-1-3.svg" />
          </div>
          <div className="sensed-angular-2">Roll Angular Velocity</div>
          <div className="overlap-13">
            <img className="arrow-12" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-14-1.svg" />
            <img className="line-8" alt="Line" src="https://c.animaapp.com/aDg8NBB3/img/line-8-1.svg" />
          </div>
          <div className="overlap-14">
            <img className="arrow-13" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-15-1.svg" />
            <img className="line-9" alt="Line" src="https://c.animaapp.com/aDg8NBB3/img/line-5-3.svg" />
          </div>
        </div>
        <div className="overlap-group-3">
          <div className="summation-point" />
          <img className="arrow-3" alt="Arrow" src="https://c.animaapp.com/aDg8NBB3/img/arrow-10-1.svg" />
          <div className="text-wrapper-2">
            +<br />
            &nbsp;&nbsp;-
          </div>
        </div>
      </div>
      <div className="roll-set-point-wrapper">
        <div className="roll-set-point">Roll Set Point</div>
      </div>
    </div>
  );
};
