import React from 'react';
import './index.css';
import c from '../../assets/c.png';
import cpp from '../../assets/cpp.png';
import java from '../../assets/java.png';
import javascript from '../../assets/javascript.png';
import nodejs from '../../assets/node.png';
import vuejs from '../../assets/vuejs.png';
import react from '../../assets/react.png';
import firebase from '../../assets/firebase.png';
import bootstrap from '../../assets/bootstrap.png';
import css from '../../assets/css.png';
import python from '../../assets/python.png';
import html from '../../assets/html.png';
import mongodb from '../../assets/mongodb.png'
import git from '../../assets/git.png'
import tableau from '../../assets/tableau.png'
import rcode from '../../assets/rcode.png' 
import typescript from '../../assets/typescript.png'
import postgresql from '../../assets/postgresql.png'
import tailwind from '../../assets/tailwind.png'

const skills = [
  { image: java, name: "Java" },
  { image: c, name: "C" },
  { image: cpp, name: "C++" },
  { image: python, name: "Python" },
  { image: html, name: "HTML" }, 
  { image: css, name: "CSS" },
  { image: javascript, name: "JavaScript" },
  { image: typescript, name: "TypeScript" },
  { image: react, name: "React.js" },
  { image: nodejs, name: "Node.js" },
  { image: vuejs, name: "Vue.js" },
  { image: bootstrap, name: "Bootstrap" },
  { image: tailwind, name: "Tailwind"},
  { image: firebase, name: "Firebase" },
  { image: mongodb, name: "MongoDB" },
  { image: postgresql, name: "PostgreSQL"},
  { image: tableau, name: "Tableau"},
  { image: rcode, name: "RCode"},
  { image: git, name: "Git"},
];

const Skills = () => {
    return (
      <section id="skills" className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-section">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.image} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
}

export default Skills;
