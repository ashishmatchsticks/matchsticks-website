import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WorksStats.css";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    number: 500,
    label: "Projects delivered",
  },
  {
    number: 50,
    label: "Cities covered",
  },
  {
    number: 120,
    label: "Repeat clients",
  },
  {
    number: 10,
    label: "Years running",
  },
];

function WorksStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const numbers = section.querySelectorAll(".works-stats-number");

    const triggers = [];

    numbers.forEach((element) => {
      const target = Number(element.dataset.count);

      const trigger = ScrollTrigger.create({
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
                  Math.floor(this.targets()[0].innerText) + "+";
              },
            }
          );
        },
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="works-stats-section"
    >
      <div className="works-stats-wrap">

        {STATS.map((stat) => (
          <div
            className="works-stats-item"
            key={stat.label}
          >
            <span
              className="works-stats-number"
              data-count={stat.number}
            >
              0
            </span>

            <span className="works-stats-label">
              {stat.label}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
}

export default WorksStats;