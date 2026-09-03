import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-wrap">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            alt="Creative workspace"
          />
        </div>

        <div className="about-content">
          <span className="about-label">ABOUT US</span>

          <h2>
            IDEAS ARE ONLY AS GOOD
            <br />
            AS THEIR EXECUTION.
          </h2>

          <p>
            We're a creative branding and outdoor advertising company built
            around one belief — production quality is the campaign. Ten years,
            fifty cities, and a production arm capable of taking any idea from
            render to reality.
          </p>

          <a href="#contact" className="about-cta">
            MORE ABOUT US <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;