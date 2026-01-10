import "../css/about.css";

function About() {
  return (
    <section className="about-container">
      <h1 className="about-title">About Me</h1>

      <p className="about-intro">
        Hi, I'm <span className="highlight">Mohamed Shalik</span>, a passionate{" "}
        <span className="highlight">Full Stack Web Developer</span> focused on crafting
        clean, modern, and responsive digital experiences. I specialize in
        front-end development using React and love building smooth UI
        interactions and user-centered designs.
      </p>

      <p className="about-story">
        My journey started with a curiosity about how websites work. Over time,
        I discovered my love for building interfaces that feel intuitive,
        minimal, and visually satisfying. I focus on writing clean code,
        designing smooth UI elements, and building websites that feel good to
        use.
      </p>

      <p className="about-story">
        I’m constantly learning new technologies, improving my design sense, and
        exploring advanced front-end patterns. My goal is simple:
        <span className="highlight">
          {" "}
          to build meaningful digital experiences that are both beautiful and
          functional.
        </span>
      </p>
    </section>
  );
}

export default About;
