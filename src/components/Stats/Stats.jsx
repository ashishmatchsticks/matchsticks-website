import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Stats.css";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    number: 500,
    label: "Projects Delivered",
  },
  {
    number: 100,
    label: "Brands Worked With",
  },
  {
    number: 50,
    label: "Cities Reached",
  },
  {
    number: 10,
    label: "Years of Experience",
  },
];

function Stats() {
  const statsRef = useRef(null);

  useEffect(() => {
    const section = statsRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const statItems = gsap.utils.toArray(".stat");

      statItems.forEach((stat) => {
        const numberElement = stat.querySelector(".stat-number");
        const target = Number(numberElement.dataset.target);

        const counter = {
          value: 0,
        };

        gsap.to(counter, {
          value: target,
          duration: 1.8,
          ease: "power2.out",

          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            once: true,
          },

          onUpdate: () => {
            numberElement.textContent =
              Math.floor(counter.value);
          },
        });

        gsap.from(stat, {
          opacity: 0,
          y: 45,
          duration: 0.8,
          ease: "power3.out",

          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={statsRef}
      className="stats"
    >
      <div className="stats-wrap">
        {STATS.map((stat) => (
          <div
            className="stat"
            key={stat.label}
          >
            <div
              className="stat-number"
              data-target={stat.number}
            >
              0
            </div>

            <div className="stat-label">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;