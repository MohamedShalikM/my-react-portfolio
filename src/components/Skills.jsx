import reactLogo from "../assets/logos/react.svg";
import htmlLogo from "../assets/logos/html5.svg";
import cssLogo from "../assets/logos/css3.svg";
import jsLogo from "../assets/logos/js.svg";
import pythonLogo from "../assets/logos/python.svg";
import djangoLogo from "../assets/logos/django.svg";
import mongoLogo from "../assets/logos/mongodb.svg";
import mysqlLogo from "../assets/logos/mysql.svg";
import gitLogo from "../assets/logos/git.svg";
import nodeLogo from "../assets/logos/nodejs.svg";
import tsLogo from "../assets/logos/Typescript.png";
import '../css/skills.css';

const skills = [
  
  { id: "html",   name: "HTML",        logo: htmlLogo,   level: 95 },
  { id: "css",    name: "CSS",         logo: cssLogo,    level: 92 },
  { id: "js",     name: "JavaScript",  logo: jsLogo,     level: 90 },
  { id: "react",  name: "React.js",    logo: reactLogo,  level: 90 },
  { id: "mongo",  name: "MongoDB",     logo: mongoLogo,  level: 80 },
  { id: "node",   name: "Node.js",     logo: nodeLogo,   level: 84 },
  { id: "python", name: "Python",      logo: pythonLogo, level: 85 },
  { id: "django", name: "Django",      logo: djangoLogo, level: 50 },
  { id: "mysql",  name: "MySQL",       logo: mysqlLogo,  level: 82 },
  { id: "git",    name: "Git",         logo: gitLogo,    level: 90 },
  { id: "ts",    name: "TypeScript",   logo: tsLogo,    level: 30 },
 
];

export default function TechnicalSkills() {
  return (
    <section className="tech-section" aria-labelledby="tech-heading">
      <div className="tech-card">
        <h2 id="tech-heading" className="tech-title">Technical Skills</h2>
        <p className="tech-sub">Technologies I use frequently — click a skill for more details.</p>

        <div className="skills-grid">
          {skills.map((s) => (
            <button
              key={s.id}
              className="skill"
              onClick={() => window.alert(`${s.name} — proficiency: ${s.level}%`)}
              aria-label={`${s.name} skill, ${s.level} percent`}
            >
              <div className="skill-left">
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  className="skill-logo"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <span className="skill-name">{s.name}</span>
              </div>

              <div className="skill-right">
                <div className="skill-bar" aria-hidden="true">
                  <div className="skill-fill" style={{ width: `${s.level}%` }} />
                </div>
                <span className="skill-level">{s.level}%</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
