import "./WorksCTA.css";

function WorksCTA() {
  return (
    <section className="works-cta-section" id="works-contact">
      <div className="works-cta-wrap">

        <h2>
          GOT A PROJECT
          <br />
          WORTH SHOWING
          <br />
          UP FOR?
        </h2>

        <div className="works-cta-buttons">
          <a
            href="/#contact"
            className="works-cta-primary"
          >
            START A PROJECT
          </a>

          <a
            href="mailto:hello@strike.agency"
            className="works-cta-secondary"
          >
            EMAIL US
          </a>
        </div>

      </div>
    </section>
  );
}

export default WorksCTA;