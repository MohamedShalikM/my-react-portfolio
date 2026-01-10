import React from "react";
import "../css/certifications.css";

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Eagle HiTech SoftClou Pvt Ltd",
    year: "2025",
  },
  {
    title: "Python Full Stack",
    issuer: "IPCS Global Institute",
    year: "2025",
  },
  {
    title: "Python Programming",
    issuer: "Besant Technologies",
    year: "2025",
  },
   {
    title: "CSS",
    issuer: "Scaler Topics",
    year: "2025",
  },
  {
    title: "Java Programming",
    issuer: "Infosys Springboard",
    year: "2024",
  },
  {
    title: "HTML, JavaScript",
    issuer: "Infosys Springboard",
    year: "2024",
  },
];

function Certifications() {
  return (
    <section className="cert-section">
      <h2 className="cert-title">Certifications</h2>
      <p className="cert-sub">
        Courses and certifications that strengthened my technical skills.
      </p>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-badge">✔</div>
            <h3>{cert.title}</h3>
            <span className="cert-issuer">{cert.issuer}</span>
            <span className="cert-year">{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
