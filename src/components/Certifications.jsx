import React from "react";
import "../css/certifications.css";
import Cert1 from '../assets/logos/nodejs.svg';
import Cert2 from '../assets/logos/react.svg';
import Cert3 from '../assets/logos/mongodb.svg';
import Cert4 from '../assets/logos/html5.svg';
import Cert5 from '../assets/logos/css3.svg';
import Cert6 from '../assets/logos/js.svg';
import Cert7 from '../assets/logos/python.svg';
import Cert8 from '../assets/logos/django.svg';
import Cert9 from '../assets/logos/react.svg';

const certifications = [
  {
    title:'Python Full Stack Training Certificate',
    issuer: "Besant Technologies",
    year:2026,
    img:Cert7,
    link:"https://drive.google.com/file/d/13pnbELY2rncJV-JVTs-55kQ0ntG-ryLm/view?usp=sharing"
  },
  {
   title:"Frontend Developer",
   issuer: "Vinsup InfoTech Pvt Ltd",
   year:2026,
   img:Cert9,
   link:"https://drive.google.com/file/d/1Pd070bzL6QrQW2B1jWMZu9jczoH9tIpL/view?usp=drive_link"
  },
  {
    title: "NodeJS Foundation Course",
    issuer: "ScholarHat",
    year: 2026,
    img:Cert1,
    link: "https://drive.google.com/file/d/1GP4eepFQL2HrwfwE7L6EjZhsKUfq2Vic/view",
  },
  {
    title: "ReactJS Foundation Course",
    issuer: "ScholarHat",
    year: 2026,
    img:Cert2,
    link: "https://drive.google.com/file/d/1tGy7FXrunBKgnhT1xHbOkEjQtGrT-EYK/view?usp=drive_link",
  },
  {
    title: "MongoDB Foundation Course",
    issuer: "ScholarHat",
    year: 2026,
    img: Cert3,
    link: "https://drive.google.com/file/d/1KoD3Z2K_9Ff0c0CvxjlyOOJgcjwhKIbh/view?usp=drive_link",
  },
  {
    title: "HTML",
    issuer: "Infosys Springboard",
    year: "2024",
    img:Cert4,
    link: "https://drive.google.com/file/d/1-hkvb4nappCmR87-AmwEzywJVkZmbZtf/view?usp=drive_link",
  },
  {
    title: "CSS",
    issuer: "Scaler Topics",
    year: "2025",
    img:Cert5,
    link: "https://drive.google.com/file/d/1Z_Siu6ROPcknFg0L936RxcGaRMCIrEm9/view?usp=drive_link",
  },
  {
    title: "Javascript",
    issuer: "Infosys Springboard",
    year: 2024,
    img:Cert6,
    link: "https://drive.google.com/file/d/1XRM5OgZTXsLlhv0Ja90WTofl6ghCHiRJ/view?usp=drive_link",
  },
  {
    title: "Python Programming",
    issuer: "Besant Technologies",
    year: "2025",
    img:Cert7,
    link: "https://drive.google.com/file/d/1HPBWk_daGM_rtMagkyB1Jl7i5or3fGo9/view?usp=drive_link",
  },

  {
    title: "Full Stack Web Development",
    issuer: "Eagle HiTech SoftClou Pvt Ltd",
    year: "2025",
    img:Cert1,
    link: "https://drive.google.com/file/d/1xanLw0ornFmtW_StSnNo0tK4WlHqxkxR/view?usp=drive_link",
  },

  {
    title: "Python Full Stack",
    issuer: "IPCS Global Institute",
    year: "2025",
    img:Cert8,
    link: "https://drive.google.com/file/d/1I0idXlkZ6SfFMvJliB1dAmYP66Lmed-f/view?usp=drive_link",
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
            <img className="cert-img" src={cert.img} alt={cert.title} />
            <span className="cert-issuer">{cert.issuer}</span>
            <span className="cert-year">{cert.year}</span>
            <a href={cert.link} target="_blank"><span className='certBtn'>View Certificate</span></a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
