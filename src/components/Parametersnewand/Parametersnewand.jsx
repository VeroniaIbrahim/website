import React, { useState } from "react";
import "./style.css";

export const Parametersnewand = () => {
    // State variables to manage input values and popup visibility for Pitch Input
    const [pitchInputValue, setPitchInputValue] = useState("");
    const [isPitchPopupOpen, setIsPitchPopupOpen] = useState(false);
  
    // State variables to manage input values and popup visibility for Roll Input
    const [rollInputValue, setRollInputValue] = useState("");
    const [isRollPopupOpen, setIsRollPopupOpen] = useState(false);
  
    // State variables to manage input values and popup visibility for Pitch PID
    const [pitchKp, setPitchKp] = useState("");
    const [pitchKi, setPitchKi] = useState("");
    const [pitchKd, setPitchKd] = useState("");
    const [isPitchPidPopupOpen, setIsPitchPidPopupOpen] = useState(false);
  
    // State variables to manage input values and popup visibility for Roll PID
    const [rollKp, setRollKp] = useState("");
    const [rollKi, setRollKi] = useState("");
    const [rollKd, setRollKd] = useState("");
    const [isRollPidPopupOpen, setIsRollPidPopupOpen] = useState(false);
  
    // Functions to handle opening and closing popups for Pitch Input
    const openPitchPopup = () => setIsPitchPopupOpen(true);
    const closePitchPopup = () => setIsPitchPopupOpen(false);
  
    // Functions to handle opening and closing popups for Roll Input
    const openRollPopup = () => setIsRollPopupOpen(true);
    const closeRollPopup = () => setIsRollPopupOpen(false);
  
    // Functions to handle opening and closing popups for Pitch PID
    const openPitchPidPopup = () => setIsPitchPidPopupOpen(true);
    const closePitchPidPopup = () => setIsPitchPidPopupOpen(false);
  
    // Functions to handle opening and closing popups for Roll PID
    const openRollPidPopup = () => setIsRollPidPopupOpen(true);
    const closeRollPidPopup = () => setIsRollPidPopupOpen(false);
  
    // Function to handle saving values for Pitch Input
    const savePitchInput = () => {
      // Save the input value and close the popup
      closePitchPopup();
    };
  
    // Function to handle saving values for Roll Input
    const saveRollInput = () => {
      // Save the input value and close the popup
      closeRollPopup();
    };
  
    // Function to handle saving values for Pitch PID
    const savePitchPidInput = () => {
      // Save the input values for Pitch PID and close the popup
      closePitchPidPopup();
    };
  
    // Function to handle saving values for Roll PID
    const saveRollPidInput = () => {
      // Save the input values for Roll PID and close the popup
      closeRollPidPopup();
    };
  return (
    <div className="parametersnewand">
      <div className="group">
        <div className="overlap-group">
          <button className="pitch-input-angle" onClick={openPitchPopup}>Pitch Input Angle</button>
          {/* Pitch Input Popup */}
          {isPitchPopupOpen && (
            <div className="popup">
              <input type="text" value={pitchInputValue} onChange={(e) => setPitchInputValue(e.target.value)} />
              <button onClick={savePitchInput}>OK</button>
              <button onClick={closePitchPopup}>Cancel</button>
            </div>
          )}
        </div>
        <div className="overlap">
          <div className="div">
            <img className="arrow" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-11-1.svg" />
            <div className="ellipse" />
            <div className="flexcontainer">
              <p className="text">
                <span className="text-wrapper">
                  +<br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper">&nbsp;&nbsp;-</span>
              </p>
            </div>
          </div>
          <div className="overlap-2">
            <div className="overlap-3">
              <img className="img" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-11-1.svg" />
              <div className="rectangle" />
              <button className="PID">Pid</button>
            </div>
            <div className="overlap-4">
              <img className="arrow" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-11-1.svg" />
              <div className="ellipse" />
              <div className="flexcontainer-2">
                <p className="text">
                  <span className="text-wrapper">
                    +<br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper">&nbsp;&nbsp;-</span>
                </p>
              </div>
              <img className="arrow-2" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-14-1.svg" />
            </div>
            <div className="overlap-5">
              <img className="img" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-11-1.svg" />
              <div className="rectangle-2" />
              <button className="PID">Pid</button>
            </div>
            <div className="overlap-6">
              <img className="img" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-11-1.svg" />
              <div className="rectangle" />
              <div className="plant">Plant</div>
            </div>
            <div className="overlap-7">
              <img className="line" alt="Line" src="https://c.animaapp.com/EAIPLOME/img/line-34-1.svg" />
              <img className="line-2" alt="Line" src="https://c.animaapp.com/EAIPLOME/img/line-35-1.svg" />
              <img className="arrow-3" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-14-1.svg" />
            </div>
            <div className="sensed-angular">Pitch Angular Velocity</div>
            <div className="pitch-angle">Pitch Angle</div>
            <div className="overlap-8">
              <img className="arrow-4" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-12-1.svg" />
              <img className="arrow-5" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-15-1.svg" />
            </div>
          </div>
          <div className="overlap-9">
            <img className="arrow" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-11-1.svg" />
            <div className="ellipse" />
            <div className="flexcontainer">
              <p className="text">
                <span className="text-wrapper">
                  +<br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper">&nbsp;&nbsp;-</span>
              </p>
            </div>
          </div>
          <div className="overlap-10">
            <div className="overlap-3">
              <img className="img" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-11-1.svg" />
              <div className="rectangle" />
              <button className="PID">Pid</button>
            </div>
            <div className="overlap-4">
              <img className="arrow" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-11-1.svg" />
              <div className="ellipse" />
              <div className="flexcontainer-2">
                <p className="text">
                  <span className="text-wrapper">
                    +<br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper">&nbsp;&nbsp;-</span>
                </p>
              </div>
              <img className="arrow-2" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-14-1.svg" />
            </div>
            <div className="overlap-5">
              <img className="img" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-11-1.svg" />
              <div className="rectangle-2" />
              <button className="PID">Pid</button>
            </div>
            <div className="overlap-11">
              <img className="line-3" alt="Line" src="https://c.animaapp.com/EAIPLOME/img/line-37-1.svg" />
              <img className="arrow-3" alt="Arrow" src="https://c.animaapp.com/EAIPLOME/img/arrow-14-1.svg" />
            </div>
            <div className="roll-angle">Roll Angle</div>
            <div className="sensed-angular-2">Roll Angular Velocity</div>
          </div>
          <img className="line-4" alt="Line" src="https://c.animaapp.com/EAIPLOME/img/line-36-1.svg" />
        </div>
        <div className="roll-input-angle-wrapper">
          <button className="roll-input-angle">Roll Input Angle</button>
        </div>
      </div>
    </div>
  );
};
