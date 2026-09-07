import "./ServicesCTA.css";

function ServicesCTA() {
  return (
    <section className="services-cta-section" id="services-contact">
      <div className="services-cta-wrap">

        <p className="services-cta-eyebrow">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          GOT A BRIEF?
          <br />
          LET&apos;S SCOPE IT OUT.
        </h2>

        <div className="services-cta-buttons">
          <a href="/#contact" className="services-cta-primary">
            START A PROJECT <span>↗</span>
          </a>

          <a
            href="mailto:hello@strike.agency"
            className="services-cta-secondary"
          >
            EMAIL US <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default ServicesCTA;