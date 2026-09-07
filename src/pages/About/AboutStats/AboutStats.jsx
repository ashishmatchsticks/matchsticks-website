import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutStats.css";

gsap.registerPlugin(ScrollTrigger);

function AboutStats() {
  const statsRef = useRef(null);

  useEffect(() => {
    const section = statsRef.current;

    if (!section) return;

    const counters = section.querySelectorAll(".about-stat-number");

    const animations = [];

    counters.forEach((counter) => {
      const target = Number(counter.dataset.count);

      const animation = gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.4,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 92%",
            once: true,
          },
          onUpdate() {
            counter.textContent =
              `${Math.floor(this.targets()[0].innerText)}+`;
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
    <section ref={statsRef} className="about-stats">
      <div className="about-stats-wrap">
        <div className="about-stat">
          <span className="about-stat-number" data-count="500">
            0+
          </span>
          <span className="about-stat-label">Projects</span>
        </div>

        <div className="about-stat">
          <span className="about-stat-number" data-count="100">
            0+
          </span>
          <span className="about-stat-label">Brands</span>
        </div>

        <div className="about-stat">
          <span className="about-stat-number" data-count="50">
            0+
          </span>
          <span className="about-stat-label">Cities</span>
        </div>

        <div className="about-stat">
          <span className="about-stat-number" data-count="45">
            0+
          </span>
          <span className="about-stat-label">Team members</span>
        </div>
      </div>
    </section>
  );
}

export default AboutStats;