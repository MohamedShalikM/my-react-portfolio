import React from "react";
import "../css/education.css";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    institute: "JP College of Engineering, Tenkasi",
    duration: "2022 – 2026",
    grade: "CGPA: 8.44"
  },
  {
    degree: "Higher Secondary Education (Class 12) - Computer Science",
    institute: "SeventhDay Adventist Matric Higher Secondary School, Puliangudi. ",
    duration: "2021 – 2022",
    grade:"Percentage: 74.5%",
  },
    {
    degree: "Secondary School Leaving Certificate (SSLC) - 10th Grade",
    institute: "SeventhDay Adventist Matric Higher Secondary School, Puliangudi. ",
    duration: "2019 – 2020",
    grade:"Percentage: 73%",
  },
 
];

function Education() {
  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      <p className="education-sub">
        My academic background and learning journey.
      </p>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <div className="edu-card" key={index}>
            <div className="edu-dot" />
            <div className="edu-content">
              <h3>{edu.degree}</h3>
              <span className="edu-institute">{edu.institute}</span>
              <span className="edu-duration">{edu.duration}</span>
              <p>{edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
