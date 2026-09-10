import React from "react";
import "../css/project.css";
import Project1 from '../assets/Portfolio.png';
import Project2 from '../assets/Raftel Fashion.png';
import Project3 from '../assets/Leaf Disease Detection.png';
import Project4 from '../assets/Drivex Magazine.png';
// import Project5 from '../assets/Drivex Showroom.png';
const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Developed a responsive React portfolio with animated project galleries, skill progress bars, smooth scrolling, and validated contact form. Leverages semantic HTML, Flexbox CSS, and modern responsive design for optimal performance and accessibility—perfect for frontend/UI roles.",
    img: Project1,
    tech: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://my-react-portfolio-ashy.vercel.app/",
  },
  {
    title: "Elraft: Fashion E-Commerce App",
    description:
      "Developed a fully responsive fashion e-commerce website featuring a React frontend for dynamic product displays, a Node.js and Express.js backend, and MongoDB for managing clothing listings, pricing, shopping cart functionality, and checkout processes.",
    img: Project2,
    tech: ["React JS", "Node JS","Express JS", "MongoDB","HTML", "CSS", "Javascript"],
    link: "https://raftel-fashion.vercel.app/",
  },
  {
    title: "Leaf Disease Detection using Yolov8 Deep Learning",
    description: "Developed a website where farmers can upload their leaf images and get disease identification so that it will be prevent initially.",
    img: Project3,
    tech:["Fast API","Yolov8","Ultralytics","Pytorch","Python","OpenCV","PyYAML","Scipy","Torch-Vision","HTML","CSS","JavaScript","ReactJS"],
    link:"https://leaf-disease-detection-using-yolov8.vercel.app/",
  },

  // {
  //   title: "DriveX: Interactive Car Showroom",
  //   description:
  //     "Developed a straightforward car showroom site using HTML, CSS, and JavaScript for the frontend, paired with Django backend and SQLite database to showcase car listings, models, and rates.",
  //   img: Project3,
  //   tech: ["Django", "HTML", "CSS", "Javascript", "SQLite"],
  //   link: "#",
  // },

  {
    title: "Drivex: 2025 Luxury Car Magazine",
    description:
      "Developed DriveX, a digital magazine exploring top luxury vehicles of 2025, including electric hypercars, performance SUVs, and bespoke designs from brands like Porsche and Ferrari.",
    img: Project4,
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
            <img className = "project-img" src={project.img} alt={project.title} />
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
