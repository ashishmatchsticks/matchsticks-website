import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutTimeline.css";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
  {
    year: "2016",
    title: "Founded in Ahmedabad",
    text: "Two founders, one hoarding client, and a rented corner of a print shop. The first job was a single highway panel — installed at 4am.",
    side: "left",
  },
  {
    year: "2018",
    title: "Built our own production floor",
    text: "Tired of chasing vendors for deadlines, we brought fabrication in-house — print, mount and finishing on our own schedule.",
    side: "right",
  },
  {
    year: "2020",
    title: "Launched retail branding",
    text: "Store fit-outs and vehicle liveries became a full division, turning single campaigns into ongoing brand partnerships.",
    side: "left",
  },
  {
    year: "2022",
    title: "Crossed 300 projects",
    text: "Word of mouth from site engineers and brand managers became our biggest source of new work.",
    side: "right",
  },
  {
    year: "2024",
    title: "Opened a Mumbai studio",
    text: "A second production base meant faster turnarounds on the west coast and our first campaigns outside Gujarat.",
    side: "left",
  },
  {
    year: "2026",
    title: "500+ projects, 50 cities",
    text: "Today Strike runs national outdoor campaigns end to end — strategy, design, fabrication and install.",
    side: "right",
  },
];

function AboutTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;

    if (!timeline) return;

    const railFill = timeline.querySelector(".about-timeline-rail-fill");
    const items = timeline.querySelectorAll(".about-timeline-item");

    // Red rail progress
    const railAnimation = gsap.to(railFill, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: timeline,
        start: "top 65%",
        end: "bottom 75%",
        scrub: 0.6,
      },
    });

    // Light up timeline dots
    const triggers = [];

    items.forEach((item) => {
      const trigger = ScrollTrigger.create({
        trigger: item,
        start: "top 65%",

        onEnter: () => {
          item.classList.add("lit");
        },

        onLeaveBack: () => {
          item.classList.remove("lit");
        },
      });

      triggers.push(trigger);
    });

    return () => {
      railAnimation.kill();
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="about-timeline-section">
      <div className="about-timeline-wrap">

        <div className="about-section-heading">
          <span className="about-eyebrow">
            02 — Milestones
          </span>

          <h2>How we got here</h2>
        </div>

        <div
          ref={timelineRef}
          className="about-timeline"
        >
          <div className="about-timeline-rail">
            <div className="about-timeline-rail-fill"></div>
          </div>

          {TIMELINE.map((item) => (
            <div
              key={item.year}
              className={`about-timeline-item ${item.side}`}
            >
              <div className="about-timeline-content">
                <div className="about-timeline-dot"></div>

                <div className="about-timeline-year">
                  {item.year}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>

              <div className="about-timeline-spacer"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutTimeline;