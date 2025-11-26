import React, { useState, useEffect } from "react";
import "./index.css";
import me from "../../assets/me.jpg";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

import { IoDocumentText } from "react-icons/io5";

const About = () => {
  const phrases = ["QUAN TRAN", "a CS MAJOR", "a SOFTWARE ENGINEER"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < phrases[currentPhraseIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(
          (prev) => prev + phrases[currentPhraseIndex][charIndex]
        );
        setCharIndex((prev) => prev + 1);
      }, 120);

      return () => clearTimeout(timeout);
    } else {
      const nextPhraseTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 1800);

      return () => clearTimeout(nextPhraseTimeout);
    }
  }, [charIndex, currentPhraseIndex]);

  return (
    <section id="about">
      <h1 className="about-main-title">ABOUT ME</h1>
      <div className="about-container">
        <div className="about-left">
          <div className="about-heading-block">
            <h1 className="about-hi">Hi! I am</h1>

            <h1 className="about-typing">
              {displayedText}
              <span className="ghost">[]</span>
            </h1>
          </div>

          <div className="about-text">
            <p>
              I am an undergraduate at DePauw University, majoring in Computer
              Science and Business Analytics. Originally from Vietnam, I am
              currently based in Greencastle, Indiana. With hands-on experience
              in Web Development, I have built dynamic, interactive applications
              — combining both technical execution and business-minded problem
              solving. I'm driven by curiosity and passionate about film and
              soccer. Whether it's tech, cinema, or a thrilling match, I'm
              always excited for a great conversation!
            </p>
          </div>

          <div className="contact-method">
            <a
              href="http://linkedin.com/in/thequantran"
              target="_blank"
              rel="noreferrer"
              className="slide-link"
              data-hover="LINKEDIN"
            >
              <div className="slide-content">
                <span className="link-text">LINKEDIN</span>
                <FaLinkedin className="link-icon" />
              </div>
            </a>

            <a
              href="https://github.com/Quantr10"
              target="_blank"
              rel="noreferrer"
              className="slide-link"
              data-hover="GITHUB"
            >
              <div className="slide-content">
                <span className="link-text">GITHUB</span>
                <FaGithub className="link-icon" />
              </div>
            </a>

            <a
              href="https://drive.google.com/file/d/1Boh_u1Z9fRMMQIJe2eD8kVt65L3YLpyl/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="slide-link"
              data-hover="RESUME"
            >
              <div className="slide-content">
                <span className="link-text">RESUME</span>
                <IoDocumentText className="link-icon" />
              </div>
            </a>

            <a
              href="mailto:thequantran2005@gmail.com"
              className="slide-link"
              data-hover="EMAIL"
            >
              <div className="slide-content">
                <span className="link-text">EMAIL</span>
                <FaEnvelope className="link-icon" />
              </div>
            </a>
          </div>
        </div>

        <div className="about-right">
          <img src={me} alt="About" />
        </div>
      </div>
    </section>
  );
};

export default About;
