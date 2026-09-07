import "./WorksCaseStudy.css";

function WorksCaseStudy() {
  return (
    <section className="works-case-section">
      {/* Section heading */}
      <div className="works-case-wrap">
        <div className="works-case-heading">
          <span className="works-case-eyebrow">
            02 — Case Study
          </span>

          <h2>
            One campaign,
            <br />
            start to finish
          </h2>

          <p>
            An editorial look at what a full-service rollout actually
            involves, from survey to install.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="works-case-wrap">
        <div className="works-case-hero">
          <img
            src="https://images.unsplash.com/photo-1784101832763-d1ff32764751?auto=format&fit=crop&w=1800&h=900&q=80"
            alt="Orbit Mobility launch takeover"
          />
        </div>
      </div>

      {/* Project information */}
      <div className="works-case-wrap">
        <div className="works-case-info">

          <h3>
            Orbit Mobility — Launch Takeover
          </h3>

          <div className="works-case-meta">

            <div className="works-case-meta-item">
              <div className="works-case-meta-key">
                Industry
              </div>

              <div className="works-case-meta-value">
                Mobility
              </div>
            </div>

            <div className="works-case-meta-item">
              <div className="works-case-meta-key">
                Location
              </div>

              <div className="works-case-meta-value">
                Ahmedabad
              </div>
            </div>

            <div className="works-case-meta-item">
              <div className="works-case-meta-key">
                Type
              </div>

              <div className="works-case-meta-value">
                Outdoor + Retail
              </div>
            </div>

            <div className="works-case-meta-item">
              <div className="works-case-meta-key">
                Year
              </div>

              <div className="works-case-meta-value">
                2026
              </div>
            </div>

          </div>
        </div>

        {/* Supporting images */}
        <div className="works-case-body">

          <div className="works-case-full">
            <img
              src="https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=2000&h=860&q=80"
              alt="Orbit Mobility campaign execution"
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=900&h=1100&q=80"
              alt="Orbit Mobility outdoor execution"
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=900&h=1100&q=80"
              alt="Orbit Mobility retail execution"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default WorksCaseStudy;