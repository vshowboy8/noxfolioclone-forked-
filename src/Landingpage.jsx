import React from "react";
import "./landingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Counter from "./Counter";

function Landingpage() {
  return (
    <>
      <div className="landingpage container-1440">
        <div className="inner_content_container">
          <div className="Landing_content">
            <span className="h2">Hello, i’m</span>
            <h1>
              <b>Roy C. Jones</b>
              <br />
              web designer
            </h1>
            <p>
              We denounce with righteous indignation dislike demoralized by the
              charms of pleasure
            </p>
            <div className="hero-buttons">
              <button className="button-primary">
                Hire Me
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ color: "#000000" }}
                />
              </button>
              <button className="button-secondary">
                Download Resume
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ color: "#fff" }}
                />
              </button>
            </div>
          </div>
          <div className="number-counter">
            <div className="counter-container">
              <div class="counter-item counter-text-wrap">
                <Counter number={13} />
                <span class="counter-title">Years Of Experience</span>
              </div>
              <div class="counter-item counter-text-wrap">
                <Counter number={8} />
                <span class="counter-title">Project Complete</span>
              </div>
              <div class="counter-item counter-text-wrap">
                <Counter number={99} additionalContent="Extra" />
                <span class="counter-title">Client Satisfactions</span>
              </div>
            </div>
          </div>
          <div className="Landing_image">
            <div class="bg-circle"></div>
            <img src="me.png" alt=""></img>
            <div class="progress-shape">
              <img src="progress-shape.png" alt="Progress" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
