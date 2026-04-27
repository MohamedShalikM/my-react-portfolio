import React from "react";
import "../css/experience.css";

const experiences = [
  {
    role: "React Developer Intern",
    company: "Vinusp Infotech Pvt Ltd, Tenkasi",
    duration: "Nov 2025 - Mar 2026",
    description:
      "Developed a modern, responsive portfolio website using React.js, HTML, CSS, and JavaScript to showcase personal projects and skills. Implemented smooth scrolling for enhanced user navigation, glassmorphism UI effects for a sleek and contemporary design, and EmailJS integration for seamless contact form functionality. Created an attractive, neat interface that improved user engagement and visual appeal, demonstrating proficiency in modern frontend technologies and UI/UX best practices.",
    skills: ["ReactJS", "HTML", "CSS", "Javascript"],
  },

  {
    role: "Full Stack Developer Intern",
    company: "Eagle-HiTech SoftClou Pvt Ltd, Chennai",
    duration: "Jul 2025 - Aug 2025",
    description:
      "Developed a full-stack e-commerce website using React for the responsive frontend and Node.js with Express.js backend, integrated with MongoDB for user authentication and secure checkout functionality. Implemented dynamic product cards, advanced filtering options (price high-to-low, low-to-high, and new arrivals), and an engaging hero section with smooth transitions to enhance user experience and browsing efficiency.",
    skills: ["NodeJs","ReactJS", "HTML", "CSS", "Javascript", "MongoDB"],
  },
  {
    role: "Python Full Stack",
    company: "IPCS Global, Tirunelveli",
    duration: "Jan 2025 - Feb 2025",
    description:
      "Developed a Car Showroom Website using Django, HTML, CSS, JavaScript.Implemented backend functionality for managing car listings, user authentication, and database integration.",
    skills: ["Django", "HTML", "CSS", "Javascript", "SQlite"],
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
