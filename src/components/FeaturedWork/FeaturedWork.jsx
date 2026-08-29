import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FeaturedWork.css";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    className: "w1",
    image:
      "https://images.unsplash.com/photo-1784101832763-d1ff32764751?auto=format&fit=crop&w=1200&h=820&q=80",
    tag: "Outdoor Campaign · Ahmedabad · 2026",
    title: "Brand X — Highway Takeover",
  },
  {
    className: "w2",
    image:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=700&h=900&q=80",
    tag: "Retail Branding · 2025",
    title: "Verve Retail",
  },
  {
    className: "w3",
    image:
      "https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=700&h=900&q=80",
    tag: "Vehicle Branding · 2025",
    title: "Fleet Wrap — Orbit",
  },
  {
    className: "w4",
    image:
      "https://images.unsplash.com/photo-1760966362386-e1012dbc3657?auto=format&fit=crop&w=1200&h=560&q=80",
    tag: "Event Branding · Mumbai · 2026",
    title: "Nova Product Launch",
  },
  {
    className: "w5",
    image:
      "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=800&h=1000&q=80",
    tag: "Signage · 2025",
    title: "District Mall Facade",
  },
  {
    className: "w6",
    image:
      "https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?auto=format&fit=crop&w=800&h=1000&q=80",
    tag: "Installation · 2026",
    title: "Pulse Experience Wall",
  },
];

function FeaturedWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".work-item");

      items.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          delay: (index % 3) * 0.08,
          ease: "power3.out",

          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            once: true,
          },
        });
      });

      gsap.from(".work-header", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".featured-work",
          start: "top 80%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="featured-work"
      id="work"
    >
      <div className="featured-work-wrap">

        <div className="work-header">
          <h2>SELECTED WORK</h2>

          <p>
            A curated set of campaigns, installations and
            brand environments delivered end to end.
          </p>
        </div>

        <div className="work-grid">
          {PROJECTS.map((project) => (
            <article
              className={`work-item ${project.className}`}
              key={project.title}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <div className="work-meta">
                <div className="work-tag">
                  {project.tag}
                </div>

                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedWork;