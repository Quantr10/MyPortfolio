import React from 'react';
import "./index.css";

const ExperienceText = ({ job, company, time, location, description }) => {
    return (
        <div>
            <div className="experience-header">
                <p className="job-title">{job} - {company}</p>
                <p>{location}</p>
            </div>
            <div className="experience-text">
                <p className="job-time">{time}</p>
            </div>
            <div className="experience-text">
                <p className="job-description">{description}</p>
            </div>
        </div>
    );
};

const ExperienceList = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="experience-list">
                {[
                    {
                        job: "Computer Science Lab Tutor",
                        company: "DePauw’s Computer Science Department",
                        time: "August 2024 - Present",
                        location: "Greencastle, IN",
                        description: 
                        <ul>
                            <li>Guided 50 students during lab sessions, providing hands-on assistance with Java coding exercises and project development, fostering stronger programming skills.</li>
                            <li>Conducted night tutoring sessions, leading to a significant improvement in students' Java programming and debugging skills, with an average 25% increase in grades.</li>
                            <li>Collaborated with faculty to develop supplemental learning materials and tailored assistance for diverse student learning needs, enhancing overall comprehension and engagement in Java programming.</li>
                        </ul>
                    }
                ].map((experience) => (
                    <div className="experience">
                        <ExperienceText
                            job={experience.job}
                            company={experience.company}
                            time={experience.time}
                            location={experience.location}
                            description={experience.description} 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceList;
