import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Outdoor.css";

gsap.registerPlugin(ScrollTrigger);

const OUTDOOR_PROJECTS = [
  {
    number: "01",
    title: "Highway Takeover",
    image:
      "https://images.unsplash.com/photo-1784101832763-d1ff32764751?auto=format&fit=crop&w=1000&h=1400&q=80",
  },
  {
    number: "02",
    title: "City Billboard",
    image:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=1000&h=1400&q=80",
  },
  {
    number: "03",
    title: "Retail Facade",
    image:
      "https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=1000&h=1400&q=80",
  },
  {
    number: "04",
    title: "Transit Branding",
    image:
      "https://images.unsplash.com/photo-1760966362386-e1012dbc3657?auto=format&fit=crop&w=1000&h=1400&q=80",
  },
  {
    number: "05",
    title: "Urban Installation",
    image:
      "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=1000&h=1400&q=80",
  },
];

function Outdoor() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const track = section.querySelector(".outdoor-track");

      if (window.innerWidth > 900) {
        const getScrollAmount = () =>
          -(track.scrollWidth - window.innerWidth + 100);

        gsap.to(track, {
          x: getScrollAmount,
          ease: "none",

          scrollTrigger: {
            trigger: ".outdoor-pin",
            start: "top top",
            end: () =>
              "+=" +
              (track.scrollWidth - window.innerWidth + 400),
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="outdoor-section"
    >
      <div className="outdoor-wrap">

        <div className="outdoor-header">
          <h2>OUTDOOR<br />THAT MOVES.</h2>

          <p>
            From highways to high streets, we build
            outdoor campaigns designed to command
            attention at scale.
          </p>
        </div>

        <div className="outdoor-pin">
          <div className="outdoor-track">
            {OUTDOOR_PROJECTS.map((project) => (
              <article
                className="outdoor-card"
                key={project.title}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="outdoor-card-label">
                  <span>{project.number}</span>

                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Outdoor;