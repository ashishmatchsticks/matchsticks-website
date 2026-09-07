import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutCTA.css";

gsap.registerPlugin(ScrollTrigger);

function AboutCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-cta-label",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-cta-title .line span",
        {
          y: "110%",
        },
        {
          y: "0%",
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-cta-actions",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.35,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-cta-section">
      <div className="about-cta-wrap">

        <div className="about-cta-label">
          06 — Start something
        </div>

        <div className="about-cta-main">
          <h2 className="about-cta-title">
            <span className="line">
              <span>WANT TO BUILD</span>
            </span>

            <span className="line">
              <span>SOMETHING WITH</span>
            </span>

            <span className="line">
              <span>
                <span className="about-cta-highlight">US?</span>
              </span>
            </span>
          </h2>

          <div className="about-cta-actions">
            <a
              href="/contact"
              className="about-cta-button about-cta-button-primary"
            >
              START A PROJECT
              <span>→</span>
            </a>

            <a
              href="mailto:hello@strike.agency"
              className="about-cta-button about-cta-button-secondary"
            >
              SEE OPEN ROLES
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutCTA;    