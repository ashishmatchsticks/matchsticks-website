import { useState } from "react";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote:
      "They didn't just execute the campaign. They brought the entire vision to life.",
    name: "Meera Kapoor",
    role: "Marketing Director, Orbit Mobility",
  },
  {
    quote:
      "The team understood our vision and turned it into something far more impactful than we imagined.",
    name: "Rahul Mehta",
    role: "Brand Director, Verve",
  },
  {
    quote:
      "From concept to execution, every detail was handled with incredible precision.",
    name: "Ananya Shah",
    role: "Head of Marketing, Nova",
  },
];

function Testimonial() {
  const [current, setCurrent] = useState(0);

  const previousTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  }; 

  const nextTestimonial = () => {
    setCurrent((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="testimonial-section">
      <div className="testimonial-wrap">

        <span className="testimonial-label">
          CLIENT TESTIMONIAL
        </span>

        <blockquote key={current}>
          “{testimonial.quote}”
        </blockquote>

        <div className="testimonial-author" key={testimonial.name}>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>

        <div className="testimonial-navigation">
          <button
            type="button"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <span>
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}

export default Testimonial;