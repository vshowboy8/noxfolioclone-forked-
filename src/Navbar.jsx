import React, { useState, useEffect } from "react";
import "./Navbar.css";

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
  return (
    <>
      <header className="container-1440">
        <nav className={navbarClasses.join(" ")}>
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
            <button className="toggle_button">
              <img src="sidebar-tottler.svg" alt=""></img>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
