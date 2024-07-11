import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useBodyClass } from './BodyClassContext';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  // overlay

  const { addClass } = useBodyClass();

  const handleAddClass = () => {
    addClass('side-content-visible'); // Specify the class name to add
  };
  return (
    <>
      <header>
        <nav className={navbarClasses.join(" ")}>
          <div className="nav_inner container-1440">
            <div className="nav_logo">
              <img src="logo (8).png" alt="" />
            </div>
            <ul>
              <a href="/">Home</a>
              <a href="/">About US</a>
              <a href="/">Offer</a>
              <a href="/">Contact US</a>
            </ul>
            <div className="nav_button">
              <button onClick={handleAddClass} className="toggle_button">
                <img src="sidebar-tottler.svg" alt=""></img>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
