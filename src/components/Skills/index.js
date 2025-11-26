import React, { useEffect } from "react";
import "./index.css";

const tech = {
  languages: [
    { icon: "devicon-java-plain colored", name: "Java" },
    { icon: "devicon-cplusplus-plain colored", name: "C/C++" },
    { icon: "devicon-python-plain colored", name: "Python" },
    { icon: "devicon-html5-plain colored", name: "HTML" },
    { icon: "devicon-css3-plain colored", name: "CSS" },
    { icon: "devicon-javascript-plain colored", name: "JavaScript" },
    { icon: "devicon-typescript-plain colored", name: "TypeScript" },
    { icon: "devicon-dart-plain colored", name: "Dart" },
    { icon: "devicon-go-plain colored", name: "Go" },
    { icon: "devicon-kotlin-plain colored", name: "Kotlin" },
    { icon: "devicon-swift-plain colored", name: "Swift" },
  ],

  frameworks: [
    { icon: "devicon-react-original colored", name: "React.js" },
    { icon: "devicon-nextjs-plain", name: "Next.js" },
    { icon: "devicon-vuejs-plain colored", name: "Vue.js" },
    { icon: "devicon-nodejs-plain colored", name: "Node.js" },
    { icon: "devicon-express-original", name: "Express.js" },
    { icon: "devicon-tailwindcss-plain colored", name: "Tailwind CSS" },
    { icon: "devicon-bootstrap-plain colored", name: "Bootstrap" },
    { icon: "devicon-firebase-plain colored", name: "Firebase" },
    { icon: "devicon-spring-plain colored", name: "Spring" },
    { icon: "devicon-flutter-plain colored", name: "Flutter" },
  ],

  database: [
    { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
    { icon: "devicon-mysql-plain colored", name: "MySQL" },
    { icon: "devicon-postgresql-plain colored", name: "PostgreSQL" },
  ],

  tools: [
    { icon: "devicon-docker-plain colored", name: "Docker" },
    { icon: "devicon-git-plain colored", name: "Git" },
    { icon: "devicon-amazonwebservices-plain-wordmark colored", name: "AWS" },
    { icon: "devicon-azure-plain colored", name: "Azure" },
    { icon: "devicon-googlecloud-plain colored", name: "Google Cloud" },
    { icon: "devicon-kubernetes-plain colored", name: "Kubernetes" },
    { icon: "devicon-vscode-plain colored", name: "VS Code" },
    { icon: "devicon-androidstudio-plain colored", name: "Android Studio" },
    { icon: "devicon-powershell-plain colored", name: "PowerShell" },
  ],
};

const Section = ({ title, items }) => (
  <div className="skill-row fade-slide">
    <div className="skill-title">{title}</div>

    <div className="skill-grid" style={{ "--count": items.length }}>
      {items.map((t, idx) => (
        <div
          className="skill-item stagger-skill"
          key={idx}
          style={{ "--i": idx }}
        >
          <i className={`${t.icon} skill-icon`}></i>
          <span>{t.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  useEffect(() => {
    const options = { threshold: 0.15 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.remove("visible");
          entry.target.classList.add("hidden");
        }
      });
    }, options);

    const rows = document.querySelectorAll(".fade-slide");
    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-wrapper">
      <h1 className="skills-main-title">SKILLS</h1>
      <div className="skills-inner">
        <Section title="LANGUAGES" items={tech.languages} />
        <Section title="FRAMEWORKS" items={tech.frameworks} />
        <Section title="DATABASES" items={tech.database} />
        <Section title="TOOLS" items={tech.tools} />
      </div>
    </section>
  );
};

export default Skills;
