import React, { useState } from 'react'
import './index.css'
import { FaShareSquare, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import pic1 from "../../assets/1.png"
import pic2 from "../../assets/2.png"
import pic3 from "../../assets/3.png"
import pic4 from "../../assets/4.png"

const ProjectSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
  };

  const goToNext = () => {
      setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
  };

  return (
    <div className="project-slider-container">
      <button className="arrow left-arrow" onClick={goToPrevious}><FaChevronLeft /></button>
      <div className="project-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>
      <button className="arrow right-arrow" onClick={goToNext}><FaChevronRight /></button>
    </div>
  );
};

const ProjectText = ({title, type, description, link1, link2}) => {
  return (
    <div className="project-text">
      <p className="project-title">{title}</p>
      <p className="project-type">{type}</p>
      <p className="project-description">{description}</p>

        <div className="project-button">
          <a href={link1} target="_blank" rel="noreferrer">
            <span><FaShareSquare /></span>Live
          </a>
          <a href={link2} target="_blank" rel="noreferrer">
            <span><FaMagnifyingGlass/></span>Learn more
          </a>
        </div>
    </div>
  )
}

const Projects = () => {  
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {[
          {
            title: "Pawrides",
            type: "Web application",
            description: "A website that enables real-time ride booking with ride tracking, trip history management features; utilizing Firebase for real-time database management and user authentication, delivering a student-focused solution.",
            link1: "",
            link2: "https://github.com/Quantr10/Pawrides",
            images: [pic1,pic2,pic3,pic4]
          },
          {
            title: "Ouroborus",
            type: "Game Development Project",
            description: "A modern Snake game developed in C++ using Raylib, featuring enhanced graphics and updated mechanics. Utilized advanced data structures like Double-Ended Queue and Priority Queue to optimize power-ups, dynamic obstacles, and level progression.",
            link1: "",
            link2: "https://github.com/Quantr10/Ouroborus",
            images: [pic1,pic2,pic3] 
          }
        ].map((project) => (
          <div className="project">
            <ProjectText
                title={project.title}
                type={project.type}
                description={project.description}
                link1={project.link1}
                link2={project.link2}
            />
            <ProjectSlider images={project.images} />
          </div>
        ))} 
      </div>
    </section>
  )
}

export default Projects;


