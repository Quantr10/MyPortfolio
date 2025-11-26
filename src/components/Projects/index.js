import React, { useState, useEffect, useRef } from "react";
import "./index.css";

import pic1 from "../../assets/1.png";
import pic2 from "../../assets/2.png";
import pic3 from "../../assets/3.png";
import pic4 from "../../assets/4.png";
import pic5 from "../../assets/5.png";
import pic6 from "../../assets/6.png";
import pic7 from "../../assets/7.png";
import pic8 from "../../assets/8.png";
import pic10 from "../../assets/10.png";
import pic11 from "../../assets/11.png";
import pic12 from "../../assets/12.png";
import pic13 from "../../assets/13.png";
import pic14 from "../../assets/14.png";
import pic15 from "../../assets/15.png";
import pic16 from "../../assets/16.png";
import pic17 from "../../assets/17.png";
import pic18 from "../../assets/18.png";
import pic19 from "../../assets/19.png";
import pic20 from "../../assets/20.png";
import pic21 from "../../assets/21.png";
import pic22 from "../../assets/22.png";
import pic23 from "../../assets/23.png";
import pic24 from "../../assets/24.png";
import pic25 from "../../assets/25.png";

import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projectData = [
  {
    id: "01",
    digit: "1",
    title: "DEVSHIELD",
    description: "...",
    tech: ["..."],
    images: [],
    link: "#",
    github: "#",
  },

  {
    id: "02",
    digit: "2",
    title: "ITINERME",
    description:
      "An AI-driven travel planner that creates personalized multi-day itineraries in minutes, offering interactive maps, intelligent route suggestions, and real-time syncing for seamless editing and sharing on mobile.",
    tech: ["Flutter", "Firebase", "OpenAI API", "Google APIs"],
    images: [pic25, pic24, pic18, pic17, pic19, pic20, pic21, pic22, pic23],
    link: "#",
    github: "https://github.com/Quantr10/ItinerMe",
  },
  {
    id: "03",
    digit: "3",
    title: "PAWRIDES",
    description:
      "A real-time ride-booking platform designed for the DePauw University community, offering live ride tracking, trip history management, and secure user authentication for a smooth and reliable campus transportation experience.",
    tech: ["HTML/CSS", "JavaScript", "React.js", "Firebase", "Vercel"],
    images: [pic1, pic2, pic3, pic8, pic4],
    link: "https://pawrides.vercel.app/homepage/index.html#",
    github: "https://github.com/Quantr10/Pawrides",
  },

  {
    id: "04",
    digit: "4",
    title: "ECOXCHANGE",
    description:
      "A campus-focused platform designed to make sustainable living easier by helping DePauw students buy and sell secondhand items within a trusted community. EcoXchange encourages reuse, reduces waste, and makes everyday essentials more affordable.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Firebase",
      "REST API",
      "Stripe",
      "Heroku",
    ],
    images: [pic16, pic10, pic11, pic12, pic13, pic14, pic15],
    link: "#",
    github: "https://github.com/Quantr10/EcoXchange",
  },
  {
    id: "05",
    digit: "5",
    title: "OUROBORUS",
    description:
      "A modern take on the classic Snake game, built with improved visuals, smoother movement, and evolving challenges. Features dynamic obstacles, power-ups, and progressive levels for a more engaging gameplay experience.",
    tech: ["C++", "Raylib"],
    images: [pic5, pic6, pic7],
    link: "#",
    github: "https://github.com/Quantr10/Ouroborus",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const slides = sectionsRef.current;
      let closestIndex = 0;
      let closestDistance = Infinity;

      const viewportCenter = window.innerHeight / 2;

      slides.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.top + rect.height / 2;
        const distance = Math.abs(slideCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setCurrentIndex(closestIndex);
      setSlideIndex(0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const current = projectData[currentIndex];

  const nextSlide = () => {
    setSlideIndex((prev) =>
      prev === current.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setSlideIndex((prev) =>
      prev === 0 ? current.images.length - 1 : prev - 1
    );
  };

  if (isMobile) {
    return (
      <section id="projects" className="scroll-projects mobile">
        <h1 className="projects-mobile-title">PROJECTS</h1>

        {projectData.map((p, i) => (
          <div key={i} className="mobile-project">
            <div className="big-number">
              <span className="digit-fixed">0</span>
              <span className="digit-flip">{p.digit}</span>
            </div>

            <h2 className="project-title-left">{p.title}</h2>

            <div className="tech-stack-left">
              {p.tech.map((t, idx) => (
                <React.Fragment key={idx}>
                  <span className="tech-item">{t}</span>
                  {idx !== p.tech.length - 1 && (
                    <span className="dot-separator"></span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="project-desc-left">{p.description}</p>

            <div className="slideshow-container mobile-slideshow">
              <div
                className="slide-track"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              >
                {p.images.map((img, idx) => (
                  <img key={idx} className="slide-image" src={img} alt="" />
                ))}
              </div>

              <button
                className="slider-btn mobile-btn left"
                onClick={prevSlide}
              >
                <FaChevronLeft />
              </button>

              <button
                className="slider-btn mobile-btn right"
                onClick={nextSlide}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="links-left">
              <a
                href={p.link}
                target="_blank"
                className="slide-link"
                data-hover="LIVE"
              >
                <div className="slide-content">
                  <span className="link-text">LIVE</span>
                  <FiExternalLink className="link-icon" />
                </div>
              </a>

              <a
                href={p.github}
                target="_blank"
                className="slide-link"
                data-hover="GITHUB"
              >
                <div className="slide-content">
                  <span className="link-text">GITHUB</span>
                  <FaGithub className="link-icon" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section id="projects" className="scroll-projects">
      <div className="left-panel">
        <div className="left-hover-area">
          <div className="big-number">
            <span className="digit-fixed">0</span>
            <span key={current.digit} className="digit-flip">
              {current.digit}
            </span>
          </div>

          <h2 className="project-title-left">{current.title}</h2>

          <div className="tech-stack-left">
            {current.tech.map((t, i) => (
              <React.Fragment key={i}>
                <span className="tech-item">{t}</span>
                {i !== current.tech.length - 1 && (
                  <span className="dot-separator"></span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="project-desc-left">{current.description}</p>

          <div className="links-left">
            <a
              href={current.link}
              target="_blank"
              className="slide-link"
              data-hover="LIVE"
            >
              <div className="slide-content">
                <span className="link-text">LIVE</span>
                <FiExternalLink className="link-icon" />
              </div>
            </a>

            <a
              href={current.github}
              target="_blank"
              className="slide-link"
              data-hover="GITHUB"
            >
              <div className="slide-content">
                <span className="link-text">GITHUB</span>
                <FaGithub className="link-icon" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <h1 className="right-sticky-title">PROJECTS</h1>

        {projectData.map((p, i) => (
          <section
            key={i}
            data-index={i}
            className="project-slide"
            ref={(el) => (sectionsRef.current[i] = el)}
          >
            <div className="slideshow-container">
              <div
                className="slide-track"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              >
                {p.images.map((img, idx) => (
                  <img key={idx} className="slide-image" src={img} alt="" />
                ))}
              </div>

              <button className="slider-btn left" onClick={prevSlide}>
                <FaChevronLeft />
              </button>

              <button className="slider-btn right" onClick={nextSlide}>
                <FaChevronRight />
              </button>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Projects;
