import React from "react";
import "../css/project.css";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Developed a dynamic personal portfolio using React for component-based architecture, HTML for semantic structure, and CSS for responsive styling across devices.Features include animated project galleries, skill progress bars, smooth scrolling navigation, and a contact form with form validation, all optimized for performance and accessibility.Highlights proficiency in React hooks, state management, modern CSS (Flexbox/Grid), and responsive design—ideal for frontend developer or UI/UX roles.",
    tech: ["React","HTML","CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Raftel: Fashion E-Commerce App",
    description: "Developed a responsive fashion e-commerce website with React frontend (HTML/CSS/JavaScript) for dynamic product displays, Django backend, and SQLite database handling clothing listings, sizes, prices, shopping cart, and checkout processes.",
    tech: ["React","Django","HTML","CSS","Javascript","SQLite"],
    link: "#",
  },

  {
     title: "DriveX: Interactive Car Showroom",
    description: "Developed a straightforward car showroom site using HTML, CSS, and JavaScript for the frontend, paired with Django backend and SQLite database to showcase car listings, models, and rates.",
    tech: ["Django","HTML","CSS","Javascript","SQLite"],
    link: "#",
  },

  {
    title: "Drivex: 2025 Luxury Car Magazine",
    description: "Developed DriveX, a digital magazine exploring top luxury vehicles of 2025, including electric hypercars, performance SUVs, and bespoke designs from brands like Porsche and Ferrari.",
    tech: ["HTML", "CSS"],
    link: "https://drivex-magazine.neocities.org/",
  },

];

function Project() {
  return (
    <section id="project" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-sub">
        A selection of projects showcasing my skills and experience.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a target = "_blank" href={project.link} className="project-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
