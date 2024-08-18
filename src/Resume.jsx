import React from "react";
import "./Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <>
      <div className="resume_container padded-container container-1440">
        <div className="resume_left">
          <div className="big-icon">
            <img src="./asterisk (1).png" />
          </div>
        </div>
        <div className="resume_right"></div>
      </div>
    </>
  );
}

export default Resume;
