import "../css/about.css";

function About() {
  return (
    <section className="about-container">
      <h1 className="about-title">About Me</h1>

      <p className="about-intro">
        Hi, I'm <span className="highlight">Mohamed Shalik</span>, a passionate{" "}
        <span className="highlight">Full Stack Web Developer</span> with a strong foundation 
        in the MERN Stack (MongoDB, Express.js, React.js, and Node.js) and 
        working knowledge of Python and Django. I enjoy transforming ideas into scalable, user-friendly web applications 
        that combine clean design with efficient functionality.
      </p>

      <p className="about-story">
       My journey into web development began with a curiosity about how modern applications are built and
       evolved into a passion for creating complete digital solutions. From designing responsive user interfaces 
       to developing robust backend systems and APIs, I love every part of the development process.
      I believe great software is not only functional but also intuitive, reliable, and enjoyable to use.
      </p>

      <p className="about-story">
        Through hands-on projects, internships, and continuous learning,
        I have gained experience building full-stack applications, integrating databases, 
        authentication systems, and deploying production-ready solutions. 
        I am constantly exploring new technologies, improving my problem-solving skills, 
        and staying updated with industry best practices. <br /><br />
  {" "}
        My goal is to grow as a <span className="highlight">software developer</span>, contribute to impactful projects,
        and build innovative applications that solve real-world problems while delivering exceptional 
        user experiences.
        
      </p>
    </section>
  );
}

export default About;
