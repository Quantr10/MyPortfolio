import React, { useEffect, useState } from "react";
import logo1 from "../../assets/logo1.jpg";
import "./index.css";

const Intro = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const rotateDeg = scrollY * 0.5;

  return (
    <section id="intro">
      <div className="background-text">
        <div>
          <span className="faded">QUAN</span>
          <span className="normal">TRAN</span>
        </div>
        <div>
          <span className="faded">QUAN</span>
          <span className="normal">TRAN</span>
        </div>
        <div>
          <span className="faded">QUAN</span>
          <span className="normal">TRAN</span>
        </div>
      </div>

      <div className="intro-center">
        <img
          src={logo1}
          alt="Profile"
          className="intro-logo"
          style={{ transform: `rotate(${rotateDeg}deg)` }}
        />
      </div>
    </section>
  );
};

export default Intro;
