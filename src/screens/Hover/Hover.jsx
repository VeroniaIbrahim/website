import React, { useState } from "react";
import { useWindowWidth } from "../../breakpoints";
import { Buttons } from "../../components/Buttons";
import { Footer } from "../../components/Footer";
import { Graphs } from "../../components/Graphs";
import { NavBar } from "../../components/NavBar";
import { NavBar_2 } from "../../components/NavBar_2";
import { Parameters } from "../../components/Parameters";
import { SimulationStreaming } from "../../components/SimulationStreaming";
import { VideoStream } from "../../components/VideoStream";
//import { URDFViewer } from "../../components/URDFViewer";
import { Amplify } from "aws-amplify";
import awsConfig from "../../aws-export";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./style.css";

Amplify.configure(awsConfig);

export const Hovercomponent = () => {
  const screenWidth = useWindowWidth();
  const [parameterData, setParameterData] = useState(null);
  const [Work, setWork] = useState(null);

  const sendDataToLambda = () => {
    if (!parameterData) {
      console.error("No parameter data to send.");
      return;
    }
    fetch("https://rq0btgzijg.execute-api.eu-west-3.amazonaws.com/teststage", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Specify content type as JSON ?data=${parameterData}
      },
      body: JSON.stringify(parameterData) // Stringify the parameterData object
    })
      .then(response => {
        if (response.ok) {
          console.log('Data sent to Lambda successfully');
          console.log("Parameter Data:", parameterData);
        } else {
          console.error('Failed to send data to Lambda');
        }
      })
      .catch(error => {
        console.error('Error sending data to Lambda:', error);
      });
  };

  const sendDataTostart = () => {
    work = "{1}";
    fetch("https://rq0btgzijg.execute-api.eu-west-3.amazonaws.com/teststage", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Specify content type as JSON ?data=${parameterData}
      },
      body: JSON.stringify(Work) // Stringify the parameterData object
    })
      .then(response => {
        if (response.ok) {
          console.log('Data sent to Lambda successfully');
          console.log("Work:", Work);
        } else {
          console.error('Failed to send data to Lambda');
        }
      })
      .catch(error => {
        console.error('Error sending data to Lambda:', error);
      });
  };

  const sendDataTostop = () => {
    work = "{0}";
    fetch("https://rq0btgzijg.execute-api.eu-west-3.amazonaws.com/teststage", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Specify content type as JSON ?data=${parameterData}
      },
      body: JSON.stringify(Work) // Stringify the parameterData object
    })
      .then(response => {
        if (response.ok) {
          console.log('Data sent to Lambda successfully');
          console.log("Work:", Work);
        } else {
          console.error('Failed to send data to Lambda');
        }
      })
      .catch(error => {
        console.error('Error sending data to Lambda:', error);
      });
  };

  return (
    <div className="hover"
      style={{
        background: "linear-gradient(180deg, rgb(5, 5, 24) 0%, rgb(28.9, 26.25, 126) 100%)",
        height:
          screenWidth < 834
            ? "2700px"
            : screenWidth >= 834 && screenWidth < 1300
              ? "2730px"
              : screenWidth >= 1300
                ? "3248px"
                : undefined,
        width:
          screenWidth < 834
            ? "360px"
            : screenWidth >= 834 && screenWidth < 1300
              ? "834px"
              : screenWidth >= 1300
                ? "1348px"
                : undefined,
      }}
    >
      {screenWidth >= 834 && screenWidth < 1300 && (
        <>
          <Parameters className="parameters-instance" />
          <VideoStream
            className="class-10"
            videoStreamClassNameOverride="class12"
          />
          <SimulationStreaming className="simulation-streaming-instance" />
          <Buttons className="buttons-instance" />
          <Graphs
            className="graphs-instance"
            divClassName="graphs-5"
            divClassName1="graphs-16"
            divClassNameOverride="graphs-6"
            groupClassName="instance-node"
            groupClassName1="graphs-8"
            groupClassName2="graphs-9"
            groupClassName3="graphs-11"
            groupClassName4="graphs-12"
            groupClassName5="graphs-14"
            groupClassNameOverride="graphs-4"
            rectangleClassName="graphs-2"
            rectangleClassName1="graphs-2"
            rectangleClassName2="graphs-6"
            rectangleClassName3="graphs-6"
            rectangleClassName4="graphs-6"
            rectangleClassName5="graphs-6"
            rectangleClassNameOverride="graphs-2"
            xPosClassName="graphs-3"
            xPosPidClassName="graphs-10"
            xVelClassName="graphs-7"
            xVelPidClassName="graphs-13"
            yPosClassName="graphs-3"
            yPosPidClassName="graphs-10"
            yVelClassName="graphs-3"
            yVelPidClassName="graphs-15"
          />
          <NavBar_2 className="nav-bar-tab" />
          <Footer
            className="footer1"
            group="groupfooter1"
            group2="group2footer1"
            controlchefhigh="controlcheifhighfooter1"
            maskgroup="maskgroupfooter1"
            group7="group7footer1"
            textwrapper="textwrapperfooter1"
            textwrapper2="textwrapper2footer1"
            textwrapper3="textwrapper3footer1"
            textwrapper4="textwrapper4footer1"
            textwrapper5="textwrapper5footer1"
            group8="group8footer1"
            group9="group9footer1"
            group10="group10footer1"
            overlab2="overlab2footer"
            overlapwrapper="overlapwrapperfooter1"
            rectangle="rectanglefooter1"
            copyright="copyrightfooter1"
          />
        </>
      )}

      {screenWidth >= 1300 && (
        <>
          <Footer className="footer-instance" />
          <Graphs className="graphs-17" />
          <VideoStream
            className="video-stream-instance"
          />
          <Parameters
            setParameterData={setParameterData}
            className="parameters-2" />
          <SimulationStreaming className="simulation-streaming-2" />
          <Buttons
            sendDataToLambda={sendDataToLambda}
            sendDataTostart={sendDataTostart}
            sendDataTostop={sendDataTostop}
            parameterData={parameterData}
            className="buttons-2" />
          <NavBar
            className="nav-bar-instance2"
          />
        </>
      )}

      {screenWidth < 834 && (
        <>
          <VideoStream
            className="class-9"
            videoStreamClassNameOverride="class-11"
          />
          <Parameters
            className="parameters-3"
            divClassName="parameters-10"
            divClassNameOverride="parameters-13"
            groupClassName="parameters-6"
            groupClassName1="parameters-6"
            groupClassName10="parameters-6"
            groupClassName2="parameters-6"
            groupClassName3="parameters-6"
            groupClassName4="parameters-6"
            groupClassName5="parameters-6"
            groupClassName6="parameters-6"
            groupClassName7="parameters-6"
            groupClassName8="parameters-6"
            groupClassName9="parameters-6"
            groupClassNameOverride="parameters-6"
            overlapGroupClassName="parameters-7"
            overlapGroupClassNameOverride="parameters-7"
            overlapGroupWrapperClassName="parameters-11"
            overlapGroupWrapperClassNameOverride="parameters-11"
            pleaseEnterYourClassName="parameters-31"
            textClassName="parameters-4"
            textClassName1="parameters-14"
            textClassName10="parameters-30"
            textClassName2="parameters-15"
            textClassName3="parameters-16"
            textClassName4="parameters-19"
            textClassName5="parameters-20"
            textClassName6="parameters-23"
            textClassName7="parameters-24"
            textClassName8="parameters-25"
            textClassName9="parameters-26"
            textClassNameOverride="parameters-9"
            xPosKdClassName="parameters-5"
            xPosKdClassNameOverride="parameters-8"
            xPosKdWrapperClassName="parameters-7"
            xPosKiClassName="parameters-5"
            xPosKiClassNameOverride="parameters-8"
            xPosKiWrapperClassName="parameters-7"
            xPosKpClassName="parameters-5"
            xPosKpClassNameOverride="parameters-8"
            xSetPointClassName="parameters-5"
            xSetPointClassNameOverride="parameters-8"
            xSetPointWrapperClassName="parameters-7"
            xVelKdClassName="parameters-5"
            xVelKdClassNameOverride="parameters-8"
            xVelKdWrapperClassName="parameters-7"
            xVelKiClassName="parameters-5"
            xVelKiClassNameOverride="parameters-8"
            xVelKiWrapperClassName="parameters-7"
            xVelKpClassName="parameters-5"
            xVelKpClassNameOverride="parameters-8"
            xVelKpWrapperClassName="parameters-7"
            yPosKdClassName="parameters-5"
            yPosKdClassNameOverride="parameters-8"
            yPosKdWrapperClassName="parameters-7"
            yPosKiClassName="parameters-5"
            yPosKiClassNameOverride="parameters-8"
            yPosKiWrapperClassName="parameters-7"
            yPosKpClassName="parameters-5"
            yPosKpClassNameOverride="parameters-8"
            ySetPointClassName="parameters-5"
            ySetPointClassNameOverride="parameters-8"
            ySetPointWrapperClassName="parameters-7"
            yVelKdClassName="parameters-5"
            yVelKdClassNameOverride="parameters-8"
            yVelKdWrapperClassName="parameters-7"
            yVelKiClassName="parameters-5"
            yVelKiClassNameOverride="parameters-8"
            yVelKiWrapperClassName="parameters-7"
            yVelKpClassName="parameters-5"
            yVelKpClassNameOverride="parameters-8"
            yVelKpWrapperClassName="parameters-7"
          />
          <SimulationStreaming
            className="simulation-streaming-3"
            simulationStreamingClassName="simulation-streaming-4"
          />
          <Buttons
            className="buttons-3"
            groupClassName="buttons-4"
            groupClassNameOverride="buttons-7"
            overlapClassName="buttons-8"
            overlapClassNameOverride="buttons-5"
            overlapGroupClassName="buttons-5"
            overlapGroupClassNameOverride="buttons-8"
            overlapWrapperClassName="buttons-10"
            overlapWrapperClassNameOverride="buttons-12"
            resetClassName="buttons-9"
            setClassName="buttons-11"
            startClassName="buttons-9"
            stopClassName="buttons-6"
          />
          <Graphs
            className="graphs-18"
            divClassName="graphs-24"
            divClassName1="graphs-35"
            divClassNameOverride="graphs-20"
            groupClassName="graphs-19"
            groupClassName1="graphs-26"
            groupClassName2="graphs-28"
            groupClassName3="graphs-30"
            groupClassName4="graphs-31"
            groupClassName5="graphs-33"
            groupClassNameOverride="graphs-22"
            rectangleClassName="graphs-20"
            rectangleClassName1="graphs-20"
            rectangleClassName2="graphs-20"
            rectangleClassName3="graphs-20"
            rectangleClassName4="graphs-20"
            rectangleClassName5="graphs-20"
            rectangleClassNameOverride="graphs-20"
            xPosClassName="graphs-21"
            xPosPidClassName="graphs-29"
            xVelClassName="graphs-25"
            xVelPidClassName="graphs-32"
            yPosClassName="graphs-23"
            yPosPidClassName="graphs-29"
            yVelClassName="graphs-27"
            yVelPidClassName="graphs-34"
          />
          <NavBar_2
            className="nav-bar-tab-instance"
            controltotal1="logo1"
            navbarclassName="nav-bar1"
            controlchef1="nav-bar2"
            controlchef2="nav-bar3"
            controlchef3="nav-bar4"
            navbardrop="nav-bar5"
            navbartext="nav-bar6"
            dropdowncontentexperiments="nav-bar7"
            dropdowncontenttheories="nav-bar8"
          />
          <Footer
            className="footer5"
            group="groupfooter"
            group2="group2footer"
            controlchefhigh="controlcheifhighfooter"
            maskgroup="maskgroupfooter"
            group7="group7footer"
            buttonf="buttonfooter"
            textwrapper="textwrapperfooter"
            textwrapper2="textwrapper2footer"
            textwrapper3="textwrapper3footer"
            textwrapper4="textwrapper4footer"
            textwrapper5="textwrapper5footer"
            group8="group8footer"
            group9="group9footer"
            group10="group10footer"
            overlab2="overlab2footer"
            overlapwrapper="overlapwrapperfooter"
            rectangle="rectanglefooter"
            copyright="copyrightfooter"
          />
        </>
      )}
    </div>
  );
};

export const Hover = withAuthenticator(Hovercomponent);
