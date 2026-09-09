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
import expressLogo from "../assets/logos/expressLogo.png";
import nextjsLogo from "../assets/logos/nextjs.png";
import tailwindcssLogo from "../assets/logos/tailwindcss.png"
import '../css/skills.css';
import { div } from "framer-motion/client";

const skills = [
  
  { id: "html",   name: "HTML",        logo: htmlLogo,   level: 'Intermediate', },
  { id: "css",    name: "CSS",         logo: cssLogo,    level: 'Intermediate', },
  { id: "js",     name: "JavaScript",  logo: jsLogo,     level: 'Intermediate',},
  { id: "react",  name: "React.js",    logo: reactLogo,  level: 'Intermediate',},
  { id: "node",   name: "Node.js",     logo: nodeLogo,   level: 'Intermediate', },
  { id:"express", name: "Express.js",  logo: expressLogo,level:'Intermediate',},
  { id: "mongo",  name: "MongoDB",     logo: mongoLogo,  level: 'Intermediate', },
  { id: "python", name: "Python",      logo: pythonLogo, level: 'Intermediate', },
  { id: "django", name: "Django",      logo: djangoLogo, level: 'Beginner', },
  { id: "mysql",  name: "MySQL",       logo: mysqlLogo,  level: 'Intermediate', },
  { id: "git",    name: "Git",         logo: gitLogo,    level: 'Intermediate', },
  { id: "ts",    name: "TypeScript",   logo: tsLogo,    level: 'Beginner',   },
 
];

const skillTopics = [
  { id: "html", topic1: "Semantic HTML", topic2: "Forms & Validation", topic3: "Tables", topic4:"Multimedia",bgcolor:'#E34C26'},
  { id: "css", topic1: "Flexbox", topic2: "Media Query", topic3: "Animations & Transitions", topic4:"Glassmorphism",bgcolor:'#1572B6'},
  { id: "js", topic1: "DOM Manipulation", topic2: "Event Handling", topic3: "Fetch and Axios API", topic4:"ES6+ Features",bgcolor:'#F7DF1E'},
  { id: "react", topic1: "Components", topic2: "React Router", topic3: "useState", topic4:"useEffect",bgcolor:'#61DBFB'},
  { id: "node", topic1: "Modules", topic2: "REST APIs", topic3: "File System Basics", topic4:"Express.js Integration",bgcolor:'#339933'},
  { id: "express", topic1: "Routing", topic2: "Middleware", topic3: "CRUD APIs", topic4:"Authentication Basics",bgcolor:'#000000'},
  { id: "mongo", topic1: "CRUD Operations", topic2: "Schema/Model Creation", topic3: "Mongoose", topic4:"Aggregation Basics",bgcolor:'#47A248'},
  { id: "python", topic1 :"Functions", topic2: "List, Tuples, Sets, Dictionaries", topic3: "OOP", topic4:"File Handling",bgcolor:'#3776AB'},
  { id: "django", topic1: "Project Structure", topic2: "Views", topic3: "Models", topic4:"Templates",bgcolor:'#092E20'},
  { id: "mysql", topic1: "Database Creation", topic2: "CRUD", topic3: "Subquery", topic4:"Joins",bgcolor:'#4479A1'},
  { id: "git", topic1: "git clone", topic2: "git commit", topic3: "git merge", topic4:"branches",bgcolor:'#F05032'},
  { id: "ts", topic1: "Basic Types", topic2: "Functions", topic3: "Array/Objects", topic4:"Type aliases",bgcolor:'#3178C6'},
  {id: "nextjs",topic1:'App Router',topic2:'Routing',topic3:'Server and Client Component',bgcolor:'black'},
  {id:"tailwind",topic1:'Utility-First CSS',topic2:'Responsive Design',topic3:'Components',bgcolor:'#38BDF8'},
]

const cl=[{id:'html',topic:'SEO optimization'},{id:'css',topic:'Container Queries'},{id:'js',topic:'Debouncing'},{id:'react',topic:'Redux toolkit'},{id:'node',topic:'event-driven architecture'},{id:'express',topic:'Security'},{id:'mongo',topic:'Query Optimization'},{id:'python',topic:'Decorators'},{id:'django',topic:'authentication'},{id:'mysql',topic:'Indexing'},{id:'git',topic:'Rebasing'},{id:'ts',topic:'Generics'}]

const progSkills = [{id:'nextjs',name:'Next js',logo:nextjsLogo},{id:'tailwind',name:'Tailwind CSS',logo:tailwindcssLogo}]


export default function TechnicalSkills() {
  return (
    <section className="tech-section" aria-labelledby="tech-heading">
      <div className="tech-card">
        <h2 id="tech-heading" className="tech-title">Technical Skills</h2>
        <p className="tech-sub">Technologies I use frequently — click a skill for more details.</p>

        <div className="skills-flex">

          {
          skills.map((s) => {
            const topics = skillTopics.find((t) => t.id === s.id);
            const currLearn = cl.find((c) => c.id === s.id);
           
            return(
            <div
              key={s.id}
              className="skill"
              onClick={() => window.alert(`${s.name} — proficiency: ${s.level}`)}
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

              <div className="level">
                <span className="skill-level">{s.level}</span>
              </div>
              <div className="topics">
                <h2 style={{fontSize:'11px'}}>Highlighted Topics:</h2>
                  <div key={topics.id}>
                    <button  style={{ backgroundColor: topics.bgcolor }} className="topics-button">{topics.topic1}</button>
                    <button  style={{ backgroundColor: topics.bgcolor }} className="topics-button">{topics.topic2}</button>
                    <button  style={{ backgroundColor: topics.bgcolor }} className="topics-button">{topics.topic3}</button>
                    <button   style={{ backgroundColor: topics.bgcolor }} className="topics-button">{topics.topic4}</button>
                  </div>
              </div>

              <div className="cl">
                <h2 style={{fontSize:'11px'}}>Currently Learning ✦</h2>
                <div key={currLearn.id}>
                    <button style={{backgroundColor:topics.bgcolor,marginTop:'10px'}} className="topics-button">{currLearn.topic}</button>
                </div>
              </div>

            </div>)
})}
        </div>

        <h2 style={{marginTop:'10px'}}>Skills in Progress</h2>
        <p className="tech-sub">Skills Which I Currently Learning</p>
        <div className="skills-flex">
          {
            progSkills.map((p)=>{
              const topics= skillTopics.find((t) => t.id === p.id);
              return(
                <div key={p.id} className="skill">
                    <div className="skill-left">
                      <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="skill-logo"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <span className="skill-name">{p.name}</span>
                    </div>

                  <div className="topics">
                    <div key={topics.id}>
                    <button  style={{ backgroundColor: topics.bgcolor }} className="topics-button">{topics.topic1}</button>
                    <button  style={{ backgroundColor: topics.bgcolor }} className="topics-button">{topics.topic2}</button>
                    <button  style={{ backgroundColor: topics.bgcolor }} className="topics-button">{topics.topic3}</button>
                  </div>
                    </div>
                </div>

            

              )
            })
          }
        </div>

      </div>
    </section>
  );
}
