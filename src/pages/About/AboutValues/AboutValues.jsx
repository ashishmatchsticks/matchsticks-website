import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutValues.css";

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    number: "01",
    title: "Craft Obsession",
    text: "We treat a wall the same way a printer treats a page — every edge, seam and finish is a decision, not an accident.",
  },
  {
    number: "02",
    title: "Radical Ownership",
    text: "Whoever picks up a project sees it through to install. No handoffs, no \"that's not my part of the job.\"",
  },
  {
    number: "03",
    title: "Speed With Care",
    text: "Outdoor deadlines don't move. We plan backwards from install day and protect the details anyway.",
  },
  {
    number: "04",
    title: "No Excuses On Site",
    text: "Weather, access, permits — site problems are our problems to solve, not the client's to hear about.",
  },
];

function AboutValues() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards = section.querySelectorAll(".about-value-card");

    const animations = [];

    cards.forEach((card) => {
      const animation = gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
        },
      });

      animations.push(animation);
    });

    return () => {
      animations.forEach((animation) => animation.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-values-section"
    >
      <div className="about-values-wrap">

        <div className="about-values-heading">
          <span className="about-values-eyebrow">
            03 — Standards
          </span>

          <h2>What we hold every project to</h2>
        </div>

        <div className="about-values-grid">
          {VALUES.map((value) => (
            <div
              className="about-value-card"
              key={value.number}
            >
              <div className="about-value-number">
                {value.number}
              </div>

              <h3>{value.title}</h3>

              <p>{value.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutValues;