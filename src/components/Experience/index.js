import React from "react";
import "./index.css";

const ExperienceText = ({ job, company, time, description }) => {
  return (
    <div className="experience">
      <h3 className="company-name exp-line">{company}</h3>

      <div className="exp-row-2 exp-line">
        <p className="job-title">{job}</p>
        <p className="job-time-pill">{time}</p>
      </div>
    </div>
  );
};

const ExperienceList = () => {
  const experiences = [
    {
      job: "Software Engineer Intern",
      company: "IMT SOLUTIONS",
      time: "May 2025 – Aug 2025",
    },
    {
      job: "Full-Stack Developer Intern",
      company: "AIGLOW.EDU",
      time: "Jan 2025 – Apr 2025",
    },
    {
      job: "Computer Science Lab Tutor",
      company: "DEPAUW COMPUTER SCIENCE DEPARTMENT",
      time: "August 2023 – Present",
    },
  ];

  return (
    <section id="experience" className="experience-wrapper">
      <div className="experience-left">
        {experiences.map((exp, idx) => (
          <ExperienceText key={idx} {...exp} />
        ))}
      </div>

      <div className="experience-right">
        <h1 className="sticky-title">
          WORK <br />
          <div className="experience-line">EXPERIENCE</div>
        </h1>
      </div>
    </section>
  );
};

export default ExperienceList;
