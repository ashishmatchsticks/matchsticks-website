import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-form-section" id="form">
      <div className="contact-form-wrap">

        <div className="contact-form-grid">

          {/* ================================
              FORM
          ================================= */}

          <div className="contact-form-column">

            <div className="contact-form-heading">
              <span className="contact-form-eyebrow">
                01 — Start A Project
              </span>

              <h2>Send us a brief</h2>
            </div>

            {!submitted ? (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-row">

                  <div className="contact-field">
                    <label htmlFor="name">
                      Full Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="company">
                      Company
                    </label>

                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company name"
                    />
                  </div>

                </div>


                <div className="contact-form-row">

                  <div className="contact-field">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="phone">
                      Phone
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 00000 00000"
                    />
                  </div>

                </div>


                <div className="contact-form-row">

                  <div className="contact-field">
                    <label htmlFor="service">
                      Service Needed
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                    >
                      <option value="">
                        Select a service
                      </option>

                      <option>Outdoor Advertising</option>
                      <option>Branding & Signage</option>
                      <option>Retail Branding</option>
                      <option>Vehicle Branding</option>
                      <option>Event Branding</option>
                      <option>Large Format Printing</option>
                      <option>Campaign Execution</option>
                      <option>Installation & Production</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>


                  <div className="contact-field">
                    <label htmlFor="budget">
                      Estimated Budget
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                    >
                      <option value="">
                        Select a range
                      </option>

                      <option>Under ₹1L</option>
                      <option>₹1L – ₹5L</option>
                      <option>₹5L – ₹20L</option>
                      <option>₹20L+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                </div>


                <div className="contact-field">
                  <label htmlFor="message">
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Site, timeline, format, and anything else worth knowing."
                    required
                  ></textarea>
                </div>


                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  SEND BRIEF →
                </button>

                <p className="contact-form-note">
                  Prefer email? Write to us directly at{" "}
                  <a href="mailto:hello@strike.agency">
                    hello@matchsticks.in
                  </a>
                </p>

              </form>
            ) : (
              <div className="contact-form-success">
                <h3>Brief received.</h3>

                <p>
                  Thanks — someone from the team will get back to
                  you within one business day with next steps.
                </p>
              </div>
            )}

          </div>


          {/* ================================
              CONTACT INFORMATION
          ================================= */}

          <div className="contact-info-column">

            {/* Direct */}

            <div className="contact-info-block">

              <h4>Direct</h4>

              <a
                href="mailto:hello@matchsticks.in"
                className="contact-big-link"
              >
                hello@matchsticks.in
              </a>
              <br />
              <a
                href="tel:+919876543210"
                className="contact-big-link contact-phone-link"
              >
                +91 99999 999999
              </a>

            </div>


            {/* Studios */}

            <div className="contact-info-block">

              <h4>Studios</h4>

              <div className="contact-studio">
                <span className="contact-city">
                  Ahmedabad
                </span>

                <span className="contact-address">
                  Prahladnagar, Ahmedabad, Gujarat 380015
                </span>
              </div>

            </div>


            {/* Hours */}

            <div className="contact-info-block">

              <h4>Hours</h4>

              <p>
                Monday – Saturday, 9:30am – 7pm IST.
                <br />
                Site visits and installs run outside these hours
                as needed.
              </p>

            </div>


            {/* Social */}

            <div className="contact-info-block">

              <h4>Follow</h4>

              <div className="contact-social-row">
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">YouTube</a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;