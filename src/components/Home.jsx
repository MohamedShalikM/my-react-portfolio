import { use } from 'react';
import '../css/home.css';
import {useState,useEffect} from 'react';
import linkedinIcon from '../assets/logos/linkedin.svg';
import githubIcon from '../assets/logos/github.svg';
import uparrow from '../assets/logos/Up_arrow.svg';

function Home(){

  const roles = ["Full Stack Web Developer","Reactjs Developer","Python Progammer","Nodejs Developer"]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return(
   <>

     <nav id="home">
      <span>Mohamed Shalik</span> 
      <ul>
        <li className="active"><a href="/" >home</a></li>
        <li><a href="#contact">contact me</a></li>
      </ul>
     </nav>
      <div className="hero">
            <span className="name">Hi, I am Mohamed Shalik</span>
            <span className="role">{roles[index]}</span>
            <span className="desc">“I build modern, responsive web experiences using React, JavaScript, and clean UI design.”</span><br />
          <button><a href="#project">View My Work</a></button>
      </div>   
      <div className="social-links">
      <a
        href="https://www.linkedin.com/in/mohamedshalik-m/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
      <img src={linkedinIcon} alt="LinkedIn" />
      </a>

      <a
      href="https://github.com/MohamedShalikM/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      >
      <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
    <a href="#home" className="scroll-top-link">
    <div className="up-arrow">
    <img src={uparrow} alt="Scroll to top" />
    </div>
    </a>

      
   </>)
}
export default Home