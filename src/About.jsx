import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <div className="full-container">
        <div className="about_container container-1440">
          <div className="left_content">
            <div className="about_content">
              <span className="sub-title">About Me</span>
              <h2>
                Professional <span>Problem Solutions </span>For Digital Products
              </h2>
              <p>
                At vero eos et accusamus etodio dignissimos ducimus praesentium
                voluptatum corrupti quos dolores quas molestias excepturi sint
                occaecati cupiditate provident qui officia deserunt mollitia
                animi, id est laborum et dolorum
              </p>
            </div>
            <div className="list-items">
              <ul className="list-collection">
                <li>Branding & Design</li>
                <li>Digital Marketing</li>
                <li>Web Development</li>
                <li>Product Design</li>
              </ul>
            </div>
            <div className="about-info-box">
              <div className="info-box-item">
                <i>
                  <FontAwesomeIcon icon="fa-regular fa-envelope" />
                </i>
                <div class="content">
                  <span>Email Us</span>
                  <br />
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </div>
              </div>
              <div className="info-box-item">
                <i></i>
                <div class="content">
                  <span>Make A Call</span>
                  <br />
                  <a href="callto:+000(123)45688">+880 (123) 456 88</a>
                </div>
              </div>
            </div>
          </div>
          <div className="about_image">
            <img src="./about.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
