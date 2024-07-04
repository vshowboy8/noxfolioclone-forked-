import React, { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 150) {
        header.classList.add("sticky-header");
      } else {
        header.classList.remove("sticky-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav>
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
