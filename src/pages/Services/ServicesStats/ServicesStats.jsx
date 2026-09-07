import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ServicesStats.css";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    number: 8,
    label: "Service lines",
  },
  {
    number: 500,
    label: "Projects delivered",
  },
  {
    number: 50,
    label: "Cities covered",
  },
  {
    number: 2,
    label: "Production studios",
  },
];

function ServicesStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const numbers =
        section.querySelectorAll(".services-stats-number");

      numbers.forEach((element) => {
        const target = Number(element.dataset.count);

        ScrollTrigger.create({
          trigger: element,
          start: "top 92%",
          once: true,

          onEnter: () => {
            gsap.fromTo(
              element,
              {
                innerText: 0,
              },
              {
                innerText: target,
                duration: 1.4,
                ease: "power1.out",
                snap: {
                  innerText: 1,
                },
                onUpdate: function () {
                  element.textContent =
                    Math.floor(
                      this.targets()[0].innerText
                    ) + "+";
                },
              }
            );
          },
        });
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-stats"
    >
      <div className="services-stats-wrap">
        {STATS.map((stat) => (
          <div
            className="services-stat"
            key={stat.label}
          >
            <span
              className="services-stats-number"
              data-count={stat.number}
            >
              0+
            </span>

            <span className="services-stats-label">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesStats;