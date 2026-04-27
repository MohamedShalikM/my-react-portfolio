import React from "react";
import "../css/leadership.css";

const leaderships = [
  {
    role: "Team Lead –YOLOv8 Leaf Disease Detection",
    organization: "J.P. College of Engineering, Final Year Project",
    duration: "2026",
    description:
      "Led a team of 4 developers, coordinated tasks, reviewed code, and ensured timely delivery of a full-stack web application.",
  },
  {
    role: "Symposium Coordinator",
    organization: "J.P. College of Engineering, IT Dept Symposium",
    duration: "2024",
    description:
      "Coordinated a technical symposium by managing registrations, scheduling events, and guiding participants.Improved skills in event planning, teamwork, and communication.",
  },
  {
    role: "Debuggining Competition Organizer",
    organization: "J.P. College of Engineering, Geek Social Club",
    duration: "2024",
    description:
      "Organized a debugging competition by preparing coding problem statements and evaluating solutions.Strengthened leadership and problem-solving abilities while promoting peer learning.",
  },
];

function Leadership() {
  return (
    <section className="lead-section">
      <h2 className="lead-title">Leadership</h2>
      <p className="lead-sub">
        Roles where I led teams, guided peers, and drove successful outcomes.
      </p>

      <div className="lead-grid">
        {leaderships.map((item, index) => (
          <div className="lead-card" key={index}>
            <h3>{item.role}</h3>
            <span className="lead-org">{item.organization}</span>
            <span className="lead-duration">{item.duration}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Leadership;
