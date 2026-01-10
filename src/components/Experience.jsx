import React from "react";
import "../css/experience.css";

const experiences = [
{
    role: "React Developer Intern",
    company: "Vinusp Infotech Pvt Ltd, Tenkasi",
    duration: "Nov 2025 - Jan 2026",
    description:
      "Enhanced a responsive e-commerce website using HTML, CSS, and JavaScript, enabling smooth product showcase,browsing, and user interaction.",
    skills: ["ReactJS", "HTML","CSS","Javascript","NodeJS","MongoDB"],
  },

  {
    role: "Full Stack Developer Intern",
    company: "Eagle-HiTech SoftClou Pvt Ltd, Chennai",
    duration: "Jul 2025 - Aug 2025",
    description:
      "Enhanced a responsive e-commerce website using HTML, CSS, and JavaScript, enabling smooth product showcase,browsing, and user interaction.",
    skills: ["Django", "HTML","CSS","Javascript","SQLite"],
  },
  {
    role: "Python Full Stack",
    company: "IPCS Global, Tirunelveli",
    duration: "Jan 2025 - Feb 2025",
    description:
      "Developed a Car Showroom Website using Django, HTML, CSS, JavaScript.Implemented backend functionality for managing car listings, user authentication, and database integration.",
    skills: ["Django", "HTML","CSS","Javascript","SQLite"],
  },
];

function Experience() {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Internship Experience</h2>
      <p className="experience-sub">
        Hands-on industry experience gained through internships.
      </p>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="exp-header">
              <h3>{exp.role}</h3>
              <span className="company">{exp.company}</span>
            </div>

            <span className="duration">{exp.duration}</span>

            <p className="exp-desc">{exp.description}</p>

            <div className="exp-skills">
              {exp.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
