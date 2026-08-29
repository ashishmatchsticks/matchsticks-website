import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Branding.css";

gsap.registerPlugin(ScrollTrigger);

const BRANDING_IMAGES = [
  {
    image:
      "https://images.unsplash.com/photo-1776983585314-8704eca507ac?auto=format&fit=crop&w=700&h=900&q=80",
    alt: "Branding installation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1770958420558-ad0fb28966dc?auto=format&fit=crop&w=700&h=900&q=80",
    alt: "Branding environment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1784101832763-d1ff32764751?auto=format&fit=crop&w=700&h=900&q=80",
    alt: "Outdoor branding",
  },
];

function Branding() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".branding-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".branding-copy", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".branding-image", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".branding-grid",
          start: "top 85%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="branding"
    >
      <div className="branding-wrap">

        <div className="branding-header">
          <h2 className="branding-heading">
            BRANDING IN THE
            <br />
            REAL WORLD.
          </h2>

          <p className="branding-copy">
            Store fit-outs, wall graphics, vehicle liveries
            and corporate environments — execution quality,
            not renders.
          </p>
        </div>

        <div className="branding-grid">
          {BRANDING_IMAGES.map((item, index) => (
            <div
              className="branding-image"
              key={index}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Branding;