import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutCulture.css";

gsap.registerPlugin(ScrollTrigger);

function AboutCulture() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const images = section.querySelectorAll(".about-culture-image");

    const animations = [];

    images.forEach((image, index) => {
      const animation = gsap.fromTo(
        image,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 88%",
            once: true,
          },
        }
      );

      animations.push(animation);
    });

    return () => {
      animations.forEach((animation) => animation.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-culture-section">
      <div className="about-culture-wrap">

        <div className="about-culture-heading">
          <span className="about-culture-eyebrow">
            05 — Culture
          </span>

          <h2>
            Built for the work
            <br />
            behind the work.
          </h2>
        </div>

        <div className="about-culture-grid">

          <div className="about-culture-image about-culture-a">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
              alt="Strike team working in a creative studio"
            />
          </div>

          <div className="about-culture-image about-culture-b">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85"
              alt="Creative team collaborating"
            />
          </div>

          <div className="about-culture-image about-culture-c">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"
              alt="Team discussion in a studio"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutCulture;