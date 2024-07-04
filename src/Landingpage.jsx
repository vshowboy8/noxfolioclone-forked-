import React from "react";
import Bglines from "./Bglines";
import "./landingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Landingpage() {
  return (
    <>
      <div className="landingpage">
        <Bglines />
        <div className="inner_content_container">
          <div className="Landing_content">
            <span>Hello, i’m</span>
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
                <span class="count-text plus" data-from="0" data-to="13">
                  13
                </span>
                <span class="counter-title">Years Of Experience</span>
              </div>
              <div class="counter-item counter-text-wrap">
                <span class="count-text k-plus" data-from="0" data-to="8">
                  8
                </span>
                <span class="counter-title">Project Complete</span>
              </div>
              <div class="counter-item counter-text-wrap">
                <span class="count-text percent" data-from="0" data-to="99">
                  99
                </span>
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
